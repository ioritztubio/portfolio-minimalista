import { Translation } from './types';

export const fr: Translation = {
    lang: 'fr',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Ingénieur logiciel spécialisé en développement web",
        location: "Donostia-San Sebastián",
        about: [
            "Je suis ingénieur informaticien et je développe des applications web. Je suis actuellement un master en intelligence artificielle (IA).",
            "J'ai commencé par développer des interfaces avec React et Next.js, puis j'ai progressivement travaillé sur toutes les couches d'une application. Côté serveur, j'ai créé des API REST avec Django, FastAPI et Node, sur des bases de données PostgreSQL et MySQL. J'ai aussi configuré et maintenu des serveurs sur Amazon Web Services (AWS) avec Docker pour déployer des applications en production.",
            "Dans mon poste actuel, j'utilise l'IA tous les jours dans le processus de développement, et le master m'aide à comprendre comment fonctionnent les modèles que j'utilise. Mon objectif est de travailler dans l'ingénierie de l'IA."
        ],
        aboutHighlights: [
            "React et Next.js",
            "Django, FastAPI et Node",
            "Amazon Web Services (AWS)",
            "l'ingénierie de l'IA"
        ],
        avatarUrl: "/images/avatar.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Expérience et formation",
        present: "Présent",
        legendWork: "Emploi",
        legendEducation: "Formation",
        items: [
            {
                type: "education",
                title: "Master en intelligence artificielle",
                organization: "Universidad Internacional de La Rioja (UNIR)",
                dateStart: "juin 2026",
                dateEnd: "mai 2027",
                description: "Master en ligne de 60 crédits ECTS. Le programme couvre l'apprentissage automatique, l'apprentissage profond, le traitement automatique du langage naturel, la vision par ordinateur et l'ingénierie de l'IA.\n\nJe le suis pour orienter ma carrière vers le développement d'applications d'IA.",
                highlights: ["l'apprentissage automatique", "l'apprentissage profond", "l'ingénierie de l'IA"]
            },
            {
                type: "work",
                title: "Développeur logiciel",
                organization: "Swap Energía",
                dateStart: "septembre 2026",
                dateEnd: "Présent",
                description: "Je fais partie de l'équipe de développement de Swap Energía, où je travaille sur un progiciel de gestion intégré (ERP) à usage interne. Je développe avec PHP et Vue côté application, et avec Python, FastAPI et MySQL côté services.\n\nPour chaque fonctionnalité, je m'occupe de la conception de l'architecture et de l'interface, du développement et des tests. Le déploiement en production est automatisé.\n\nL'équipe intègre l'IA dans le processus de développement. Nous utilisons Claude et des flux de travail automatisés qui prennent en charge une partie de la revue de code et de la correction des erreurs détectées lors des tests.",
                tags: ["PHP", "Vue", "Python", "FastAPI", "MySQL", "Claude"]
            },
            {
                type: "work",
                title: "Ingénieur logiciel junior",
                organization: "Skootik",
                dateStart: "juillet 2025",
                dateEnd: "août 2026",
                description: "J'ai travaillé directement avec des clients, préparé des réunions et rédigé leurs comptes rendus. Sur les projets auxquels j'ai participé, j'ai recueilli les besoins avec le client et je les ai traduits en spécifications techniques.\n\nJ'ai ensuite présenté l'avancement lors des réunions de suivi et géré les changements de périmètre.\n\nJ'ai aussi conçu et développé des applications avec Next.js, Node et Django REST, et mis en place des serveurs sur AWS avec Docker pour les déployer en production. Une fois en production, j'ai résolu les incidents en contact direct avec les utilisateurs.",
                highlights: ["directement avec des clients", "serveurs sur AWS"],
                examples: [
                {
                    title: "Oris Dental Scan",
                    subtitle: "Prédiagnostic dentaire par IA",
                    body: ["L'utilisateur envoie une photo et reçoit en quelques minutes une évaluation préliminaire de sa santé bucco-dentaire.", "J'ai développé l'interface web, une partie de la logique serveur et l'infrastructure sur AWS."],
                    tags: ["Next.js", "TypeScript", "Django", "AWS"]
                },
                {
                    title: "Application de gestion de laboratoire",
                    subtitle: "Refonte d'un système ancien",
                    body: ["L'application effectue les calculs nécessaires à l'analyse et au prélèvement des échantillons, et gère des entités aux relations complexes grâce à une structure modulaire et évolutive. J'ai participé à sa migration d'un système ancien vers des technologies actuelles.", "Pour l'adapter au travail quotidien du laboratoire, j'ai mené des entretiens avec le personnel, je l'ai observé pendant qu'il utilisait l'application et j'ai proposé des changements à partir des problèmes rencontrés. J'ai défini les objectifs avec la direction et validé les flux de travail avec les utilisateurs.", "La nouvelle version a un design amélioré et, dans certains cas, elle charge plus de trois fois plus vite."]
                }
                ],
                tags: ["Next.js", "TypeScript", "Node.js", "Django REST", "Docker", "AWS"]
            },
            {
                type: "work",
                title: "Développeur logiciel stagiaire",
                organization: "Alerion Technologies",
                dateStart: "juillet 2024",
                dateEnd: "août 2024",
                description: "Stage de développement logiciel pour des systèmes de drones autonomes. J'ai travaillé avec TypeScript, Python et Bash sur le logiciel de contrôle de mission, plus précisément sur le traitement de la télémétrie, la vérification de la connectivité et la communication entre composants via Robot Operating System (ROS).\n\nJ'ai aussi configuré l'intégration continue avec Jenkins et géré des dépôts avec Git et Bitbucket. L'équipe suivait une méthode agile organisée en itérations courtes.",
                highlights: ["drones autonomes"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Licence en génie informatique",
                organization: "Université du Pays basque (UPV/EHU)",
                dateStart: "septembre 2021",
                dateEnd: "février 2026",
                description: "Formation en développement logiciel, en algorithmique et en programmation système, avec des projets d'ingénierie en équipe. Mon projet de fin d'études était une plateforme de planification des ressources d'un établissement d'enseignement, notée 8,5 sur 10.",
                highlights: ["planification des ressources d'un établissement d'enseignement"]
            },
            {
                type: "education",
                title: "Baccalauréat sciences et technologie",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "septembre 2019",
                dateEnd: "juin 2021",
                description: "Baccalauréat dans la filière sciences et technologie."
            },
            {
                type: "work",
                title: "Serveur",
                organization: "Restaurante VaBene",
                dateStart: "mars 2022",
                dateEnd: "septembre 2022",
                description: "J'ai servi plusieurs tables à la fois dans un restaurant très fréquenté, surtout aux heures de pointe. C'était un travail exigeant qui m'a appris à rester organisé et calme face à une forte charge de travail.",
                extra: true
            },
            {
                type: "work",
                title: "Serveur traiteur",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "septembre 2022",
                dateEnd: "octobre 2023",
                description: "J'ai fait le service lors d'événements traiteur, comme des galas, des dîners d'entreprise et des fêtes privées. Les journées étaient longues et il fallait tenir le rythme et l'attention aux invités jusqu'au bout.",
                extra: true
            },
            {
                type: "work",
                title: "Ouvrier en imprimerie",
                organization: "MCC Graphics S. Coop",
                dateStart: "juillet 2023",
                dateEnd: "juillet 2023",
                description: "J'ai passé un mois sur la ligne de production d'une coopérative d'impression, à manipuler des matériaux, à contrôler la qualité d'impression et à aider à l'entretien de la ligne. C'était ma première expérience en milieu industriel.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Projets",
        sectionSubtitle: "Des projets en production, utilisés par de vraies personnes.",
        privateCodeBadge: "Code privé",
        privateCodeTooltip: "Le code source est privé en raison des politiques de l'entreprise",
        viewDemo: "Voir le site",
        viewCode: "Voir le code",
        items: [
            {
                title: "Oris Dental Scan",
                description: "Outil de prédiagnostic dentaire par IA conçu pour le mobile. L'utilisateur envoie une photo et reçoit en quelques minutes une évaluation préliminaire de sa santé bucco-dentaire.\n\nJ'ai développé l'interface web avec Next.js et TypeScript, une partie du serveur avec Django et Python, ainsi que l'infrastructure sur AWS. Il est en production et utilisé par de vrais patients.",
                note: "Financé par l'Union européenne, le gouvernement espagnol et le gouvernement basque",
                tags: ["Next.js", "TypeScript", "Django", "Python", "IA"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Code source privé en raison des politiques de l'entreprise"
            },
            {
                title: "Projets à venir",
                description: "Je travaille sur de nouveaux projets, pour des clients comme personnels. Je les publierai ici une fois terminés.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "EN",
        footerBuiltWith: "Fait avec React et Tailwind",
        downloadCV: "Télécharger le CV",
        birthdayMessage: "🎂 C'est mon anniversaire aujourd'hui ! Prenez des confettis !",
        showExtra: "Autres expériences professionnelles",
        hideExtra: "Masquer les autres expériences",
        extraExperienceTagline: "Des emplois exercés en parallèle de mes études.",
        comingSoonBadge: "Bientôt",
        startingSoon: "Bientôt",
        inProgress: "En cours",
        navAbout: "À propos",
        navProjects: "Projets",
        navExperience: "Expérience",
        navCV: "CV",
        examplesShow: "En savoir plus",
        examplesHide: "Afficher moins"
    }
};
