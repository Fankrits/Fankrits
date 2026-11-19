export const PROFILE = {
  name: "Kritsada Nhanjeing",
  role: "AI Operation Specialist",
  handle: "fankrits",
  email: "contact@fankrits.com",
  github: "https://github.com/Fankrits",
  githubHandle: "@Fankrits",
  location: "Bangkok, TH",
} as const;

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
