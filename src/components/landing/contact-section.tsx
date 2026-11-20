import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/github-icon";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { PROFILE } from "./data";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 pt-12 md:pt-16">
      <GlassCard
        glassVariant="liquid-refract"
        surfaceClassName="border border-white/15 bg-black/25 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
        className="p-6 sm:p-10 md:p-14 text-white"
      >
        <p className="font-agave text-[0.8rem] uppercase tracking-[0.2em] text-white/70">Contact</p>
        <h2
          id="contact-title"
          className="mt-3 max-w-3xl font-display text-4xl md:text-6xl font-medium leading-[1.02] tracking-tight"
        >
          Got an agent, a pipeline or a proof that needs{" "}
          <em className="italic font-normal">building</em>?
        </h2>
        <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-white/85">
          I take on AI operations, agent workflows, custom MCP servers and mathematical optimisation
          work. Send a short note and I&apos;ll reply.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <GlassButton
            nativeButton={false}
            render={<a href={`mailto:${PROFILE.email}`} />}
            glassVariant="liquid-refract"
            size="lg"
            className="rounded-full bg-white/15 px-5 text-white hover:bg-white/25"
          >
            <Mail aria-hidden className="size-4" />
            {PROFILE.email}
          </GlassButton>
          <GlassButton
            nativeButton={false}
            render={<a href={PROFILE.github} target="_blank" rel="noreferrer" />}
            glassVariant="subtle"
            size="lg"
            className="rounded-full px-5 text-white/90 hover:bg-white/15 hover:text-white"
          >
            <GithubIcon aria-hidden className="size-4" />
            {PROFILE.githubHandle}
          </GlassButton>
        </div>
      </GlassCard>

      <footer className="flex flex-wrap items-center justify-between gap-2 py-8 font-agave text-[0.8rem] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>{PROFILE.location}</span>
      </footer>
    </section>
  );
}
