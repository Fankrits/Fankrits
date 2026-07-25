import { createFileRoute } from "@tanstack/react-router";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useEffect, useRef, useState } from "react";
import { asciiArt } from "../asciiArt";
import TerminalDemo from "../components/terminal-demo";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [disintegratingText, setDisintegratingText] = useState(asciiArt);

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
      const p = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
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

  // Phase 2: Bio Overlay (progress 0.18 -> 0.52)
  // 0.18 -> 0.30: Fade in & move to center
  // 0.30 -> 0.42: Stay centered & 100% visible
  // 0.42 -> 0.52: Fade out & move slightly upward
  let bioOpacity = 0;
  if (progress >= 0.18 && progress <= 0.3) {
    bioOpacity = (progress - 0.18) / 0.12;
  } else if (progress > 0.3 && progress < 0.42) {
    bioOpacity = 1;
  } else if (progress >= 0.42 && progress <= 0.52) {
    bioOpacity = 1 - (progress - 0.42) / 0.1;
  }

  let bioTranslateY = 0;
  if (progress < 0.3) {
    const factor = Math.max(0, (0.3 - progress) / 0.12);
    bioTranslateY = factor * 20;
  } else if (progress > 0.42) {
    const factor = Math.min(1, (progress - 0.42) / 0.1);
    bioTranslateY = -factor * 30;
  }

  // Phase 3: Terminal Demo Overlay (progress 0.45 -> 1.00)
  // 0.45 -> 0.65: Shift up dynamically from bottom (100vh -> 0vh) & fade in
  // 0.65 -> 1.00: Stay centered & 100% visible for interactive use
  let terminalOpacity = 0;
  let terminalTranslateY: string | number = "100vh";
  if (progress < 0.45) {
    terminalOpacity = 0;
    terminalTranslateY = "100vh";
  } else if (progress >= 0.45 && progress <= 0.65) {
    terminalOpacity = (progress - 0.45) / 0.2;
    const factor = Math.max(0, (0.65 - progress) / 0.2);
    terminalTranslateY = `${factor * 100}vh`;
  } else {
    terminalOpacity = 1;
    terminalTranslateY = "0vh";
  }

  return (
    <div className="relative min-h-screen w-screen bg-black text-white">
      {/* Fixed Background Canvas Container */}
      <div className="fixed inset-0 h-screen w-screen overflow-hidden pointer-events-none z-0">
        <ShaderGradientCanvas
          style={{
            width: "100%",
            height: "100%",
          }}
          lazyLoad={undefined}
          fov={undefined}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#73bfc4"
            color2="#ff810a"
            color3="#8da0ce"
            reflection={0.4}
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            enableTransition={false}
          />
        </ShaderGradientCanvas>
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
            <pre className="font-mono text-[min(0.38vw,0.7vh)] leading-[min(0.38vw,0.7vh)] text-white whitespace-pre overflow-hidden select-none opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
              {disintegratingText}
            </pre>
          </div>

          {/* Bio Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center p-6 z-20"
            style={{
              opacity: bioOpacity,
              transform: `translateY(${bioTranslateY}px)`,
              pointerEvents: bioOpacity > 0.1 ? "auto" : "none",
            }}
          >
            <div className="max-w-3xl w-full text-center text-white space-y-6 font-agave">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Welcome to My Portfolio
              </h2>
              <p className="text-base md:text-xl text-white/90 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                Welcome to my website — a space dedicated to showcasing my work and creative
                journey. Here, you'll find a curated collection of my projects, reflecting my
                skills, passions, and dedication to my craft. Let yourself explore the different
                sections and get a sense of who I am as a creator.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs md:text-sm font-agave text-white/80">
                <span className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 shadow-sm">
                  Mathematics Graduate
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 shadow-sm">
                  AI Builder
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 shadow-sm">
                  Product & Systems
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Section Overlay */}
          <div
            id="terminal-section"
            className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 z-30"
            style={{
              opacity: terminalOpacity,
              transform: `translateY(${terminalTranslateY})`,
              pointerEvents: terminalOpacity > 0.1 ? "auto" : "none",
            }}
          >
            <TerminalDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
