import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { Translation } from "../i18n/types";

// ─── Professional Palette ───────────────────────────────────────────────────
const C = {
  black: "#1a1a1a",
  dark: "#2d2d2d",
  body: "#333333",
  muted: "#555555",
  subtle: "#888888",
  border: "#cccccc",
  borderLight: "#e5e5e5",
  white: "#ffffff",
  accent: "#1a1a1a",
};

const FONT_SANS = "Helvetica";
const FONT_BOLD = "Helvetica-Bold";

// ─── Styles ──────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 50,
    fontFamily: FONT_SANS,
    fontSize: 9,
    color: C.body,
    lineHeight: 1.5,
  },

  // Header
  header: {
    marginBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: C.black,
    paddingBottom: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: FONT_BOLD,
    color: C.black,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 10,
    color: C.muted,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
    alignItems: "center",
  },
  contactItem: { fontSize: 8, color: C.muted },
  contactLink: { fontSize: 8, color: C.muted, textDecoration: "none" },
  contactSep: { fontSize: 8, color: C.border },

  // Section
  section: { marginTop: 14, marginBottom: 2 },
  sectionSpaced: { marginTop: 18, marginBottom: 24 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 9,
    fontFamily: FONT_BOLD,
    color: C.black,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  sectionRule: {
    flex: 1,
    borderBottomWidth: 0.75,
    borderBottomColor: C.border,
    marginLeft: 8,
    marginBottom: 2,
  },

  // Summary / About
  aboutText: {
    fontSize: 8.5,
    color: C.body,
    lineHeight: 1.6,
    marginBottom: 3,
    textAlign: "justify",
  },

  // Timeline entry — two-column layout
  entryRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  entryDateCol: {
    width: 100,
    paddingRight: 10,
    paddingTop: 1,
  },
  entryDate: {
    fontSize: 7.5,
    color: C.subtle,
    textAlign: "right",
    lineHeight: 1.4,
  },
  entryBodyCol: {
    flex: 1,
    borderLeftWidth: 0.75,
    borderLeftColor: C.borderLight,
    paddingLeft: 12,
  },
  entryTitle: {
    fontSize: 9.5,
    fontFamily: FONT_BOLD,
    color: C.black,
    marginBottom: 1,
  },
  entryOrg: {
    fontSize: 8.5,
    color: C.muted,
    marginBottom: 3,
  },
  entryDesc: {
    fontSize: 8,
    color: C.body,
    lineHeight: 1.55,
    textAlign: "justify",
  },

  // Languages
  langRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  langName: {
    fontSize: 9,
    fontFamily: FONT_BOLD,
    color: C.black,
    width: 120,
  },
  langLevel: {
    fontSize: 8.5,
    color: C.muted,
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 20,
    left: 50,
    right: 50,
    borderTopWidth: 0.5,
    borderTopColor: C.borderLight,
    paddingTop: 6,
  },
  footerText: { fontSize: 7, color: C.subtle, textAlign: "center" },
});

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getAge(): number {
  const birth = new Date(2003, 10, 7);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

const MONTH_NUM: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
  enero: 1,
  febrero: 2,
  marzo: 3,
  abril: 4,
  mayo: 5,
  junio: 6,
  julio: 7,
  agosto: 8,
  septiembre: 9,
  octubre: 10,
  noviembre: 11,
  diciembre: 12,
  urtarrilak: 1,
  otsailak: 2,
  martxoak: 3,
  apirilak: 4,
  maiatza: 5,
  ekaina: 6,
  uztaila: 7,
  abuztua: 8,
  iraila: 9,
  urria: 10,
  azaroa: 11,
  abendua: 12,
  janvier: 1,
  février: 2,
  mars: 3,
  avril: 4,
  mai: 5,
  juin: 6,
  juillet: 7,
  août: 8,
  septembre: 9,
  octobre: 10,
  novembre: 11,
  décembre: 12,
};

