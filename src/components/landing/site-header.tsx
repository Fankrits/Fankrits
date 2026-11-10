import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GlassHeader } from "@/components/glassyui/glass-header";
import { GlassButton } from "./deferred-glass";
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
        ></GlassHeader>
      ) : null}
    </div>
  );
}
