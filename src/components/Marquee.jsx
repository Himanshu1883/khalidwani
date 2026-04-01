import { MARQUEE_ITEMS } from "../data/content";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-[#050d18] py-5">
      {/* Gradient overlay left/right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050d18] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050d18] to-transparent" />

      {/* Marquee track */}
      <div className="animate-marquee whitespace-nowrap flex gap-12 md:gap-16">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-4 whitespace-nowrap px-4 md:px-8 font-cormorant text-[24px] md:text-[30px] italic tracking-[0.02em] text-[#f4efe5]/80 transition-transform duration-300 hover:scale-110 hover:text-[#B0E4CC]"
          >
            {item}
            <span className="font-sans text-[10px] font-semibold uppercase not-italic tracking-[0.32em] text-[#8dc0ff]/70">
              /
            </span>
          </span>
        ))}
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          gap: 4rem;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}