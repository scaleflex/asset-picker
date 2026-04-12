import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  root: 'demo',
  base: '/asset-picker/',
  build: {
    outDir: resolve(__dirname, 'demo-dist'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@scaleflex/uploader/define': resolve(__dirname, '../uploader/dist/define.js'),
      '@scaleflex/uploader': resolve(__dirname, '../uploader/dist/index.js'),
    },
  },
});
