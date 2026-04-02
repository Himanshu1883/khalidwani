import { IMAGES } from "../data/content";
import FallbackImage from "./FallbackImage";
import SectionLabel from "./SectionLabel";

export default function Portrait() {
  return (
    <section className="bg-[#07111f] px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 lg:gap-20 items-center">
        {/* Image collage */}
        <div className="reveal-left relative h-[320px] sm:h-[380px] md:h-[480px] lg:h-[570px] w-full">
          {/* Main portrait */}
          <div className="absolute left-0 top-0 rounded-xl overflow-hidden" style={{ width: "68%", height: "100%" }}>
            <FallbackImage
              sources={IMAGES.portrait1}
              alt="Khalid Wani"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out hover:scale-105"
              style={{ filter: "brightness(0.90)" }}
            />
          </div>

          {/* Secondary image */}
          <div 
            className="absolute right-0 bottom-8 md:bottom-16 z-10 rounded-xl overflow-hidden"
            style={{
              width: "35%",
              height: "58%",
              border: "5px solid #07111f",
            }}
          >
            <FallbackImage
              sources={IMAGES.portrait2}
              alt="Khalid Wani at event"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              style={{ filter: "brightness(0.78)" }}
            />
          </div>

          {/* [#B0E4CC] quote card */}
          <div
            className="absolute right-0 top-0 bg-[#B0E4CC] text-[#07111f] z-20 px-4 md:px-7 py-5 md:py-6 font-cormorant text-xs md:text-[15px] italic leading-relaxed md:leading-[1.5] break-words"
            style={{ width: "54%" }}
          >
            "Business growth is not a destination — it is a discipline practiced
            daily with unwavering clarity of purpose."
          </div>
        </div>

        {/* Text */}
        <div className="reveal-right text-center md:text-left w-full">
          <SectionLabel />
          <h2
            className="font-cormorant font-light text-[#f4efe5] leading-[1.2] mb-4 md:mb-6 break-words"
            style={{ fontSize: "clamp(28px, 5vw, 50px)" }}
          >
            Shaping India's Next
            <br />
            Generation of Leaders
          </h2>
          <p className="text-xs sm:text-sm font-light leading-relaxed sm:leading-[1.9] text-white/66 mb-4 md:mb-5 hover:text-[#B0E4CC] transition-colors duration-200 break-words">
            Khalid Wani's work is deeply intertwined with his mission to create
            lasting change. His engagement with global startups, multinational
            companies, and government institutions reflects a drive to make a
            real, measurable difference.
          </p>
          <p className="text-xs sm:text-sm font-light leading-relaxed sm:leading-[1.9] text-white/66 mb-6 md:mb-7 hover:text-[#B0E4CC] transition-colors duration-200 break-words">
            He believes in the power of education and mentorship — forging
            strategic partnerships with leading institutions to shape the next
            wave of entrepreneurial talent across India and beyond.
          </p>
          <a
            href="#contact"
            className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-[#07111f] bg-[#B0E4CC] px-6 sm:px-8 md:px-10 py-3 md:py-4 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9ed4bb] whitespace-nowrap"
          >
            Invite Khalid to Speak
          </a>
        </div>
      </div>
    </section>
  );
}