import { useState } from 'react'
import { METRICS } from '../data/content'
import SectionLabel from './SectionLabel'
import { useOnceVisible } from '../hooks/useScrollReveal'

export default function Metrics() {
  const [animate, setAnimate] = useState(false)
  const barsRef = useOnceVisible(() => setAnimate(true))

  return (
    <section id="results" className="px-8 md:px-16 py-28 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
      {/* Text */}
      <div className="reveal-left">
        <SectionLabel>Proven Impact</SectionLabel>
        <h2
          className="font-cormorant font-light text-cream leading-[1.2] mb-5"
          style={{ fontSize: 'clamp(36px, 4vw, 54px)' }}
        >
          Khalid Wani<br />
          Equals Results
        </h2>
        <p className="text-sm font-light leading-[1.9] text-muted mb-10">
          Partner companies consistently report transformative growth across leadership,
          revenue, and team performance — with measurable, lasting change.
        </p>
        <a
          href="#contact"
          className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-ink bg-gold px-10 py-4 no-underline hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
        >
          Book Free 30-Min Consultation
        </a>
      </div>

      {/* Bars */}
      <div ref={barsRef} className="reveal-right flex flex-col gap-9">
        {METRICS.map((m) => (
          <MetricBar key={m.label} metric={m} animate={animate} />
        ))}
      </div>
    </section>
  )
}

function MetricBar({ metric, animate }) {
  return (
    <div>
      <div className="flex justify-between mb-2.5">
        <span className="text-[13px] text-cream">{metric.label}</span>
        <span
          className="font-cormorant font-light text-gold"
          style={{ fontSize: '24px' }}
        >
          {metric.pct}
        </span>
      </div>
      <div className="h-px bg-white/[0.07] relative overflow-hidden">
        <div
          className="bar-fill"
          style={{ width: animate ? `${metric.width}%` : '0%' }}
        />
      </div>
    </div>
  )
}
