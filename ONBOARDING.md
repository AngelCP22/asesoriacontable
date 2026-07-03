# ONBOARDING / Traspaso — Asesoría Contable

> Estado al **2026-07-02**. Landing del estudio de Asesoría Contable, Tributaria y
> Laboral (Lima Sur). Léelo antes de tocar nada.

## Qué se hizo en la sesión 2026-07-03 (foto HD + set de iconos + extras)

Ed entregó dos assets generados (están en `C:\Users\ed\Downloads\ChatGPT Image
2 jul 2026, 11_52_24 p.m..png` = lámina de iconos, y `...11_56_04 p.m..png` =
foto HD del contador, ambos 1254×1254):

- ✅ **Foto HD del contador** → `public/assets/contador.webp` (800×800, 43 KB,
  máscara circular con PIL). Reemplaza al recorte de baja resolución
  (`contador.png` eliminado). El Hero la toma solo (webp es el 1er candidato);
  About también la usa.
- ✅ **Iconos de la lámina** recreados como paths SVG en Icon.astro (`calc`,
  `declarations`, `laptop`, `payroll`, `scales`, `bank`) y **remapeados los 10
  servicios** para calzar con la lámina (Contabilidad=calculadora,
  Declaraciones=documentos, Libros Electrónicos=laptop, Planillas=personas,
  Asesoría Tributaria=balanza, Legalización=edificio legal, etc.).
- ✅ **Chips de entidades** en el panel de About (SUNAT, SUNAFIL, EsSalud, SIS,
  INEI, AFP — los logos del afiche, como texto para no piratear logos).
- ✅ Botón **"Ver más artículos"** en Recursos (estaba en el mockup).
- Verificado: build OK, consola limpia, 10 iconos únicos, sin overflow.

## Sesión 2026-07-02 — parte 2 (foto del afiche + fuera Google)

Ed compartió el **afiche original** del estudio (quedó en
`C:\Users\ed\Pictures\Screenshots\Captura de pantalla 2026-07-02 233425.png`).
El titular es **Yakel Marcatoma Pozo, C.P.C. 8413**. Cambios:

- ✅ **Foto real del contador**: recortada del afiche (círculo, con PIL) →
  `public/assets/contador.png` (600×600, PNG transparente). El Hero la detecta
  solo. Es un recorte de ~200 px reescalado: si el cliente pasa una foto en
  mejor resolución, reemplazar ese archivo y listo.
- ✅ Hero: foto ahora **circular con anillo navy** (como el afiche) + placa con
  nombre y C.P.C. La tarjeta "150+ empresas ★ 4.9 Google" se eliminó.
- ✅ **Fuera todo lo de Google reseñas** (pedido explícito de Ed, eran datos
  inventados): tarjeta 4.9/5 de Testimonials, item Google de la trustbar,
  `aggregateRating` del JSON-LD, y campos `site.rating`/`site.reviews`.
  En su lugar: `site.accountant` (nombre + C.P.C.), `founder` en JSON-LD,
  y credencial del contador en trustbar/hero/About (`.about__founder`).
- ✅ **Miniaturas SVG del blog** generadas (blog-tributario/contable/laboral.svg)
  y conectadas vía `resources[].img`.
- Verificado: build OK, consola limpia, imágenes 200 + decodifican, sin overflow.
  Ojo: en el preview el `window.scrollTo` no persiste entre evals y el screenshot
  da timeout; las imágenes lazy se validaron por fetch+decode.

## Qué se hizo en la sesión 2026-07-02 (alineación al mockup)

Ed compartió el mockup completo (desktop + móvil) y se alineó el sitio a él:

- **Hero rediseñado** ([Hero.astro](astro-src/src/components/Hero.astro)): titular
  del mockup ("Soluciones contables, tributarias y laborales para hacer crecer tu
  negocio"), píldora superior, 3 checks, 3 CTAs (Agenda una consulta / Cotiza
  ahora / Hablar por WhatsApp) y **foto del contador** con tarjeta flotante
  "Más de 150+ empresas · 4.9/5 en Google".
- ~~📸 FOTO PENDIENTE~~ **RESUELTO en parte 2**: `contador.png` ya existe
  (recorte del afiche). El mecanismo de detección build-time sigue activo
  (`contador.webp` > `.jpg` > `.png` > placeholder).
- **Metrics.astro → barra de confianza** del mockup (datos en `site.ts → trustbar`):
  Google 4.9★ · SUNAT aliados estratégicos · Atención en S.J.M. y Lima
  Metropolitana · +10 años. El array `metrics` viejo sigue en site.ts por si se
  quiere recuperar.
- **Nueva sección [Process.astro](astro-src/src/components/Process.astro)**
  ("Nuestro proceso es simple y eficaz"): Diagnóstico → Propuesta → Ejecución →
  Acompañamiento. Insertada tras Services en index.astro.
- **Services: 6 → 10 tarjetas** según mockup + botón "Ver todos los servicios".
  Iconos nuevos en Icon.astro (book, advisor, refund, gear, stamp, docs, badge,
  calendar). Icon acepta ahora `class` o `cls`.
- **WhyUs**: título "Tu tranquilidad, nuestro compromiso" + razones del mockup.
- **Testimonios** (Claudia R., Jorge M., María L.) y **FAQ** (5 preguntas del
  mockup) reemplazados.
- **Datos nuevos en site.ts**: `addressRef` ("Alt. de Av. Pedro Miotta (cuadra 12)")
  y `hoursSat` ("Sábados · 9:00 a.m. – 1:00 p.m.") aplicados en Contact, Coverage
  y Footer.
- Verificado en preview: DOM correcto, consola limpia, responsive 375 px sin
  overflow, `npm run build` OK. (El screenshot del entorno sigue dando timeout.)

## Qué se hizo en la sesión 2026-07-01 (creación)

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
