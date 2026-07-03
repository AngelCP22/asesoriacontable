import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Despliegue en Cloudflare Pages con dominio propio.
export default defineConfig({
  site: "https://solucionestacontable.com",
  trailingSlash: "always",
  integrations: [sitemap()],
});
