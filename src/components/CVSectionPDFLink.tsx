// Lazy-loaded: @react-pdf/renderer is only downloaded when someone asks for the PDF.
import React, { useEffect, useRef } from "react";
import { BlobProvider } from "@react-pdf/renderer";
import { useLanguage } from "../context/LanguageContext";
import { CVDocument } from "./CVDocument";

const Trigger: React.FC<{ blob: Blob | null; loading: boolean; fileName: string; onDone: () => void }> = ({
  blob, loading, fileName, onDone,
}) => {
  const done = useRef(false);
  useEffect(() => {
    if (!blob || loading || done.current) return;
    done.current = true;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
    onDone();
  }, [blob, loading, fileName, onDone]);
  return null;
};

/** Builds the PDF and downloads it once ready; renders nothing. */
const CVSectionPDFLink: React.FC<{ fileName: string; onDone: () => void }> = ({ fileName, onDone }) => {
  const { t } = useLanguage();
  return (
    <BlobProvider document={<CVDocument t={t} />}>
      {({ blob, loading }) => <Trigger blob={blob} loading={loading} fileName={fileName} onDone={onDone} />}
    </BlobProvider>
  );
};

export default CVSectionPDFLink;
