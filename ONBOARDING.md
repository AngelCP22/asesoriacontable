# Continuidad de la web pública

Este repositorio contiene el sitio comercial de Asesoría Contable, Tributaria y Laboral.
El programa interno y su historial técnico se conservan en un proyecto local separado;
no forman parte del build ni deben copiarse a este repositorio.

## Desarrollo y publicación

- Fuente: `astro-src/`, Astro 7, Node >=22.12; versión de build en `.nvmrc`.
- Desarrollo: `npm ci`, `npm run dev` dentro de `astro-src/`.
- Validación: `npm test`, `npm run build`, `npm audit`.
- Cloudflare Pages: proyecto `solucionestacontable`, rama `main`, raíz `astro-src`,
  comando `npm run build`, salida `dist`.
- Dominio: https://solucionestacontable.com
- Publicar solo cambios expresamente autorizados por el titular.

## Reglas de aislamiento

No añadir paneles, credenciales, documentos de clientes o rutas proxy hacia el programa.
`/sire/` es una página comercial estática. El único endpoint es `/api/analytics`, sin
consulta de datos de clientes. `404.html` debe existir; nunca añadir un fallback SPA.

## Privacidad y seguridad

Las métricas requieren consentimiento; respetan GPC y DNT. El formulario solo prepara
un mensaje para WhatsApp. No acepta archivos, claves ni documentos tributarios.
El build comprueba enlaces y archivos privados, y calcula los hashes CSP.
La respuesta de Functions lleva sus propias cabeceras, pues `_headers` cubre estáticos.

## Contenido

Datos de contacto en `src/data/site.ts`; servicio SIRE en `src/data/sire.ts`.
No anunciar certificación de SUNAT ni disponibilidad comercial de integraciones internas.
Los artículos de muestra están retirados hasta disponer de publicaciones reales.
Redes sociales pendientes: no se muestran enlaces vacíos.

Evidencia de la publicación: `docs/agent/WEB_RELEASE_2026-09-30.md`.
