import { BarChart3, Bell, Lock, Puzzle, Star, TrendingUp, Users } from 'lucide-react'
import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

const PORTALS: Array<{
  name: string
  desc: string
  icon: LucideIcon
  color: string
}> = [
  { name: 'Admin Portal',   desc: 'Academy overview, player management, report generation, coach oversight',    icon: BarChart3,  color: 'violet' },
  { name: 'Coach Portal',   desc: 'Session management, player ratings, attendance, development tracking',       icon: Users,      color: 'emerald' },
  { name: 'Player Portal',  desc: 'Personal progress, session history, skill scores, pathway goals',           icon: TrendingUp, color: 'amber' },
  { name: 'Parent Portal',  desc: 'Weekly reports, attendance records, payment history, direct messaging',     icon: Bell,       color: 'sky' },
  { name: 'Physio Portal',  desc: 'Injury records, return-to-play protocols, fitness assessments',             icon: Lock,       color: 'rose' },
  { name: 'Scout Portal',   desc: 'Player discovery, shortlists, performance benchmarking across academies',   icon: Star,       color: 'purple' },
]

const COLOR_MAP: Record<string, string> = {
  violet:  'bg-violet-500/10 text-violet-300 border-violet-400/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
  amber:   'bg-amber-500/10 text-amber-300 border-amber-400/20',
  sky:     'bg-sky-500/10 text-sky-300 border-sky-400/20',
  rose:    'bg-rose-500/10 text-rose-300 border-rose-400/20',
  purple:  'bg-purple-500/10 text-purple-300 border-purple-400/20',
}

export function Portals() {
  return (
    <section id="portals" className="section-flow py-32 px-6">
      <div className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-emerald-500/8 blur-3xl" />
      <div className="section-inner max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[11px] font-medium text-white/60 mb-4 backdrop-blur-md">
            <Puzzle className="w-3 h-3" /> Available Portals
          </div>
          <h2
            className="display-heading text-4xl md:text-6xl bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent mb-4"
          >
            Every role, its own portal.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Mix and match portals for each client. Drag in only what they pay for.
            Every portal is production-ready from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTALS.map(({ name, desc, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ scale: 1.02 }}
              className="premium-card rounded-3xl p-6 flex items-start gap-4 hover:bg-white/[0.04] transition-all cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${COLOR_MAP[color]}`}>
                <Icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{name}</p>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center text-white/35 text-sm mt-6"
        >
          + Analyst, Welfare, Scout, Fitness, Facilities, Finance &amp; more — every role covered
        </motion.p>
      </div>
    </section>
  )
}
