export type TimelineType = 'work' | 'education';

export interface TimelineEvent {
  type: TimelineType;
  title: string;
  organization: string;
  dateStart: string;
  dateEnd: string; // 'Present' or date
  description: string;
  highlights?: string[]; // keywords to highlight in the description
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
  about: string[];
  avatarUrl: string;
  socials: SocialLink[];
}
