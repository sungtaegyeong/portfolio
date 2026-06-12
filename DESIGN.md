# Portfolio Design

## Goal

Design a job-focused frontend portfolio for 성태경 / Sung Taegyeong. The site should feel clear, trustworthy, and easy to scan.

## Language

Use Korean as the main language with familiar English section labels and developer terms.

Examples:

- Featured Projects
- Skills
- About
- Contact
- Resume
- GitHub
- Velog

Body copy should be Korean and direct.

## Design Direction

Use a Toss-inspired product UI direction: bright, clear, friendly, trustworthy, and easy to scan.

Apple-like influence is limited to whitespace, restraint, and polished typography. The site must not feel like a luxury product advertisement or a brand clone.

## Visual Principles

- Prioritize readability over decoration.
- Show important information early.
- Use short, direct copy.
- Keep sections visually distinct without heavy decoration.
- Use generous whitespace while preserving enough information density for hiring review.
- Avoid copying Toss, Apple, or any other brand assets directly.
- Avoid heavy gradients, glassmorphism, excessive shadows, and cinematic landing-page effects.

## Visual Tokens

Initial color direction:

- Background: `#ffffff`
- Surface: `#f9fafb`
- Primary text: `#191f28`
- Secondary text: `#6b7684`
- Border: `#e5e8eb`
- Accent blue: `#3182f6`

Use a clean sans-serif system font stack unless a local font is added later.
The first version is light-mode only. Do not add dark mode or automatic system theme switching until the light portfolio is complete and reviewed.

## Information Architecture

The first version is a one-page scrolling portfolio with room to add project detail pages later.

Section order:

1. Header
2. Hero
3. Featured Projects
4. Skills
5. Experience
6. About
7. Other Projects
8. Contact

## Header

Use a quiet sticky header for one-page navigation. It should improve scanning without competing with the hero.

- Left: `Sung Taegyeong`
- Desktop nav: Projects, Skills, Experience, Contact
- Persistent CTA: Resume
- Mobile: keep navigation minimal and always expose Resume
- Visual style: white translucent background, subtle border, no heavy shadow

## Hero

The hero should immediately communicate identity, role direction, and value.

Primary identity:

```text
성태경 / Sung Taegyeong
```

Primary copy:

```text
복잡한 화면을 이해하기 쉬운 경험으로 만듭니다.
```

Supporting copy should position Sung Taegyeong as a frontend developer who cares about UI implementation and UX flow, especially for web apps and dashboard-like interfaces.

Primary CTAs:

- Projects 보기
- Resume 보기

Secondary links:

- GitHub
- Velog
- Email

## Featured Projects

Use a card layout for three featured projects. Cards should have equal structure so recruiters can compare projects quickly.

Each featured project card should include:

- Project screenshot
- Project name
- One-line summary
- Key work highlights
- Tech Stack
- Live link
- GitHub link

The first card may receive a small `Featured` label, but card sizing should remain consistent.

## Other Projects

Use compact cards or a simple list for remaining projects. These should support breadth without competing with featured projects.

Each item should include:

- Project name
- Short summary
- Main tech stack
- Live and GitHub links when available

## Skills

Skills should describe capability, not only list tool names.

Suggested groups:

- Frontend: React, Next.js, TypeScript 기반 UI 구현
- UI/UX: 사용자 흐름, 반응형 레이아웃, 접근성을 고려한 화면 설계
- State & Data: 상태와 API 데이터를 화면 흐름에 맞게 정리
- Styling: Tailwind CSS and component-level styling

Avoid a long icon-only skill wall.

## Experience

Experience should support, not replace, the project section. Keep it compact and focus on collaboration, leadership, and frontend-related team work.

Items:

- UMC / President: project coordination, team communication, and completion support.
- KUSITMS / Frontend Part: frontend implementation through product planning and team collaboration.

## About

About should be short and practical. It should explain how the developer thinks about UI and UX without becoming a long personal essay.

Focus points:

- Makes complex screens easier to understand.
- Values clear user flow and readable interfaces.
- Builds web app and dashboard interfaces with attention to detail.

## Contact

Contact links:

- Email: `tjdxoruddl@gmail.com`
- GitHub: `https://github.com/sungtaegyeong`
- LinkedIn: `https://www.linkedin.com/in/%ED%83%9C%EA%B2%BD-%EC%84%B1-365b213a6/`
- Velog: `https://velog.io/@taegyeong0320/`
- Resume: planned as `public/resume.pdf`

Resume should be placed in `public/resume.pdf` during implementation so the site can link to `/resume.pdf`.

## Content Rules

Project writing should use a problem-solving structure:

1. What problem existed?
2. What did the project change or improve?
3. What was Sung Taegyeong responsible for?
4. What UX decision matters most?
5. What stack was used?

Avoid vague claims such as "사용자 중심 개발자" unless supported by project examples.

## Accessibility And Responsiveness

- Mobile-first layout.
- Cards stack vertically on small screens.
- Buttons and links must have clear focus states.
- Text contrast must remain readable.
- Link labels should be explicit.
- Avoid hover-only information.
