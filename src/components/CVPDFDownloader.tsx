// This file is lazy-loaded — @react-pdf/renderer is only bundled in this chunk
import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVDocument } from "./CVDocument";

interface CVPDFDownloaderProps {
  fileName: string;
}

const DownloadButton: React.FC<{
  blob: Blob | null;
  loading: boolean;
  fileName: string;
}> = ({ blob, loading, fileName }) => {
  const handleDownload = () => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="p-1 transition-all duration-200 rounded hover:bg-white/10"
      style={{
        color: loading ? "var(--ink-3)" : "var(--ink-2)",
        cursor: loading ? "wait" : "pointer",
        opacity: loading ? 0.5 : 1,
      }}
      title={loading ? "Generando PDF..." : "Descargar CV"}
      aria-label="Descargar CV"
    >
      <Download className="w-4 h-4" />
    </button>
  );
};

const CVPDFDownloader: React.FC<CVPDFDownloaderProps> = ({ fileName }) => {
  const { t } = useLanguage();

  return (
    <BlobProvider document={<CVDocument t={t} />}>
      {({ blob, loading }) => (
        <DownloadButton
          blob={blob}
          loading={loading}
          fileName={fileName}
        />
      )}
    </BlobProvider>
  );
};

export default CVPDFDownloader;
