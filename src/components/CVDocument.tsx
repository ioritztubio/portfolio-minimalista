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

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  black: "#0f0f0f",
  dark: "#1a1a1a",
  mid: "#444444",
  muted: "#777777",
  light: "#aaaaaa",
  rule: "#e0e0e0",
  workDot: "#3b82f6", // blue-500
  eduDot: "#f59e0b", // amber-500
  white: "#ffffff",
  pageBg: "#ffffff",
};

const FONT_SANS = "Helvetica";
const FONT_BOLD = "Helvetica-Bold";

// ─── Styles ──────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: C.pageBg,
    paddingTop: 44,
    paddingBottom: 44,
    paddingHorizontal: 48,
    fontFamily: FONT_SANS,
    color: C.black,
  },

  // Header
  header: { marginBottom: 20 },
  name: {
    fontSize: 26,
    fontFamily: FONT_BOLD,
    color: C.black,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 11,
    color: C.mid,
    marginBottom: 10,
    letterSpacing: 0.4,
  },
  contactRow: { flexDirection: "row", gap: 16, flexWrap: "wrap" },
  contactItem: { fontSize: 8.5, color: C.muted },
  contactLink: { fontSize: 8.5, color: C.muted, textDecoration: "none" },

  rule: { borderBottomWidth: 1, borderBottomColor: C.rule, marginVertical: 14 },

  // Section
  sectionLabel: {
    fontSize: 7.5,
    fontFamily: FONT_BOLD,
    color: C.muted,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  // About
  aboutText: { fontSize: 9.5, color: C.mid, lineHeight: 1.65, marginBottom: 5 },

  // Timeline entry
  entryRow: { flexDirection: "row", marginBottom: 13, gap: 10 },
  dotCol: { width: 10, paddingTop: 2, alignItems: "center" },
  dot: { width: 7, height: 7, borderRadius: 4 },
  dotWork: { backgroundColor: C.workDot },
  dotEdu: { backgroundColor: C.eduDot },
  entryBody: { flex: 1 },
  entryTitle: {
    fontSize: 10,
    fontFamily: FONT_BOLD,
    color: C.black,
    marginBottom: 1,
  },
  entryOrg: { fontSize: 9, color: C.mid, marginBottom: 2 },
  entryDate: {
    fontSize: 7.5,
    color: C.light,
    letterSpacing: 0.3,
    marginBottom: 4,
    fontFamily: FONT_SANS,
  },
  entryDesc: { fontSize: 8.5, color: C.mid, lineHeight: 1.6 },

  // Project
  projectTitle: {
    fontSize: 10,
    fontFamily: FONT_BOLD,
    color: C.black,
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 8.5,
    color: C.mid,
    lineHeight: 1.6,
    marginBottom: 4,
  },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginBottom: 4 },
  tag: {
    fontSize: 7,
    color: C.muted,
    borderWidth: 1,
    borderColor: C.rule,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  privateNote: { fontSize: 7.5, color: C.light, fontFamily: FONT_SANS },

  footer: { position: "absolute", bottom: 22, left: 48, right: 48 },
  footerText: { fontSize: 7.5, color: C.light, textAlign: "center" },
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
};

