import React from "react";

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
          "Contributed across the product end-to-end as part of the engineering team: an EU- and government-funded AI dental pre-diagnosis tool in production, used by real patients. Stack: Next.js (TypeScript), Django (Python), PostgreSQL, AWS.",
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
          "Managed multiple tables simultaneously during peak hours in a high-footfall restaurant, maintaining service quality under sustained operational pressure.",
        ],
      },
      {
        company: "Muka, Ixo Restauración SL",
        location: "Donostia, Spain",
        role: "Catering Waiter",
        dates: "Sep 2022 – Oct 2023",
        bullets: [
          "Table service at catering events — galas, corporate dinners and private celebrations — across long, demanding shifts.",
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
          "Contribución de extremo a extremo como parte del equipo de ingeniería en Oris Dental Scan: herramienta de prediagnóstico dental con IA, financiada por la UE, el Gobierno de España y el Gobierno Vasco, en producción con pacientes reales. Stack: Next.js (TypeScript), Django (Python), PostgreSQL, AWS.",
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
          "Gestión simultánea de mesas en restaurante de alta afluencia durante horas punta, manteniendo la calidad del servicio bajo presión operacional sostenida.",
        ],
      },
      {
        company: "Muka, Ixo Restauración SL",
        location: "Donostia, España",
        role: "Camarero de Catering",
        dates: "Sep 2022 – Oct 2023",
        bullets: [
          "Servicio de sala en eventos de catering — galas, cenas corporativas y celebraciones privadas — en jornadas largas e intensas.",
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

// ─── Shared styles ────────────────────────────────────────────────────────────
const base: React.CSSProperties = {
  fontFamily: '"Times New Roman", Times, serif',
  fontSize: "11px",
  color: "#000",
  lineHeight: 1.35,
  backgroundColor: "#fff",
};

const SectionHead: React.FC<{ title: string }> = ({ title }) => (
  <div style={{ marginTop: "10px" }}>
    <p
      style={{
        fontFamily: "inherit",
        fontSize: "11px",
        fontWeight: "bold",
        textTransform: "uppercase",
        margin: "0 0 2px",
      }}
    >
      {title}
    </p>
    <div style={{ borderBottom: "0.75px solid #000", marginBottom: "6px" }} />
  </div>
);

const Entry: React.FC<{
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
  first?: boolean;
}> = ({ company, location, role, dates, bullets, first }) => (
  <div style={{ marginTop: first ? 0 : "7px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1px",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "11px" }}>{company}</span>
      <span style={{ fontWeight: "bold", fontSize: "11px" }}>{location}</span>
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "4px",
      }}
    >
      <span style={{ fontStyle: "italic", fontSize: "10px" }}>{role}</span>
      <span style={{ fontStyle: "italic", fontSize: "10px" }}>{dates}</span>
    </div>
    {bullets.map((b, i) => (
      <div
        key={i}
        style={{ display: "flex", paddingLeft: "10px", marginBottom: "2px" }}
      >
        <span style={{ marginRight: "5px", fontSize: "10px", flexShrink: 0 }}>
          -
        </span>
        <span style={{ fontSize: "10px", flex: 1, textAlign: "justify" }}>
          {b}
        </span>
      </div>
    ))}
  </div>
);

// ─── Public component ─────────────────────────────────────────────────────────
interface Props {
  lang: Lang;
  padding?: number;
}

export const CVHTMLDocument: React.FC<Props> = ({ lang, padding = 42 }) => {
  const d = DATA[lang];

  return (
    <div
      style={{
        ...base,
        padding: `${padding}px ${Math.round(padding * 1.2)}px`,
      }}
    >
      {/* Name */}
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "1.2px",
          margin: "0 0 5px",
          fontFamily: "inherit",
        }}
      >
        Ioritz Tubio Sanchez
      </p>
      {/* Contact */}
      <p
        style={{
          textAlign: "center",
          fontSize: "9px",
          color: "#333",
          margin: "0 0 14px",
          fontFamily: "inherit",
        }}
      >
        +34 640 676 944{"  |  "}
        <a href="mailto:ioritztubio1@gmail.com" style={{ color: "#1a56c4" }}>
          ioritztubio1@gmail.com
        </a>
        {"  |  "}
        <a
          href="https://linkedin.com/in/ioritz-tubio"
          style={{ color: "#1a56c4" }}
        >
          LinkedIn
        </a>
        {"  |  "}
        <a href="https://ioritztubio.dev" style={{ color: "#1a56c4" }}>
          ioritztubio.dev
        </a>
      </p>

      {/* Experience */}
      <SectionHead title={d.sections.experience} />
      {d.experience.map((e, i) => (
        <Entry key={i} {...e} first={i === 0} />
      ))}

      {/* Education */}
      <SectionHead title={d.sections.education} />
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

      {/* Additional */}
      <SectionHead title={d.sections.additional} />
      {d.additional.map((e, i) => (
        <Entry key={i} {...e} first={i === 0} />
      ))}

      {/* Skills */}
      <SectionHead title={d.sections.skills} />
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          {d.skills.left.map((sk, i) => (
            <p
              key={i}
              style={{
                margin: "0 0 3px",
                fontSize: "10px",
                fontFamily: "inherit",
              }}
            >
              <strong>{sk.cat}</strong>
              {sk.val}
            </p>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {d.skills.right.map((sk, i) => (
            <p
              key={i}
              style={{
                margin: "0 0 3px",
                fontSize: "10px",
                fontFamily: "inherit",
              }}
            >
              <strong>{sk.cat}</strong>
              {sk.val}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
