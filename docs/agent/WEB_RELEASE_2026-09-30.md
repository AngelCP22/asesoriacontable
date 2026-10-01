# Publicación de la web — 2026-09-30

## Contrato y alcance

Autorizado por Ed: publicar los cambios del sitio, T&C, 404 y endurecimiento;
el sistema interno debe permanecer separado y no accesible en la web.
Riesgo medio: publicación pública y privacidad; sin operaciones SUNAT.

Se trasladó el programa íntegro fuera del checkout web. Se preservaron su lanzador,
datos y una copia de la continuidad previa. No se versionan credenciales ni documentos.
La página `/sire/` solo describe el servicio contable; no ejecuta el programa.

## Controles

- Build estático exclusivamente desde `astro-src/`; verificación de enlaces y archivos
  prohibidos en cada build, 404 real en raíz, sin fallback SPA.
- CSP con hashes para scripts inline, sin `unsafe-inline` para JavaScript;
  protección contra frames, MIME sniffing, formularios externos, HSTS y permisos limitados.
- Analítica solo tras consentimiento; rechazo y retirada borran IDs locales;
  GPC/DNT prevalecen. API: JSON acotado, mismo origen estricto, métodos y rutas limitados,
  consultas parametrizadas y respuestas sin caché con cabeceras propias.
- Astro actualizado a 7.3.5 por alertas de dependencias; Node >=22.12.
- T&C y privacidad disponibles desde todas las páginas; formulario no recibe claves.

## Evidencia local

- `npm test`: pruebas del endpoint y del consentimiento.
- `npm run build`: cinco páginas, enlaces internos y exclusión de contenido privado.
- `npm audit --omit=dev`: cero vulnerabilidades reportadas.
- Suite del programa tras traslado: 181 pruebas correctas, una advertencia de httpx.

## Límites y revisión

No es una certificación de seguridad ni auditoría legal integral. No se ha cambiado
la configuración de WAF, MFA o roles del proveedor. La conexión MCP de Cloudflare
requiere reautenticación; publicación mediante Git integrado y verificación HTTP pública.
P2 aceptado: estilos inline necesarios; limpieza de métricas oportunista según tráfico;
el endpoint de métricas público podría recibir tráfico automatizado, sin acceso a datos
del programa. El endurecimiento de instalación del programa sigue en su propia continuidad.

Rollback: revertir el commit de esta publicación y volver a construir; no restaurar
el programa dentro del repositorio web. No confundir revertir frontend con trasladar datos.
