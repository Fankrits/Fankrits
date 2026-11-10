export function ThesisView() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="border-b border-[#262b3d]/60 pb-4 flex flex-wrap items-center justify-between gap-2 font-sans">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Academic Thesis (2024)
          </h1>
          <p className="text-xs text-neutral-400 mt-1 font-mono">
            thesis.md · Department of Mathematics &amp; Statistics · Thammasat University
          </p>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 font-mono rounded-xs">
          STATUS: PUBLISHED
        </span>
      </div>

      {/* Section 1: Overview & Research Title */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          1. Research Abstract &amp; Title
        </h2>

        {/* Hero Callout Box */}
        <div className="my-4 py-3 px-4 border-l-2 border-emerald-400 text-xs md:text-sm text-neutral-300 bg-[#161a26]/60 rounded-r-md">
          <span className="font-mono text-emerald-400 font-semibold block mb-0.5">
            📐 Title of Publication
          </span>
          On the Bounds for the Spectral Norm of Circulant and r-Circulant Matrices with the
          Gaussian Padovan Numbers
        </div>

        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          This academic thesis investigates upper and lower bounds for the spectral norms of
          complex-valued circulant and r-circulant matrices whose entry vectors are derived from
          Gaussian Padovan sequence numbers. The work merges fundamental number theory with
          computational numerical linear algebra.
        </p>
      </div>

      {/* Section 2: Mathematical Foundations */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          2. Mathematical Foundations &amp; Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              🔢 <span>Gaussian Padovan Sequences</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Formulation of complex Gaussian extensions for third-order recurrence relations and
              entry vector norm estimations.
            </p>
          </div>

          <div className="p-3.5 bg-[#161926] border border-[#262b3d] rounded-lg space-y-1">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              📊 <span>r-Circulant Spectral Norms</span>
            </span>
            <p className="text-neutral-300 leading-normal text-xs">
              Spectral matrix norm derivation using singular values, matrix inequalities, and
              operator norms in linear algebra.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Academic Metadata */}
      <div className="space-y-4 font-sans">
        <h2 className="text-base md:text-lg font-semibold text-white border-b border-[#262b3d]/40 pb-2">
          3. Academic Metadata &amp; Institution
        </h2>

        <div className="p-4 bg-[#161926] border border-[#262b3d] rounded-lg space-y-2 text-xs md:text-sm">
          <div className="flex flex-wrap justify-between items-center gap-1">
            <span className="font-bold text-white text-sm">Thammasat University</span>
            <span className="text-xs font-mono text-emerald-400">Pathum Thani, Thailand</span>
          </div>
          <p className="text-neutral-400 text-xs">
            Faculty of Science and Technology · Department of Mathematics &amp; Statistics (Degree
            Conferred 2024).
          </p>
        </div>
      </div>
    </div>
  );
}
