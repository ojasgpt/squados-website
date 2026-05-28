import { Globe2, Languages, Network, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'

const GLOBAL_POINTS = [
  {
    icon: Globe2,
    title: 'Built for any market',
    desc: 'Run academies, branches, and club programmes across countries without changing the product.',
  },
  {
    icon: Network,
    title: 'Multi-academy structure',
    desc: 'Support a single academy today and a city, franchise, or club network tomorrow.',
  },
  {
    icon: Languages,
    title: 'Local workflows',
    desc: 'Custom stages, curriculums, portals, and reports adapt to how each academy actually works.',
  },
  {
    icon: ShieldCheck,
    title: 'Client-ready control',
    desc: 'Give each academy its own brand, users, access levels, and operating rhythm.',
  },
]

const REGIONS = ['India', 'UK', 'Middle East', 'Africa', 'Europe', 'Asia-Pacific']

export function GlobalReady() {
  return (
    <section className="section-flow px-6 py-28">
      <div className="absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="section-inner mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[11px] font-medium text-white/60 backdrop-blur-md">
            <Globe2 className="h-3 w-3" /> Global-ready platform
          </div>
          <h2 className="display-heading mb-5 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-4xl text-transparent md:text-6xl">
            One system for academies everywhere.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            SquadOS is designed for football academies that want a professional operating layer,
            whether they train 40 players locally or manage multiple branches across regions.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {REGIONS.map(region => (
              <span key={region} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-white/50">
                {region}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="premium-card relative overflow-hidden rounded-3xl p-5 md:p-7"
        >
          <motion.div
            className="global-orbit absolute -right-20 -top-20 h-80 w-80 opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative grid gap-4 md:grid-cols-2">
            {GLOBAL_POINTS.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-80px' }}
                className="rounded-2xl border border-white/8 bg-black/25 p-5 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/42">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
