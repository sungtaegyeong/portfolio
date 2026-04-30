import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="읽히는 화면과 자연스러운 흐름을 중요하게 생각합니다"
    >
      <div className="grid gap-5 text-lg leading-8 text-[var(--muted)] md:grid-cols-[1fr_1fr]">
        <p>
          복잡한 기능을 가진 화면일수록 사용자가 먼저 봐야 할 정보와 다음 행동이 명확해야
          한다고 생각합니다. 그래서 UI를 구현할 때 시각적인 정돈감과 사용 흐름을 함께
          확인합니다.
        </p>
        <p>
          웹앱과 대시보드 프로젝트를 중심으로 반응형 레이아웃, 상태 변화, 데이터 표현을
          사용자가 이해하기 쉬운 형태로 다듬는 데 관심이 있습니다.
        </p>
      </div>
    </Section>
  );
}
