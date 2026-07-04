# Asesoria Contable, Tributaria y Laboral

Sitio web del estudio de Asesoria Contable, Tributaria y Laboral en Lima Sur.
Construido con Astro 5, HTML/CSS nativo y JavaScript minimo.

Marca: navy `#082B66`, azul electrico `#1F5EFF`, verde WhatsApp `#25D366`,
tipografia Poppins.

## Estructura

```text
asesoria-contable/
├── astro-src/               <- codigo fuente
│   ├── src/
│   │   ├── components/
│   │   ├── data/site.ts
│   │   ├── layouts/BaseLayout.astro
│   │   ├── pages/
│   │   ├── scripts/
│   │   └── styles/global.css
│   ├── public/assets/
│   └── astro.config.mjs
├── ONBOARDING.md
└── README.md
```

## Correr en local

```bash
cd astro-src
npm install
npm run dev          # http://127.0.0.1:4321/
```

Build de produccion:

```bash
npm run build        # genera astro-src/dist/
npm run preview      # sirve el build
```

Requisitos: Node >= 20.3.

## Editar contenido

Casi todo el texto vive en [`astro-src/src/data/site.ts`](astro-src/src/data/site.ts):
telefono, WhatsApp, correo, direccion, horario, servicios, ventajas, testimonios,
preguntas frecuentes, zonas de cobertura y articulos.

## Publicar en Cloudflare Pages

Proyecto Cloudflare Pages: `solucionestacontable`

Configuracion conectada al repo `AngelCP22/asesoriacontable`:

```text
Production branch: main
Root directory: astro-src
Build command: npm run build
Output directory: dist
Preview deployments: none
Custom domains: solucionestacontable.com, www.solucionestacontable.com
```

El dominio canonical se toma de `SITE_URL` si existe. Si no existe, usa
`https://solucionestacontable.com`. Si se cambia el dominio en Cloudflare, definir
`SITE_URL=https://dominio-final.com` en las variables de entorno del proyecto y
volver a desplegar.

El `robots.txt` se genera desde `astro-src/src/pages/robots.txt.ts` para que el
sitemap apunte al mismo dominio configurado en `site`.

## Notas tecnicas

- SEO: Open Graph, `sitemap-index.xml`, `robots.txt` y JSON-LD `AccountingService`.
- Accesibilidad: skip-link, `aria-*`, foco visible y `prefers-reduced-motion`.
- La unica llamada externa de runtime es Google Fonts.
- El formulario de contacto valida y arma un mensaje de WhatsApp, sin backend.
