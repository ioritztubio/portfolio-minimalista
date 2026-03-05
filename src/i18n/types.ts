import { ProfileData, TimelineEvent, Project } from '../data/types';

export type Lang = 'en' | 'es' | 'eu' | 'fr';

export interface Translation {
    lang: Lang;
    profile: ProfileData;
    timeline: {
        sectionTitle: string;
        present: string;
        legendWork: string;
        legendEducation: string;
        items: TimelineEvent[];
    };
    projects: {
        sectionTitle: string;
        sectionSubtitle: string;
        privateCodeBadge: string;
        privateCodeTooltip: string;
        viewDemo: string;
        viewCode: string;
        items: Project[];
    };
    ui: {
        langToggle: string;
        footerBuiltWith: string;
        downloadCV: string;
        birthdayMessage: string;
        showExtra: string;
        hideExtra: string;
        extraExperienceTagline: string;
        comingSoonBadge: string;
    };
}
