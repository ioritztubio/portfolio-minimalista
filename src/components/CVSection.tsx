import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { CVHTMLDocument } from "./CVHTMLDocument";
import { CVModal } from "./CVModal";
import { CVDownloadBar } from "./CVDownloadBar";

// Card dimensions
const CARD_W = 260;   // px — displayed card width
const CV_W   = 794;   // px — inner HTML CV render width (A4 @ 96dpi)
const SCALE  = CARD_W / CV_W; // ≈ 0.327
const CARD_H = Math.round(CV_W * 1.414 * SCALE); // ≈ A4 aspect ratio ≈ 368px

export const CVSection: React.FC = () => {
  const { lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const cvLang = lang === "es" ? "es" : "en";

  return (
    <>
      <section id="cv" className="py-16 px-4 flex flex-col items-center gap-4">
        {/* Label */}
        <p className="section-label w-full max-w-4xl">
          {lang === "es" ? "Currículum" : "Curriculum Vitae"}
        </p>

        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{
            width: `${CARD_W}px`,
            height: `${CARD_H}px`,
            cursor: "pointer",
            boxShadow: "0 6px 40px rgba(0,0,0,0.45)",
          }}
          whileHover={{ y: -4, boxShadow: "0 16px 60px rgba(0,0,0,0.65)" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={() => setModalOpen(true)}
          role="button"
          aria-label="Open CV preview"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
        >
          {/* ── Scaled HTML CV ── */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${CV_W}px`,
              transformOrigin: "top left",
              transform: `scale(${SCALE})`,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            <CVHTMLDocument lang={cvLang} padding={42} />
          </div>

          {/* ── Bottom gradient — fades into background ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent 55%, var(--bg) 100%)`,
            }}
          />

          {/* ── Hover overlay ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end pb-6 gap-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ background: "rgba(13,11,8,0.25)" }}
          >
            <CVDownloadBar onPreviewClick={() => setModalOpen(true)} />
          </motion.div>

          {/* ── Year badge ── */}
          <div
            className="absolute top-2.5 right-2.5 font-mono rounded-full px-2 py-0.5"
            style={{
              fontSize: "8px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
            }}
          >
            {new Date().getFullYear()}
          </div>
        </motion.div>

        {/* Hint */}
        <p className="font-mono" style={{ fontSize: "10px", color: "var(--ink-3)", letterSpacing: "0.06em" }}>
          {lang === "es" ? "Hover para descargar" : "Hover to download"}
        </p>
      </section>

      <CVModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
