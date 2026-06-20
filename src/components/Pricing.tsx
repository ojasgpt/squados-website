import { Check, ChevronRight, Star } from 'lucide-react'
import { motion } from 'motion/react'

const PLANS = [
  {
    name: 'Starter',
    price: '₹2,499',
    period: '/mo',
    desc: 'For small and grassroots academies getting started digitally.',
    badge: null,
    features: [
      'Admin + Coach portals',
      'Up to 30 players',
      'Shared academy subdomain',
      'Session & player tracking',
      'SquadOS branding (footer)',
      'Email support',
    ],
    cta: 'Get started',
    variant: 'ghost' as const,
  },
  {
    name: 'Growth',
    price: '₹5,999',
    period: '/mo',
    desc: 'For established academies that want the full player experience.',
    badge: 'Most popular',
    features: [
      'All Starter portals',
      'Player + Parent portals',
      'Up to 100 players',
      'Custom subdomain',
      'Reduced SquadOS branding',
      'Parent visibility reports',
      'Priority support',
    ],
    cta: 'Get started',
    variant: 'primary' as const,
  },
  {
    name: 'Elite',
    price: '₹14,999',
    period: '/mo',
    desc: 'For professional academies that need every tool and full branding control.',
    badge: null,
    features: [
      'All portals unlocked',
      'Unlimited players',
      'Full white-label (no SquadOS branding)',
      'Custom domain',
      'Physio, Scout & Analyst portals',
      'Dedicated onboarding',
    ],
    cta: 'Talk to us',
    variant: 'ghost' as const,
  },
]

export function Pricing({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) {
  return (
    <section id="pricing" className="section-flow py-32 px-6">
      <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="section-inner max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[11px] font-medium text-white/60 mb-4 backdrop-blur-md">
            <Star className="w-3 h-3" /> Pricing
          </div>
          <h2
            className="display-heading text-4xl md:text-6xl bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent mb-4"
          >
            Simple, transparent pricing.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No setup fees. No surprise charges. Cancel anytime.
            Start free for 14 days on any plan.
          </p>
        </motion.div>

        <p className="text-center text-white/30 text-xs mb-8 -mt-8">
          Pricing in INR · Regional pricing available for UK, Middle East, Europe &amp; Africa
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {PLANS.map(({ name, price, period, desc, badge, features, cta, variant }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              className={`premium-card rounded-3xl p-8 relative flex flex-col ${badge ? 'ring-1 ring-violet-400/40 shadow-[0_0_70px_rgba(124,58,237,0.24)]' : ''}`}
            >
              {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-violet-600 text-white text-xs font-semibold whitespace-nowrap">
                    {badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="font-semibold text-white mb-1">{name}</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-semibold text-4xl text-white">{price}</span>
                  <span className="text-white/35 text-sm mb-1">{period}</span>
                </div>
                <p className="text-white/40 text-sm">{desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map(feature => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/65">
                    <Check className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(name)}
                className={
                  variant === 'primary'
                    ? 'primary-action rounded-full px-8 py-3 text-sm font-semibold text-white transition-all w-full inline-flex items-center justify-center gap-2'
                    : 'glass-action rounded-full px-8 py-3 text-sm font-medium text-white/85 transition-all w-full inline-flex items-center justify-center gap-2'
                }
              >
                {cta} <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center text-white/35 text-sm mt-8"
        >
          Need a custom plan for multiple academies, a club network, or global billing?{' '}
          <a href="mailto:hello@squados.in" className="text-violet-300 hover:text-violet-200 underline">
            Talk to us
          </a>
        </motion.p>
      </div>
    </section>
  )
}
