import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleBookStrategy = () => {
    // Navigate to contact page with hash
    navigate("/contact#contact-form");
    
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 300);
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-x-hidden overflow-y-visible bg-[#07111f] text-white min-h-[100vh] w-full pt-12 lg:pt-4"
    >
      {/* ================= ULTRA PREMIUM BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07111f] via-[#050a14] to-black" />

        {/* Background Image with cinematic zoom - Fixed for mobile */}
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
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: "center",
              objectFit: "cover",
            }}
          />
        </div>

        {/* 🔥 Mouse FOLLOW SPOTLIGHT - Disabled on mobile for better performance */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(176,228,204,0.12), transparent 40%)`,
          }}
        />

        {/* Glass overlay (depth) */}
        <div className="absolute inset-0" />

        {/* TOP LIGHT GRADIENT - Adjusted for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/50" />

        {/* SIDE DARK FOCUS - Adjusted for mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/40 via-transparent to-[#07111f]/40" />

        {/* ✨ Animated LIGHT SWEEP - Disabled on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          <div className="light-sweep" />
        </div>

        {/* 🔥 BIG GLOW ORB (CENTER DRAMA) - Adjusted size for mobile */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-[#B0E4CC]/10 rounded-full blur-[80px] md:blur-[140px]" />

        {/* Floating particles - Reduced count on mobile */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#B0E4CC] to-cyan-400"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 15 + 8}s`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Twinkling stars - Reduced count on mobile */}
        <div className="absolute inset-0 overflow-hidden w-full">
          {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 100)].map((_, i) => (
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

        {/* Animated grid pattern - Lighter on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />

        {/* Diagonal Lines Pattern - Lighter on mobile */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 md:opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLinesHero"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
            >
              <path
                d="M0 20 L20 0"
                stroke="rgba(176,228,204,0.1)"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLinesHero)" />
        </svg>
      </div>

      {/* ---------------- Main Content with Animations ---------------- */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-32 grid lg:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-10 items-center">
        {/* Left Panel */}
        <div className="w-full">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="relative overflow-hidden bg-white/5 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 text-[#B0E4CC] text-[10px] sm:text-xs md:text-sm group hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative whitespace-normal sm:whitespace-nowrap">✨ India's most in-demand corporate trainer</span>
            </span>
            <span className="text-white/60 text-center text-[10px] sm:text-xs pt-2">
              Live coaching • Strategic advisory • Founder acceleration
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {IMPACT_STRIPS.map((item) => (
              <span
                key={item}
                className="group relative overflow-hidden px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wide rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative whitespace-nowrap">{item}</span>
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug mb-4 sm:mb-6 break-words">
            Build leaders{" "}
            <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
              people follow.
            </span>
            <br />
            Scale companies{" "}
            <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
              people remember.
            </span>
          </h1>

          <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed max-w-xl break-words">
            Khalid Wani helps founders, executives, and high-performance teams
            turn pressure into precision through leadership training, investment
            insight, and business strategy built for visible growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleBookStrategy}
              className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#B0E4CC]/50 hover:-translate-y-1 w-full sm:w-auto text-center whitespace-nowrap text-[10px] sm:text-xs md:text-sm cursor-pointer"
            >
              <span className="relative z-10">Book a strategy session</span>
              <svg
                className="relative z-10 ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 w-full sm:w-auto text-center whitespace-nowrap text-[10px] sm:text-xs md:text-sm"
            >
              <span>Explore the journey</span>
              <svg
                className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Metrics - Responsive */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:justify-start gap-3 sm:gap-4">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group relative bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10 hover:border-[#B0E4CC]/50 transition-all duration-300 hover:scale-105 text-center sm:text-left overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B0E4CC]/0 via-[#B0E4CC]/10 to-[#B0E4CC]/0 translate-x-[-100%] group-hover:translate-x-100 transition-transform duration-1000" />
                <p className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[#B0E4CC] to-white bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-white/60 text-[10px] sm:text-xs break-words">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
            {SOCIAL_LINKS.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative text-white/50 hover:text-[#B0E4CC] transition duration-300 text-xs sm:text-sm"
              >
                <span>{social.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B0E4CC] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Panel - Responsive Images */}
        <div className="relative w-full flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0">
          <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg">
            {/* Main Image - CLEAN */}
            <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-transparent transform transition-all duration-500 hover:scale-105 group">
              <FallbackImage
                sources={["profile.jpg"]}
                alt="Khalid Wani Main"
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Small Overlay Image - Responsive sizing */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 lg:-top-12 lg:-right-12 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-transparent transform rotate-12 transition-all duration-500 hover:rotate-0 hover:scale-110 z-10 group">
              <FallbackImage
                sources={["about1.JPG"]}
                alt="Khalid Wani Featured"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-[#B0E4CC] to-[#9AD4BC] text-[#07111f] px-1 sm:px-1.5 py-0.5 rounded-full text-[6px] sm:text-[8px] md:text-[10px] font-bold shadow-lg">
                Featured
              </div>
            </div>

            {/* Decorative floating elements - Hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#B0E4CC]/20 blur-xl" />
            <div className="hidden md:block absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-purple-500/20 blur-xl" />
            <div className="hidden md:block absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-blue-500/20 blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile for cleaner look */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
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
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}