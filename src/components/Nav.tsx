import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Briefcase, FileText, Layers, Mail, Moon, Sun, User } from "lucide-react";
import { SELECTABLE_LANGS, useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useCV } from "../context/CVContext";
import { uiStrings } from "../i18n/ui";
import { siteStrings } from "../i18n/site";

const SECTIONS = ["about", "projects", "experience", "contact"] as const;
type Section = (typeof SECTIONS)[number];

function useActiveSection(): Section | null {
  const [active, setActive] = useState<Section | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as Section);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    const hero = document.getElementById("top");
    const heroIo = new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), {
      rootMargin: "-45% 0px -50% 0px",
    });
    if (hero) heroIo.observe(hero);
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      io.disconnect();
      heroIo.disconnect();
    };
  }, []);
  return active;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return scrolled;
}

const LangSwitch: React.FC<{ scope: string }> = ({ scope }) => {
  const { lang, setLang } = useLanguage();
  const label = siteStrings(lang).a11y.language;
  return (
    <div role="radiogroup" aria-label={label} className="relative flex items-center rounded-full p-0.5" style={{ background: "var(--line)" }}>
      {SELECTABLE_LANGS.map((l) => {
        const on = l === lang;
        return (
          <button
            key={l}
            role="radio"
            aria-checked={on}
            onClick={() => setLang(l)}
            className="relative h-7 w-8 rounded-full text-[11px] font-medium uppercase tracking-wide transition-colors duration-200"
            style={{ color: on ? "var(--ink)" : "var(--ink-3)" }}
          >
            {on && (
              <motion.span
                layoutId={`lang-pill-${scope}`}
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--glass-strong)", boxShadow: "inset 0 1px 0 var(--glass-rim), 0 1px 3px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              />
            )}
            <span className="relative">{l}</span>
          </button>
        );
      })}
    </div>
  );
};

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();
  const s = uiStrings(lang);
  const dark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? s.themeToLight : s.themeToDark}
      className="pressable relative grid h-8 w-8 place-items-center rounded-full"
      style={{ color: "var(--ink-2)" }}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -40, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="grid place-items-center"
      >
        {dark ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
      </motion.span>
    </button>
  );
};

export const Nav: React.FC = () => {
  const { t, lang } = useLanguage();
  const s = uiStrings(lang);
  const site = siteStrings(lang);
  const { openCV } = useCV();
  const active = useActiveSection();
  const scrolled = useScrolled();
  const reduce = useReducedMotion();

  const links: { id: Section; label: string; short: string; icon: React.ElementType }[] = [
    { id: "about", label: t.ui.navAbout, short: t.ui.navAbout, icon: User },
    { id: "projects", label: t.ui.navProjects, short: s.navWork, icon: Layers },
    { id: "experience", label: t.ui.navExperience, short: t.ui.navExperience, icon: Briefcase },
    { id: "contact", label: s.navContact, short: s.navContact, icon: Mail },
  ];

  return (
    <>
      {/* ── Desktop: floating liquid-glass pill ── */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] hidden justify-center md:flex">
        <motion.nav
          aria-label={site.a11y.mainNav}
          initial={reduce ? false : { opacity: 0, y: -12 }}
          // Settles closer to the edge and slightly smaller once the page scrolls
          animate={{ opacity: 1, y: scrolled ? -6 : 0, scale: scrolled ? 0.96 : 1 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="glass-liquid pointer-events-auto flex items-center gap-1 rounded-full"
          style={{ marginTop: 18, padding: 5 }}
        >
          <a
            href="#top"
            className="pressable grid h-8 place-items-center rounded-full px-3 text-[13px] font-semibold tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            Ioritz Tubio
          </a>
          <span className="mx-1 h-4 w-px" style={{ background: "var(--line-2)" }} aria-hidden="true" />
          {links.map((l) => {
            const on = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={on ? "true" : undefined}
                className="relative grid h-8 place-items-center rounded-full px-3.5 text-[13px] transition-colors duration-200"
                style={{ color: on ? "var(--ink)" : "var(--ink-2)" }}
              >
                {on && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--line)" }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            );
          })}
          <button onClick={openCV} className="btn btn-solid ml-1 !h-8 !px-3.5 !text-[13px]">
            {t.ui.navCV}
          </button>
          <span className="mx-1 h-4 w-px" style={{ background: "var(--line-2)" }} aria-hidden="true" />
          <LangSwitch scope="desktop" />
          <ThemeButton />
        </motion.nav>
      </div>

      {/* ── Mobile: settings chip on top, tab bar at the thumb ── */}
      <div
        className="glass-liquid fixed right-3 z-[100] flex items-center gap-1 rounded-full p-1 md:hidden"
        style={{ top: "max(12px, env(safe-area-inset-top))" }}
      >
        <LangSwitch scope="mobile" />
        <ThemeButton />
      </div>

      <nav
        aria-label={site.a11y.mainNav}
        className="glass-liquid fixed inset-x-3 z-[100] flex items-stretch justify-between rounded-[26px] p-1.5 md:hidden"
        style={{ bottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        {links.slice(0, 3).map((l) => (
          <TabLink key={l.id} href={`#${l.id}`} label={l.short} icon={l.icon} on={active === l.id} />
        ))}
        <button
          onClick={openCV}
          className="pressable flex flex-1 flex-col items-center justify-center gap-0.5 rounded-[20px] py-1.5 text-[10px] font-medium"
          style={{ color: "var(--ink-2)" }}
        >
          <FileText className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
          {t.ui.navCV}
        </button>
        <TabLink href="#contact" label={links[3].short} icon={Mail} on={active === "contact"} />
      </nav>
    </>
  );
};

const TabLink: React.FC<{ href: string; label: string; icon: React.ElementType; on: boolean }> = ({ href, label, icon: Icon, on }) => (
  <a
    href={href}
    aria-current={on ? "true" : undefined}
    className="pressable relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-[20px] py-1.5 text-[10px] font-medium"
    style={{ color: on ? "var(--ink)" : "var(--ink-2)" }}
  >
    {on && (
      <motion.span
        layoutId="tab-active"
        className="absolute inset-0 rounded-[20px]"
        style={{ background: "var(--line)" }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
      />
    )}
    <Icon className="relative h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
    <span className="relative max-w-full truncate px-1">{label}</span>
  </a>
);
