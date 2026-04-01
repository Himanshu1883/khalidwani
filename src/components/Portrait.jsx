import { IMAGES } from "../data/content";
import FallbackImage from "./FallbackImage";
import SectionLabel from "./SectionLabel";

export default function Portrait() {
  return (
    <section className="bg-ink-soft px-8 md:px-16 py-28 grid md:grid-cols-[1.15fr_1fr] gap-16 md:gap-20 items-center">
      {/* Image collage */}
      <div className="reveal-left relative h-[380px] md:h-[570px]">
        {/* Main portrait */}
        <FallbackImage
          sources={IMAGES.portrait1}
          alt="Khalid Wani"
          className="absolute left-0 top-0 object-cover object-top rounded-xl 
          transition-transform duration-500 ease-in-out hover:scale-105"
          style={{ width: "68%", height: "100%", filter: "brightness(0.90)" }}
        />

        {/* Secondary image */}
        <FallbackImage
          sources={IMAGES.portrait2}
          alt="Khalid Wani at event"
          className="absolute right-0 bottom-16 object-cover z-10 rounded-xl scale-0.95"
          style={{
            width: "35%",
            height: "58%",
            filter: "brightness(0.78)",
            border: "5px solid var(--ink-soft)",
          }}
        />

        {/* [#B0E4CC] quote card */}
        <div
          className="absolute right-0 top-0 bg-[#B0E4CC]  text-ink z-20 px-7 py-6 font-cormorant text-[15px] italic leading-[1.5]"
          style={{ width: "54%" }}
        >
          "Business growth is not a destination — it is a discipline practiced
          daily with unwavering clarity of purpose."
        </div>
      </div>

      {/* Text */}
      <div className="reveal-right">
        <SectionLabel>A Life of Purpose</SectionLabel>
        <h2
          className="font-cormorant font-light text-cream leading-[1.2] mb-6"
          style={{ fontSize: "clamp(32px, 3.5vw, 50px)" }}
        >
          Shaping India's Next
          <br />
          Generation of Leaders
        </h2>
        <p className="text-sm font-light leading-[1.9] text-muted mb-5 hover:text-[#B0E4CC] transition-colors duration-200">
          Khalid Wani's work is deeply intertwined with his mission to create
          lasting change. His engagement with global startups, multinational
          companies, and government institutions reflects a drive to make a
          real, measurable difference.
        </p>
        <p className="text-sm font-light leading-[1.9] text-muted mb-7 hover:text-[#B0E4CC] transition-colors duration-200">
          He believes in the power of education and mentorship — forging
          strategic partnerships with leading institutions to shape the next
          wave of entrepreneurial talent across India and beyond.
        </p>
        <a
          href="#contact"
          className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-ink bg-[#B0E4CC]  px-10 py-4 no-underline hover:bg-[#B0E4CC] -light transition-all duration-300 hover:-translate-y-0.5"
        >
          Invite Khalid to Speak
        </a>
      </div>
    </section>
  );
}
