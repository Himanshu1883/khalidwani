import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background effect
      setScrolled(currentScrollY > 24);
      
      // Handle navbar visibility on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItemClass = ({ isActive }) =>
    [
      "relative rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.28em] transition-all duration-300 whitespace-nowrap",
      isActive
        ? "bg-[#B0E4CC] text-black shadow-[0_10px_24px_rgba(59,130,246,0.25)]"
        : "text-white/72 hover:bg-[#B0E4CC]/20 hover:text-[#B0E4CC]",
    ].join(" ");

  return (
    <>
      {/* Floating Navbar with Hide/Show on Scroll */}
      <nav 
        className={`fixed inset-x-0 z-50 px-2 sm:px-6 md:px-4 lg:px-6 xl:px-8 transition-all duration-300 ${
          isVisible 
            ? "top-3 sm:top-4 translate-y-0" 
            : "top-0 -translate-y-full"
        }`}
      >
        <div
          className={[
            "flex w-full items-center justify-between rounded-2xl sm:rounded-[28px] px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 md:px-5 lg:px-6",
            scrolled
              ? "border-white/12 bg-[#0B1220]/90 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
              : "border-white/8 bg-[#0B1220]/70 backdrop-blur-2xl",
          ].join(" ")}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/KW_LOGO_D.png"
                alt="Khalid Wani"
                className="h-4 w-auto sm:h-5 md:h-7 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-cormorant text-sm sm:text-base md:text-lg lg:text-xl leading-tight text-white">
                Khalid <span className="text-[#B0E4CC]">Wani</span>
              </p>
              <p className="mt-0.5 text-[6px] sm:text-[7px] md:text-[8px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/45 whitespace-nowrap">
                Strategy / Leadership / Growth
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 overflow-x-hidden max-w-full">
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

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex h-9 sm:h-10 items-center justify-center rounded-full bg-[#B0E4CC] px-4 sm:px-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-gray-500 whitespace-nowrap"
            >
              Connect Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 origin-center rounded-full bg-current transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 origin-center rounded-full bg-current transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#020814]/70 backdrop-blur-md transition duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 z-50 mx-3 sm:mx-4 rounded-2xl border border-white/10 bg-[#0B1220]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition duration-300 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-[-20px] opacity-0 pointer-events-none"
        }`}
        style={{
          top: isVisible ? "72px" : "16px",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <div className="flex flex-col gap-2 max-h-[calc(100vh-160px)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                [
                  "rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition text-center",
                  isActive
                    ? "bg-[#B0E4CC] text-black"
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
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-xl bg-white text-[11px] font-bold uppercase tracking-[0.24em] text-[#07111f] transition hover:bg-[#B0E4CC] hover:text-white"
        >
          Book Appointment
        </Link>
      </div>
    </>
  );
}