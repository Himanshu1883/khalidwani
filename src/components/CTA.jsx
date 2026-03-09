export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-gold px-8 md:px-28 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12"
    >
      <h2
        className="font-cormorant font-light text-ink leading-[1.1] max-w-2xl"
        style={{ fontSize: 'clamp(34px, 4vw, 62px)' }}
      >
        Ready to Transform<br />
        Your Business?
      </h2>
      <a
        href="mailto:connect@khalidwani.com"
        className="flex-shrink-0 text-[10px] font-medium tracking-[0.2em] uppercase text-cream bg-ink px-11 py-5 no-underline hover:bg-ink-soft transition-colors duration-300 whitespace-nowrap"
      >
        Schedule Your Session →
      </a>
    </section>
  )
}