function parseDateEnd(str: string): number {
  if (/present|actualidad|gaur egun|actuellement/i.test(str)) return 999999;
  const yearMatch = str.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 0;
  const month = str
    .toLowerCase()
    .split(/\s+/)
    .reduce<number>((acc, w) => acc || (MONTH_NUM[w] ?? 0), 0);
  return year * 100 + month;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
const SectionTitle = ({ label }: { label: string }) => (
  <View style={s.sectionHeader}>
    <Text style={s.sectionLabel}>{label}</Text>
    <View style={s.sectionRule} />
  </View>
);

interface EntryProps {
  title: string;
  org: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}

const Entry: React.FC<EntryProps> = ({
  title,
  org,
  dateStart,
  dateEnd,
  description,
}) => {
  const isSingle = dateStart === dateEnd;
  const dateStr = isSingle ? dateStart : `${dateStart} — ${dateEnd}`;
  return (
    <View style={s.entryRow} wrap={false}>
      <View style={s.entryDateCol}>
        <Text style={s.entryDate}>{dateStr}</Text>
      </View>
      <View style={s.entryBodyCol}>
        <Text style={s.entryTitle}>{title}</Text>
        <Text style={s.entryOrg}>{org}</Text>
        <Text style={s.entryDesc}>{description}</Text>
      </View>
    </View>
  );
};

const ContactSep = () => <Text style={s.contactSep}>|</Text>;

// ─── Label dictionaries ──────────────────────────────────────────────────────
const labels = {
  summary: {
    en: "Professional Summary",
    es: "Perfil Profesional",
    eu: "Profil Profesionala",
    fr: "Profil Professionnel",
  },
  work: {
    en: "Professional Experience",
    es: "Experiencia Profesional",
    eu: "Esperientzia Profesionala",
    fr: "Expérience Professionnelle",
  },
  education: {
    en: "Education",
    es: "Formación Académica",
    eu: "Hezkuntza",
    fr: "Formation",
  },
  extra: {
    en: "Additional Experience",
    es: "Experiencia Complementaria",
    eu: "Esperientzia Osagarria",
    fr: "Expérience Complémentaire",
  },
  languages: {
    en: "Languages",
    es: "Idiomas",
    eu: "Hizkuntzak",
    fr: "Langues",
  },
} as const;

// ─── CV-specific professional summary (separate from portfolio) ─────────────
const cvAbout: Record<string, string[]> = {
  es: [
    "Ingeniero Informático por la Universidad del País Vasco (UPV/EHU), con {age} años y experiencia profesional en el desarrollo de aplicaciones fullstack en entornos de producción. Actualmente desempeño funciones de Ingeniero de Software en el Departamento de Inteligencia Artificial de PKF Attest, donde participo en el diseño, desarrollo y mantenimiento de sistemas escalables orientados a clientes reales.",
    "Dominio de tecnologías como Next.js, TypeScript, React, Django y Python, así como en el diseño y administración de bases de datos relacionales (PostgreSQL, MySQL). Experiencia en la implementación de pipelines CI/CD con Jenkins, control de versiones con Git, y aplicación de principios de arquitectura limpia y desarrollo ágil (Scrum).",
    "Perfil orientado a resultados, con capacidad demostrada para trabajar de manera autónoma y en equipos multidisciplinares. Sólida base en algoritmia, estructuras de datos y buenas prácticas de ingeniería de software. Alta capacidad de aprendizaje, adaptación a nuevos entornos tecnológicos y compromiso con la mejora continua.",
  ],
  en: [
    "Computer Engineer from the University of the Basque Country (UPV/EHU), {age} years old, with professional experience in fullstack application development in production environments. Currently working as a Software Engineer in the Artificial Intelligence Department at PKF Attest, where I participate in the design, development, and maintenance of scalable systems serving real clients.",
    "Proficient in technologies such as Next.js, TypeScript, React, Django, and Python, as well as in the design and administration of relational databases (PostgreSQL, MySQL). Experienced in implementing CI/CD pipelines with Jenkins, version control with Git, and applying clean architecture principles and agile development methodologies (Scrum).",
    "Results-oriented professional with a proven ability to work both independently and within cross-functional teams. Strong foundation in algorithms, data structures, and software engineering best practices. Highly adaptable, committed to continuous learning, and capable of rapidly integrating into new technological environments.",
  ],
  eu: [
    "Informatika Ingeniaria Euskal Herriko Unibertsitatean (UPV/EHU), {age} urte, eta produkzio-inguruneetan fullstack aplikazioak garatzen esperientzia profesionala duena. Gaur egun Software Ingeniaria naiz PKF Attesteko Adimen Artifizialaren Sailean, non bezero errealei zuzendutako sistema eskalagarrien diseinuan, garapenean eta mantentze-lanetan parte hartzen dudan.",
    "Next.js, TypeScript, React, Django eta Python bezalako teknologietan trebea, baita datu-base erlazionalen (PostgreSQL, MySQL). CI/CD pipeline-ak Jenkins-ekin inplementatzeko, Git-ekin bertsio-kontrola egiteko eta arkitektura garbiaren printzipioek eta garapen arineko metodologiak (Scrum) aplikatzeko esperientzia.",
    "Emaitzetan oinarritutako profila, modu autonomoan eta talde anitzetan lan egiteko gaitasun egiaztatuarekin. Oinarri sendoa algoritmian, datu-egituretan eta software ingeniaritzako praktika onetan. Ikaskuntza-gaitasun handia, ingurune teknologiko berrietara egokitzeko ahalmena eta etengabeko hobekuntzarekiko konpromisoa.",
  ],
  fr: [
    "Ingénieur Informaticien diplômé de l'Université du Pays Basque (UPV/EHU), {age} ans, avec une expérience professionnelle dans le développement d'applications fullstack en environnement de production. Actuellement Ingénieur Logiciel au sein du Département Intelligence Artificielle de PKF Attest, où je participe à la conception, au développement et à la maintenance de systèmes évolutifs destinés à de vrais clients.",
    "Maîtrise de technologies telles que Next.js, TypeScript, React, Django et Python, ainsi que la conception et l'administration de bases de données relationnelles (PostgreSQL, MySQL). Expérience dans la mise en place de pipelines CI/CD avec Jenkins, le contrôle de versions avec Git, et l'application des principes d'architecture propre et de méthodologies agiles (Scrum).",
    "Profil orienté résultats, avec une capacité avérée à travailler de manière autonome et au sein d'équipes pluridisciplinaires. Solide formation en algorithmique, structures de données et bonnes pratiques d'ingénierie logicielle. Grande capacité d'apprentissage, d'adaptation à de nouveaux environnements technologiques et engagement envers l'amélioration continue.",
  ],
};

function label(key: keyof typeof labels, lang: string): string {
  return (
    labels[key][lang as keyof (typeof labels)[typeof key]] ?? labels[key].en
  );
}

// ─── Main Document ────────────────────────────────────────────────────────────
interface CVDocumentProps {
  t: Translation;
}

export const CVDocument: React.FC<CVDocumentProps> = ({ t }) => {
  const age = getAge();

  const sortedTimeline = [...t.timeline.items].sort(
    (a, b) => parseDateEnd(b.dateEnd) - parseDateEnd(a.dateEnd),
  );
  const workItems = sortedTimeline.filter((e) => e.type === "work" && !e.extra);
  const extraItems = sortedTimeline.filter((e) => e.type === "work" && e.extra);
  const eduItems = sortedTimeline.filter((e) => e.type === "education");

  const emailSocial = t.profile.socials.find((sc) => sc.platform === "Email");
  const githubSocial = t.profile.socials.find((sc) => sc.platform === "GitHub");
  const linkedinSocial = t.profile.socials.find(
    (sc) => sc.platform === "LinkedIn",
  );
  const websiteSocial = t.profile.socials.find(
    (sc) => sc.platform === "Website",
  );

  return (
    <Document
      title={`CV — ${t.profile.name}`}
      author={t.profile.name}
      subject={t.profile.subtitle}
      language={t.lang}
    >
      <Page size="A4" style={s.page}>
        {/* ── Header ── */}
        <View style={s.header}>
          <Text style={s.name}>{t.profile.name}</Text>
          <Text style={s.subtitle}>{t.profile.subtitle}</Text>
          <View style={s.contactRow}>
            {emailSocial && (
              <Link src={emailSocial.url} style={s.contactLink}>
                {emailSocial.url.replace("mailto:", "")}
              </Link>
            )}
            {emailSocial && githubSocial && <ContactSep />}
            {githubSocial && (
              <Link src={githubSocial.url} style={s.contactLink}>
                {githubSocial.url.replace("https://", "")}
              </Link>
            )}
            {githubSocial && linkedinSocial && <ContactSep />}
            {linkedinSocial && (
              <Link src={linkedinSocial.url} style={s.contactLink}>
                {linkedinSocial.url.replace("https://", "")}
              </Link>
            )}
            {linkedinSocial && websiteSocial && <ContactSep />}
            {websiteSocial && (
              <Link src={websiteSocial.url} style={s.contactLink}>
                {websiteSocial.url.replace("https://", "")}
              </Link>
            )}
          </View>
        </View>

        {/* ── Professional Summary ── */}
        <View style={s.section}>
          <SectionTitle label={label("summary", t.lang)} />
          {(cvAbout[t.lang] ?? cvAbout.en).map((line, i) => (
            <Text key={i} style={s.aboutText}>
              {line.replace("{age}", String(age))}
            </Text>
          ))}
        </View>

        {/* ── Professional Experience ── */}
        <View style={s.sectionSpaced}>
          <SectionTitle label={label("work", t.lang)} />
          {workItems.map((ev, i) => (
            <Entry
              key={i}
              title={ev.title}
              org={ev.organization}
              dateStart={ev.dateStart}
              dateEnd={ev.dateEnd}
              description={ev.description}
            />
          ))}
        </View>

        {/* ── Education ── */}
        <View style={s.sectionSpaced}>
          <SectionTitle label={label("education", t.lang)} />
          {eduItems.map((ev, i) => (
            <Entry
              key={i}
              title={ev.title}
              org={ev.organization}
              dateStart={ev.dateStart}
              dateEnd={ev.dateEnd}
              description={ev.description}
            />
          ))}
        </View>

        {/* ── Additional Experience ── */}
        {extraItems.length > 0 && (
          <View style={s.sectionSpaced}>
            <SectionTitle label={label("extra", t.lang)} />
            {extraItems.map((ev, i) => (
              <Entry
                key={i}
                title={ev.title}
                org={ev.organization}
                dateStart={ev.dateStart}
                dateEnd={ev.dateEnd}
                description={ev.description}
              />
            ))}
          </View>
        )}

        {/* ── Languages ── */}
        <View style={s.section}>
          <SectionTitle label={label("languages", t.lang)} />
          <View style={s.langRow}>
            <Text style={s.langName}>
              {t.lang === "eu"
                ? "Gaztelania"
                : t.lang === "fr"
                  ? "Espagnol"
                  : t.lang === "en"
                    ? "Spanish"
                    : "Castellano"}
            </Text>
            <Text style={s.langLevel}>
              {t.lang === "eu"
                ? "Ama-hizkuntza"
                : t.lang === "fr"
                  ? "Langue maternelle"
                  : t.lang === "en"
                    ? "Native"
                    : "Nativo"}
            </Text>
          </View>
          <View style={s.langRow}>
            <Text style={s.langName}>
              {t.lang === "eu"
                ? "Euskara"
                : t.lang === "fr"
                  ? "Basque"
                  : t.lang === "en"
                    ? "Basque"
                    : "Euskera"}
            </Text>
            <Text style={s.langLevel}>C1</Text>
          </View>
        </View>

        {/* ── Footer ── */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>
            {t.profile.name} — {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
