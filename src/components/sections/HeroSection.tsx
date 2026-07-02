import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiArrowRight, FiFileText, FiMail } from "react-icons/fi";
import { SiVelog } from "react-icons/si";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="mb-6 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-(--accent) shadow-[0_8px_24px_rgba(25,31,40,0.06)]">
        Frontend Portfolio
      </p>
      <h1 className="text-5xl leading-[1.08] font-bold tracking-normal text-(--foreground) sm:text-7xl">
        {profile.headline}
      </h1>
      <p className="mt-8 text-xl font-semibold text-(--foreground)">
        {profile.name} / {profile.englishName}
      </p>
      <p className="mt-5 text-lg leading-8 text-(--muted) sm:text-xl sm:leading-9">
        {profile.summary}
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="#projects">
          Projects 보기
          <FiArrowRight size={16} aria-hidden="true" />
        </ButtonLink>
        <ButtonLink href={profile.resume} variant="secondary">
          <FiFileText size={16} aria-hidden="true" />
          Resume 보기
        </ButtonLink>
      </div>
      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
        <ExternalLink href={profile.github}>
          <FaGithub size={16} aria-hidden="true" />
          GitHub
        </ExternalLink>
        <ExternalLink href={profile.linkedin}>
          <FaLinkedin size={16} aria-hidden="true" />
          LinkedIn
        </ExternalLink>
        <ExternalLink href={profile.velog}>
          <SiVelog size={16} aria-hidden="true" />
          Velog
        </ExternalLink>
        <ExternalLink href={`mailto:${profile.email}`}>
          <FiMail size={16} aria-hidden="true" />
          Email
        </ExternalLink>
      </div>
    </section>
  );
}
