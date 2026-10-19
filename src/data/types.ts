export type TimelineType = 'work' | 'education';

// One project behind a timeline entry, shown as its own card under "Learn more".
export interface TimelineExample {
  title: string;
  subtitle: string; // what the project is, in a few words
  body: string[]; // paragraphs: what I did
  tags?: string[];
}

export interface TimelineEvent {
  type: TimelineType;
  title: string;
  organization: string;
  dateStart: string;
  dateEnd: string; // 'Present' or date
  description: string; // blank line (\n\n) separates paragraphs
  highlights?: string[]; // keywords to highlight in the description
  examples?: TimelineExample[]; // concrete projects, folded under the description
  tags?: string[]; // tech/skill badge pills shown below description
  extra?: boolean; // marks non-tech experience (hidden by default)
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  codePrivate?: boolean;
  codePrivateNote?: string;
  note?: string; // one short supporting line, e.g. funding
  comingSoon?: boolean;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email';
  url: string;
  label: string;
}

export interface ProfileData {
  name: string;
  subtitle: string;
  location?: string;
  about: string[];
  aboutHighlights?: string[];
  avatarUrl: string;
  socials: SocialLink[];
}
