import { FileText, Presentation } from "lucide-react";
import { GlassButton, GlassPanel } from "./deferred-glass";
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
        <GlassPanel
          preset="showcase"
          elevation="raised"
          className="lg:col-span-3 flex flex-col !p-6 md:!p-10 text-white"
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
              <GlassButton asChild variant="prominent">
                <a
                  href={THESIS.documents.report.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${THESIS.documents.report.label} (${THESIS.documents.report.detail}, in Thai)`}
                >
                  <FileText aria-hidden className="size-4" />
                  {THESIS.documents.report.label}
                </a>
              </GlassButton>
              <GlassButton asChild variant="soft">
                <a
                  href={THESIS.documents.poster.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${THESIS.documents.poster.label} (${THESIS.documents.poster.detail}, in Thai)`}
                >
                  <Presentation aria-hidden className="size-4" />
                  {THESIS.documents.poster.label}
                </a>
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
        </GlassPanel>

        <GlassPanel className="lg:col-span-2 !p-6 md:!p-8 text-white">
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
        </GlassPanel>
      </div>
    </section>
  );
}
