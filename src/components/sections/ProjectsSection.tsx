import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6 transition-colors hover:border-[#c9d1d9]">
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
      <dl className="mt-6 space-y-4">
        <div>
          <dt className="text-sm font-bold text-[var(--foreground)]">Problem</dt>
          <dd className="mt-1 text-sm leading-6 text-[var(--muted)]">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-[var(--foreground)]">Solution</dt>
          <dd className="mt-1 text-sm leading-6 text-[var(--muted)]">{project.solution}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-[var(--foreground)]">UX Point</dt>
          <dd className="mt-1 text-sm leading-6 text-[var(--muted)]">{project.uxPoint}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4 pt-6">
        {project.liveUrl && <ExternalLink href={project.liveUrl}>Live</ExternalLink>}
        {project.githubUrl && <ExternalLink href={project.githubUrl}>GitHub</ExternalLink>}
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
      description="대표 프로젝트 3개는 문제, 해결, UX 판단을 같은 기준으로 비교할 수 있게 정리합니다."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
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
