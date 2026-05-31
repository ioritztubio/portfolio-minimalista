import React, { useState, useEffect } from "react";
import { CVDownloadButton } from "./CVDownloadButton";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(13,11,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); handleNav("#about"); }}
          className="font-mono text-sm tracking-wide transition-colors"
          style={{ color: "var(--ink-2)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-2)")}
        >
          {t.profile.name.split(" ")[0].toLowerCase()}.{t.profile.name.split(" ")[1].toLowerCase()}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="font-mono text-xs uppercase tracking-widest transition-colors"
              style={{ color: "var(--ink-3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-3)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CV + hamburger */}
        <div className="flex items-center gap-3">
          <CVDownloadButton />
          <button
            className="md:hidden p-1.5 transition-colors"
            style={{ color: "var(--ink-2)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: "0.5px solid var(--border)",
            backgroundColor: "rgba(13,11,8,0.97)",
            backdropFilter: "blur(12px)",
          }}
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="font-mono text-sm py-2.5 uppercase tracking-widest transition-colors"
                style={{
                  color: "var(--ink-2)",
                  borderBottom: "0.5px solid var(--border)",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
