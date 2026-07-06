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
  detail: {
    intro: string[];
    features: {
      title: string;
      description: string;
    }[];
    facts: {
      label: string;
      value: string;
    }[];
    contributions: {
      title: string;
      description: string;
      tags: string[];
    }[];
    troubleshooting: {
      problem: string;
      approach: string;
      result: string;
    };
    learnings: string[];
  };
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
    highlights: [
      "홈 대시보드와 캘린더",
      "자체 로그인과 카카오 OAuth",
      "프론트엔드 구조 설계",
    ],
    techStack: ["Next.js", "TypeScript", "Panda CSS", "TanStack Query"],
    liveUrl: "https://checktask.kr",
    githubUrl: "https://github.com/check-task/frontend",
    detail: {
      intro: [
        "CHECKTASK는 대학생이 개인 과제와 팀 과제를 한곳에서 관리할 수 있도록 만든 과제 관리 플랫폼입니다.",
        "개인 과제와 팀 과제를 구분해 관리하고, 캘린더와 세부 TASK를 통해 마감일과 진행 상황을 한눈에 확인할 수 있습니다.",
      ],
      features: [
        {
          title: "캘린더 기반 과제 관리",
          description:
            "과제와 세부 TASK의 마감일을 월간 캘린더에서 확인하고 관리할 수 있습니다.",
        },
        {
          title: "개인/팀 과제 상세 관리",
          description:
            "과제별 세부 TASK, 자료, 마감일, 완료 상태를 함께 관리할 수 있습니다.",
        },
        {
          title: "팀 협업 관리",
          description:
            "초대 코드, 팀원, 담당자, 자료, 회의록, 커뮤니케이션 링크를 한곳에서 관리할 수 있습니다.",
        },
      ],
      facts: [
        { label: "Role", value: "Frontend Lead" },
        { label: "Team", value: "PM 1 · Design 1 · FE 2 · BE 5" },
        { label: "Period", value: "2025.12 - 진행중" },
      ],
      contributions: [
        {
          title: "홈 대시보드와 캘린더",
          description:
            "과제 마감일을 캘린더와 리스트에서 함께 확인하고, 폴더 필터링과 정렬 흐름을 통해 과제를 빠르게 파악할 수 있도록 구현했습니다.",
          tags: ["FullCalendar", "Dashboard"],
        },
        {
          title: "드래그 앤 드롭 우선순위",
          description:
            "dnd-kit으로 과제 카드 순서를 바꿀 수 있게 만들고, 우선순위 정렬에서만 드래그가 동작하도록 제한해 사용자의 혼란을 줄였습니다.",
          tags: ["dnd-kit", "Optimistic Update"],
        },
        {
          title: "로그인",
          description:
            "자체 로그인과 카카오 OAuth를 구현하고, 인증 상태에 따른 사용자 진입 흐름을 구성했습니다.",
          tags: ["Login", "Kakao OAuth", "JWT"],
        },
      ],
      troubleshooting: {
        problem:
          "아이패드에서 접속했을 때 화면 너비 기준 미디어쿼리 때문에 태블릿 전용 뷰가 아니라 데스크톱 뷰가 렌더링되는 문제가 있었습니다.",
        approach:
          "CSS 반응형 분기만으로는 실제 기기를 구분하기 어렵다고 판단해, Next.js의 userAgent 유틸로 서버에서 device.type을 판별하도록 변경했습니다.",
        result:
          "모바일, 태블릿, 데스크톱 환경에 맞는 뷰를 더 정확하게 분기할 수 있었고, 아이패드에서도 의도한 태블릿 화면을 제공할 수 있게 했습니다.",
      },
      learnings: [
        "프론트엔드 리드 역할에서는 직접 코드를 많이 작성하는 것만큼 폴더 구조, 상태 관리 기준, 코드 컨벤션을 먼저 잡는 일이 중요했습니다.",
        "팀에서 이미 정한 패턴이 있다면 새로운 구현도 그 패턴과 일관되게 확장하는 것이 유지보수에 더 유리하다는 점을 배웠습니다.",
      ],
    },
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
    detail: {
      intro: [
        "YURE는 J-POP 가사 번역과 관련 뉴스, 일정, 커뮤니티를 함께 제공하는 콘텐츠 기반 서비스입니다.",
        "가사 번역, 뉴스, 일정, 커뮤니티를 하나의 흐름으로 연결해 J-POP 팬들이 콘텐츠를 탐색하고 소통할 수 있도록 구성되어 있습니다.",
      ],
      features: [
        {
          title: "가사 번역 콘텐츠",
          description:
            "일본어 가사, 한국어 발음, 한국어 번역을 제공하고 검색과 카테고리 탐색을 지원합니다.",
        },
        {
          title: "뉴스·매거진 콘텐츠",
          description:
            "J-POP 관련 뉴스와 아티클을 리스트와 상세 페이지로 제공합니다.",
        },
        {
          title: "일정 캘린더와 커뮤니티",
          description:
            "공연·이벤트 일정을 확인하고 게시글, 댓글, 좋아요로 팬들이 소통할 수 있습니다.",
        },
      ],
      facts: [
        { label: "Role", value: "Frontend Developer" },
        { label: "Team", value: "FE 2" },
        { label: "Period", value: "2026.03 - 진행중" },
      ],
      contributions: [
        {
          title: "신문 형식의 J-POP 뉴스",
          description:
            "J-POP 관련 뉴스 콘텐츠를 신문처럼 읽을 수 있도록 기사 카드, 상세 본문, 보조 정보의 위계를 나누어 화면을 구성했습니다.",
          tags: ["News", "Content Layout"],
        },
        {
          title: "J-POP 일정 캘린더",
          description:
            "발매, 공연, 이벤트 일정을 월간 캘린더에서 확인하고 날짜별 정보를 빠르게 탐색할 수 있도록 구현했습니다.",
          tags: ["FullCalendar", "Schedule"],
        },
        {
          title: "커뮤니티 페이지",
          description:
            "게시글 목록과 상세 흐름을 구성하고, 최신순·인기순 정렬을 통해 커뮤니티 콘텐츠를 탐색할 수 있도록 구현했습니다.",
          tags: ["Tiptap", "Community"],
        },
      ],
      troubleshooting: {
        problem:
          "커뮤니티 페이지에서 최신순, 인기순 정렬을 바꿀 때마다 브라우저 히스토리가 쌓여 뒤로가기를 여러 번 눌러야 하는 문제가 있었습니다.",
        approach:
          "페이지 이동이 아니라 현재 목록 상태만 바꾸는 동작이라고 판단해 router.push 대신 router.replace를 사용하고, URL 변경 시 스크롤이 튀지 않도록 scroll: false를 적용했습니다.",
        result:
          "정렬 변경 후에도 뒤로가기 흐름이 자연스러워졌고, 사용자가 이전 페이지로 한 번에 돌아갈 수 있도록 탐색 경험을 개선했습니다.",
      },
      learnings: [
        "현직자의 코드 리뷰를 바탕으로 구현 방식의 근거를 점검하고, 유지보수성과 협업을 고려해 코드를 작성하는 기준을 배웠습니다.",
        "뉴스, 일정, 커뮤니티처럼 사용 목적이 다른 화면을 하나의 서비스 톤 안에서 정리하는 경험을 했습니다.",
      ],
    },
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
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Jest"],
    liveUrl: "https://www.kkium.com",
    githubUrl: "https://github.com/team-KKIUM/KKIUM-FE",
    detail: {
      intro: [
        "KKIUM은 사용자의 경험을 채용 공고와 연결해 자기소개서 작성을 돕는 AI 커리어 서비스입니다.",
        "PDF, Notion, 직접 입력으로 모은 경험을 공고 분석과 자기소개서 작성 흐름에 연결해 취업 준비 과정을 돕습니다.",
      ],
      features: [
        {
          title: "경험 추가·관리",
          description:
            "PDF, Notion, 직접 입력으로 경험을 추가하고 목록, 검색, 상세 화면에서 관리할 수 있습니다.",
        },
        {
          title: "공고 분석·경험 매칭",
          description:
            "채용 공고를 분석하고 공고에 맞는 경험과 역량 정보를 확인할 수 있습니다.",
        },
        {
          title: "자기소개서 작성 지원",
          description:
            "문항별로 적합한 경험을 선택하고 작성 가이드와 AI 초안 흐름으로 이어갈 수 있습니다.",
        },
      ],
      facts: [
        { label: "Role", value: "Frontend Developer" },
        { label: "Team", value: "PM 2 · Design 2 · FE 2 · BE 3" },
        { label: "Period", value: "2026.04 - 2026.06" },
      ],
      contributions: [
        {
          title: "공통 컴포넌트",
          description:
            "반복되는 버튼, 입력, 카드성 UI를 공통 컴포넌트로 정리해 화면 간 일관성을 유지할 수 있도록 구현했습니다.",
          tags: ["Storybook", "Component"],
        },
        {
          title: "경험 추가·목록 화면",
          description:
            "사용자가 PDF, Notion, 직접 입력으로 경험을 추가하고, 목록과 상세 화면에서 경험을 다시 확인·관리할 수 있도록 흐름을 구성했습니다.",
          tags: ["Experience", "Form"],
        },
        {
          title: "테스트 코드",
          description:
            "주요 사용자 흐름을 검증하기 위해 E2E 테스트를 작성하고, 기능 변경 후에도 핵심 플로우가 유지되는지 확인할 수 있도록 구성했습니다.",
          tags: ["Playwright", "E2E"],
        },
      ],
      troubleshooting: {
        problem:
          "PDF 파일을 업로드한 뒤 Notion OAuth 연동을 진행하면 외부 페이지를 다녀오는 과정에서 React state가 초기화되어 기존 PDF가 사라지는 문제가 있었습니다.",
        approach:
          "File 객체는 localStorage에 그대로 저장하기 어렵다고 판단해, OAuth 이동 전 PDF 정보를 IndexedDB에 임시 저장하고 복귀 후 다시 state로 복구하도록 구성했습니다.",
        result:
          "PDF와 Notion 자료를 함께 추가하는 흐름에서도 업로드한 파일이 유지되도록 개선했고, 페이지 생명주기 밖에서도 보존되어야 하는 상태를 분리해 관리할 수 있었습니다.",
      },
      learnings: [
        "AI 기능을 소개하는 서비스에서는 기술 설명보다 사용자가 어떤 입력을 하고 어떤 결과를 얻는지 먼저 보여주는 구성이 중요했습니다.",
        "성능 최적화는 Lighthouse 점수뿐 아니라 초기 렌더링에 필요한 리소스와 사용자 액션 이후 필요한 리소스를 구분해 로딩 전략을 세우는 판단이 중요하다는 점을 배웠습니다.",
      ],
    },
  },
];

export const otherProjects: Project[] = [];
export const allProjects = [...featuredProjects, ...otherProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
