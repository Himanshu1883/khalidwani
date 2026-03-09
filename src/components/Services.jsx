import { SERVICES } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Services() {
  return (
    <section id="services" className="bg-ink-mid px-8 md:px-16 py-28">
      {/* Header */}
      <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div>
          <SectionLabel>What Khalid Offers</SectionLabel>
          <h2
            className="font-cormorant font-light text-cream leading-[1.1]"
            style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}
          >
            Master Every<br />
            Business Challenge
          </h2>
        </div>
        <a
          href="#contact"
          className="self-start text-[10px] font-medium tracking-[0.2em] uppercase text-gold border border-gold/35 px-10 py-4 no-underline hover:border-gold transition-all duration-300"
        >
          Book Consultation
        </a>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ background: 'rgba(201,168,76,0.05)' }}
      >
        {SERVICES.map((svc, i) => (
          <ServiceCard key={svc.number} svc={svc} delay={i % 3} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ svc, delay }) {
  const delayClass = delay === 0 ? 'delay-1' : delay === 1 ? 'delay-2' : 'delay-3'

  return (
    <div
      className={`reveal ${delayClass} group relative overflow-hidden bg-ink-mid px-11 py-12 transition-colors duration-500 hover:bg-gold/[0.03] cursor-default`}
    >
      {/* Background number */}
      <span
        className="absolute top-4 right-6 font-cormorant font-light leading-none pointer-events-none select-none"
        style={{ fontSize: '68px', color: 'rgba(201,168,76,0.07)' }}
      >
        {svc.number}
      </span>

      {/* Bottom reveal line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center text-[15px] mb-7 transition-colors duration-300 group-hover:border-gold"
        style={{ border: '1px solid rgba(201,168,76,0.24)' }}
      >
        {svc.icon}
      </div>

      <h3 className="font-cormorant font-normal text-cream text-[26px] mb-3 leading-tight">
        {svc.title}
      </h3>
      <p className="text-[13px] leading-[1.85] text-muted">
        {svc.desc}
      </p>
    </div>
  )
}
