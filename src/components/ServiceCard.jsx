import { createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

export default function ServiceCard({ service }) {
  const message = defaultMessages[service.whatsappKey] || defaultMessages.generic

  return (
    <article className={`card flex h-full flex-col ${service.featured ? 'border-teal ring-1 ring-teal' : ''}`}>
      {service.featured && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-light px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-teal-dark">
          <span className="status-dot bg-teal" />
          Mayor potencial recurrente
        </span>
      )}

      <h3 className="text-xl font-semibold">{service.name}</h3>
      <p className="mt-2 text-sm text-ink/60">{service.problem}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink/85">{service.solution}</p>

      <ul className="mt-4 space-y-2">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-ink/75">
            <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-1 flex-col justify-end gap-4">
        <div>
          <p className="font-mono text-2xl font-medium">
            Desde RD${service.priceFrom.toLocaleString('es-DO')}
            {service.priceSuffix && <span className="text-base text-ink/50">{service.priceSuffix}</span>}
          </p>
          <p className="text-xs text-ink/50">{service.priceNote || service.priceModel}</p>
        </div>
        <a
          href={createWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(trackingEvents.SERVICE_CLICK, { service: service.id })}
          className="btn-primary w-full"
        >
          {service.ctaLabel}
        </a>
      </div>
    </article>
  )
}
