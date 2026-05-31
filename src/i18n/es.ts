import { Translation } from './types';

export const es: Translation = {
    lang: 'es',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Ingeniero de Software · Desarrollador Fullstack",
        about: [
            "Soy ingeniero de software con carrera en Ingeniería Informática y actualmente estoy cursando un máster en Inteligencia Artificial en UNIR.",
            "Empecé en frontend y fui evolucionando hacia el desarrollo fullstack y cloud. Construyo aplicaciones web de principio a fin — desde la interfaz con React y Next.js hasta el diseño de la base de datos y el backend. Mi trabajo en backend ha sido principalmente APIs REST con Django y PostgreSQL, junto con el diseño de estructuras de datos que aguantan el crecimiento de la app. También he trabajado con AWS para desplegar y mantener aplicaciones en la nube.",
            "El máster es el siguiente paso. Quiero moverme hacia la ingeniería de IA y lo estoy usando para construir bases sólidas, no solo para conseguir un título. Me gusta responsabilizarme de las partes difíciles de un proyecto y entender cómo encaja todo, no solo la pieza que tengo delante."
        ],
        aboutHighlights: [
            "máster en Inteligencia Artificial",
            "React y Next.js",
            "Django y PostgreSQL",
            "AWS",
            "ingeniería de IA"
        ],
        avatarUrl: "https://github.com/ioritztubio.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Experiencia & Formación",
        present: "Actualidad",
        legendWork: "Laboral",
        legendEducation: "Formación",
        items: [
            {
                type: "education",
                title: "Máster en Inteligencia Artificial",
                organization: "UNIR — Universidad Internacional de La Rioja",
                dateStart: "Junio 2026",
                dateEnd: "Mayo 2027",
                description: "Máster online en Inteligencia Artificial. 60 ECTS que cubren machine learning, deep learning, NLP, visión por computador e ingeniería de IA. Orientado a construir una base sólida para evolucionar hacia el desarrollo de aplicaciones de IA aplicada.",
                highlights: ["machine learning", "deep learning", "ingeniería de IA"]
            },
            {
                type: "work",
                title: "Ingeniero de Software Junior",
                organization: "PKF Attest, Skootik — Departamento de IA",
                dateStart: "Julio 2025",
                dateEnd: "Actualidad",
                description: "Trabajo en PKF Attest — una de las 10 mejores firmas de servicios profesionales de España y miembro de la red PKF Global (más de 150 países, 480 oficinas). Concretamente en el Departamento de IA, que integra la propuesta de Skootik: convertir los datos de los clientes en ventaja competitiva sostenible mediante consultoría, estrategia y desarrollo de IA. Desarrollo y mantenimiento de aplicaciones fullstack en producción con Next.js, TypeScript, Django y Python, en un equipo ágil con arquitectura limpia, pipelines CI/CD mediante Jenkins y diseño de sistemas escalables.",
                highlights: ["10 mejores firmas", "Skootik", "Departamento de IA"],
                tags: ["Next.js", "TypeScript", "Django", "Python", "AWS"]
            },
            {
                type: "work",
                title: "Desarrollador de Software en Prácticas",
                organization: "Alerion Technologies",
                dateStart: "Julio 2024",
                dateEnd: "Agosto 2024",
                description: "Desarrollo de software para sistemas de drones autónomos. Soluciones en TypeScript, Python y Bash. Configuración de pipelines CI con Jenkins, gestión de repositorios con Git y Bitbucket, y trabajo en software de control de misión: procesamiento de telemetría, verificación de conectividad y comunicación middleware basada en ROS. Metodología Agile con sprints.",
                highlights: ["drones autónomos"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Grado en Ingeniería Informática",
                organization: "Universidad del País Vasco (UPV/EHU)",
                dateStart: "Septiembre 2021",
                dateEnd: "Febrero 2026",
                description: "Grado en Ingeniería Informática. Especialización en desarrollo de software, algoritmos, programación de sistemas y prácticas de ingeniería colaborativa. Proyecto de fin de carrera relacionado con la planificación de recursos de un centro académico.",
                highlights: ["Universidad del País Vasco (UPV/EHU)", "planificación de recursos"]
            },
            {
                type: "education",
                title: "Bachillerato — Ciencia y Tecnología",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "Septiembre 2019",
                dateEnd: "Junio 2021",
                description: "Bachillerato con especialidad en ciencias y tecnología."
            },
            {
                type: "work",
                title: "Camarero",
                organization: "Restaurante VaBene",
                dateStart: "Marzo 2022",
                dateEnd: "Septiembre 2022",
                description: "Trabajar de camarero no es glamuroso — es muy movido y exigente. Gestión simultánea de varias mesas, mantener la compostura bajo presión en los momentos de mayor afluencia y asegurar que cada cliente se fuera satisfecho. Aprendí pronto que rendir bajo presión es una habilidad que no se puede fingir y que ningún aula te enseña.",
                extra: true
            },
            {
                type: "work",
                title: "Camarero en Catering",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "Septiembre 2022",
                dateEnd: "Octubre 2023",
                description: "Atención al cliente y servicio de sala en eventos de catering: galas, cenas corporativas y celebraciones privadas. Trabajo en jornadas largas e intensas manteniendo una actitud profesional en todo momento.",
                extra: true
            },
            {
                type: "work",
                title: "Oficial de 3ª — Imprenta",
                organization: "MCC Graphics S. Coop",
                dateStart: "Julio 2023",
                dateEnd: "Julio 2023",
                description: "Un mes en la línea de producción de una cooperativa de impresión. Apoyo en tareas de manipulación de materiales, control de calidad de impresión y mantenimiento de la cadena de producción. Primer contacto con un entorno industrial real y trabajo en equipo con operarios experimentados.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Proyectos",
        sectionSubtitle: "Proyectos reales que han salido a producción, están disponibles públicamente y los usan personas reales — no side-projects que nunca salieron del localhost.",
        privateCodeBadge: "Código privado",
        privateCodeTooltip: "El código fuente es privado por políticas de empresa",
        viewDemo: "Ver en vivo",
        viewCode: "Ver código",
        items: [
            {
                title: "Oris Dental Scan",
                description: "Herramienta de prediagnóstico dental impulsada por IA y respaldada por doctores, pensada principalmente para móvil. Los usuarios suben una foto y reciben una evaluación preliminar de su salud bucodental en minutos, generada por un pipeline de IA personalizado. Colaboré tanto en el frontend (Next.js + TypeScript) como en el backend (Django + Python). La aplicación está activa, la usan pacientes reales y está financiada por la UE, el Gobierno de España y el Gobierno Vasco (Eusko Jaurlaritza). El código fuente es privado por políticas de empresa — pero puedes probar la aplicación en vivo.",
                tags: ["Next.js", "TypeScript", "Django", "Python", "IA"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Código fuente privado por políticas de empresa"
            },
            {
                title: "Algo se está cocinando",
                description: "Siempre hay algo en marcha. Más proyectos en construcción — trabajo para clientes, experimentos personales que empujan los límites de lo que sé. Nada se queda en el localhost para siempre.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "EU",
        footerBuiltWith: "Hecho con React & Tailwind",
        downloadCV: "Descargar CV",
        birthdayMessage: "🎂 ¡Hoy es mi cumpleaños! Toma un poco de confeti",
        showExtra: "Más allá del teclado",
        hideExtra: "Ocultar experiencia adicional",
        extraExperienceTagline: "Antes de la informática, hubo mesas llenas, eventos y turnos de producción.",
        comingSoonBadge: "Próximamente",
        startingSoon: "Próximamente",
        inProgress: "En curso",
        navAbout: "Sobre mí",
        navProjects: "Proyectos",
        navExperience: "Experiencia"
    }
};
