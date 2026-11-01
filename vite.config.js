import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { seoHead } from './scripts/seo-head.mjs';
import { languageForPath } from './src/seo/site.js';
import i18n from './src/i18.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), {
    name: 'localized-seo-head',
    transformIndexHtml(html, context) {
      if (!html.includes('<!--seo-head-->')) return html;
      const language = languageForPath(context.originalUrl || context.path);
      const services = Object.entries(i18n.getResourceBundle(language, 'translation').service)
        .filter(([key]) => !key.endsWith('Desc')).map(([, value]) => value);
      return html.replace('<!--seo-head-->', `<!--seo:start-->\n${seoHead(language, services)}\n<!--seo:end-->`)
        .replace('<html lang="hy">', `<html lang="${language}">`);
    },
  }],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        service: fileURLToPath(new URL("./service.html", import.meta.url)),
        // QR-code landing page for physical cardholders → /card/
        card: fileURLToPath(new URL("./card/index.html", import.meta.url)),
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:8000",
      "/health": "http://localhost:8000",
    },
  },
});
