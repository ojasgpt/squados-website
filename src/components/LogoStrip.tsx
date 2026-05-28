import { motion } from 'motion/react'

const TRUST_POINTS = [
  '14-day free trial',
  'No credit card required',
  'Setup in under 30 minutes',
  'Cancel anytime',
  'No developers needed',
]

export function LogoStrip() {
  return (
    <section className="relative z-20 -mt-20 w-full bg-gradient-to-b from-transparent via-black/85 to-black pb-14 pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        className="px-6"
      >
        <p className="text-white/30 text-sm text-center mb-5">
          Trusted by StepUp Academy · Launching globally 2025
        </p>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/30 text-xs font-medium">
          {TRUST_POINTS.map(point => (
            <div key={point} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
