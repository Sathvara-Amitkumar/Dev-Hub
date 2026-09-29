import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-border px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <h2
            id="projects-heading"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Selected work across machine learning, deep learning, and API development.
          </p>
        </div>

        {featuredProject ? (
          <div className="mt-9">
            <ProjectCard project={featuredProject} delay={0.08} />
          </div>
        ) : null}

        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {otherProjects.map((project, index) => (
            <div key={project.title} className="h-full">
              <ProjectCard project={project} delay={index * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
