export default function SectionLabel({ children, centered = false }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.26em] uppercase text-[#B0E4CC] mb-7 ${
        centered ? 'justify-center' : ''
      }`}
    >
      <span className="w-7 h-px bg-[#B0E4CC]  inline-block" />
      {children}
    </p>
  )
}
