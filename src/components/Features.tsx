import { BarChart3, Globe, Puzzle, Rocket, Settings, Shield, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

const FEATURES: Array<{
  icon: LucideIcon
  color: string
  bg: string
  title: string
  desc: string
}> = [
  {
    icon: Puzzle,
    color: 'text-violet-300',
    bg: 'bg-violet-500/10',
    title: 'Drag-and-drop module builder',
    desc: 'Pick exactly which portals each academy needs — Coach, Player, Parent, Physio, Scout. Drag them in, leave the rest out. Clean for the client, simple for you.',
  },
  {
    icon: Settings,
    color: 'text-emerald-300',
    bg: 'bg-emerald-500/10',
    title: 'Feature-level toggles',
    desc: 'Within each portal, turn individual features on or off. One academy might want the Coach portal but only ratings and tournaments — two toggles, done.',
  },
  {
    icon: Rocket,
    color: 'text-amber-300',
    bg: 'bg-amber-500/10',
    title: 'Launch without developers',
    desc: 'From onboarding to a branded, live portal — fast. No code, no complex setup, no waiting on IT. Any non-technical person on your team can run it.',
  },
  {
    icon: Globe,
    color: 'text-sky-300',
    bg: 'bg-sky-500/10',
    title: 'Custom branding per academy',
    desc: "Upload a logo, pick a colour. Every academy's portal looks like their own product — their name, their colours, their workspace. SquadOS stays in the background.",
  },
  {
    icon: BarChart3,
    color: 'text-purple-300',
    bg: 'bg-purple-500/10',
    title: 'Player tracking and reports',
    desc: 'Football, physical, and attendance scores tracked across every session. Coaches rate on mobile after each session. Parents get visibility into their child\'s progress.',
  },
  {
    icon: Shield,
    color: 'text-rose-300',
    bg: 'bg-rose-500/10',
    title: 'Academy-level data separation',
    desc: "Each academy's data is kept separate with role-based access control. Coaches see only their squads. Admins control what each portal can access.",
  },
]

export function Features() {
  return (
    <section id="features" className="section-flow py-32 px-6">
      <div className="absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="section-inner max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[11px] font-medium text-white/60 mb-4 backdrop-blur-md">
            <Zap className="w-3 h-3" /> Platform Features
          </div>
          <h2
            className="display-heading text-4xl md:text-6xl bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent mb-4"
          >
            Everything your team needs.
            <br />
            Nothing they don't.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            SquadOS is modular by design. Every feature serves a real workflow.
            Nothing is bolted on to look impressive in a demo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, color, bg, title, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -4 }}
              className="premium-card rounded-3xl p-8 hover:bg-white/[0.04] transition-all cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
