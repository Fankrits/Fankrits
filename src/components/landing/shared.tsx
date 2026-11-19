import type { ReactNode } from "react";

export function SectionHeading({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mb-8 md:mb-12 max-w-2xl text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
      <p className="font-agave text-[0.8rem] uppercase tracking-[0.2em] text-white/75">{label}</p>
      <h2
        id={id}
        className="mt-3 font-display text-4xl md:text-6xl font-medium leading-[1.02] tracking-tight"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-white/85">{children}</p>
      ) : null}
    </header>
  );
}
