import { featuredEntryService } from '../data/services'
import { createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

export default function FeaturedService() {
  const message = defaultMessages[featuredEntryService.whatsappKey]

  return (
    <section className="border-t border-line bg-ink text-paper">
      <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-teal">Empieza por aquí</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {featuredEntryService.name}
          </h2>
          <p className="mt-4 max-w-lg text-paper/75">
            {featuredEntryService.description}
          </p>

          <p className="mt-6 font-mono text-4xl font-medium">
            Desde RD${featuredEntryService.priceFrom.toLocaleString('es-DO')}
          </p>

          <a
            href={createWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent(trackingEvents.DIAGNOSTIC_REQUEST, { source: 'featured_service' })
            }
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal
                       px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            {featuredEntryService.ctaLabel}
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-3">
          {featuredEntryService.includes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-lg border border-paper/15 bg-paper/5 px-3 py-3 text-sm"
            >
              <span className="status-dot bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
