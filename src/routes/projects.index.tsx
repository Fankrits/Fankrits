import { createFileRoute } from "@tanstack/react-router";
import { ProjectsIndex } from "@/components/docs/projects-index";
import { PROJECT_DOCS } from "@/content/projects";
import { SITE } from "@/lib/seo";

const TITLE = "Projects · Kritsada Nhanjeing";
const DESCRIPTION =
  "Documentation, architecture notes, stack details and screenshots for projects built by Kritsada Nhanjeing (Fankrits): SomeScript, uptodateStock, Zyplus, SomeMath, Memize and the internal Fanslides deck studio.";
const PAGE_URL = `${SITE.url}/projects`;
const IMAGE = new URL(SITE.image, SITE.url).toString();

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: () => <ProjectsIndex projects={PROJECT_DOCS} />,
});
