import { Translation } from './types';

export const fr: Translation = {
    lang: 'fr',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Ingénieur Logiciel · Développeur Fullstack",
        about: [
            "Je suis ingénieur logiciel diplômé en Ingénierie Informatique, et je prépare actuellement un master en Intelligence Artificielle à UNIR.",
            "J'ai commencé par le frontend avant d'évoluer vers le développement fullstack et cloud. Je construis des applications web de bout en bout — de l'interface React et Next.js jusqu'à la conception de la base de données et le backend. Mon travail backend a principalement consisté en des APIs REST avec Django et PostgreSQL, ainsi que la conception de structures de données robustes qui tiennent la route à mesure que l'application grandit. J'ai également travaillé avec AWS pour déployer et maintenir des applications dans le cloud.",
            "Le master représente ma prochaine étape. Je veux me diriger vers l'ingénierie de l'IA, et je l'utilise pour construire de vraies fondations plutôt que d'accumuler un diplôme. J'aime prendre en charge les parties difficiles d'un projet et comprendre comment tout s'articule, pas seulement la pièce qui me fait face."
        ],
        aboutHighlights: [
            "master en Intelligence Artificielle",
            "React et Next.js",
            "Django et PostgreSQL",
            "AWS",
            "ingénierie de l'IA"
        ],
        avatarUrl: "/images/avatar.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Expérience & Formation",
        present: "Présent",
        legendWork: "Emploi",
        legendEducation: "Formation",
        items: [
            {
                type: "education",
                title: "Master en Intelligence Artificielle",
                organization: "UNIR — Universidad Internacional de La Rioja",
                dateStart: "Juin 2026",
                dateEnd: "Mai 2027",
                description: "Master en ligne en Intelligence Artificielle. 60 ECTS couvrant le machine learning, le deep learning, le NLP, la vision par ordinateur et l'ingénierie de l'IA. Orienté vers la construction de fondations pratiques pour évoluer vers le développement d'applications IA.",
                highlights: ["machine learning", "deep learning", "ingénierie de l'IA"]
            },
            {
                type: "work",
                title: "Ingénieur Logiciel Junior",
                organization: "PKF Attest — Département IA",
                dateStart: "Juillet 2025",
                dateEnd: "Présent",
                description: "Je travaille chez PKF Attest — l'un des dix meilleurs cabinets de services professionnels d'Espagne et membre du réseau PKF Global (150+ pays, 480 bureaux). Plus précisément au sein du Département IA, qui intègre l'offre de Skootik : transformer les données des clients en avantage concurrentiel durable via le conseil, la stratégie et le développement en IA. Développement et maintenance d'applications fullstack en production avec Next.js, TypeScript, Django et Python, dans une équipe agile appliquant une architecture propre, des pipelines CI/CD avec Jenkins et une conception de systèmes évolutifs.",
                highlights: ["dix meilleurs cabinets", "Skootik", "Département IA"],
                tags: ["Next.js", "TypeScript", "Django", "Python", "AWS"]
            },
            {
                type: "work",
                title: "Stagiaire Développeur Logiciel",
                organization: "Alerion Technologies",
                dateStart: "Juillet 2024",
                dateEnd: "Août 2024",
                description: "Développement de logiciels pour des systèmes de drones autonomes. Solutions en TypeScript, Python et Bash. Mise en place de pipelines CI avec Jenkins, gestion de dépôts avec Git et Bitbucket, et travail sur des logiciels de contrôle de mission : traitement de la télémétrie, vérification de la connectivité et communication middleware basée sur ROS. Méthodologie Agile en sprints.",
                highlights: ["drones autonomes"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Licence en Génie Informatique",
                organization: "Université du Pays Basque (UPV/EHU)",
                dateStart: "Septembre 2021",
                dateEnd: "Février 2026",
                description: "Licence en Génie Informatique. Spécialisation en développement logiciel, algorithmique, programmation système et pratiques d'ingénierie collaborative. Mémoire de fin d'études portant sur la planification des ressources d'un établissement académique.",
                highlights: ["Université du Pays Basque (UPV/EHU)", "planification des ressources"]
            },
            {
                type: "education",
                title: "Baccalauréat — Sciences et Technologie",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "Septembre 2019",
                dateEnd: "Juin 2021",
                description: "Baccalauréat avec spécialité en sciences et technologie."
            },
            {
                type: "work",
                title: "Serveur",
                organization: "Restaurante VaBene",
                dateStart: "Mars 2022",
                dateEnd: "Septembre 2022",
                description: "Travailler comme serveur n'a rien de glamour — c'est rapide, exigeant et implacable. Gestion simultanée de plusieurs tables, garder son calme sous pression aux moments les plus intenses, et s'assurer que chaque client repart satisfait. J'ai compris tôt que la performance sous pression opérationnelle réelle est une compétence qu'on ne peut pas simuler et qu'aucune salle de classe n'enseigne.",
                extra: true
            },
            {
                type: "work",
                title: "Serveur en Traiteur",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "Septembre 2022",
                dateEnd: "Octobre 2023",
                description: "Accueil et service en salle lors d'événements traiteur : galas, dîners d'entreprise et célébrations privées. Travail lors de journées longues et intenses en maintenant une attitude professionnelle en toutes circonstances.",
                extra: true
            },
            {
                type: "work",
                title: "Ouvrier 3e Classe — Imprimerie",
                organization: "MCC Graphics S. Coop",
                dateStart: "Juillet 2023",
                dateEnd: "Juillet 2023",
                description: "Un mois sur la ligne de production d'une coopérative d'impression. Assistance à la manutention des matériaux, au contrôle qualité d'impression et à la maintenance de la chaîne de production. Première expérience dans un environnement industriel réel et travail en équipe avec des opérateurs expérimentés.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Projets",
        sectionSubtitle: "Des projets publics réels en production, utilisés par de vraies personnes — pas des side-projects qui n'ont jamais quitté localhost.",
        privateCodeBadge: "Code privé",
        privateCodeTooltip: "Le code source est privé en raison des politiques de l'entreprise",
        viewDemo: "Voir en direct",
        viewCode: "Voir le code",
        items: [
            {
                title: "Oris Dental Scan",
                description: "Outil de pré-diagnostic dentaire propulsé par l'IA, conçu principalement pour mobile. Les utilisateurs téléchargent une photo et reçoivent en quelques minutes une évaluation préliminaire de leur santé bucco-dentaire, générée par un pipeline IA personnalisé. J'ai contribué au frontend (Next.js + TypeScript) et au backend (Django + Python). L'application est en ligne, utilisée par de vrais patients, et financée par l'UE, le Gouvernement espagnol et le Gouvernement basque (Eusko Jaurlaritza). Le code source est privé — mais vous pouvez essayer l'application en direct.",
                tags: ["Next.js", "TypeScript", "Django", "Python", "IA"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Code source privé en raison des politiques de l'entreprise"
            },
            {
                title: "Quelque chose se prépare",
                description: "Il y a toujours quelque chose en cours. D'autres projets en construction — du travail client, des expériences personnelles qui repoussent les limites de ce que je maîtrise. Rien ne reste sur localhost pour toujours.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "EN",
        footerBuiltWith: "Fait avec React & Tailwind",
        downloadCV: "Télécharger CV",
        birthdayMessage: "🎂 C'est mon anniversaire aujourd'hui ! Prenez des confettis !",
        showExtra: "Au-delà du clavier",
        hideExtra: "Masquer l'expérience supplémentaire",
        extraExperienceTagline: "Avant l'informatique, il y avait des salles pleines, des événements et des chaînes de production.",
        comingSoonBadge: "Bientôt",
        startingSoon: "Bientôt",
        inProgress: "En cours",
        navAbout: "À propos",
        navProjects: "Projets",
        navExperience: "Expérience",
        navCV: "CV"
    }
};
