import { ProfileData, TimelineEvent, Project } from './types';

export const profileData: ProfileData = {
  name: "Alex Developer",
  subtitle: "Fullstack Engineer & UI Designer",
  about: [
    "I craft digital experiences with a focus on minimalism and performance.",
    "Passionate about building scalable applications and intuitive user interfaces.",
    "Based in San Francisco, working globally."
  ],
  avatarUrl: "https://picsum.photos/seed/portfolio-avatar/400/400", // Placeholder
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      label: "GitHub"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      platform: "Email",
      url: "mailto:hello@example.com",
      label: "Email"
    }
  ]
};

export const timelineData: TimelineEvent[] = [
  {
    type: "work",
    title: "Senior Frontend Engineer",
    organization: "Tech Corp Inc.",
    dateStart: "2023",
    dateEnd: "Present",
    description: "Leading the frontend migration to React 19. Improved performance by 40% and established a new design system used across 5 products."
  },
  {
    type: "work",
    title: "Fullstack Developer",
    organization: "Creative Agency",
    dateStart: "2021",
    dateEnd: "2023",
    description: "Developed custom e-commerce solutions using Next.js and Shopify. Collaborated directly with clients to define requirements and deliver pixel-perfect designs."
  },
  {
    type: "education",
    title: "Master in Computer Science",
    organization: "University of Technology",
    dateStart: "2019",
    dateEnd: "2021",
    description: "Specialized in Distributed Systems and Human-Computer Interaction. Thesis on accessible web interfaces for visually impaired users."
  },
  {
    type: "work",
    title: "Junior Web Developer",
    organization: "StartUp Hub",
    dateStart: "2018",
    dateEnd: "2019",
    description: "Built landing pages and internal tools using Vue.js and Firebase. Learned the fundamentals of agile development and CI/CD pipelines."
  },
  {
    type: "education",
    title: "Bachelor of Engineering",
    organization: "State University",
    dateStart: "2014",
    dateEnd: "2018",
    description: "Graduated with honors. Active member of the coding club and hackathon organizer."
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
