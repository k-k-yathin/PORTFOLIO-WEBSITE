import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glow-border group glass-card flex h-full flex-col overflow-hidden"
  >
    <div className="relative aspect-video overflow-hidden bg-dark-700">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 to-cyan-glow/10">
          <span className="font-mono text-4xl font-bold text-white/20">{project.title[0]}</span>
        </div>
      )}
      {project.featured && (
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-semibold text-white">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
    </div>

    <div className="relative z-10 flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-4">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-dark-700 px-2.5 py-1 font-mono text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-accent/50 hover:text-white"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent-light transition-colors hover:bg-accent/20"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);
