import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { LiquidGlass } from "@/components/ui/glasscn/liquid-glass";
import { PROFILE } from "./data";

/**
 * Floating glass navigation, inset from the top edge. Hidden (translated off-screen) while the
 * ASCII hero is on screen so the hero stays untouched; transform is used instead of opacity so
 * the glass keeps sampling the shader background.
 */
export function SiteHeader({ visible }: { visible: boolean }) {
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
        <LiquidGlass className="pointer-events-auto mx-auto h-[60px] max-w-[880px] rounded-full border border-white/15 bg-zinc-950/55 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <header className="flex size-full items-center justify-between px-5">
            <nav aria-label="Primary" className="flex w-full items-center justify-between gap-4">
              <a href="#top" className="font-agave text-lg font-bold tracking-tight text-white">
                {PROFILE.handle}
              </a>
              <GlassButton
                nativeButton={false}
                render={<a href={`mailto:${PROFILE.email}`} />}
                glassVariant="liquid-refract"
                size="sm"
                className="rounded-full bg-white/15 px-3 text-white hover:bg-white/25"
              >
                <Mail aria-hidden className="size-4" />
                Email
              </GlassButton>
            </nav>
          </header>
        </LiquidGlass>
      ) : null}
    </div>
  );
}
