import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { ChatDemo } from "./chat-demo";
import { FLAGSHIP, PROJECTS } from "./data";
import { Chips, ProjectLinks, SectionHeading } from "./shared";

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24 py-12 md:py-16">
      <SectionHeading
        id="work-title"
        label="Selected work"
        title={
          <>
            Five products, <em className="italic font-normal">shipped</em> and in the open.
          </>
        }
      >
        A collaborative LaTeX editor, a bilingual market-news site, a desktop markdown editor and
        two learning products, each one built and live.
      </SectionHeading>

      <div className="grid gap-4 md:gap-5">
        {/* Flagship */}
        <GlassCard
          glassVariant="liquid-refract"
          surfaceClassName="border border-white/15 bg-black/25 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
          className="p-6 md:p-8 text-white"
          aria-labelledby="somescript-title"
        >
          <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-10">
            <div className="min-w-0 lg:col-span-3">
              <p className="font-agave text-[0.8rem] uppercase tracking-[0.2em] text-white/70">
                Flagship · {FLAGSHIP.kicker}
              </p>
              <h3
                id="somescript-title"
                className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight"
              >
                {FLAGSHIP.name}
              </h3>
              <p className="mt-3 font-display text-xl md:text-2xl italic font-normal leading-snug">
                {FLAGSHIP.lead}
              </p>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-white/85">
                {FLAGSHIP.summary}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-white/80">
                {FLAGSHIP.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden className="text-white/60">
                      –
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ProjectLinks
                  name={FLAGSHIP.name}
                  live={FLAGSHIP.live}
                  repo={FLAGSHIP.repo}
                  extra={FLAGSHIP.download}
                />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-2">
              <ChatDemo />
            </div>
          </div>
        </GlassCard>

        {/* Supporting projects */}
        <ul className="grid gap-4 md:gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <li key={project.name} className="flex">
              <GlassCard
                glassVariant="liquid-refract"
                surfaceClassName="w-full border border-white/15 bg-black/25 transition-transform duration-200 hover:-translate-y-0.5"
                className="flex h-full w-full flex-col p-6 text-white"
                aria-labelledby={`${project.name}-title`}
              >
                <p className="font-agave text-[0.8rem] uppercase tracking-[0.18em] text-white/70">
                  {project.kicker}
                </p>
                <h3
                  id={`${project.name}-title`}
                  className="mt-3 font-display text-3xl font-medium tracking-tight"
                >
                  {project.name}
                </h3>
                <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed text-white/85">
                  {project.summary}
                </p>
                <div className="mt-5">
                  <Chips items={project.stack} />
                </div>
                <div className="mt-6 pt-1 md:mt-auto md:pt-6">
                  <ProjectLinks name={project.name} live={project.live} repo={project.repo} />
                </div>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
