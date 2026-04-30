<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Portfolio Implementation Notes

- Follow `DESIGN.md` for visual direction, content tone, and section-level UI rules.
- Keep the first version as a one-page scrolling portfolio with this order: Hero, Featured Projects, Skills, About, Other Projects, Contact.
- Preserve room for future `/projects/[slug]` detail pages without adding them in the first implementation.
- Use the existing Next.js App Router project.
- Avoid `next/font/google` for the first implementation because the current build environment cannot fetch Google Fonts reliably.

Expected structure:

- `src/app/page.tsx`: page composition
- `src/components/sections/*`: section components
- `src/components/ui/*`: small reusable UI components
- `src/data/projects.ts`: project data with future `slug` support
- `src/data/profile.ts`: profile and external links

Project data should include `slug` from the beginning, even before project detail pages exist.

Validation before completion:

- A recruiter can understand identity, role direction, and core strength within 10 seconds.
- Featured projects are visible and scannable without digging.
- Resume, GitHub, Velog, and email are easy to find.
- The site works on mobile and desktop.
- `pnpm lint` passes.
- `pnpm build` passes after removing or replacing remote Google Font usage.
