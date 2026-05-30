export interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  count?: number;
  data: T;
  message?: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
