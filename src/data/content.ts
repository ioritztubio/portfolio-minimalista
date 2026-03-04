import { ProfileData, TimelineEvent, Project } from './types';

export const profileData: ProfileData = {
  name: "Ioritz Tubío Sánchez",
  subtitle: "Junior Software Engineer & Fullstack Developer",
  about: [
    "Final-year Computer Engineering student with hands-on experience in software development and autonomous drone technology.",
    "Currently working as a Junior Software Engineer, focused on writing clean, maintainable code and collaborating in high-performance teams.",
    "Passionate about growing as a Fullstack Developer while continuously expanding my knowledge across different areas of computer science."
  ],
  avatarUrl: "https://picsum.photos/seed/portfolio-avatar/400/400", // Placeholder
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/ioritztubio",
      label: "GitHub"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/ioritztubio",
      label: "LinkedIn"
    },
    {
      platform: "Email",
      url: "mailto:ioritztubio1@gmail.com",
      label: "Email"
    }
  ]
};

export const timelineData: TimelineEvent[] = [
  {
    type: "work",
    title: "Junior Software Engineer",
    organization: "SKOOTIK (PKF ATTEST AI Department)",
    dateStart: "July 2025",
    dateEnd: "Present",
    description: "Working as a Junior Software Engineer within the AI Department. Contributing to software development projects focused on scalable systems, applying best practices in clean architecture, version control and collaborative workflows."
  },
  {
    type: "work",
    title: "Software Developer Intern",
    organization: "Alerion Technologies",
    dateStart: "July 2024",
    dateEnd: "August 2024",
    description: "Developed software solutions for autonomous drone systems. Worked with TypeScript, Python and Bash. Implemented CI pipelines with Jenkins, managed repositories with Git and Bitbucket, and contributed to mission control software including telemetry processing, connectivity verification and ROS-based middleware communication. Followed Agile methodology with sprint-based development."
  },
  {
    type: "education",
    title: "Computer Engineering Degree",
    organization: "University of the Basque Country (UPV/EHU)",
    dateStart: "September 2021",
    dateEnd: "Present",
    description: "Final-year student in Computer Engineering. Focused on software development, problem solving and collaborative engineering practices."
  },
  {
    type: "education",
    title: "High School Diploma",
    organization: "Pasaia Lezo Lizeoa",
    dateStart: "September 2019",
    dateEnd: "June 2021",
    description: "Completed secondary education with a focus on science and technology."
  }
];

export const projectsData: Project[] = [
  {
    title: "Neon Dashboard",
    description: "A high-performance analytics dashboard featuring real-time data visualization and a customizable widget system. Built with performance and accessibility in mind.",
    tags: ["React", "D3.js", "TypeScript", "Tailwind"],
    imageUrl: "https://picsum.photos/seed/neon-dashboard/800/600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com"
  },
  {
    title: "Astro Commerce",
    description: "A headless e-commerce starter kit designed for speed. Integrates with Shopify and Stripe for seamless checkout experiences.",
    tags: ["Astro", "Shopify API", "Stripe", "Vercel"],
    imageUrl: "https://picsum.photos/seed/astro-commerce/800/600",
    repoUrl: "https://github.com"
  },
  {
    title: "Zen Task Manager",
    description: "A minimalist task management application focusing on deep work. Features include Pomodoro timer, distraction blocking, and ambient sounds.",
    tags: ["Vue.js", "Firebase", "PWA", "State Management"],
    imageUrl: "https://picsum.photos/seed/zen-task/800/600",
    demoUrl: "https://example.com"
  },
  {
    title: "AI Image Generator",
    description: "An interface for generating images using Stable Diffusion. Includes a prompt builder helper and gallery of community generations.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma"],
    imageUrl: "https://picsum.photos/seed/ai-image/800/600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com"
  }
];
