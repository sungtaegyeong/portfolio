export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
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
    slug: "checktask",
    title: "CHECKTASK",
    summary: "작업과 진행 상태를 한눈에 확인할 수 있도록 구성한 태스크 관리형 웹앱입니다.",
    image: {
      src: "/checktask.png",
      alt: "CHECKTASK 프로젝트 화면",
    },
    problem: "여러 작업의 상태와 우선순위를 화면 안에서 빠르게 파악하기 어려운 문제가 있었습니다.",
    solution: "작업 정보를 명확한 단위로 나누고, 주요 상태를 비교하기 쉬운 화면 구조로 정리했습니다.",
    uxPoint: "사용자가 다음에 확인해야 할 작업을 빠르게 찾을 수 있도록 정보 위계를 단순하게 유지했습니다.",
    techStack: ["Next.js", "Panda CSS"],
    liveUrl: "https://checktask.kro.kr",
    featured: true,
  },
  {
    slug: "yure",
    title: "YURE",
    summary: "사용자 경험과 데이터 흐름을 함께 고려해 구현한 서비스형 웹 프로젝트입니다.",
    image: {
      src: "/yure.jpeg",
      alt: "YURE 프로젝트 화면",
    },
    problem: "사용자가 필요한 정보를 자연스럽게 탐색하고 저장된 데이터와 상호작용할 수 있어야 했습니다.",
    solution: "Next.js 화면 구조와 Supabase 기반 데이터 흐름을 연결해 서비스 사용 과정을 구성했습니다.",
    uxPoint: "페이지 이동과 데이터 확인 흐름이 끊기지 않도록 화면 단위의 역할을 분명하게 나눴습니다.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.yure.me",
  },
  {
    slug: "kkium",
    title: "KKIUM",
    summary: "팀 단위로 프론트엔드 화면과 사용자 흐름을 구현한 Next.js 프로젝트입니다.",
    image: {
      src: "/kkium.png",
      alt: "KKIUM 프로젝트 화면",
    },
    problem: "서비스의 핵심 기능을 사용자가 이해하기 쉬운 화면 흐름으로 연결해야 했습니다.",
    solution: "페이지와 컴포넌트 단위를 나누고, Tailwind CSS로 일관된 인터페이스를 구성했습니다.",
    uxPoint: "여러 사용 시나리오를 고려해 핵심 행동으로 이어지는 화면 흐름을 정리했습니다.",
    techStack: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/team-KKIUM/KKIUM-FE",
  },
];

export const otherProjects: Project[] = [];
