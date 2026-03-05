import { Translation } from './types';

export const es: Translation = {
    lang: 'es',
    profile: {
        name: "Ioritz Tubío Sánchez",
        subtitle: "Ingeniero de Software · Desarrollador Fullstack",
        about: [
            "Tengo {age} años, soy ingeniero informático del País Vasco y actualmente trabajo en el departamento de IA de la empresa PKF Attest, donde he desarrollado software que ya está en producción y lo usan personas reales.",
            "Me importa escribir código que funcione de verdad, sin dejar en el olvido la calidad para conseguir un sistema mantenible y colaborar con gente que me haga mejorar y aprender algo nuevo cada día.",
            "Me considero una persona inquieta, capaz de adaptarme a nuevas situaciones y aprender continuamente. Además del mundo tech, me apasionan el emprendimiento y me gustaría en algún momento de mi vida dedicarme a ello."
        ],
        avatarUrl: "https://github.com/ioritztubio.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritztubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Experiencia & Formación",
        present: "Actualidad",
        items: [
            {
                type: "work",
                title: "Ingeniero de Software Junior",
                organization: "PKF Attest — Departamento de IA",
                dateStart: "Julio 2025",
                dateEnd: "Actualidad",
                description: "Trabajo en PKF Attest — una de las diez mejores firmas de servicios profesionales de España y miembro de la red PKF Global (más de 150 países, 480 oficinas). Concretamente en el Departamento de IA, que integra la propuesta de Skootik: convertir los datos de los clientes en ventaja competitiva sostenible mediante consultoría, estrategia y desarrollo de IA. Desarrollo y mantenimiento de aplicaciones fullstack en producción con Next.js, TypeScript, Django y Python, en un equipo ágil con arquitectura limpia, pipelines CI/CD mediante Jenkins y diseño de sistemas escalables.",
                highlights: ["PKF Attest", "Skootik", "Departamento de IA"]
            },
            {
                type: "work",
                title: "Desarrollador de Software en Prácticas",
                organization: "Alerion Technologies",
                dateStart: "Julio 2024",
                dateEnd: "Agosto 2024",
                description: "Desarrollo de software para sistemas de drones autónomos. Soluciones en TypeScript, Python y Bash. Configuración de pipelines CI con Jenkins, gestión de repositorios con Git y Bitbucket, y trabajo en software de control de misión: procesamiento de telemítria, verificación de conectividad y comunicación middleware basada en ROS. Metodología Agile con sprints.",
                highlights: ["drones autónomos"]
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
                description: "Trabajar de camarero no es glamuroso — es rápido, exigente e implacable. Gestión simultánea de varias mesas, mantener la compostura bajo presión en los momentos de mayor afluencia y asegurar que cada cliente se fuera satisfecho. Aprendí pronto que rendir bajo presión operativa real es una habilidad que no se puede fingir y que ningún aula te enseña.",
                extra: true
            },
            {
                type: "work",
                title: "Camarero en Catering",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "Septiembre 2022",
                dateEnd: "Octubre 2023",
                description: "El catering en eventos es donde de verdad aprendes a rendir bajo restricciones reales: espacios desconocidos, horarios ajustíssimos, clientes exigentes y ningún margen para el error. Galas, cenas corporativas, celebraciones privadas — a menudo uno de los más jóvenes del equipo, pero siempre al mismo nivel que los veteranos. Demostré que la adaptabilidad y el profesionalismo no son rasgos de personalidad; son hábitos que construyes apareciendo y haciendo el trabajo.",
                extra: true
            },
            {
                type: "work",
                title: "Oficial de 3ª — Imprenta",
                organization: "MCC Graphics S. Coop",
                dateStart: "Julio 2023",
                dateEnd: "Julio 2023",
                description: "Un mes en la línea de producción de una cooperativa de impresión me enseñó cosas que ningún grado enseña: la disciplina de un entorno industrial real, la precisión que exige el control de calidad, y lo que significa trabajar codo a codo con personas que llevan décadas haciéndolo. Ningún trabajo era menor para mí — materiales, calidad de impresión y cadena de producción real desde el primer día.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Proyectos",
        sectionSubtitle: "Proyectos reales que han salido a producción y los usan personas reales — no side-projects que nunca salieron del localhost.",
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
        langToggle: "EN",
        footerBuiltWith: "Hecho con React & Tailwind",
        downloadCV: "Descargar CV",
        birthdayMessage: "🎂 ¡Hoy es mi cumpleaños! Toma un poco de confeti",
        showExtra: "Más allá del teclado",
        hideExtra: "Ocultar experiencia adicional",
        extraExperienceTagline: "Antes de la informática, hubo mesas llenas, eventos y turnos de producción.",
        comingSoonBadge: "Próximamente"
    }
};
