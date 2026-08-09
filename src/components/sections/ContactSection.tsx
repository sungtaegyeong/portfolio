import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SiVelog } from "react-icons/si";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

const contactLinkClassName = "min-h-11 py-2";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="함께 만들 기회를 기다리고 있습니다">
      <div className="rounded-[32px] border border-(--accent-border) bg-(--accent-surface) p-7 sm:p-10">
        <p className="text-lg leading-8 text-(--muted)">
          프로젝트와 작업 방식은 GitHub와 Velog에서 더 자세히 확인할 수 있습니다. 협업이나 채용
          관련 연락은 이메일로 부탁드립니다.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1 sm:flex sm:flex-wrap sm:items-center">
          <ExternalLink href={`mailto:${profile.email}`} className={contactLinkClassName}>
            <FiMail size={16} aria-hidden="true" />
            Email
          </ExternalLink>
          <ExternalLink href={profile.github} className={contactLinkClassName}>
            <FaGithub size={16} aria-hidden="true" />
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className={contactLinkClassName}>
            <FaLinkedin size={16} aria-hidden="true" />
            LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.velog} className={contactLinkClassName}>
            <SiVelog size={16} aria-hidden="true" />
            Velog
          </ExternalLink>
        </div>
      </div>
    </Section>
  );
}
