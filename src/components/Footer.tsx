import { Layers } from 'lucide-react'

const LINKS: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: 'Features',    href: '#features'    },
    { label: 'Portals',     href: '#portals'     },
    { label: 'Pricing',     href: '#pricing'     },
    { label: 'How it works',href: '#how-it-works'},
  ],
  Company: [
    { label: 'About',   href: 'mailto:hello@squados.in'           },
    { label: 'Contact', href: 'mailto:hello@squados.in'           },
    { label: 'StepUp Academy', href: 'https://stepupacademy.in'   },
  ],
  Support: [
    { label: 'Get started',  href: '#pricing'                     },
    { label: 'Book a demo',  href: 'mailto:hello@squados.in'      },
    { label: 'Log in',       href: 'https://app.squados.in/login' },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black py-16 px-6">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.025] to-transparent" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-white">SquadOS</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              The operating system for football academies. Built so anyone can launch
              a world-class academy portal without writing a single line of code.
            </p>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-white font-semibold text-sm mb-4">{group}</p>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/35 hover:text-white/65 text-sm transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">© 2026 SquadOS. All rights reserved.</p>
          <p className="text-white/25 text-sm">
            Built for{' '}
            <a href="https://stepupacademy.in" className="text-violet-300 hover:text-violet-200 transition-colors">
              StepUp Academy
            </a>
            {' '}· hello@squados.in
          </p>
        </div>
      </div>
    </footer>
  )
}
