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

// ─── Fonts ────────────────────────────────────────────────────────────────────
const SERIF = "Times-Roman";
const BOLD = "Times-Bold";
const ITALIC = "Times-Italic";

// ─── Colours ─────────────────────────────────────────────────────────────────
const INK = "#000000";
const MUTED = "#333333";
const LINK = "#1a56c4";

// ─── Styles ──────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 42,
    paddingBottom: 42,
    paddingHorizontal: 51,
    fontFamily: SERIF,
    fontSize: 10,
    color: INK,
    lineHeight: 1.3,
  },

  // ── Header
  name: {
    fontSize: 15,
    fontFamily: BOLD,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  contact: {
    fontSize: 9,
    textAlign: "center",
    color: MUTED,
    marginBottom: 14,
  },
  contactLink: { fontSize: 9, color: LINK, textDecoration: "underline" },

  // ── Section
  sectionWrap: { marginTop: 10 },
  sectionTitle: {
    fontSize: 11,
    fontFamily: BOLD,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  sectionRule: {
    borderBottomWidth: 0.75,
    borderBottomColor: INK,
    marginBottom: 6,
  },

  // ── Entry rows
  entryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  entryCompany: { fontSize: 11, fontFamily: BOLD, flex: 1 },
  entryLocation: { fontSize: 11, fontFamily: BOLD },
  entrySub: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  entryRole: { fontSize: 10, fontFamily: ITALIC, flex: 1 },
  entryDates: { fontSize: 10, fontFamily: ITALIC },
  entryWrap: { marginTop: 7 },

  // ── Bullets
  bullet: { flexDirection: "row", paddingLeft: 10, marginBottom: 2 },
  bulletDash: { fontSize: 10, marginRight: 5, lineHeight: 1.35 },
  bulletText: { fontSize: 10, flex: 1, lineHeight: 1.35, textAlign: "justify" },

  // ── Skills two-column
  skillsRow: { flexDirection: "row", gap: 20 },
  skillCol: { flex: 1 },
  skillLine: { flexDirection: "row", flexWrap: "wrap", marginBottom: 3 },
  skillCat: { fontSize: 10, fontFamily: BOLD },
  skillVal: { fontSize: 10 },

  // ── Footer
  footer: {
    position: "absolute",
    bottom: 20,
    left: 51,
    right: 51,
    borderTopWidth: 0.4,
    borderTopColor: "#cccccc",
    paddingTop: 5,
  },
  footerText: { fontSize: 7, color: "#999999", textAlign: "center" },
});

// ─── CV data ──────────────────────────────────────────────────────────────────
type Lang = "en" | "es";

const DATA: Record<
  Lang,
  {
    sections: Record<string, string>;
    experience: {
      company: string;
      location: string;
      role: string;
      dates: string;
      bullets: string[];
    }[];
    education: {
      institution: string;
      location: string;
      degree: string;
      dates: string;
      bullets: string[];
    }[];
    additional: {
      company: string;
      location: string;
      role: string;
      dates: string;
      bullets: string[];
    }[];
    skills: {
      left: { cat: string; val: string }[];
      right: { cat: string; val: string }[];
    };
  }
