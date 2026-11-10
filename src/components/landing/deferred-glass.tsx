import { forwardRef, useEffect, useRef, useState } from "react";
import type { ComponentProps } from "react";
import { GlassButton as BaseGlassButton } from "@/components/glassyui/glass-button";
import { GlassPanel as BaseGlassPanel } from "@/components/glassyui/glass-panel";

/**
 * Glassy UI builds each Chromium edge-lens map on the CPU the moment a surface mounts. With
 * 4 panels and ~15 buttons that is seconds of main-thread work during page load. These wrappers
 * mount with the plain frosted material and switch the lens on once the element is near the
 * viewport and the browser is idle, one element per idle slot.
 */
function whenIdle(callback: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout: 1500 });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 200);
  return () => window.clearTimeout(id);
}

function useLensWhenNear(enabled: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || ready || !el) return;
    let cancelIdle: (() => void) | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        cancelIdle = whenIdle(() => setReady(true));
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelIdle?.();
    };
  }, [enabled, ready]);

  return { ref, ready: enabled && ready };
}

type PanelProps = ComponentProps<typeof BaseGlassPanel> & { lensEnabled?: boolean };

export const GlassPanel = forwardRef<HTMLDivElement, PanelProps>(
  ({ lensEnabled = true, lens, ...props }, forwardedRef) => {
    const { ref, ready } = useLensWhenNear(lensEnabled);
    const wantsLens = lens ?? (props.preset === "showcase" || props.preset === "control");
    return (
      <BaseGlassPanel
        {...props}
        lens={wantsLens && ready}
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
      />
    );
  },
);
GlassPanel.displayName = "GlassPanel";

type ButtonProps = ComponentProps<typeof BaseGlassButton> & { lensEnabled?: boolean };

export const GlassButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ lensEnabled = true, lens, variant = "primary", ...props }, forwardedRef) => {
    const { ref, ready } = useLensWhenNear(lensEnabled);
    const wantsLens = lens ?? variant !== "ghost";
    return (
      <BaseGlassButton
        {...props}
        variant={variant}
        lens={wantsLens && ready}
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
      />
    );
  },
);
GlassButton.displayName = "GlassButton";
