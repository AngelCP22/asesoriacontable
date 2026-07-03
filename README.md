# Asesoría Contable, Tributaria y Laboral

Sitio web (landing page) del estudio de **Asesoría Contable, Tributaria y Laboral** en Lima Sur.
Construido con **Astro 5**, sin frameworks de UI: HTML/CSS nativo + islas de JavaScript mínimas.

Marca: navy `#082B66` · azul eléctrico `#1F5EFF` · verde WhatsApp `#25D366` · tipografía **Poppins**.

## Estructura del repositorio

```text
asesoria-contable/
├── astro-src/               ← CÓDIGO FUENTE (lo único que se edita)
│  ├── src/
│  │  ├── components/        Header, Hero, Services, Faq, Footer, …
│  │  ├── data/site.ts       Datos centralizados (teléfono, servicios, FAQ, zonas…)
│  │  ├── layouts/BaseLayout.astro
│  │  ├── pages/             index.astro · privacidad.astro
│  │  ├── scripts/           menu, faq, reveal, scrollspy, to-top, whatsapp-form…
│  │  └── styles/global.css  Tokens de marca y utilidades
│  ├── public/assets/        logo.svg, logo-mark.svg, favicon, imágenes
│  └── astro.config.mjs      site para Cloudflare Pages
├── ONBOARDING.md            Traspaso para el siguiente agente
└── README.md
```

## Correr en local

```bash
cd astro-src
npm install          # primera vez
npm run dev          # http://127.0.0.1:4321/
```

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

## Publicar en Cloudflare Pages

Proyecto Cloudflare Pages: **`solucionestacontable`**

Configuración conectada al repo `AngelCP22/asesoriacontable`:

```text
Production branch: main
Root directory: astro-src
Build command: npm run build
Output directory: dist
Preview deployments: none
Custom domains: solucionestacontable.com, www.solucionestacontable.com
```

Si el dominio cambia, ajustar `site` en [`astro-src/astro.config.mjs`](astro-src/astro.config.mjs) y el sitemap de [`astro-src/public/robots.txt`](astro-src/public/robots.txt).

## Notas técnicas

- **SEO**: metadatos Open Graph, `sitemap-index.xml`, `robots.txt` y datos estructurados JSON-LD (`AccountingService`).
- **Accesibilidad**: skip-link, `aria-*` en menú/FAQ/formulario, foco visible, `prefers-reduced-motion`.
- **Sin dependencias externas de runtime**: la única llamada a terceros es Google Fonts (Poppins). El mapa es un panel propio que enlaza a Google Maps.
- **Formulario de contacto**: valida y arma un mensaje de WhatsApp (no requiere backend).