function parseDateEnd(str: string): number {
  if (/present|actualidad/i.test(str)) return 999999;
  const yearMatch = str.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 0;
  const month = str
    .toLowerCase()
    .split(/\s+/)
    .reduce<number>((acc, w) => acc || (MONTH_NUM[w] ?? 0), 0);
  return year * 100 + month;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
const Rule = () => <View style={s.rule} />;

const SectionLabel = ({ label }: { label: string }) => (
  <Text style={s.sectionLabel}>{label}</Text>
);

interface EntryProps {
  title: string;
  org: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  isWork: boolean;
}

const Entry = ({
  title,
  org,
  dateStart,
  dateEnd,
  description,
  isWork,
}: EntryProps) => {
  const isSingle = dateStart === dateEnd;
  return (
    <View style={s.entryRow}>
      <View style={s.dotCol}>
        <View style={[s.dot, isWork ? s.dotWork : s.dotEdu]} />
      </View>
      <View style={s.entryBody}>
        <Text style={s.entryTitle}>{title}</Text>
        <Text style={s.entryOrg}>{org}</Text>
        <Text style={s.entryDate}>
          {isSingle ? dateStart : `${dateStart} — ${dateEnd}`}
        </Text>
        <Text style={s.entryDesc}>{description}</Text>
      </View>
    </View>
  );
};

// ─── Main Document ────────────────────────────────────────────────────────────
interface CVDocumentProps {
  t: Translation;
}

export const CVDocument: React.FC<CVDocumentProps> = ({ t }) => {
  const age = getAge();
  const isEN = t.lang === "en";

  const sortedTimeline = [...t.timeline.items].sort(
    (a, b) => parseDateEnd(b.dateEnd) - parseDateEnd(a.dateEnd),
  );
  const workItems = sortedTimeline.filter((e) => e.type === "work" && !e.extra);
  const extraItems = sortedTimeline.filter((e) => e.type === "work" && e.extra);
  const eduItems = sortedTimeline.filter((e) => e.type === "education");

  const emailSocial = t.profile.socials.find((s) => s.platform === "Email");
  const githubSocial = t.profile.socials.find((s) => s.platform === "GitHub");
  const linkedinSocial = t.profile.socials.find(
    (s) => s.platform === "LinkedIn",
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
            {githubSocial && (
              <Link src={githubSocial.url} style={s.contactLink}>
                {githubSocial.url}
              </Link>
            )}
            {linkedinSocial && (
              <Link src={linkedinSocial.url} style={s.contactLink}>
                {linkedinSocial.url}
              </Link>
            )}
          </View>
        </View>

        <Rule />

        {/* ── About ── */}
        <SectionLabel label={isEN ? "About" : "Sobre mí"} />
        {t.profile.about.map((line, i) => (
          <Text key={i} style={s.aboutText}>
            {line.replace("{age}", String(age))}
          </Text>
        ))}

        <Rule />

        {/* ── Work Experience ── */}
        <SectionLabel
          label={
            isEN
              ? "Work Experience"
              : t.lang === "eu"
                ? "Lan Esperientzia"
                : t.lang === "fr"
                  ? "Expérience Professionnelle"
                  : "Experiencia Laboral"
          }
        />
        {workItems.map((ev, i) => (
          <Entry
            key={i}
            title={ev.title}
            org={ev.organization}
            dateStart={ev.dateStart}
            dateEnd={ev.dateEnd}
            description={ev.description}
            isWork
          />
        ))}

        <Rule />

        {/* ── Education ── */}
        <SectionLabel
          label={
            isEN
              ? "Education"
              : t.lang === "eu"
                ? "Hezkuntza"
                : t.lang === "fr"
                  ? "Formation"
                  : "Formación"
          }
        />
        {eduItems.map((ev, i) => (
          <Entry
            key={i}
            title={ev.title}
            org={ev.organization}
            dateStart={ev.dateStart}
            dateEnd={ev.dateEnd}
            description={ev.description}
            isWork={false}
          />
        ))}

        <Rule />

        {/* ── Additional Experience ── */}
        {extraItems.length > 0 && (
          <>
            <SectionLabel label={t.ui.showExtra} />
            {extraItems.map((ev, i) => (
              <Entry
                key={i}
                title={ev.title}
                org={ev.organization}
                dateStart={ev.dateStart}
                dateEnd={ev.dateEnd}
                description={ev.description}
                isWork
              />
            ))}
            <Rule />
          </>
        )}

        <Rule />

        {/* ── Projects ── */}
        <SectionLabel label={isEN ? "Projects" : "Proyectos"} />
        {t.projects.items
          .filter((proj) => !proj.comingSoon)
          .map((proj, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <Text style={s.projectTitle}>{proj.title}</Text>
              <Text style={s.projectDesc}>{proj.description}</Text>
              <View style={s.tagsRow}>
                {proj.tags.map((tag, j) => (
                  <Text key={j} style={s.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
              {proj.demoUrl && (
                <Link
                  src={proj.demoUrl}
                  style={[s.contactLink, { marginBottom: 2 }]}
                >
                  {proj.demoUrl}
                </Link>
              )}
              {proj.codePrivate && (
                <Text style={s.privateNote}>🔒 {proj.codePrivateNote}</Text>
              )}
            </View>
          ))}

        {/* ── Footer ── */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>
            {t.profile.name} · {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
