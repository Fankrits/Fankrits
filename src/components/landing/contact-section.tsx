import { Github, Mail } from "lucide-react";
import { GlassButton } from "./deferred-glass";
import { GlassPanel } from "./deferred-glass";
import { PROFILE } from "./data";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 pt-12 md:pt-16">
      <GlassPanel
        preset="showcase"
        elevation="raised"
        className="!p-6 sm:!p-10 md:!p-14 text-white"
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
          <GlassButton asChild variant="prominent" size="lg">
            <a href={`mailto:${PROFILE.email}`}>
              <Mail aria-hidden className="size-4" />
              {PROFILE.email}
            </a>
          </GlassButton>
          <GlassButton asChild variant="soft" size="lg">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <Github aria-hidden className="size-4" />
              {PROFILE.githubHandle}
            </a>
          </GlassButton>
        </div>
      </GlassPanel>

      <footer className="flex flex-wrap items-center justify-between gap-2 py-8 font-agave text-[0.8rem] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>{PROFILE.location}</span>
      </footer>
    </section>
  );
}
