import { createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

const flow = ['Cliente', 'WhatsApp', 'Automatización', 'Registro', 'Notificación', 'Resultado']

const examples = ['Citas', 'Pedidos', 'Formularios', 'Notificaciones', 'Reportes']

export default function Automation() {
  const message = defaultMessages.automatizacion

  return (
    <section className="border-t border-line">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Automatización</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tareas repetitivas, resueltas solas
          </h2>
          <p className="mt-3 text-ink/70">
            Conectamos lo que ya usas, como WhatsApp, con procesos automáticos que ahorran tiempo.
          </p>
        </div>

        <div className="card mt-10 overflow-x-auto !p-6">
          <div className="flex min-w-max items-center gap-2 font-mono text-sm">
            {flow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-line bg-paper px-4 py-2 text-ink/80">
                  {step}
                </span>
                {index < flow.length - 1 && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-teal" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <ul className="flex flex-wrap gap-2">
            {examples.map((example) => (
              <li key={example} className="rounded-full bg-teal-light px-3 py-1.5 text-sm text-teal-dark">
                {example}
              </li>
            ))}
          </ul>
          <a
            href={createWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent(trackingEvents.SERVICE_CLICK, { service: 'automatizacion' })}
            className="btn-whatsapp ml-auto"
          >
            Quiero automatizar un proceso
          </a>
        </div>
      </div>
    </section>
  )
}
