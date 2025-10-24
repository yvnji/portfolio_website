export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
}

export interface About {
  content: string;
}

export interface Skills {
  categories: SkillCategory[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Work {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  projects: Project[];
  imageUrls?: string[];
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  imageUrls?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  company?: string;
}

export interface SocialMedia {
  id: string;
  name: string;
  url: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: About;
  skills: Skills;
  work: Work[];
  projects: Project[];
  socialMedia: SocialMedia[];
}
