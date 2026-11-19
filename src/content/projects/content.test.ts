import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vite-plus/test";
import { PROJECT_DOCS } from "./index";
import type { DocImage, ProjectDoc } from "./types";

const publicDir = join(process.cwd(), "public");

function imagesOf(doc: ProjectDoc): DocImage[] {
  return [
    doc.hero,
    ...doc.sections.flatMap((section) =>
      section.blocks.flatMap((block) => (block.type === "image" ? [block.image] : [])),
    ),
  ];
}

// Public GitHub repos only. SomeScript, SomeMath, Memize, uptodateStock and Fanslides are private:
// linking them would give visitors a 404.
const PUBLIC_REPOS = ["https://github.com/Fankrits/zyplus-editor"];

describe("project docs content", () => {
  it("uses unique slugs and unique, slug-prefixed section ids", () => {
    const slugs = PROJECT_DOCS.map((doc) => doc.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    const ids = PROJECT_DOCS.flatMap((doc) => doc.sections.map((section) => section.id));
    expect(new Set(ids).size).toBe(ids.length);
    for (const doc of PROJECT_DOCS) {
      for (const section of doc.sections) {
        expect(section.id.startsWith(`${doc.slug}-`)).toBe(true);
      }
    }
  });

  it("only references screenshots that exist in public/", () => {
    for (const doc of PROJECT_DOCS) {
      for (const image of imagesOf(doc)) {
        expect(existsSync(join(publicDir, image.src)), `${doc.slug}: ${image.src}`).toBe(true);
        expect(image.alt.length).toBeGreaterThan(10);
      }
    }
  });

  it("links only to https URLs and to public GitHub repositories", () => {
    for (const doc of PROJECT_DOCS) {
      for (const link of doc.links) {
        expect(link.href.startsWith("https://"), `${doc.slug}: ${link.href}`).toBe(true);
        if (link.href.includes("github.com")) {
          expect(
            PUBLIC_REPOS.some((repo) => link.href.startsWith(repo)),
            `${doc.slug}: ${link.href}`,
          ).toBe(true);
        }
      }
    }
  });

  it("keeps the internal Fanslides tool free of any deployed hostname or link", () => {
    const doc = PROJECT_DOCS.find((d) => d.slug === "fanslides");
    expect(doc).toBeDefined();
    expect(doc?.status).toBe("Internal");
    expect(doc?.links).toEqual([]);
    expect(JSON.stringify(doc)).not.toMatch(/workers\.dev|vercel\.app|https?:\/\//i);
  });
});
