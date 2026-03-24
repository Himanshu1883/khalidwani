import { useCallback, useState } from "react";
import { STATS } from "../data/content";
import { useOnceVisible } from "../hooks/useScrollReveal";

function StatItem({ number, suffix, label, animate, isLast }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    if (started) return;

    setStarted(true);
    let current = 0;
    const step = number / 55;
    const id = setInterval(() => {
      current = Math.min(current + step, number);
      setCount(Math.round(current));

      if (current >= number) {
        clearInterval(id);
      }
    }, 18);
  }, [number, started]);

  if (animate && !started) start();

  return (
    <div
      className={`group relative overflow-hidden px-6 py-9 text-center md:px-5 lg:px-6 ${
        !isLast ? "border-b border-white/8 md:border-b-0 md:border-r" : ""
      } md:border-white/8`}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#8dc0ff]/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="mx-auto mb-5 h-12 w-12 rounded-full border border-white/10 bg-white/[0.04]" />

      <p className="font-cormorant text-[clamp(2.7rem,5vw,4rem)] leading-none text-[#f4efe5]">
        {count}
        <span className="ml-1 text-gold">{suffix}</span>
      </p>

      <p className="mx-auto mt-3 max-w-[12rem] text-[10px] font-medium uppercase tracking-[0.22em] text-white/52">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const [animate, setAnimate] = useState(false);
  const ref = useOnceVisible(() => setAnimate(true));

  return (
    <section
      ref={ref}
      className="reveal relative overflow-hidden border-y border-white/8 bg-[#08111d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(141,192,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(201,168,76,0.1),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="relative grid grid-cols-1 md:grid-cols-5">
        {STATS.map((stat, index) => (
          <StatItem
            key={stat.label}
            {...stat}
            animate={animate}
            isLast={index === STATS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
