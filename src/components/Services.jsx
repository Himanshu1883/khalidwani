import { SERVICES } from "../data/content";
import SectionLabel from "./SectionLabel";

const SERVICE_BACKGROUNDS = [
  "/khalidwani1.png",
  "/khalidwani2.jpg",
  "/profile2.jpg",
  "/khalidwani5.jpeg",
  "/profile.jpg",
  "/quote2.jpg",
];

const IMAGE_POSITIONS = [
  "object-[62%_center]",
  "object-[70%_center]",
  "object-[52%_top]",
  "object-[68%_center]",
  "object-[62%_center]",
  "object-[60%_center]",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#07111f] px-6 py-24 md:px-10 lg:px-16 lg:py-28 overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="reveal max-w-3xl w-full">
            <SectionLabel>What Khalid Offers</SectionLabel>
            <h2
              className="font-cormorant font-light leading-[0.96] text-[#f4efe5] break-words"
              style={{ fontSize: "clamp(38px, 4.8vw, 72px)" }}
            >
              Master every
              <br />
              business challenge.
            </h2>
          </div>

          <div className="reveal-right delay-1 w-full max-w-2xl lg:text-right">
            <p className="text-sm leading-[1.95] text-white/62 md:text-[15px] break-words">
              Strategic support across training, investing, coaching, speaking,
              consulting, and media, presented in a darker editorial system
              that stays aligned with the hero while keeping every card clear.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex h-14 items-center justify-center rounded-full bg-[#B0E4CC] px-6 sm:px-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9ed4bb] whitespace-nowrap"
            >
              Book Consultation
            </a>
          </div>
        </div>

        <div className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              image={SERVICE_BACKGROUNDS[index % SERVICE_BACKGROUNDS.length]}
              imagePosition={
                IMAGE_POSITIONS[index % IMAGE_POSITIONS.length]
              }
              delay={index % 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, image, imagePosition, delay }) {
  const delayClass =
    delay === 0 ? "delay-1" : delay === 1 ? "delay-2" : "delay-3";

  return (
    <article
      className={`reveal ${delayClass} group relative min-h-[340px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#091321] transition duration-500 hover:-translate-y-1 hover:border-[#8dc0ff]/35`}
    >
      <img
        src={image}
        alt={service.title}
        className={`absolute inset-0 h-full w-full object-cover ${imagePosition} transition duration-700 group-hover:scale-[1.04]`}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,16,0.96)_0%,rgba(3,8,16,0.92)_42%,rgba(3,8,16,0.58)_68%,rgba(3,8,16,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,16,0.08)_0%,rgba(3,8,16,0.18)_38%,rgba(3,8,16,0.42)_100%)]" />
      <div className="absolute left-0 top-0 bottom-0 w-[58%] bg-[#020814]/24 backdrop-blur-[4px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8dc0ff]/60 to-transparent opacity-80" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-sm text-[#B0E4CC] backdrop-blur-xl">
            {service.icon}
          </div>
          <span className="font-cormorant text-[28px] leading-none text-white/80 shrink-0">
            {service.number}
          </span>
        </div>

        <div className="w-full">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#B0E4CC] break-words">
            Signature Service
          </p>
          <h3 className="font-cormorant text-[28px] md:text-[32px] leading-[0.98] text-[#f4efe5] break-words">
            {service.title}
          </h3>
          <p className="mt-3 md:mt-4 text-[14px] md:text-[15px] leading-[1.85] text-white/88 break-words">
            {service.desc}
          </p>
        </div>
      </div>
    </article>
  );
}