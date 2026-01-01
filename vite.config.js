import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/gamfire-chile-web/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        catalogo: resolve(__dirname, 'catalogo.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
});
