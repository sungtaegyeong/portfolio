export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  uxPoint: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "featured-project-1",
    title: "대표 프로젝트 1",
    summary: "배포된 웹앱 프로젝트의 핵심 가치를 한 문장으로 정리합니다.",
    problem: "사용자가 해결해야 했던 문제를 짧게 적습니다.",
    solution: "어떤 화면과 흐름으로 문제를 해결했는지 적습니다.",
    uxPoint: "사용자가 더 쉽게 이해하거나 행동할 수 있게 만든 UX 판단을 적습니다.",
    techStack: ["React", "Next.js", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "featured-project-2",
    title: "대표 프로젝트 2",
    summary: "두 번째 대표 프로젝트의 역할과 결과를 짧게 보여줍니다.",
    problem: "프로젝트에서 마주한 사용자 또는 화면 구조 문제를 적습니다.",
    solution: "구현한 UI 구조와 상호작용을 적습니다.",
    uxPoint: "반응형, 접근성, 흐름 개선 중 강조할 지점을 적습니다.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "featured-project-3",
    title: "대표 프로젝트 3",
    summary: "세 번째 대표 프로젝트의 차별점을 짧게 보여줍니다.",
    problem: "기존 경험에서 불편했던 지점을 적습니다.",
    solution: "데이터, 상태, UI를 어떻게 정리했는지 적습니다.",
    uxPoint: "사용자의 탐색과 이해를 도운 결정을 적습니다.",
    techStack: ["Next.js", "TypeScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "other-project-1",
    title: "기타 프로젝트 1",
    summary: "프로젝트의 목적과 사용 기술을 짧게 정리합니다.",
    problem: "간단한 문제 정의를 적습니다.",
    solution: "간단한 해결 방식을 적습니다.",
    uxPoint: "간단한 UX 포인트를 적습니다.",
    techStack: ["React", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
