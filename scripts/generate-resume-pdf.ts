import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { dirname, resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { parseArgs } from 'node:util';

import { chromium, type Page } from 'playwright';

import { parseResumeData } from '#src/resume/resume-data';

const requiredEnvKeys = [
  'VITE_RESUME_LOCATION',
  'VITE_RESUME_PHONE',
  'VITE_RESUME_EMAIL',
  'VITE_RESUME_WEBSITE',
] as const;

const resumePath = '/src/resume/index.html';

async function generateResumePdf() {
  const options = readOptions();
  const env = {
    ...(await readLocalEnv()),
    ...process.env,
  };

  if (options.dataPath) {
    env.VITE_RESUME_DATA = JSON.stringify(await readResumeData(options.dataPath));
  } else {
    validateEnv(env);
  }

  const port = await getAvailablePort(4327);
  const server = startViteServer(port, env);

  try {
    await waitForServer(port);
    await exportResume(port, options);
  } finally {
    server.kill('SIGTERM');
  }
}

function readOptions() {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      data: { type: 'string' },
      output: { type: 'string' },
      html: { type: 'string' },
    },
    strict: true,
  });

  return {
    dataPath: values.data ? resolve(process.cwd(), values.data) : undefined,
    outputPath: resolve(process.cwd(), values.output ?? 'generated/resume.pdf'),
    htmlPath: values.html ? resolve(process.cwd(), values.html) : undefined,
  };
}

async function readResumeData(path: string) {
  return parseResumeData(JSON.parse(await readFile(path, 'utf8')));
}

async function readLocalEnv() {
  try {
    const content = await readFile(resolve(process.cwd(), '.env.local'), 'utf8');
    return parseEnvFile(content);
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException;

    if (nodeError.code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

function parseEnvFile(content: string) {
  const env: Record<string, string> = {};

  for (const line of content.split('\n')) {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmedLine.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const rawValue = trimmedLine.slice(separatorIndex + 1).trim();
    env[key] = rawValue.replace(/^["']|["']$/g, '');
  }

  return env;
}

function validateEnv(env: NodeJS.ProcessEnv) {
  const missingKeys = requiredEnvKeys.filter((key) => !env[key]);

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing resume env vars: ${missingKeys.join(', ')}. Provide --data or create .env.local.`,
    );
  }
}

async function getAvailablePort(preferredPort: number) {
  for (let port = preferredPort; port < preferredPort + 20; port += 1) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }

  throw new Error(
    `Could not find an available port from ${preferredPort} to ${preferredPort + 19}.`,
  );
}

async function isPortAvailable(port: number) {
  return new Promise<boolean>((resolvePortCheck) => {
    const server = createServer();

    server.once('error', () => resolvePortCheck(false));
    server.once('listening', () => {
      server.close(() => resolvePortCheck(true));
    });
    server.listen(port, '127.0.0.1');
  });
}

function startViteServer(port: number, env: NodeJS.ProcessEnv) {
  const args = [
    'vite',
    '--config',
    'vite.resume.config.ts',
    '--host',
    '127.0.0.1',
    '--strictPort',
    '--port',
    String(port),
  ];

  return spawn('bunx', args, {
    cwd: process.cwd(),
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

async function waitForServer(port: number) {
  const url = `http://127.0.0.1:${port}${resumePath}`;
  const deadline = Date.now() + 20_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        return;
      }
    } catch {}

    await sleep(250);
  }

  throw new Error(`Timed out waiting for Vite at ${url}`);
}

async function exportResume(port: number, options: ReturnType<typeof readOptions>) {
  await mkdir(dirname(options.outputPath), { recursive: true });
  if (options.htmlPath) {
    await mkdir(dirname(options.htmlPath), { recursive: true });
  }

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });

    await page.goto(`http://127.0.0.1:${port}${resumePath}`, {
      waitUntil: 'networkidle',
    });
    await page.evaluate(() => document.fonts.ready);

    await assertFitsSingleA4Page(page);

    if (options.htmlPath) {
      await writeFile(options.htmlPath, await page.content(), 'utf8');
    }

    await page.pdf({
      path: options.outputPath,
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    console.log(`Generated ${options.outputPath}`);
    if (options.htmlPath) {
      console.log(`Captured ${options.htmlPath}`);
    }
  } finally {
    await browser.close();
  }
}

async function assertFitsSingleA4Page(page: Page) {
  const dimensions = await page.locator('[data-resume-page]').evaluate((element) => {
    const probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;visibility:hidden;height:297mm;width:1px';
    document.body.append(probe);
    const expectedHeight = probe.getBoundingClientRect().height;
    probe.remove();

    return {
      actualHeight: element.getBoundingClientRect().height,
      expectedHeight,
    };
  });

  if (dimensions.actualHeight > dimensions.expectedHeight + 1) {
    throw new Error(
      `Resume exceeds one A4 page by ${Math.ceil(dimensions.actualHeight - dimensions.expectedHeight)}px. Shorten the tailored content and retry.`,
    );
  }
}

function sleep(ms: number) {
  return new Promise((resolveSleep) => {
    setTimeout(resolveSleep, ms);
  });
}

generateResumePdf().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
