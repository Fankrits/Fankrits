import { FileText, Presentation } from "lucide-react";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { CAPABILITIES, THESIS } from "./data";
import { SectionHeading } from "./shared";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-12 md:py-16">
      <SectionHeading
        id="about-title"
        label="About"
        title={
          <>
            Rigour from the <em className="italic font-normal">maths</em>, speed from the tools.
          </>
        }
      />

      <div className="grid gap-4 md:gap-5 lg:grid-cols-5">
        <GlassCard
          glassVariant="liquid-refract"
          surfaceClassName="lg:col-span-3 border border-white/15 bg-black/25 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          className="flex h-full flex-col p-6 md:p-10 text-white"
        >
          <p className="font-agave text-[0.8rem] uppercase tracking-[0.2em] text-white/70">
            Thesis · {THESIS.degree}
          </p>
          <blockquote className="mt-5 font-display text-2xl md:text-4xl italic font-normal leading-[1.15] tracking-tight">
            {THESIS.title}
          </blockquote>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">{THESIS.blurb}</p>
          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              <GlassButton
                nativeButton={false}
                render={
                  <a
                    href={THESIS.documents.report.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${THESIS.documents.report.label} (${THESIS.documents.report.detail}, in Thai)`}
                  />
                }
                glassVariant="liquid-refract"
                className="rounded-full bg-white/15 px-4 text-white hover:bg-white/25"
              >
                <FileText aria-hidden className="size-4" />
                {THESIS.documents.report.label}
              </GlassButton>
              <GlassButton
                nativeButton={false}
                render={
                  <a
                    href={THESIS.documents.poster.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${THESIS.documents.poster.label} (${THESIS.documents.poster.detail}, in Thai)`}
                  />
                }
                glassVariant="subtle"
                className="rounded-full px-4 text-white/90 hover:bg-white/15 hover:text-white"
              >
                <Presentation aria-hidden className="size-4" />
                {THESIS.documents.poster.label}
              </GlassButton>
            </div>
            <p className="mt-3 font-agave text-[0.8rem] text-white/70">
              Report {THESIS.documents.report.detail} · Poster {THESIS.documents.poster.detail} ·
              Thai
            </p>
          </div>
          <p className="mt-6 pt-4 border-t border-white/20 text-sm text-white/75 lg:mt-auto">
            <span className="font-semibold text-white">{THESIS.school}</span>
            <br />
            {THESIS.department}
          </p>
        </GlassCard>

        <GlassCard
          glassVariant="liquid-refract"
          surfaceClassName="lg:col-span-2 border border-white/15 bg-black/25 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          className="h-full p-6 md:p-8 text-white"
        >
          <h3 className="font-agave text-[0.8rem] uppercase tracking-[0.2em] text-white/70">
            What I work with
          </h3>
          <dl className="mt-4 divide-y divide-white/20">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="py-4 first:pt-2 last:pb-0">
                <dt className="text-base font-semibold">{cap.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-white/80">{cap.items}</dd>
              </div>
            ))}
          </dl>
        </GlassCard>
      </div>
    </section>
  );
}
