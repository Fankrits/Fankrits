import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glasscn/glass-card";
import type { ProjectDoc } from "@/content/projects/types";
import { cn } from "@/lib/utils";

function PagerCard({ project, dir }: { project: ProjectDoc; dir: "prev" | "next" }) {
  const Icon = dir === "prev" ? ArrowLeft : ArrowRight;
  return (
    <GlassCard
      glassVariant="frosted"
      variant="outline"
      className={cn(
        "relative gap-1 rounded-xl border-white/15 px-4 py-3.5 text-white transition-colors hover:border-white/30 dark:bg-black/30",
        dir === "next" && "sm:text-right",
      )}
    >
      <span
        className={cn(
          "flex items-center gap-1.5 font-agave text-[0.7rem] uppercase tracking-[0.16em] text-zinc-300",
          dir === "next" && "sm:justify-end",
        )}
      >
        {dir === "prev" ? <Icon aria-hidden className="size-3.5" /> : null}
        {dir === "prev" ? "Previous" : "Next"}
        {dir === "next" ? <Icon aria-hidden className="size-3.5" /> : null}
      </span>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="font-display text-lg font-semibold text-white no-underline after:absolute after:inset-0 after:rounded-xl hover:text-white focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#FF7E3D]/80"
      >
        {project.name}
      </Link>
      <span className="truncate text-sm text-zinc-300">{project.kicker}</span>
    </GlassCard>
  );
}

export function ProjectPager({
  projects,
  slug,
}: {
  projects: readonly ProjectDoc[];
  slug: string;
}) {
  const index = projects.findIndex((project) => project.slug === slug);
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index >= 0 ? projects[index + 1] : undefined;
  if (!prev && !next) return null;

  return (
    <nav aria-label="Other projects" className="mt-16 grid gap-3 sm:grid-cols-2">
      {prev ? <PagerCard project={prev} dir="prev" /> : <span className="hidden sm:block" />}
      {next ? <PagerCard project={next} dir="next" /> : null}
    </nav>
  );
}
