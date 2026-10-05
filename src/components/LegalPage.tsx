import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LEGAL, LAST_UPDATED, LegalPage as Page } from "../legal/content";
import { legalLang, siteStrings } from "../i18n/site";
import { routeHref } from "../lib/router";

// Renders **bold** and [label](url) inside legal copy.
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const bold = part.match(/^\*\*(.+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[(.+)\]\((.+)\)$/);
    if (link) {
      const external = link[2].startsWith("http");
      return (
        <a key={i} href={link[2]} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

export const LegalPage: React.FC<{ page: Page }> = ({ page }) => {
  const { lang } = useLanguage();
  const l = legalLang(lang);
  const doc = LEGAL[l][page];
  const s = siteStrings(lang);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the new page title so screen readers announce the change.
  useEffect(() => {
    headingRef.current?.focus();
    document.title = `${doc.title} · Ioritz Tubio Sanchez`;
  }, [doc.title]);

  return (
    <motion.article
      key={page}
      initial={{ opacity: 0, transform: "translateY(12px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="px-4 pt-10 pb-24 max-w-2xl mx-auto"
    >
      <a
        href={routeHref("home")}
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-10 transition-colors hover:text-[var(--ink)]"
        style={{ color: "var(--ink-2)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
        {s.backHome}
      </a>

      <h1
        ref={headingRef}
        tabIndex={-1}
        className="text-3xl md:text-4xl font-bold mb-3 outline-none"
        style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
      >
        {doc.title}
      </h1>
      <p className="font-mono text-xs mb-8" style={{ color: "var(--ink-3)" }}>
        {s.lastUpdated}: {LAST_UPDATED[l]}
      </p>

      <div className="prose-legal">
        <p>{doc.intro}</p>
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.blocks.map((block, i) =>
              Array.isArray(block) ? (
                <ul key={i}>
                  {block.map((item, j) => (
                    <li key={j}>{renderInline(item)}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{renderInline(block)}</p>
              ),
            )}
          </section>
        ))}
      </div>
    </motion.article>
  );
};
