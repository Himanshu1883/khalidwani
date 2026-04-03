import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { METRICS } from "../data/content";
import { useOnceVisible } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

export default function Metrics() {
  const [animate, setAnimate] = useState(false);
  const barsRef = useOnceVisible(() => setAnimate(true));
  const navigate = useNavigate();

  const handleBookConsultation = () => {
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
      id="results"
      className="relative overflow-hidden bg-[#05060a] px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* ================== BACKGROUND IMAGE SYSTEM ================== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* MAIN IMAGE */}
        <img
          src="/quote1.jpg"
          alt="background"
          className="w-full h-full object-cover object-[center_10%] scale-110 opacity-40"
        />

        {/* SIDE FADE (premium look) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060a] via-transparent to-[#05060a]" />

        {/* EXISTING EFFECTS (kept) */}
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#B0E4CC]/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] animate-pulse delay-1000" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>

      {/* ================== CONTENT ================== */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* Left Side */}
        <div className="reveal-left space-y-6 sm:space-y-8">
          <div>
            <SectionLabel>Proven Impact</SectionLabel>

            <div className="relative mt-4 mb-5">
              <h2
                className="font-cormorant font-light text-cream leading-[1.15] relative z-10"
                style={{ fontSize: "clamp(32px, 5vw, 54px)" }}
              >
                Khalid Wani
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#B0E4CC] bg-clip-text text-transparent">
                    Equals Results
                  </span>

                  <svg className="absolute -bottom-2 left-0 w-full h-1">
                    <path d="M0 2 L200 2" stroke="#B0E4CC" strokeWidth="2" />
                  </svg>
                </span>
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base font-light leading-relaxed sm:leading-[1.9] text-gray-400 max-w-lg">
            Partner companies consistently report transformative growth across
            leadership, revenue, and team performance — with measurable, lasting
            change.
          </p>

          <div className="pt-4">
            <button
              onClick={handleBookConsultation}
              className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#07111f] bg-[#B0E4CC] px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#B0E4CC]/30"
            >
              Book Free Consultation
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Metrics Bars */}
        <div ref={barsRef} className="reveal-right space-y-8 sm:space-y-10">
          {METRICS.map((m, index) => (
            <MetricBar key={m.label} metric={m} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricBar({ metric, animate }) {
  const [count, setCount] = useState(0);

  const getNumericValue = (pct) => {
    if (typeof pct === "string") return parseInt(pct.replace("%", ""), 10);
    return parseInt(pct, 10);
  };

  const numericValue = getNumericValue(metric.pct);
  const isPercentage = metric.pct.toString().includes("%");

  useEffect(() => {
    if (animate) {
      let startTime = null;
      const duration = 2000;

      const animateNumber = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const value = Math.floor(progress * numericValue);
        setCount(value);
        if (progress < 1) requestAnimationFrame(animateNumber);
      };

      requestAnimationFrame(animateNumber);
    }
  }, [animate, numericValue]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white">{metric.label}</span>
        <span className="text-lg text-[#B0E4CC] font-semibold">
          {animate ? count : 0}
          {isPercentage ? "%" : ""}
        </span>
      </div>

      <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#B0E4CC] to-[#8dc0ff] rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${metric.width}%` : "0%" }}
        />
      </div>
    </div>
  );
}