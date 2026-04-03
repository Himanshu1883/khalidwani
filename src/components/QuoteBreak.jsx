import { useEffect, useState } from "react";
import { IMAGES } from "../data/content";
import FallbackImage from "./FallbackImage";

export default function QuoteBreak() {
  const [index, setIndex] = useState(0);

  // auto move carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.quote.length);
    }, 3000); // change speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-ink-soft"
      style={{ height: "65vh" }}
    >
      {/* Carousel Images */}
      {IMAGES.quote.map((img, i) => (
        <FallbackImage
          key={i}
          sources={[img]}
          alt="Khalid Wani speaking on stage"
          className={`
            absolute inset-0 w-full h-full object-cover object-[center_25%]
            transition-opacity duration-[1600ms] ease-out
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
          style={{
            filter: "brightness(0.7) contrast(1.08) saturate(1.05)",
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.15) 70%)",
        }}
      />

      {/* Quote */}
      <div className="absolute inset-0 flex items-center px-8 md:px-28">
        <blockquote
          className="font-cormorant font-light italic leading-[1.35] text-cream max-w-[700px]"
          style={{
            fontSize: "clamp(26px, 3.2vw, 50px)",
            borderLeft: "2px solid var(--[#B0E4CC])",
            paddingLeft: "40px",
          }}
        >
          True leadership lies in empowering others, connecting visionary
          thinking with practical execution, and fostering growth while
          maintaining integrity.
          <cite
            className="block mt-7 font-dm font-medium not-italic text-[#B0E4CC]"
            style={{ fontSize: "10px", letterSpacing: "0.22em" }}
          >
            — KHALID WANI, FOUNDER KWCG
          </cite>
        </blockquote>
      </div>
    </div>
  );
}
