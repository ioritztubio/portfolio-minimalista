import { Lang } from "./types";

// Strings for the consent banner, contact form, footer and legal pages.
// EN, ES and EU are reachable from the language switch; FR falls back to EN.
// Legal pages exist in EN and ES only; EU readers get the Spanish version.
const en = {
  skipToContent: "Skip to content",
  backHome: "Back to portfolio",
  lastUpdated: "Last updated",
  footer: {
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    refunds: "Refunds",
    privacySettings: "Privacy settings",
  },
  consent: {
    title: "Your privacy",
    body: "This site uses no cookies. With your permission, I measure anonymous visits to see which sections are useful. No personal data, no tracking across sites.",
    accept: "Allow statistics",
    reject: "Decline",
    learnMore: "Cookie policy",
  },
  contact: {
    title: "Contact",
    subtitle: "Questions about my work or a project? Send a message and I'll reply by email.",
    name: "Name",
    email: "Email",
    message: "Message",
    required: "required",
    consentPre: "I have read the ",
    consentLink: "privacy policy",
    consentPost: " and agree that my data is used to answer this message.",
    submit: "Send message",
    sending: "Sending…",
    success: "Message sent. Thanks, I'll get back to you soon.",
    failure: "The message could not be sent. Please try again or write to me directly by email.",
    mailtoNote: "Your email app will open with the message ready to send.",
    errors: {
      name: "Enter your name.",
      email: "Enter a valid email address, like name@example.com.",
      message: "Write a message of at least 10 characters.",
      consent: "You need to accept the privacy policy to send the message.",
      summary: "Please fix the highlighted fields.",
    },
  },
  a11y: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    enlargePhoto: "Enlarge photo",
    close: "Close",
    portrait: "Portrait of Ioritz Tubio Sanchez",
    screenshot: "Screenshot of",
    openCV: "Open CV preview",
    mainNav: "Main",
    legalNav: "Legal",
  },
};

export type SiteStrings = typeof en;

const es: SiteStrings = {
  skipToContent: "Saltar al contenido",
  backHome: "Volver al portfolio",
  lastUpdated: "Última actualización",
  footer: {
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Aviso legal",
    cookies: "Cookies",
    refunds: "Reembolsos",
    privacySettings: "Ajustes de privacidad",
  },
  consent: {
    title: "Tu privacidad",
    body: "Esta web no usa cookies. Con tu permiso, mido visitas de forma anónima para saber qué secciones son útiles. Sin datos personales y sin seguimiento entre webs.",
    accept: "Permitir estadísticas",
    reject: "Rechazar",
    learnMore: "Política de cookies",
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Preguntas sobre mi trabajo o un proyecto? Envíame un mensaje y te responderé por email.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    required: "obligatorio",
    consentPre: "He leído la ",
    consentLink: "política de privacidad",
    consentPost: " y acepto que mis datos se usen para responder a este mensaje.",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    success: "Mensaje enviado. Gracias, te responderé pronto.",
    failure: "No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por email.",
    mailtoNote: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
    errors: {
      name: "Escribe tu nombre.",
      email: "Escribe un email válido, como nombre@ejemplo.com.",
      message: "Escribe un mensaje de al menos 10 caracteres.",
      consent: "Debes aceptar la política de privacidad para enviar el mensaje.",
      summary: "Revisa los campos marcados.",
    },
  },
  a11y: {
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    enlargePhoto: "Ampliar foto",
    close: "Cerrar",
    portrait: "Retrato de Ioritz Tubio Sanchez",
    screenshot: "Captura de",
    openCV: "Abrir vista previa del CV",
    mainNav: "Principal",
    legalNav: "Legal",
  },
};

const eu: SiteStrings = {
  skipToContent: "Edukira joan",
  backHome: "Portfoliora itzuli",
  lastUpdated: "Azken eguneratzea",
  footer: {
    legal: "Legala",
    privacy: "Pribatutasuna",
    terms: "Lege-oharra",
    cookies: "Cookieak",
    refunds: "Itzulketak",
    privacySettings: "Pribatutasun ezarpenak",
  },
  consent: {
    title: "Zure pribatutasuna",
    body: "Webgune honek ez du cookierik erabiltzen. Zure baimenarekin, bisitak modu anonimoan neurtzen ditut atal erabilgarrienak ezagutzeko. Datu pertsonalik gabe eta webguneen arteko jarraipenik gabe.",
    accept: "Estatistikak baimendu",
    reject: "Ukatu",
    learnMore: "Cookie politika",
  },
  contact: {
    title: "Harremana",
    subtitle: "Nire lanari edo proiektu bati buruzko galderak? Bidali mezu bat eta emailez erantzungo dizut.",
    name: "Izena",
    email: "Emaila",
    message: "Mezua",
    required: "derrigorrezkoa",
    consentPre: "",
    consentLink: "Pribatutasun politika",
    consentPost: " irakurri dut eta onartzen dut nire datuak mezu honi erantzuteko erabiltzea.",
    submit: "Mezua bidali",
    sending: "Bidaltzen…",
    success: "Mezua bidali da. Eskerrik asko, laster erantzungo dizut.",
    failure: "Ezin izan da mezua bidali. Saiatu berriro edo idatzi zuzenean emailez.",
    mailtoNote: "Zure posta aplikazioa irekiko da mezua bidaltzeko prest.",
    errors: {
      name: "Idatzi zure izena.",
      email: "Idatzi baliozko email bat, adibidez izena@adibidea.com.",
      message: "Idatzi gutxienez 10 karaktereko mezu bat.",
      consent: "Pribatutasun politika onartu behar duzu mezua bidaltzeko.",
      summary: "Berrikusi markatutako eremuak.",
    },
  },
  a11y: {
    openMenu: "Menua ireki",
    closeMenu: "Menua itxi",
    language: "Hizkuntza",
    enlargePhoto: "Argazkia handitu",
    close: "Itxi",
    portrait: "Ioritz Tubio Sanchezen erretratua",
    screenshot: "Pantaila-argazkia:",
    openCV: "CVaren aurrebista ireki",
    mainNav: "Nagusia",
    legalNav: "Legala",
  },
};

const SITE: Partial<Record<Lang, SiteStrings>> = { en, es, eu };

export const siteStrings = (lang: Lang): SiteStrings => SITE[lang] ?? en;
export const legalLang = (lang: Lang): "en" | "es" => (lang === "es" || lang === "eu" ? "es" : "en");
