import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/** One step of the example; `delay` staggers the reveal in milliseconds. */
function Step({ shown, delay, children }: { shown: boolean; delay: number; children: ReactNode }) {
  return (
    <div
      className="transition-all duration-500 ease-out motion-reduce:transition-none"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(8px)",
        transitionDelay: shown ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}

/**
 * A small static illustration of the SomeScript chat: one request, the edit it makes as a diff
 * with Undo, and a recompile. Tool names match the real assistant. Not a live chat.
 */
export function ChatDemo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="group"
      aria-label="Illustrative example of the SomeScript chat editing a file"
      className="overflow-hidden rounded-2xl border border-white/20 bg-black/40"
    >
      <div className="border-b border-white/15 px-4 py-2 font-agave text-[0.8rem] text-white/70">
        Chat · example
      </div>

      <div className="space-y-3 p-4 text-sm leading-relaxed text-white/90">
        <Step shown={shown} delay={0}>
          <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-white/15 px-3.5 py-2">
            Figure 1 runs into the margin. Fix it and recompile.
          </p>
        </Step>

        <Step shown={shown} delay={500}>
          <div className="overflow-hidden rounded-lg border border-white/15 font-agave text-[0.8rem]">
            <div className="flex items-center justify-between border-b border-white/15 bg-white/[0.06] px-3 py-1.5">
              <span>
                edit_file <span className="text-white/70">main.tex</span>
              </span>
              <span className="rounded-full border border-white/25 px-2.5 text-white/85">Undo</span>
            </div>
            <pre className="overflow-x-auto whitespace-pre px-3 py-2 leading-relaxed">
              <span className="block bg-red-400/20 text-red-100">
                {"- \\includegraphics[width=1.2\\textwidth]{fig1}"}
              </span>
              <span className="block bg-emerald-400/20 text-emerald-100">
                {"+ \\includegraphics[width=0.9\\textwidth]{fig1}"}
              </span>
            </pre>
          </div>
        </Step>

        <Step shown={shown} delay={1000}>
          <p className="font-agave text-[0.8rem] text-white/80">
            compile_project <span className="text-white/70">✓ compiled, 0 errors</span>
          </p>
        </Step>
      </div>
    </div>
  );
}
