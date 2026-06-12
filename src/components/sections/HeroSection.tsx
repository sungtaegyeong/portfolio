import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="mb-6 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-[var(--accent)] shadow-[0_8px_24px_rgba(25,31,40,0.06)]">
        Frontend Portfolio
      </p>
      <h1 className="text-5xl leading-[1.08] font-bold tracking-normal text-[var(--foreground)] sm:text-7xl">
        {profile.headline}
      </h1>
      <p className="mt-8 text-xl font-semibold text-[var(--foreground)]">
        {profile.name} / {profile.englishName}
      </p>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
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
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        <ExternalLink href={profile.velog}>Velog</ExternalLink>
        <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
      </div>
    </section>
  );
}
