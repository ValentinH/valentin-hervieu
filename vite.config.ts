import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

const vercelImageConfig = {
  domains: [],
  sizes: [92, 184, 320, 640, 960, 1280, 1600, 1920],
  qualities: [75],
  formats: ['image/avif' as const, 'image/webp' as const],
  remotePatterns: [
    {
      protocol: 'https' as const,
      hostname: 'lh3.googleusercontent.com',
      pathname: '^/pw/.*$',
    },
  ],
  localPatterns: [
    {
      pathname: '^/assets/.*$',
      search: '',
    },
  ],
};

const config = defineConfig({
  define: {
    'import.meta.env.VERCEL': JSON.stringify(process.env.VERCEL === '1'),
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    nitro({
      vercel: {
        config: {
          version: 3,
          images: vercelImageConfig,
        },
      },
    }),
    tanstackStart({
      pages: [{ path: '/' }],
      prerender: {
        enabled: true,
      },
    }),
    viteReact(),
  ],
});

export default config;
