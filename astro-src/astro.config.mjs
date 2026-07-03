import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Despliegue a GitHub Pages como repo de proyecto.
// Si el repo o el usuario cambian, ajusta `site` y `base` (una sola línea cada uno).
export default defineConfig({
  site: "https://angelcp22.github.io",
  base: "/asesoriacontable",
  trailingSlash: "always",
  integrations: [sitemap()],
});
