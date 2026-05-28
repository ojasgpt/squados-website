import { Building2, Layers, MonitorSmartphone, Puzzle, Rocket } from 'lucide-react'
import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

const STEPS: Array<{
  number: string
  icon: LucideIcon
  title: string
  desc: string
  detail: string
}> = [
  {
    number: '01',
    icon: Building2,
    title: 'Create the client',
    desc: 'Enter academy name, primary contact, sport type, and confirm payment plan. Takes 90 seconds. Their workspace is created instantly.',
    detail: 'Name · Contact · Sport · Plan',
  },
  {
    number: '02',
    icon: Puzzle,
    title: 'Select modules & features',
    desc: 'Drag portals into the active zone. Expand each one to toggle individual features on or off. Apply a plan template for common configurations.',
    detail: 'Drag · Drop · Toggle',
  },
  {
    number: '03',
    icon: MonitorSmartphone,
    title: 'Set branding',
    desc: "Upload the academy's logo, pick their colours. The portal instantly reflects their identity — their name, their look, on squados.app.",
    detail: 'Logo · Colour · Subdomain',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Publish & invite',
    desc: 'Hit Publish. The academy admin receives login credentials and a getting-started guide automatically. Your work is done.',
    detail: 'Live in minutes',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-flow py-32 px-6">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="section-inner max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[11px] font-medium text-white/60 mb-4 backdrop-blur-md">
            <Layers className="w-3 h-3" /> How it works
          </div>
          <h2
            className="display-heading text-4xl md:text-6xl bg-gradient-to-b from-white via-white/95 to-white/70 bg-clip-text text-transparent mb-4"
          >
            Onboard any client.
            <br />
            No technical skills required.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Four steps. Under 30 minutes. Any person on your sales team can do it.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {STEPS.map(({ number, icon: Icon, title, desc, detail }, index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-80px' }}
                className="relative text-center"
              >
                <div className="premium-card relative inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-5 mx-auto">
                  <Icon className="w-8 h-8 text-violet-300" />
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                    {number.slice(1)}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-3">{desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-white/[0.05] text-white/45 text-xs font-mono">
                  {detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
