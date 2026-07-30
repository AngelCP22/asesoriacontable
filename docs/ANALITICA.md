# Analítica de Soluciones TA Contable

El sitio registra métricas propias en una base D1 llamada
`solucionestacontable-analytics`, enlazada a Cloudflare Pages mediante
`ANALYTICS_DB`.

## Qué mide

- `page_view`: vista de una página.
- `whatsapp_click`: apertura de WhatsApp desde un enlace o desde el formulario.

Cada clic guarda la sección de origen y el texto visible del botón. El formulario
no envía a la analítica el nombre, celular ni mensaje escritos por la persona.

## Privacidad

Se generan identificadores aleatorios de navegador y sesión. No se guarda la
dirección IP, nombre, teléfono, correo ni contenido del mensaje. El país y el
navegador se reducen a categorías. Los eventos se eliminan después de 180 días,
el identificador del navegador rota en ese mismo plazo y se respetan Global
Privacy Control y Do Not Track.

Un visitante único representa un navegador o dispositivo aproximado; no equivale
necesariamente a una persona identificada.

## Consultas

Los informes deben excluir `is_bot = 1`, distinguir visitantes, sesiones y
páginas vistas, y considerar un clic en WhatsApp como una consulta o posible
cliente, no como un servicio contratado.
