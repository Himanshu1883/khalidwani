import { IMAGES } from "../data/content";
import FallbackImage from "./FallbackImage";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#07111f] px-6 py-24 md:px-10 lg:px-16 lg:py-32 overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] items-center gap-14 lg:grid lg:grid-cols-2 lg:gap-20">
        <div className="w-full max-w-2xl">
          <div className="reveal">
            <SectionLabel>The Khalid Wani Story</SectionLabel>
          </div>

          <h2
            className="reveal delay-1 font-cormorant font-light leading-[0.98] text-[#f4efe5] break-words"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Owner of KWCG.
            <br />
            Entrepreneur.
            <br />
            Investor. Mentor.
          </h2>

          <div className="mt-8 space-y-5">
            <p className="reveal-left delay-2 w-full text-sm leading-[2] text-white/66 md:text-[15px]">
              Born into a modest background, Khalid Wani understood the value of
              hard work and vision from an early age. Each challenge laid the
              foundation for the remarkable leader he is today, navigating
              complex industries and reshaping India&apos;s entrepreneurial
              landscape.
            </p>

            <p className="reveal-right delay-3 w-full text-sm leading-[2] text-white/66 md:text-[15px]">
              He has delivered 100+ speaking sessions, reached 30M+ viewers
              through All India Radio and Doordarshan, invested in 50+
              companies, and mentored over 10,000 entrepreneurs. His 200K+
              social following reflects influence built on authenticity and
              results.
            </p>
          </div>

          <div className="reveal delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#B0E4CC] px-8 text-[10px] font-bold uppercase tracking-[0.26em] text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B0E4CC] whitespace-nowrap"
            >
              Work with Khalid
            </a>

            <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50 backdrop-blur-xl whitespace-nowrap overflow-x-auto">
              Strategy / Leadership / Growth
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 w-full">
          <div className="reveal-right delay-1 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="relative">
              <FallbackImage
                sources={IMAGES.about1}
                alt="Khalid Wani"
                className="h-[360px] w-full rounded-[24px] object-cover object-top transition duration-700 hover:scale-[1.03] md:h-[520px]"
                style={{ filter: "brightness(0.88)" }}
              />

              <div className="absolute left-2 top-5 rounded-[22px] border border-white/10 bg-[#07111f]/82 px-5 py-4 backdrop-blur-xl">
                <p className="font-cormorant text-[36px] leading-none text-[#B0E4CC]">
                  10K+
                </p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55 whitespace-nowrap">
                  Entrepreneurs Mentored
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 w-full">
            <div className="reveal-left delay-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <FallbackImage
                sources={IMAGES.about2}
                alt="Khalid Wani Speaking"
                className="h-[220px] w-full rounded-[20px] object-cover object-center transition duration-700 hover:scale-[1.04] md:h-[250px]"
                style={{ filter: "brightness(0.85)" }}
              />
            </div>

            <div className="reveal delay-3 flex min-h-[220px] w-full flex-col justify-between rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 backdrop-blur-xl md:min-h-[250px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8dc0ff] break-words">
                Built for long-term impact
              </p>
              <p className="mt-4 font-cormorant text-[34px] leading-[1.02] text-[#f4efe5] break-words">
                Vision backed
                <br />
                by execution.
              </p>
              <div className="mt-6 inline-flex rounded-full bg-[#B0E4CC] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07111f] whitespace-nowrap self-start">
                KWCG / Director
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}