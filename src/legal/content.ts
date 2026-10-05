// Legal texts for the site. A block is a paragraph (string) or a bullet list (string[]).
// Links use a minimal markdown syntax: [label](url).
// Keep OWNER details and LAST_UPDATED in sync with reality whenever something changes
// (new form provider, new analytics, a hosting move...).

export type LegalPage = "privacy" | "terms" | "cookies" | "refunds";
type Block = string | string[];

export interface LegalDoc {
  title: string;
  intro: string;
  sections: { heading: string; blocks: Block[] }[];
}

export const OWNER = {
  name: "Ioritz Tubio Sánchez",
  email: "ioritztubio1@gmail.com",
  location: "Donostia-San Sebastián (Gipuzkoa), Spain",
  locationEs: "Donostia-San Sebastián (Gipuzkoa), España",
};

export const LAST_UPDATED = { en: "5 October 2026", es: "5 de octubre de 2026" };

const mail = `[${OWNER.email}](mailto:${OWNER.email})`;

const en: Record<LegalPage, LegalDoc> = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This page explains what personal data this website handles, why, and what control you have over it. It follows the EU General Data Protection Regulation (GDPR) and Spain's Organic Law 3/2018 (LOPDGDD).",
    sections: [
      {
        heading: "Who is responsible",
        blocks: [
          `The data controller is ${OWNER.name}, based in ${OWNER.location}. You can reach me at any time at ${mail}.`,
        ],
      },
      {
        heading: "What data is collected and why",
        blocks: [
          "This is a personal portfolio. It does not have user accounts, does not sell anything and does not show advertising. Personal data is only handled in these cases:",
          [
            "**Contact form.** Your name, email address and message, so I can read and answer it. Legal basis: your consent, given with the checkbox on the form (GDPR art. 6.1.a).",
            "**Visit statistics.** Only if you accept them in the consent banner. They are anonymous and aggregated (pages viewed, referrer, country, device type) and do not use cookies. Legal basis: your consent (GDPR art. 6.1.a).",
            "**Technical server logs.** The hosting provider automatically records IP address, date and browser type for security and to keep the site running. Legal basis: legitimate interest in protecting the website (GDPR art. 6.1.f).",
          ],
          "The CV download is generated inside your own browser. Nothing is sent to a server when you download it.",
        ],
      },
      {
        heading: "How long data is kept",
        blocks: [
          [
            "Contact messages: for as long as needed to answer you, and deleted within 12 months unless we start a professional relationship.",
            "Visit statistics: kept only in aggregated form, which does not identify anyone.",
            "Server logs: according to the hosting provider's retention policy, normally a few weeks.",
          ],
        ],
      },
      {
        heading: "Who else receives the data",
        blocks: [
          "Data is never sold or shared for marketing. Only these service providers process it on my behalf, under data processing agreements:",
          [
            "**Web3Forms**, which delivers contact form messages to my inbox.",
            "**Google (Gmail)**, the email provider where messages are received.",
            "**Umami**, the cookieless analytics service, only if you consent.",
            "**The hosting provider** that serves this website.",
          ],
          "Some of these providers may process data outside the European Economic Area. In that case the transfer is covered by an adequacy decision (such as the EU-US Data Privacy Framework) or by the European Commission's Standard Contractual Clauses.",
        ],
      },
      {
        heading: "Your rights",
        blocks: [
          `You can ask to access, correct or delete your data, to restrict or object to its processing, and to receive it in a portable format. You can withdraw consent at any time, without affecting processing done before. Write to ${mail} and I will reply within one month.`,
          "If you think your data has been mishandled, you can file a complaint with the Spanish Data Protection Agency: [aepd.es](https://www.aepd.es).",
        ],
      },
      {
        heading: "Minors",
        blocks: [
          "The contact form is not intended for people under 14. If you are under 14, please do not send personal data through it.",
        ],
      },
      {
        heading: "External links",
        blocks: [
          "Links to GitHub, LinkedIn or project demos take you to sites with their own privacy policies, which I do not control.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms and Conditions",
    intro:
      "These terms govern the use of this website. They also contain the legal notice required by Spanish Law 34/2002 on Information Society Services (LSSI-CE).",
    sections: [
      {
        heading: "Legal notice",
        blocks: [
          [
            `**Owner:** ${OWNER.name}`,
            `**Location:** ${OWNER.location}`,
            `**Email:** ${mail}`,
            "**Purpose:** personal professional portfolio. The site is informational and does not carry out any commercial transactions.",
          ],
        ],
      },
      {
        heading: "Use of the website",
        blocks: [
          "You can browse the site freely. By using it you agree to do so lawfully and not to attempt to damage it, overload it or access parts of it that are not public.",
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          `The texts, design, photographs and code of this website belong to ${OWNER.name} unless stated otherwise. You may share links to it and quote short fragments with attribution. Any other reproduction requires written permission.`,
          "Names, logos and screenshots of the projects shown belong to their respective owners and appear only to describe my work on them.",
        ],
      },
      {
        heading: "Liability",
        blocks: [
          "I keep the content as accurate and up to date as I can, but it is provided as it is, without guarantees. I am not responsible for the content of external websites linked from here, nor for temporary interruptions of the service.",
        ],
      },
      {
        heading: "Changes",
        blocks: [
          "These terms may be updated. The date at the top of each policy shows the latest version.",
        ],
      },
      {
        heading: "Applicable law",
        blocks: [
          "These terms are governed by Spanish law. If you are a consumer, the courts of your place of residence are competent. In any other case, the parties submit to the courts of Donostia-San Sebastián.",
        ],
      },
    ],
  },

  cookies: {
    title: "Cookie Policy",
    intro:
      "Short version: this website does not use cookies. This page explains the small amount of browser storage it does use, and how to change your choice.",
    sections: [
      {
        heading: "Cookies",
        blocks: [
          "No cookies are set by this website: no advertising cookies, no tracking cookies, no social media cookies.",
        ],
      },
      {
        heading: "Browser storage that is used",
        blocks: [
          [
            "**consent.v1** (localStorage). Stores your choice in the consent banner so it is not shown on every visit. It is strictly necessary, contains no personal data and stays until you change your choice or clear your browser data.",
          ],
        ],
      },
      {
        heading: "Visit statistics",
        blocks: [
          "If you accept them, visits are measured with Umami, a privacy-friendly analytics tool. It does not set cookies or store anything in your browser, does not keep IP addresses and does not follow you across other websites. If your browser sends a Do Not Track or Global Privacy Control signal, statistics are never loaded, even if you accept.",
        ],
      },
      {
        heading: "Changing your choice",
        blocks: [
          "You can reopen the consent banner at any time with the \"Privacy settings\" link at the bottom of every page. You can also clear this site's data from your browser settings.",
        ],
      },
      {
        heading: "Third-party sites",
        blocks: [
          "External sites linked from here (GitHub, LinkedIn, project demos) may use their own cookies under their own policies.",
        ],
      },
    ],
  },

  refunds: {
    title: "Refund Policy",
    intro: "This website does not sell products or services, and no payments are made through it.",
    sections: [
      {
        heading: "No online sales",
        blocks: [
          "Because nothing is sold or charged through this website, there are no purchases to refund.",
        ],
      },
      {
        heading: "Professional services",
        blocks: [
          "If we agree on paid work (for example freelance development or consulting), the price, payment schedule, cancellation and refund conditions will be set out in a written agreement before the work starts. That agreement prevails over this page.",
          "If you are a consumer in the European Union and the contract is made at a distance, you have the right to withdraw within 14 days without giving a reason, as provided in Spain's consumer protection law (Royal Legislative Decree 1/2007). This right does not apply once the service has been fully performed with your prior express consent.",
        ],
      },
      {
        heading: "Contact",
        blocks: [`For any question about payments or refunds, write to ${mail}.`],
      },
    ],
  },
};

const es: Record<LegalPage, LegalDoc> = {
  privacy: {
    title: "Política de privacidad",
    intro:
      "Esta página explica qué datos personales trata esta web, para qué y qué control tienes sobre ellos. Cumple el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
    sections: [
      {
        heading: "Responsable del tratamiento",
        blocks: [
          `El responsable es ${OWNER.name}, con domicilio en ${OWNER.locationEs}. Puedes contactarme en cualquier momento en ${mail}.`,
        ],
      },
      {
        heading: "Qué datos se tratan y para qué",
        blocks: [
          "Esta web es un portfolio personal. No tiene cuentas de usuario, no vende nada y no muestra publicidad. Solo se tratan datos personales en estos casos:",
          [
            "**Formulario de contacto.** Tu nombre, email y mensaje, para poder leerlo y responderte. Base legal: tu consentimiento, que das con la casilla del formulario (art. 6.1.a RGPD).",
            "**Estadísticas de visitas.** Solo si las aceptas en el aviso de consentimiento. Son anónimas y agregadas (páginas vistas, procedencia, país, tipo de dispositivo) y no usan cookies. Base legal: tu consentimiento (art. 6.1.a RGPD).",
            "**Registros técnicos del servidor.** El proveedor de alojamiento registra automáticamente IP, fecha y tipo de navegador por seguridad y para mantener la web funcionando. Base legal: interés legítimo en proteger la web (art. 6.1.f RGPD).",
          ],
          "La descarga del CV se genera dentro de tu propio navegador. No se envía nada a ningún servidor al descargarlo.",
        ],
      },
      {
        heading: "Cuánto tiempo se conservan",
        blocks: [
          [
            "Mensajes de contacto: el tiempo necesario para responderte, y se eliminan en un máximo de 12 meses salvo que iniciemos una relación profesional.",
            "Estadísticas de visitas: solo se guardan de forma agregada, sin identificar a nadie.",
            "Registros del servidor: según la política del proveedor de alojamiento, normalmente unas semanas.",
          ],
        ],
      },
      {
        heading: "Quién más recibe los datos",
        blocks: [
          "Los datos nunca se venden ni se ceden con fines comerciales. Solo los tratan, por encargo mío y con contrato de encargado del tratamiento, estos proveedores:",
          [
            "**Web3Forms**, que entrega los mensajes del formulario en mi correo.",
            "**Google (Gmail)**, el proveedor de correo donde se reciben.",
            "**Umami**, el servicio de estadísticas sin cookies, solo si das tu consentimiento.",
            "**El proveedor de alojamiento** que sirve esta web.",
          ],
          "Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En ese caso la transferencia está amparada por una decisión de adecuación (como el Marco de Privacidad de Datos UE-EE. UU.) o por las Cláusulas Contractuales Tipo de la Comisión Europea.",
        ],
      },
      {
        heading: "Tus derechos",
        blocks: [
          `Puedes solicitar el acceso, rectificación o supresión de tus datos, la limitación u oposición a su tratamiento y su portabilidad. Puedes retirar tu consentimiento cuando quieras, sin que afecte al tratamiento previo. Escribe a ${mail} y te responderé en el plazo de un mes.`,
          "Si consideras que tus datos no se han tratado correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos: [aepd.es](https://www.aepd.es).",
        ],
      },
      {
        heading: "Menores de edad",
        blocks: [
          "El formulario de contacto no está dirigido a menores de 14 años. Si tienes menos de 14 años, no envíes datos personales a través de él.",
        ],
      },
      {
        heading: "Enlaces externos",
        blocks: [
          "Los enlaces a GitHub, LinkedIn o a las demos de proyectos llevan a sitios con sus propias políticas de privacidad, que no controlo.",
        ],
      },
    ],
  },

  terms: {
    title: "Aviso legal y condiciones de uso",
    intro:
      "Estas condiciones regulan el uso de esta web e incluyen la información exigida por la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE).",
    sections: [
      {
        heading: "Datos identificativos",
        blocks: [
          [
            `**Titular:** ${OWNER.name}`,
            `**Domicilio:** ${OWNER.locationEs}`,
            `**Email:** ${mail}`,
            "**Finalidad:** portfolio profesional personal. La web es informativa y no realiza transacciones comerciales.",
          ],
        ],
      },
      {
        heading: "Uso de la web",
        blocks: [
          "Puedes navegar libremente. Al usarla te comprometes a hacerlo de forma lícita y a no intentar dañarla, sobrecargarla ni acceder a partes que no son públicas.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        blocks: [
          `Los textos, el diseño, las fotografías y el código de esta web pertenecen a ${OWNER.name} salvo que se indique lo contrario. Puedes compartir enlaces y citar fragmentos breves indicando la fuente. Cualquier otra reproducción requiere permiso por escrito.`,
          "Los nombres, logotipos y capturas de los proyectos mostrados pertenecen a sus respectivos titulares y aparecen solo para describir mi trabajo en ellos.",
        ],
      },
      {
        heading: "Responsabilidad",
        blocks: [
          "Mantengo el contenido tan preciso y actualizado como puedo, pero se ofrece tal cual, sin garantías. No me hago responsable del contenido de webs externas enlazadas ni de interrupciones temporales del servicio.",
        ],
      },
      {
        heading: "Cambios",
        blocks: ["Estas condiciones pueden actualizarse. La fecha al inicio de cada política indica la versión vigente."],
      },
      {
        heading: "Legislación aplicable",
        blocks: [
          "Estas condiciones se rigen por la legislación española. Si eres consumidor, serán competentes los juzgados de tu domicilio. En cualquier otro caso, las partes se someten a los juzgados de Donostia-San Sebastián.",
        ],
      },
    ],
  },

  cookies: {
    title: "Política de cookies",
    intro:
      "Resumen: esta web no usa cookies. Aquí se explica el pequeño almacenamiento del navegador que sí utiliza y cómo cambiar tu elección.",
    sections: [
      {
        heading: "Cookies",
        blocks: ["Esta web no instala ninguna cookie: ni publicitarias, ni de seguimiento, ni de redes sociales."],
      },
      {
        heading: "Almacenamiento del navegador que se usa",
        blocks: [
          [
            "**consent.v1** (localStorage). Guarda tu elección en el aviso de consentimiento para no mostrarlo en cada visita. Es estrictamente necesario, no contiene datos personales y se mantiene hasta que cambies tu elección o borres los datos del navegador.",
          ],
        ],
      },
      {
        heading: "Estadísticas de visitas",
        blocks: [
          "Si las aceptas, las visitas se miden con Umami, una herramienta de analítica respetuosa con la privacidad. No instala cookies ni guarda nada en tu navegador, no conserva direcciones IP y no te sigue por otras webs. Si tu navegador envía la señal Do Not Track o Global Privacy Control, las estadísticas nunca se cargan, aunque las aceptes.",
        ],
      },
      {
        heading: "Cambiar tu elección",
        blocks: [
          "Puedes volver a abrir el aviso en cualquier momento con el enlace \"Ajustes de privacidad\" al pie de cada página. También puedes borrar los datos de esta web desde la configuración de tu navegador.",
        ],
      },
      {
        heading: "Sitios de terceros",
        blocks: [
          "Las webs externas enlazadas (GitHub, LinkedIn, demos de proyectos) pueden usar sus propias cookies según sus propias políticas.",
        ],
      },
    ],
  },

  refunds: {
    title: "Política de reembolsos",
    intro: "Esta web no vende productos ni servicios, y no se realiza ningún pago a través de ella.",
    sections: [
      {
        heading: "Sin ventas online",
        blocks: ["Como no se vende ni se cobra nada a través de esta web, no hay compras que reembolsar."],
      },
      {
        heading: "Servicios profesionales",
        blocks: [
          "Si acordamos un trabajo remunerado (por ejemplo, desarrollo freelance o consultoría), el precio, los plazos de pago y las condiciones de cancelación y reembolso se fijarán en un acuerdo escrito antes de empezar. Ese acuerdo prevalece sobre esta página.",
          "Si eres consumidor en la Unión Europea y el contrato se celebra a distancia, tienes derecho a desistir en un plazo de 14 días sin dar explicaciones, según el Real Decreto Legislativo 1/2007. Este derecho no se aplica cuando el servicio se ha prestado por completo con tu consentimiento expreso previo.",
        ],
      },
      {
        heading: "Contacto",
        blocks: [`Para cualquier duda sobre pagos o reembolsos, escribe a ${mail}.`],
      },
    ],
  },
};

export const LEGAL = { en, es };
