import { MARQUEE_ITEMS } from "../data/content";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden border-y border-white/8 bg-[#050d18] py-5">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-8 whitespace-nowrap px-10 font-cormorant text-[24px] italic tracking-[0.02em] text-[#f4efe5]/80 md:px-14 md:text-[30px]"
          >
            {item}
            <span className="font-sans text-[10px] font-semibold uppercase not-italic tracking-[0.32em] text-[#8dc0ff]/70">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
