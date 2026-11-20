// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vite-plus/test";
import type { ProjectDoc } from "@/content/projects/types";
import { DocBlocks } from "./doc-blocks";
import { InlineText } from "./inline-text";
import { ProjectArticle } from "./project-article";

beforeAll(() => {
  if (typeof globalThis.ResizeObserver === "undefined") {
    globalThis.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
});

const SAMPLE_DOC: ProjectDoc = {
  slug: "sample-doc",
  name: "SampleDoc",
  kicker: "Documentation fixture",
  summary: "A synthetic fixture verifying all documentation blocks and metadata rendering.",
  links: [
    { label: "sample.example", href: "https://sample.example" },
    { label: "Source", href: "https://github.com/Fankrits/sample" },
    { label: "Desktop app", href: "https://github.com/Fankrits/sample/releases/latest" },
  ],
  stack: ["TypeScript", "React 19", "TanStack Start"],
  facts: [
    { label: "Platform", value: "Web & Desktop" },
    { label: "License", value: "MIT" },
  ],
  hero: {
    src: "/og.png",
    alt: "Sample workspace screenshot",
    caption: "Main editor view",
    width: 1200,
    height: 630,
  },
  sections: [
    {
      id: "sample-doc-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Run `vp check` before shipping **production** code with **embedded `inline`** tokens.",
        },
        {
          type: "list",
          items: ["First bullet with `code`", "Second bullet with **emphasis**"],
        },
        {
          type: "list",
          ordered: true,
          items: ["Step one", "Step two"],
        },
        {
          type: "callout",
          tone: "note",
          title: "Architecture note",
          text: "Uses `IntersectionObserver` inside an effect.",
        },
        {
          type: "callout",
          tone: "tip",
          text: "Press **Escape** to close the mobile sheet.",
        },
        {
          type: "code",
          title: "example.ts",
          lang: "ts",
          code: "export const answer = 42;",
        },
        {
          type: "table",
          head: ["Command", "Purpose"],
          rows: [
            ["`vp dev`", "Start dev server"],
            ["`vp check`", "Run **lint** and typecheck"],
          ],
        },
        {
          type: "image",
          image: {
            src: "/og.png",
            alt: "Secondary capture",
            caption: "Secondary caption",
            width: 1200,
            height: 630,
          },
        },
      ],
    },
  ],
};

describe("InlineText", () => {
  it("parses inline code and bold without raw HTML injection", () => {
    const { container } = render(
      <p>
        <InlineText text="Use `a **b** c` and **bold text** plus **bold `cmd`** and <script>alert(1)</script>." />
      </p>,
    );

    const codes = container.querySelectorAll("code");
    expect(codes).toHaveLength(2);
    expect(codes[0]?.textContent).toBe("a **b** c");
    expect(codes[1]?.textContent).toBe("cmd");

    const strongs = container.querySelectorAll("strong");
    expect(strongs).toHaveLength(2);
    expect(strongs[0]?.textContent).toBe("bold text");
    expect(strongs[1]?.textContent).toBe("bold cmd");

    expect(container.querySelector("script")).toBeNull();
    expect(container.textContent).toContain("<script>alert(1)</script>");
  });
});

describe("DocBlocks & ProjectArticle", () => {
  it("renders all block types with semantic elements and image attributes", () => {
    const { container } = render(<DocBlocks blocks={SAMPLE_DOC.sections[0]!.blocks} />);

    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("pre code")?.textContent).toBe("export const answer = 42;");
    expect(container.querySelectorAll("aside")).toHaveLength(2);
    expect(container.querySelector("table thead th")?.textContent).toBe("Command");

    const img = container.querySelector("figure img");
    expect(img?.getAttribute("loading")).toBe("lazy");
    expect(img?.getAttribute("decoding")).toBe("async");
    expect(img?.getAttribute("width")).toBe("1200");
    expect(img?.getAttribute("height")).toBe("630");
    expect(container.querySelector("figcaption")?.textContent).toBe("Secondary caption");
  });

  it("renders a full ProjectArticle with h2 project title, h3 sections, facts, and links", () => {
    const onNavigate = vi.fn();
    render(<ProjectArticle project={SAMPLE_DOC} onNavigate={onNavigate} />);

    const projectHeading = screen.getByRole("heading", { level: 2, name: /SampleDoc/ });
    expect(projectHeading.id).toBe("sample-doc-title");

    const sectionHeading = screen.getByRole("heading", { level: 3, name: /Overview/ });
    expect(sectionHeading.id).toBe("sample-doc-overview-heading");

    expect(screen.getByText("At a glance")).toBeTruthy();
    expect(screen.getByText("Web & Desktop")).toBeTruthy();
    expect(screen.getByText("TanStack Start")).toBeTruthy();
  });
});
