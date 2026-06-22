import { motion } from 'motion/react'

const PLAYER_DOTS = [
  { cx: 260, cy: 520, delay: 0, color: '#34d399' },
  { cx: 430, cy: 430, delay: 0.35, color: '#a78bfa' },
  { cx: 610, cy: 335, delay: 0.7, color: '#22d3ee' },
  { cx: 790, cy: 285, delay: 1.05, color: '#a78bfa' },
  { cx: 950, cy: 390, delay: 1.4, color: '#34d399' },
]

const ROUTES = [
  'M260 520 C360 455 405 452 500 405 S675 310 790 285',
  'M430 430 C515 500 650 500 760 420 S880 350 950 390',
  'M610 335 C710 245 825 220 1000 245',
]

export function FootballBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.35),transparent_34rem),radial-gradient(circle_at_22%_55%,rgba(16,185,129,0.18),transparent_28rem),radial-gradient(circle_at_78%_52%,rgba(124,58,237,0.26),transparent_30rem),linear-gradient(180deg,#030712_0%,#020617_48%,#000_100%)]" />
      <div className="football-stripes absolute inset-0 opacity-45" />
      <div className="football-grain absolute inset-0 opacity-[0.16]" />

      <div
        className="absolute left-1/2 w-[1460px] max-w-[136vw]"
        style={{ top: '42vh', transform: 'translate(-50%, -50%)' }}
      >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-7, -5.5, -7] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          viewBox="0 0 1200 760"
          className="h-auto w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pitchLine" x1="80" y1="90" x2="1120" y2="670">
              <stop stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="0.5" stopColor="#93c5fd" stopOpacity="0.65" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="routeLine" x1="200" y1="520" x2="1000" y2="240">
              <stop stopColor="#34d399" stopOpacity="0.28" />
              <stop offset="0.55" stopColor="#a78bfa" stopOpacity="0.82" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.36" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="90" y="95" width="1020" height="570" rx="26" stroke="url(#pitchLine)" strokeWidth="2" />
          <path d="M600 95V665" stroke="url(#pitchLine)" strokeWidth="1.5" />
          <circle cx="600" cy="380" r="92" stroke="url(#pitchLine)" strokeWidth="1.5" />
          <circle cx="600" cy="380" r="5" fill="#ffffff" opacity="0.22" />
          <path d="M90 255H250V505H90" stroke="url(#pitchLine)" strokeWidth="1.5" />
          <path d="M1110 255H950V505H1110" stroke="url(#pitchLine)" strokeWidth="1.5" />
          <path d="M90 315H165V445H90" stroke="url(#pitchLine)" strokeWidth="1" />
          <path d="M1110 315H1035V445H1110" stroke="url(#pitchLine)" strokeWidth="1" />

          {ROUTES.map((route, index) => (
            <motion.path
              key={route}
              d={route}
              stroke="url(#routeLine)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="9 18"
              filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.95, 0.35] }}
              transition={{
                duration: 5.5,
                delay: index * 0.55,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: 'easeInOut',
              }}
            />
          ))}

          {PLAYER_DOTS.map(player => (
            <motion.g
              key={`${player.cx}-${player.cy}`}
              animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.8, delay: player.delay, repeat: Infinity, ease: 'easeInOut' }}
              filter="url(#softGlow)"
            >
              <circle cx={player.cx} cy={player.cy} r="18" fill={player.color} opacity="0.12" />
              <circle cx={player.cx} cy={player.cy} r="6" fill={player.color} opacity="0.9" />
            </motion.g>
          ))}

          <motion.circle
            r="7"
            fill="#f8fafc"
            filter="url(#softGlow)"
            animate={{
              cx: [260, 430, 610, 790, 950, 760, 430],
              cy: [520, 430, 335, 285, 390, 420, 430],
              opacity: [0.25, 1, 0.85, 1, 0.65, 1, 0.25],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
      </div>

      <motion.div
        className="absolute -left-24 top-1/4 h-32 w-[42rem] rotate-[-18deg] rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ x: [-60, 120, -60], opacity: [0.18, 0.38, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-1/3 h-40 w-[46rem] rotate-[16deg] rounded-full bg-violet-500/16 blur-3xl"
        animate={{ x: [70, -110, 70], opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-black/34" />
    </div>
  )
}
