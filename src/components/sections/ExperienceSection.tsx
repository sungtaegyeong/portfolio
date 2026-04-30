import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="팀 안에서 화면과 흐름을 함께 만들어온 경험"
      description="프로젝트를 보완하는 협업과 리더십 경험만 짧게 정리했습니다."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.role}`}
            className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_12px_36px_rgba(25,31,40,0.04)]"
          >
            <p className="text-sm font-bold text-[var(--accent)]">{experience.organization}</p>
            <h3 className="mt-3 text-xl font-bold text-[var(--foreground)]">
              {experience.role}
            </h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
