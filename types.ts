
export interface Project {
  id: string;
  title: string;
  description: string;
  problemStatement: string;
  impact: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Languages' | 'Frontend' | 'Backend' | 'AI/ML' | 'Cloud/DevOps';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

export interface Reflection {
  semester: string;
  focus: string;
  milestones: string[];
  growth: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link: string;
  badgeUrl?: string;
}

export interface Certificate {
  title: string;
  platform: string;
  date: string;
  skills: string[];
  link: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  conference?: string;
  authors: string;
  publicationDate: string;
  doi: string;
  abstract: string;
  keywords: string[];
  impact: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  github: string;
  linkedin: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  reflections: Reflection[];
  publications?: Publication[];
  certifications: Certification[];
  certificates: Certificate[];
}
