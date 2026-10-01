// ─────────────────────────────────────────────────────────────
//  Contenido del pilar /sire/ — servicio mensual de RVIE y RCE.
//
//  REGLA DE ESTA PÁGINA: solo se escribe aquí lo que hoy se puede
//  sostener con evidencia. La conexión automática con los servicios
//  web de SUNAT NO está operativa y así se declara, arriba y con el
//  mismo peso visual que el titular. Ver docs/SUSTANCIACION_SIRE.md
//  antes de cambiar una sola frase.
// ─────────────────────────────────────────────────────────────

import { site } from "./site";

const wa = (texto: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;

export const sireMeta = {
  title: "SIRE mensual: RVIE y RCE a cargo de un contador colegiado",
  description:
    "Llevamos tu RVIE y tu RCE cada mes: propuesta, conciliación contra tu contabilidad y sustento de las diferencias, a cargo de un contador público colegiado.",
};

export const sireHero = {
  eyebrow: "SIRE · RVIE y RCE",
  h1: "Tu SIRE de cada mes, a cargo de un contador colegiado",
  subtitulo:
    "Descargamos la propuesta de tu RVIE y de tu RCE, la conciliamos contra tu contabilidad, identificamos las diferencias con su sustento y te entregamos el preliminar cuadrado. El cierre se confirma en SUNAT Operaciones en Línea. El trabajo lo firma Yakel Marcatoma Pozo, Contador Público Colegiado, C.P.C. 8413.",
  ctaPrimario: {
    texto: "Que revisen mi SIRE del último periodo",
    href: wa(
      "Hola, quiero que revisen mi SIRE del último periodo cerrado (RVIE y RCE). Mi RUC es:"
    ),
    source: "sire_hero",
  },
  ctaSecundario: { texto: "Ver qué hacemos cada mes", href: "#cada-mes" },
  privacidad:
    "Tus archivos se usan solo para esa revisión, no se comparten con terceros y se eliminan si no avanzamos.",
};

// Estado declarado de la integración. Se actualiza SIEMPRE con su fecha.
// No pasar a "operativa" sin un ciclo end-to-end con un cliente real,
// con fecha y cargo archivados, y con autorización del titular.
export const estadoConexion = {
  titulo: "Estado de la conexión automática con los servicios web de SUNAT",
  destacado: "Aún no operativa.",
  parrafos: [
    "La conexión automática no se ofrece todavía como un servicio de producción. Esta web es informativa: no contiene un portal de clientes ni permite acceder a herramientas internas o ingresar credenciales de SUNAT.",
    "Lo que sí opera hoy es el servicio contable. Tu RVIE y tu RCE los trabajamos con las herramientas oficiales de SUNAT y el criterio de un contador colegiado, y eso no depende de ninguna integración pendiente. Nunca vas a leer aquí las dos cosas mezcladas.",
    "Cualquier acceso a información tributaria se coordina por separado, con autorización del titular, permisos acotados y condiciones documentadas. No envíes contraseñas ni claves SOL a través del formulario público.",
  ],
  revisadoEl: "30 de septiembre de 2026",
  revisadoPor: "Yakel Marcatoma Pozo, C.P.C. 8413",
  cta: {
    texto: "Avísenme si la conexión automática llega a estar operativa",
    nota: "Sin reserva, sin adelanto y sin compromiso.",
    href: wa(
      "Hola, avísenme si la conexión automática con los servicios web del SIRE llega a estar operativa."
    ),
    source: "sire_estado",
  },
  notaDatos:
    "Guardamos solo tu número y tu RUC para ese aviso, y los borramos cuando nos lo pidas.",
};

export const sireSecciones = [
  {
    heading: "El mes empieza el día 2. La carrera, el día 8.",
    cuerpo:
      "Así está diseñado el calendario, no es percepción. La propuesta aparece temprano, pero el preliminar recién se puede generar el día 8 del mes siguiente. Entre esos dos puntos hay que cuadrar ventas, compras, crédito fiscal, tipo de cambio y los documentos que no entran por la puerta normal.",
    bullets: [
      "Día 2: SUNAT pone a disposición la propuesta del RVIE y del RCE.",
      "Esa propuesta se actualiza diariamente, de manera automática, con la información recibida el día anterior.",
      "Las inconsistencias y la información adicional que muestra el módulo tienen carácter meramente ilustrativo: no forman parte del registro y tampoco te eximen de revisarlas.",
      "Día 8 del mes siguiente: recién ahí se puede generar el preliminar del periodo.",
      "Día 10 si emites recibos electrónicos por servicios públicos en el SEE para empresas supervisadas.",
      "Entre el día 8 y tu fecha de vencimiento según el cronograma de SUNAT está toda la ventana real para cuadrar, revisar y corregir.",
    ],
    nota: "Si tienes varias empresas, esa misma ventana se multiplica por cada RUC y por dos registros: ventas y compras.",
  },
  {
    heading: "Dónde se rompe el mes",
    cuerpo:
      "No es torpeza tuya. El sistema es exigente, cambia seguido y castiga el error una sola vez. Ninguno de estos atascos es difícil de entender. Todos consumen tiempo del cierre.",
    bullets: [
      "El archivo .txt vuelve rechazado por el nombre del archivo, por el separador de palotes o por una fecha fuera del periodo informado.",
      "La propuesta cambia sola: lo que cuadraste el lunes puede no ser lo del miércoles.",
      "Cada carga y cada descarga genera un ticket: hay que consultar su estado y recién entonces descargar el archivo, que llega comprimido y particionado.",
      "El registro se genera una sola vez por periodo: el error no se corrige regenerando, sino por ajustes posteriores, con su propio archivo y su propio envío.",
      "Los comprobantes de no domiciliados van en un archivo aparte: el preliminar del RCE llega en dos.",
      "Un comprobante en moneda extranjera sin tipo de cambio frena la carga hasta que se complete.",
      "Los ajustes de periodos que antes llevabas en PLE se hacen sobre el último registro generado del SIRE, no sobre el periodo original.",
      "Si no cerraste el registro anterior, el módulo no te deja generar.",
      "El aplicativo cliente se actualiza cada pocas semanas y cada versión toca validaciones.",
    ],
    nota: "No es tu empresa sola. En enero de 2026 la propia SUNAT dejó escrito, en los considerandos de una resolución, que hay contribuyentes obligados generando sus registros fuera de los plazos establecidos y con errores en la carga de los archivos.",
  },
  {
    id: "cada-mes",
    heading: "De qué nos hacemos cargo, todos los meses",
    cuerpo:
      "Este es el servicio que prestamos con las herramientas oficiales de SUNAT y el criterio de un contador colegiado. No depende de ninguna integración pendiente.",
    bullets: [
      "Descargamos la propuesta del RVIE y del RCE del periodo.",
      "La conciliamos contra tus ventas, tus compras y tu contabilidad, no contra sí misma.",
      "Revisamos las inconsistencias por monto total y por comprobante antes de cerrar el periodo, que es cuando todavía se pueden corregir.",
      "Completamos el tipo de cambio faltante y separamos los documentos de no domiciliados.",
      "Evaluamos si corresponde aceptar, complementar o reemplazar la propuesta, te explicamos por qué y lo ejecutamos con tu conformidad.",
      "Te entregamos el preliminar descargado y conciliado, con cada diferencia identificada y su sustento, y te decimos cuáles no se pueden sustentar y qué implica cada una.",
      "El cierre lo confirmas tú en SUNAT Operaciones en Línea. Si prefieres que lo hagamos nosotros, nos creas un usuario secundario desde tu Clave SOL con los permisos mínimos para SIRE: tu clave principal no sale de tus manos y puedes revocar el acceso cuando quieras.",
      "Archivamos la constancia de recepción y anotamos el CAR en tu Libro Diario.",
      "Si un periodo anterior se generó con error, evaluamos si corresponde ajuste posterior y armamos el archivo con su estructura propia.",
    ],
    nota: "Sustentar la diferencia es la parte que toma tiempo y la que nadie quiere hacer. Es exactamente la parte que asumimos, dentro del alcance que firmemos.",
  },
  {
    heading: "El obligado eres tú. Por eso importa quién firma el sustento.",
    cuerpo:
      "El generador frente a SUNAT es el contribuyente: ni el software ni el proveedor firman por ti. Un software conecta y descarga. Un contador colegiado sustenta. Lo que suele faltar no es la descarga: es quién revisa por qué el dato descargado no cuadra con tu contabilidad y quién arma el sustento de esa diferencia.",
    bullets: [
      "El trabajo lo firma Yakel Marcatoma Pozo, Contador Público Colegiado, C.P.C. 8413. Es un dato que puedes verificar ante el Colegio.",
      "Las credenciales de API del SIRE las genera cualquier contribuyente desde su Clave SOL, en el acto. Lo que no se consigue con un trámite es el criterio de quien decide si la propuesta se acepta o se reemplaza.",
      "Si ya tienes un software que descarga tu SIRE, trabajamos sobre lo que genera. Lo revisamos contigo en la evaluación inicial y te decimos de frente si sirve o si conviene cambiar el flujo.",
      "No fabricamos software y no lo vamos a decir nunca. Si el servicio llega a incorporar una herramienta, la pone un proveedor externo y nosotros la configuramos y la operamos dentro del servicio contable.",
      "La decisión técnica es nuestra y queda explicada; el sustento queda armado y archivado para cuando SUNAT lo pida. Si hay requerimiento, lo respondemos nosotros con la representación que nos otorgues.",
    ],
    cta: {
      texto: "Ya tengo un software de SIRE y quiero que lo revisen",
      href: wa(
        "Hola, ya tengo un software que descarga mi SIRE y quiero que lo revisen."
      ),
      source: "sire_software",
    },
  },
];

export const queNoHacemos = {
  heading: "Qué no hacemos",
  cuerpo:
    "Decirlo temprano nos ahorra tiempo a los dos. Si necesitas algo de esta lista, te conviene otro proveedor y te lo vamos a decir en la primera llamada.",
  items: [
    "No generamos ni presentamos tu SIRE por fuera de SOL. La opción Generación de registros solo se accede ingresando a SUNAT Operaciones en Línea. Te dejamos el preliminar descargado y cuadrado; el cierre se confirma ahí.",
    "No anunciamos como operativo lo que todavía no lo está. La conexión automática con los servicios web de SUNAT aún no opera, y lo decimos arriba, no al pie.",
    "No desarrollamos software. Somos un estudio contable.",
    "No somos OSE ni PSE. Esas figuras regulan la emisión de comprobantes electrónicos, no los registros.",
    "No estamos certificados, acreditados ni respaldados por SUNAT. En las resoluciones que regulan el SIRE no existe esa figura. Si un proveedor te la ofrece, pídele la norma que la crea.",
    "No te pedimos tu Clave SOL principal. Trabajamos con usuario secundario y permisos acotados, acordados por escrito, y los accesos se revocan al terminar el encargo. Ninguna clave se guarda en archivos compartidos ni en correos.",
    "No prometemos cero multas. El resultado depende también de SUNAT y de que tu información llegue a tiempo.",
    "No publicamos precios ni plazos que no podamos sostener: cotizamos después de ver tu volumen, tu régimen y el estado de tus periodos.",
    "No publicamos nombres, RUC, capturas ni cifras de clientes.",
    "No cobramos adelantos por una conexión que todavía no funciona.",
  ],
  nota: "En esta página no vas a encontrar cifras de clientes, porcentajes de cumplimiento ni años de experiencia. Si no tenemos el registro que lo respalde, no lo escribimos.",
};

export const comoEmpezamos = {
  heading: "Cómo empezamos",
  cuerpo:
    "Con tu último periodo cerrado sobre la mesa. Sin eso, cualquier propuesta es adivinanza.",
  pasos: [
    "Nos envías el último periodo cerrado de tu RVIE y tu RCE.",
    "Lo revisamos sin costo y te decimos con nombre propio qué está conciliado, qué no y qué falta sustentar.",
    "Si hay periodos generados con error, te indicamos si corresponde ajuste posterior y qué implica.",
    "Recién ahí hablamos de alcance y de precio, con tu volumen real a la vista.",
    "Si la conexión automática llega a estar operativa, te avisamos con fecha y te explicamos qué cambia y qué no. Tu servicio mensual no depende de eso.",
  ],
  nota: "La revisión inicial cubre el último periodo cerrado de un RUC y no tiene costo. El precio del servicio mensual se cotiza después, según tu régimen y tu volumen de comprobantes.",
};

export const faqSire = [
  {
    q: "¿Ustedes generan y presentan mi SIRE?",
    a: "Dejamos el preliminar descargado, conciliado y revisado por el contador. El paso final, la opción Generación de registros, solo se accede ingresando al módulo por SUNAT Operaciones en Línea. Ese cierre lo confirmas tú, o lo hacemos nosotros con un usuario secundario que tú crees desde tu Clave SOL, con permisos acotados y revocables. Al generar, SUNAT deposita la constancia de recepción en tu buzón electrónico.",
  },
  {
    q: "¿La conexión automática con las APIs de SUNAT ya está funcionando?",
    a: "La conexión automática aún no se ofrece como servicio de producción. Esta web no da acceso a un sistema de clientes. El servicio contable sobre tu RVIE y tu RCE se coordina directamente con el estudio.",
  },
  {
    q: "¿Están autorizados o certificados por SUNAT para el SIRE?",
    a: "No. En las resoluciones que regulan el SIRE no existe ninguna figura de software homologado, proveedor autorizado ni partner oficial. Registrar una aplicación en el portal de APIs de SUNAT es un trámite de autoservicio que cualquier contribuyente hace con su Clave SOL y que emite las credenciales en el acto: habilita acceso técnico y nada más. Si un proveedor te ofrece estar autorizado o certificado por SUNAT para el SIRE, pídele la norma que crea esa figura.",
  },
  {
    q: "¿Son OSE o PSE?",
    a: "No. El Operador de Servicios Electrónicos y el Proveedor de Servicios Electrónicos son figuras del sistema de emisión electrónica de comprobantes de pago, inscritas en registros de SUNAT. El SIRE pertenece a libros y registros electrónicos: es otro universo normativo y no exige inscripción alguna para usar sus servicios web.",
  },
  {
    q: "¿Necesitan mi Clave SOL?",
    a: "El SIRE se autentica con credenciales SOL del contribuyente. Por eso, cuando un tercero opera, lo correcto es un usuario secundario con permisos acotados y no la clave principal: tu clave no sale de tus manos y puedes revocar el acceso cuando quieras. Y por eso, cuando construyamos la conexión automática, nuestra intención de diseño es que el proceso corra en tu equipo o servidor, con tus credenciales, sin copiarlas ni a nuestros sistemas ni a los de ningún proveedor. Hoy es intención de diseño, no una característica: quedará por escrito en el contrato antes de conectar nada.",
  },
  {
    q: "Generé mal un periodo. ¿Se puede corregir?",
    a: "No regenerando: el registro de un periodo se genera en una única oportunidad. La corrección va por ajustes posteriores, con su propia estructura de archivo y su propio envío. Si el periodo venía de PLE o del Portal, el ajuste se hace sobre el último registro generado del SIRE, no sobre el periodo original. Es contraintuitivo y es donde más tiempo se pierde. Revisamos tu caso y te decimos qué se puede corregir y qué ya no.",
  },
  {
    q: "Ya tengo un software que descarga mi SIRE. ¿Igual les sirvo?",
    a: "Sí, y es el caso más común. Trabajamos sobre lo que ya tienes. La descarga suele estar resuelta; lo que falta es quién revisa por qué la propuesta no cuadra con tu contabilidad y quién arma el sustento de esa diferencia. Si en algún caso conviene una herramienta adicional, te lo decimos con su costo antes de contratar nada.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "No publicamos precio porque depende de tu volumen de comprobantes, tu régimen y el estado en que estén tus periodos. Escríbenos, revisamos tu último periodo cerrado sin costo y te damos una cotización clara antes de que decidas nada.",
  },
];

export const sireCierre = {
  titulo: "El SIRE de este mes ya empezó el día 2",
  texto:
    "Mándanos tu último periodo cerrado y te decimos en qué estás parado. Sin compromiso y sin adelantos.",
  ctaPrimario: {
    texto: "Hablar con el contador por WhatsApp",
    href: wa(
      "Hola, quiero conversar sobre el servicio mensual de SIRE para mi empresa."
    ),
    source: "sire_cta",
  },
  ctaCorreo: {
    texto: "Escribir al correo",
    href: `mailto:${site.email}?subject=${encodeURIComponent("Consulta SIRE - RVIE y RCE")}`,
    nota: "Para quien necesita adjuntar los archivos del periodo.",
  },
  ctaTelefono: { texto: `Llamar: ${site.phone}`, href: `tel:+51${site.phoneRaw}` },
};
