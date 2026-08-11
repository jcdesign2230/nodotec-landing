// =============================================================
// SERVICIOS
// Para agregar, quitar o modificar un servicio, edita este arreglo.
// Cada servicio se usa tanto en la sección "Soluciones" como en
// "Precios". `whatsappKey` debe coincidir con una clave de
// `defaultMessages` en src/config/business.js
// =============================================================

export const services = [
  {
    id: 'soporte-it',
    name: 'Soporte Tecnico',
    problem: 'Computadoras lentas, Windows con errores, impresoras que no funcionan.',
    solution: 'Diagnóstico y solución de problemas de PCs, Windows, impresoras y Microsoft 365.',
    benefits: [
      'Soporte remoto y presencial',
      'Optimización de Windows',
      'Configuración de Microsoft 365',
      'Resolución de errores comunes',
    ],
    priceFrom: 1500,
    priceModel: 'Pago por servicio o soporte recurrente',
    whatsappKey: 'soporteIT',
    ctaLabel: 'Solicitar soporte',
  },
  {
    id: 'redes-wifi',
    name: 'Redes y Wi-Fi',
    problem: 'Wi-Fi inestable, routers mal configurados, cámaras sin instalar.',
    solution: 'Diagnóstico, configuración y optimización de redes, Wi-Fi y cámaras.',
    benefits: [
      'Optimización de cobertura Wi-Fi',
      'Configuración de routers',
      'Instalación de cámaras y redes',
      'Seguridad básica de red',
    ],
    priceFrom: 2000,
    priceModel: 'Pago único / mantenimiento',
    whatsappKey: 'redes',
    ctaLabel: 'Solicitar diagnóstico',
  },
  {
    id: 'sistemas-negocio',
    name: 'Sistemas para negocios',
    problem: 'Ventas e inventario controlados en libretas o Excel.',
    solution: 'Sistemas de POS, inventario, ventas, clientes y reportes hechos a tu medida.',
    benefits: [
      'Control de inventario en tiempo real',
      'Registro de ventas y caja',
      'Reportes claros de tu negocio',
      'Evaluamos la integración con las herramientas de facturación que tu negocio necesita',
    ],
    priceFrom: 5000,
    priceModel: 'Instalación + mensualidad',
    priceNote: 'Desde RD$5,000 para proyectos piloto',
    whatsappKey: 'pos',
    ctaLabel: 'Quiero digitalizar mi negocio',
  },
  {
    id: 'automatizacion',
    name: 'Automatización',
    problem: 'Tiempo perdido respondiendo lo mismo, procesos manuales repetitivos.',
    solution: 'Automatizamos tareas con WhatsApp, formularios, notificaciones y reportes.',
    benefits: [
      'Automatización de citas y pedidos',
      'Notificaciones automáticas',
      'Formularios conectados a tu flujo',
      'Integración entre herramientas que ya usas',
    ],
    priceFrom: 5000,
    priceModel: 'Proyecto + mantenimiento',
    whatsappKey: 'automatizacion',
    ctaLabel: 'Quiero automatizar un proceso',
  },
  {
    id: 'digitalizacion',
    name: 'Digitalización de negocios',
    problem: 'Tu negocio no tiene presencia digital o su información está desorganizada.',
    solution: 'Página web, catálogo, menú QR y organización de tu presencia digital.',
    benefits: [
      'Página web o catálogo digital',
      'Menú QR para restaurantes/cafeterías',
      'Formularios de contacto',
      'Mantenimiento opcional',
    ],
    priceFrom: 2500,
    priceModel: 'Pago único + mantenimiento opcional',
    whatsappKey: 'digitalizacion',
    ctaLabel: 'Quiero mi presencia digital',
  },
  {
    id: 'soporte-mensual',
    name: 'Soporte tecnológico mensual',
    problem: 'No tienes quién te ayude cuando algo falla, sin pagar un departamento de IT completo.',
    solution: 'Soporte tecnológico recurrente: PCs, redes, sistemas y acompañamiento continuo.',
    benefits: [
      'Soporte prioritario todo el mes',
      'Revisión preventiva periódica',
      'Acompañamiento continuo',
      'Escalamos contigo: de soporte a sistemas',
    ],
    priceFrom: 3000,
    priceModel: 'Suscripción mensual',
    priceSuffix: '/mes',
    whatsappKey: 'soporteMensual',
    ctaLabel: 'Ver planes de soporte',
    featured: true,
  },
]

