import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="시간의 흐름 속에서 쌓아온 협업 경험"
      description="프로젝트를 보완하는 리더십, 협업, 프론트엔드 활동을 흐름 중심으로 정리했습니다."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[9px] w-px bg-(--border) sm:left-[11px]"
        />
        <div className="space-y-10">
          {experiences.map((experience) => (
            <article
              key={`${experience.organization}-${experience.role}`}
              className="relative pl-9 sm:pl-12"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 size-5 rounded-full border-4 border-white bg-(--accent) shadow-[0_0_0_1px_rgba(49,130,246,0.18)] sm:size-6"
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-(--foreground) sm:text-2xl">
                    {experience.organization}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-(--accent) sm:text-base">
                    {experience.role}
                  </p>
                </div>
                <p className="w-fit rounded-full bg-(--accent-soft) px-3 py-1 text-sm font-bold text-(--accent)">
                  {experience.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {experience.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-base leading-7 text-(--muted) before:absolute before:top-[0.72em] before:left-0 before:size-1.5 before:rounded-full before:bg-(--accent) sm:text-lg sm:leading-8"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
