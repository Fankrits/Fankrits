import type { ProjectSubSectionKey } from "../../types";

interface WatermarkViewProps {
  activeProjectSection: ProjectSubSectionKey;
}

export function WatermarkView({ activeProjectSection }: WatermarkViewProps) {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            SomeMath Watermark Studio
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            watermark-adv.md · Real-Time PDF Watermarking Engine
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-blue-400 bg-blue-950/40 border border-blue-800/60 font-mono rounded-xs">
          STATUS: ACTIVE
        </span>
      </div>

      {activeProjectSection === "introduced" && (
        <div className="space-y-5 font-sans">
          <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
            1. Project Overview &amp; Key Features
          </h2>
          <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
            <strong className="text-white font-semibold">SomeMath Watermark Studio</strong> (
            <code className="text-neutral-200 font-mono text-xs px-1.5 py-0.5 bg-[#1a1e2b] border border-[#2d354a] rounded">
              watermark-adv
            </code>
            ) is a high-performance web application designed for applying customizable text and
            image watermarks to PDF documents in real time. Built with{" "}
            <strong className="text-white">TanStack Start</strong>,{" "}
            <strong className="text-white">React 19</strong>,{" "}
            <strong className="text-white">pdf-lib</strong>, and the{" "}
            <strong className="text-white">Vite+</strong> unified toolchain.
          </p>

          {/* Hero Callout Box */}
          <div className="my-3 py-3 px-4 border-l-2 border-blue-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
            <span className="font-mono text-blue-400 font-semibold block mb-0.5">
              🚀 Dual-Engine Architecture
            </span>
            Client-side PDF manipulation powered by{" "}
            <code className="text-neutral-200 font-mono text-xs px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
              pdf-lib
            </code>{" "}
            with seamless TanStack Start server function fallbacks (
            <code className="text-neutral-200 font-mono text-xs px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
              applyWatermarkServerFn
            </code>
            ) for complex document rendering, batch queue ZIP compression, and 600ms debounced live
            preview.
          </div>

          <h3 className="text-sm md:text-base font-semibold text-white pt-1">
            Key Platform Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                📝 <span>Text &amp; Image Customization</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Supports custom text, standard PDF fonts (Helvetica, Times, Courier), embedded
                Google Fonts, HEX pickers, PNG/JPEG logo uploads, opacity, and rotation angles.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                🎯 <span>Flexible Tiling &amp; Presets</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                9 positioning presets (Top, Middle, Bottom, Left, Center, Right), dynamic grid
                tiling across pages (
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] rounded">
                  gridSpacingX/Y
                </code>
                ), and granular pixel offsets.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                🖼️ <span>Interactive Live Preview</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Embedded PDF viewer (
                <code className="text-neutral-200 font-mono text-[11px] px-1 bg-[#1a1e2b] border border-[#2d354a] rounded">
                  @embedpdf/react-pdf-viewer
                </code>
                ) with 600ms debounced auto-rendering for real-time visual feedback.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                📦 <span>Batch Processing &amp; ZIP Queue</span>
              </span>
              <p className="text-neutral-300 leading-normal text-xs">
                Multi-file Drag &amp; Drop queue, real-time status indicators (Pending, Processing,
                Completed), and 1-click ZIP archive export via JSZip.
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
              <span className="text-xs font-mono uppercase font-bold text-blue-400 block tracking-wider">
                Framework &amp; Core Runtime
              </span>
              <p className="font-semibold text-white text-sm">
                TanStack Start · React 19 · TanStack Router · SSR
              </p>
              <p className="text-xs text-neutral-400">
                Full-stack React 19 SSR framework with type-safe routing and server functions.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-blue-400 block tracking-wider">
                PDF Engine &amp; Embedded Viewer
              </span>
              <p className="font-semibold text-white text-sm">
                pdf-lib · @embedpdf/react-pdf-viewer
              </p>
              <p className="text-xs text-neutral-400">
                Client &amp; server-side PDF manipulation, font embedding, matrix math, and embedded
                canvas viewer.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-blue-400 block tracking-wider">
                Unified Toolchain &amp; Styling
              </span>
              <p className="font-semibold text-white text-sm">
                Vite+ (`vp`) · Tailwind CSS v4 · Radix UI · Lucide React
              </p>
              <p className="text-xs text-neutral-400">
                Vite+ unified toolchain (Vite, Rolldown, Vitest), modern utility-first CSS styling,
                and accessible primitive components.
              </p>
            </div>

            <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
              <span className="text-xs font-mono uppercase font-bold text-blue-400 block tracking-wider">
                Server Adapter &amp; Compression
              </span>
              <p className="font-semibold text-white text-sm">
                Nitro Server Adapter · JSZip Archive Engine
              </p>
              <p className="text-xs text-neutral-400">
                Cross-platform Nitro deployment server adapter and client-side ZIP archive bundling.
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
            <span className="text-xs text-neutral-400 font-mono">watermark.somemath.com</span>
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
                    <span className="text-neutral-200">https://watermark.somemath.com</span>
                  </span>
                  <span className="text-[10px] text-blue-400 font-mono hidden sm:inline-block">
                    LIVE SITE
                  </span>
                </div>

                <a
                  href="https://watermark.somemath.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono text-[11px] hover:underline shrink-0"
                >
                  <span>Open</span> ↗
                </a>
              </div>

              {/* Embedded Web Preview Iframe Content */}
              <div className="relative w-full h-[540px] md:h-[600px] bg-[#0c0e14]">
                <iframe
                  src="https://watermark.somemath.com"
                  title="SomeMath Watermark Studio Live Web Embed"
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
                  Fankrits/somemath-watermark (Public Repository)
                </span>
              </div>
              <a
                href="https://github.com/Fankrits/somemath-watermark"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 underline font-medium text-sm"
              >
                github.com/Fankrits/somemath-watermark ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
