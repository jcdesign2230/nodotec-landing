// =============================================================
// CONFIGURACIÓN CENTRAL DEL NEGOCIO
// Edita este archivo para cambiar nombre, contacto, colores y
// textos principales SIN tocar los componentes.
// =============================================================

export const businessConfig = {
  name: 'NodoTec',
  tagline: 'Soporte y sistemas para pequeños negocios',

  // Reemplaza por el número real en formato internacional sin "+" ni espacios.
  // Ejemplo República Dominicana: 1 + código de área + número => 18091234567
  whatsapp: '18092290371',

  email: 'info.jcrodriguez@gmail.com',
  location: 'Santiago De Los Caballeros, República Dominicana',
  serviceArea: 'Atendemos Santiago y alrededores. También trabajamos de forma remota en todo el país.',

  social: {
    instagram: 'https://instagram.com/[USUARIO]',
    facebook: 'https://web.facebook.com/profile.php?id=61593378562144',
  },

  hero: {
    eyebrow: 'Soporte Técnico · Redes · Sistemas · Automatización',
    title: 'Haz que la tecnología trabaje para tu negocio.',
    subtitle:
      'Solucionamos problemas tecnológicos, digitalizamos procesos y automatizamos tareas para que puedas concentrarte en hacer crecer tu negocio.',
    ctaPrimary: 'Quiero una solución',
    ctaSecondary: 'Hablar por WhatsApp',
    trustNote: 'Diagnóstico antes de recomendar cualquier solución.',
  },

  ctaFinal: {
    title: '¿Qué problema tecnológico está frenando tu negocio?',
    subtitle: 'Cuéntanos qué necesitas y te diremos la forma más sencilla de resolverlo.',
    ctaPrimary: 'Hablar por WhatsApp',
    ctaSecondary: 'Solicitar diagnóstico',
  },
}

// URL de WhatsApp reutilizable en toda la página.
// Uso: createWhatsAppLink('Soporte IT') o createWhatsAppLink() para mensaje genérico.
export function createWhatsAppLink(serviceMessage) {
  const base = `https://wa.me/${businessConfig.whatsapp}`
  const message = serviceMessage || defaultMessages.generic
  return `${base}?text=${encodeURIComponent(message)}`
}

// Mensajes predefinidos por tipo de interés. Se usan como valor por
// defecto cuando un CTA no especifica su propio mensaje.
export const defaultMessages = {
  generic:
    'Hola, me gustaría recibir más información sobre sus servicios.',
  diagnostico:
    'Hola, me gustaría solicitar un diagnóstico tecnológico para mi negocio.',
  soporteIT:
    'Hola, estoy interesado en el servicio de Soporte IT. Me gustaría conocer más información y recibir una cotización.',
  redes:
    'Hola, necesito ayuda con mi red/Wi-Fi. Me gustaría solicitar un diagnóstico.',
  pos:
    'Hola, estoy interesado en un sistema POS e inventario para mi negocio. Me gustaría conocer cómo funciona y cuánto cuesta.',
  automatizacion:
    'Hola, quiero automatizar un proceso de mi negocio. Me gustaría explicarles lo que necesito.',
  digitalizacion:
    'Hola, quiero digitalizar la presencia de mi negocio (página, catálogo o menú QR). Me gustaría más información.',
  soporteMensual:
    'Hola, me interesa un plan de soporte tecnológico mensual para mi negocio.',
}

// Eventos sugeridos para medir conversión cuando conectes Analytics/Meta Pixel.
// Ver README.md → "Cómo agregar Google Analytics".
export const trackingEvents = {
  WHATSAPP_CLICK: 'whatsapp_click',
  SERVICE_CLICK: 'service_click',
  PRICING_VIEW: 'pricing_view',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  DIAGNOSTIC_REQUEST: 'diagnostic_request',
}

// Función central de tracking. Hoy solo hace console.log en desarrollo;
// cuando conectes Google Analytics/Meta Pixel, agrega aquí las llamadas
// reales (gtag(...), fbq(...)) sin tener que tocar los componentes.
export function trackEvent(eventName, payload = {}) {
  if (import.meta.env.DEV) {
    console.log('[track]', eventName, payload)
  }
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
  }
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, payload)
  }
}
