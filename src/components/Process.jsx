import { processSteps } from '../data/services'

export default function Process() {
  return (
    <section id="como-funciona" className="border-t border-line bg-white">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sin complicaciones, paso a paso
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative">
              <div className="card h-full">
                <span className="font-mono text-sm text-teal-dark">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <svg
                  viewBox="0 0 24 24"
                  className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-line lg:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
