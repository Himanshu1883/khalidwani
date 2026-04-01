import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden px-4 sm:px-6 md:px-12 lg:px-28 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 h-[350px]"
      style={{
        background: "linear-gradient(135deg, #B0E4CC 0%, #9AD4BC 50%, #B0E4CC 50%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 5s ease infinite",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-float-particle"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 12 + 6}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Circles */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 animate-pulse-slow animation-delay-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-shift" />

        {/* Shimmer Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            transform: "skewX(-20deg)",
            animation: "shimmer 3s infinite",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1">
        {/* Animated Badge */}
        <div
          className={`inline-block mb-4 sm:mb-6 transform transition-all duration-700 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-ink text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ink"></span>
            </span>
            Limited Availability
          </span>
        </div>

        {/* Main Heading with Animated Text */}
        <h2
          className={`font-cormorant font-light text-ink leading-[1.1] max-w-2xl transform transition-all duration-700 delay-100 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
          style={{ fontSize: "clamp(28px, 5vw, 62px)" }}
        >
          Ready to
          <span className="relative inline-block mx-2">
            <span className="relative z-10">Transform</span>
            <svg
              className="absolute bottom-1 left-0 w-full h-3 -z-0"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,8 C40,12 80,4 120,8 C160,12 200,6 200,6"
                stroke="rgba(8,8,8,0.3)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
              />
            </svg>
          </span>
          <br />
          Your Business?
        </h2>

        {/* Animated Subtext */}
        <p
          className={`mt-3 sm:mt-4 text-ink/70 text-xs sm:text-sm max-w-md transform transition-all duration-700 delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          Join hundreds of successful entrepreneurs who have transformed their businesses with Khalid's guidance.
        </p>

        {/* Counter/Stats */}
        <div
          className={`flex gap-4 sm:gap-6 mt-6 sm:mt-8 transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-ink/80 text-xs">500+ Success Stories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-ink/80 text-xs">24h Response Time</span>
          </div>
        </div>
      </div>

      {/* CTA Button with Advanced Animation */}
      <div
        className={`relative z-10 transform transition-all duration-700 delay-400 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <a
          href="mailto:connect@khalidwani.com"
          className="group relative inline-flex items-center justify-center px-8 sm:px-11 py-4 sm:py-5 bg-ink text-cream font-medium uppercase tracking-[0.2em] text-[10px] sm:text-[11px] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          style={{
            borderRadius: "4px",
            boxShadow: isHovered ? "0 20px 35px -10px rgba(0,0,0,0.3)" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Button Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink-soft to-ink animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Button Content */}
          <span className="relative z-10 flex items-center gap-2">
            Schedule Your Session
            <svg
              className={`w-4 h-4 transition-all duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
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
          </span>

          {/* Ripple Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
              animation: "ripple 1s ease-out",
            }}
          />
        </a>

        {/* Additional Info */}
        <p className="text-center mt-3 text-ink/50 text-[8px] sm:text-[9px] uppercase tracking-wider">
          Free 30-min consultation
        </p>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </section>
  );
}