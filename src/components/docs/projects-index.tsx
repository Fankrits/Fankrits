import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import type { ProjectDoc } from "@/content/projects/types";

export function ProjectsIndex({ projects }: { projects: readonly ProjectDoc[] }) {
  return (
    <div>
      <p className="font-agave text-xs uppercase tracking-[0.2em] text-zinc-300">Documentation</p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Projects
      </h2>
      <p className="mt-4 text-base leading-relaxed text-zinc-200/95 sm:text-[1.075rem] sm:leading-[1.72]">
        Architecture notes, stack details and real screenshots for each shipped project. Pick one to
        read its documentation.
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex">
            <GlassCard
              glassVariant="liquid-refract"
              surfaceClassName="w-full border border-white/15 bg-black/25 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              className="relative h-full w-full gap-0 p-4 text-white"
            >
              <div className="overflow-hidden rounded-lg border border-white/12 bg-zinc-950">
                <img
                  src={project.hero.src}
                  alt=""
                  width={project.hero.width}
                  height={project.hero.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <p className="mt-4 font-agave text-[0.72rem] uppercase tracking-[0.16em] text-zinc-300">
                {project.kicker}
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="text-white no-underline after:absolute after:inset-0 after:rounded-2xl hover:text-white focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#FF7E3D]/80"
                >
                  {project.name}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-200/90">
                {project.summary}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 font-agave text-xs font-medium text-[#FF9A63]">
                Read docs
                <ArrowRight aria-hidden className="size-3.5" />
              </p>
            </GlassCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
