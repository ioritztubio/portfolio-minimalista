import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVHTMLDocument } from "./CVHTMLDocument";

const LazySectionPDF = lazy(() => import("./CVSectionPDFLink"));

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<Props> = ({ open, onClose }) => {
  const { lang } = useLanguage();
  const [triggered, setTriggered] = useState(false);
  const cvLang = lang === "es" ? "es" : "en";

  const today = new Date();
  const dateStr = today.toISOString().split("T")[0];
  const langLabel = cvLang === "es" ? "ES" : "EN";
  const fileName = `Curriculum_${langLabel}_${dateStr}.pdf`;

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Reset download trigger when modal closes
  useEffect(() => { if (!open) setTriggered(false); }, [open]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto py-8 px-4"
          style={{ backgroundColor: "rgba(13,11,8,0.88)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae preview"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
            style={{ maxWidth: "720px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Top bar ── */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 rounded-t-2xl"
              style={{ backgroundColor: "var(--bg-2)", borderBottom: "0.5px solid var(--border)" }}
            >
              {/* Left: file info */}
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="shrink-0" style={{ width: "16px", height: "16px", color: "#e63946" }} />
                <span className="font-mono truncate" style={{ fontSize: "11px", color: "var(--ink-2)", letterSpacing: "0.03em" }}>
                  {fileName}
                </span>
              </div>

              {/* Right: download + close */}
              <div className="flex items-center gap-2 shrink-0 ml-3">
                {triggered ? (
                  <Suspense
                    fallback={
                      <button disabled className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold opacity-60"
                        style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
                        <Download className="w-3.5 h-3.5" />Generating…
                      </button>
                    }
                  >
                    <LazySectionPDF />
                  </Suspense>
                ) : (
                  <motion.button
                    onClick={() => setTriggered(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold"
                    style={{ backgroundColor: "var(--accent)", color: "var(--bg)", letterSpacing: "0.03em" }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download CV
                  </motion.button>
                )}

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{ color: "var(--ink-3)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-3)")}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── CV content ── */}
            <div
              className="overflow-hidden rounded-b-2xl"
              style={{ boxShadow: "0 8px 60px rgba(0,0,0,0.6)" }}
            >
              <CVHTMLDocument lang={cvLang} padding={36} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
