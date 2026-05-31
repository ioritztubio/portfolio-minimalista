// This file is lazy-loaded — @react-pdf/renderer is only bundled in this chunk
import React, { useEffect, useRef } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVDocument } from "./CVDocument";

interface AutoDownloadProps {
  blob: Blob | null;
  loading: boolean;
  fileName: string;
  label: string;
}

const AutoDownload: React.FC<AutoDownloadProps> = ({
  blob,
  loading,
  fileName,
  label,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const downloaded = useRef(false);

  useEffect(() => {
    if (blob && !loading && !downloaded.current && linkRef.current) {
      downloaded.current = true;
      const url = URL.createObjectURL(blob);
      linkRef.current.href = url;
      linkRef.current.click();
      // Revoke after a short delay to allow the browser to start the download
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    }
  }, [blob, loading]);

  return (
    <>
      <a ref={linkRef} download={fileName} style={{ display: "none" }} />
      <button
        disabled={loading}
        className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-semibold border border-zinc-700 rounded-md text-zinc-400 hover:text-white hover:border-zinc-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-wait bg-[#0a0a0a]/80 backdrop-blur-sm"
      >
        <Download className="w-3.5 h-3.5 mr-1.5" />
        {loading ? "…" : label}
      </button>
    </>
  );
};

const CVPDFLink: React.FC = () => {
  const { t } = useLanguage();
  const fileName = `CV_Ioritz_Tubio_${t.lang.toUpperCase()}.pdf`;

  return (
    <BlobProvider document={<CVDocument t={t} />}>
      {({ blob, loading }) => (
        <AutoDownload
          blob={blob}
          loading={loading}
          fileName={fileName}
          label={t.ui.downloadCV}
        />
      )}
    </BlobProvider>
  );
};

export default CVPDFLink;
