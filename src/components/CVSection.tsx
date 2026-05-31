import React, { Suspense, lazy, useState } from "react";
import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LazySectionPDF = lazy(() => import("./CVSectionPDFLink"));

// ─── Faux CV document (unreadable blur target) ───────────────────────────────
const FauxDocument: React.FC = () => (
  <div
    className="w-full h-full"
    style={{
      backgroundColor: "#fefefe",
      padding: "22px 18px 18px",
      fontFamily: "Georgia, serif",
    }}
  >
    {/* Name */}
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
      <div style={{ height: "7px", width: "52%", backgroundColor: "#111", borderRadius: "1px", marginBottom: "4px" }} />
      <div style={{ height: "2.5px", width: "68%", backgroundColor: "#888", borderRadius: "1px" }} />
    </div>
    {/* Rule */}
    <div style={{ height: "0.5px", backgroundColor: "#111", marginBottom: "8px" }} />
    {/* Section 1 */}
    <div style={{ height: "4px", width: "38%", backgroundColor: "#111", borderRadius: "1px", marginBottom: "3px" }} />
    <div style={{ height: "0.5px", backgroundColor: "#333", marginBottom: "6px" }} />
    <Row w={[48, 20]} dark />
    <Row w={[36, 22]} />
    <Lines ws={[92, 84, 88, 75, 91]} />
    {/* Section 2 */}
    <div style={{ height: "4px", width: "26%", backgroundColor: "#111", borderRadius: "1px", marginTop: "9px", marginBottom: "3px" }} />
    <div style={{ height: "0.5px", backgroundColor: "#333", marginBottom: "6px" }} />
    <Row w={[54, 18]} dark />
    <Row w={[40, 22]} />
    <Lines ws={[88, 78, 93, 70]} />
    {/* Section 3 */}
    <div style={{ height: "4px", width: "42%", backgroundColor: "#111", borderRadius: "1px", marginTop: "9px", marginBottom: "3px" }} />
    <div style={{ height: "0.5px", backgroundColor: "#333", marginBottom: "6px" }} />
    <Row w={[46, 19]} dark />
    <Row w={[32, 21]} />
    <Lines ws={[85, 77, 90, 65, 82]} />
    {/* Skills */}
    <div style={{ height: "4px", width: "32%", backgroundColor: "#111", borderRadius: "1px", marginTop: "9px", marginBottom: "3px" }} />
    <div style={{ height: "0.5px", backgroundColor: "#333", marginBottom: "6px" }} />
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ flex: 1 }}><Lines ws={[78, 65, 72, 80, 68]} /></div>
      <div style={{ flex: 1 }}><Lines ws={[70, 55, 75, 60, 58]} /></div>
    </div>
  </div>
);

const Row: React.FC<{ w: [number, number]; dark?: boolean }> = ({ w, dark }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
    <div style={{ height: dark ? "3px" : "2.5px", width: `${w[0]}%`, backgroundColor: dark ? "#222" : "#666", borderRadius: "1px" }} />
    <div style={{ height: dark ? "3px" : "2.5px", width: `${w[1]}%`, backgroundColor: dark ? "#222" : "#666", borderRadius: "1px" }} />
  </div>
);

const Lines: React.FC<{ ws: number[] }> = ({ ws }) => (
  <>
    {ws.map((w, i) => (
      <div key={i} style={{ height: "2px", width: `${w}%`, backgroundColor: "#999", borderRadius: "1px", marginBottom: "2.5px" }} />
    ))}
  </>
);

// ─── Main section ─────────────────────────────────────────────────────────────
export const CVSection: React.FC = () => {
  const { t } = useLanguage();
  const [triggered, setTriggered] = useState(false);

  const today = new Date();
  const dateStr = today.toISOString().split("T")[0];
  const fileName = `Curriculum_EN_${dateStr}.pdf`;

  return (
    <section className="py-16 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full"
        style={{ maxWidth: "360px" }}
      >
        <motion.div
          className="relative overflow-hidden"
          style={{
            borderRadius: "20px",
            border: "1px solid var(--border)",
            backgroundColor: "var(--bg-2)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
          }}
          whileHover={{
            boxShadow: "0 12px 56px rgba(0,0,0,0.55)",
            y: -3,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* ── 2025 Edition badge ── */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="font-mono uppercase tracking-widest rounded-full px-2 py-0.5"
              style={{
                fontSize: "8px",
                backgroundColor: "var(--accent)",
                color: "var(--bg)",
                fontWeight: 700,
              }}
            >
              {today.getFullYear()} Edition
            </span>
          </div>

          {/* ── CV Preview ── */}
          <motion.div
            className="relative overflow-hidden mx-4 mt-4"
            style={{
              height: "300px",
              borderRadius: "8px",
              boxShadow: "0 2px 24px rgba(0,0,0,0.4)",
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35 }}
          >
            {/* Blurred document */}
            <motion.div
              className="w-full h-full"
              style={{ filter: "blur(3.5px)", opacity: 0.88 }}
              whileHover={{ filter: "blur(2px)", opacity: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <FauxDocument />
            </motion.div>

            {/* Gradient overlay — top to bottom, darkens bottom */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom, transparent 40%, var(--bg-2) 100%),
                  linear-gradient(135deg, rgba(232,169,76,0.04) 0%, transparent 60%)
                `,
              }}
            />

            {/* Centred label */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(13,11,8,0.18)" }}
            >
              <span
                className="font-mono uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  fontSize: "9px",
                  color: "var(--ink-2)",
                  border: "0.5px solid var(--border)",
                  backgroundColor: "rgba(13,11,8,0.6)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Curriculum Vitae
              </span>
            </div>
          </motion.div>

          {/* ── Footer band ── */}
          <div
            className="flex items-center justify-between px-4 py-3 mt-3"
            style={{ borderTop: "0.5px solid var(--border)" }}
          >
            {/* Left: file info */}
            <div className="flex items-center gap-2.5 min-w-0">
              <FileText
                className="shrink-0"
                style={{ width: "18px", height: "18px", color: "#e63946" }}
              />
              <div className="min-w-0">
                <p
                  className="font-mono truncate"
                  style={{ fontSize: "9px", color: "var(--ink-2)", letterSpacing: "0.02em" }}
                >
                  {fileName}
                </p>
                <p style={{ fontSize: "8px", color: "var(--ink-3)" }}>PDF · ~80 KB</p>
              </div>
            </div>

            {/* Right: download CTA */}
            {triggered ? (
              <Suspense
                fallback={
                  <button
                    disabled
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono font-semibold opacity-60 shrink-0"
                    style={{ backgroundColor: "var(--accent)", color: "var(--bg)", fontSize: "12px" }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Generating…
                  </button>
                }
              >
                <LazySectionPDF />
              </Suspense>
            ) : (
              <motion.button
                onClick={() => setTriggered(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono font-semibold shrink-0"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  fontSize: "12px",
                  letterSpacing: "0.03em",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
              >
                <Download className="w-3.5 h-3.5" />
                {t.ui.downloadCV}
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
