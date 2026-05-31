// This file is lazy-loaded — @react-pdf/renderer is only bundled in this chunk
import React from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVDocument } from "./CVDocument";

interface AutoDownloadProps {
  blob: Blob | null;
  loading: boolean;
  fileName: string;
  label: string;
  onDownloadClick?: () => void;
}

const AutoDownload: React.FC<AutoDownloadProps> = ({
  blob,
  loading,
  fileName,
  label,
  onDownloadClick,
}) => {
  const handleDownload = () => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    }
    onDownloadClick?.();
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold border border-zinc-700 rounded-md text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-wait bg-[#0a0a0a]/80 backdrop-blur-sm"
    >
      <Download className="w-3.5 h-3.5 mr-1.5" />
      {loading ? "…" : label}
    </button>
  );
};

interface CVPDFLinkProps {
  onDownloadClick?: () => void;
}

const CVPDFLink: React.FC<CVPDFLinkProps> = ({ onDownloadClick }) => {
  const { t } = useLanguage();
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const fileName = `cv-ioritz-tubio-${day}-${month}-${year}.pdf`;

  return (
    <BlobProvider document={<CVDocument t={t} />}>
      {({ blob, loading }) => (
        <AutoDownload
          blob={blob}
          loading={loading}
          fileName={fileName}
          label={t.ui.downloadCV}
          onDownloadClick={onDownloadClick}
        />
      )}
    </BlobProvider>
  );
};

export default CVPDFLink;
