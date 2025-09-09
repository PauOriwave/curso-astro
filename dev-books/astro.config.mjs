// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // (opcional) si despliegas como SSR, añade: output: 'server'
  // output: 'server',

  env: {
    schema: {
      // Igual que tu ejemplo
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: 'server',
        access: 'public',
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
