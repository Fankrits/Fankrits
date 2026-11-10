export const PROFILE = {
  name: "Kritsada Nhanjeing",
  handle: "fankrits",
  email: "contact@fankrits.com",
  github: "https://github.com/Fankrits",
  githubHandle: "@Fankrits",
  location: "Bangkok, TH",
} as const;

export interface Project {
  name: string;
  kicker: string;
  summary: string;
  stack: string[];
  live: { href: string; label: string };
  repo?: { href: string; label: string };
}

export const FLAGSHIP = {
  name: "SomeScript",
  kicker: "AI-native LaTeX editor",
  lead: "A chat that works inside your LaTeX project.",
  summary:
    "Ask it to find, fix and recompile. It edits your files and shows every change as a diff you can undo.",
  points: [
    "Reads, edits and compiles the open project",
    "Bring your own model in the desktop app",
    "Live PDF preview with SyncTeX",
  ],
  live: { href: "https://somescript.com", label: "somescript.com" },
  repo: { href: "https://github.com/Fankrits/SomeScript", label: "Source" },
  download: {
    href: "https://github.com/Fankrits/SomeScript/releases/latest",
    label: "Desktop app",
  },
};

export const PROJECTS: Project[] = [
  {
    name: "uptodateStock",
    kicker: "Bilingual market news",
    summary:
      "A live S&P 500 sector heatmap beside daily market stories in full Thai and English. An AI schedule publishes each article through an authenticated MCP endpoint, linked to the tickers it affects.",
    stack: ["TanStack Start", "Neon Postgres", "Better Auth", "MCP"],
    live: { href: "https://uptodatestock.com", label: "uptodatestock.com" },
  },
  {
    name: "Zyplus",
    kicker: "Open-source markdown editor",
    summary:
      "A desktop editor that keeps notes as plain .md files in your own folders. Flip any tab between rich text and raw markdown with one key; Mermaid and KaTeX render inline.",
    stack: ["Tauri 2", "React 19", "Rust", "macOS · Windows · Linux"],
    live: { href: "https://zyplus.app", label: "zyplus.app" },
    repo: { href: "https://github.com/Fankrits/zyplus-editor", label: "Source" },
  },
  {
    name: "SomeMath",
    kicker: "Math learning platform",
    summary:
      "Courses and 27 arcade-style math games that teach understanding before speed. English and Thai, KaTeX formulas, CMS-managed content and PDF certificates.",
    stack: ["Next.js 16", "Sanity", "Clerk", "Stripe"],
    live: { href: "https://somemath.com", label: "Visit site" },
  },
  {
    name: "Memize",
    kicker: "Cognitive training & party games",
    summary:
      "An offline-ready PWA where Gemini tailors each game to the player, and an Elo-style rating keeps difficulty just out of reach. Teams share leaderboards.",
    stack: ["Next.js 16", "Gemini", "Supabase"],
    live: { href: "https://memize.somemath.com", label: "Visit site" },
  },
];

export const CAPABILITIES = [
  {
    title: "AI operations",
    items: "Prompt engineering · LLM benchmarking · MCP servers · Agent orchestration",
  },
  {
    title: "Mathematics",
    items: "Numerical linear algebra · Spectral matrix analysis · Statistical modelling",
  },
  {
    title: "Frontend & systems",
    items: "TypeScript · React 19 · Next.js 16 · TanStack Start · Tailwind CSS v4",
  },
  {
    title: "Backend & cloud",
    items: "Supabase · PostgreSQL · Drizzle · Redis · Docker Compose",
  },
] as const;

export const THESIS = {
  degree: "B.Sc. Mathematics, 2024",
  school: "Thammasat University",
  department: "Faculty of Science and Technology · Mathematics & Statistics",
  title:
    "On the Bounds for the Spectral Norm of Circulant and r-Circulant Matrices with the Gaussian Padovan Numbers",
  blurb:
    "Upper and lower bounds on spectral norms for matrices built from Gaussian Padovan sequences, where number theory meets numerical linear algebra.",
  documents: {
    report: { href: "/thesis/report.pdf", label: "Read the report", detail: "PDF · 40 pages" },
    poster: { href: "/thesis/poster.pdf", label: "View the poster", detail: "PDF · 1 page" },
  },
} as const;
