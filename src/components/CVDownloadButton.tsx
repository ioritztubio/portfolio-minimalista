import React, { Suspense, lazy } from "react";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LazyPDFLink = lazy(() => import("./CVPDFLink"));

export const CVDownloadButton: React.FC = () => {
  const { t } = useLanguage();
  const [triggered, setTriggered] = React.useState(false);

  if (!triggered) {
    return (
      <button
        onClick={() => setTriggered(true)}
        className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold rounded-md transition-all duration-200"
        style={{
          color: "var(--ink-3)",
          border: "0.5px solid var(--border)",
          backgroundColor: "transparent",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = "var(--ink)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-2)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = "var(--ink-3)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        }}
      >
        <Download className="w-3.5 h-3.5 mr-1.5" />
        {t.ui.downloadCV}
      </button>
    );
  }

  return (
    <Suspense
      fallback={
        <button
          disabled
          className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold rounded-md opacity-50"
          style={{ color: "var(--ink-3)", border: "0.5px solid var(--border)" }}
        >
          <Download className="w-3.5 h-3.5 mr-1.5" />…
        </button>
      }
    >
      <LazyPDFLink />
    </Suspense>
  );
};
