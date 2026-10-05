import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useConsent } from "../context/ConsentContext";
import { useLanguage } from "../context/LanguageContext";
import { siteStrings } from "../i18n/site";
import { routeHref } from "../lib/router";

// Accept and Decline have equal weight and size: the Spanish DPA (AEPD) requires
// rejecting to be as easy as accepting. Non-modal, so the page stays usable.
export const ConsentBanner: React.FC = () => {
  const { bannerOpen, accept, reject } = useConsent();
  const { lang } = useLanguage();
  const s = siteStrings(lang).consent;

  return (
    <AnimatePresence>
      {bannerOpen && (
        <motion.section
          role="region"
          aria-labelledby="consent-title"
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          exit={{ opacity: 0, transform: "translateY(8px)", transition: { duration: 0.15 } }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}
          className="glass-liquid fixed z-[150] left-3 right-3 bottom-[calc(max(12px,env(safe-area-inset-bottom))+84px)] md:left-auto md:right-6 md:bottom-6 md:max-w-sm rounded-[24px] p-5"
        >
          <h2 id="consent-title" className="text-sm font-semibold mb-2" style={{ color: "var(--ink)" }}>
            {s.title}
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-2)" }}>
            {s.body}{" "}
            <a href={routeHref("cookies")} className="link-quiet">
              {s.learnMore}
            </a>
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={reject}
              className="btn !h-10 !text-sm"
              style={{ boxShadow: "inset 0 0 0 1px var(--line-2)", color: "var(--ink)" }}
            >
              {s.reject}
            </button>
            <button
              type="button"
              onClick={accept}
              className="btn btn-solid !h-10 !text-sm"
            >
              {s.accept}
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
