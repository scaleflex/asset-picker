import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  plugins: [tailwindcss()],
  root: 'demo',
  base: isDev ? '/' : '/asset-picker/',
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
