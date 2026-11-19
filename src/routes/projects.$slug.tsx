import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useDocsNav } from "@/components/docs/docs-nav-context";
import { ProjectArticle } from "@/components/docs/project-article";
import { ProjectPager } from "@/components/docs/project-pager";
import { PROJECT_DOCS } from "@/content/projects";
import { SITE } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECT_DOCS.find((doc) => doc.slug === params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const project = PROJECT_DOCS.find((doc) => doc.slug === loaderData?.slug);
    if (!project) return {};
    const title = `${project.name} · Projects · Kritsada Nhanjeing`;
    const url = `${SITE.url}/projects/${project.slug}`;
    const image = new URL(project.hero.src, SITE.url).toString();
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:image", content: image },
        { property: "og:image:width", content: String(project.hero.width) },
        { property: "og:image:height", content: String(project.hero.height) },
        { property: "og:image:alt", content: project.hero.alt },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.summary },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: project.hero.alt },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const { navigateTo } = useDocsNav();
  const project = PROJECT_DOCS.find((doc) => doc.slug === slug);
  if (!project) return <ProjectNotFound />;

  return (
    <>
      <ProjectArticle project={project} onNavigate={navigateTo} />
      <ProjectPager projects={PROJECT_DOCS} slug={project.slug} />
    </>
  );
}

function ProjectNotFound() {
  return (
    <div>
      <h2 className="font-display text-3xl font-semibold tracking-tight">Project not found</h2>
      <p className="mt-3 text-zinc-300">
        There is no project with that name.{" "}
        <Link to="/projects" className="text-[#FF9A63] underline underline-offset-4">
          See all projects
        </Link>
        .
      </p>
    </div>
  );
}
