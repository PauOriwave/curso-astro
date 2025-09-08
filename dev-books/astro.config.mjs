// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    transitions: true, // ✅ Activa el soporte para ClientRouter
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
