"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./SocialIcons";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion() ?? false;

  if (project.featured) {
    return (
      <FeaturedProjectCard
        project={project}
        delay={delay}
        reduceMotion={reduceMotion}
      />
    );
  }

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group flex h-full flex-col rounded-md border border-border bg-surface/50 p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/50 hover:bg-surface/80 hover:shadow-[0_14px_38px_rgba(234,88,12,0.08)] motion-reduce:transition-none sm:p-6"
    >
      {project.image ? <ProjectImage project={project} /> : null}
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

      <ul className="mt-5 space-y-2.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2.5 text-sm leading-5 text-foreground/90"
          >
            <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border pt-4">
        <p className="text-xs font-medium tracking-wider text-muted uppercase">
          Technologies
        </p>
        <ul
          className="mt-3 flex flex-wrap gap-2"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-sm border border-border bg-background/70 px-2 py-1 text-xs leading-4 text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <ProjectActions project={project} className="mt-auto pt-6" />
    </motion.article>
  );
}

type FeaturedProjectCardProps = ProjectCardProps & { reduceMotion: boolean };

function FeaturedProjectCard({
  project,
  delay = 0,
  reduceMotion,
}: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group overflow-hidden rounded-md border border-border bg-surface/50 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/60 hover:bg-surface/75 hover:shadow-[0_14px_38px_rgba(234,88,12,0.08)] motion-reduce:transition-none"
    >
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          {project.image ? <ProjectImage project={project} /> : null}
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Featured Project
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2.5 text-sm leading-6 text-foreground/90"
              >
                <Check size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-xs font-medium tracking-wider text-muted uppercase">
              Technologies
            </p>
            <ul
              className="mt-3 flex flex-wrap gap-2"
              aria-label={`${project.title} technologies`}
            >
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-sm border border-border bg-background/70 px-2.5 py-1.5 text-xs leading-4 text-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <ProjectActions project={project} className="mt-7" featured />
        </div>

        <aside className="flex flex-col justify-center border-t border-border bg-background/35 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-9">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-sm font-semibold text-foreground">Model Results</h4>
            <span className="size-2 rounded-full bg-accent" aria-hidden />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.metrics?.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.35,
                  delay: delay + 0.12 + index * 0.08,
                  ease: "easeOut",
                }}
                className="rounded-sm border border-border bg-surface/70 p-4"
              >
                <p className="text-xs font-medium leading-5 text-muted">
                  {metric.label}
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-accent">
                  {metric.detail}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">
            Two-level screening with distinct models for quick and advanced assessment.
          </p>
        </aside>
      </div>
    </motion.article>
  );
}

function ProjectImage({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <figure className="mb-5 overflow-hidden rounded-sm border border-border bg-background">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        className="h-auto max-h-56 w-full object-cover"
      />
    </figure>
  );
}

type ProjectActionsProps = {
  project: Project;
  className?: string;
  featured?: boolean;
};

function ProjectActions({
  project,
  className = "",
  featured = false,
}: ProjectActionsProps) {
  const liveDemoClass = featured
    ? "border-accent bg-accent text-white hover:bg-accent/90"
    : "border-border bg-transparent text-foreground hover:border-accent hover:text-accent";
  const secondaryClass =
    "border-border bg-transparent text-foreground hover:border-accent hover:text-accent";
  const buttonBase =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border px-3.5 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 enabled:hover:-translate-y-0.5 enabled:hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:transform-none";

  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`${buttonBase} ${liveDemoClass}`}
        >
          Live Demo <ArrowUpRight size={16} aria-hidden />
        </a>
      ) : (
        <button
          type="button"
          disabled
          title="Paste a confirmed live demo URL into src/data/projects.ts"
          className={`${buttonBase} ${secondaryClass}`}
        >
          Live Demo <span className="text-xs text-muted">URL pending</span>
        </button>
      )}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`${buttonBase} ${secondaryClass}`}
        >
          <GithubIcon size={16} /> GitHub <ArrowUpRight size={15} aria-hidden />
        </a>
      ) : (
        <button
          type="button"
          disabled
          title="Paste a confirmed GitHub URL into src/data/projects.ts"
          className={`${buttonBase} ${secondaryClass}`}
        >
          <GithubIcon size={16} /> GitHub <span className="text-xs text-muted">URL pending</span>
        </button>
      )}
    </div>
  );
}
