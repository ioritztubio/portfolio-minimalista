import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-10 text-center text-zinc-600 text-sm">
      <p>
        © {new Date().getFullYear()} Ioritz Tubío Sánchez ·{" "}
        {t.ui.footerBuiltWith}
      </p>
    </footer>
  );
};
