import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-500 ${
          visible ? "top-6 opacity-100" : "-top-24 opacity-0"
        }`}
      >
        <div className="w-[95%] max-w-[1200px] flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-[#0B1220]/80 backdrop-blur-xl shadow-xl">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/KW_LOGO_D.png" className="h-8" />
            <span className="hidden sm:block text-white font-medium">
              Khalid <span className="text-[#B0E4CC]">Wani</span>
            </span>
          </Link>

          {/* LINKS RIGHT */}
          <div className="hidden lg:flex items-center gap-8 ml-auto mr-6">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative text-[12px] uppercase tracking-widest font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    {/* CLEAN UNDERLINE */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#B0E4CC] transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center px-5 py-2 rounded-full bg-[#B0E4CC] text-black text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition"
          >
            Connect
          </Link>

          {/* MOBILE BTN */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-10 w-10 flex items-center justify-center border border-white/20 rounded-lg"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-5 bg-white ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 bg-[#0B1220] border border-white/10 rounded-xl p-6 transition ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              className="text-center py-3 text-white/70 hover:text-white uppercase tracking-widest text-sm"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-5 flex justify-center py-3 rounded-full bg-[#B0E4CC] text-black text-xs font-semibold uppercase tracking-widest"
        >
          Connect Now
        </Link>
      </div>
    </>
  );
}