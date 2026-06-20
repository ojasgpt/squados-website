import { useState } from 'react'
import { CtaBanner } from './components/CtaBanner'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { GlobalReady } from './components/GlobalReady'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { LeadForm } from './components/LeadForm'
import { LogoStrip } from './components/LogoStrip'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Portals } from './components/Portals'

export default function App() {
  const [leadOpen, setLeadOpen]       = useState(false)
  const [leadPlan, setLeadPlan]       = useState<string | undefined>(undefined)

  function openLead(plan?: string) {
    setLeadPlan(plan)
    setLeadOpen(true)
  }

  return (
    <div className="ambient-page bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar onGetStarted={() => openLead()} />
      <Hero onStartTrial={() => openLead()} />
      <LogoStrip />
      <GlobalReady />
      <Features />
      <HowItWorks />
      <Portals />
      <Pricing onSelectPlan={openLead} />
      <CtaBanner onGetStarted={() => openLead()} />
      <Footer />
      <LeadForm open={leadOpen} defaultPlan={leadPlan} onClose={() => setLeadOpen(false)} />
    </div>
  )
}
