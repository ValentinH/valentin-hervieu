import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tailwindcss(), viteReact()],
});

export default config;
