export function SubagentsView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Subagent Orchestrator
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            subagents.md · Multi-Agent Topology &amp; Task Dispatcher
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-sky-400 bg-sky-950/40 border border-sky-800/60 font-mono rounded-xs">
          STATUS: ACTIVE
        </span>
      </div>

      {/* Section 1: Overview & Capabilities */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Orchestrator Overview &amp; Capabilities
        </h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          <strong className="text-white font-semibold">Subagent Orchestrator</strong> manages
          concurrent child agent conversations, distributing complex multi-file refactoring,
          research, and verification tasks across isolated workers.
        </p>

        {/* Hero Callout Box */}
        <div className="my-3 py-3 px-4 border-l-2 border-sky-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-sky-400 font-semibold block mb-0.5">
            ⚡ Parallel Multi-Agent Execution
          </span>
          Orchestrates independent subagents with custom roles, shared memory channels, and
          event-driven reactive notification loops.
        </div>

        <h3 className="text-sm md:text-base font-semibold text-white pt-1">
          Key Orchestrator Modules
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-sky-400 font-semibold flex items-center gap-1.5">
              🔄 <span>Dynamic Role Assignment</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Instantiates subagents equipped with tailored system prompts, tool permissions, and
              specialized execution models.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-sky-400 font-semibold flex items-center gap-1.5">
              💬 <span>Shared Memory &amp; IPC Messaging</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Facilitates direct inter-agent messaging via{" "}
              <code className="text-sky-300 font-mono text-[11px] px-1 bg-[#1a1e2b] rounded">
                send_message
              </code>{" "}
              tool calls and reactive inbox dispatching.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-sky-400 font-semibold flex items-center gap-1.5">
              🌿 <span>Git Worktree Isolation</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Isolates concurrent subagent edits in git worktree branches to eliminate file
              contention and merge conflicts.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-sky-400 font-semibold flex items-center gap-1.5">
              ⚡ <span>Reactive Event Loop</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Event-driven agent wakeup system resumes context automatically when background workers
              complete execution.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Architecture & State */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. Dispatcher Architecture &amp; State
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              Dispatcher Core
            </span>
            <p className="font-semibold text-white text-sm">invoke_subagent · define_subagent</p>
            <p className="text-xs text-neutral-400">
              Dynamic agent definition, conversation ID tracking, and parent-child hierarchy
              control.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              IPC Communication
            </span>
            <p className="font-semibold text-white text-sm">send_message · Reactive Inbox</p>
            <p className="text-xs text-neutral-400">
              Asynchronous JSON message passing, broadcast channels, and status reporting.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              Workspace Sandbox
            </span>
            <p className="font-semibold text-white text-sm">Git Worktrees · Isolated Branches</p>
            <p className="text-xs text-neutral-400">
              Clean filesystem boundaries preventing partial edits from impacting active main
              workspace.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-sky-400 block tracking-wider">
              Agent Models
            </span>
            <p className="font-semibold text-white text-sm">Gemini 3.6 Flash / Pro Selection</p>
            <p className="text-xs text-neutral-400">
              Adaptive model sizing based on task complexity, token limits, and speed requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Active Subagent Topology Console */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Active Subagent Topology Matrix
        </h2>

        <div className="border border-[#262b3d] rounded-lg overflow-hidden bg-[#121520]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1a1e2d] text-neutral-300 font-mono border-b border-[#262b3d]">
              <tr>
                <th className="p-2.5">Agent ID</th>
                <th className="p-2.5">Role</th>
                <th className="p-2.5">Model</th>
                <th className="p-2.5">Workspace</th>
                <th className="p-2.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262b3d]/60 text-neutral-300 font-mono text-[11px]">
              <tr>
                <td className="p-2.5 font-bold text-white">subagent-res-01</td>
                <td className="p-2.5 text-sky-300">Codebase Researcher</td>
                <td className="p-2.5 text-neutral-400">Flash</td>
                <td className="p-2.5 text-neutral-400">inherit</td>
                <td className="p-2.5 text-emerald-400 font-bold">IDLE (COMPLETED)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-white">subagent-code-02</td>
                <td className="p-2.5 text-sky-300">Content Designer</td>
                <td className="p-2.5 text-neutral-400">Flash High</td>
                <td className="p-2.5 text-neutral-400">inherit</td>
                <td className="p-2.5 text-amber-300 font-bold animate-pulse">ACTIVE (EXECUTING)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-white">subagent-qa-03</td>
                <td className="p-2.5 text-sky-300">Type &amp; Lint Verifier</td>
                <td className="p-2.5 text-neutral-400">Flash Lite</td>
                <td className="p-2.5 text-neutral-400">inherit</td>
                <td className="p-2.5 text-sky-400 font-bold">READY</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
