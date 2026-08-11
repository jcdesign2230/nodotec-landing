import { businessConfig, createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

export default function CTA() {
  const { ctaFinal } = businessConfig

  return (
    <section className="border-t border-line bg-ink text-paper">
      <div className="container-page py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {ctaFinal.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-paper/70">{ctaFinal.subtitle}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={createWhatsAppLink(defaultMessages.generic)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent(trackingEvents.WHATSAPP_CLICK, { source: 'cta_final' })}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            {ctaFinal.ctaPrimary}
          </a>
          <a
            href={createWhatsAppLink(defaultMessages.diagnostico)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent(trackingEvents.DIAGNOSTIC_REQUEST, { source: 'cta_final' })}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper"
          >
            {ctaFinal.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
