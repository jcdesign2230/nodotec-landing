import { services } from '../data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="servicios" className="border-t border-line">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Nuestros servicios</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Una sola oferta, organizada para tu negocio
          </h2>
          <p className="mt-3 text-ink/70">
            Desde un problema puntual hasta un sistema completo. Empiezas donde estés.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
