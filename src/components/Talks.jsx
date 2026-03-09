import { TALKS } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Talks() {
  return (
    <section id="talks" className="px-8 md:px-16 py-28">
      <div className="reveal mb-14">
        <SectionLabel>TEDx & Keynotes</SectionLabel>
        <h2
          className="font-cormorant font-light text-cream leading-tight"
          style={{ fontSize: 'clamp(36px, 4vw, 58px)' }}
        >
          Ideas That<br />
          Inspire Action
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TALKS.map((talk, i) => (
          <TalkCard key={talk.id} talk={talk} delay={i} />
        ))}
      </div>
    </section>
  )
}

function TalkCard({ talk, delay }) {
  const delayClass = delay === 0 ? 'delay-1' : delay === 1 ? 'delay-2' : 'delay-3'

  return (
    <div
      className={`reveal ${delayClass} group relative overflow-hidden bg-ink-mid cursor-pointer`}
      style={{ paddingTop: '60%' }}
      onClick={() => window.open(talk.url, '_blank')}
    >
      {/* Thumbnail */}
      <img
        src={talk.thumb}
        alt={talk.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.07] group-hover:brightness-[0.42] group-hover:saturate-[0.6]"
        style={{ filter: 'brightness(0.72) saturate(0.85)' }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(8,8,8,0.72) 0%, transparent 60%)',
        }}
      />

      {/* Play button */}
      <div
        className="absolute top-1/2 left-1/2 w-14 h-14 rounded-full flex items-center justify-center text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          transform: 'translate(-50%, -50%) scale(0.85)',
          border: '1.5px solid rgba(201,168,76,0.65)',
          transition: 'opacity 0.35s, transform 0.35s',
        }}
      >
        <span style={{ marginLeft: '3px' }}>▶</span>
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <span className="block text-[9px] font-medium tracking-[0.2em] uppercase text-gold mb-2">
          {talk.badge}
        </span>
        <div className="font-cormorant font-normal text-cream text-[20px] leading-[1.3]">
          {talk.title}
        </div>
      </div>
    </div>
  )
}
