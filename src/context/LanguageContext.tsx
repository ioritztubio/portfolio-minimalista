import React, { createContext, useContext, useState } from "react";
import { en, es, eu, fr } from "../i18n";
import { Translation, Lang } from "../i18n/types";

const LANGUAGES: Record<Lang, Translation> = { en, es, eu, fr };
const CYCLE: Lang[] = ["es"]; // TODO: restore ["en", "es", "eu", "fr"] when translations are reviewed

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = () =>
    setLang((prev) => CYCLE[(CYCLE.indexOf(prev) + 1) % CYCLE.length]);

  const t = LANGUAGES[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
