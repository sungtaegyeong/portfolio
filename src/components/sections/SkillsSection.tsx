import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="기술 이름보다 할 수 있는 일로 보여줍니다"
      description="아이콘 나열 대신 UI 구현, 사용자 흐름, 데이터 연결 관점으로 역량을 정리합니다."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_12px_36px_rgba(25,31,40,0.04)]"
          >
            <h3 className="text-xl font-bold text-[var(--foreground)]">{group.title}</h3>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
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
