import React, { useState, useEffect } from "react";
import { CVDownloadButton } from "./CVDownloadButton";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const SECTION_IDS = ["about", "projects", "experience", "cv"];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const { t, lang, toggleLang } = useLanguage();

  const NAV_LINKS = [
    { label: t.ui.navAbout, href: "#about", id: "about" },
    { label: t.ui.navProjects, href: "#projects", id: "projects" },
    { label: t.ui.navExperience, href: "#experience", id: "experience" },
    { label: t.ui.navCV, href: "#cv", id: "cv" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
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
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="font-mono text-xs uppercase tracking-widest transition-colors relative"
                style={{ color: isActive ? "var(--ink)" : "var(--ink-3)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? "var(--ink)" : "var(--ink-3)")}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: lang toggle + CV + hamburger */}
        <div className="flex items-center gap-3">
          <div
            className="hidden md:flex items-center overflow-hidden rounded"
            style={{ border: "0.5px solid var(--border)" }}
          >
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => l !== lang && toggleLang()}
                aria-pressed={lang === l}
                className="px-2.5 py-1 text-xs font-mono uppercase tracking-widest transition-all duration-200"
                style={{
                  color: lang === l ? "var(--bg)" : "var(--ink-3)",
                  backgroundColor: lang === l ? "var(--ink)" : "transparent",
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <CVDownloadButton />
          <button
            className="md:hidden p-1.5 transition-colors"
            style={{ color: "var(--ink-2)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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
          <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="font-mono text-sm py-2.5 uppercase tracking-widest transition-colors"
                style={{
                  color: active === link.id ? "var(--ink)" : "var(--ink-2)",
                  borderBottom: "0.5px solid var(--border)",
                }}
              >
                {active === link.id && (
                  <span style={{ color: "var(--accent)" }}>· </span>
                )}
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 py-2.5">
              {(["en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => { if (l !== lang) { toggleLang(); setOpen(false); } }}
                  aria-pressed={lang === l}
                  className="px-3 py-1 text-xs font-mono uppercase tracking-widest rounded transition-all duration-200"
                  style={{
                    color: lang === l ? "var(--bg)" : "var(--ink-3)",
                    backgroundColor: lang === l ? "var(--ink)" : "transparent",
                    border: `0.5px solid ${lang === l ? "var(--ink)" : "var(--border)"}`,
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
