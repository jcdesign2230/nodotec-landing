import { commonProblems } from '../data/services'

export default function ProblemSection() {
  return (
    <section className="border-t border-line bg-white">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">El punto de partida</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Te está pasando esto?
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commonProblems.map((problem) => (
            <li key={problem} className="card flex items-start gap-3">
              <span className="status-dot mt-1.5 bg-signal-red" aria-hidden="true" />
              <span className="text-base leading-snug text-ink/85">{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
