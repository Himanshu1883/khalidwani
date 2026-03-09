import { MARQUEE_ITEMS } from '../data/content'

export default function Marquee() {
  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="overflow-hidden py-[18px] bg-ink-mid border-b border-gold/[0.07]">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-cormorant text-[18px] italic text-gold/[0.28] whitespace-nowrap px-14 inline-flex items-center gap-14"
          >
            {item}
            <span className="text-[7px] not-italic text-gold/[0.22]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
