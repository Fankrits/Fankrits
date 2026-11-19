import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { Separator } from "@/components/ui/separator";
import { PROFILE } from "@/components/landing/data";
import type { ProjectDoc } from "@/content/projects/types";
import { DocsDesktopSidebar, DocsMobileContents } from "./docs-sidebar";
import { DocsNavProvider } from "./docs-nav-context";
import { useScrollSpy } from "./use-scroll-spy";

const loadDitherBurn = () => import("@/components/originkit/ui/dither-burn");
const DitherBurn = lazy(loadDitherBurn);

if (typeof window !== "undefined") void loadDitherBurn();

/**
 * Shared frame for /projects and /projects/$slug: background, sidebar and footer. The content is
 * deliberately not wrapped in a card; cards are used only for individual pieces inside it.
 */
export function DocsShell({
  projects,
  children,
}: {
  projects: readonly ProjectDoc[];
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { slug } = useParams({ strict: false }) as { slug?: string };
  const current = projects.find((project) => project.slug === slug);
  const { activeId, navigateTo } = useScrollSpy(current ? [current] : []);

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#08070B] text-white">
      <h1 className="sr-only">Projects</h1>

      {/* Fixed background: the landing page's dither, dimmed so body text stays readable. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
        style={{ background: "#08070B" }}
      >
        {mounted ? (
          <div className="size-full animate-in fade-in duration-1000 motion-reduce:animate-none">
            <Suspense fallback={null}>
              <DitherBurn
                background="#08070B"
                color1="#E65923"
                color2="#FF7E3D"
                speed={27}
                size={148}
                angle={56}
                pixelSize={2}
                hover={58}
                reach={200}
                style={{ minWidth: 0, minHeight: 0, width: "100%", height: "100%" }}
              />
            </Suspense>
          </div>
        ) : null}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-10">
        <DocsNavProvider value={{ navigateTo }}>
          <DocsMobileContents
            projects={projects}
            currentSlug={current?.slug}
            activeId={activeId}
            onNavigate={navigateTo}
          />

          <div className="flex flex-col lg:flex-row lg:gap-10">
            <DocsDesktopSidebar
              projects={projects}
              currentSlug={current?.slug}
              activeId={activeId}
              onNavigate={navigateTo}
            />

            <main className="min-w-0 flex-1">
              <div className="w-full max-w-[76rem] py-10 lg:py-16">
                {children}

                <Separator className="mt-16 mb-8 h-px w-full bg-white/12" />

                <footer className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <GlassButton
                      nativeButton={false}
                      render={<Link to="/" />}
                      glassVariant="subtle"
                      className="rounded-full px-4 text-zinc-100 no-underline hover:bg-white/15 hover:text-white focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80"
                    >
                      <ArrowLeft aria-hidden className="size-4" />
                      Back to home
                    </GlassButton>

                    <GlassButton
                      nativeButton={false}
                      render={<a href={`mailto:${PROFILE.email}`} />}
                      glassVariant="liquid-refract"
                      className="rounded-full bg-white/15 px-4 text-white no-underline hover:bg-white/25 hover:text-white focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80"
                    >
                      <Mail aria-hidden className="size-4" />
                      {PROFILE.email}
                    </GlassButton>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 font-agave text-xs text-zinc-400">
                    <span>
                      © {new Date().getFullYear()} {PROFILE.name}
                    </span>
                    <span>{PROFILE.location}</span>
                  </div>
                </footer>
              </div>
            </main>
          </div>
        </DocsNavProvider>
      </div>
    </div>
  );
}
