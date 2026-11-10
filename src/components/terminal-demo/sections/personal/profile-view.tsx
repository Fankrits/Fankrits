export function ProfileView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Kritsada Nhanjeing (Fankrits)
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            profile.md · AI Operations Specialist &amp; Mathematical Analyst
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-amber-400 bg-amber-950/40 border border-amber-800/60 font-mono rounded-xs">
          LOCATION: BANGKOK, TH
        </span>
      </div>

      {/* Section 1: Overview & Focus Areas */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Profile Overview &amp; Focus Areas
        </h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          Mathematics graduate from Thammasat University specializing in AI operations, autonomous
          agents, and system optimization. Combines analytical mathematical rigor with hands-on AI
          model evaluation, MCP server building, and automated document pipelines to streamline
          complex digital systems.
        </p>

        {/* Hero Callout Box */}
        <div className="my-4 py-3 px-4 border-l-2 border-amber-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-amber-400 font-semibold block mb-0.5">
            💡 AI Operations &amp; Mathematical Optimization
          </span>
          Specializing in prompt engineering, agentic workflow supervision, custom MCP server
          architecture, and spectral matrix analysis.
        </div>

        {/* Core Focus Cards */}
        <h3 className="text-sm md:text-base font-semibold text-white pt-1">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              🤖 <span>AI Operations &amp; Agents</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              LLM benchmarking, automated prompt evaluation, agent workflow supervision, and custom
              MCP tool routing.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              📐 <span>Mathematical Analysis</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Spectral linear algebra, Padovan sequence norm bounds, and numerical methods for
              computational systems.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              ⚡ <span>Workflow &amp; Pipeline Automation</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Automated document compilers, CLI toolchains, real-time sync engines, and
              containerized microservices.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              🌐 <span>Full-Stack Web Development</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Modern web architecture with Next.js App Router, React 19, TypeScript, Vite+, and
              cloud databases.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Education & Background */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. Academic &amp; Professional Background
        </h2>
        <div className="p-4 bg-[#161926] border border-[#262b3d] rounded-lg space-y-2 text-xs md:text-sm">
          <div className="flex flex-wrap justify-between items-center gap-1">
            <span className="font-bold text-white text-sm md:text-base">
              B.Sc. in Mathematics (Graduated 2024)
            </span>
            <span className="text-xs font-mono text-amber-400">Thammasat University</span>
          </div>
          <p className="text-neutral-300 text-xs leading-relaxed">
            Department of Mathematics &amp; Statistics. Conducted academic research on spectral
            norms of circulant matrices involving Gaussian Padovan sequence numbers, published under
            the faculty supervision team.
          </p>
        </div>
      </div>

      {/* Section 3: Presence & Links */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Presence &amp; Core Links
        </h2>
        <div className="space-y-3 font-sans text-xs md:text-sm">
          <div className="py-2.5 px-3.5 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white block">Official Portfolio</span>
              <span className="text-neutral-400 text-xs">fankrits.com</span>
            </div>
            <a
              href="https://fankrits.com"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 underline font-medium text-xs md:text-sm"
            >
              fankrits.com ↗
            </a>
          </div>

          <div className="py-2.5 px-3.5 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white block">GitHub Profile</span>
              <span className="text-neutral-400 text-xs">@Fankrits</span>
            </div>
            <a
              href="https://github.com/Fankrits"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 underline font-medium text-xs md:text-sm"
            >
              github.com/Fankrits ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
