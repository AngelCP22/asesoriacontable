// ─────────────────────────────────────────────────────────────
//  Datos centralizados del sitio. NO hardcodear estos valores en
//  los componentes: importar siempre desde aquí.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Asesoría Contable",
  legalName: "Asesoría Contable, Tributaria y Laboral",
  tagline: "Tributaria & Laboral",
  domain: "solucionestacontable.com",
  description:
    "Asesoría contable, tributaria y laboral. Contabilidad, declaraciones SUNAT (RENTA, IGV, PLAME), planillas, constitución de empresas y más. Atención cercana y confiable.",
  // Contacto
  phone: "930 916 115",
  phoneRaw: "930916115",
  whatsapp: "51930916115", // +51 (Perú)
  email: "asesoriacontabletributaria13@gmail.com",
  hours: "Lun – Vie · 9:00 a.m. – 6:00 p.m.",
  hoursSat: "Sábados · 9:00 a.m. – 1:00 p.m.",
  // Titular del estudio (del afiche oficial)
  accountant: {
    name: "Yakel Marcatoma Pozo",
    cpc: "C.P.C. 8413",
  },
  // Redes
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const waMessage =
  "Hola, me gustaría agendar una asesoría contable. ¿Podrían darme más información?";

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  waMessage
)}`;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const metrics = [
  { value: "+200", label: "Clientes satisfechos" },
  { value: "+10", label: "Años de experiencia" },
  { value: "+50K", label: "Declaraciones presentadas" },
  { value: "98%", label: "Cumplimiento a tiempo" },
];

// Barra de confianza bajo el hero (CPC · SUNAT · zona · experiencia)
export const trustbar = [
  {
    icon: "badge",
    title: "Yakel Marcatoma Pozo",
    label: "Contador Público Colegiado · C.P.C. 8413",
  },
  { icon: "shield", title: "SUNAT", label: "Atención a fiscalizaciones" },
  {
    icon: "gear",
    title: "Procesos automatizados",
    label: "reportes e indicadores eficientes",
  },
  { icon: "person", title: "Más de 10 años", label: "de experiencia" },
];

// Proceso de trabajo (mockup: "Nuestro proceso es simple y eficaz")
export const process = [
  { step: "1", title: "Diagnóstico", text: "Conocemos tu negocio y necesidades." },
  { step: "2", title: "Propuesta", text: "Diseñamos la mejor solución a tu medida." },
  { step: "3", title: "Ejecución", text: "Implementamos y gestionamos con precisión." },
  { step: "4", title: "Acompañamiento", text: "Te apoyamos continuamente para que sigas creciendo." },
];

export const services = [
  {
    icon: "calc",
    title: "Contabilidad",
    text: "Llevamos tu contabilidad manual y computarizada (RUS, RER, MYPE, RG).",
  },
  {
    icon: "declarations",
    title: "Declaraciones Mensuales",
    text: "Elaboración y presentación de declaraciones (RENTA, IGV, PLAME y más).",
  },
  {
    icon: "laptop",
    title: "Libros Electrónicos",
    text: "Registro y presentación de Libros Electrónicos PLE/SIRE con total cumplimiento.",
  },
  {
    icon: "payroll",
    title: "Planillas y Laboral",
    text: "Gestión de planillas, CTS, gratificaciones, boletas y cumplimiento laboral.",
  },
  {
    icon: "company",
    title: "Constitución de Empresas",
    text: "Constitución de empresas EIRL, SAC, SRL y obtención de RUC.",
  },
  {
    icon: "scales",
    title: "Asesoría Tributaria",
    text: "Planeamiento tributario, atención a fiscalizaciones SUNAT y defensa de contingencias.",
  },
  {
    icon: "refund",
    title: "Devoluciones y Trámites",
    text: "Devoluciones de IGV, percepciones, detracciones y otros trámites ante SUNAT.",
  },
  {
    icon: "handshake",
    title: "Outsourcing Contable",
    text: "Externaliza tu contabilidad con seguridad, eficiencia y ahorro.",
  },
  {
    icon: "bank",
    title: "Legalización de Libros",
    text: "Legalización de libros contables y actualización de contabilidades atrasadas.",
  },
  {
    icon: "docs",
    title: "Trámites en General",
    text: "Trámites ante SUNAT, ESSALUD, AFP, Municipalidad y más.",
  },
];

export const reasons = [
  {
    icon: "person",
    title: "Asesoría personalizada y cercana",
    text: "Soluciones hechas a la medida de tu negocio, con un asesor asignado que conoce tu caso.",
  },
  {
    icon: "shield",
    title: "Experiencia y actualización constante",
    text: "Más de 10 años asesorando a empresas y emprendedores, siempre al día con la normativa.",
  },
  {
    icon: "gear",
    title: "Tecnología y procesos eficientes",
    text: "Herramientas digitales y procesos ordenados para entregarte reportes puntuales y sin errores.",
  },
  {
    icon: "handshake",
    title: "Confidencialidad y ética profesional",
    text: "Tu información se maneja con absoluta reserva y dentro del marco legal, sin excepciones.",
  },
];

export const values = [
  "Ética y transparencia",
  "Compromiso con resultados",
  "Comunicación clara y constante",
];

export const testimonials = [
  {
    name: "Claudia R.",
    role: "Gerente General",
    text: "Excelente servicio, siempre atentos y cumplen con todo a tiempo. Gracias a su asesoría mi empresa está al día y sin contingencias.",
  },
  {
    name: "Jorge M.",
    role: "Emprendedor",
    text: "Profesionales comprometidos y muy responsables. Nos ayudaron a regularizar nuestra empresa y optimizar nuestros impuestos.",
  },
  {
    name: "María L.",
    role: "Administradora",
    text: "La mejor decisión fue externalizar nuestra contabilidad. Ahorro de tiempo y total confianza en su trabajo.",
  },
];

export const faqs = [
  {
    q: "¿Qué tipo de empresas pueden contratar sus servicios?",
    a: "Trabajamos con personas naturales con negocio, emprendedores, MYPES y empresas consolidadas en cualquier régimen (NRUS, RER, RMT o General).",
  },
  {
    q: "¿Atienden de manera virtual?",
    a: "Sí. Brindamos atención virtual con la misma calidad de servicio, coordinando cada etapa por canales digitales.",
  },
  {
    q: "¿Cómo puedo enviar mi información contable?",
    a: "Puedes enviarla por WhatsApp o correo electrónico. También coordinamos accesos digitales (SUNAT SOL) según lo que te resulte más cómodo.",
  },
  {
    q: "¿Qué pasa si tengo una fiscalización de SUNAT?",
    a: "Te acompañamos durante todo el proceso: revisamos tu documentación, preparamos los descargos y atendemos los requerimientos de SUNAT para minimizar contingencias.",
  },
  {
    q: "¿Puedo solicitar una cotización sin compromiso?",
    a: "Claro que sí. Escríbenos por WhatsApp y te damos una cotización clara y sin sorpresas tras una evaluación inicial gratuita, según el volumen y régimen de tu empresa.",
  },
];

export const resources = [
  {
    tag: "Tributario",
    date: "Jun 2026",
    title: "Nuevas tasas de percepción 2026 y su impacto en tu negocio",
    text: "Qué cambió, a quién afecta y cómo evitar pagar de más este año.",
    img: "assets/blog-tributario.svg",
  },
  {
    tag: "Contable",
    date: "May 2026",
    title: "Errores comunes en libros electrónicos y cómo evitarlos",
    text: "Los 5 fallos más frecuentes en el PLE/SIRE que generan observaciones.",
    img: "assets/blog-contable.svg",
  },
  {
    tag: "Laboral",
    date: "Abr 2026",
    title: "Beneficios de una buena gestión laboral en tu empresa",
    text: "Planillas al día, menos multas y colaboradores más tranquilos.",
    img: "assets/blog-laboral.svg",
  },
];
