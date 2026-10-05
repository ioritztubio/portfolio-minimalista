import React, { Suspense, lazy, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { uiStrings } from "../i18n/ui";
import { cvLang } from "../utils/cv";

const LazyPDF = lazy(() => import("./CVSectionPDFLink"));

export const CVDownload: React.FC<{ className?: string }> = ({ className = "btn btn-glass glass" }) => {
  const { lang } = useLanguage();
  const s = uiStrings(lang);
  const [busy, setBusy] = useState(false);
  const date = new Date().toISOString().split("T")[0];
  const fileName = `CV_Ioritz_Tubio_${cvLang(lang).toUpperCase()}_${date}.pdf`;

  return (
    <>
      <button onClick={() => setBusy(true)} disabled={busy} aria-busy={busy} className={`${className} disabled:opacity-70`}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
        {busy ? s.preparingPDF : s.downloadPDF}
      </button>
      {busy && (
        <Suspense fallback={null}>
          <LazyPDF fileName={fileName} onDone={() => setBusy(false)} />
        </Suspense>
      )}
    </>
  );
};
