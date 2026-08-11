import { whyUs } from '../data/services'

export default function WhyUs() {
  return (
    <section className="border-t border-line">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Por qué elegirnos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Enfocados en resolver, no en complicar
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div key={item.title} className="border-l-2 border-teal pl-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
