import { useCases } from '../data/services'

export default function UseCases() {
  return (
    <section className="border-t border-line bg-white">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Ejemplos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Lo que podemos ayudarte a conseguir
          </h2>
          <p className="mt-3 text-ink/70">
            Estos son ejemplos ilustrativos de cómo se vería el cambio, no clientes reales.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.business} className="card">
              <h3 className="text-lg font-semibold">{useCase.business}</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="status-dot mt-1.5 bg-signal-red" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Antes</p>
                    <p className="text-sm text-ink/80">{useCase.before}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="status-dot mt-1.5 bg-teal" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-ink/40">Después</p>
                    <p className="text-sm text-ink/80">{useCase.after}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
