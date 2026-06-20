import { Layers } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Features',    href: '#features'     },
  { label: 'How it works',href: '#how-it-works'  },
  { label: 'Portals',     href: '#portals'       },
  { label: 'Pricing',     href: '#pricing'       },
]

export function Navbar({ onGetStarted }: { onGetStarted: () => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 px-4 md:px-6 py-4 md:py-6 w-full transition-colors duration-300 ${scrolled ? 'border-b border-white/5' : 'border-b border-transparent'}`}
    >
      <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-lg">SquadOS</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">
            {LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-white transition-colors duration-300">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGetStarted}
            className="glass-action rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white transition-all whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
