import { TESTIMONIALS } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink-mid px-8 md:px-16 py-28">
      {/* Header */}
      <div className="reveal text-center mb-16">
        <div className="flex justify-center">
          <SectionLabel>Client Voices</SectionLabel>
        </div>
        <h2
          className="font-cormorant font-light text-cream"
          style={{ fontSize: 'clamp(36px, 4vw, 54px)' }}
        >
          Trusted by Leaders<br />
          Across India
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <TestiCard key={i} t={t} delay={i % 3} />
        ))}
      </div>
    </section>
  )
}

function TestiCard({ t, delay }) {
  const delayClass = delay === 0 ? 'delay-1' : delay === 1 ? 'delay-2' : 'delay-3'

  return (
    <div
      className={`reveal ${delayClass} group bg-ink p-10 transition-all duration-300 hover:-translate-y-1`}
      style={{ border: '1px solid rgba(255,255,255,0.04)' }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)')}
    >
      <div className="text-gold tracking-[4px] text-[13px] mb-5">★★★★★</div>
      <blockquote className="font-cormorant font-light italic text-[19px] leading-[1.65] text-cream mb-6">
        "{t.quote}"
      </blockquote>
      <div>
        <strong className="block text-[13px] font-medium text-cream mb-0.5">{t.name}</strong>
        <span className="text-[11px] text-muted">{t.role}</span>
      </div>
    </div>
  )
}
