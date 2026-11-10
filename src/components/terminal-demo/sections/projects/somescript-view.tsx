import type { ProjectSubSectionKey } from "../../types";

interface SomescriptViewProps {
  activeProjectSection: ProjectSubSectionKey;
}

export function SomescriptView({ activeProjectSection }: SomescriptViewProps) {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            SomeScript AI LaTeX Core
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            somescript.md · Collaborative AI LaTeX Monorepo
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-amber-400 bg-amber-950/40 border border-amber-800/60 font-mono rounded-xs">
          STATUS: ACTIVE
        </span>
      </div>

      {activeProjectSection === "introduced" && (
        <div className="space-y-5 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            1. Project Overview &amp; Key Features
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
            <strong className="text-white font-semibold">SomeScript</strong> is an advanced,
            AI-native LaTeX editing platform built as a Bun-managed monorepo. It features a modern
            web marketing &amp; dashboard interface, a real-time CodeMirror LaTeX editor with
            embedded PDF preview and SyncTeX navigation, a high-performance Rust/Bun/Tectonic LaTeX
            compilation engine, an embedded AI assistant (Eve), and comprehensive documentation.
          </p>

          <div className="my-3 py-3 px-4 border-l-2 border-amber-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
            <span className="font-mono text-amber-400 font-semibold block mb-0.5">
              🚀 Monorepo Architecture
            </span>
            Bun (v1.3.14) &amp; Turborepo orchestrating Next.js 16, Nuxt/Docus, and containerized
            Tectonic LaTeX compilation services with Redis differential syncing.
          </div>

          <h3 className="text-sm md:text-base font-semibold text-white pt-1">
            Key Platform Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                📄 <span>Real-Time CodeMirror Editor</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Modern, customizable text editor with LaTeX syntax highlighting (
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  codemirror-lang-latex
                </code>
                ), multi-file workspace search/replace, and dark/light themes.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                ⚡ <span>Tectonic Engine Compilation</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Instant LaTeX compilation without needing a bulky local TeX Live setup, powered by a
                containerized Bun microservice running the Tectonic engine.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                🎯 <span>SyncTeX Navigation</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Seamless bidirectional jump between LaTeX source code lines and PDF visual
                coordinates (
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  synctex view
                </code>{" "}
                /{" "}
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] rounded">
                  synctex edit
                </code>
                ).
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                🤖 <span>Embedded Eve AI Assistant</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                AI assistant integrated into the editor workspace via{" "}
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  @assistant-ui/react
                </code>
                , offering file operations (read, edit, write), citation searches, web browsing, and
                Human-in-the-Loop (HITL) confirmation cards.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                🖼️ <span>PDF Preview</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Embedded PDF viewer built with{" "}
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  @embedpdf/react-pdf-viewer
                </code>{" "}
                supporting zooming, panning, text selection, and instant preview auto-refresh on
                compile.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                🔒 <span>Workspace Auth &amp; Security</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Clerk-authenticated dashboard with multi-tenant workspace isolation and
                database-backed project authorization.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                💳 <span>Stripe Billing &amp; Quotas</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Tiered subscriptions (Pro/Team) and AI token/credit quota tracking.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                🐳 <span>Cloud-Native &amp; Docker Ready</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Pre-configured Docker Compose setup powering PostgreSQL, Redis caching &amp; rate
                limiting, and RustFS (S3-compatible storage).
              </p>
            </div>
          </div>
        </div>
      )}

      {activeProjectSection === "techstack" && (
        <div className="space-y-6 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            2. Application Surfaces &amp; Tech Stack
          </h2>

          {/* Monorepo Surface Breakdown Table */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
              Monorepo Application Surfaces
            </span>
            <div className="border border-[#262b3d] rounded-lg overflow-hidden bg-[#121520]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#1a1e2d] text-neutral-300 font-mono border-b border-[#262b3d]">
                  <tr>
                    <th className="p-2.5">Area</th>
                    <th className="p-2.5">Port</th>
                    <th className="p-2.5">Description</th>
                    <th className="p-2.5">Tech Stack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262b3d]/60 text-neutral-300">
                  <tr>
                    <td className="p-2.5 font-semibold text-white">
                      Web (
                      <code className="text-amber-300 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                        apps/web
                      </code>
                      )
                    </td>
                    <td className="p-2.5 font-mono text-amber-400">:3000</td>
                    <td className="p-2.5">
                      Landing page, workspace dashboard, project management, Stripe checkout &amp;
                      webhooks
                    </td>
                    <td className="p-2.5 text-neutral-400">
                      Next.js 16, Clerk, Drizzle ORM, Stripe, Tailwind CSS
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">
                      Compiler (
                      <code className="text-amber-300 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                        apps/compiler
                      </code>
                      )
                    </td>
                    <td className="p-2.5 font-mono text-amber-400">:3001</td>
                    <td className="p-2.5">
                      Microservice compiling TeX sources to PDF via Tectonic with differential file
                      sync &amp; Redis caching
                    </td>
                    <td className="p-2.5 text-neutral-400">Bun, Tectonic, SyncTeX CLI, Redis</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">
                      Editor (
                      <code className="text-amber-300 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                        apps/editor
                      </code>
                      )
                    </td>
                    <td className="p-2.5 font-mono text-amber-400">:3002</td>
                    <td className="p-2.5">
                      Core LaTeX workspace editor with file tree, PDF viewer, SyncTeX, and Eve AI
                      Chat
                    </td>
                    <td className="p-2.5 text-neutral-400">
                      Next.js 16, CodeMirror 6, @embedpdf, @assistant-ui/react
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">
                      Docs (
                      <code className="text-amber-300 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                        apps/docs
                      </code>
                      )
                    </td>
                    <td className="p-2.5 font-mono text-amber-400">:3003</td>
                    <td className="p-2.5">Documentation website</td>
                    <td className="p-2.5 text-neutral-400">Nuxt, Docus, KaTeX</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
                Core &amp; Runtime
              </span>
              <p className="font-semibold text-white text-sm">Bun (v1.3.14) · Turborepo</p>
              <p className="text-xs text-neutral-400">
                Ultra-fast package management &amp; task orchestration across monorepo packages.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
                Frontend &amp; Docs
              </span>
              <p className="font-semibold text-white text-sm">
                Next.js 16 (App Router) · React 19 · Nuxt / Docus
              </p>
              <p className="text-xs text-neutral-400">
                Server components, client interactivity, and documentation rendering with KaTeX.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
                Editor &amp; PDF Viewer
              </span>
              <p className="font-semibold text-white text-sm">
                CodeMirror 6 · @embedpdf/react-pdf-viewer
              </p>
              <p className="text-xs text-neutral-400">
                Custom{" "}
                <code className="text-neutral-200 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  codemirror-lang-latex
                </code>{" "}
                syntax grammar, high-perf canvas PDF renderer.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
                AI Assistant (Eve Framework)
              </span>
              <p className="font-semibold text-white text-sm">
                @assistant-ui/react · Vercel AI SDK
              </p>
              <p className="text-xs text-neutral-400">
                Agentic workflow with filesystem read/edit/write tools, HITL confirmation cards
                &amp; web browsing.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
                Database &amp; Cloud Storage
              </span>
              <p className="font-semibold text-white text-sm">
                PostgreSQL (Drizzle ORM) · Redis · RustFS (S3 API)
              </p>
              <p className="text-xs text-neutral-400">
                Persistent workspace data, rate limiting &amp; caching, S3-compatible file storage.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-amber-400 block tracking-wider">
                Auth, Billing &amp; Infra
              </span>
              <p className="font-semibold text-white text-sm">
                Clerk Auth · Stripe · Docker Compose
              </p>
              <p className="text-xs text-neutral-400">
                Multi-tenant workspace isolation, tier subscriptions, token quotas, and cloud
                containerization.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeProjectSection === "preview" && (
        <div className="space-y-6 font-sans">
          <div className="border-b border-[#262b3d]/40 pb-2 flex items-center justify-between">
            <h2 className="text-base md:text-lg font-semibold text-white">
              3. Live Web Embedded Preview &amp; Repository
            </h2>
            <span className="text-xs text-neutral-400 font-mono">somescript.com</span>
          </div>

          <div className="space-y-4 font-sans">
            {/* Embedded Web Preview Browser Frame */}
            <div className="w-full border border-[#262b3d] rounded-lg overflow-hidden bg-[#161926] shadow-xl">
              {/* Browser Address Bar */}
              <div className="bg-[#1e2333] border-b border-[#262b3d] px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-mono select-none">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex-1 max-w-md mx-auto bg-[#121520] border border-[#2d354a] rounded px-3 py-1 text-[#a0aab8] flex items-center justify-between text-[11px] truncate">
                  <span className="flex items-center gap-1.5 truncate">
                    <span className="text-emerald-400 font-bold">🔒</span>
                    <span className="text-neutral-200">https://somescript.com</span>
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono hidden sm:inline-block">
                    LIVE SITE
                  </span>
                </div>

                <a
                  href="https://somescript.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono text-[11px] hover:underline shrink-0"
                >
                  <span>Open</span> ↗
                </a>
              </div>

              {/* Embedded Web Preview Iframe Content */}
              <div className="relative w-full h-[540px] md:h-[600px] bg-[#0c0e14]">
                <iframe
                  src="https://somescript.com"
                  title="SomeScript Live Web Embed"
                  className="w-full h-full border-0 bg-white"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* GitHub Repo Quick Access */}
            <div className="py-3 px-4 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-white block">GitHub Repository</span>
                <span className="text-neutral-400 text-xs">
                  Fankrits/SomeScript-adv (Public Monorepo)
                </span>
              </div>
              <a
                href="https://github.com/Fankrits/SomeScript-adv"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 underline font-medium text-sm"
              >
                github.com/Fankrits/SomeScript-adv ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
