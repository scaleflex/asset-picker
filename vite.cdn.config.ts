import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

/**
 * CDN build — single self-contained IIFE that registers <sfx-asset-picker>.
 * No externals, no code splitting. Output: dist-cdn/asset-picker.min.js
 */
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist-cdn',
    emptyDir: true,
    lib: {
      entry: resolve(__dirname, 'src/define.ts'),
      formats: ['iife'],
      name: 'SfxAssetPicker',
      fileName: () => 'asset-picker.min.js',
    },
    rollupOptions: {
      external: [/^@scaleflex\/uploader(\/|$)/, 'react', 'react-dom', 'react/jsx-runtime'],
    },
    cssCodeSplit: false,
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
