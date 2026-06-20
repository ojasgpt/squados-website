import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowRight, CheckCircle2, Loader2, Building2, User, Phone, Mail, Users, Layers } from 'lucide-react'

const SUPABASE_URL  = 'https://qgzcxpltjsfpnzpzjtjt.supabase.co'
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnemN4cGx0anNmcG56cHpqdGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMjkwNzIsImV4cCI6MjA5MjcwNTA3Mn0.1pvuIKnwdrqQ6nT-8haCGtLcaiz-8ER5jFy5BnCB9K0'

const PLANS = ['Starter', 'Growth', 'Elite', 'Not sure yet']

interface Props {
  open: boolean
  defaultPlan?: string
  onClose: () => void
}

export function LeadForm({ open, defaultPlan, onClose }: Props) {
  const [form, setForm] = useState({
    academy_name:  '',
    contact_name:  '',
    email:         '',
    phone:         '',
    player_count:  '',
    plan:          defaultPlan ?? 'Not sure yet',
    message:       '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  // Keep default plan in sync when caller changes it
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'apikey':        SUPABASE_ANON,
          'Authorization': `Bearer ${SUPABASE_ANON}`,
          'Prefer':        'return=minimal',
        },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function handleClose() {
    onClose()
    setTimeout(() => setStatus('idle'), 400)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-[50%] -translate-y-1/2 z-[90] max-w-lg mx-auto"
          >
            <div className="premium-card rounded-3xl p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.4),transparent_50%)]" />

              {/* Header */}
              <div className="relative flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/15 flex items-center justify-center">
                    <Layers className="w-4.5 h-4.5 text-violet-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Get started with SquadOS</h3>
                    <p className="text-white/45 text-xs mt-0.5">We'll set up your academy workspace — usually within 24 hours.</p>
                  </div>
                </div>
                <button onClick={handleClose} className="text-white/35 hover:text-white/70 transition-colors mt-0.5">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative flex flex-col items-center text-center py-6 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">We've got your details!</h4>
                      <p className="text-white/50 text-sm mt-2 max-w-xs">
                        Ojas will personally reach out within 24 hours to set up your academy workspace.
                      </p>
                    </div>
                    <button onClick={handleClose} className="glass-action rounded-full px-6 py-2.5 text-sm font-medium text-white/85 mt-2">
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <FormField icon={Building2} label="Academy name" required>
                        <input
                          required
                          value={form.academy_name}
                          onChange={set('academy_name')}
                          placeholder="StepUp FC"
                          className="lead-input"
                        />
                      </FormField>

                      <FormField icon={User} label="Your name" required>
                        <input
                          required
                          value={form.contact_name}
                          onChange={set('contact_name')}
                          placeholder="Ojas Gupte"
                          className="lead-input"
                        />
                      </FormField>

                      <FormField icon={Mail} label="Email" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={set('email')}
                          placeholder="you@youracademy.com"
                          className="lead-input"
                        />
                      </FormField>

                      <FormField icon={Phone} label="WhatsApp / Phone">
                        <input
                          value={form.phone}
                          onChange={set('phone')}
                          placeholder="+91 98765 43210"
                          className="lead-input"
                        />
                      </FormField>

                      <FormField icon={Users} label="Number of players">
                        <select value={form.player_count} onChange={set('player_count')} className="lead-input">
                          <option value="">Select range</option>
                          <option>Under 20</option>
                          <option>20–50</option>
                          <option>50–100</option>
                          <option>100–250</option>
                          <option>250+</option>
                        </select>
                      </FormField>

                      <FormField icon={Layers} label="Interested plan">
                        <select value={form.plan} onChange={set('plan')} className="lead-input">
                          {PLANS.map(p => <option key={p}>{p}</option>)}
                        </select>
                      </FormField>
                    </div>

                    <FormField icon={null} label="Anything else we should know?">
                      <textarea
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Custom requirements, existing tools, timeline…"
                        rows={2}
                        className="lead-input resize-none"
                      />
                    </FormField>

                    {status === 'error' && (
                      <p className="text-rose-400 text-xs text-center">
                        Something went wrong. Email us directly at hello@squados.in
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="primary-action w-full rounded-full py-3.5 text-sm font-semibold text-white transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60 mt-1"
                    >
                      {status === 'submitting'
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                        : <>Request your academy setup <ArrowRight className="w-4 h-4" /></>}
                    </button>

                    <p className="text-center text-white/25 text-xs">
                      No credit card needed · We'll contact you within 24 hours
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function FormField({ icon: Icon, label, required, children }: {
  icon: React.ElementType | null
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-white/40 mb-1.5">
        {Icon && <Icon className="w-3 h-3" />}
        {label}{required && <span className="text-violet-400">*</span>}
      </span>
      {children}
    </label>
  )
}
