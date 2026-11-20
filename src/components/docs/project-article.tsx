import type { MouseEvent } from "react";
import { ArrowUpRight, Download, Github } from "lucide-react";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import type { ProjectDoc } from "@/content/projects/types";
import { DocBlocks } from "./doc-blocks";

function getLinkKind(link: { label: string; href: string }): "github" | "download" | "external" {
  const hrefLower = link.href.toLowerCase();
  const labelLower = link.label.toLowerCase();
  if (
    hrefLower.includes("releases") ||
    labelLower.includes("download") ||
    labelLower.includes("desktop")
  ) {
    return "download";
  }
  if (
    hrefLower.includes("github.com") ||
    labelLower.includes("source") ||
    labelLower.includes("github")
  ) {
    return "github";
  }
  return "external";
}

function getWindowLabel(project: ProjectDoc): string {
  if (project.windowLabel) return project.windowLabel;
  const firstHref = project.links[0]?.href;
  if (firstHref) {
    try {
      return new URL(firstHref).host.replace(/^www\./, "");
    } catch {
      // Fallback to slug when href is relative or non-URL.
    }
  }
  return project.slug;
}

export function ProjectArticle({
  project,
  onNavigate,
}: {
  project: ProjectDoc;
  onNavigate: (id: string) => void;
}) {
  const windowLabel = getWindowLabel(project);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="scroll-mt-20 lg:scroll-mt-10"
    >
      <header data-spy-id={project.slug}>
        <p className="font-agave text-xs uppercase tracking-[0.18em] text-zinc-300">
          {project.kicker}
        </p>

        {/* Project Name (H2 under sr-only page H1) */}
        <h2
          id={`${project.slug}-title`}
          className="group mt-3 flex items-baseline gap-2.5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
        >
          <span>{project.name}</span>
          <a
            href={`#${project.slug}`}
            onClick={(e) => handleAnchorClick(e, project.slug)}
            aria-label={`Link to ${project.name}`}
            className="font-agave text-xl font-normal text-zinc-400 no-underline opacity-0 transition-opacity hover:text-[#FF7E3D] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80 rounded px-1 group-hover:opacity-100 motion-reduce:transition-none"
          >
            #
          </a>
        </h2>

        {/* Summary lead paragraph */}
        <p className="mt-4 max-w-[68rem] text-base leading-relaxed text-zinc-200/95 sm:text-[1.075rem] sm:leading-[1.72]">
          {project.summary}
        </p>

        {/* Link buttons */}
        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {project.links.map((link, idx) => {
              const kind = getLinkKind(link);
              const isPrimary = idx === 0;
              return (
                <GlassButton
                  key={`${link.href}-${link.label}`}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name}: ${link.label}`}
                    />
                  }
                  glassVariant={isPrimary ? "liquid-refract" : "subtle"}
                  size="sm"
                  className={
                    isPrimary
                      ? "rounded-full bg-white/15 px-3.5 text-white no-underline hover:bg-white/25 hover:text-white focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80"
                      : "rounded-full px-3.5 text-zinc-100 no-underline hover:bg-white/15 hover:text-white focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80"
                  }
                >
                  {kind === "github" ? <Github aria-hidden className="size-3.5" /> : null}
                  {kind === "download" ? <Download aria-hidden className="size-3.5" /> : null}
                  <span>{link.label}</span>
                  {kind === "external" ? <ArrowUpRight aria-hidden className="size-3.5" /> : null}
                </GlassButton>
              );
            })}
          </div>
        ) : null}

        {/* Stack mono chips */}
        {project.stack.length > 0 ? (
          <ul aria-label={`${project.name} technology stack`} className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/12 bg-white/[0.05] px-2.5 py-1 font-agave text-xs text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {/* "At a glance" facts definition table */}
        {project.facts.length > 0 ? (
          <GlassCard
            glassVariant="frosted"
            variant="outline"
            className="mt-7 gap-0 overflow-hidden rounded-xl border-white/15 py-0 text-white dark:bg-black/30"
          >
            <div className="border-b border-white/10 px-4 py-2">
              <p className="font-agave text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-300">
                At a glance
              </p>
            </div>
            <dl className="divide-y divide-white/[0.08]">
              {project.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 px-4 py-2.5 text-sm sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4"
                >
                  <dt className="font-agave text-xs font-medium text-zinc-400 sm:pt-0.5">
                    {fact.label}
                  </dt>
                  <dd className="min-w-0 leading-relaxed text-zinc-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        ) : null}

        {/* Hero image framed like a window screenshot */}
        <figure className="mt-8">
          <div className="overflow-hidden rounded-xl border border-white/14 bg-zinc-950/90 shadow-[0_22px_55px_rgba(0,0,0,0.5)]">
            <div
              aria-hidden
              className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-3.5 py-2"
            >
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/10" />
              </div>
              <span className="truncate font-agave text-[0.7rem] text-zinc-400">{windowLabel}</span>
              <span className="w-9 shrink-0" />
            </div>
            <img
              src={project.hero.src}
              alt={project.hero.alt}
              width={project.hero.width}
              height={project.hero.height}
              loading="eager"
              decoding="async"
              className="block h-auto max-w-full w-full"
            />
          </div>
          {project.hero.caption ? (
            <figcaption className="mt-2.5 text-center font-agave text-xs leading-relaxed text-zinc-300">
              {project.hero.caption}
            </figcaption>
          ) : null}
        </figure>
      </header>

      {/* Ordered documentation sections */}
      {project.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          data-spy-id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="mt-10 scroll-mt-24 sm:mt-12 lg:scroll-mt-10"
        >
          <h3
            id={`${section.id}-heading`}
            className="group mb-4 flex items-baseline gap-2 border-b border-white/[0.09] pb-2.5 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl"
          >
            <span>{section.title}</span>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleAnchorClick(e, section.id)}
              aria-label={`Link to section ${section.title}`}
              className="font-agave text-base font-normal text-zinc-400 no-underline opacity-0 transition-opacity hover:text-[#FF7E3D] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80 rounded px-1 group-hover:opacity-100 motion-reduce:transition-none"
            >
              #
            </a>
          </h3>
          <DocBlocks blocks={section.blocks} />
        </section>
      ))}
    </article>
  );
}
