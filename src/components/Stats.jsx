import { useState, useCallback } from 'react'
import { STATS } from '../data/content'
import { useOnceVisible } from '../hooks/useScrollReveal'

function StatItem({ number, suffix, label, animate }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  const start = useCallback(() => {
    if (started) return
    setStarted(true)
    let current = 0
    const step = number / 55
    const id = setInterval(() => {
      current = Math.min(current + step, number)
      setCount(Math.round(current))
      if (current >= number) clearInterval(id)
    }, 18)
  }, [number, started])

  if (animate && !started) start()

  return (
    <div className="stat-underline relative px-7 py-11 text-center border-r border-white/[0.04] last:border-r-0 group overflow-hidden">
      <span
        className="block font-cormorant font-light text-gold leading-none"
        style={{ fontSize: '46px' }}
      >
        {count}{suffix}
      </span>
      <span className="block mt-2 text-[10px] font-normal tracking-[0.15em] uppercase text-muted">
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  const [animate, setAnimate] = useState(false)
  const ref = useOnceVisible(() => setAnimate(true))

  return (
    <div
      ref={ref}
      className="reveal grid grid-cols-2 md:grid-cols-5 bg-ink-soft border-t border-gold/10 border-b border-gold/[0.08]"
    >
      {STATS.map((s) => (
        <StatItem key={s.label} {...s} animate={animate} />
      ))}
    </div>
  )
}
