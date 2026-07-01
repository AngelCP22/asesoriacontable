# ONBOARDING / Traspaso — Asesoría Contable

> Estado al **2026-07-01**. Landing del estudio de Asesoría Contable, Tributaria y
> Laboral (Lima Sur). Léelo antes de tocar nada.

## Qué se hizo en esta sesión

Se **creó el sitio desde cero** con **Astro 5**, siguiendo el manual de marca
entregado (logo "A", paleta navy/azul/verde WhatsApp, tipografía Poppins) y el
mockup de referencia (14 secciones web / 10 móvil).

- ✅ **Canónico = `astro-src/`** (Astro 5). Es lo único que se edita.
- ✅ Datos centralizados en **[`astro-src/src/data/site.ts`](astro-src/src/data/site.ts)**
  (teléfono `930 916 115`, WhatsApp `+51 930 916 115`, correo, dirección S.J.M.,
  servicios, FAQ, zonas, testimonios). **No volver a hardcodear.**
- ✅ 13 componentes: Header (barra superior + nav sticky + menú móvil), Hero,
  Metrics, Services (6), WhyUs, About, Testimonials, Resources, Faq (acordeón),
  Coverage (mapa), CtaFinal, Contact (form → WhatsApp), Footer. Más `Icon.astro`.
- ✅ JS modular en `src/scripts/` (menu, header-shadow, faq, reveal, to-top,
  scrollspy, whatsapp-form), orquestado con try/catch en `BaseLayout.astro`.
- ✅ Logo recreado como **SVG** (`public/assets/logo.svg` y `logo-mark.svg`) + favicon.
- ✅ SEO: Open Graph, JSON-LD `AccountingService` (rating 4.9, horario), sitemap,
  `robots.txt`. Accesibilidad: skip-link, `aria-*`, foco visible, reduced-motion.
- ✅ Página legal **`/privacidad/`** (Ley N.° 29733) enlazada en el footer.
- ✅ Workflow **`.github/workflows/deploy.yml`** listo para GitHub Pages.

### Decisión sobre el mapa (importante)
El mockup mostraba un mapa embebido. Se **evitó el iframe de Google Maps** a
propósito: en pruebas dio `ERR_ABORTED` (X-Frame / conexión) y dejaba la sección
en blanco. En su lugar hay un **panel de mapa propio** (cuadrícula + pin + tarjeta
de dirección) que **enlaza** a Google Maps al hacer clic. Nunca se rompe y no
depende de la red. Si en el futuro quieres un mapa embebido real, usa la *Maps
Embed API* con API key en `Coverage.astro`.

## Cómo correr
```bash
cd astro-src
npm install
npm run dev      # http://127.0.0.1:4321/asesoria-contable/   (¡con la ruta base!)
npm run build    # genera astro-src/dist/
```
Node ≥ 20.3. Ya se corrió `npm install` y `npm run build` con éxito localmente
(2 páginas + sitemap, sin errores).

## Verificado en local
- Home: 11 secciones renderizadas, Poppins cargada, sin errores de consola, sin
  overflow horizontal (body = ancho de ventana).
- FAQ acordeón: abre una a la vez ✓. Menú móvil: abre/cierra ✓. Responsive
  (375 px): nav → hamburguesa, checklist a 1 columna ✓.
- 17 enlaces WhatsApp → `wa.me/51930916115` con mensaje precargado ✓.
- `/privacidad/` OK ✓.
- Nota: la herramienta de *screenshot* del entorno da timeout (limitación del
  renderer, no del sitio); la verificación se hizo por DOM/red/consola.

## PENDIENTE — lo hace el dueño del repo en GitHub (subir + publicar)

El repo ya está inicializado en git con un commit inicial. Falta **solo**:

1. Crear el repositorio en GitHub con el nombre **`asesoria-contable`**
   (si usas otro nombre, cambia `base` en `astro-src/astro.config.mjs`).
2. Conectar y subir:
   ```bash
   git remote add origin https://github.com/<usuario>/asesoria-contable.git
   git branch -M main
   git push -u origin main
   ```
3. En GitHub → **Settings → Pages → Source = "GitHub Actions"**.
4. El workflow publica solo en cada push a `main`:
   `https://<usuario>.github.io/asesoria-contable/`.

> Ajusta `site: "https://<usuario>.github.io"` en `astro.config.mjs` si el usuario
> de GitHub no es `angelcp22`.

### Datos que conviene confirmar con el cliente
- Enlaces reales de redes sociales (hoy `#` en `site.ts → social`).
- Correo/teléfono/dirección definitivos (se tomaron del mockup).
- Artículos del blog (hoy son de ejemplo; los enlaces "Leer más" apuntan a WhatsApp).
