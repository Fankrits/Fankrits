import type { ProjectSubSectionKey, SubTabKey } from "../../types";
import { MemizeView } from "./memize-view";
import { SomemathView } from "./somemath-view";
import { SomescriptView } from "./somescript-view";
import { WatermarkView } from "./watermark-view";

interface ProjectsSectionProps {
  activeSubTab: SubTabKey;
  activeProjectSection: ProjectSubSectionKey;
}

export function ProjectsSection({ activeSubTab, activeProjectSection }: ProjectsSectionProps) {
  return (
    <div className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed space-y-6">
      {activeSubTab === "somemath" && <SomemathView activeProjectSection={activeProjectSection} />}
      {activeSubTab === "somescript" && (
        <SomescriptView activeProjectSection={activeProjectSection} />
      )}
      {activeSubTab === "memize" && <MemizeView activeProjectSection={activeProjectSection} />}
      {activeSubTab === "watermark-adv" && (
        <WatermarkView activeProjectSection={activeProjectSection} />
      )}
    </div>
  );
}
