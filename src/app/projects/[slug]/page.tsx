import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Header } from "@/components/sections/Header";
import { allProjects, getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Sung Taegyeong`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Sung Taegyeong`,
      description: project.summary,
      images: [
        {
          url: project.image.src,
          width: 1200,
          height: 630,
          alt: project.image.alt,
        },
      ],
    },
  };
}

function DetailSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="text-sm font-bold text-(--accent)">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-normal text-(--foreground) sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const troubleshootingSteps = [
    {
      label: "Problem",
      number: "01",
      text: project.detail.troubleshooting.problem,
    },
    {
      label: "Approach",
      number: "02",
      text: project.detail.troubleshooting.approach,
    },
    {
      label: "Result",
      number: "03",
      text: project.detail.troubleshooting.result,
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_30%,#ffffff_100%)]">
      <Header />
      <article className="mx-auto w-full max-w-6xl px-5 pt-10 pb-24 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex text-sm font-bold text-(--muted) transition-colors hover:text-(--accent)"
        >
          ← Projects
        </Link>

        <section className="grid gap-10 pt-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-(--accent-soft) px-3 py-1 text-sm font-bold text-(--accent)">
              Project Case Study
            </p>
            <h1 className="text-5xl leading-[1.08] font-bold tracking-normal text-(--foreground) sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-7 text-xl leading-8 font-semibold text-(--foreground)">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-(--accent) px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(49,130,246,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--accent-hover)"
                >
                  Live 보기
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-(--border) bg-white px-5 text-sm font-bold text-(--foreground) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--surface)"
                >
                  GitHub 보기
                </a>
              )}
            </div>
          </div>

          <div className="relative aspect-1200/630 overflow-hidden rounded-[32px] border border-[#dce6f1] bg-(--surface) shadow-[0_20px_60px_rgba(25,31,40,0.08)]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="space-y-16">
            <DetailSection eyebrow="Overview" title="프로젝트 개요">
              <div className="space-y-4 text-lg leading-9 text-(--muted)">
                {project.detail.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </DetailSection>

            <DetailSection eyebrow="Features" title="주요 기능">
              <div className="grid gap-4 md:grid-cols-3">
                {project.detail.features.map((feature) => (
                  <article
                    key={feature.title}
                    className="rounded-[28px] border border-(--border) bg-white p-5 shadow-[0_10px_30px_rgba(25,31,40,0.04)]"
                  >
                    <h3 className="text-lg font-bold text-(--foreground)">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-(--muted)">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </DetailSection>

            <DetailSection eyebrow="My Contribution" title="주요 기여">
              <div className="grid gap-4 md:grid-cols-3">
                {project.detail.contributions.map((contribution) => (
                  <article
                    key={contribution.title}
                    className="rounded-[28px] border border-(--border) bg-white p-5 shadow-[0_10px_30px_rgba(25,31,40,0.04)]"
                  >
                    <h3 className="text-lg font-bold text-(--foreground)">
                      {contribution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-(--muted)">
                      {contribution.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {contribution.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-bold text-(--accent)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </DetailSection>

            <DetailSection eyebrow="Troubleshooting" title="대표 문제 해결 사례">
              <div className="grid gap-4 md:grid-cols-3">
                {troubleshootingSteps.map((step) => (
                  <div
                    key={step.label}
                    className="rounded-[28px] border border-(--border) bg-white p-5 shadow-[0_10px_30px_rgba(25,31,40,0.04)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-(--accent-soft) text-sm font-bold text-(--accent)">
                        {step.number}
                      </span>
                      <p className="text-sm font-bold text-(--foreground)">{step.label}</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-(--muted)">{step.text}</p>
                  </div>
                ))}
              </div>
            </DetailSection>

            <DetailSection eyebrow="Reflection" title="배운 점">
              <ul className="space-y-4">
                {project.detail.learnings.map((learning) => (
                  <li key={learning} className="flex gap-3 text-base leading-7 text-(--muted)">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-(--accent)" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[30px] border border-[#d7e8ff] bg-[#f5faff] p-6">
              <p className="text-sm font-bold text-(--accent)">Project Summary</p>
              <dl className="mt-5 space-y-5">
                {project.detail.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-bold tracking-normal text-(--muted)">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-base leading-6 font-bold text-(--foreground)">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 border-t border-[#d7e8ff] pt-6">
                <p className="text-xs font-bold text-(--muted)">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-1 text-xs font-bold text-(--accent)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-[#d7e8ff] pt-6">
                <Link
                  href="/#projects"
                  className="text-sm font-bold text-(--accent) transition-colors hover:text-(--accent-hover)"
                >
                  다른 프로젝트 보기
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </article>
    </main>
  );
}
