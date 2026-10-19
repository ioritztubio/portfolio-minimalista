import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { Translation } from "../i18n/types";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const SERIF  = "Times-Roman";
const BOLD   = "Times-Bold";
const ITALIC = "Times-Italic";

// ─── Colours ─────────────────────────────────────────────────────────────────
const INK  = "#000000";
const MUTED = "#333333";
const LINK  = "#1a56c4";

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
    position: "absolute", bottom: 20, left: 51, right: 51,
    borderTopWidth: 0.4, borderTopColor: "#cccccc", paddingTop: 5,
  },
  footerText: { fontSize: 7, color: "#999999", textAlign: "center" },
});

// ─── CV data ──────────────────────────────────────────────────────────────────
type Lang = "en" | "es";

const DATA: Record<Lang, {
  sections: Record<string, string>;
  experience: { company: string; location: string; role: string; dates: string; bullets: string[] }[];
  education: { institution: string; location: string; degree: string; dates: string; bullets: string[] }[];
  additional: { company: string; location: string; role: string; dates: string; bullets: string[] }[];
  skills: { left: { cat: string; val: string }[]; right: { cat: string; val: string }[] };
}> = {
  en: {
    sections: {
      experience: "Professional Experience",
      education: "Education",
      additional: "Additional Experience",
      skills: "Skills & Interests",
    },
    experience: [
      {
        company: "Swap Energía",
        location: "Donostia, Spain",
        role: "Software Developer",
        dates: "Sep 2026 – Present",
        bullets: [
          "Development of an internal ERP with PHP and Vue on the application and Python, FastAPI and MySQL on the services.",
          "Architecture and interface design, development and testing of each feature, with automated deployment to production.",
          "AI built into the development process, with Claude and automated workflows for part of the code review and bug fixing during testing.",
        ],
      },
      {
        company: "Skootik",
        location: "Donostia, Spain",
        role: "Junior Software Engineer",
        dates: "Jul 2025 – Aug 2026",
        bullets: [
          "Oris Dental Scan, an AI dental pre-diagnosis tool in production, funded by the EU, the Spanish Government and the Basque Government. Built the web interface, part of the server and the AWS infrastructure with Next.js, TypeScript, Django, Python and PostgreSQL.",
          "Renewal of a testing laboratory's management application, migrated from a legacy system. Calculations for sample analysis and collection, and modular management of entities with complex relationships. Interviews with and observation of staff to fit the application to their daily work. Improved design and, in some cases, load times more than three times faster.",
          "Direct work with clients, from requirements gathering and follow-up meetings to minutes and scope changes. Designed and developed applications with Next.js, Node and Django REST, set up AWS servers with Docker and resolved incidents with users.",
        ],
      },
      {
        company: "Alerion Technologies",
        location: "Donostia, Spain",
        role: "Software Developer Intern",
        dates: "Jul 2024 – Aug 2024",
        bullets: [
          "Mission control software for autonomous drone systems, covering telemetry processing, connectivity checks and communication between components through ROS, with TypeScript, Python and Bash.",
          "Set up continuous integration with Jenkins and managed repositories with Git and Bitbucket in an agile team.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad Internacional de La Rioja (UNIR)",
        location: "Online",
        degree: "Master's in Artificial Intelligence (in progress)",
        dates: "Jun 2026 – May 2027",
        bullets: [
          "Online programme worth 60 ECTS credits covering machine learning, deep learning, natural language processing, computer vision and AI engineering.",
        ],
      },
      {
        institution: "University of the Basque Country (UPV/EHU)",
        location: "Donostia, Spain",
        degree: "Bachelor's in Computer Engineering",
        dates: "Sep 2021 – Feb 2026",
        bullets: [
          "Average grade 6.2 out of 10.",
          "Final degree project graded 8.5 out of 10. Design and development of a resource planning platform for the Cebanc vocational training centre, integrated with Skootik, built with Next.js, Django, PostgreSQL, Celery, AWS and Jenkins.",
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
          "Served several tables at once in a busy restaurant, especially during peak hours.",
        ],
      },
      {
        company: "Muka, Ixo Restauración SL",
        location: "Donostia, Spain",
        role: "Catering Waiter",
        dates: "Sep 2022 – Oct 2023",
        bullets: [
          "Table service at catering events such as galas, company dinners and private celebrations, in long shifts.",
        ],
      },
      {
        company: "MCC Graphics S. Coop",
        location: "Donostia, Spain",
        role: "Print Production Worker",
        dates: "Jul 2023 – Aug 2023",
        bullets: [
          "Material handling, print quality checks and production line support in a printing cooperative.",
        ],
      },
    ],
    skills: {
      left: [
        { cat: "Languages: ", val: "TypeScript, Python, PHP, JavaScript, Bash" },
        { cat: "Frontend: ", val: "React, Next.js, Vue, Tailwind CSS" },
        { cat: "Backend: ", val: "Django REST Framework, FastAPI, Node.js, REST APIs, microservices" },
        { cat: "Databases: ", val: "PostgreSQL, MySQL, SQL" },
        { cat: "Cloud & DevOps: ", val: "AWS (EC2, S3, RDS), Docker, Jenkins (CI/CD)" },
      ],
      right: [
        { cat: "Version Control: ", val: "Git, Bitbucket" },
        { cat: "Methodologies: ", val: "Agile (Scrum), AI-assisted development (Claude)" },
        { cat: "Languages: ", val: "Spanish (native), Basque (C1), English (intermediate)" },
        { cat: "Interests: ", val: "Sport, entrepreneurship, family and friends" },
      ],
    },
  },

  es: {
    sections: {
      experience: "Experiencia profesional",
      education: "Formación",
      additional: "Otra experiencia laboral",
      skills: "Habilidades e intereses",
    },
    experience: [
      {
        company: "Swap Energía",
        location: "Donostia, España",
        role: "Desarrollador de software",
        dates: "sep 2026 – actualidad",
        bullets: [
          "Desarrollo de un ERP de uso interno con PHP y Vue en la aplicación y con Python, FastAPI y MySQL en los servicios.",
          "Diseño de la arquitectura y de la interfaz, desarrollo y pruebas de cada funcionalidad, con despliegue automatizado en producción.",
          "Trabajo con la IA integrada en el proceso de desarrollo, con Claude y flujos automatizados para parte de la revisión de código y de la corrección de errores en las pruebas.",
        ],
      },
      {
        company: "Skootik",
        location: "Donostia, España",
        role: "Ingeniero de software júnior",
        dates: "jul 2025 – ago 2026",
        bullets: [
          "Oris Dental Scan, herramienta de prediagnóstico dental con IA en producción, financiada por la Unión Europea, el Gobierno de España y el Gobierno Vasco. Desarrollo de la interfaz web, de parte del servidor y de la infraestructura en AWS con Next.js, TypeScript, Django, Python y PostgreSQL.",
          "Renovación de la aplicación de gestión de un laboratorio de análisis, migrada desde un sistema heredado. Cálculos para el análisis y la recogida de muestras y gestión modular de entidades con relaciones complejas. Entrevistas y observación de los trabajadores para adaptar la aplicación a su trabajo diario. Diseño mejorado y, en algunos casos, carga más del triple de rápida.",
          "Trato directo con clientes, desde la recogida de requisitos y las reuniones de seguimiento hasta la redacción de actas y la gestión de cambios de alcance. Diseño y desarrollo de aplicaciones con Next.js, Node y Django REST, montaje de servidores en AWS con Docker y resolución de incidencias con los usuarios.",
        ],
      },
      {
        company: "Alerion Technologies",
        location: "Donostia, España",
        role: "Desarrollador de software en prácticas",
        dates: "jul 2024 – ago 2024",
        bullets: [
          "Software de control de misión para drones autónomos, con procesamiento de telemetría, verificación de la conectividad y comunicación entre componentes mediante ROS, en TypeScript, Python y Bash.",
          "Configuración de la integración continua con Jenkins y gestión de repositorios con Git y Bitbucket en un equipo ágil.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad Internacional de La Rioja (UNIR)",
        location: "En línea",
        degree: "Máster en Inteligencia Artificial (en curso)",
        dates: "jun 2026 – may 2027",
        bullets: [
          "Máster en línea de 60 créditos ECTS sobre aprendizaje automático, aprendizaje profundo, procesamiento del lenguaje natural, visión por computador e ingeniería de IA.",
        ],
      },
      {
        institution: "Universidad del País Vasco (UPV/EHU)",
        location: "Donostia, España",
        degree: "Grado en Ingeniería Informática",
        dates: "sep 2021 – feb 2026",
        bullets: [
          "Nota media de 6,2 sobre 10.",
          "Trabajo de fin de grado con una calificación de 8,5. Diseño y desarrollo de una plataforma de planificación de recursos para el centro de formación profesional Cebanc, integrada con Skootik y construida con Next.js, Django, PostgreSQL, Celery, AWS y Jenkins.",
        ],
      },
    ],
    additional: [
      {
        company: "Restaurante VaBene",
        location: "Donostia, España",
        role: "Camarero",
        dates: "mar 2022 – sep 2022",
        bullets: [
          "Atención de varias mesas a la vez en un restaurante con mucha afluencia, sobre todo en horas punta.",
        ],
      },
      {
        company: "Muka, Ixo Restauración SL",
        location: "Donostia, España",
        role: "Camarero de catering",
        dates: "sep 2022 – oct 2023",
        bullets: [
          "Servicio de sala en eventos de catering, como galas, cenas de empresa y celebraciones privadas, en jornadas largas.",
        ],
      },
      {
        company: "MCC Graphics S. Coop",
        location: "Donostia, España",
        role: "Operario de producción en imprenta",
        dates: "jul 2023 – ago 2023",
        bullets: [
          "Manipulación de materiales, control de calidad de la impresión y apoyo en la línea de producción de una cooperativa de impresión.",
        ],
      },
    ],
    skills: {
      left: [
        { cat: "Lenguajes: ", val: "TypeScript, Python, PHP, JavaScript, Bash" },
        { cat: "Frontend: ", val: "React, Next.js, Vue, Tailwind CSS" },
        { cat: "Backend: ", val: "Django REST Framework, FastAPI, Node.js, APIs REST, microservicios" },
        { cat: "Bases de datos: ", val: "PostgreSQL, MySQL, SQL" },
        { cat: "Nube y DevOps: ", val: "AWS (EC2, S3, RDS), Docker, Jenkins (CI/CD)" },
      ],
      right: [
        { cat: "Control de versiones: ", val: "Git, Bitbucket" },
        { cat: "Metodologías: ", val: "Metodologías ágiles (Scrum), desarrollo asistido por IA (Claude)" },
        { cat: "Idiomas: ", val: "Español (nativo), Euskera (C1), Inglés (intermedio)" },
        { cat: "Intereses: ", val: "Deporte, emprendimiento, familia y amigos" },
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

const Entry: React.FC<EntryProps> = ({ company, location, role, dates, bullets, first }) => (
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
interface CVDocumentProps { t: Translation }

export const CVDocument: React.FC<CVDocumentProps> = ({ t }) => {
  const lang: Lang = t.lang === "es" || t.lang === "eu" ? "es" : "en";
  const d = DATA[lang];

  return (
    <Document
      title={`CV · Ioritz Tubio Sanchez`}
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
          <Link src="https://linkedin.com/in/ioritz-tubio" style={s.contactLink}>
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
          <Entry key={i} company={e.institution} role={e.degree} location={e.location} dates={e.dates} bullets={e.bullets} first={i === 0} />
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
            Ioritz Tubio Sanchez · {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
