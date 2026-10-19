import { Translation } from './types';

export const en: Translation = {
    lang: 'en',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Software engineer focused on web development",
        location: "Donostia-San Sebastián",
        about: [
            "I'm a computer engineer and I build web applications. I'm currently studying for a master's degree in artificial intelligence (AI).",
            "I started out building interfaces with React and Next.js, and over time I've moved on to working across every layer of an application. On the server side I've built REST APIs with Django, FastAPI and Node, on PostgreSQL and MySQL databases. I've also set up and maintained servers on Amazon Web Services (AWS) with Docker to deploy applications to production.",
            "In my current job I use AI every day as part of the development process, and the master's helps me understand how the models I use work internally. My goal is to work in AI engineering."
        ],
        aboutHighlights: [
            "React and Next.js",
            "Django, FastAPI and Node",
            "Amazon Web Services (AWS)",
            "AI engineering"
        ],
        avatarUrl: "/images/avatar.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Experience and education",
        present: "Present",
        legendWork: "Work",
        legendEducation: "Education",
        items: [
            {
                type: "education",
                title: "Master's in Artificial Intelligence",
                organization: "Universidad Internacional de La Rioja (UNIR)",
                dateStart: "June 2026",
                dateEnd: "May 2027",
                description: "Online master's degree worth 60 ECTS credits. The programme covers machine learning, deep learning, natural language processing, computer vision and AI engineering.\n\nI'm taking it to steer my career towards building AI applications.",
                highlights: ["machine learning", "deep learning", "AI engineering"]
            },
            {
                type: "work",
                title: "Software Developer",
                organization: "Swap Energía",
                dateStart: "September 2026",
                dateEnd: "Present",
                description: "I'm part of the development team at Swap Energía, where I work on an enterprise resource planning (ERP) system for internal use. I develop with PHP and Vue on the application and with Python, FastAPI and MySQL on the services.\n\nFor each feature I handle the architecture and interface design, the development and the testing. Deployment to production is automated.\n\nThe team works with AI built into the development process. We use Claude and automated workflows that handle part of the code review and of fixing the errors found during testing.",
                tags: ["PHP", "Vue", "Python", "FastAPI", "MySQL", "Claude"]
            },
            {
                type: "work",
                title: "Junior Software Engineer",
                organization: "Skootik",
                dateStart: "July 2025",
                dateEnd: "August 2026",
                description: "I worked directly with clients, prepared meetings and wrote up their minutes. On the projects I took part in, I gathered requirements with the client and turned them into technical specifications.\n\nI then presented progress in follow-up meetings and handled the scope changes that came up.\n\nI also designed and developed applications with Next.js, Node and Django REST, and set up servers on AWS with Docker to deploy them to production. Once they were live, I resolved incidents in direct contact with the users.",
                highlights: ["directly with clients", "servers on AWS"],
                examples: [
                {
                    title: "Oris Dental Scan",
                    subtitle: "AI dental pre-diagnosis",
                    body: ["Users upload a photo and within minutes receive a preliminary assessment of their oral health.", "I built the web interface, part of the server logic and the AWS infrastructure."],
                    tags: ["Next.js", "TypeScript", "Django", "AWS"]
                },
                {
                    title: "Laboratory management application",
                    subtitle: "Renewal of a legacy system",
                    body: ["The application performs the calculations needed to analyse and collect samples, and manages entities with complex relationships through a modular, scalable structure. I took part in its migration from a legacy system to current technologies.", "To fit it to the laboratory's daily work, I interviewed the staff, observed them while they used the application and proposed changes based on the problems they ran into. I agreed the goals with management and validated the workflows with the users.", "The new version has an improved design and, in some cases, loads more than three times faster."]
                }
                ],
                tags: ["Next.js", "TypeScript", "Node.js", "Django REST", "Docker", "AWS"]
            },
            {
                type: "work",
                title: "Software Developer Intern",
                organization: "Alerion Technologies",
                dateStart: "July 2024",
                dateEnd: "August 2024",
                description: "Internship developing software for autonomous drone systems. I worked with TypeScript, Python and Bash on the mission control software, specifically on telemetry processing, connectivity checks and communication between components through Robot Operating System (ROS).\n\nI also set up continuous integration with Jenkins and managed repositories with Git and Bitbucket. The team followed an agile methodology organised in short iterations.",
                highlights: ["autonomous drone systems"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Bachelor's in Computer Engineering",
                organization: "University of the Basque Country (UPV/EHU)",
                dateStart: "September 2021",
                dateEnd: "February 2026",
                description: "Training in software development, algorithms and systems programming, with team-based engineering projects. My final degree project was a platform for planning the resources of an academic centre, graded 8.5 out of 10.",
                highlights: ["planning the resources of an academic centre"]
            },
            {
                type: "education",
                title: "Baccalaureate in Science and Technology",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "September 2019",
                dateEnd: "June 2021",
                description: "Baccalaureate in the science and technology track."
            },
            {
                type: "work",
                title: "Waiter",
                organization: "Restaurante VaBene",
                dateStart: "March 2022",
                dateEnd: "September 2022",
                description: "I served several tables at once in a busy restaurant, especially during peak hours. It was demanding work that taught me to stay organised and calm under a heavy workload.",
                extra: true
            },
            {
                type: "work",
                title: "Catering Waiter",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "September 2022",
                dateEnd: "October 2023",
                description: "I served at catering events such as galas, company dinners and private celebrations. The shifts were long, and the pace and the attention to guests had to hold until the end.",
                extra: true
            },
            {
                type: "work",
                title: "Print Shop Worker",
                organization: "MCC Graphics S. Coop",
                dateStart: "July 2023",
                dateEnd: "July 2023",
                description: "I spent a month on the production line of a printing cooperative, handling materials, checking print quality and helping to maintain the line. It was my first experience in an industrial environment.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Projects",
        sectionSubtitle: "Projects in production, used by real people.",
        privateCodeBadge: "Private code",
        privateCodeTooltip: "Source code is private due to company policies",
        viewDemo: "Visit site",
        viewCode: "View code",
        items: [
            {
                title: "Oris Dental Scan",
                description: "AI dental pre-diagnosis tool designed for mobile. Users upload a photo and within minutes receive a preliminary assessment of their oral health.\n\nI built the web interface with Next.js and TypeScript, part of the server with Django and Python, and the AWS infrastructure. It is in production and used by real patients.",
                note: "Funded by the European Union, the Spanish Government and the Basque Government",
                tags: ["Next.js", "TypeScript", "Django", "Python", "AI"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Source code is private due to company policies"
            },
            {
                title: "Upcoming projects",
                description: "I'm working on new projects, both for clients and of my own. I'll publish them here once they're finished.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "ES",
        footerBuiltWith: "Built with React and Tailwind",
        downloadCV: "Download CV",
        birthdayMessage: "🎂 Today is my birthday! Have some confetti on me!",
        showExtra: "Other work experience",
        hideExtra: "Hide other work experience",
        extraExperienceTagline: "Jobs I held alongside my studies.",
        comingSoonBadge: "Coming soon",
        startingSoon: "Starting soon",
        inProgress: "In progress",
        navAbout: "About",
        navProjects: "Projects",
        navExperience: "Experience",
        navCV: "CV",
        examplesShow: "Learn more",
        examplesHide: "Show less"
    }
};
