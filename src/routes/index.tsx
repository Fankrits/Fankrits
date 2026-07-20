import { createFileRoute, Link } from "@tanstack/react-router";
import { ShaderBackground } from "#/components/ShaderBackground";
import { ArrowRight, Code, Sparkles, Mail, Laptop, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-[var(--sea-ink)]">
      {/* Background Shader Canvas */}
      <ShaderBackground />

      {/* Global Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md transition-all duration-300">
        <div className="page-wrap h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-lg tracking-tight text-[var(--sea-ink)] hover:text-[var(--lagoon-deep)] transition-colors no-underline"
          >
            <Sparkles className="h-5 w-5 text-[var(--lagoon)] animate-pulse" />
            <span>AETHERIUM</span>
          </Link>
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium"
            aria-label="Main Navigation"
          >
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--chip-bg)] hover:bg-[var(--link-bg-hover)] border border-[var(--chip-line)] text-sm font-medium transition-all duration-300 text-[var(--sea-ink)] no-underline"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="page-wrap py-12 space-y-32">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[80vh] flex flex-col justify-center items-start space-y-6 pt-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-line)] text-[var(--kicker)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Creative Digital Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] display-title">
            We craft digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lagoon)] via-[#8da0ce] to-[#ff810a]">
              interfaces
            </span>{" "}
            that feel like art.
          </h1>
          <p className="text-lg md:text-xl text-[var(--sea-ink-soft)] max-w-2xl font-light">
            Aetherium designs and builds high-end bespoke websites, web applications, and
            interactive products that captivate visitors.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--sea-ink)] text-[var(--bg-base)] font-medium hover:opacity-90 transition-all duration-300 hover:translate-y-[-2px] shadow-lg no-underline"
            >
              Explore Our Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--chip-bg)] hover:bg-[var(--link-bg-hover)] border border-[var(--chip-line)] text-[var(--sea-ink)] font-medium transition-all duration-300 no-underline"
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
            <h2 className="text-xs uppercase tracking-wider text-[var(--sea-ink-soft)] font-semibold">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold display-title leading-tight">
              Driven by details, inspired by aesthetics.
            </h3>
          </div>
          <div className="md:col-span-7 space-y-6 text-[var(--sea-ink-soft)] font-light">
            <p>
              We believe every website should be a memorable experience. By merging performance
              engineering with gorgeous design visuals, we help forward-thinking brands stand out on
              the web.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl border border-[var(--line)] feature-card">
                <Code className="h-6 w-6 text-[var(--lagoon)] mb-3" />
                <h4 className="font-semibold text-[var(--sea-ink)] mb-1">Development</h4>
                <p className="text-xs text-[var(--sea-ink-soft)]">
                  Performant, responsive frontend frameworks & interactions.
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-[var(--line)] feature-card">
                <Laptop className="h-6 w-6 text-[#ff810a] mb-3" />
                <h4 className="font-semibold text-[var(--sea-ink)] mb-1">Design System</h4>
                <p className="text-xs text-[var(--sea-ink-soft)]">
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
              <h2 className="text-xs uppercase tracking-wider text-[var(--sea-ink-soft)] font-semibold">
                Selected Work
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold display-title">Featured Projects</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-[var(--line)] feature-card p-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lagoon)]">
                Interactive Web
              </span>
              <h4 className="text-2xl font-bold display-title text-[var(--sea-ink)]">
                Nebula Design System
              </h4>
              <p className="text-sm text-[var(--sea-ink-soft)] font-light">
                A dynamic design system for space exploration visualizations.
              </p>
              <div className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--sea-ink)] pt-2 group-hover:gap-2 transition-all">
                View Project <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-[var(--line)] feature-card p-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ff810a]">
                Web App
              </span>
              <h4 className="text-2xl font-bold display-title text-[var(--sea-ink)]">
                Vortex Analytics
              </h4>
              <p className="text-sm text-[var(--sea-ink-soft)] font-light">
                Realtime user behavior heatmaps with high performance canvas overlays.
              </p>
              <div className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--sea-ink)] pt-2 group-hover:gap-2 transition-all">
                View Project <ChevronRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="island-shell rounded-3xl p-8 md:p-16 space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4 text-center">
              <div className="inline-flex p-3 rounded-full bg-[var(--chip-bg)] border border-[var(--chip-line)]">
                <Mail className="h-6 w-6 text-[#8da0ce]" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold display-title">
                Let's create something together
              </h3>
              <p className="text-[var(--sea-ink-soft)] max-w-lg mx-auto font-light">
                Have a project or want to collaborate? Get in touch and let's build something
                unforgettable.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:ring-1 focus:ring-[var(--lagoon)] outline-none text-sm transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:ring-1 focus:ring-[var(--lagoon)] outline-none text-sm transition-all duration-300"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--sea-ink)] placeholder-[var(--sea-ink-soft)] focus:border-[var(--lagoon)] focus:ring-1 focus:ring-[var(--lagoon)] outline-none text-sm transition-all duration-300 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[var(--sea-ink)] hover:opacity-90 text-[var(--bg-base)] font-semibold transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer mt-32 py-8 text-center text-xs text-[var(--sea-ink-soft)]">
        <p>&copy; {new Date().getFullYear()} Aetherium Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
