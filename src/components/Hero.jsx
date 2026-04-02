import { SOCIAL_LINKS } from "../data/content";
import FallbackImage from "./FallbackImage";
import { useEffect, useState } from "react";

const IMPACT_STRIPS = [
  "Boardroom strategy",
  "Founder mindset",
  "Market-scale execution",
];

const HERO_METRICS = [
  { value: "100+", label: "Keynotes & private sessions" },
  { value: "50+", label: "eCompanies backed and guided" },
  { value: "30M+", label: "Audience reached across platforms" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      const progress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate overflow-x-hidden overflow-y-visible bg-[#07111f] text-white min-h-[100vh] w-full"
    >
      {/* ================= ULTRA PREMIUM BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full">

        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#050a14] to-black" />

        {/* Background Image with cinematic zoom */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${1.05 + scrollProgress * 0.1})`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <img
            src="one.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* 🔥 Mouse FOLLOW SPOTLIGHT */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(176,228,204,0.12), transparent 40%)`,
          }}
        />

        {/* Glass overlay (depth) */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* TOP LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

        {/* SIDE DARK FOCUS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/90 via-transparent to-[#07111f]/90" />

        {/* ✨ Animated LIGHT SWEEP */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="light-sweep" />
        </div>

        {/* 🔥 BIG GLOW ORB (CENTER DRAMA) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#B0E4CC]/10 rounded-full blur-[140px]" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#B0E4CC] to-cyan-400"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 15 + 8}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Twinkling stars */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Diagonal Lines Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLinesHero" patternUnits="userSpaceOnUse" width="30" height="30">
              <path d="M0 30 L30 0" stroke="rgba(176,228,204,0.1)" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLinesHero)" />
        </svg>
      </div>

      {/* ---------------- Main Content with Animations ---------------- */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16 py-20 lg:py-32 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        {/* Left Panel */}
        <div className="w-full">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="relative overflow-hidden bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-[#B0E4CC] text-xs sm:text-sm group hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative whitespace-nowrap">✨ India's most in-demand corporate trainer</span>
            </span>
            <span className="text-white/60 text-xs sm:text-sm">
              Live coaching • Strategic advisory • Founder acceleration
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {IMPACT_STRIPS.map((item) => (
              <span key={item} className="group relative overflow-hidden px-3 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wide rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105 cursor-default">
                <span className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative whitespace-nowrap">{item}</span>
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6 break-words">
            Build leaders{" "}
            <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">people follow.</span>
            <br />
            Scale companies{" "}
            <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">people remember.</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed max-w-xl break-words">
            Khalid Wani helps founders, executives, and high-performance teams
            turn pressure into precision through leadership training, investment
            insight, and business strategy built for visible growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#B0E4CC]/50 hover:-translate-y-1 w-full sm:w-auto text-center whitespace-nowrap">
              <span className="relative z-10">Book a strategy session</span>
              <svg className="relative z-10 ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a href="#about" className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 w-full sm:w-auto text-center whitespace-nowrap">
              <span>Explore the journey</span>
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Metrics */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="group relative bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105 text-center sm:text-left overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/0 via-[#B0E4CC]/10 to-[#B0E4CC]/0 translate-x-[-100%] group-hover:translate-x-100 transition-transform duration-1000" />
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#B0E4CC] to-white bg-clip-text text-transparent">{metric.value}</p>
                <p className="text-white/60 text-xs sm:text-sm break-words">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 mt-4">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="group relative text-white/50 hover:text-[#B0E4CC] transition duration-300 text-sm sm:text-base">
                <span>{social.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 group">
              <FallbackImage sources={["name.JPG"]} alt="Khalid Wani Main" className="w-full h-full object-cover object-[center_50%] transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
            </div>

            {/* Small Overlay Image */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 md:-top-12 md:-right-12 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm transform rotate-12 transition-all duration-500 hover:rotate-0 hover:scale-110 z-10 group">
              <FallbackImage sources={["about1.JPG"]} alt="Khalid Wani Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold shadow-lg">
                Featured
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="hidden sm:block absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#B0E4CC]/20 blur-xl" />
            <div className="hidden sm:block absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-purple-500/20 blur-xl" />
            <div className="hidden sm:block absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-blue-500/20 blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </div>

      {/* ================= LIGHT SWEEP ANIMATION ================= */}
      <style jsx>{`
        @keyframes lightSweep {
          0% { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
          30% { opacity: 0.2; }
          100% { transform: translateX(200%) skewX(-20deg); opacity: 0; }
        }
        .light-sweep {
          position: absolute;
          top: 0;
          left: -50%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(176,228,204,0.15), transparent);
          animation: lightSweep 8s linear infinite;
        }
      `}</style>
    </section>
  );
}