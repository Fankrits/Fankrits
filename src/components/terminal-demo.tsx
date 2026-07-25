"use client";
import React, { useState, useEffect, useRef } from "react";

type SpaceKey = "herdr" | "llm-proxy" | "qmp" | "thesis" | "skills" | "contact";

interface SpaceItem {
  key: SpaceKey;
  name: string;
  sub: string;
  color: string;
  command: string;
}

const SPACES: SpaceItem[] = [
  {
    key: "herdr",
    name: "herdr",
    sub: "master · portfolio",
    color: "bg-amber-400",
    command: "cat personal.json",
  },
  {
    key: "llm-proxy",
    name: "llm-proxy",
    sub: "master · ai-builder",
    color: "bg-rose-400",
    command: "ls -la ~/projects",
  },
  {
    key: "qmp",
    name: "qmp",
    sub: "autoresearch/qmp-r...",
    color: "bg-emerald-400",
    command: "sysinfo --skills",
  },
  {
    key: "thesis",
    name: "thesis",
    sub: "math/applied-models",
    color: "bg-purple-400",
    command: "cat thesis.md",
  },
  {
    key: "contact",
    name: "contact",
    sub: "github/fankrits",
    color: "bg-sky-400",
    command: "ping contact",
  },
];

export default function TerminalDemo() {
  const [activeSpace, setActiveSpace] = useState<SpaceKey>("herdr");
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setCommandHistory([]);
      setCommandInput("");
      return;
    }

    let response = "";
    if (cmd === "1" || cmd.includes("herdr") || cmd.includes("personal")) {
      setActiveSpace("herdr");
      response = "Switched to space: herdr (Personal Info)";
    } else if (cmd === "2" || cmd.includes("proxy") || cmd.includes("project")) {
      setActiveSpace("llm-proxy");
      response = "Switched to space: llm-proxy (Side Projects)";
    } else if (cmd === "3" || cmd.includes("qmp") || cmd.includes("skill")) {
      setActiveSpace("qmp");
      response = "Switched to space: qmp (Skills & Tech Stack)";
    } else if (cmd === "4" || cmd.includes("thesis")) {
      setActiveSpace("thesis");
      response = "Switched to space: thesis (Mathematical Research)";
    } else if (cmd === "5" || cmd.includes("contact")) {
      setActiveSpace("contact");
      response = "Switched to space: contact (Links & Socials)";
    } else if (cmd === "help") {
      response = "Available commands: herdr, llm-proxy, qmp, thesis, contact, clear, help";
    } else {
      response = `fankrits-cli: command not found: ${cmd}. Type 'help' for available options.`;
    }

    setCommandHistory((prev) => [...prev, `❯ ${commandInput}`, response]);
    setCommandInput("");
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [commandHistory, activeSpace]);

  return (
    <section className="w-full h-full p-2 sm:p-4 font-agave flex flex-col items-center justify-center relative select-none">
      <div className="w-full max-w-[98vw] 2xl:max-w-[1700px] mx-auto rounded-none border border-[#262b3d] bg-[#12151e] shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#c5cddb] text-xs md:text-sm font-mono flex flex-col h-[85vh] md:h-[88vh] max-h-[900px]">
        {/* macOS Terminal Title Bar */}
        <div className="flex items-center justify-between bg-[#191c27] border-b border-[#262b3d] px-4 py-2.5 shrink-0 font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          </div>
          <div className="text-center font-bold text-neutral-300 text-xs truncate max-w-md">
            fankrits@macbook-pro: ~/Projects/fankrits (zsh)
          </div>
          <div className="text-[11px] text-emerald-400 font-mono hidden sm:block">● ONLINE</div>
        </div>

        {/* Outer Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-[680px]">
          {/* Left Sidebar (SPACES Only - No Agents) */}
          <div className="lg:col-span-3 border-r border-b lg:border-b-0 border-[#262b3d] bg-[#141722] p-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="px-2 py-1 text-[11px] font-mono tracking-wider text-neutral-400 uppercase font-bold border-b border-[#262b3d]/60 pb-2">
                spaces
              </div>

              <div className="space-y-1 font-mono">
                {SPACES.map((space) => {
                  const isActive = activeSpace === space.key;
                  return (
                    <button
                      key={space.key}
                      onClick={() => setActiveSpace(space.key)}
                      className={`w-full text-left px-3.5 py-3 rounded-none transition-all flex flex-col ${
                        isActive
                          ? "bg-[#1f2434] text-white border border-[#4f80ff]/40 shadow-sm"
                          : "hover:bg-[#1a1e2b] text-neutral-300 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${space.color}`} />
                        <span
                          className={`font-bold text-xs md:text-sm ${isActive ? "text-white" : "text-neutral-300"}`}
                        >
                          {space.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 pl-5 font-mono truncate">
                        {space.sub}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Bottom Metadata */}
            <div className="pt-4 border-t border-[#262b3d]/80 px-2 text-[11px] text-neutral-400 font-mono space-y-1">
              <div className="flex justify-between">
                <span>Developer:</span>
                <span className="text-white font-bold">Fankrits</span>
              </div>
              <div className="flex justify-between">
                <span>Branch:</span>
                <span className="text-sky-300">master</span>
              </div>
              <div className="flex justify-between">
                <span>Terminal:</span>
                <span className="text-emerald-400">macOS Terminal</span>
              </div>
            </div>
          </div>

          {/* Right Main Split Body (Center Claude Pane + Right Bun Runner Pane) */}
          <div className="lg:col-span-9 p-3 sm:p-5 bg-[#10131c] grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Center Pane: Claude Code Style Terminal Output */}
            <div className="lg:col-span-7 flex flex-col justify-between border border-[#262b3d] rounded-none bg-[#141724] p-4 sm:p-5 relative shadow-inner">
              {/* Inset Window Title */}
              <div className="absolute -top-3 left-4 px-2 bg-[#141724] text-[11px] text-neutral-400 font-mono">
                ── claude ──
              </div>

              {/* Main Stream Area */}
              <div
                ref={contentRef}
                className="overflow-y-auto min-h-[460px] max-h-[calc(85vh-180px)] pr-2 space-y-4 font-mono text-xs md:text-sm leading-relaxed"
              >
                {/* Logo & Header Line */}
                <div className="flex items-start gap-3 p-3 rounded-none bg-[#191d2d] border border-[#262b3d]">
                  <div className="px-2 py-1 bg-orange-600/30 border border-orange-500/40 rounded-none text-orange-400 font-mono font-bold text-sm shrink-0">
                    [ ▗▀▖ ]
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">Claude Code</span>
                      <span className="text-xs text-neutral-400">v2.1.198</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Fable 5 with high effort · Claude Model 3.6
                    </p>
                    <p className="text-[11px] text-sky-400 font-mono">
                      ~/Projects/fankrits/website
                    </p>
                  </div>
                </div>

                {/* Prompt Streams based on Active Space */}
                {activeSpace === "herdr" && (
                  <div className="space-y-3">
                    <div className="text-neutral-400">
                      <span className="text-orange-400 font-bold">❯</span> make the bio section
                      showcase personal info cleanly
                    </div>
                    <div className="text-orange-300 font-mono pl-3 space-y-1">
                      <p>● Personal Info indexed:</p>
                      <p className="text-neutral-200 pl-4">・ Name: Fankrits</p>
                      <p className="text-neutral-200 pl-4">・ Degree: Mathematics Graduate</p>
                      <p className="text-emerald-400 pl-4">
                        ・ Focus: AI Systems & Web Architecture
                      </p>
                      <p className="text-neutral-200 pl-4">・ Location: Bangkok, Thailand</p>
                    </div>
                    <div className="text-neutral-300 pl-3">
                      <p className="text-neutral-400 font-semibold">● Bio Overview:</p>
                      <p className="text-neutral-300 pl-4 mt-1 leading-relaxed">
                        Passionate about connecting mathematical rigor with cutting-edge software
                        architecture. Specialized in building full-stack Web applications, AI
                        agents, and custom shader interfaces.
                      </p>
                    </div>
                    <div className="text-amber-400 text-xs pl-3 flex items-center gap-2">
                      <span className="animate-spin">⠋</span>
                      <span>Baking... (15m 21s · esc to interrupt)</span>
                    </div>
                  </div>
                )}

                {activeSpace === "llm-proxy" && (
                  <div className="space-y-3">
                    <div className="text-neutral-400">
                      <span className="text-orange-400 font-bold">❯</span> list side projects in
                      detail
                    </div>
                    <div className="space-y-2 pl-3">
                      <div className="p-3 rounded-none bg-[#191d2d] border border-[#262b3d]">
                        <div className="text-emerald-400 font-bold">
                          ⚡ shader-gradient-portfolio
                        </div>
                        <p className="text-neutral-300 text-xs mt-1">
                          3D Shader gradient interactive website built with Vite+, TanStack Start,
                          and Three.js.
                        </p>
                      </div>
                      <div className="p-3 rounded-none bg-[#191d2d] border border-[#262b3d]">
                        <div className="text-sky-400 font-bold">🚀 interactive-terminal-ui</div>
                        <p className="text-neutral-300 text-xs mt-1">
                          CLI Herdr-style portfolio terminal with Agave Nerd Font and interactive
                          space parser.
                        </p>
                      </div>
                      <div className="p-3 rounded-none bg-[#191d2d] border border-[#262b3d]">
                        <div className="text-purple-400 font-bold">🧠 ai-agent-automation</div>
                        <p className="text-neutral-300 text-xs mt-1">
                          Autonomous multi-agent execution suite leveraging LLM tool orchestration.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeSpace === "qmp" && (
                  <div className="space-y-3">
                    <div className="text-neutral-400">
                      <span className="text-orange-400 font-bold">❯</span> sysinfo --skills
                    </div>
                    <div className="p-3 rounded-none bg-[#191d2d] border border-[#262b3d] space-y-2 font-mono text-xs">
                      <div>
                        <span className="text-neutral-400 uppercase text-[10px] block">
                          Frontend Architecture
                        </span>
                        <span className="text-emerald-400 font-bold">
                          React 19, TypeScript, TanStack Start/Router, Vite+, Tailwind CSS
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400 uppercase text-[10px] block">
                          Graphics & Shaders
                        </span>
                        <span className="text-sky-300 font-bold">
                          Three.js, React Three Fiber, ShaderGradient, Canvas API
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400 uppercase text-[10px] block">
                          Mathematics & ML
                        </span>
                        <span className="text-amber-300 font-bold">
                          Python, PyTorch, Linear Algebra, Statistical Modeling
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSpace === "thesis" && (
                  <div className="space-y-3">
                    <div className="text-neutral-400">
                      <span className="text-orange-400 font-bold">❯</span> cat thesis.md
                    </div>
                    <div className="p-3 rounded-none bg-[#191d2d] border border-[#262b3d] space-y-2 font-mono text-xs">
                      <div className="text-sky-300 font-bold text-sm">
                        Computational Models & Applied Mathematics
                      </div>
                      <p className="text-neutral-300 leading-relaxed">
                        Research focused on computational mathematics, matrix decomposition, and
                        numerical algorithms. Full proofs and research downloads will be indexed
                        here.
                      </p>
                    </div>
                  </div>
                )}

                {activeSpace === "contact" && (
                  <div className="space-y-3">
                    <div className="text-neutral-400">
                      <span className="text-orange-400 font-bold">❯</span> ping contact
                    </div>
                    <div className="p-3 rounded-none bg-[#191d2d] border border-[#262b3d] space-y-2 font-mono text-xs">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">GitHub:</span>
                        <span className="text-emerald-400 font-bold">github.com/fankrits</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Availability:</span>
                        <span className="text-white font-bold">Open to Collaborations</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* History Logs */}
                {commandHistory.length > 0 && (
                  <div className="pt-3 border-t border-[#262b3d] space-y-1 font-mono text-xs">
                    {commandHistory.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          idx % 2 === 0 ? "text-orange-300 font-bold" : "text-neutral-300 pl-2"
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Herdr-Style Command Bar */}
              <div className="mt-4 pt-3 border-t border-[#262b3d] font-mono text-xs space-y-2">
                <div className="text-[11px] text-neutral-400 flex items-center gap-2">
                  <span className="text-sky-400 font-bold">~/Projects/fankrits/website</span>
                  <span>&gt;</span>
                  <span className="text-amber-300 font-bold">master * ↑1</span>
                  <span>&gt;</span>
                  <span className="text-neutral-400">ctx</span>
                </div>

                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">❯❯</span>
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="bypass permissions on (shift+tab to cycle)"
                    className="flex-1 bg-transparent text-white focus:outline-none placeholder-neutral-500 font-agave"
                  />
                  <button
                    type="submit"
                    className="px-2 py-1 rounded-none bg-[#1f2434] text-neutral-300 hover:text-white text-xs border border-[#262b3d]"
                  >
                    run
                  </button>
                </form>
              </div>
            </div>

            {/* Right Pane: Bun Runner Dev Server Output */}
            <div className="lg:col-span-5 flex flex-col justify-between border border-[#262b3d] rounded-none bg-[#141724] p-4 sm:p-5 relative shadow-inner">
              {/* Inset Window Title */}
              <div className="absolute -top-3 left-4 px-2 bg-[#141724] text-[11px] text-neutral-400 font-mono">
                ── bun ──
              </div>

              {/* Bun Log Stream */}
              <div className="space-y-4 font-mono text-xs md:text-sm leading-relaxed overflow-y-auto max-h-[calc(85vh-180px)] pr-2">
                <div className="text-sky-400 font-bold">
                  ~/Projects/fankrits <span className="text-neutral-400 font-normal">master</span>
                </div>

                <div className="text-neutral-300">
                  <span className="text-emerald-400 font-bold">❯</span> bun run dev
                </div>

                <div className="text-neutral-400 text-xs">
                  $ node scripts/prepare-docs.mjs &amp;&amp; vite+ dev
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <div className="text-neutral-300">
                    <span className="text-neutral-500">22:04:12</span>{" "}
                    <span className="text-sky-400">[types]</span> Generated 0ms
                  </div>
                  <div className="text-neutral-300">
                    <span className="text-neutral-500">22:04:12</span>{" "}
                    <span className="text-sky-400">[content]</span> Synced portfolio content
                  </div>
                </div>

                {/* Bright Lime Yellow Badge */}
                <div className="py-2">
                  <div className="inline-flex items-center gap-3">
                    <span className="bg-[#d2f854] text-black font-bold text-xs px-2.5 py-1 rounded-none">
                      vite+
                    </span>
                    <span className="text-emerald-400 font-bold text-xs">
                      v0.2.5 ready in 420 ms
                    </span>
                  </div>
                </div>

                {/* Server Network Line */}
                <div className="space-y-1 text-xs font-mono pt-1">
                  <div className="text-neutral-300 flex items-center gap-3">
                    <span className="text-neutral-500 font-bold">| Local</span>
                    <a
                      href="http://localhost:3000/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-400 hover:underline font-bold"
                    >
                      http://localhost:3000/
                    </a>
                  </div>
                  <div className="text-neutral-400 flex items-center gap-3">
                    <span className="text-neutral-500">Network</span>
                    <span>use --host to expose</span>
                  </div>
                </div>

                <div className="pt-4 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <span className="text-neutral-500">22:04:12</span>
                  <span className="animate-pulse">watching for file changes...</span>
                </div>
              </div>

              {/* Bun Footer */}
              <div className="pt-3 border-t border-[#262b3d] text-[11px] text-neutral-500 font-mono flex justify-between">
                <span>STATUS: RUNNING</span>
                <span className="text-emerald-400">● 3000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
