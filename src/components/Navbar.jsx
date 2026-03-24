import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItemClass = ({ isActive }) =>
    [
      "relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition-all duration-300",
      isActive
        ? "bg-[#f4efe5] text-[#08101d] shadow-[0_10px_24px_rgba(244,239,229,0.18)]"
        : "text-white/72 hover:bg-white/8 hover:text-white",
    ].join(" ");

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 lg:px-8">
        <div
          className={[
            "flex w-full items-center justify-between rounded-[28px] px-4 py-3 transition-all duration-300 md:px-6",
            scrolled
              ? "border-white/12 bg-[#07111f]/88 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
              : "border-white/8 bg-[#07111f]/58 backdrop-blur-xl",
          ].join(" ")}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/KW_LOGO_D.png"
                alt="Khalid Wani"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-cormorant text-2xl leading-none text-white">
                Khalid <span className="text-gold">Wani</span>
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.32em] text-white/45">
                Strategy / Leadership / Growth
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-2 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navItemClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-6 text-[10px] font-bold uppercase tracking-[0.28em] text-[#07111f] transition duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Connect Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 origin-center rounded-full bg-current transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 origin-center rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#020814]/70 backdrop-blur-md transition duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed inset-x-4 top-[88px] z-50 rounded-[28px] border border-white/10 bg-[#07111f]/96 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-300 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                [
                  "rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.22em] transition",
                  isActive
                    ? "bg-gold text-[#07111f]"
                    : "border border-white/8 bg-white/[0.03] text-white/78 hover:bg-white/[0.06] hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-white text-[11px] font-bold uppercase tracking-[0.24em] text-[#07111f] transition hover:bg-gold"
        >
          Book Appointment
        </Link>
      </div>
    </>
  );
}
