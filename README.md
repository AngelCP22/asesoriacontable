# Asesoria Contable, Tributaria y Laboral

Sitio web del estudio de Asesoria Contable, Tributaria y Laboral en Lima Sur.
Construido con Astro 7, HTML/CSS nativo y JavaScript minimo.

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

Requisitos: Node >= 22.12 (versión de build fijada en `astro-src/.nvmrc`).
`npm test` valida el endpoint de analítica y el consentimiento. `npm run build`
verifica los enlaces locales, el 404 y la ausencia de archivos del programa privado;
genera los hashes CSP de los scripts en el artefacto final.

## Módulos del repositorio

| Carpeta | Qué es |
|---|---|
| `astro-src/` | El sitio web (Astro 7, estático) y un endpoint limitado a métricas |
| `docs/` | Análisis competitivo, sustanciación del pilar /sire/ y analítica |
| `docs/agent/` | Registro de continuidad entre agentes: estado, cambios, traspaso, deuda, lecciones |

## Páginas

| Ruta | Archivo | Qué es |
|---|---|---|
| `/` | `src/pages/index.astro` | Landing del estudio (una sola página con anclas) |
| `/sire/` | `src/pages/sire/index.astro` | Pilar: servicio mensual de RVIE y RCE |
| `/privacidad/` | `src/pages/privacidad.astro` | Política de privacidad (Ley 29733) |
| `/terminos/` | `src/pages/terminos.astro` | Términos de uso y contratación |
| `404` | `src/pages/404.astro` | Necesaria: sin `404.html`, Cloudflare Pages sirve la home con HTTP 200 en toda ruta inexistente |

⚠️ **Nunca añadir `/* /index.html 200` a `public/_redirects`**: reactiva el fallback de
SPA de Cloudflare Pages y anula el 404 real.

### Contenido de /sire/

Describir el servicio, los entregables, el proceso y las condiciones para el cliente.
Los estados de desarrollo y las decisiones de arquitectura pertenecen a documentación
interna. No publicar disponibilidad de un portal o funciones sin validar, ni sustituir
avisos internos por promesas comerciales falsas. Mantener la independencia de SUNAT
y el tratamiento privado de accesos y documentos.

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

## Analítica propia

El sitio registra páginas vistas y clics en WhatsApp mediante
`astro-src/functions/api/analytics.js` y una base D1 enlazada como
`ANALYTICS_DB`. La implementación no guarda dirección IP ni los datos escritos
en el formulario. Consulta [`docs/ANALITICA.md`](docs/ANALITICA.md) para conocer
las métricas, privacidad y criterios de reporte.
