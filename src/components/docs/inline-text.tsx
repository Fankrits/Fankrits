import { Fragment, type ReactNode } from "react";

const INLINE_TOKEN_RE = /(`[^`\n]+`|\*\*(?:(?!\*\*).)+\*\*)/g;
const CODE_SPAN_RE = /(`[^`\n]+`)/g;

function renderCodeSpans(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(CODE_SPAN_RE);
  const nodes: ReactNode[] = [];

  for (let i = 0; i < parts.length; i += 1) {
    const part = parts[i];
    if (!part) continue;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      nodes.push(
        <code
          key={`${keyPrefix}-c-${i}`}
          className="font-agave text-[0.875em] [overflow-wrap:anywhere] rounded-md border border-white/12 bg-white/[0.07] px-1.5 py-0.5 text-zinc-100"
        >
          {part.slice(1, -1)}
        </code>,
      );
    } else {
      nodes.push(<Fragment key={`${keyPrefix}-t-${i}`}>{part}</Fragment>);
    }
  }

  return nodes;
}

/**
 * Safely parses inline `code` spans and **bold** text into React nodes without
 * dangerouslySetInnerHTML.
 */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(INLINE_TOKEN_RE);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <code
              key={`code-${index}`}
              className="font-agave text-[0.875em] [overflow-wrap:anywhere] rounded-md border border-white/12 bg-white/[0.07] px-1.5 py-0.5 text-zinc-100"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          const inner = part.slice(2, -2);
          return (
            <strong key={`strong-${index}`} className="font-semibold text-white">
              {renderCodeSpans(inner, `strong-${index}`)}
            </strong>
          );
        }

        return <Fragment key={`text-${index}`}>{part}</Fragment>;
      })}
    </>
  );
}
