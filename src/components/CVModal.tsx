import React, { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { siteStrings } from "../i18n/site";
import { uiStrings } from "../i18n/ui";
import { useDialog } from "../lib/useDialog";
import { cvLang } from "../utils/cv";
import { CVHTMLDocument } from "./CVHTMLDocument";
import { CVDownload } from "./CVDownload";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<Props> = ({ open, onClose }) => {
  const { lang } = useLanguage();
  const site = siteStrings(lang);
  const s = uiStrings(lang);
  const reduce = useReducedMotion();
  const ref = useDialog<HTMLDivElement>(open, onClose);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain px-3 py-4 md:px-6 md:py-10"
          style={{
            background: "color-mix(in oklab, var(--bg) 55%, transparent)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            backdropFilter: "blur(18px) saturate(140%)",
          }}
          onClick={onClose}
        >
          <motion.div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-label={s.cvCaption}
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(24px) scale(0.97)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(12px) scale(0.98)", transition: { duration: 0.18 } }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.12 }}
            className="relative mx-auto w-full max-w-[760px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-liquid sticky top-0 z-10 mb-3 flex items-center justify-between gap-3 rounded-full py-1.5 pl-5 pr-1.5">
              <span className="truncate text-sm font-medium" style={{ color: "var(--ink)" }}>
                {s.cvCaption}
              </span>
              <div className="flex shrink-0 items-center gap-1.5">
                <CVDownload className="btn btn-solid !h-9 !px-4 !text-[13px]" />
                <button
                  onClick={onClose}
                  aria-label={site.a11y.close}
                  className="pressable grid h-9 w-9 place-items-center rounded-full"
                  style={{ color: "var(--ink-2)", background: "var(--line)" }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[20px]" style={{ boxShadow: "var(--glass-shadow)" }}>
              <div className="min-w-[640px]">
                <CVHTMLDocument lang={cvLang(lang)} padding={36} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
