import { SectionHeading } from '@/components/ui/SectionHeading';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { useProjects } from '@/hooks/useProjects';

export const Projects = () => {
  const { projects, loading, error, refetch } = useProjects();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="Real projects built with modern stacks—from local-first apps to full-stack platforms"
        />

        {loading && <LoadingSpinner message="Fetching projects..." />}

        {error && !loading && <ErrorMessage message={error} onRetry={refetch} />}

        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-gray-500">No projects yet. Check back soon!</p>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
