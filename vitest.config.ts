import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';

const r = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./composables'],
      vueTemplate: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': r('.'),
    },
  },
});
