import { Lang } from "./types";

// Copy introduced with the glass redesign: hero statement, fact strip, closing and controls.
const en = {
  statement: "I build web apps end to end, and I'm moving into AI.",
  factNow: "Now",
  factStudying: "Studying",
  factBased: "Based in",
  viewCV: "View CV",
  downloadPDF: "Download PDF",
  preparingPDF: "Preparing PDF…",
  enableMotion: "Tilt to explore",
  aboutTitle: "About",
  projectCount: (i: number, n: number) => `${i} of ${n}`,
  closingTitle: "Let's build something.",
  closingBody: "My CV, LinkedIn and email are all here. Pick whichever suits you.",
  cvCaption: "Curriculum Vitae · PDF",
  navContact: "Contact",
  navWork: "Work",
  themeToDark: "Switch to dark theme",
  themeToLight: "Switch to light theme",
};

export type UIStrings = typeof en;

const es: UIStrings = {
  statement: "Construyo aplicaciones web de principio a fin, y estoy dando el salto a la IA.",
  factNow: "Ahora",
  factStudying: "Estudiando",
  factBased: "Desde",
  viewCV: "Ver CV",
  downloadPDF: "Descargar PDF",
  preparingPDF: "Preparando PDF…",
  enableMotion: "Inclina para explorar",
  aboutTitle: "Sobre mí",
  projectCount: (i, n) => `${i} de ${n}`,
  closingTitle: "Construyamos algo.",
  closingBody: "Mi CV, LinkedIn y email, todo aquí. Elige lo que te venga mejor.",
  cvCaption: "Curriculum Vitae · PDF",
  navContact: "Contacto",
  navWork: "Proyectos",
  themeToDark: "Cambiar a tema oscuro",
  themeToLight: "Cambiar a tema claro",
};

const eu: UIStrings = {
  statement: "Web aplikazioak hasieratik bukaerara eraikitzen ditut, eta adimen artifizialera noa.",
  factNow: "Orain",
  factStudying: "Ikasten",
  factBased: "Non",
  viewCV: "CVa ikusi",
  downloadPDF: "PDFa deskargatu",
  preparingPDF: "PDFa prestatzen…",
  enableMotion: "Okertu esploratzeko",
  aboutTitle: "Niri buruz",
  projectCount: (i, n) => `${i} / ${n}`,
  closingTitle: "Eraiki dezagun zerbait.",
  closingBody: "Nire CVa, LinkedIn eta emaila, denak hemen. Aukeratu nahiago duzuna.",
  cvCaption: "Curriculum Vitae · PDF",
  navContact: "Harremana",
  navWork: "Proiektuak",
  themeToDark: "Gai ilunera aldatu",
  themeToLight: "Gai argira aldatu",
};

const UI: Partial<Record<Lang, UIStrings>> = { en, es, eu };

export const uiStrings = (lang: Lang): UIStrings => UI[lang] ?? en;
