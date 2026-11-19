/** Content model for the /projects documentation page. Content files export a `ProjectDoc`. */

export interface DocImage {
  /** Public URL, e.g. /projects/somescript/01-landing.webp */
  src: string;
  alt: string;
  caption?: string;
  /** Intrinsic pixel size of the file on disk (prevents layout shift). */
  width: number;
  height: number;
}

/** Inline text supports `code` spans and **bold**; nothing else. */
export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; image: DocImage }
  | { type: "code"; code: string; lang?: string; title?: string }
  | { type: "callout"; tone: "note" | "tip"; text: string; title?: string }
  | { type: "table"; head: string[]; rows: string[][] };

export interface DocSection {
  /** Unique across the whole page, kebab-case, prefixed by project slug, e.g. "somescript-features". */
  id: string;
  title: string;
  blocks: DocBlock[];
}

export interface ProjectDoc {
  slug: string;
  name: string;
  /** Short category line, e.g. "AI-native LaTeX editor". */
  kicker: string;
  /** One or two sentences, plain text. */
  summary: string;
  status: "Live" | "Open source" | "Beta" | "Internal";
  links: { label: string; href: string }[];
  stack: string[];
  /** Key/value facts shown in an "at a glance" table (platform, license, auth, ...). */
  facts: { label: string; value: string }[];
  /** Label shown in the screenshot frame's title bar. Defaults to the host of the first link, else the slug. */
  windowLabel?: string;
  /** Main screenshot shown right under the title. */
  hero: DocImage;
  /** Ordered sections. First should be an overview; include a Screenshots section with real captures. */
  sections: DocSection[];
}
