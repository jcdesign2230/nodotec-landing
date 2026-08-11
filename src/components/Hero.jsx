import { businessConfig, createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

const statusRows = [
  { label: 'Wi-Fi', before: 'Inestable', after: 'Estable' },
  { label: 'Inventario', before: 'Manual', after: 'Automático' },
  { label: 'Citas', before: 'Por mensajes', after: 'Con recordatorio' },
  { label: 'Respaldo de datos', before: 'Sin respaldo', after: 'Protegido' },
]

export default function Hero() {
  const { hero } = businessConfig

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/75">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#servicios"
              onClick={() => trackEvent(trackingEvents.SERVICE_CLICK, { source: 'hero_primary' })}
              className="btn-primary"
            >
              {hero.ctaPrimary}
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={createWhatsAppLink(defaultMessages.generic)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(trackingEvents.WHATSAPP_CLICK, { source: 'hero_secondary' })}
              className="btn-whatsapp"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-ink/60">
            <span className="status-dot bg-teal" />
            {hero.trustNote}
          </p>
        </div>

        {/* Signature visual: panel de estado antes → después */}
        <div className="relative">
          <div className="card mx-auto max-w-md rounded-[20px] !p-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-line bg-ink px-5 py-4">
              <span className="font-mono text-xs tracking-wide text-paper/70">panel-de-estado</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-signal-red" />
                <span className="h-2 w-2 rounded-full bg-amber" />
                <span className="h-2 w-2 rounded-full bg-teal" />
              </span>
            </div>
            <ul className="divide-y divide-line">
              {statusRows.map((row) => (
                <li key={row.label} className="flex items-center justify-between gap-3 px-5 py-4">
                  <span className="font-mono text-sm text-ink/70">{row.label}</span>
                  <span className="flex items-center gap-2 text-sm">
                    <span className="flex items-center gap-1.5 text-signal-red">
                      <span className="status-dot bg-signal-red" />
                      {row.before}
                    </span>
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-ink/30" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M2 8h12M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="flex items-center gap-1.5 font-medium text-teal-dark">
                      <span className="status-dot bg-teal" />
                      {row.after}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
