export function SkillsView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Technical Skills &amp; Capabilities
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            skills.md · Core Stack &amp; Architecture
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-sky-400 bg-sky-950/40 border border-sky-800/60 font-mono rounded-xs">
          STATUS: VERIFIED
        </span>
      </div>

      {/* Section 1: Overview & Highlights */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Core Capabilities Overview
        </h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          A comprehensive breakdown of technical competencies spanning AI operations, agentic
          systems engineering, applied computational mathematics, full-stack web development, and
          cloud infrastructure management.
        </p>

        {/* Hero Callout Box */}
        <div className="my-4 py-3 px-4 border-l-2 border-sky-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-sky-400 font-semibold block mb-0.5">
            🚀 Modern Stack &amp; Agent Architecture
          </span>
          Proficient in building end-to-end full-stack applications, custom MCP servers, AI agent
          orchestrators, and high-performance LaTeX document compilation systems.
        </div>
      </div>

      {/* Section 2: Technical Stack Breakdown */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. Technical Stack &amp; Domain Matrix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              AI Operations &amp; Agentic Architecture
            </span>
            <p className="font-semibold text-white text-sm">
              Prompt Engineering · LLM Benchmarking · MCP Building · Agent Orchestration
            </p>
            <p className="text-xs text-neutral-400">
              Workflow supervision, local LLM evaluation (Ollama), model context protocol tool
              routing, and automated agents.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              Mathematics &amp; Analytics
            </span>
            <p className="font-semibold text-white text-sm">
              Numerical Linear Algebra · Spectral Matrix Analysis · Statistical Modeling
            </p>
            <p className="text-xs text-neutral-400">
              Padovan sequence bounds, r-circulant matrix spectral norms, computational algebra, and
              numerical methods.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              Systems &amp; Frontend Web
            </span>
            <p className="font-semibold text-white text-sm">
              TypeScript · React 19 · Next.js 16 · TanStack Start · Tailwind CSS v4
            </p>
            <p className="text-xs text-neutral-400">
              Modern component design, SSR/SSG routing, responsive layouts, micro-animations, and
              client state management.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              Backend &amp; Cloud Infrastructure
            </span>
            <p className="font-semibold text-white text-sm">
              Supabase · PostgreSQL · Drizzle ORM · Redis · Docker Compose
            </p>
            <p className="text-xs text-neutral-400">
              Multi-tenant database schema design, row level security, rate limiting caching layers,
              and containerized deployments.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Developer Tooling & Ecosystem */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Developer Tooling &amp; Practice
        </h2>
        <div className="p-4 bg-[#161926] border border-[#262b3d] rounded-lg space-y-2 text-xs md:text-sm">
          <span className="font-bold text-white block text-sm">
            Unified Toolchain &amp; Engineering Practice
          </span>
          <p className="text-neutral-300 text-xs leading-relaxed">
            Utilizes{" "}
            <code className="text-sky-300 font-mono text-xs px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
              Bun (v1.3.14)
            </code>
            ,{" "}
            <code className="text-sky-300 font-mono text-xs px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
              Vite+ (vp)
            </code>
            , Oxlint, Oxfmt, Vitest, and Git worktrees for clean code formatting, rapid unit
            testing, and isolated feature development.
          </p>
        </div>
      </div>
    </div>
  );
}
