import { mkdir, readFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { dirname, resolve } from 'node:path';
import { spawn } from 'node:child_process';

import { chromium } from 'playwright';

const requiredEnvKeys = [
  'VITE_RESUME_LOCATION',
  'VITE_RESUME_PHONE',
  'VITE_RESUME_EMAIL',
  'VITE_RESUME_WEBSITE',
] as const;

const outputPath = resolve(process.cwd(), 'generated/resume.pdf');
const resumePath = '/src/resume/index.html';

async function generateResumePdf() {
  const env = {
    ...(await readLocalEnv()),
    ...process.env,
  };
  validateEnv(env);

  const port = await getAvailablePort(4327);
  const server = startViteServer(port, env);

  try {
    await waitForServer(port);
    await exportPdf(port);
  } finally {
    server.kill('SIGTERM');
  }
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
      `Missing resume env vars: ${missingKeys.join(', ')}. Create .env.local from .env.local.example.`,
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

async function exportPdf(port: number) {
  await mkdir(dirname(outputPath), { recursive: true });

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });

    await page.goto(`http://127.0.0.1:${port}${resumePath}`, {
      waitUntil: 'networkidle',
    });
    await page.pdf({
      path: outputPath,
      width: '210mm',
      height: '297mm',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });
    console.log(`Generated ${outputPath}`);
  } finally {
    await browser.close();
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
