import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="프로젝트에 사용해온 기술 스택"
      description="웹·모바일 프론트엔드부터 상태 관리, 스타일링, 백엔드 개발까지 프로젝트에 활용한 기술을 정리했습니다."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[28px] border border-(--border) bg-(--card) p-6 shadow-[0_12px_36px_color-mix(in_srgb,var(--shadow)_4%,transparent)]"
          >
            <h3 className="text-xl font-bold text-(--foreground)">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-bold text-(--accent)"
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
