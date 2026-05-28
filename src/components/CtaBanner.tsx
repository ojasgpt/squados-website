import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

export function CtaBanner() {
  return (
    <section className="section-flow py-32 px-6">
      <div className="section-inner max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="premium-card relative rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.35),transparent_45%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2
              className="display-heading text-4xl md:text-6xl bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent mb-4"
            >
              Ready to launch your first academy?
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
              Start your 14-day free trial today — no card needed, no developers required, live in under 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="primary-action rounded-full px-8 py-4 text-base font-semibold text-white transition-all inline-flex items-center justify-center gap-2">
                Get started free <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@squados.in" className="glass-action rounded-full px-8 py-4 text-base font-medium text-white/85 transition-all">
                Book a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
