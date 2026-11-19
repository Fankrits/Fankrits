import { useEffect, useState } from "react";
import { Check, Copy, Info, Lightbulb } from "lucide-react";
import type { DocBlock } from "@/content/projects/types";
import { InlineText } from "./inline-text";

function CodeBlock({ code, lang, title }: { code: string; lang?: string; title?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Ignore clipboard permission errors in restricted contexts.
    }
  };

  const label = title ?? lang ?? "Code";

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-white/12 bg-black/55 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-3.5 py-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="truncate font-agave text-xs font-medium text-zinc-200">{label}</span>
          {title && lang ? (
            <span className="shrink-0 rounded border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-agave text-[0.65rem] uppercase tracking-wider text-zinc-300">
              {lang}
            </span>
          ) : null}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied code to clipboard" : `Copy ${label} to clipboard`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 font-agave text-[0.7rem] text-zinc-200 hover:bg-white/[0.12] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7E3D]/80"
        >
          {copied ? (
            <>
              <Check aria-hidden className="size-3.5 text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Copy aria-hidden className="size-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="m-0 p-4 font-agave text-[0.825rem] leading-[1.65] text-zinc-100">
          <code className="block min-w-max">{code}</code>
        </pre>
      </div>
    </div>
  );
}

function CalloutBlock({
  tone,
  title,
  text,
}: {
  tone: "note" | "tip";
  title?: string;
  text: string;
}) {
  const isTip = tone === "tip";
  const Icon = isTip ? Lightbulb : Info;
  const heading = title ?? (isTip ? "Tip" : "Note");

  return (
    <aside
      aria-label={heading}
      className={
        isTip
          ? "my-5 rounded-xl border border-[#FF7E3D]/25 border-l-2 border-l-[#FF7E3D] bg-[#E65923]/[0.09] px-4 py-3.5 text-sm leading-relaxed text-zinc-100"
          : "my-5 rounded-xl border border-white/12 border-l-2 border-l-zinc-300/75 bg-white/[0.04] px-4 py-3.5 text-sm leading-relaxed text-zinc-200"
      }
    >
      <div className="flex items-center gap-2 font-agave text-xs font-semibold uppercase tracking-[0.14em] text-white">
        <Icon
          aria-hidden
          className={isTip ? "size-3.5 shrink-0 text-[#FF7E3D]" : "size-3.5 shrink-0 text-zinc-300"}
        />
        <span>{heading}</span>
      </div>
      <p className="mt-1.5 text-[0.925rem] leading-relaxed text-zinc-200">
        <InlineText text={text} />
      </p>
    </aside>
  );
}

export function DocBlocks({ blocks }: { blocks: readonly DocBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={`p-${index}`}
                className="max-w-[68rem] text-[0.975rem] leading-[1.78] text-zinc-200/95"
              >
                <InlineText text={block.text} />
              </p>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={`list-${index}`}
                className={
                  block.ordered
                    ? "my-4 max-w-[68rem] list-decimal space-y-2 pl-5 text-[0.96rem] leading-[1.7] text-zinc-200/95 marker:font-agave marker:text-xs marker:text-zinc-400"
                    : "my-4 max-w-[68rem] list-disc space-y-2 pl-5 text-[0.96rem] leading-[1.7] text-zinc-200/95 marker:text-[#FF7E3D]/80"
                }
              >
                {block.items.map((item, itemIdx) => (
                  <li key={`item-${itemIdx}`} className="pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ListTag>
            );
          }

          case "image":
            return (
              <figure key={`img-${index}`} className="my-6">
                <div className="overflow-hidden rounded-xl border border-white/12 bg-black/45 shadow-[0_14px_36px_rgba(0,0,0,0.4)]">
                  <img
                    src={block.image.src}
                    alt={block.image.alt}
                    width={block.image.width}
                    height={block.image.height}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto max-w-full w-full"
                  />
                </div>
                {block.image.caption ? (
                  <figcaption className="mt-2.5 text-center font-agave text-xs leading-relaxed text-zinc-300">
                    {block.image.caption}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "code":
            return (
              <CodeBlock
                key={`code-${index}`}
                code={block.code}
                lang={block.lang}
                title={block.title}
              />
            );

          case "callout":
            return (
              <CalloutBlock
                key={`callout-${index}`}
                tone={block.tone}
                title={block.title}
                text={block.text}
              />
            );

          case "table":
            return (
              <div
                key={`table-${index}`}
                className="my-5 overflow-x-auto rounded-xl border border-white/12 bg-black/35"
              >
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/12 bg-white/[0.04]">
                      {block.head.map((cell, cellIdx) => (
                        <th
                          key={`th-${cellIdx}`}
                          scope="col"
                          className="whitespace-nowrap px-4 py-2.5 font-agave text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-zinc-300"
                        >
                          <InlineText text={cell} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.08]">
                    {block.rows.map((row, rowIdx) => (
                      <tr key={`tr-${rowIdx}`} className="hover:bg-white/[0.025]">
                        {row.map((cell, cellIdx) => (
                          <td
                            key={`td-${rowIdx}-${cellIdx}`}
                            className="px-4 py-2.5 align-top leading-relaxed text-zinc-200"
                          >
                            <InlineText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
