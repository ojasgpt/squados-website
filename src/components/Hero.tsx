import { motion } from 'motion/react'
import { ArrowRight, Check, Star, TrendingUp, Zap } from 'lucide-react'
import { FootballBackground } from './FootballBackground'

export function Hero({ onStartTrial }: { onStartTrial: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 -mt-24 pt-36 pb-28 overflow-hidden">
      <FootballBackground />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-72 bg-gradient-to-b from-transparent via-black/75 to-black" />
      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full max-w-[calc(100vw-2rem)]">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex justify-center mb-6 px-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 backdrop-blur-md text-center leading-snug">
              <Star className="w-3 h-3 text-emerald-300 flex-shrink-0" />
              Built for ambitious academies — India, Middle East &amp; beyond
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
          >
            THE OPERATING SYSTEM FOR FOOTBALL ACADEMIES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display-heading text-[2rem] sm:text-5xl md:text-6xl mb-6 bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent max-w-4xl leading-tight"
          >
            The operating system
            <br />
            for football academies.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-sm md:text-base font-normal max-w-md"
          >
            Launch your academy's full digital portal — player tracking, coach dashboards,
            parent reports — in under 30 minutes. No developers. No delays.
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="min-h-[50px] mt-2 flex items-center justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onStartTrial} className="primary-action rounded-full px-8 py-4 text-base font-semibold text-white transition-all inline-flex items-center justify-center gap-2">
                Get your academy started <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#how-it-works" className="glass-action rounded-full px-8 py-4 text-base font-medium text-white/85 transition-all">
                See how it works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-6 text-white/50 text-sm"
          >
            {['No credit card required', 'Setup in 30 minutes', 'Cancel anytime'].map(text => (
              <span key={text} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-300" /> {text}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="relative mt-14 w-full max-w-5xl pb-2 lg:pb-28"
        >
          <div className="liquid-glass rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-white/5 text-white/35 text-xs text-left">
                citystarsfc.squados.app
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-black/70 to-black/40">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { label: 'Players',  val: '47',  color: 'from-violet-400 to-violet-200' },
                  { label: 'Sessions', val: '18',  color: 'from-emerald-400 to-emerald-200' },
                  { label: 'Coaches',  val: '6',   color: 'from-amber-400 to-amber-200' },
                  { label: 'Reports',  val: '142', color: 'from-sky-400 to-sky-200' },
                ].map(({ label, val, color }) => (
                  <div key={label} className="rounded-2xl bg-white/[0.04] border border-white/10 p-3 text-left">
                    <p className={`font-bold text-xl bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{val}</p>
                    <p className="text-white/35 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white/[0.035] border border-white/10 p-4 text-left">
                <p className="text-white/70 text-xs font-semibold mb-3">Player Development by Age Group</p>
                <div className="space-y-2.5">
                  {[
                    { label: 'U8-U10',  pct: 68, color: 'from-violet-400 to-violet-200' },
                    { label: 'U10-U12', pct: 74, color: 'from-violet-400 to-violet-200' },
                    { label: 'U12-U14', pct: 81, color: 'from-emerald-400 to-emerald-200' },
                    { label: 'U14-U16', pct: 85, color: 'from-emerald-400 to-emerald-200' },
                  ].map(({ label, pct, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-white/45 text-xs w-16">{label}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-white/10">
                        <motion.div
                          className={`h-1.5 rounded-full bg-gradient-to-r ${color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                      <span className="text-white/65 text-xs font-semibold">{(pct / 10).toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-8 bottom-10 w-[220px] hidden lg:block"
          >
            <div className="liquid-glass rounded-2xl p-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-semibold">Portal live</p>
                <p className="text-white/35 text-xs">City Stars FC</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute right-8 bottom-10 w-[220px] hidden lg:block"
          >
            <div className="liquid-glass rounded-2xl p-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-violet-300" />
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-semibold">47 reports sent</p>
                <p className="text-white/35 text-xs">This week</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
