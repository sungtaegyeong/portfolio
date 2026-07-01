import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="프로젝트에 사용해온 기술 스택"
      description="프론트엔드 구현, 상태 관리, 스타일링, 협업 도구를 중심으로 정리했습니다."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_12px_36px_rgba(25,31,40,0.04)]"
          >
            <h3 className="text-xl font-bold text-[var(--foreground)]">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold text-[var(--accent)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
