import { CtaBanner } from './components/CtaBanner'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { GlobalReady } from './components/GlobalReady'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { LogoStrip } from './components/LogoStrip'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'
import { Portals } from './components/Portals'

export default function App() {
  return (
    <div className="ambient-page bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <LogoStrip />
      <GlobalReady />
      <Features />
      <HowItWorks />
      <Portals />
      <Pricing />
      <CtaBanner />
      <Footer />
    </div>
  )
}
