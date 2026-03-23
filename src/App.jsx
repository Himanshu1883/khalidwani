import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

import Cursor    from './components/Cursor'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Stats     from './components/Stats'
import Marquee   from './components/Marquee'
import About     from './components/About'
import Services  from './components/Services'
import QuoteBreak from './components/QuoteBreak'
import Portrait  from './components/Portrait'
import Talks     from './components/Talks'
import Metrics   from './components/Metrics'
import Testimonials from './components/Testimonials'
import CTA       from './components/CTA'
import Footer    from './components/Footer'
import Collaborations from './components/Collaborations'

export default function App() {
  // Activate scroll reveal for all .reveal* elements
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Marquee />
        <About />
        <Services />
        <QuoteBreak />
        <Portrait />
        <Talks />
        <Metrics />
        <Testimonials />
        {/* <Collaborations /> */}
        <CTA />
      </main>

      <Footer />
    </>
  )
}
