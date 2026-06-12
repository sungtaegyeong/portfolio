import Image from "next/image";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-transparent bg-white shadow-[0_16px_48px_rgba(25,31,40,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d8dee5] hover:shadow-[0_18px_54px_rgba(25,31,40,0.09)]">
      <div className="relative aspect-[1200/630] overflow-hidden bg-[var(--surface)]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {project.featured && (
              <p className="mb-3 inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--accent)]">
                Featured
              </p>
            )}
            <h3 className="text-2xl font-bold text-[var(--foreground)]">{project.title}</h3>
          </div>
        </div>

        <p className="text-base leading-7 text-[var(--muted)]">{project.summary}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--accent)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4 pt-6">
          {project.liveUrl && <ExternalLink href={project.liveUrl}>Live</ExternalLink>}
          {project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="화면의 문제를 구조와 흐름으로 해결한 프로젝트"
      description="대표 프로젝트 3개를 실제 화면과 핵심 작업 중심으로 빠르게 훑을 수 있게 정리했습니다."
    >
      <div className="rounded-[32px] bg-[var(--surface)] p-3 sm:p-4">
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
      {otherProjects.length > 0 && (
        <div className="mt-14">
          <h3 className="text-xl font-bold text-[var(--foreground)]">Other Projects</h3>
          <div className="mt-5 grid gap-3">
            {otherProjects.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-3 rounded-2xl bg-[var(--surface)] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h4 className="font-bold text-[var(--foreground)]">{project.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
                </div>
                <div className="flex shrink-0 gap-4">
                  {project.liveUrl && <ExternalLink href={project.liveUrl}>Live</ExternalLink>}
                  {project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
