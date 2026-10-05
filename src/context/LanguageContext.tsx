import React, { createContext, useContext, useEffect, useState } from "react";
import { en, es, eu, fr } from "../i18n";
import { Translation, Lang } from "../i18n/types";

const LANGUAGES: Record<Lang, Translation> = { en, es, eu, fr };
export const SELECTABLE_LANGS: Lang[] = ["en", "es", "eu"];
const STORAGE_KEY = "lang";

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && SELECTABLE_LANGS.includes(stored)) return stored;
  } catch {
    /* storage blocked */
  }
  const nav = navigator.language.slice(0, 2) as Lang;
  return SELECTABLE_LANGS.includes(nav) ? nav : "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage blocked */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t: LANGUAGES[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
