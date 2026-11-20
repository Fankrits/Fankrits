import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glasscn/glass-button";
import { PROJECT_DOCS } from "@/content/projects";
import { PROFILE } from "./data";

interface Tile {
  src: string;
  project: string;
}

/** Every real screenshot from the project docs (hero + up to 3 more per project), split into two rows. */
function buildRows(): [Tile[], Tile[]] {
  const seen = new Set<string>();
  const tiles: Tile[] = [];
  for (const doc of PROJECT_DOCS) {
    const images = [
      doc.hero,
      ...doc.sections.flatMap((section) =>
        section.blocks.flatMap((block) => (block.type === "image" ? [block.image] : [])),
      ),
    ];
    for (const image of images.slice(0, 4)) {
      if (seen.has(image.src)) continue;
      seen.add(image.src);
      tiles.push({ src: image.src, project: doc.name });
    }
  }
  const a: Tile[] = [];
  const b: Tile[] = [];
  tiles.forEach((tile, i) => (i % 2 === 0 ? a : b).push(tile));
  return [a, b];
}

function MarqueeRow({ tiles, reverse }: { tiles: Tile[]; reverse?: boolean }) {
  // The list is rendered twice so the track can loop seamlessly; both copies are decorative.
  return (
    <div className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden className="flex shrink-0 gap-4 pr-4">
            {tiles.map((tile) => (
              <li
                key={tile.src}
                className="relative w-56 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-zinc-950 shadow-[0_14px_36px_rgba(0,0,0,0.4)] sm:w-72"
              >
                <img
                  src={tile.src}
                  alt=""
                  width={1440}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                <span className="absolute bottom-2 left-2 rounded-md bg-black/65 px-2 py-0.5 font-agave text-[0.7rem] text-white backdrop-blur-sm">
                  {tile.project}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function WorkSection() {
  const [rowA, rowB] = buildRows();
  const count = PROJECT_DOCS.length;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-24 py-16 text-center text-white md:py-24"
    >
      <img
        src="/logo512.webp"
        alt={`Portrait of ${PROFILE.name}`}
        width={512}
        height={512}
        decoding="async"
        className="mx-auto size-24 rounded-full border border-white/25 object-cover shadow-[0_16px_40px_rgba(0,0,0,0.5)] md:size-28"
      />

      <h2
        id="work-title"
        className="mt-6 font-display text-4xl font-medium tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] md:text-6xl"
      >
        {PROFILE.name}
      </h2>
      <p className="mt-3 font-agave text-[0.85rem] uppercase tracking-[0.22em] text-white/80">
        {PROFILE.role}
      </p>

      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_2px_20px_rgba(0,0,0,0.45)] md:text-lg">
        I&apos;ve built <strong className="font-semibold text-white">{count} projects</strong> so
        far: editors, learning platforms, market news and internal tools. Each one is documented
        with its architecture and screenshots.
      </p>

      <div className="mt-8 flex justify-center">
        <GlassButton
          nativeButton={false}
          render={<Link to="/projects" />}
          glassVariant="liquid-refract"
          size="lg"
          className="rounded-full bg-white/15 px-6 text-white hover:bg-white/25"
        >
          View projects
          <ArrowRight aria-hidden className="size-4" />
        </GlassButton>
      </div>

      {/* Full-bleed: break out of the page's max-w container so the rows run edge to edge. */}
      <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 space-y-4 md:mt-16">
        <MarqueeRow tiles={rowA} />
        <MarqueeRow tiles={rowB} reverse />
      </div>
    </section>
  );
}
