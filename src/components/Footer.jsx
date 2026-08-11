import { businessConfig } from '../config/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink">
              <span className="status-dot bg-teal" />
            </span>
            {businessConfig.name}
          </a>
          <p className="mt-3 max-w-xs text-sm text-ink/60">
            Soporte, redes, sistemas y automatización para pequeños negocios en{' '}
            {businessConfig.location}.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`https://wa.me/${businessConfig.whatsapp}`} className="hover:text-teal-dark">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${businessConfig.email}`} className="hover:text-teal-dark">
                {businessConfig.email}
              </a>
            </li>
            <li className="text-ink/60">{businessConfig.location}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40">Redes</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={businessConfig.social.instagram} className="hover:text-teal-dark">
                Instagram
              </a>
            </li>
            <li>
              <a href={businessConfig.social.facebook} className="hover:text-teal-dark">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-teal-dark">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-dark">
                Términos básicos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <p className="container-page text-xs text-ink/45">
          © {year} {businessConfig.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
