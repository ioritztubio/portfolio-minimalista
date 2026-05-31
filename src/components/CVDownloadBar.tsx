import React, { Suspense, lazy } from "react";
import { FileText } from "lucide-react";

const LazyPDFDownloader = lazy(() => import("./CVPDFDownloader"));

interface CVDownloadBarProps {
  onPreviewClick: () => void;
}

export const CVDownloadBar: React.FC<CVDownloadBarProps> = ({
  onPreviewClick,
}) => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const fileName = `cv-ioritz-tubio-${day}-${month}-${year}`;

  return (
    <div
      className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
      role="toolbar"
      aria-label="CV download options"
      style={{
        border: "0.5px solid var(--border)",
        backgroundColor: "rgba(13,11,8,0.4)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-2)";
        (e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(13,11,8,0.6)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.backgroundColor =
          "rgba(13,11,8,0.4)";
      }}
    >
      {/* PDF Icon */}
      <div style={{ color: "var(--ink-2)" }}>
        <FileText className="w-4 h-4" />
      </div>

      {/* Filename - clickable for preview */}
      <button
        onClick={onPreviewClick}
        className="flex-1 text-left font-mono text-xs uppercase tracking-widest transition-colors"
        style={{ color: "var(--ink)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "var(--ink)";
        }}
      >
        {fileName}
      </button>

      {/* Download button */}
      <Suspense fallback={<div style={{ width: "16px", height: "16px" }} />}>
        <LazyPDFDownloader fileName={fileName} />
      </Suspense>
    </div>
  );
};
