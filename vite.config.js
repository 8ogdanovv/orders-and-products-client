import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
    ? '/orders-and-products-client/'
    : '/',
  build: {
    outDir: 'dist',
  },
});
