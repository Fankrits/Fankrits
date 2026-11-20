import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { PROFILE, SUMMARY } from "./data";

export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-24 pb-24 pt-10 text-white md:pb-40 md:pt-16 [text-shadow:0_2px_28px_rgba(0,0,0,0.5)]"
    >
      {/*
        Staggered layout: line one of the heading runs from the left edge, line two steps in to the
        text column, and the portrait hangs beside line two. On small screens it stacks.
        The h2 is `contents` so its two lines can sit in separate grid cells.
      */}
      <div className="grid gap-y-8 lg:grid-cols-[22rem_1fr] lg:gap-x-16 lg:gap-y-0">
        <p className="font-agave text-[0.8rem] uppercase tracking-[0.22em] text-white/80 lg:col-span-2 lg:mb-6">
          {PROFILE.name}
        </p>

        <h2
          id="work-title"
          className="contents font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block lg:col-span-2 lg:pl-10">
            <em className="font-normal italic">Mathematician</em> turned
          </span>
          <span className="-mt-8 block lg:col-start-2 lg:row-start-3 lg:mt-0">
            agentic engineer.
          </span>
        </h2>

        {/* Uncropped square portrait with sharp corners; the offset outline sits behind it. */}
        <div className="relative isolate w-56 sm:w-72 lg:col-start-1 lg:row-span-2 lg:row-start-3 lg:mt-3 lg:w-full">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-x-3 translate-y-3 border border-white/40 sm:translate-x-4 sm:translate-y-4"
          />
          <img
            src="/logo512.webp"
            alt={`Portrait of ${PROFILE.name}`}
            width={512}
            height={512}
            decoding="async"
            className="aspect-square w-full border border-white/30 object-contain shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div className="lg:col-start-2 lg:row-start-4 lg:mt-10">
          <p className="max-w-lg text-lg leading-relaxed text-white/85 md:text-xl md:leading-relaxed">
            {SUMMARY.body}
          </p>
          <div className="mt-8 flex">
            <GlassButton
              nativeButton={false}
              render={<Link to="/projects" />}
              glassVariant="liquid-refract"
              size="lg"
              className="rounded-full bg-white/15 px-6 text-white hover:bg-white/25"
            >
              View projects
              <ArrowRight aria-hidden className="size-4" />
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}
