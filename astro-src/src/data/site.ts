// ─────────────────────────────────────────────────────────────
//  Datos centralizados del sitio. NO hardcodear estos valores en
//  los componentes: importar siempre desde aquí.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Asesoría Contable",
  legalName: "Asesoría Contable, Tributaria y Laboral",
  tagline: "Tributaria & Laboral",
  domain: "asesoria-contable",
  description:
    "Asesoría contable, tributaria y laboral en Lima Sur. Contabilidad, declaraciones SUNAT (RENTA, IGV, PLAME), planillas, constitución de empresas y más. Atención cercana y confiable.",
  // Contacto
  phone: "930 916 115",
  phoneRaw: "930916115",
  whatsapp: "51930916115", // +51 (Perú)
  email: "asesoriacontabletributaria13@gmail.com",
  address: "Calle Ciro Alegría Mz. E Lt. 6, Manuel Scorza",
  district: "San Juan de Miraflores — Lima",
  hours: "Lun – Vie · 9:00 a.m. – 6:00 p.m.",
  mapsQuery: "Manuel Scorza, San Juan de Miraflores, Lima, Perú",
  // Reputación
  rating: "4.9",
  reviews: "60",
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

export const zones = [
  "San Juan de Miraflores",
  "Villa María del Triunfo",
  "Villa El Salvador",
  "Chorrillos",
  "Surco",
  "La Molina",
];

export const metrics = [
  { value: "+200", label: "Clientes satisfechos" },
  { value: "+10", label: "Años de experiencia" },
  { value: "+50K", label: "Declaraciones presentadas" },
  { value: "98%", label: "Cumplimiento a tiempo" },
];

export const services = [
  {
    icon: "ledger",
    title: "Contabilidad Integral",
    text: "Contabilidad mensual completa, fiscal y laboral. Libros electrónicos PLE y SIRE, estados financieros y reportes de gestión.",
  },
  {
    icon: "tax",
    title: "Tributación",
    text: "Declaraciones mensuales (RENTA, IGV, PLAME) y planeamiento tributario para optimizar tu carga fiscal de forma legal.",
  },
  {
    icon: "labor",
    title: "Laboral",
    text: "Asesoría laboral, planillas, T-Registro, liquidaciones, CTS, gratificaciones y cumplimiento ante SUNAFIL.",
  },
  {
    icon: "company",
    title: "Constitución de Empresas",
    text: "Constitución de empresas EIRL, SAC, SRL y formalización de negocios: desde la minuta hasta el RUC activo.",
  },
  {
    icon: "finance",
    title: "Financiero",
    text: "Estrategias financieras, flujo de caja y análisis de rentabilidad para que tomes mejores decisiones y crezcas.",
  },
  {
    icon: "more",
    title: "Otros Servicios",
    text: "Fraccionamientos, devoluciones, trámites ante SUNAT y gestiones administrativas en general.",
  },
];

export const reasons = [
  {
    icon: "person",
    title: "Atención personalizada",
    text: "Soluciones hechas a la medida de tu negocio, con un asesor asignado que conoce tu caso.",
  },
  {
    icon: "shield",
    title: "Experiencia y confianza",
    text: "Más de 10 años asesorando a empresas y emprendedores de Lima con resultados comprobados.",
  },
  {
    icon: "chart",
    title: "Resultados comprobados",
    text: "Estrategias que generan ahorro real y crecimiento sostenible, siempre dentro del marco legal.",
  },
  {
    icon: "handshake",
    title: "Acompañamiento continuo",
    text: "Estamos contigo en cada etapa del negocio, con comunicación clara y constante.",
  },
];

export const values = [
  "Ética y transparencia",
  "Compromiso con resultados",
  "Comunicación clara y constante",
];

export const testimonials = [
  {
    name: "Mario P.",
    role: "Emprendedor",
    text: "Excelente servicio, muy profesionales y siempre atentos. Nos han ayudado a mantener todo en orden y ahorrar impuestos.",
  },
  {
    name: "Carlos R.",
    role: "Gerente General",
    text: "Gran asesoría contable y laboral. Responden rápido y explican todo claro. 100% recomendados.",
  },
  {
    name: "Lucía M.",
    role: "Dueña de negocio",
    text: "Formalicé mi empresa con ellos y todo fue rapidísimo. Ahora mi contabilidad está al día cada mes.",
  },
];

export const faqs = [
  {
    q: "¿Qué documentos necesito para iniciar?",
    a: "Para empezar solo necesitamos tu RUC (o DNI si aún no estás formalizado), tus comprobantes de compras y ventas del período, y tus accesos SUNAT. Nosotros te guiamos paso a paso.",
  },
  {
    q: "¿Cuál es el costo de sus servicios?",
    a: "El costo depende del volumen de operaciones y del régimen de tu empresa. Te damos una cotización clara y sin sorpresas tras una evaluación inicial gratuita por WhatsApp.",
  },
  {
    q: "¿Atienden empresas de todos los tamaños?",
    a: "Sí. Trabajamos con personas naturales con negocio, emprendedores, MYPES y empresas ya consolidadas en cualquier régimen (NRUS, RER, RMT o General).",
  },
  {
    q: "¿Puedo recibir asesoría 100% virtual?",
    a: "Claro. Atendemos de forma presencial en San Juan de Miraflores y también 100% virtual en toda Lima y provincias, con la misma calidad de servicio.",
  },
  {
    q: "¿Con qué frecuencia recibo mis reportes?",
    a: "Entregamos tus estados financieros y reportes de impuestos cada mes, antes de los vencimientos SUNAT, para que siempre sepas cómo va tu negocio.",
  },
];

export const resources = [
  {
    tag: "Tributario",
    date: "Jun 2026",
    title: "Nuevas tasas de percepción 2026 y su impacto en tu negocio",
    text: "Qué cambió, a quién afecta y cómo evitar pagar de más este año.",
  },
  {
    tag: "Contable",
    date: "May 2026",
    title: "Errores comunes en libros electrónicos y cómo evitarlos",
    text: "Los 5 fallos más frecuentes en el PLE/SIRE que generan observaciones.",
  },
  {
    tag: "Laboral",
    date: "Abr 2026",
    title: "Beneficios de una buena gestión laboral en tu empresa",
    text: "Planillas al día, menos multas y colaboradores más tranquilos.",
  },
];
