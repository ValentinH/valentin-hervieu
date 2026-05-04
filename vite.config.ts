import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    nitro(),
    tanstackStart({
      pages: [{ path: '/' }],
      prerender: {
        enabled: true,
      },
    }),
    viteReact({
      jsxImportSource: '@emotion/react',
    }),
  ],
});

export default config;
