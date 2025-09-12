// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node'; // adapter

export default defineConfig({
  output: 'server',

  // IMPORTANT: especificar mode (requerido por la versión instalada)
  adapter: node({ mode: 'standalone' }), // <-- aquí está la clave

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public', default: true }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    },
  },
});
