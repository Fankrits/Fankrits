import { createFileRoute } from "@tanstack/react-router";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useEffect, useState } from "react";
import { asciiArt } from "../asciiArt";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [disintegratingText, setDisintegratingText] = useState(asciiArt);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const current = window.scrollY / totalScroll;
      setScrollProgress(Math.min(Math.max(current, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Character-by-character exit effect for ASCII Art (from scrollProgress 0 to 0.7)
  useEffect(() => {
    const exitProgress = Math.min(1, Math.max(0, scrollProgress / 0.7));

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
          // Deterministic pseudo-random seed per character index so exit pattern is smooth & reproducible on scroll
          const pseudoRandom = (((i * 2654435761) ^ (i >> 3)) % 1000) / 1000;
          chars[i] = pseudoRandom < exitProgress ? " " : char;
        }
      }
      setDisintegratingText(chars.join(""));
    };

    animationFrameId = requestAnimationFrame(updateExit);
    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollProgress]);

  // Dedicated slowed-down progress factor specifically for background rotation & speed
  const bgScrollProgress = scrollProgress * 0.25;

  return (
    <div className="relative h-[250vh] w-screen bg-black">
      {/* Fixed Sticky Background & Canvas Container */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
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
            uSpeed={0.3 + bgScrollProgress * 0.5}
            uStrength={0.3 + bgScrollProgress * 0.4}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={bgScrollProgress * 45}
            rotationY={130 + bgScrollProgress * 90}
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

        {/* ASCII Art Layer (Character-by-Character Dissolve Exit) */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden p-2 sm:p-4 z-10"
          style={{
            visibility: scrollProgress < 0.75 ? "visible" : "hidden",
          }}
        >
          <pre className="font-mono text-[min(0.38vw,0.7vh)] leading-[min(0.38vw,0.7vh)] text-white whitespace-pre overflow-hidden select-none opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
            {disintegratingText}
          </pre>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono tracking-widest uppercase pointer-events-none transition-opacity duration-300 z-20">
          {scrollProgress > 0.95 ? "End of Page" : "Scroll Down"}
        </div>
      </div>
    </div>
  );
}

export default Home;
