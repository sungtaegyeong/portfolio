export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: {
    src: string;
    alt: string;
  };
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "checktask",
    title: "CHECKTASK",
    summary: "대학생의 개인·팀 과제를 한곳에서 관리하는 과제 관리 플랫폼",
    image: {
      src: "/checktask.png",
      alt: "CHECKTASK 프로젝트 화면",
    },
    highlights: ["개인·팀 과제 일정 캘린더", "OAuth 로그인", "내 정보 페이지"],
    techStack: ["Next.js", "TypeScript", "Panda CSS", "TanStack Query"],
    liveUrl: "https://checktask.kr",
  },
  {
    slug: "yure",
    title: "YURE",
    summary: "J-POP 가사 번역과 뉴스, 일정을 함께 제공하는 커뮤니티 사이트",
    image: {
      src: "/yure.jpeg",
      alt: "YURE 프로젝트 화면",
    },
    highlights: [
      "신문 형식의 J-POP 뉴스",
      "J-POP 일정 캘린더",
      "커뮤니티 페이지",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.yure.me",
  },
  {
    slug: "kkium",
    title: "KKIUM",
    summary:
      "경험과 채용 공고를 연결해 자기소개서 작성을 돕는 AI 커리어 서비스",
    image: {
      src: "/kkium.png",
      alt: "KKIUM 프로젝트 화면",
    },
    highlights: ["공통 컴포넌트", "경험 추가·목록 화면", "모바일 랜딩 페이지"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
    liveUrl: "https://www.kkium.com",
    githubUrl: "https://github.com/team-KKIUM/KKIUM-FE",
  },
];

export const otherProjects: Project[] = [];
