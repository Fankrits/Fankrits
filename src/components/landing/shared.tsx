import type { ReactNode } from "react";
import { ArrowUpRight, Download, Github } from "lucide-react";
import { GlassButton } from "./deferred-glass";

export function SectionHeading({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mb-8 md:mb-12 max-w-2xl text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
      <p className="font-agave text-[0.8rem] uppercase tracking-[0.2em] text-white/75">{label}</p>
      <h2
        id={id}
        className="mt-3 font-display text-4xl md:text-6xl font-medium leading-[1.02] tracking-tight"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-white/85">{children}</p>
      ) : null}
    </header>
  );
}

export function ProjectLinks({
  name,
  live,
  repo,
  extra,
}: {
  name: string;
  extra?: { href: string; label: string };
  live?: { href: string; label: string };
  repo?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {live ? (
        <GlassButton asChild variant="prominent" size="sm">
          <a
            href={live.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name}: ${live.label}`}
          >
            {live.label}
            <ArrowUpRight aria-hidden className="size-4" />
          </a>
        </GlassButton>
      ) : null}
      {extra ? (
        <GlassButton asChild variant="soft" size="sm">
          <a
            href={extra.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name}: ${extra.label}`}
          >
            <Download aria-hidden className="size-4" />
            {extra.label}
          </a>
        </GlassButton>
      ) : null}
      {repo ? (
        <GlassButton asChild variant="soft" size="sm">
          <a
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} source code on GitHub`}
          >
            <Github aria-hidden className="size-4" />
            {repo.label}
          </a>
        </GlassButton>
      ) : null}
    </div>
  );
}

/** Mono chip row used for stacks and tool lists. */
export function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-agave text-[0.8rem] text-white/75">
      {items.map((item) => (
        <li key={item} className="whitespace-nowrap">
          {item}
        </li>
      ))}
    </ul>
  );
}
