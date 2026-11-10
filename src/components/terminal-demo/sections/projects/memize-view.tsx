import type { ProjectSubSectionKey } from "../../types";

interface MemizeViewProps {
  activeProjectSection: ProjectSubSectionKey;
}

export function MemizeView({ activeProjectSection }: MemizeViewProps) {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Memize Cognitive &amp; Party Games
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            memize.md · Adaptive AI Progressive Web Application
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-purple-400 bg-purple-950/40 border border-purple-800/60 font-mono rounded-xs">
          STATUS: ACTIVE
        </span>
      </div>

      {activeProjectSection === "introduced" && (
        <div className="space-y-5 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            1. Project Overview &amp; Features
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
            <strong className="text-white font-semibold">Memize</strong> is a modern, responsive,
            and adaptive Progressive Web Application (PWA) designed for cognitive training and
            social party games. It leverages Google Gemini Generative AI to personalize gameplay
            based on each player's cognitive profile, paired with Supabase for user synchronization
            and multi-tenant organization support.
          </p>

          <div className="my-3 py-3 px-4 border-l-2 border-purple-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
            <span className="font-mono text-purple-400 font-semibold block mb-0.5">
              🎨 Neobrutalism Design System
            </span>
            High contrast visuals, bold 2px borders, tactile press feedback (
            <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
              neo-click
            </code>
            ), Howler.js audio synthesis, custom haptic vibration feedback, and standalone
            offline-first PWA support.
          </div>

          <h3 className="text-sm md:text-base font-semibold text-white pt-1">
            Key Platform Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                🧠 <span>Adaptive Cognitive Profiling</span>
              </span>
              <ul className="list-disc pl-4 text-neutral-300 space-y-1 text-xs">
                <li>
                  Generates dynamic, AI-driven content tailored to user focus areas, education
                  level, and language preference.
                </li>
                <li>
                  Utilizes Elo-based rating adjustment to dynamically calibrate question complexity
                  and game difficulty.
                </li>
              </ul>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                🏢 <span>Multi-Tenancy &amp; Sync</span>
              </span>
              <ul className="list-disc pl-4 text-neutral-300 space-y-1 text-xs">
                <li>
                  <strong className="text-white">Supabase Backend:</strong> Cloud synchronization
                  for player progress, game statistics, accuracy, and achievements.
                </li>
                <li>
                  <strong className="text-white">Organizations:</strong> Multi-tenant group
                  capabilities allowing shared metrics, custom leaderboards, and curated game
                  configurations for teams or classrooms.
                </li>
              </ul>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                🎯 <span>Brain Training Games</span>
              </span>
              <ul className="list-disc pl-4 text-neutral-300 space-y-1 text-xs">
                <li>
                  <strong className="text-white">Guess The Item:</strong> Fast-paced cognitive
                  recall and definition matching.
                </li>
                <li>
                  <strong className="text-white">First Pair:</strong> Working memory and visual
                  attention tracking game.
                </li>
                <li>
                  <strong className="text-white">Flash Cards:</strong> Spaced repetition memory
                  decks targeting identified weaknesses.
                </li>
              </ul>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                🎉 <span>Party Games</span>
              </span>
              <ul className="list-disc pl-4 text-neutral-300 space-y-1 text-xs">
                <li>
                  <strong className="text-white">Headbands:</strong> Forehead charades utilizing
                  device motion/accelerometer sensors or manual tap controls.
                </li>
                <li>
                  <strong className="text-white">Draw It:</strong> Real-time canvas drawing and
                  guessing powered by canvas APIs and AI prompt generation.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-purple-400 font-semibold flex items-center gap-1.5">
              📱 <span>Native-Feel PWA Design</span>
            </span>
            <ul className="list-disc pl-4 text-neutral-300 space-y-1 text-xs">
              <li>
                <strong className="text-white">Neobrutalism Design System:</strong> High contrast
                visuals, bold borders, tactile press feedback (
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  neo-click
                </code>
                ), and custom color tokens.
              </li>
              <li>
                <strong className="text-white">Audio &amp; Haptics:</strong> Integrated sound
                effects via Howler.js and vibration feedback via custom haptic APIs.
              </li>
              <li>
                <strong className="text-white">Offline Support &amp; Mobile Optimization:</strong>{" "}
                Safe-area inset handling and standalone PWA support.
              </li>
            </ul>
          </div>
        </div>
      )}

      {activeProjectSection === "techstack" && (
        <div className="space-y-6 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            2. Tech Stack &amp; Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-purple-400 block tracking-wider">
                Framework &amp; Frontend Core
              </span>
              <p className="font-semibold text-white text-sm">
                Next.js 16 (App Router) · React 19 · Motion (Framer Motion)
              </p>
              <p className="text-xs text-neutral-400">
                Built with Next.js 16 App Router and React 19, utilizing Framer Motion for dynamic
                animations and Bun / Node.js execution runtime.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-purple-400 block tracking-wider">
                Generative AI Engine
              </span>
              <p className="font-semibold text-white text-sm">
                Google GenAI SDK (
                <code className="text-purple-300 font-mono text-xs px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  @google/genai
                </code>
                ) · Gemini Models
              </p>
              <p className="text-xs text-neutral-400">
                Personalizes gameplay content based on cognitive profiles, powers Elo difficulty
                calibration, and generates AI prompts for Draw It.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-purple-400 block tracking-wider">
                Database &amp; Auth (Multi-Tenancy)
              </span>
              <p className="font-semibold text-white text-sm">
                Supabase · PostgreSQL · Row Level Security (RLS)
              </p>
              <p className="text-xs text-neutral-400">
                Cloud synchronization for player progress, statistics, accuracy, achievements, and
                multi-tenant organization capabilities with shared leaderboards.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-purple-400 block tracking-wider">
                Styling, Audio &amp; Tooling
              </span>
              <p className="font-semibold text-white text-sm">
                Tailwind CSS v4 · shadcn/ui · Neobrutalism System · Howler.js · Biome
              </p>
              <p className="text-xs text-neutral-400">
                High contrast visuals, tactile{" "}
                <code className="text-neutral-200 font-mono text-xs px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  neo-click
                </code>{" "}
                feedback, custom haptic APIs, Howler.js audio, Biome linter/formatter, and
                standalone PWA offline support.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeProjectSection === "preview" && (
        <div className="space-y-6">
          <div className="border-b border-[#262b3d]/40 pb-2 flex items-center justify-between">
            <h2 className="text-base md:text-lg font-semibold text-white">
              3. Live Web Embedded Preview &amp; Repository
            </h2>
            <span className="text-xs text-neutral-400 font-mono">memize.somemath.com</span>
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
                    <span className="text-neutral-200">https://memize.somemath.com</span>
                  </span>
                  <span className="text-[10px] text-purple-400 font-mono hidden sm:inline-block">
                    LIVE SITE
                  </span>
                </div>

                <a
                  href="https://memize.somemath.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono text-[11px] hover:underline shrink-0"
                >
                  <span>Open</span> ↗
                </a>
              </div>

              {/* Embedded Web Preview Iframe Content */}
              <div className="relative w-full h-[540px] md:h-[600px] bg-[#0c0e14]">
                <iframe
                  src="https://memize.somemath.com"
                  title="Memize Live Web Embed"
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
                  Fankrits/memory (Public Repository)
                </span>
              </div>
              <a
                href="https://github.com/Fankrits/memory"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 underline font-medium text-sm"
              >
                github.com/Fankrits/memory ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
