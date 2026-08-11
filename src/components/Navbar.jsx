import { useState } from 'react'
import { businessConfig, createWhatsAppLink, defaultMessages, trackEvent, trackingEvents } from '../config/business'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#precios', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink">
            <span className="status-dot bg-teal" />
          </span>
          {businessConfig.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-ink/80 transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={createWhatsAppLink(defaultMessages.generic)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(trackingEvents.WHATSAPP_CLICK, { source: 'navbar' })}
          className="hidden btn-whatsapp !py-2 !px-4 text-sm md:inline-flex"
        >
          Hablar por WhatsApp
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-teal-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={createWhatsAppLink(defaultMessages.generic)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent(trackingEvents.WHATSAPP_CLICK, { source: 'mobile_menu' })
                  setOpen(false)
                }}
                className="btn-whatsapp w-full"
              >
                Hablar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
