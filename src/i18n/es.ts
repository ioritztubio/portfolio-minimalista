import { Translation } from './types';

export const es: Translation = {
    lang: 'es',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Ingeniero de software especializado en desarrollo web",
        location: "Donostia-San Sebastián",
        about: [
            "Soy ingeniero informático y desarrollo aplicaciones web. Ahora estoy cursando un máster en inteligencia artificial (IA).",
            "Empecé desarrollando interfaces con React y Next.js y con el tiempo he pasado a trabajar en todas las capas de una aplicación. En la parte de servidor he creado interfaces de programación de aplicaciones (API, por sus siglas en inglés) de tipo REST con Django, FastAPI y Node, sobre bases de datos PostgreSQL y MySQL. También he configurado y mantenido servidores en Amazon Web Services (AWS) con Docker para desplegar aplicaciones en producción.",
            "En mi trabajo actual uso la IA a diario dentro del proceso de desarrollo, y el máster me sirve para entender cómo funcionan por dentro los modelos que utilizo. Mi objetivo es dedicarme a la ingeniería de IA."
        ],
        aboutHighlights: [
            "React y Next.js",
            "Django, FastAPI y Node",
            "Amazon Web Services (AWS)",
            "ingeniería de IA"
        ],
        avatarUrl: "/images/avatar.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Experiencia y formación",
        present: "Actualidad",
        legendWork: "Laboral",
        legendEducation: "Formación",
        items: [
            {
                type: "education",
                title: "Máster en Inteligencia Artificial",
                organization: "Universidad Internacional de La Rioja (UNIR)",
                dateStart: "junio de 2026",
                dateEnd: "mayo de 2027",
                description: "Máster en línea de 60 créditos ECTS. El programa incluye aprendizaje automático, aprendizaje profundo, procesamiento del lenguaje natural, visión por computador e ingeniería de IA. Lo curso para orientar mi carrera hacia el desarrollo de aplicaciones con IA.",
                highlights: ["aprendizaje automático", "aprendizaje profundo", "ingeniería de IA"]
            },
            {
                type: "work",
                title: "Desarrollador de software",
                organization: "Swap Energía",
                dateStart: "septiembre de 2026",
                dateEnd: "Actualidad",
                description: "Formo parte del equipo de desarrollo de Swap Energía, donde trabajo en un sistema de planificación de recursos empresariales (ERP, por sus siglas en inglés) de uso interno. Desarrollo con PHP y Vue en la aplicación y con Python, FastAPI y MySQL en los servicios. Participo en todas las fases de cada funcionalidad, desde el diseño de la arquitectura y de la interfaz hasta el desarrollo, las pruebas y el despliegue en producción. El equipo trabaja con la IA integrada en el proceso de desarrollo. Usamos Claude y flujos de trabajo automatizados que se encargan de parte de la revisión de código y de la corrección de los errores detectados en las pruebas.",
                highlights: ["todas las fases"],
                tags: ["PHP", "Vue", "Python", "FastAPI", "MySQL", "Claude"]
            },
            {
                type: "work",
                title: "Ingeniero de software júnior",
                organization: "Skootik",
                dateStart: "julio de 2025",
                dateEnd: "agosto de 2026",
                description: "He trabajado directamente con clientes, he preparado reuniones y he redactado sus actas. También he diseñado y desarrollado aplicaciones con Next.js, Node y Django REST, y he montado servidores en AWS con Docker para desplegarlas en producción.",
                highlights: ["directamente con clientes", "servidores en AWS"],
                examples: ["Oris Dental Scan es una herramienta de prediagnóstico dental con IA. En este proyecto he desarrollado la interfaz web, una parte de la lógica de servidor y la infraestructura en AWS.", "He participado en la renovación de la aplicación de gestión de un laboratorio de análisis, que se ha migrado desde un sistema heredado a tecnologías actuales. La aplicación realiza los cálculos necesarios para el análisis y la recogida de muestras, y gestiona entidades con relaciones complejas mediante una estructura modular y escalable. La nueva versión tiene un diseño mejorado y, en algunos casos, carga más del triple de rápido."],
                tags: ["Next.js", "TypeScript", "Node.js", "Django REST", "Docker", "AWS"]
            },
            {
                type: "work",
                title: "Desarrollador de software en prácticas",
                organization: "Alerion Technologies",
                dateStart: "julio de 2024",
                dateEnd: "agosto de 2024",
                description: "Prácticas de desarrollo de software para sistemas de drones autónomos. He trabajado con TypeScript, Python y Bash en el software de control de misión, en concreto en el procesamiento de telemetría, la verificación de la conectividad y la comunicación entre componentes mediante Robot Operating System (ROS). También he configurado la integración continua con Jenkins y he gestionado repositorios con Git y Bitbucket. El equipo seguía una metodología ágil organizada en iteraciones cortas.",
                highlights: ["drones autónomos"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Grado en Ingeniería Informática",
                organization: "Universidad del País Vasco (UPV/EHU)",
                dateStart: "septiembre de 2021",
                dateEnd: "febrero de 2026",
                description: "Formación en desarrollo de software, algoritmos y programación de sistemas, con proyectos de ingeniería en equipo. El trabajo de fin de grado consistió en una plataforma para planificar los recursos de un centro académico y obtuvo una calificación de 8,5.",
                highlights: ["planificar los recursos de un centro académico"]
            },
            {
                type: "education",
                title: "Bachillerato de Ciencias y Tecnología",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "septiembre de 2019",
                dateEnd: "junio de 2021",
                description: "Bachillerato en la modalidad de ciencias y tecnología."
            },
            {
                type: "work",
                title: "Camarero",
                organization: "Restaurante VaBene",
                dateStart: "marzo de 2022",
                dateEnd: "septiembre de 2022",
                description: "He atendido varias mesas a la vez en un restaurante con mucha afluencia, sobre todo en las horas punta. Fue un trabajo exigente en el que aprendí a organizarme y a mantener la calma con mucha carga de trabajo.",
                extra: true
            },
            {
                type: "work",
                title: "Camarero de catering",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "septiembre de 2022",
                dateEnd: "octubre de 2023",
                description: "He servido en eventos de catering, como galas, cenas de empresa y celebraciones privadas. Eran jornadas largas en las que había que mantener el ritmo y la atención a los invitados hasta el final.",
                extra: true
            },
            {
                type: "work",
                title: "Oficial de tercera en imprenta",
                organization: "MCC Graphics S. Coop",
                dateStart: "julio de 2023",
                dateEnd: "julio de 2023",
                description: "He trabajado un mes en la línea de producción de una cooperativa de impresión. Me ocupaba de manipular materiales, revisar la calidad de la impresión y ayudar en el mantenimiento de la línea. Fue mi primera experiencia en un entorno industrial.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Proyectos",
        sectionSubtitle: "Proyectos en producción que utilizan personas reales.",
        privateCodeBadge: "Código privado",
        privateCodeTooltip: "El código fuente es privado por políticas de empresa",
        viewDemo: "Ver la web",
        viewCode: "Ver código",
        items: [
            {
                title: "Oris Dental Scan",
                description: "Herramienta de prediagnóstico dental con IA pensada para el móvil. El usuario sube una foto y en pocos minutos recibe una valoración preliminar de su salud bucodental. He desarrollado la interfaz web con Next.js y TypeScript, una parte del servidor con Django y Python y la infraestructura en AWS. Está en producción y la usan pacientes reales.",
                note: "Financiado por la Unión Europea, el Gobierno de España y el Gobierno Vasco",
                tags: ["Next.js", "TypeScript", "Django", "Python", "IA"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Código fuente privado por políticas de empresa"
            },
            {
                title: "Próximos proyectos",
                description: "Estoy trabajando en nuevos proyectos, tanto para clientes como personales. Los publicaré aquí cuando estén terminados.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "EU",
        footerBuiltWith: "Hecho con React y Tailwind",
        downloadCV: "Descargar CV",
        birthdayMessage: "🎂 ¡Hoy es mi cumpleaños! Toma un poco de confeti",
        showExtra: "Otra experiencia laboral",
        hideExtra: "Ocultar otra experiencia laboral",
        extraExperienceTagline: "Trabajos que he compaginado con los estudios.",
        comingSoonBadge: "Próximamente",
        startingSoon: "Próximamente",
        inProgress: "En curso",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navExperience: "Experiencia",
        navCV: "CV"
    }
};
