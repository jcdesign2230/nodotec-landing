import { useState } from 'react'
import { faqItems } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="border-t border-line">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-xl">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Todo lo que quieres saber antes de escribirnos
          </h2>
        </div>

        <div className="mt-10 divide-y divide-line rounded-card border border-line bg-white">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium hover:bg-teal-light/40 sm:px-6"
                  >
                    {item.question}
                    <svg
                      viewBox="0 0 20 20"
                      className={`h-5 w-5 shrink-0 text-ink/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4 text-sm leading-relaxed text-ink/70 sm:px-6">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
