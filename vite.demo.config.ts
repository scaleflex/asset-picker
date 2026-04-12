import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  plugins: [tailwindcss()],
  root: 'demo',
  base: command === 'build' ? '/asset-picker/' : '/',
  server: {
    open: true,
  },
  build: {
    outDir: resolve(import.meta.dirname, 'demo-dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
      '@scaleflex/uploader/define': resolve(import.meta.dirname, '../uploader/dist/define.js'),
      '@scaleflex/uploader': resolve(import.meta.dirname, '../uploader/dist/index.js'),
    },
  },
}));
