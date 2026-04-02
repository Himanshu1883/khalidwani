// UltimateCollaboration - FULL PREMIUM DARK UI (Enhanced Logos)
import { useEffect, useRef, useState } from "react";
import SectionLabel from "./SectionLabel";
import FallbackImage from "./FallbackImage";
import { IMAGES } from "../data/content";

const COLLABORATIONS = [
  { name: "BITS Pilani", image: "/bitspilani.png" },
  { name: "LPU", image: "/lpu.png" },
  { name: "NIET", image: "/niet.png" },
  { name: "Amity University", image: "/amity.png" },
  { name: "Jamia", image: "/jmi.jpg" },
  { name: "IIM Raipur", image: "/iim.jpg" },
  { name: "IIT Kharagpur", image: "/iit.jpg" },
  { name: "Hansraj College", image: "/hansraj.jpg" },
];

export default function UltimateCollaboration() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#667fe6] py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* ===== BACKGROUND SYSTEM ===== */}
      <div className="absolute inset-0">
        <FallbackImage
          sources={IMAGES?.about1.jpg || ["/khalidwani1.png"]}
          className="w-full h-full object-cover opacity-20 scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#05060a]/95 to-black" />

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#B0E4CC]/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-500/20 blur-[160px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <SectionLabel>Collaborations</SectionLabel>

          <h2
            className={`text-5xl md:text-7xl font-light mt-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Institutions & Brands
            <span className="block text-[#B0E4CC] mt-2">
              That Trust Our Vision
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm">
            Collaborating with top universities and global brands to empower leaders and drive innovation.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="relative mb-24 group">
          <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <FallbackImage
              sources={IMAGES?.about1 || ["/khalidwani1.png"]}
              className="w-full h-[350px] md:h-[520px] object-cover transition duration-1000 group-hover:scale-110"
            />
          </div>

          <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-xl">
            <p className="text-[#B0E4CC] text-xs uppercase tracking-widest">
              Global Impact
            </p>
            <p className="text-white text-lg">
              Transforming Campuses & Companies Worldwide
            </p>
          </div>
        </div>

        {/* ===== UPDATED COLLAB GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {COLLABORATIONS.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B0E4CC]/20"
            >
              {/* 🔥 PREMIUM LOGO CARD */}
              <div className="relative h-44 flex items-center justify-center">

                {/* Glow Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#B0E4CC]/20 to-transparent blur-2xl" />

                {/* Glass Plate */}
                <div className="relative z-10 w-[120px] h-[120px] flex items-center justify-center rounded-2xl bg-white shadow-xl group-hover:scale-110 transition duration-500">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 object-contain"
                  />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>

              {/* TEXT */}
              <div className="p-5 text-center">
                <h3 className="text-white text-sm tracking-wide group-hover:text-[#B0E4CC] transition">
                  {item.name}
                </h3>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 border border-[#B0E4CC]/40 transition" />
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="mt-24 grid md:grid-cols-3 gap-6">
          {[IMAGES?.portrait1, IMAGES?.about2, IMAGES?.portrait2].map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl border border-white/10">
              <FallbackImage
                sources={img || ["/khalidwani1.png"]}
                className="w-full h-[220px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { value: "50+", label: "Institutions" },
            { value: "30K+", label: "Students" },
            { value: "200+", label: "Sessions" },
            { value: "15+", label: "Partnerships" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#B0E4CC]/40 transition"
            >
              <p className="text-3xl font-bold text-[#B0E4CC]">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a className="inline-block px-10 py-4 bg-[#B0E4CC] text-black rounded-full tracking-widest text-sm hover:scale-105 transition shadow-lg shadow-[#B0E4CC]/40">
            Explore All Collaborations
          </a>
        </div>
      </div>
    </section>
  );
}