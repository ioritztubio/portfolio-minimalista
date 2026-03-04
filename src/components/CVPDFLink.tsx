// This file is lazy-loaded — @react-pdf/renderer is only bundled in this chunk
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVDocument } from "./CVDocument";

const CVPDFLink: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PDFDownloadLink
      document={<CVDocument t={t} />}
      fileName={`CV_Ioritz_Tubio_${t.lang.toUpperCase()}.pdf`}
    >
      {({ loading }) => (
        <button
          disabled={loading}
          className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold border border-zinc-700 rounded-md text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-wait bg-[#0a0a0a]/80 backdrop-blur-sm"
        >
          <Download className="w-3.5 h-3.5 mr-1.5" />
          {loading ? "…" : t.ui.downloadCV}
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default CVPDFLink;
