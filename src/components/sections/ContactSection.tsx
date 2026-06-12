import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="프로젝트와 이력서를 함께 확인해 주세요">
      <div className="rounded-[32px] border border-[#d7e8ff] bg-[#f5faff] p-7 sm:p-10">
        <p className="text-lg leading-8 text-[var(--muted)]">
          포트폴리오, GitHub, Velog, 이력서를 통해 작업 방식과 프로젝트를 확인할 수 있습니다.
          연락은 이메일로 부탁드립니다.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`mailto:${profile.email}`}>Email 보내기</ButtonLink>
          <ButtonLink href={profile.resume} variant="secondary">
            Resume 보기
          </ButtonLink>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
          <ExternalLink href={profile.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.velog}>Velog</ExternalLink>
        </div>
      </div>
    </Section>
  );
}
