import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { asciiArt } from "../asciiArt";
import { SITE } from "@/lib/seo";
import { WorkSection } from "@/components/landing/work-section";
import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";

const loadDitherBurn = () => import("@/components/originkit/ui/dither-burn");
const DitherBurn = lazy(loadDitherBurn);

// Start fetching the WebGL chunk as soon as the route module runs, in parallel with hydration.
if (typeof window !== "undefined") void loadDitherBurn();

export const Route = createFileRoute("/")({
  head: () => ({ links: [{ rel: "canonical", href: SITE.url }] }),
  component: Home,
});

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [disintegratingText, setDisintegratingText] = useState(asciiArt);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = -rect.top;
      // Nothing reads progress past 0.25 (hero dissolved), so clamp there: React then
      // bails out of re-rendering the page on every scroll tick for the rest of the page.
      const p = Math.min(Math.max(currentScroll / totalScroll, 0), 0.25);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Character-by-character exit effect for ASCII Art (from progress 0 to 0.25)
  useEffect(() => {
    const exitProgress = Math.min(1, Math.max(0, progress / 0.25));

    if (exitProgress <= 0) {
      setDisintegratingText(asciiArt);
      return;
    }

    if (exitProgress >= 1) {
      setDisintegratingText("");
      return;
    }

    let animationFrameId: number;
    const updateExit = () => {
      const len = asciiArt.length;
      const chars: string[] = Array.from({ length: len });

      for (let i = 0; i < len; i++) {
        const char = asciiArt[i];
        if (char === "\n" || char === " ") {
          chars[i] = char;
        } else {
          // Deterministic pseudo-random seed per character index
          const pseudoRandom = (((i * 2654435761) ^ (i >> 3)) % 1000) / 1000;
          chars[i] = pseudoRandom < exitProgress ? " " : char;
        }
      }
      setDisintegratingText(chars.join(""));
    };

    animationFrameId = requestAnimationFrame(updateExit);
    return () => cancelAnimationFrame(animationFrameId);
  }, [progress]);

  // Phase 1: ASCII Art (progress 0.00 -> 0.25)
  let asciiOpacity = 1;
  if (progress > 0.2) {
    asciiOpacity = Math.max(0, 1 - (progress - 0.2) / 0.05);
  }

  return (
    <div id="top" className="relative min-h-screen w-screen bg-black text-white">
      {/* Page heading for search engines, AI crawlers and screen readers; the hero itself is art. */}
      <h1 className="sr-only">
        Kritsada Nhanjeing (Fankrits), mathematician and AI builder in Bangkok
      </h1>
      <p className="sr-only">
        Kritsada Nhanjeing studied mathematics at Thammasat University and works on AI operations,
        agent orchestration, MCP servers and full-stack web apps. Projects include SomeScript, an AI
        LaTeX editor; uptodateStock, a bilingual market news site; Zyplus, an open-source markdown
        editor; SomeMath, a math learning platform; and Memize, a cognitive training app.
      </p>

      {/* Fixed Background Canvas Container */}
      <div
        className="fixed inset-0 h-screen w-screen overflow-hidden pointer-events-none z-0"
        style={{ background: "#08070B" }}
      >
        {mounted ? (
          <div className="size-full animate-in fade-in duration-1000">
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
      </div>

      {/* Unified Single Scroll Container (220vh) */}
      <div ref={containerRef} className="relative h-[220vh] w-screen z-10">
        <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center justify-center">
          {/* ASCII Art Layer */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden p-2 sm:p-4 z-10"
            style={{
              visibility: progress < 0.25 ? "visible" : "hidden",
              opacity: asciiOpacity,
            }}
          >
            <pre
              aria-hidden="true"
              className="font-mono text-[min(0.38vw,0.7vh)] leading-[min(0.38vw,0.7vh)] text-white whitespace-pre overflow-hidden select-none opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            >
              {disintegratingText}
            </pre>
          </div>
        </div>
      </div>

      {/* Page content scrolls over the fixed background */}
      {/* The hero is done after the first 30vh of scroll, so pull the content up (to just below the hero) over the rest
          of the pinned container instead of leaving a long empty scroll. */}
      <main className="relative z-10 mx-auto -mt-[120vh] w-full max-w-6xl px-4 pb-4 sm:px-6">
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default Home;
