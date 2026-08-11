import { useEffect, useRef } from 'react'
import { services, supportPlans } from '../data/services'
import { createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

export default function Pricing() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent(trackingEvents.PRICING_VIEW)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="precios" ref={sectionRef} className="border-t border-line bg-white">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Precios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Precios iniciales, sin sorpresas
          </h2>
          <p className="mt-3 text-ink/70">
            Estos son precios de partida. El costo final depende del alcance de tu proyecto.
          </p>
        </div>

        {/* Resumen rápido por tipo de servicio */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between rounded-card border border-line px-5 py-4">
              <span className="text-sm font-medium text-ink/80">{service.name}</span>
              <span className="font-mono text-sm text-teal-dark">
                RD${service.priceFrom.toLocaleString('es-DO')}{service.priceSuffix || ''}
              </span>
            </div>
          ))}
        </div>

        {/* Planes de soporte mensual */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold">Planes de soporte mensual</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {supportPlans.map((plan) => (
              <div
                key={plan.id}
                className={`card flex flex-col ${plan.highlighted ? 'border-teal ring-1 ring-teal' : ''}`}
              >
                {plan.highlighted && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-teal-light px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-teal-dark">
                    Más elegido
                  </span>
                )}
                <h4 className="text-lg font-semibold">{plan.name}</h4>
                <p className="mt-1 text-sm text-ink/60">{plan.description}</p>
                <p className="mt-4 font-mono text-3xl font-medium">
                  {plan.priceFrom ? (
                    <>
                      RD${plan.priceFrom.toLocaleString('es-DO')}
                      <span className="text-base text-ink/50">{plan.priceSuffix}</span>
                    </>
                  ) : (
                    plan.priceLabel
                  )}
                </p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink/75">
                      <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={createWhatsAppLink(defaultMessages.soporteMensual)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(trackingEvents.SERVICE_CLICK, { service: `plan-${plan.id}` })}
                  className="btn-primary mt-6 w-full"
                >
                  Elegir {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
