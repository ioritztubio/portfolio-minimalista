import React from "react";

type Lang = "en" | "es";

const DATA: Record<Lang, {
  sections: Record<string, string>;
  experience: { company: string; location: string; role: string; dates: string; bullets: string[] }[];
  education: { institution: string; location: string; degree: string; dates: string; bullets: string[] }[];
  additional: { company: string; location: string; role: string; dates: string; bullets: string[] }[];
  skills: { left: { cat: string; val: string }[]; right: { cat: string; val: string }[] };
}> = {
  en: {
    sections: { experience: "Professional Experience", education: "Education", additional: "Additional Experience", skills: "Skills & Interests" },
    experience: [
      {
        company: "Swap Energía", location: "Donostia, Spain",
        role: "Software Developer", dates: "Sep 2026 – Present",
        bullets: [
          "Development of an internal ERP with PHP and Vue on the application and Python, FastAPI and MySQL on the services.",
          "Architecture and interface design, development and testing of each feature, with automated deployment to production.",
          "AI built into the development process, with Claude and automated workflows for part of the code review and bug fixing during testing.",
        ],
      },
      {
        company: "Skootik", location: "Donostia, Spain",
        role: "Junior Software Engineer", dates: "Jul 2025 – Aug 2026",
        bullets: [
          "Oris Dental Scan, an AI dental pre-diagnosis tool in production, funded by the EU, the Spanish Government and the Basque Government. Built the web interface, part of the server and the AWS infrastructure with Next.js, TypeScript, Django, Python and PostgreSQL.",
          "Renewal of a testing laboratory's management application, migrated from a legacy system. Calculations for sample analysis and collection, and modular management of entities with complex relationships. Interviews with and observation of staff to fit the application to their daily work. Improved design and, in some cases, load times more than three times faster.",
          "Direct work with clients, from requirements gathering and follow-up meetings to minutes and scope changes. Designed and developed applications with Next.js, Node and Django REST, set up AWS servers with Docker and resolved incidents with users.",
        ],
      },
      {
        company: "Alerion Technologies", location: "Donostia, Spain",
        role: "Software Developer Intern", dates: "Jul 2024 – Aug 2024",
        bullets: [
          "Mission control software for autonomous drone systems, covering telemetry processing, connectivity checks and communication between components through ROS, with TypeScript, Python and Bash.",
          "Set up continuous integration with Jenkins and managed repositories with Git and Bitbucket in an agile team.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad Internacional de La Rioja (UNIR)", location: "Online",
        degree: "Master's in Artificial Intelligence (in progress)", dates: "Jun 2026 – May 2027",
        bullets: ["Online programme worth 60 ECTS credits covering machine learning, deep learning, natural language processing, computer vision and AI engineering."],
      },
      {
        institution: "University of the Basque Country (UPV/EHU)", location: "Donostia, Spain",
        degree: "Bachelor's in Computer Engineering", dates: "Sep 2021 – Feb 2026",
        bullets: [
          "Average grade 6.2 out of 10.",
          "Final degree project graded 8.5 out of 10. Design and development of a resource planning platform for the Cebanc vocational training centre, integrated with Skootik, built with Next.js, Django, PostgreSQL, Celery, AWS and Jenkins.",
        ],
      },
    ],
    additional: [
      { company: "Restaurante VaBene", location: "Donostia, Spain", role: "Waiter", dates: "Mar 2022 – Sep 2022", bullets: ["Served several tables at once in a busy restaurant, especially during peak hours."] },
      { company: "Muka, Ixo Restauración SL", location: "Donostia, Spain", role: "Catering Waiter", dates: "Sep 2022 – Oct 2023", bullets: ["Table service at catering events such as galas, company dinners and private celebrations, in long shifts."] },
      { company: "MCC Graphics S. Coop", location: "Donostia, Spain", role: "Print Production Worker", dates: "Jul 2023 – Aug 2023", bullets: ["Material handling, print quality checks and production line support in a printing cooperative."] },
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
    sections: { experience: "Experiencia profesional", education: "Formación", additional: "Otra experiencia laboral", skills: "Habilidades e intereses" },
    experience: [
      {
        company: "Swap Energía", location: "Donostia, España",
        role: "Desarrollador de software", dates: "sep 2026 – actualidad",
        bullets: [
          "Desarrollo de un ERP de uso interno con PHP y Vue en la aplicación y con Python, FastAPI y MySQL en los servicios.",
          "Diseño de la arquitectura y de la interfaz, desarrollo y pruebas de cada funcionalidad, con despliegue automatizado en producción.",
          "Trabajo con la IA integrada en el proceso de desarrollo, con Claude y flujos automatizados para parte de la revisión de código y de la corrección de errores en las pruebas.",
        ],
      },
      {
        company: "Skootik", location: "Donostia, España",
        role: "Ingeniero de software júnior", dates: "jul 2025 – ago 2026",
        bullets: [
          "Oris Dental Scan, herramienta de prediagnóstico dental con IA en producción, financiada por la Unión Europea, el Gobierno de España y el Gobierno Vasco. Desarrollo de la interfaz web, de parte del servidor y de la infraestructura en AWS con Next.js, TypeScript, Django, Python y PostgreSQL.",
          "Renovación de la aplicación de gestión de un laboratorio de análisis, migrada desde un sistema heredado. Cálculos para el análisis y la recogida de muestras y gestión modular de entidades con relaciones complejas. Entrevistas y observación de los trabajadores para adaptar la aplicación a su trabajo diario. Diseño mejorado y, en algunos casos, carga más del triple de rápida.",
          "Trato directo con clientes, desde la recogida de requisitos y las reuniones de seguimiento hasta la redacción de actas y la gestión de cambios de alcance. Diseño y desarrollo de aplicaciones con Next.js, Node y Django REST, montaje de servidores en AWS con Docker y resolución de incidencias con los usuarios.",
        ],
      },
      {
        company: "Alerion Technologies", location: "Donostia, España",
        role: "Desarrollador de software en prácticas", dates: "jul 2024 – ago 2024",
        bullets: [
          "Software de control de misión para drones autónomos, con procesamiento de telemetría, verificación de la conectividad y comunicación entre componentes mediante ROS, en TypeScript, Python y Bash.",
          "Configuración de la integración continua con Jenkins y gestión de repositorios con Git y Bitbucket en un equipo ágil.",
        ],
      },
    ],
    education: [
      {
        institution: "Universidad Internacional de La Rioja (UNIR)", location: "En línea",
        degree: "Máster en Inteligencia Artificial (en curso)", dates: "jun 2026 – may 2027",
        bullets: ["Máster en línea de 60 créditos ECTS sobre aprendizaje automático, aprendizaje profundo, procesamiento del lenguaje natural, visión por computador e ingeniería de IA."],
      },
      {
        institution: "Universidad del País Vasco (UPV/EHU)", location: "Donostia, España",
        degree: "Grado en Ingeniería Informática", dates: "sep 2021 – feb 2026",
        bullets: [
          "Nota media de 6,2 sobre 10.",
          "Trabajo de fin de grado con una calificación de 8,5. Diseño y desarrollo de una plataforma de planificación de recursos para el centro de formación profesional Cebanc, integrada con Skootik y construida con Next.js, Django, PostgreSQL, Celery, AWS y Jenkins.",
        ],
      },
    ],
    additional: [
      { company: "Restaurante VaBene", location: "Donostia, España", role: "Camarero", dates: "mar 2022 – sep 2022", bullets: ["Atención de varias mesas a la vez en un restaurante con mucha afluencia, sobre todo en horas punta."] },
      { company: "Muka, Ixo Restauración SL", location: "Donostia, España", role: "Camarero de catering", dates: "sep 2022 – oct 2023", bullets: ["Servicio de sala en eventos de catering, como galas, cenas de empresa y celebraciones privadas, en jornadas largas."] },
      { company: "MCC Graphics S. Coop", location: "Donostia, España", role: "Operario de producción en imprenta", dates: "jul 2023 – ago 2023", bullets: ["Manipulación de materiales, control de calidad de la impresión y apoyo en la línea de producción de una cooperativa de impresión."] },
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
    <p style={{ fontFamily: "inherit", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", margin: "0 0 2px" }}>{title}</p>
    <div style={{ borderBottom: "0.75px solid #000", marginBottom: "6px" }} />
  </div>
);

const Entry: React.FC<{ company: string; location: string; role: string; dates: string; bullets: string[]; first?: boolean }> = ({
  company, location, role, dates, bullets, first,
}) => (
  <div style={{ marginTop: first ? 0 : "7px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1px" }}>
      <span style={{ fontWeight: "bold", fontSize: "11px" }}>{company}</span>
      <span style={{ fontWeight: "bold", fontSize: "11px" }}>{location}</span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
      <span style={{ fontStyle: "italic", fontSize: "10px" }}>{role}</span>
      <span style={{ fontStyle: "italic", fontSize: "10px" }}>{dates}</span>
    </div>
    {bullets.map((b, i) => (
      <div key={i} style={{ display: "flex", paddingLeft: "10px", marginBottom: "2px" }}>
        <span style={{ marginRight: "5px", fontSize: "10px", flexShrink: 0 }}>-</span>
        <span style={{ fontSize: "10px", flex: 1, textAlign: "justify" }}>{b}</span>
      </div>
    ))}
  </div>
);

// ─── Public component ─────────────────────────────────────────────────────────
interface Props { lang: Lang; padding?: number }

export const CVHTMLDocument: React.FC<Props> = ({ lang, padding = 42 }) => {
  const d = DATA[lang];

  return (
    <div style={{ ...base, padding: `${padding}px ${Math.round(padding * 1.2)}px` }}>
      {/* Name */}
      <p style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1.2px", margin: "0 0 5px", fontFamily: "inherit" }}>
        Ioritz Tubio Sanchez
      </p>
      {/* Contact */}
      <p style={{ textAlign: "center", fontSize: "9px", color: "#333", margin: "0 0 14px", fontFamily: "inherit" }}>
        +34 640 676 944{"  |  "}
        <a href="mailto:ioritztubio1@gmail.com" style={{ color: "#1a56c4" }}>ioritztubio1@gmail.com</a>
        {"  |  "}
        <a href="https://linkedin.com/in/ioritz-tubio" style={{ color: "#1a56c4" }}>LinkedIn</a>
        {"  |  "}
        <a href="https://ioritztubio.dev" style={{ color: "#1a56c4" }}>ioritztubio.dev</a>
      </p>

      {/* Experience */}
      <SectionHead title={d.sections.experience} />
      {d.experience.map((e, i) => <Entry key={i} {...e} first={i === 0} />)}

      {/* Education */}
      <SectionHead title={d.sections.education} />
      {d.education.map((e, i) => (
        <Entry key={i} company={e.institution} role={e.degree} location={e.location} dates={e.dates} bullets={e.bullets} first={i === 0} />
      ))}

      {/* Additional */}
      <SectionHead title={d.sections.additional} />
      {d.additional.map((e, i) => <Entry key={i} {...e} first={i === 0} />)}

      {/* Skills */}
      <SectionHead title={d.sections.skills} />
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          {d.skills.left.map((sk, i) => (
            <p key={i} style={{ margin: "0 0 3px", fontSize: "10px", fontFamily: "inherit" }}>
              <strong>{sk.cat}</strong>{sk.val}
            </p>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {d.skills.right.map((sk, i) => (
            <p key={i} style={{ margin: "0 0 3px", fontSize: "10px", fontFamily: "inherit" }}>
              <strong>{sk.cat}</strong>{sk.val}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
