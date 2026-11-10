import type { SubTabKey } from "../../types";
import { ContactView } from "./contact-view";
import { ProfileView } from "./profile-view";
import { SkillsView } from "./skills-view";
import { ThesisView } from "./thesis-view";

interface PersonalSectionProps {
  activeSubTab: SubTabKey;
}

export function PersonalSection({ activeSubTab }: PersonalSectionProps) {
  return (
    <div className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed space-y-6">
      {activeSubTab === "profile" && <ProfileView />}
      {activeSubTab === "skills" && <SkillsView />}
      {activeSubTab === "thesis" && <ThesisView />}
      {activeSubTab === "contact" && <ContactView />}
    </div>
  );
}
