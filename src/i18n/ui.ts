import { Lang } from "./types";

// Copy introduced with the glass redesign: hero statement, fact strip, closing and controls.
const en = {
  statement: "I build complete web applications and I'm specialising in artificial intelligence.",
  factNow: "Now",
  factStudying: "Studying",
  factBased: "Based in",
  viewCV: "View CV",
  downloadPDF: "Download PDF",
  preparingPDF: "Preparing PDF…",
  enableMotion: "Tilt to explore",
  aboutTitle: "About",
  projectCount: (i: number, n: number) => `${i} of ${n}`,
  closingTitle: "Let's talk.",
  closingBody: "Here you'll find my CV, my LinkedIn profile and my email.",
  cvCaption: "Curriculum Vitae · PDF",
  navContact: "Contact",
  navWork: "Work",
  themeToDark: "Switch to dark theme",
  themeToLight: "Switch to light theme",
};

export type UIStrings = typeof en;

const es: UIStrings = {
  statement: "Desarrollo aplicaciones web completas y me estoy especializando en inteligencia artificial.",
  factNow: "Ahora",
  factStudying: "Estudiando",
  factBased: "Desde",
  viewCV: "Ver CV",
  downloadPDF: "Descargar PDF",
  preparingPDF: "Preparando PDF…",
  enableMotion: "Inclina para explorar",
  aboutTitle: "Sobre mí",
  projectCount: (i, n) => `${i} de ${n}`,
  closingTitle: "Hablemos.",
  closingBody: "Aquí tienes mi CV, mi perfil de LinkedIn y mi correo electrónico.",
  cvCaption: "Curriculum Vitae · PDF",
  navContact: "Contacto",
  navWork: "Proyectos",
  themeToDark: "Cambiar a tema oscuro",
  themeToLight: "Cambiar a tema claro",
};

const eu: UIStrings = {
  statement: "Web aplikazio osoak garatzen ditut eta adimen artifizialean espezializatzen ari naiz.",
  factNow: "Orain",
  factStudying: "Ikasten",
  factBased: "Non",
  viewCV: "CVa ikusi",
  downloadPDF: "PDFa deskargatu",
  preparingPDF: "PDFa prestatzen…",
  enableMotion: "Okertu esploratzeko",
  aboutTitle: "Niri buruz",
  projectCount: (i, n) => `${i} / ${n}`,
  closingTitle: "Hitz egin dezagun.",
  closingBody: "Hemen dituzu nire CVa, LinkedIn profila eta helbide elektronikoa.",
  cvCaption: "Curriculum Vitae · PDF",
  navContact: "Harremana",
  navWork: "Proiektuak",
  themeToDark: "Gai ilunera aldatu",
  themeToLight: "Gai argira aldatu",
};

const UI: Partial<Record<Lang, UIStrings>> = { en, es, eu };

export const uiStrings = (lang: Lang): UIStrings => UI[lang] ?? en;