// Servicio destacado como "producto de entrada" — bajo riesgo, alta conversión.
export const featuredEntryService = {
  id: 'diagnostico',
  name: 'Diagnóstico tecnológico',
  priceFrom: 500,
  description:
    'No necesitas contratar un departamento de IT para resolver tus problemas tecnológicos. Revisamos primero qué necesitas, sin compromisos grandes desde el inicio.',
  includes: [
    'Soporte remoto',
    'Asistencia presencial',
    'Windows',
    'Wi-Fi',
    'Impresoras',
    'Microsoft 365',
    'Backup',
  ],
  whatsappKey: 'diagnostico',
  ctaLabel: 'Solicitar diagnóstico',
}

// Planes de soporte mensual (servicio de mayor potencial recurrente).
export const supportPlans = [
  {
    id: 'basico',
    name: 'Plan Básico',
    priceFrom: 3000,
    priceSuffix: '/mes',
    description: 'Soporte esencial para negocios pequeños con pocos equipos.',
    features: ['Soporte remoto prioritario', 'Revisión mensual de equipos', 'Respuesta en horario laboral'],
  },
  {
    id: 'negocio',
    name: 'Plan Negocio',
    priceFrom: 6000,
    priceSuffix: '/mes',
    description: 'Para negocios con varios equipos, red y sistema en uso diario.',
    features: ['Todo lo del Plan Básico', 'Soporte presencial incluido', 'Revisión de red y backup', 'Prioridad en atención'],
    highlighted: true,
  },
  {
    id: 'personalizado',
    name: 'Plan Personalizado',
    priceFrom: null,
    priceLabel: 'Cotización',
    description: 'Para negocios con necesidades específicas de sistemas o automatización.',
    features: ['Alcance definido junto contigo', 'Combina soporte + sistemas', 'Acompañamiento a medida'],
  },
]

// Cómo funciona (proceso de 4 pasos).
export const processSteps = [
  {
    number: '01',
    title: 'Cuéntanos qué necesitas',
    description: 'Nos escribes por WhatsApp o llenas el formulario y nos cuentas qué está pasando.',
  },
  {
    number: '02',
    title: 'Analizamos el problema',
    description: 'Revisamos tu situación antes de proponer nada. Diagnóstico primero, venta después.',
  },
  {
    number: '03',
    title: 'Te proponemos una solución',
    description: 'Te explicamos en lenguaje claro qué recomendamos y cuánto cuesta.',
  },
  {
    number: '04',
    title: 'Implementamos y damos soporte',
    description: 'Resolvemos el problema y seguimos disponibles después de la entrega.',
  },
]

// Problemas comunes (sección "¿Te está pasando esto?")
export const commonProblems = [
  'Mi computadora está demasiado lenta.',
  'El Wi-Fi falla constantemente.',
  'No sé cuánto inventario tengo.',
  'Todavía manejo mis ventas en Excel o libreta.',
  'Pierdo tiempo respondiendo las mismas preguntas.',
  'No tengo quién me ayude cuando algo falla.',
]

// Casos de uso hipotéticos, presentados claramente como ejemplos (no clientes reales).
export const useCases = [
  {
    business: 'Colmado',
    before: 'Ventas e inventario anotados en una libreta.',
    after: 'POS + inventario + reportes de ventas en tiempo real.',
  },
  {
    business: 'Taller',
    before: 'Órdenes de trabajo en papel, fáciles de perder.',
    after: 'Clientes, vehículos, órdenes y seguimiento organizados.',
  },
  {
    business: 'Barbería / Salón',
    before: 'Citas coordinadas por mensajes manuales.',
    after: 'Agenda con recordatorios automáticos por WhatsApp.',
  },
  {
    business: 'Oficina pequeña',
    before: 'Problemas recurrentes de PCs y Wi-Fi sin quién los resuelva.',
    after: 'Soporte tecnológico continuo, un solo lugar a quién llamar.',
  },
]

// Por qué elegirnos.
export const whyUs = [
  {
    title: 'Soluciones prácticas',
    description: 'No vendemos tecnología innecesaria. Solo lo que tu negocio realmente necesita.',
  },
  {
    title: 'Atención personalizada',
    description: 'Cada negocio tiene necesidades diferentes, y lo tratamos así.',
  },
  {
    title: 'Implementación rápida',
    description: 'Utilizamos herramientas modernas para reducir los tiempos de desarrollo.',
  },
  {
    title: 'Soporte continuo',
    description: 'No desaparecemos después de entregar el trabajo.',
  },
  {
    title: 'Precios transparentes',
    description: 'Mostramos precios iniciales antes de comenzar cualquier trabajo.',
  },
]
