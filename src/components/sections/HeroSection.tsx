import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[82vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="mb-5 text-sm font-semibold text-[var(--accent)]">{profile.role}</p>
      <h1 className="max-w-4xl text-5xl leading-[1.08] font-bold tracking-normal text-[var(--foreground)] sm:text-7xl">
        {profile.headline}
      </h1>
      <p className="mt-8 text-xl font-semibold text-[var(--foreground)]">
        {profile.name} / {profile.englishName}
      </p>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        {profile.summary}
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="#projects">Projects 보기</ButtonLink>
        <ButtonLink href={profile.resume} variant="secondary">
          Resume 보기
        </ButtonLink>
      </div>
      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <ExternalLink href={profile.velog}>Velog</ExternalLink>
        <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
      </div>
    </section>
  );
}
