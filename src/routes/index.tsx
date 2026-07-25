import { createFileRoute, Link } from "@tanstack/react-router";
import { ShaderBackground } from "#/components/ShaderBackground";
import {
  ArrowRight,
  Code,
  Sparkles,
  Mail,
  Laptop,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Layers,
  Cpu,
  Palette,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="dark min-h-screen w-full overflow-x-hidden bg-[#090b10] text-slate-100 relative font-sans selection:bg-[#73bfc4]/30 selection:text-[#73bfc4]">
      {/* 3D Animated Shader Gradient Background */}
      <ShaderBackground />

      {/* Glassmorphism Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white hover:opacity-90 transition-opacity no-underline"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#73bfc4]/20 via-[#ff810a]/20 to-[#8da0ce]/20 border border-white/15 backdrop-blur-md">
              <Sparkles className="h-5 w-5 text-[#73bfc4] animate-pulse" />
            </div>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              ALEX RIVERS
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
            aria-label="Main Navigation"
          >
            <a href="#about" className="hover:text-[#73bfc4] transition-colors no-underline">
              About
            </a>
            <a href="#projects" className="hover:text-[#73bfc4] transition-colors no-underline">
              Work
            </a>
            <a href="#skills" className="hover:text-[#73bfc4] transition-colors no-underline">
              Skills
            </a>
            <a href="#contact" className="hover:text-[#73bfc4] transition-colors no-underline">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-sm font-semibold transition-all duration-300 text-white backdrop-blur-md no-underline hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-36 relative z-10">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[85vh] flex flex-col justify-center items-start space-y-8 pt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#73bfc4] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#73bfc4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#73bfc4]"></span>
            </span>
            Available for Select Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight max-w-5xl leading-[1.05]">
            Crafting digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73bfc4] via-[#ff810a] to-[#8da0ce]">
              experiences
            </span>{" "}
            that defy expected boundaries.
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
            Creative Developer & Interactive Engineer crafting immersive web apps, bespoke 3D
            graphics, and intuitive interface design systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#73bfc4] to-[#8da0ce] text-slate-950 font-bold hover:brightness-110 transition-all duration-300 hover:translate-y-[-2px] shadow-xl shadow-[#73bfc4]/20 no-underline"
            >
              Explore Portfolio
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold transition-all duration-300 backdrop-blur-md no-underline hover:translate-y-[-2px]"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-6 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#73bfc4] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#73bfc4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#73bfc4] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start scroll-mt-32"
        >
          <div className="md:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#73bfc4] font-bold">
              Background & Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Where technical rigor meets visual intuition.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-slate-300 text-lg font-light leading-relaxed">
            <p>
              With over 6 years of experience across high-growth startups and creative design
              studios, I bridge the gap between complex frontend architecture and memorable
              aesthetic design.
            </p>
            <p>
              I specialize in combining modern web standards (React 19, Vite+, WebGL, GLSL Shaders)
              with fluid micro-interactions to create applications that engage users from the very
              first frame.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#73bfc4]/50 transition-all group">
                <Code className="h-8 w-8 text-[#73bfc4] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl text-white mb-2">Frontend Engineering</h3>
                <p className="text-sm text-slate-400 font-normal">
                  High-performance web applications built with TypeScript, React 19, and modern
                  state architectures.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-[#ff810a]/50 transition-all group">
                <Palette className="h-8 w-8 text-[#ff810a] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-xl text-white mb-2">Creative Coding & 3D</h3>
                <p className="text-sm text-slate-400 font-normal">
                  Interactive WebGL shaders, Three.js canvases, and dynamic particle systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-12 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#73bfc4] font-bold">
                Curated Work
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Featured Projects
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              A selection of recent interactive web applications and design systems built for high
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 space-y-6 backdrop-blur-xl hover:border-[#73bfc4]/50 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-[#73bfc4]/10 border border-[#73bfc4]/30 text-[#73bfc4] text-xs font-semibold">
                  Interactive 3D / WebGL
                </span>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#73bfc4] transition-colors">
                  Aether Spatial Engine
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Real-time 3D volumetric data visualizer engineered with Three.js and custom GLSL
                  fragment shaders.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  React 19
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  Three.js
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  GLSL
                </span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 space-y-6 backdrop-blur-xl hover:border-[#ff810a]/50 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-[#ff810a]/10 border border-[#ff810a]/30 text-[#ff810a] text-xs font-semibold">
                  SaaS & Analytics
                </span>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff810a] transition-colors">
                  Chronos Dashboard
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  High-frequency time-series telemetry platform with real-time streaming charts and
                  low latency rendering.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  TanStack
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  Tailwind v4
                </span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 space-y-6 backdrop-blur-xl hover:border-[#8da0ce]/50 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-[#8da0ce]/10 border border-[#8da0ce]/30 text-[#8da0ce] text-xs font-semibold">
                  Design System
                </span>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8da0ce] transition-colors">
                  Prism Component Suite
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Accessible glassmorphism component library built with Radix primitives and
                  Tailwind CSS.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  React
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  Accessibility
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  Storybook
                </span>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 space-y-6 backdrop-blur-xl hover:border-[#73bfc4]/50 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-[#73bfc4]/10 border border-[#73bfc4]/30 text-[#73bfc4] text-xs font-semibold">
                  Creative Web
                </span>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#73bfc4] transition-colors">
                  Vortex Soundscape
                </h3>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  Audio-reactive Web Audio API generative music workspace with interactive canvas
                  visualizations.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  Web Audio API
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  Canvas
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  ShaderGradient
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 scroll-mt-32">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-[#73bfc4] font-bold">
              Technical Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skills & Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
              <div className="p-3 rounded-2xl bg-[#73bfc4]/10 w-fit border border-[#73bfc4]/20 text-[#73bfc4]">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend Core</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-light list-none p-0">
                <li>React 19 & Next.js</li>
                <li>TypeScript / JavaScript</li>
                <li>Tailwind CSS v4 & CSS Modules</li>
                <li>State Management (Zustand, TanStack)</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
              <div className="p-3 rounded-2xl bg-[#ff810a]/10 w-fit border border-[#ff810a]/20 text-[#ff810a]">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">3D & Interactive</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-light list-none p-0">
                <li>@shadergradient/react</li>
                <li>Three.js & React Three Fiber</li>
                <li>GLSL Shaders & WebGL</li>
                <li>Framer Motion & GSAP</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-4">
              <div className="p-3 rounded-2xl bg-[#8da0ce]/10 w-fit border border-[#8da0ce]/20 text-[#8da0ce]">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Tooling & Engineering</h3>
              <ul className="space-y-2 text-sm text-slate-300 font-light list-none p-0">
                <li>Vite / Vite+ (vp)</li>
                <li>Git, GitHub Actions, CI/CD</li>
                <li>Figma to Code Workflow</li>
                <li>Testing (Vitest, Testing Library)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 p-8 md:p-16 space-y-8 max-w-4xl mx-auto backdrop-blur-2xl shadow-2xl">
            <div className="space-y-4 text-center">
              <div className="inline-flex p-3 rounded-2xl bg-[#8da0ce]/10 border border-[#8da0ce]/20 text-[#8da0ce]">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Let's build something extra-ordinary
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto font-light text-base md:text-lg">
                Have an upcoming project, design system query, or full-time opportunity? Send a
                message and I'll respond within 24 hours.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-[#73bfc4] focus:ring-1 focus:ring-[#73bfc4] outline-none text-sm transition-all duration-300 backdrop-blur-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-[#73bfc4] focus:ring-1 focus:ring-[#73bfc4] outline-none text-sm transition-all duration-300 backdrop-blur-md"
              />
              <textarea
                placeholder="Project details or message..."
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:border-[#73bfc4] focus:ring-1 focus:ring-[#73bfc4] outline-none text-sm transition-all duration-300 backdrop-blur-md resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#73bfc4] via-[#ff810a] to-[#8da0ce] hover:brightness-110 text-slate-950 font-bold transition-all duration-300 shadow-xl shadow-[#73bfc4]/20 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl py-8 mt-32 text-center text-xs text-slate-400 relative z-10">
        <p>
          &copy; {new Date().getFullYear()} Alex Rivers. Built with React 19, Tailwind CSS v4 &
          ShaderGradient.
        </p>
      </footer>
    </div>
  );
}
