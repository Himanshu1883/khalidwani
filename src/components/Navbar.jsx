import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-lg border-b border-gold/20 py-4"
          : "bg-ink/80 backdrop-blur-sm py-7"
      } px-16`}
    >
      {/* Logo */}
      <Link to="/" className="...">
        Khalid <span className="text-gold">Wani</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-11 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-[11px] font-medium tracking-[0.18em] uppercase text-cream/80 hover:text-gold transition-colors duration-300 no-underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/contact"
        className="hidden md:inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-ink bg-gold px-8 py-3 no-underline hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Connect Now
      </Link>

      {/* Mobile hamburger */}
      {/* <button
        className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button> */}

      {/* Mobile menu */}
      {/* <div
        className={`fixed inset-0 bg-ink/98 backdrop-blur-xl md:hidden transition-all duration-500 flex items-center justify-center ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gold text-4xl font-light"
          >
            ×
          </button>
        </div>
        <ul className="list-none flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium tracking-[0.18em] uppercase text-cream/90 hover:text-gold transition-colors duration-300 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-ink bg-gold px-10 py-4 no-underline hover:bg-gold-light transition-all duration-300"
            >
              Connect Now
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
