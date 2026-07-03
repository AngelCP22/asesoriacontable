# Asesoría Contable, Tributaria y Laboral

Sitio web (landing page) del estudio de **Asesoría Contable, Tributaria y Laboral** en Lima Sur.
Construido con **Astro 5**, sin frameworks de UI: HTML/CSS nativo + islas de JavaScript mínimas.

🎨 Marca: navy `#082B66` · azul eléctrico `#1F5EFF` · verde WhatsApp `#25D366` · tipografía **Poppins**.

---

## Estructura del repositorio

```
asesoria-contable/
├─ astro-src/               ← CÓDIGO FUENTE (lo único que se edita)
│  ├─ src/
│  │  ├─ components/        Header, Hero, Services, Faq, Footer, … (13 componentes)
│  │  ├─ data/site.ts       ★ Datos centralizados (teléfono, servicios, FAQ, zonas…)
│  │  ├─ layouts/BaseLayout.astro
│  │  ├─ pages/             index.astro · privacidad.astro
│  │  ├─ scripts/           menu, faq, reveal, scrollspy, to-top, whatsapp-form…
│  │  └─ styles/global.css  Tokens de marca y utilidades
│  ├─ public/assets/        logo.svg, logo-mark.svg, favicon
│  └─ astro.config.mjs      site + base para GitHub Pages
├─ .github/workflows/deploy.yml   Deploy automático a GitHub Pages
├─ ONBOARDING.md            Traspaso para el siguiente agente
└─ README.md
```

## Correr en local

```bash
cd astro-src
npm install          # primera vez
npm run dev          # http://127.0.0.1:4321/asesoriacontable/
```

> El sitio vive bajo la ruta base `/asesoriacontable/` (para GitHub Pages como
> repo de proyecto). Abre esa URL, **no** la raíz.

Build de producción:

```bash
npm run build        # genera astro-src/dist/
npm run preview      # sirve el build
```

Requisitos: **Node ≥ 20.3**.

## Editar contenido

Casi todo el texto vive en **[`astro-src/src/data/site.ts`](astro-src/src/data/site.ts)**:
teléfono, WhatsApp, correo, dirección, horario, servicios, ventajas, testimonios,
preguntas frecuentes, zonas de cobertura y artículos. **No hardcodear** estos datos
dentro de los componentes.

## Publicar en GitHub Pages

Ver **[ONBOARDING.md](ONBOARDING.md)** — resumen:

1. Subir el repo a GitHub con el nombre **`asesoriacontable`**.
2. En *Settings → Pages → Source* elegir **GitHub Actions**.
3. Al hacer `push` a `main`, el workflow compila y publica en
   `https://<usuario>.github.io/asesoriacontable/`.

Si el nombre del repo o el usuario cambian, ajustar `site` y `base` en
[`astro-src/astro.config.mjs`](astro-src/astro.config.mjs).

## Notas técnicas

- **SEO**: metadatos Open Graph, `sitemap-index.xml`, `robots.txt` y datos
  estructurados JSON-LD (`AccountingService`) con rating y horario.
- **Accesibilidad**: skip-link, `aria-*` en menú/FAQ/formulario, foco visible,
  `prefers-reduced-motion`.
- **Sin dependencias externas de runtime**: la única llamada a terceros es Google
  Fonts (Poppins). El mapa es un panel propio que enlaza a Google Maps (no usa
  iframe, para no romperse ni depender de conexión).
- **Formulario de contacto**: valida y arma un mensaje de WhatsApp (no requiere
  backend).
