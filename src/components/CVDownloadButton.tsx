import React, { Suspense, lazy } from "react";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Lazy-load all PDF-related code — only downloaded when the user clicks
const LazyPDFLink = lazy(() => import("./CVPDFLink"));

export const CVDownloadButton: React.FC = () => {
  const { t } = useLanguage();
  const [triggered, setTriggered] = React.useState(false);

  if (!triggered) {
    return (
      <button
        onClick={() => setTriggered(true)}
        className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold border border-zinc-700 rounded-md text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200 bg-[#0a0a0a]/80 backdrop-blur-sm"
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
          className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold border border-zinc-700 rounded-md text-zinc-400 opacity-50 cursor-wait bg-[#0a0a0a]/80 backdrop-blur-sm"
        >
          <Download className="w-3.5 h-3.5 mr-1.5" />…
        </button>
      }
    >
      <LazyPDFLink />
    </Suspense>
  );
};
