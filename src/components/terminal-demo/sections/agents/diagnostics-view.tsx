export function DiagnosticsView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            System Diagnostics &amp; Telemetry
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            diagnostics.md · Real-Time Telemetry &amp; Health Monitoring
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-amber-400 bg-amber-950/40 border border-amber-800/60 font-mono rounded-xs">
          SYSTEM: ONLINE (100%)
        </span>
      </div>

      {/* Section 1: Overview & Capabilities */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Telemetry Overview &amp; Health Status
        </h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          <strong className="text-white font-semibold">System Diagnostics &amp; Telemetry</strong>{" "}
          provides real-time health metrics, process memory profiling, network latency checks, and
          execution sandbox telemetry across the terminal application.
        </p>

        {/* Hero Callout Box */}
        <div className="my-3 py-3 px-4 border-l-2 border-amber-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-amber-400 font-semibold block mb-0.5">
            📊 Continuous Telemetry Monitoring
          </span>
          Tracking active runtime memory allocation, agent socket connections, and async task queue
          health in real time.
        </div>

        <h3 className="text-sm md:text-base font-semibold text-white pt-1">
          Health &amp; Security Status
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              🟢 <span>Agent Network Status</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Agent inter-process communication bus operating at{" "}
              <strong className="text-emerald-400">100% ONLINE</strong> availability.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              💾 <span>Memory Heap Allocation</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              V8/Bun heap memory allocation is{" "}
              <strong className="text-white">Optimal (42 MB)</strong> with zero leaks detected.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              ⚡ <span>Event Loop Latency</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Async scheduler responsiveness measured at{" "}
              <strong className="text-emerald-400">0.4ms</strong> average execution queue time.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
              🛡️ <span>Sandbox Security</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Strict command permission boundaries enforced with active audit log recording.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Telemetry Metrics Matrix */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. System Metrics &amp; Telemetry Matrix
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
              Process Telemetry
            </span>
            <p className="font-semibold text-white text-sm">Runtime: Bun v1.3.14 · PID: 48921</p>
            <p className="text-xs text-neutral-400">
              Active process executing inside zsh environment with zero unhandled rejections.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
              Memory &amp; Heap Profile
            </span>
            <p className="font-semibold text-white text-sm">42 MB Allocated / 512 MB Max Heap</p>
            <p className="text-xs text-neutral-400">
              Garbage collector operating nominally; heap usage well within allocation thresholds.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
              Network &amp; IPC Telemetry
            </span>
            <p className="font-semibold text-white text-sm">Socket: Connected · Packet Loss: 0%</p>
            <p className="text-xs text-neutral-400">
              Inter-agent RPC messaging socket operating with 0.4ms round-trip latency.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
              Tool Diagnostic Status
            </span>
            <p className="font-semibold text-white text-sm">16 Active Native Tools · Sandboxed</p>
            <p className="text-xs text-neutral-400">
              All MCP server connections and tool declarations verified and active.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Live System Log Stream */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Live System Health Log Stream
        </h2>

        <div className="w-full border border-[#262b3d] rounded-lg overflow-hidden bg-[#121520] font-mono text-xs shadow-xl">
          {/* Console Header */}
          <div className="bg-[#1a1e2d] border-b border-[#262b3d] px-3.5 py-2 flex items-center justify-between text-neutral-400 select-none text-[11px]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-white font-bold">system-telemetry.log</span>
              <span>— node_env: production</span>
            </span>
            <span className="text-amber-400">STATUS: HEALTHY</span>
          </div>

          {/* Console Output Buffer */}
          <div className="p-4 space-y-1.5 text-[11px] leading-relaxed text-neutral-300">
            <div className="text-neutral-500">[21:59:30] SYSTEM DIAGNOSTICS MONITOR STARTED</div>
            <div className="text-sky-400">
              [21:59:31] CHECK: Heap allocation = 42.1 MB / 512 MB (PASS)
            </div>
            <div className="text-emerald-400">
              [21:59:32] CHECK: Agent network socket latency = 0.4ms (OPTIMAL)
            </div>
            <div className="text-neutral-300">
              [21:59:33] TELEMETRY: All 11 view component specs validated
            </div>
            <div className="text-amber-400 font-bold">
              [21:59:34] HEARTBEAT: System state healthy. 0 errors, 0 warnings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
