import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GlassHeader } from "@/components/glassyui/glass-header";
import { GlassButton } from "./deferred-glass";
import { NAV_LINKS, PROFILE } from "./data";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

/** Highlights the nav link of the section crossing the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

/**
 * Floating glass navigation, inset from the top edge. Hidden (translated off-screen) while the
 * ASCII hero is on screen so the hero stays untouched; transform is used instead of opacity so
 * the glass keeps sampling the shader background.
 */
export function SiteHeader({ visible }: { visible: boolean }) {
  const active = useActiveSection();
  // Mount the glass header only once it is first needed: building its lens map is not free.
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (visible) setShown(true);
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-5 md:pt-7 transition-transform duration-500 ease-out motion-reduce:transition-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-160%)",
        visibility: visible ? "visible" : "hidden",
        transitionProperty: "transform, visibility",
      }}
      aria-hidden={!visible}
      inert={!visible}
    >
      {shown ? (
        <GlassHeader
          position="static"
          navigationLabel="Primary"
          className="pointer-events-auto mx-auto h-[60px] max-w-[880px] [--lg-header-tint:rgb(20_20_22/0.55)]"
          brand={
            <a href="#top" className="font-agave text-lg font-bold tracking-tight text-white">
              {PROFILE.handle}
            </a>
          }
          actions={
            <GlassButton asChild variant="prominent" size="sm">
              <a href={`mailto:${PROFILE.email}`}>
                <Mail aria-hidden className="size-4" />
                Email
              </a>
            </GlassButton>
          }
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href.slice(1) ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </GlassHeader>
      ) : null}
    </div>
  );
}
