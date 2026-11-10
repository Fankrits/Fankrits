export function ContactView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Contact &amp; Digital Channels
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            contact.md · Reach Out &amp; Connect
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-rose-400 bg-rose-950/40 border border-rose-800/60 font-mono rounded-xs">
          STATUS: OPEN FOR COLLABORATION
        </span>
      </div>

      {/* Section 1: Overview */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Direct Channels Overview
        </h2>
        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          Feel free to reach out regarding AI operations engineering, agentic workflow automation,
          custom MCP server development, or mathematical matrix optimization projects.
        </p>

        {/* Hero Callout Box */}
        <div className="my-4 py-3 px-4 border-l-2 border-rose-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-rose-400 font-semibold block mb-0.5">
            📫 Professional Communication
          </span>
          Direct email inquiry, GitHub collaboration, or portfolio interaction.
        </div>
      </div>

      {/* Section 2: Contact Options Grid */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. Primary Communication Channels
        </h2>

        <div className="space-y-3 font-sans text-xs md:text-sm">
          <div className="py-3 px-4 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white block">Email Address</span>
              <span className="text-neutral-400 text-xs">contact@fankrits.com</span>
            </div>
            <a
              href="mailto:contact@fankrits.com"
              className="text-rose-400 hover:text-rose-300 underline font-medium text-xs md:text-sm"
            >
              contact@fankrits.com ↗
            </a>
          </div>

          <div className="py-3 px-4 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white block">Personal Portfolio</span>
              <span className="text-neutral-400 text-xs">fankrits.com</span>
            </div>
            <a
              href="https://fankrits.com"
              target="_blank"
              rel="noreferrer"
              className="text-rose-400 hover:text-rose-300 underline font-medium text-xs md:text-sm"
            >
              fankrits.com ↗
            </a>
          </div>

          <div className="py-3 px-4 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white block">GitHub Profile</span>
              <span className="text-neutral-400 text-xs">@Fankrits</span>
            </div>
            <a
              href="https://github.com/Fankrits"
              target="_blank"
              rel="noreferrer"
              className="text-rose-400 hover:text-rose-300 underline font-medium text-xs md:text-sm"
            >
              github.com/Fankrits ↗
            </a>
          </div>

          <div className="py-3 px-4 bg-[#181c2b] border border-[#262b3d] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-white block">SomeMath Platform</span>
              <span className="text-neutral-400 text-xs">somemath.com</span>
            </div>
            <a
              href="https://somemath.com"
              target="_blank"
              rel="noreferrer"
              className="text-rose-400 hover:text-rose-300 underline font-medium text-xs md:text-sm"
            >
              somemath.com ↗
            </a>
          </div>
        </div>
      </div>

      {/* Section 3: Timezone & Location */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Location &amp; Timezone
        </h2>

        <div className="p-4 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1 text-xs md:text-sm">
          <div className="flex justify-between items-center">
            <span className="font-bold text-white">Bangkok, Thailand</span>
            <span className="font-mono text-rose-400 text-xs">ICT (UTC+07:00)</span>
          </div>
          <p className="text-neutral-400 text-xs">Standard response window within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}
