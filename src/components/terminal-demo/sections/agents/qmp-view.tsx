export function QmpView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            QMP AutoResearch Suite
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            qmp.md · Autonomous Research &amp; Skill Execution Agent
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 font-mono rounded-xs">
          STATUS: ACTIVE
        </span>
      </div>

      {/* Section 1: Overview & Capabilities */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Suite Overview &amp; Capabilities
        </h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          <strong className="text-white font-semibold">QMP AutoResearch Suite</strong> (Quality
          &amp; Metric Performance) is an agentic research runner engineered for deep codebase
          exploration, dynamic skill routing, automated lint auditing, and structured technical spec
          generation.
        </p>

        {/* Hero Callout Box */}
        <div className="my-3 py-3 px-4 border-l-2 border-emerald-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-emerald-400 font-semibold block mb-0.5">
            🤖 Autonomous Research &amp; Code Analysis
          </span>
          Executes non-blocking subagent task runs, inspects monorepo architecture, and generates
          evidence-backed technical reports.
        </div>

        <h3 className="text-sm md:text-base font-semibold text-white pt-1">
          Key Agent Capabilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              ⚡ <span>Automated Skill Routing</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Dynamically invokes Context7 documentation, ripgrep searches, unit test verifiers, and
              formatting linters.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              🔍 <span>Deep Codebase Survey</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Traverses monorepo file trees, builds AST symbol maps, and executes structural regex
              pattern queries.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              📊 <span>Quality &amp; Metric Audit</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Detects over-engineering signals, measures cyclomatic complexity, audits bundle
              footprint, and tracks type coverage.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              📝 <span>Artifact Spec Synthesis</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Compiles research findings into actionable implementation plans, GFM markdown reports,
              and verification checklists.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Architecture & Tooling Matrix */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. Architecture &amp; Tooling Matrix
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-emerald-400 block tracking-wider">
              Reasoning &amp; LLM Core
            </span>
            <p className="font-semibold text-white text-sm">
              Gemini 3.6 Flash / Pro · Context7 MCP
            </p>
            <p className="text-xs text-neutral-400">
              High-throughput multimodal reasoning, function calling, and structured JSON output
              streaming.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-emerald-400 block tracking-wider">
              Inspection Engine
            </span>
            <p className="font-semibold text-white text-sm">
              Ripgrep · AST Parser · Schema Inspector
            </p>
            <p className="text-xs text-neutral-400">
              Fast multi-file regex matching, syntax tree analysis, and type declaration
              verification.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-emerald-400 block tracking-wider">
              Execution Runtime
            </span>
            <p className="font-semibold text-white text-sm">
              Task Scheduler · Subagent Manager · Zsh Sandbox
            </p>
            <p className="text-xs text-neutral-400">
              Async non-blocking process execution, child agent lifecycle management, and reactive
              wakeup.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-emerald-400 block tracking-wider">
              Output &amp; Visuals
            </span>
            <p className="font-semibold text-white text-sm">
              Markdown Artifacts · Visual Companion Server
            </p>
            <p className="text-xs text-neutral-400">
              GFM markdown reports, mermaid diagram generation, and optional browser tab visual
              renders.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Live Telemetry Console Stream */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Live Agent Telemetry &amp; Execution Console
        </h2>

        <div className="w-full border border-[#262b3d] rounded-lg overflow-hidden bg-[#121520] font-mono text-xs shadow-xl">
          {/* Console Header */}
          <div className="bg-[#1a1e2d] border-b border-[#262b3d] px-3.5 py-2 flex items-center justify-between text-neutral-400 select-none text-[11px]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">qmp-runner.log</span>
              <span>— pid: 48921</span>
            </span>
            <span className="text-emerald-400">STATE: RUNNING</span>
          </div>

          {/* Console Output Buffer */}
          <div className="p-4 space-y-1.5 text-[11px] leading-relaxed text-neutral-300">
            <div className="text-neutral-500">
              [21:59:30] INITIALIZING QMP AUTORESEARCH ENGINE...
            </div>
            <div className="text-sky-400">
              [21:59:31] INFO: Scanning workspace target /src/components/terminal-demo
            </div>
            <div className="text-amber-300">
              [21:59:32] EXEC: ripgrep query "export function" --includes "*.tsx"
            </div>
            <div className="text-neutral-300">
              [21:59:33] FOUND: 11 active view components across 3 section domains
            </div>
            <div className="text-emerald-400 font-bold">
              [21:59:34] SUCCESS: Content structure audit complete (0 errors, 100% type coverage)
            </div>
            <div className="text-neutral-500 pt-1 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">❯</span>
              <span className="text-neutral-200 animate-pulse">
                Awaiting next scheduled research task...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
