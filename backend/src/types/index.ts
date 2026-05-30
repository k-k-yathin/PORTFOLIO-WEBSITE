import { Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectInput {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
}
