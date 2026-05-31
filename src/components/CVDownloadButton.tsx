import React, { Suspense, lazy } from "react";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LazyPDFLink = lazy(() => import("./CVPDFLink"));

const FauxLines = ({ widths }: { widths: number[] }) => (
  <>
    {widths.map((w, i) => (
      <div
        key={i}
        style={{
          height: "1.5px",
          width: `${w}%`,
          backgroundColor: "#555",
          borderRadius: "1px",
          marginBottom: "3px",
        }}
      />
    ))}
  </>
);

const PreviewCard: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="group relative overflow-hidden rounded transition-all duration-300"
    style={{
      width: "72px",
      height: "50px",
      border: "0.5px solid var(--border)",
    }}
    aria-label={label}
  >
    {/* Faux CV document */}
    <div
      className="absolute inset-0 flex flex-col p-1.5"
      style={{
        backgroundColor: "#f9f9f7",
        filter: "blur(1px)",
        transform: "scale(1.02)",
      }}
    >
      {/* Name bar */}
      <div style={{ height: "3px", width: "55%", backgroundColor: "#222", borderRadius: "1px", alignSelf: "center", marginBottom: "4px" }} />
      {/* Contact line */}
      <div style={{ height: "1px", width: "80%", backgroundColor: "#888", borderRadius: "1px", alignSelf: "center", marginBottom: "4px" }} />
      {/* Section rule */}
      <div style={{ height: "0.5px", width: "100%", backgroundColor: "#333", marginBottom: "3px" }} />
      <FauxLines widths={[90, 75, 85, 60]} />
      {/* Mini rule */}
      <div style={{ height: "0.5px", width: "100%", backgroundColor: "#333", marginTop: "2px", marginBottom: "3px" }} />
      <FauxLines widths={[80, 70, 55]} />
    </div>

    {/* Overlay — visible always, accent on hover */}
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 transition-all duration-300"
      style={{ backgroundColor: "rgba(13,11,8,0.58)" }}
    >
      <Download
        className="transition-colors duration-300"
        style={{ width: "10px", height: "10px", color: "var(--ink-2)" }}
      />
      <span
        className="font-mono uppercase tracking-widest transition-colors duration-300"
        style={{ fontSize: "7px", color: "var(--ink-2)" }}
      >
        CV
      </span>
    </div>

    {/* Hover brightens the overlay */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-0.5"
      style={{ backgroundColor: "rgba(13,11,8,0.35)" }}
    >
      <Download style={{ width: "10px", height: "10px", color: "var(--ink)" }} />
      <span
        className="font-mono uppercase tracking-widest"
        style={{ fontSize: "7px", color: "var(--ink)" }}
      >
        CV
      </span>
    </div>
  </button>
);

export const CVDownloadButton: React.FC = () => {
  const { t } = useLanguage();
  const [triggered, setTriggered] = React.useState(false);

  if (!triggered) {
    return <PreviewCard onClick={() => setTriggered(true)} label={t.ui.downloadCV} />;
  }

  return (
    <Suspense fallback={<PreviewCard onClick={() => {}} label="…" />}>
      <LazyPDFLink />
    </Suspense>
  );
};
