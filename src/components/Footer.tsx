import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useConsent } from "../context/ConsentContext";
import { siteStrings } from "../i18n/site";
import { routeHref } from "../lib/router";

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  const s = siteStrings(lang);
  const { openSettings } = useConsent();
  const legal = [
    { href: routeHref("privacy"), label: s.footer.privacy },
    { href: routeHref("terms"), label: s.footer.terms },
    { href: routeHref("cookies"), label: s.footer.cookies },
    { href: routeHref("refunds"), label: s.footer.refunds },
  ];

  return (
    <footer className="relative px-5 pb-32 pt-10 md:px-10 md:pb-12">
      <div
        className="mx-auto flex max-w-6xl flex-col gap-5 border-t pt-8 text-[13px] md:flex-row md:items-center md:justify-between"
        style={{ borderColor: "var(--line)", color: "var(--ink-3)" }}
      >
        <p>
          © {new Date().getFullYear()} {t.profile.name} · {t.ui.footerBuiltWith}
        </p>
        <nav aria-label={s.a11y.legalNav} className="flex flex-wrap gap-x-5 gap-y-2">
          {legal.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors duration-200 hover:text-[var(--ink)]">
              {l.label}
            </a>
          ))}
          <button onClick={openSettings} className="transition-colors duration-200 hover:text-[var(--ink)]">
            {s.footer.privacySettings}
          </button>
        </nav>
      </div>
    </footer>
  );
};
