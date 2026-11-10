import type { ProjectSubSectionKey } from "../../types";

interface SomemathViewProps {
  activeProjectSection: ProjectSubSectionKey;
}

export function SomemathView({ activeProjectSection }: SomemathViewProps) {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            SomeMath Platform &amp; Engine
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            somemath.md · Modern Math LMS &amp; Content Platform
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-teal-400 bg-teal-950/40 border border-teal-800/60 font-mono rounded-xs">
          STATUS: ACTIVE
        </span>
      </div>

      {activeProjectSection === "introduced" && (
        <div className="space-y-5 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            1. Project Overview &amp; Key Features
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
            <strong className="text-white font-semibold">SomeMath</strong> is a modern, interactive
            mathematics learning management platform (LMS) designed for Thai and English-speaking
            audiences. It combines structured video &amp; LaTeX lessons with a rich{" "}
            <strong className="text-white">Learning Space</strong> featuring 27 interactive math
            games, full multilingual support, real-time CMS content management, and automated
            certificate generation.
          </p>

          {/* Hero Callout Box */}
          <div className="my-3 py-3 px-4 border-l-2 border-teal-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
            <span className="font-mono text-teal-400 font-semibold block mb-0.5">
              💡 Conceptual Mathematics Platform
            </span>
            &ldquo;Learn to understand, not just memorize&rdquo; &mdash; Bridging conceptual
            mathematical understanding with rapid problem-solving arcade challenges.
          </div>

          <h3 className="text-sm md:text-base font-semibold text-white pt-1">
            Key Platform Modules &amp; Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                📚 <span>Interactive LMS &amp; Course Suite</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Structured learning paths with progress tracking, KaTeX &amp; MathLive formula
                rendering, multi-player video integration, student lesson notes, and PDF
                certificates.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                🎮 <span>Learning Space (27 Math Games)</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Dedicated arcade featuring <em>Numetric</em>, <em>Speed Arithmetic</em>,{" "}
                <em>Algebra RPG</em>, <em>Angle Artillery</em>, <em>Laser Geometry</em>,{" "}
                <em>Target 24</em>, and fraction mini-games.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                🌐 <span>Dual-Language i18n Engine</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Built-in internationalization powered by Intlayer with{" "}
                <code className="text-teal-300 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  no-prefix
                </code>{" "}
                routing for seamless EN/TH toggling.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                💳 <span>Payments &amp; One-Click Checkout</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Stripe integration with server actions and webhooks for paid courses, plus
                frictionless one-click registration bypassing checkout for free courses.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                🔒 <span>Clerk Auth &amp; Sanity CMS Sync</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Integrated Clerk Auth (v7) for student profiles and progress persistence,
                automatically synced with embedded Sanity CMS student records.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                🤖 <span>AI Guidance &amp; Generative Tools</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                AI-driven learning features and study guidance integrated via Google Generative AI (
                <code className="text-teal-300 font-mono text-[11px] px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  @google/generative-ai
                </code>
                ).
              </p>
            </div>
          </div>
        </div>
      )}

      {activeProjectSection === "techstack" && (
        <div className="space-y-6 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            2. Tech Stack &amp; Core Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-teal-400 block tracking-wider">
                Framework &amp; Language
              </span>
              <p className="font-semibold text-white text-sm">
                Next.js 16 (App Router) · TypeScript (Strict) · Bun (v1.0+)
              </p>
              <p className="text-xs text-neutral-400">
                Server Components by default, fast Bun runtime &amp; package management, strict type
                checking.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-teal-400 block tracking-wider">
                Styling &amp; UI Components
              </span>
              <p className="font-semibold text-white text-sm">
                Tailwind CSS v4 · shadcn/ui · Framer Motion v12 · Lucide Icons
              </p>
              <p className="text-xs text-neutral-400">
                Modern utility CSS styling, accessible UI primitives, smooth arcade game animations
                &amp; transitions.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-teal-400 block tracking-wider">
                CMS, Auth &amp; Payments
              </span>
              <p className="font-semibold text-white text-sm">
                Sanity v5 (Studio at /studio) · Clerk Auth (v7) · Stripe
              </p>
              <p className="text-xs text-neutral-400">
                Embedded CMS with GROQ queries, automatic Clerk-to-Sanity user sync, secure payment
                checkouts.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-teal-400 block tracking-wider">
                Math, i18n, PDF &amp; AI Tools
              </span>
              <p className="font-semibold text-white text-sm">
                KaTeX · MathLive · Intlayer · @react-pdf/renderer · Google GenAI
              </p>
              <p className="text-xs text-neutral-400">
                Crisp LaTeX formula rendering, EN/TH no-prefix routing, certificate compilation, and
                AI study tools.
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
            <span className="text-xs text-neutral-400 font-mono">somemath.com</span>
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
                    <span className="text-neutral-200">https://somemath.com</span>
                  </span>
                  <span className="text-[10px] text-teal-400 font-mono hidden sm:inline-block">
                    LIVE SITE
                  </span>
                </div>

                <a
                  href="https://somemath.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:text-teal-300 flex items-center gap-1 font-mono text-[11px] hover:underline shrink-0"
                >
                  <span>Open</span> ↗
                </a>
              </div>

              {/* Embedded Web Preview Iframe Content */}
              <div className="relative w-full h-[540px] md:h-[600px] bg-[#0c0e14]">
                <iframe
                  src="https://somemath.com"
                  title="SomeMath Live Web Embed"
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
                  Fankrits/SomeMath (Public Repository)
                </span>
              </div>
              <a
                href="https://github.com/Fankrits/SomeMath"
                target="_blank"
                rel="noreferrer"
                className="text-teal-400 hover:text-teal-300 underline font-medium text-sm"
              >
                github.com/Fankrits/SomeMath ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
