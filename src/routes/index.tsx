import { createFileRoute } from "@tanstack/react-router";
import { ShaderBackground } from "#/components/ShaderBackground";
import { ArrowRight, Code, Sparkles, Mail, Laptop, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950/70 text-slate-100 font-sans overflow-x-hidden">
      {/* Background Shader Canvas */}
      <ShaderBackground />

      {/* Global Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/20 backdrop-blur-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
            <Sparkles className="h-5 w-5 text-[#73bfc4] animate-pulse" />
            <span>AETHERIUM</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[80vh] flex flex-col justify-center items-start space-y-6 pt-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff810a]/10 border border-[#ff810a]/20 text-[#ff810a] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Creative Digital Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] font-serif">
            We craft digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73bfc4] via-[#8da0ce] to-[#ff810a]">
              interfaces
            </span>{" "}
            that feel like art.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light">
            Aetherium designs and builds high-end bespoke websites, web applications, and
            interactive products that captivate visitors.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-100 transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-white/5"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-300"
            >
              Our Philosophy
            </a>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start scroll-mt-24"
        >
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
              Driven by details, inspired by aesthetics.
            </h3>
          </div>
          <div className="md:col-span-7 space-y-6 text-slate-400 font-light">
            <p>
              We believe every website should be a memorable experience. By merging performance
              engineering with gorgeous design visuals, we help forward-thinking brands stand out on
              the web.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                <Code className="h-6 w-6 text-[#73bfc4] mb-3" />
                <h4 className="font-semibold text-white mb-1">Development</h4>
                <p className="text-xs text-slate-400">
                  Performant, responsive frontend frameworks & interactions.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                <Laptop className="h-6 w-6 text-[#ff810a] mb-3" />
                <h4 className="font-semibold text-white mb-1">Design System</h4>
                <p className="text-xs text-slate-400">
                  Custom user interface design systems & high fidelity assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects / Blog Section */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Selected Work
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-serif">Featured Projects</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#73bfc4]/30 hover:shadow-2xl hover:shadow-[#73bfc4]/5">
              <div className="p-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#73bfc4]">
                  Interactive Web
                </span>
                <h4 className="text-2xl font-bold font-serif text-white">Nebula Design System</h4>
                <p className="text-sm text-slate-400 font-light">
                  A dynamic design system for space exploration visualizations.
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-white pt-2 group-hover:gap-2 transition-all">
                  View Project <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#ff810a]/30 hover:shadow-2xl hover:shadow-[#ff810a]/5">
              <div className="p-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#ff810a]">
                  Web App
                </span>
                <h4 className="text-2xl font-bold font-serif text-white">Vortex Analytics</h4>
                <p className="text-sm text-slate-400 font-light">
                  Realtime user behavior heatmaps with high performance canvas overlays.
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-white pt-2 group-hover:gap-2 transition-all">
                  View Project <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 md:p-16 backdrop-blur-xl space-y-8 max-w-4xl mx-auto shadow-2xl">
            <div className="space-y-4 text-center">
              <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10">
                <Mail className="h-6 w-6 text-[#8da0ce]" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold font-serif">
                Let's create something together
              </h3>
              <p className="text-slate-400 max-w-lg mx-auto font-light">
                Have a project or want to collaborate? Get in touch and let's build something
                unforgettable.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#73bfc4]/50 focus:ring-1 focus:ring-[#73bfc4]/30 outline-none text-sm transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#73bfc4]/50 focus:ring-1 focus:ring-[#73bfc4]/30 outline-none text-sm transition-all duration-300"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#73bfc4]/50 focus:ring-1 focus:ring-[#73bfc4]/30 outline-none text-sm transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold transition-all duration-300 shadow-md shadow-white/5"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-32 border-t border-white/5 py-8 bg-slate-950/40 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Aetherium Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
