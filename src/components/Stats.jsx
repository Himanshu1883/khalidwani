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
      className={`group relative overflow-hidden px-4 sm:px-5 md:px-6 py-6 sm:py-8 md:py-9 text-center transition-all duration-500 hover:scale-105 hover:z-10 ${
        !isLast ? "border-b border-white/8 md:border-b-0 md:border-r" : ""
      } md:border-white/8`}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/0 via-[#B0E4CC]/5 to-[#B0E4CC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Border Animation */}
      <div className="absolute inset-x-4 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
      
      {/* Bottom Border Animation */}
      <div className="absolute inset-x-4 sm:inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
      
      {/* Left Border Animation */}
      <div className="absolute left-0 inset-y-4 sm:inset-y-6 w-px bg-gradient-to-b from-transparent via-[#B0E4CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-y-0 group-hover:scale-y-100" />
      
      {/* Right Border Animation */}
      <div className="absolute right-0 inset-y-4 sm:inset-y-6 w-px bg-gradient-to-b from-transparent via-[#B0E4CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-y-0 group-hover:scale-y-100" />

      {/* Icon Container with Animation */}
      <div className="relative mx-auto mb-4 sm:mb-5 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:border-[#B0E4CC]/50 group-hover:bg-[#B0E4CC]/10 group-hover:scale-110">
        {/* Pulse Effect on Hover */}
        <div className="absolute inset-0 rounded-full bg-[#B0E4CC]/20 opacity-0 group-hover:opacity-100 animate-ping" />
        
        {/* Icon */}
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#B0E4CC] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Number with Animation */}
      <p className="font-cormorant text-[clamp(2rem,6vw,4rem)] leading-none text-[#f4efe5] transition-all duration-300 group-hover:scale-105">
        {count}
        <span className="ml-1 text-[#B0E4CC] transition-all duration-300 group-hover:text-[#C5F0E0]">{suffix}</span>
      </p>

      {/* Label */}
      <p className="mx-auto mt-2 sm:mt-3 max-w-[10rem] sm:max-w-[12rem] text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] md:tracking-[0.22em] text-white/52 group-hover:text-white/80 transition-colors duration-300">
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
      className="reveal relative overflow-hidden border-y border-white/8 bg-gradient-to-b from-[#07111f] via-[#08111d] to-[#07111f]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#B0E4CC]/5 blur-[80px] sm:blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-purple-500/5 blur-[80px] sm:blur-[100px] animate-pulse-slow animation-delay-1000" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(176,228,204,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(176,228,204,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] md:bg-[size:72px_72px] opacity-40 animate-grid-shift" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#B0E4CC] to-cyan-400 animate-float-particle"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 12 + 6}s`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC]/30 to-transparent animate-shimmer" />

      {/* Stats Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-px bg-white/5">
        {STATS.map((stat, index) => (
          <StatItem
            key={stat.label}
            {...stat}
            animate={animate}
            isLast={index === STATS.length - 1}
          />
        ))}
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B0E4CC]/30 to-transparent animate-shimmer animation-delay-1000" />
    </section>
  );
}