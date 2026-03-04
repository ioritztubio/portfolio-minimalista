import { Translation } from './types';

export const en: Translation = {
    lang: 'en',
    profile: {
        name: "Ioritz Tubío Sánchez",
        subtitle: "Software Engineer · Fullstack Developer",
        about: [
            "I'm a {age}-year-old Computer Engineer from the Basque Country — currently working at PKF Attest's AI department, where I've built production software that real people use every day.",
            "I care about writing code that actually works, without sacrificing quality — because maintainable systems matter. I like collaborating with people who push me to improve and learning something new every single day.",
            "I consider myself a restless person, capable of adapting to new situations and continuously growing. Beyond tech, I'm passionate about entrepreneurship and hope to pursue it at some point in my life."
        ],
        avatarUrl: "https://github.com/ioritztubio.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritztubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Experience & Education",
        present: "Present",
        items: [
            {
                type: "work",
                title: "Junior Software Engineer",
                organization: "PKF Attest — AI Department",
                dateStart: "July 2025",
                dateEnd: "Present",
                description: "Working at PKF Attest — one of Spain's top 10 professional services firms and member of the PKF Global network (150+ countries, 480 offices). Specifically in the AI department, which integrates the offering of Skootik: turning clients' data into sustainable competitive advantage through AI consulting, strategy and development. Building and maintaining production-grade fullstack applications with Next.js, TypeScript, Django and Python, within an agile team applying clean architecture, CI/CD pipelines with Jenkins and scalable system design.",
                highlights: ["PKF Attest", "Skootik", "AI department"]
            },
            {
                type: "work",
                title: "Software Developer Intern",
                organization: "Alerion Technologies",
                dateStart: "July 2024",
                dateEnd: "August 2024",
                description: "Developed software for autonomous drone systems. Built solutions in TypeScript, Python and Bash. Set up CI pipelines with Jenkins, managed repos with Git and Bitbucket, and worked on mission control software including telemetry processing, connectivity verification and ROS-based middleware communication. Sprint-based Agile methodology.",
                highlights: ["autonomous drone systems"]
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
                description: "Catering at events is where you truly learn to perform under real-world constraints: unfamiliar venues, tight schedules, demanding clients and no margin for error. Served formal galas, corporate dinners and private celebrations — often one of the youngest on the team, always expected to deliver like a veteran. Proved that adaptability and professionalism aren't personality traits, they're habits you build by showing up and doing the work.",
                extra: true
            },
            {
                type: "work",
                title: "3rd Class Worker — Print Shop",
                organization: "MCC Graphics S. Coop",
                dateStart: "July 2023",
                dateEnd: "July 2023",
                description: "A month on a production floor in a printing cooperative teaches you things no degree does: the discipline of a real industrial environment, the precision required in quality control, and what it means to work shoulder-to-shoulder with people who've been doing this for decades. No task considered beneath me — handled materials, monitored print quality and contributed to a live production line from day one.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Selected Works",
        sectionSubtitle: "Real projects that have shipped and are used by real people — not side projects that never left localhost.",
        privateCodeBadge: "Private code",
        privateCodeTooltip: "Source code is private due to company policies",
        viewDemo: "View live",
        viewCode: "View code",
        items: [
            {
                title: "Oris Dental Scan",
                description: "AI-powered dental pre-diagnosis tool. Users upload a photo and receive a preliminary oral health assessment in minutes, generated by a custom AI pipeline. I contributed to both the frontend (Next.js + TypeScript) and the backend (Django + Python). The app is live, used by real patients, and funded by the EU, the Spanish Government and the Basque Government (Eusko Jaurlaritza). Source code is private due to company policies — but you can try the live application.",
                tags: ["Next.js", "TypeScript", "Django", "Python", "AI"],
                imageUrl: "https://picsum.photos/seed/oris-dental/800/600",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Source code is private due to company policies"
            },
            {
                title: "Something's Brewing",
                description: "There's always something in progress. More projects are being built — some client work, some personal experiments pushing the boundaries of what I know. No localhost forever.",
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
        comingSoonBadge: "Coming soon"
    }
};
