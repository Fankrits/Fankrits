import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DocsShell } from "@/components/docs/docs-layout";
import { PROJECT_DOCS } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return (
    <DocsShell projects={PROJECT_DOCS}>
      <Outlet />
    </DocsShell>
  );
}
