import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/product_catalog/',
  resolve: {
    alias: {
      $fonts: resolve(__dirname, 'fonts'),
      $img: resolve(__dirname, 'img'),
    }
  }
});