import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.SITE_URL || "https://solucionestacontable.com";

export default defineConfig({
  site: siteUrl.replace(/\/+$/, ""),
  trailingSlash: "always",
  integrations: [sitemap()],
});
