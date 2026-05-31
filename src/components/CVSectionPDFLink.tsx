// Lazy-loaded — @react-pdf/renderer only downloaded on demand
import React, { useEffect, useRef } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVDocument } from "./CVDocument";

const SectionDownload: React.FC<{ blob: Blob | null; loading: boolean; fileName: string }> = ({
  blob, loading, fileName,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const downloaded = useRef(false);

  useEffect(() => {
    if (blob && !loading && !downloaded.current && linkRef.current) {
      downloaded.current = true;
      const url = URL.createObjectURL(blob);
      linkRef.current.href = url;
      linkRef.current.click();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    }
  }, [blob, loading]);

  return (
    <>
      <a ref={linkRef} download={fileName} style={{ display: "none" }} />
      <button
        disabled={loading}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono font-semibold transition-all duration-200 disabled:opacity-60"
        style={{
          backgroundColor: "var(--accent)",
          color: "var(--bg)",
          fontSize: "12px",
          letterSpacing: "0.03em",
        }}
      >
        <Download className="w-3.5 h-3.5" />
        {loading ? "Generating…" : "Download CV"}
      </button>
    </>
  );
};

const CVSectionPDFLink: React.FC = () => {
  const { t } = useLanguage();
  const today = new Date();
  const dateStr = today.toISOString().split("T")[0];
  const fileName = `Curriculum_EN_${dateStr}.pdf`;

  return (
    <BlobProvider document={<CVDocument t={t} />}>
      {({ blob, loading }) => (
        <SectionDownload blob={blob} loading={loading} fileName={fileName} />
      )}
    </BlobProvider>
  );
};

export default CVSectionPDFLink;