> = {
  en: {
    sections: {
      experience: "Professional Experience",
      education: "Education",
      additional: "Additional Experience",
      skills: "Skills & Interests",
    },
    experience: [
      {
        company: "PKF Attest — Skootik",
        location: "Donostia, Spain",
        role: "Junior Software Engineer · AI Department",
        dates: "Jul 2025 – Present",
        bullets: [
          "Designed and developed Oris Dental Scan end-to-end: an EU- and government-funded AI dental pre-diagnosis tool in production, used by real patients. Stack: Next.js (TypeScript), Django (Python), PostgreSQL, AWS.",
          "Built and maintained multiple client-facing fullstack applications within an Agile/Scrum team: clean architecture, REST APIs, CI/CD pipelines with Jenkins, scalable system design on AWS.",
        ],
      },
      {
        company: "Alerion Technologies",
        location: "Donostia, Spain",
        role: "Software Developer Intern",
        dates: "Jul 2024 – Aug 2024",
        bullets: [
          "Developed mission control software for autonomous drone systems: real-time telemetry processing, connectivity verification and ROS-based middleware communication in TypeScript, Python and Bash.",
          "Set up CI pipelines with Jenkins; managed repositories with Git and Bitbucket in a sprint-based Agile workflow.",
        ],
      },
    ],
    education: [
      {
        institution: "UNIR — Universidad Internacional de La Rioja",
        location: "Online",
        degree: "Master's in Artificial Intelligence",
        dates: "Jun 2026 – May 2027",
        bullets: [
          "60 ECTS online programme: machine learning, deep learning, NLP, computer vision and AI engineering.",
        ],
      },
      {
        institution: "University of the Basque Country (UPV/EHU)",
        location: "Donostia, Spain",
        degree: "Bachelor's in Computer Engineering",
        dates: "Sep 2021 – Feb 2026",
        bullets: [
          "GPA: 6.2 / 10.",
          "Final Degree Project (8.5 / 10): designed and built a complete academic resource management platform for FP Cebanc centre, integrated with Skootik. Stack: Next.js · Django · PostgreSQL · Celery · AWS · Jenkins CI/CD.",
        ],
      },
    ],
    additional: [
      {
        company: "Restaurante VaBene",
        location: "Donostia, Spain",
        role: "Waiter",
        dates: "Mar 2022 – Sep 2022",
        bullets: [
          "Managed multiple tables simultaneously during peak hours in a high-footfall Donostia restaurant, maintaining service quality under sustained operational pressure.",
        ],
      },
      {
        company: "Muka, Ixo Restauración SL",
        location: "Donostia, Spain",
        role: "Catering Waiter",
        dates: "Sep 2022 – Oct 2023",
        bullets: [
          "Table service at catering events — galas, corporate dinners and private celebrations — across long, demanding shifts maintaining consistent professional standards.",
        ],
      },
      {
        company: "MCC Graphics S. Coop",
        location: "Donostia, Spain",
        role: "Print Production Worker",
        dates: "Jul 2023 – Aug 2023",
        bullets: [
          "Material handling, print quality control and production line support in a printing cooperative.",
        ],
      },
    ],
    skills: {
      left: [
        { cat: "Languages: ", val: "TypeScript, Python, JavaScript, Bash" },
        { cat: "Frontend: ", val: "React, Next.js, Tailwind CSS" },
        { cat: "Backend: ", val: "Django REST Framework, REST APIs" },
        { cat: "Databases: ", val: "PostgreSQL, SQL" },
        { cat: "Cloud & DevOps: ", val: "AWS (EC2, S3, RDS), Jenkins (CI/CD)" },
      ],
      right: [
        { cat: "Version Control: ", val: "Git, Bitbucket" },
        { cat: "Methodologies: ", val: "Agile / Scrum" },
        {
          cat: "Languages: ",
          val: "Spanish (native), Basque (C1), English (intermediate)",
        },
        {
          cat: "Interests: ",
          val: "Sport, entrepreneurship, family and friends",
        },
      ],
    },
  },

  es: {
    sections: {
      experience: "Experiencia Profesional",
      education: "Educación",
      additional: "Experiencia Adicional",
      skills: "Habilidades e Intereses",
    },
    experience: [
      {
        company: "PKF Attest — Skootik",
        location: "Donostia, España",
        role: "Ingeniero de Software Junior · Departamento de IA",
        dates: "Jul 2025 – Actualidad",
        bullets: [
          "Diseño y desarrollo completo de Oris Dental Scan: herramienta de prediagnóstico dental con IA, financiada por la UE, el Gobierno de España y el Gobierno Vasco, en producción con pacientes reales. Stack: Next.js (TypeScript), Django (Python), PostgreSQL, AWS.",
          "Desarrollo y mantenimiento de aplicaciones web orientadas a cliente en equipo ágil (Scrum): arquitectura limpia, APIs REST, pipelines CI/CD con Jenkins y diseño de sistemas escalables en AWS.",
        ],
      },
      {
        company: "Alerion Technologies",
        location: "Donostia, España",
        role: "Desarrollador de Software en Prácticas",
        dates: "Jul 2024 – Ago 2024",
        bullets: [
          "Desarrollo de software de control de misiones para drones autónomos: procesamiento de telemetría en tiempo real, verificación de conectividad y comunicación middleware basada en ROS en TypeScript, Python y Bash.",
          "Configuración de pipelines CI con Jenkins; gestión de repositorios en entorno Agile por sprints con Git y Bitbucket.",
        ],
      },
    ],
    education: [
      {
        institution: "UNIR — Universidad Internacional de La Rioja",
        location: "Online",
        degree: "Máster en Inteligencia Artificial (próximamente)",
        dates: "Jun 2026 – May 2027",
        bullets: [
          "Máster online de 60 ECTS: machine learning, deep learning, NLP, visión por computador e ingeniería de IA.",
        ],
      },
      {
        institution: "Universidad del País Vasco (UPV/EHU)",
        location: "Donostia, España",
        degree: "Grado en Ingeniería Informática",
        dates: "Sep 2021 – Feb 2026",
        bullets: [
          "Nota media: 6,2 / 10.",
          "Trabajo de Fin de Grado (8,5/10): diseño y desarrollo completo de plataforma de gestión académica para el centro de FP Cebanc, integrada con Skootik. Stack: Next.js · Django · PostgreSQL · Celery · AWS · Jenkins CI/CD.",
        ],
      },
    ],
    additional: [
      {
        company: "Restaurante VaBene",
        location: "Donostia, España",
        role: "Camarero",
        dates: "Mar 2022 – Sep 2022",
        bullets: [
          "Gestión simultánea de mesas en restaurante de alta afluencia en Donostia durante horas punta, manteniendo la calidad del servicio bajo presión operacional sostenida.",
        ],
      },
      {
        company: "Muka, Ixo Restauración SL",
        location: "Donostia, España",
        role: "Camarero de Catering",
        dates: "Sep 2022 – Oct 2023",
        bullets: [
          "Servicio de sala en eventos de catering — galas, cenas corporativas y celebraciones privadas — en jornadas largas e intensas manteniendo actitud profesional en todo momento.",
        ],
      },
      {
        company: "MCC Graphics S. Coop",
        location: "Donostia, España",
        role: "Operario de Producción — Imprenta",
        dates: "Jul 2023 – Ago 2023",
        bullets: [
          "Manipulación de materiales, control de calidad de impresión y apoyo en línea de producción en cooperativa de impresión.",
        ],
      },
    ],
    skills: {
      left: [
        { cat: "Lenguajes: ", val: "TypeScript, Python, JavaScript, Bash" },
        { cat: "Frontend: ", val: "React, Next.js, Tailwind CSS" },
        { cat: "Backend: ", val: "Django REST Framework, APIs REST" },
        { cat: "Bases de datos: ", val: "PostgreSQL, SQL" },
        { cat: "Cloud y DevOps: ", val: "AWS (EC2, S3, RDS), Jenkins (CI/CD)" },
      ],
      right: [
        { cat: "Control de versiones: ", val: "Git, Bitbucket" },
        { cat: "Metodologías: ", val: "Agile / Scrum" },
        {
          cat: "Idiomas: ",
          val: "Español (nativo), Euskera (C1), Inglés (intermedio)",
        },
        {
          cat: "Intereses: ",
          val: "Deporte, emprendimiento, familia y amigos",
        },
      ],
    },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const SectionTitle = ({ label }: { label: string }) => (
  <View style={s.sectionWrap}>
    <Text style={s.sectionTitle}>{label}</Text>
    <View style={s.sectionRule} />
  </View>
);

interface EntryProps {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
  first?: boolean;
}

const Entry: React.FC<EntryProps> = ({
  company,
  location,
  role,
  dates,
  bullets,
  first,
}) => (
  <View style={first ? {} : s.entryWrap} wrap={false}>
    <View style={s.entryTop}>
      <Text style={s.entryCompany}>{company}</Text>
      <Text style={s.entryLocation}>{location}</Text>
    </View>
    <View style={s.entrySub}>
      <Text style={s.entryRole}>{role}</Text>
      <Text style={s.entryDates}>{dates}</Text>
    </View>
    {bullets.map((b, i) => (
      <View key={i} style={s.bullet}>
        <Text style={s.bulletDash}>-</Text>
        <Text style={s.bulletText}>{b}</Text>
      </View>
    ))}
  </View>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
interface CVDocumentProps {
  t: Translation;
}

export const CVDocument: React.FC<CVDocumentProps> = ({ t }) => {
  const lang: Lang = t.lang === "es" ? "es" : "en";
  const d = DATA[lang];

  return (
    <Document
      title={`CV — Ioritz Tubio Sanchez`}
      author="Ioritz Tubio Sanchez"
      subject={lang === "es" ? "Currículum Vitae" : "Curriculum Vitae"}
      language={lang}
    >
      <Page size="A4" style={s.page}>
        {/* ── Name ── */}
        <Text style={s.name}>Ioritz Tubio Sanchez</Text>

        {/* ── Contact ── */}
        <Text style={s.contact}>
          +34 640 676 944
          {"  |  "}
          <Link src="mailto:ioritztubio1@gmail.com" style={s.contactLink}>
            ioritztubio1@gmail.com
          </Link>
          {"  |  "}
          <Link
            src="https://linkedin.com/in/ioritz-tubio"
            style={s.contactLink}
          >
            LinkedIn
          </Link>
          {"  |  "}
          <Link src="https://ioritztubio.dev" style={s.contactLink}>
            ioritztubio.dev
          </Link>
        </Text>

        {/* ── Professional Experience ── */}
        <SectionTitle label={d.sections.experience} />
        {d.experience.map((e, i) => (
          <Entry key={i} {...e} first={i === 0} />
        ))}

        {/* ── Education ── */}
        <SectionTitle label={d.sections.education} />
        {d.education.map((e, i) => (
          <Entry
            key={i}
            company={e.institution}
            role={e.degree}
            location={e.location}
            dates={e.dates}
            bullets={e.bullets}
            first={i === 0}
          />
        ))}

        {/* ── Additional Experience ── */}
        <SectionTitle label={d.sections.additional} />
        {d.additional.map((e, i) => (
          <Entry key={i} {...e} first={i === 0} />
        ))}

        {/* ── Skills & Interests ── */}
        <SectionTitle label={d.sections.skills} />
        <View style={s.skillsRow}>
          <View style={s.skillCol}>
            {d.skills.left.map((sk, i) => (
              <View key={i} style={s.skillLine}>
                <Text style={s.skillCat}>{sk.cat}</Text>
                <Text style={s.skillVal}>{sk.val}</Text>
              </View>
            ))}
          </View>
          <View style={s.skillCol}>
            {d.skills.right.map((sk, i) => (
              <View key={i} style={s.skillLine}>
                <Text style={s.skillCat}>{sk.cat}</Text>
                <Text style={s.skillVal}>{sk.val}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Footer ── */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>
            Ioritz Tubio Sanchez — {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
