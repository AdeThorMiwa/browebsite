import './index.css'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhatBroGets from './components/WhatBroGets'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'
import Nav from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0e0e0f' }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <WhatBroGets />
      <FAQ />
      <Footer />
      <StickyBar />
    </div>
  )
}
