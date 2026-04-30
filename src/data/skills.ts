export const skillGroups = [
  {
    title: "Frontend",
    description: "React, Next.js, TypeScript 기반으로 컴포넌트 중심 UI를 구현합니다.",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "UI/UX",
    description: "사용자 흐름, 반응형 레이아웃, 접근성을 고려해 화면을 설계합니다.",
    items: ["Responsive UI", "Accessibility", "Interaction"],
  },
  {
    title: "State & Data",
    description: "상태와 API 데이터를 화면 흐름에 맞게 정리하고 연결합니다.",
    items: ["Client State", "API Data", "Form Flow"],
  },
  {
    title: "Styling",
    description: "Tailwind CSS와 CSS를 활용해 일관된 디자인 규칙을 화면에 반영합니다.",
    items: ["Tailwind CSS", "CSS", "Design Tokens"],
  },
] as const;
