import { Translation } from './types';

export const fr: Translation = {
    lang: 'fr',
    profile: {
        name: "Ioritz Tubío Sánchez",
        subtitle: "Ingénieur Logiciel · Développeur Fullstack",
        about: [
            "J'ai {age} ans, ingénieur informaticien du Pays Basque — actuellement en poste au département IA de PKF Attest, où j'ai développé des logiciels en production utilisés par de vraies personnes chaque jour.",
            "Je tiens à écrire du code qui fonctionne vraiment, sans sacrifier la qualité — parce que les systèmes maintenables comptent. J'aime collaborer avec des personnes qui me poussent à progresser et apprendre quelque chose de nouveau chaque jour.",
            "Je me considère comme quelqu'un de curieux et déterminé, capable de m'adapter à de nouvelles situations et de grandir en permanence. Au-delà de la tech, l'entrepreneuriat me passionne et j'espère m'y consacrer à un moment de ma vie."
        ],
        avatarUrl: "https://github.com/ioritztubio.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritztubio", label: "LinkedIn" },
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
                type: "work",
                title: "Ingénieur Logiciel Junior",
                organization: "PKF Attest — Département IA",
                dateStart: "Juillet 2025",
                dateEnd: "Présent",
                description: "Je travaille chez PKF Attest — l'un des dix meilleurs cabinets de services professionnels d'Espagne et membre du réseau PKF Global (150+ pays, 480 bureaux). Plus précisément au sein du Département IA, qui intègre l'offre de Skootik : transformer les données des clients en avantage concurrentiel durable via le conseil, la stratégie et le développement en IA. Développement et maintenance d'applications fullstack en production avec Next.js, TypeScript, Django et Python, dans une équipe agile appliquant une architecture propre, des pipelines CI/CD avec Jenkins et une conception de systèmes évolutifs.",
                highlights: ["dix meilleurs cabinets", "Skootik", "Département IA"]
            },
            {
                type: "work",
                title: "Stagiaire Développeur Logiciel",
                organization: "Alerion Technologies",
                dateStart: "Juillet 2024",
                dateEnd: "Août 2024",
                description: "Développement de logiciels pour des systèmes de drones autonomes. Solutions en TypeScript, Python et Bash. Mise en place de pipelines CI avec Jenkins, gestion de dépôts avec Git et Bitbucket, et travail sur des logiciels de contrôle de mission : traitement de la télémétrie, vérification de la connectivité et communication middleware basée sur ROS. Méthodologie Agile en sprints.",
                highlights: ["drones autonomes"]
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
                description: "Le service traiteur lors d'événements, c'est là qu'on apprend vraiment à être à la hauteur sous des contraintes réelles : lieux inconnus, horaires serrés, clients exigeants et aucune marge pour l'erreur. Galas, dîners d'entreprise, fêtes privées — souvent l'un des plus jeunes de l'équipe, toujours au niveau des vétérans. J'ai prouvé que l'adaptabilité et le professionnalisme ne sont pas des traits de caractère innés ; ce sont des habitudes que l'on construit en étant présent et en faisant le travail.",
                extra: true
            },
            {
                type: "work",
                title: "Ouvrier 3e Classe — Imprimerie",
                organization: "MCC Graphics S. Coop",
                dateStart: "Juillet 2023",
                dateEnd: "Juillet 2023",
                description: "Un mois sur une ligne de production dans une coopérative d'impression enseigne des choses qu'aucun diplôme ne donne : la discipline d'un environnement industriel réel, la précision exigée par le contrôle qualité, et ce que signifie travailler coude à coude avec des gens qui font ça depuis des décennies. Aucune tâche ne me semblait indigne — gestion des matériaux, contrôle de la qualité d'impression et chaîne de production réelle dès le premier jour.",
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
        comingSoonBadge: "Bientôt"
    }
};
