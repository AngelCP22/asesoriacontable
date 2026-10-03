// Contenido comercial: describir el servicio y sus entregables, sin estados internos.
import { site } from './site';
const wa = (texto: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`;
export const sireMeta = {
  title: 'Servicio SIRE: revisión de ventas y compras | Asesoría Contable',
  description: 'Organizamos y revisamos tus registros de ventas y compras en SIRE. Recibe un resumen del periodo, diferencias identificadas y acompañamiento contable.',
};
export const sireHero = {
  eyebrow: 'SIRE · Ventas y compras',
  h1: 'Tus ventas y compras en orden, cada mes',
  subtitulo: 'Revisamos tu Registro de Ventas e Ingresos Electrónico (RVIE) y tu Registro de Compras Electrónico (RCE), contrastamos la información con tus comprobantes y te acompañamos en el cierre del periodo. Atención a cargo de Yakel Marcatoma Pozo, Contador Público Colegiado, C.P.C. 8413.',
  ctaPrimario: { texto: 'Solicitar una evaluación', href: wa('Hola, quiero una evaluación del SIRE de mi empresa.'), source: 'sire_hero' },
  ctaSecundario: { texto: 'Conocer el servicio', href: '#cada-mes' },
  privacidad: 'Coordinamos contigo la entrega de documentos y cuidamos la confidencialidad de tu información.',
};
export const sireSecciones = [
  {
    id: 'cada-mes',
    heading: 'Qué incluye el servicio mensual',
    cuerpo: 'Un proceso de revisión para que conozcas el estado de tus registros antes del cierre.',
    bullets: [
      'Revisión de la propuesta de ventas y compras del periodo.',
      'Comparación con los comprobantes y la información contable que nos entregas.',
      'Identificación de diferencias, documentos faltantes y datos que necesitan revisión.',
      'Preparación del preliminar y coordinación de las correcciones que correspondan.',
      'Acompañamiento en el cierre y organización de las constancias, según el alcance contratado.',
    ],
    nota: 'Antes de comenzar acordamos los periodos, las responsabilidades y los entregables de tu empresa.',
  },
  {
    heading: 'Información que puedas revisar y entender',
    cuerpo: 'Te explicamos qué encontramos y qué acciones corresponden, con el detalle necesario para tomar decisiones.',
    bullets: [
      'Resumen del periodo de ventas y compras revisado.',
      'Detalle de las diferencias detectadas y la documentación que falta completar.',
      'Archivos de trabajo y reportes acordados en la propuesta del servicio.',
      'Orientación del contador para resolver observaciones y organizar el siguiente periodo.',
    ],
    nota: 'La propuesta de SUNAT se revisa junto con tu documentación; una descarga por sí sola no sustituye la revisión contable.',
  },
  {
    heading: 'Nos adaptamos a la forma de trabajar de tu empresa',
    cuerpo: 'Si ya utilizas un sistema contable o de facturación, partimos de la información que tienes y coordinamos cómo entregarla.',
    bullets: [
      'Evaluamos el volumen de comprobantes y los periodos que necesitas atender.',
      'Definimos un canal de entrega y un calendario de revisión.',
      'Te comunicamos las observaciones y coordinamos tu conformidad antes de realizar las acciones acordadas.',
    ],
    cta: { texto: 'Consultar por mi empresa', href: wa('Hola, quiero conocer el alcance del servicio SIRE para mi empresa.'), source: 'sire_software' },
  },
];
export const condicionesServicio = {
  heading: 'Un servicio con responsabilidades claras',
  cuerpo: 'Trabajamos con un alcance acordado y con autorización para las gestiones que nos encargues.',
  items: [
    'Cotización según el volumen de comprobantes, el régimen y el estado de tus periodos.',
    'Accesos coordinados de forma privada, con los permisos necesarios para el encargo.',
    'Revisión de la información y comunicación de observaciones antes del cierre.',
    'Tratamiento confidencial de los documentos y atención directa del estudio.',
  ],
  nota: 'La entrega oportuna de información completa permite organizar la revisión y atender los plazos correspondientes.',
};
export const comoEmpezamos = {
  heading: 'Cómo empezamos',
  cuerpo: 'Cuéntanos qué necesitas y te proponemos un alcance concreto.',
  pasos: [
    'Nos indicas tu actividad, el volumen aproximado de comprobantes y los periodos que deseas revisar.',
    'Coordinamos la documentación necesaria para la evaluación inicial.',
    'Te presentamos una propuesta con los servicios, honorarios y entregables.',
    'Una vez aceptada, organizamos los accesos autorizados y el calendario de trabajo.',
  ],
  nota: 'La evaluación inicial para preparar la propuesta no tiene costo. Los trabajos posteriores se realizan conforme al servicio contratado.',
};
export const faqSire = [
  { q: '¿Qué información necesitan para empezar?', a: 'Tu actividad, el volumen aproximado de ventas y compras y los periodos que quieres revisar. Después coordinamos la entrega de los documentos necesarios por el canal acordado.' },
  { q: '¿Qué recibiré cada mes?', a: 'Los entregables definidos en tu propuesta: revisión del periodo, diferencias identificadas, archivos de trabajo y acompañamiento para las acciones acordadas. Te explicamos las observaciones y qué documentación necesitas completar.' },
  { q: '¿Pueden trabajar con mi sistema contable actual?', a: 'Sí. Evaluamos la información que genera tu sistema y acordamos cómo utilizarla para la revisión de tus registros y comprobantes.' },
  { q: '¿Pueden revisar periodos anteriores?', a: 'Sí. Revisamos el estado del periodo y su documentación para determinar las correcciones que correspondan y proponerte el trabajo necesario.' },
  { q: '¿Cómo se gestionan los accesos a SUNAT?', a: 'Los accesos se coordinan de forma privada con el titular, según el servicio contratado y los permisos necesarios. No envíes contraseñas o claves SOL por el formulario de contacto.' },
  { q: '¿Cuánto cuesta el servicio?', a: 'Depende del volumen de comprobantes, tu régimen y los periodos que debamos atender. Te entregamos una cotización con el alcance y los honorarios antes de comenzar.' },
];
export const sireCierre = {
  titulo: 'Conversemos sobre el SIRE de tu empresa',
  texto: 'Cuéntanos qué periodo necesitas revisar y te orientamos sobre el siguiente paso.',
  ctaPrimario: { texto: 'Hablar con el contador', href: wa('Hola, quiero conversar sobre el servicio mensual de SIRE para mi empresa.'), source: 'sire_cta' },
  ctaCorreo: { texto: 'Escribir al correo', href: `mailto:${site.email}?subject=${encodeURIComponent('Consulta SIRE - RVIE y RCE')}`, nota: 'Elige el canal de contacto que prefieras.' },
  ctaTelefono: { texto: `Llamar: ${site.phone}`, href: `tel:+51${site.phoneRaw}` },
};
