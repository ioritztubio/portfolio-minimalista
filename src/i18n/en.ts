import { Translation } from './types';

export const en: Translation = {
    lang: 'en',
    profile: {
        name: "Ioritz Tubío Sánchez",
        subtitle: "Software Engineer · Fullstack Developer",
        about: [
            "I'm a software engineer with a degree in Computer Engineering, and right now I'm doing a master's in Artificial Intelligence at UNIR.",
            "I started out in frontend and moved into full-stack and cloud work. I build web applications end to end — from the React and Next.js interface to the database design and the backend behind it. My backend work has mostly been REST APIs with Django and PostgreSQL, along with designing database structures that hold up as an app grows. I've also worked with AWS to get web apps deployed and running in the cloud.",
            "The master's is where I'm heading next. I want to move into AI engineering, and I'm using it to build real foundations rather than just collect a certificate. I like owning the hard parts of a project and figuring out how everything fits together, not just the piece in front of me."
        ],
        aboutHighlights: [
            "master's in Artificial Intelligence",
            "React and Next.js",
            "Django and PostgreSQL",
            "AWS",
            "AI engineering"
        ],
        avatarUrl: "https://github.com/ioritztubio.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Experience & Education",
        present: "Present",
        legendWork: "Work",
        legendEducation: "Education",
        items: [
            {
                type: "education",
                title: "Master's in Artificial Intelligence",
                organization: "UNIR — Universidad Internacional de La Rioja",
                dateStart: "June 2026",
                dateEnd: "May 2027",
                description: "Online master's in Artificial Intelligence. 60 ECTS covering machine learning, deep learning, NLP, computer vision and AI engineering. Building real foundations to transition into applied AI development.",
                highlights: ["machine learning", "deep learning", "AI engineering"]
            },
            {
                type: "work",
                title: "Junior Software Engineer",
                organization: "PKF Attest, Skootik — AI Department",
                dateStart: "July 2025",
                dateEnd: "Present",
                description: "Working at PKF Attest — one of Spain's top 10 professional services firms and member of the PKF Global network (150+ countries, 480 offices). Specifically in the AI department, which integrates the offering of Skootik: turning clients' data into sustainable competitive advantage through AI consulting, strategy and development. Building and maintaining production-grade fullstack applications with Next.js, TypeScript, Django and Python, within an agile team applying clean architecture, CI/CD pipelines with Jenkins and scalable system design.",
                highlights: ["Spain's top 10", "Skootik", "AI department"],
                tags: ["Next.js", "TypeScript", "Django", "Python", "AWS"]
            },
            {
                type: "work",
                title: "Software Developer Intern",
                organization: "Alerion Technologies",
                dateStart: "July 2024",
                dateEnd: "August 2024",
                description: "Developed software for autonomous drone systems. Built solutions in TypeScript, Python and Bash. Set up CI pipelines with Jenkins, managed repos with Git and Bitbucket, and worked on mission control software including telemetry processing, connectivity verification and ROS-based middleware communication. Sprint-based Agile methodology.",
                highlights: ["autonomous drone systems"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Computer Engineering",
                organization: "University of the Basque Country (UPV/EHU)",
                dateStart: "September 2021",
                dateEnd: "February 2026",
                description: "Degree in Computer Engineering. Focused on software development, algorithms, systems programming and collaborative engineering practices. Final dissertation related to the resource planning of an academic centre.",
                highlights: ["University of the Basque Country (UPV/EHU)", "resource planning"]
            },
            {
                type: "education",
                title: "High School Diploma — Science & Technology",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "September 2019",
                dateEnd: "June 2021",
                description: "Completed secondary education with a focus on science and technology subjects."
            },
            {
                type: "work",
                title: "Waiter",
                organization: "Restaurante VaBene",
                dateStart: "March 2022",
                dateEnd: "September 2022",
                description: "Waiting tables isn't glamorous — it's fast, demanding and unforgiving. Managed multiple tables simultaneously, kept composure under pressure during rush hours, and made sure every customer left satisfied. Learned early that performance under real operational stress is a skill you can't fake and nobody teaches you in a classroom.",
                extra: true
            },
            {
                type: "work",
                title: "Catering Waiter",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "September 2022",
                dateEnd: "October 2023",
                description: "Customer service and table service at catering events: galas, corporate dinners and private celebrations. Work during long, demanding shifts maintaining a professional attitude at all times.",
                extra: true
            },
            {
                type: "work",
                title: "3rd Class Worker — Print Shop",
                organization: "MCC Graphics S. Coop",
                dateStart: "July 2023",
                dateEnd: "July 2023",
                description: "One month on the production floor of a printing cooperative. Assisted with material handling, print quality control and production line maintenance. First exposure to a real industrial environment and teamwork with experienced operators.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Selected Works",
        sectionSubtitle: "Real projects that have shipped, are publicly available and are used by real people — not side projects that never left localhost.",
        privateCodeBadge: "Private code",
        privateCodeTooltip: "Source code is private due to company policies",
        viewDemo: "View live",
        viewCode: "View code",
        items: [
            {
                title: "Oris Dental Scan",
                description: "AI-powered dental pre-diagnosis tool, designed primarily for mobile. Users upload a photo and receive a preliminary oral health assessment in minutes, generated by a custom AI pipeline. I contributed to both the frontend (Next.js + TypeScript) and the backend (Django + Python). The app is live, used by real patients, and funded by the EU, the Spanish Government and the Basque Government (Eusko Jaurlaritza). Source code is private due to company policies — but you can try the live application.",
                tags: ["Next.js", "TypeScript", "Django", "Python", "AI"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Source code is private due to company policies"
            },
            {
                title: "Something's Brewing",
                description: "There's always something in progress. More projects are being built — some client work, some personal experiments pushing the boundaries of what I know. Nothing stays on localhost forever.",
                tags: ["TBD"],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "ES",
        footerBuiltWith: "Built with React & Tailwind",
        downloadCV: "Download CV",
        birthdayMessage: "🎂 Today is my birthday! Have some confetti on me!",
        showExtra: "Beyond the Keyboard",
        hideExtra: "Hide additional experience",
        extraExperienceTagline: "Before software, there were full dining rooms, event floors and production lines.",
        comingSoonBadge: "Coming soon",
        startingSoon: "Starting soon",
        inProgress: "In progress"
    }
};
