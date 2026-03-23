import { FOOTER_LINKS, SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.05] px-8 md:px-16 pt-20 pb-11">
      <div className="grid grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 md:gap-14 mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <a
            href="#"
            className="block font-cormorant text-[22px] tracking-[0.06em] text-cream no-underline mb-4"
          >
            Khalid <span className="text-gold">Wani</span>
          </a>
          <p className="text-[13px] text-muted leading-[1.85] max-w-[230px] hover:text-gold transition-colors duration-200">
            Global consultant, investor, and mentor with 20+ years empowering
            entrepreneurs to reach their fullest potential.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-[10px] font-medium tracking-[0.2em] uppercase text-cream mb-6">
              {heading}
            </h4>
            <ul className="list-none space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="text-[13px] text-muted hover:text-gold transition-colors duration-300 no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        <p className="text-[12px] text-muted">
          © 2026 Khalid Wani · KWCG. All rights reserved.
        </p>
        <div className="flex gap-6">
          {SOCIAL_LINKS.slice(0, 3).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-medium tracking-[0.18em] uppercase text-muted hover:text-gold transition-colors duration-300 no-underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
