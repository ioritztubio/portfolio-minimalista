import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-10 text-center text-sm" style={{ color: "var(--ink-3)" }}>
      <p>
        © {new Date().getFullYear()} Ioritz Tubío Sánchez ·{" "}
        {t.ui.footerBuiltWith}
      </p>
      <p className="mt-1 text-xs font-mono" style={{ color: "var(--border)" }}>v1.0</p>
    </footer>
  );
};
