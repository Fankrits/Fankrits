import { type MouseEvent, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, List } from "lucide-react";
import { PROFILE } from "@/components/landing/data";
import type { ProjectDoc } from "@/content/projects/types";
import { cn } from "@/lib/utils";

interface DocsSidebarProps {
  projects: readonly ProjectDoc[];
  /** Slug of the project page being read; undefined on the overview. */
  currentSlug: string | undefined;
  activeId: string;
  onNavigate: (id: string) => void;
}

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80";

function ProjectNavList({
  projects,
  currentSlug,
  activeId,
  onSelect,
}: Omit<DocsSidebarProps, "onNavigate"> & { onSelect: (id: string) => void }) {
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    onSelect(id);
  };

  const rowClass = (active: boolean) =>
    cn(
      "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm no-underline transition-colors",
      FOCUS,
      active
        ? "bg-white/[0.08] font-semibold text-white hover:text-white"
        : "font-medium text-zinc-300 hover:bg-white/[0.04] hover:text-white",
    );
  const dot = (active: boolean) => (
    <span
      aria-hidden
      className={cn("size-1.5 shrink-0 rounded-full", active ? "bg-[#FF7E3D]" : "bg-white/25")}
    />
  );

  return (
    <ul className="space-y-1">
      <li>
        <Link
          to="/projects"
          activeOptions={{ exact: true }}
          aria-current={currentSlug ? undefined : "page"}
          className={rowClass(!currentSlug)}
        >
          {dot(!currentSlug)}
          All projects
        </Link>
      </li>
      {projects.map((project) => {
        const isCurrent = project.slug === currentSlug;
        return (
          <li key={project.slug}>
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              aria-current={isCurrent ? "page" : undefined}
              className={rowClass(isCurrent)}
            >
              {dot(isCurrent)}
              <span className="truncate">{project.name}</span>
            </Link>

            {isCurrent ? (
              <ul className="mt-1 mb-2 ml-3.5 space-y-0.5 border-l border-white/12 pl-3">
                {project.sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(event) => handleSectionClick(event, section.id)}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "relative block rounded-md px-2.5 py-1.5 text-[0.825rem] leading-snug no-underline transition-colors",
                          FOCUS,
                          isActive
                            ? "font-medium text-white before:absolute before:top-1.5 before:bottom-1.5 before:-left-[13px] before:w-[2px] before:rounded-full before:bg-[#FF7E3D]"
                            : "text-zinc-300/80 hover:bg-white/[0.04] hover:text-white",
                        )}
                      >
                        <span className="block truncate">{section.title}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export function DocsDesktopSidebar(props: DocsSidebarProps) {
  return (
    <aside className="hidden shrink-0 lg:sticky lg:top-0 lg:block lg:h-screen lg:w-60 lg:self-start xl:w-64">
      <div className="flex h-full flex-col py-10 lg:py-16">
        <div className="shrink-0 pb-4">
          <Link
            to="/"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md font-agave text-xs font-semibold tracking-tight text-zinc-300 no-underline hover:text-white",
              FOCUS,
            )}
          >
            <ArrowLeft aria-hidden className="size-3.5" />
            <span>{PROFILE.handle}</span>
          </Link>
          <p className="mt-3 font-display text-lg font-semibold tracking-tight text-white">
            Projects
          </p>
        </div>

        <nav aria-label="Projects contents" className="min-h-0 flex-1 overflow-y-auto pb-6">
          <ProjectNavList
            projects={props.projects}
            currentSlug={props.currentSlug}
            activeId={props.activeId}
            onSelect={props.onNavigate}
          />
        </nav>
      </div>
    </aside>
  );
}

export function DocsMobileContents({
  projects,
  currentSlug,
  activeId,
  onNavigate,
}: DocsSidebarProps) {
  const [open, setOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const project = projects.find((p) => p.slug === currentSlug);
  const section = project?.sections.find((s) => s.id === activeId);

  // Close the sheet whenever the reader lands on another page.
  useEffect(() => setOpen(false), [currentSlug]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sticky top-0 z-40 -mx-4 border-b border-white/10 bg-black/60 backdrop-blur-xl sm:-mx-6 lg:hidden">
      <div className="flex min-w-0 items-center justify-between gap-2 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to="/"
            className={cn(
              "inline-flex shrink-0 items-center gap-1 rounded-md font-agave text-xs font-semibold text-zinc-200 no-underline hover:text-white",
              FOCUS,
            )}
          >
            <ArrowLeft aria-hidden className="size-3.5" />
            <span>{PROFILE.handle}</span>
          </Link>
          <span aria-hidden className="shrink-0 text-white/25">
            /
          </span>
          <span className="min-w-0 truncate text-xs font-medium text-zinc-300">
            {project ? (section ? `${project.name} · ${section.title}` : project.name) : "Projects"}
          </span>
        </div>

        <button
          ref={toggleBtnRef}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-docs-contents"
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/12 bg-white/[0.07] px-2.5 py-1.5 font-agave text-xs font-medium text-white hover:bg-white/[0.14]",
            FOCUS,
          )}
        >
          <List aria-hidden className="size-3.5 text-[#FF7E3D]" />
          <span>Contents</span>
          <ChevronDown
            aria-hidden
            className={cn(
              "size-3.5 text-zinc-300 transition-transform duration-200 motion-reduce:transition-none",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-docs-contents"
          aria-label="Projects contents"
          className="max-h-[65vh] overflow-y-auto border-t border-white/10 px-3 py-3 sm:px-5"
        >
          <ProjectNavList
            projects={projects}
            currentSlug={currentSlug}
            activeId={activeId}
            onSelect={(id) => {
              setOpen(false);
              onNavigate(id);
            }}
          />
        </nav>
      ) : null}
    </div>
  );
}
