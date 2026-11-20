import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ProjectDoc } from "@/content/projects/types";

interface ScrollSpyState {
  activeId: string;
  activeProjectSlug: string;
  navigateTo: (id: string) => void;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useScrollSpy(projects: readonly ProjectDoc[]): ScrollSpyState {
  const { orderedIds, idToProject } = useMemo(() => {
    const ids: string[] = [];
    const map = new Map<string, string>();
    for (const project of projects) {
      ids.push(project.slug);
      map.set(project.slug, project.slug);
      for (const section of project.sections) {
        ids.push(section.id);
        map.set(section.id, project.slug);
      }
    }
    return { orderedIds: ids, idToProject: map };
  }, [projects]);

  const firstId = orderedIds[0] ?? "";
  const [activeId, setActiveId] = useState<string>(firstId);
  const lockUntilRef = useRef<number>(0);

  // A different project page means a different set of sections: start from its top.
  useEffect(() => {
    setActiveId(firstId);
  }, [firstId]);

  const navigateTo = useCallback((id: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const target = document.getElementById(id);
    if (!target) return;

    const reduced = prefersReducedMotion();
    lockUntilRef.current = performance.now() + (reduced ? 80 : 600);
    setActiveId(id);

    const nextHash = `#${encodeURIComponent(id)}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash);
    }

    target.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  // Honour initial #hash on mount and react to browser back/forward hash changes.
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    let rafId: number | null = null;

    const applyHash = (initial: boolean) => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;
      let decoded = raw;
      try {
        decoded = decodeURIComponent(raw);
      } catch {
        // Keep raw hash if malformed percent-encoding.
      }
      const target = document.getElementById(decoded);
      if (!target) return;

      const reduced = prefersReducedMotion();
      lockUntilRef.current = performance.now() + (initial || reduced ? 200 : 500);
      if (idToProject.has(decoded)) {
        setActiveId(decoded);
      }
      const scroll = () => {
        target.scrollIntoView({
          behavior: initial || reduced ? "auto" : "smooth",
          block: "start",
        });
      };

      if (initial) {
        rafId = window.requestAnimationFrame(scroll);
      } else {
        scroll();
      }
    };

    applyHash(true);

    const onHashChange = () => applyHash(false);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [idToProject]);

  // IntersectionObserver scroll-spy over non-overlapping [data-spy-id] bands.
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (orderedIds.length === 0) return;

    const elements: HTMLElement[] = [];
    for (const id of orderedIds) {
      const el =
        document.querySelector<HTMLElement>(`[data-spy-id="${CSS.escape(id)}"]`) ??
        document.getElementById(id);
      if (el) elements.push(el);
    }
    if (elements.length === 0) return;

    const visibleIds = new Set<string>();

    const pickActive = () => {
      if (performance.now() < lockUntilRef.current) return;

      if (window.scrollY < 32) {
        setActiveId(orderedIds[0] ?? "");
        return;
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      if (atBottom) {
        setActiveId(orderedIds[orderedIds.length - 1] ?? "");
        return;
      }

      for (const id of orderedIds) {
        if (visibleIds.has(id)) {
          setActiveId(id);
          return;
        }
      }

      // Fallback when viewport rests in a gap between bands: choose last element above reading line.
      const readingLine = 140;
      let lastAbove: string | null = null;
      for (const el of elements) {
        const spyId = el.dataset.spyId ?? el.id;
        if (el.getBoundingClientRect().top <= readingLine) {
          lastAbove = spyId;
        } else {
          break;
        }
      }
      if (lastAbove) {
        setActiveId(lastAbove);
      }
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            const spyId = el.dataset.spyId ?? el.id;
            if (!spyId) continue;
            if (entry.isIntersecting) {
              visibleIds.add(spyId);
            } else {
              visibleIds.delete(spyId);
            }
          }
          pickActive();
        },
        {
          rootMargin: "-96px 0px -62% 0px",
          threshold: [0, 0.25, 0.5, 1],
        },
      );

      for (const el of elements) {
        observer.observe(el);
      }
    }

    const onScroll = () => pickActive();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [orderedIds]);

  const activeProjectSlug = idToProject.get(activeId) ?? projects[0]?.slug ?? "";

  return { activeId, activeProjectSlug, navigateTo };
}
