import { useState } from 'react'
import { businessConfig, createWhatsAppLink, trackEvent, trackingEvents } from '../config/business'

const needOptions = [
  'Soporte informático',
  'Redes/Wi-Fi',
  'POS/inventario',
  'Automatización',
  'Página web',
  'Otro',
]

const initialForm = { name: '', whatsapp: '', businessType: '', need: needOptions[0] }

// -----------------------------------------------------------------
// Este formulario NO envía datos a ningún backend todavía. Al enviarse,
// arma un mensaje y lo abre en WhatsApp para que la conversación
// continúe ahí mismo. Cuando quieras recibir los datos por correo o
// guardarlos en una base de datos, conecta uno de estos servicios:
//
//   - Formspree (https://formspree.io): agrega action="https://formspree.io/f/TU_ID"
//     y method="POST" al <form>, y quita el onSubmit personalizado.
//   - Netlify Forms: agrega data-netlify="true" y un input hidden
//     name="form-name" si despliegas en Netlify.
//   - EmailJS (https://www.emailjs.com): instala @emailjs/browser y
//     reemplaza handleSubmit con emailjs.send(...).
//   - Backend propio: reemplaza handleSubmit con tu propio fetch('/api/...').
// -----------------------------------------------------------------

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    trackEvent(trackingEvents.CONTACT_FORM_SUBMIT, { need: form.need })

    const message = [
      'Hola, me gustaría solicitar información.',
      `Nombre: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      `Tipo de negocio: ${form.businessType || 'No especificado'}`,
      `Necesito: ${form.need}`,
    ].join('\n')

    window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="border-t border-line bg-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Cuéntanos qué necesitas
            </h2>
            <p className="mt-3 max-w-md text-ink/70">
              Completa el formulario y te contactaremos por WhatsApp para darte los siguientes pasos.
              También puedes escribirnos directamente.
            </p>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(trackingEvents.WHATSAPP_CLICK, { source: 'contact_section' })}
              className="btn-whatsapp mt-6"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink/80">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="mb-1 block text-sm font-medium text-ink/80">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal"
                placeholder="809 000 0000"
              />
            </div>

            <div>
              <label htmlFor="businessType" className="mb-1 block text-sm font-medium text-ink/80">
                Tipo de negocio
              </label>
              <input
                id="businessType"
                name="businessType"
                type="text"
                value={form.businessType}
                onChange={handleChange}
                className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal"
                placeholder="Ej. colmado, taller, salón..."
              />
            </div>

            <div>
              <label htmlFor="need" className="mb-1 block text-sm font-medium text-ink/80">
                ¿Qué necesitas?
              </label>
              <select
                id="need"
                name="need"
                value={form.need}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
              >
                {needOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar por WhatsApp
            </button>

            {submitted && (
              <p role="status" className="flex items-center gap-2 text-sm text-teal-dark">
                <span className="status-dot bg-teal" />
                Abrimos WhatsApp con tu mensaje listo para enviar.
              </p>
            )}

            <p className="text-xs text-ink/45">
              También puedes escribirnos a {businessConfig.email}.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
