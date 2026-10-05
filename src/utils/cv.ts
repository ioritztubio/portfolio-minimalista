import { Lang } from "../i18n/types";

/** The CV exists in English and Spanish; Basque readers get the Spanish one. */
export const cvLang = (lang: Lang): "en" | "es" => (lang === "es" || lang === "eu" ? "es" : "en");
