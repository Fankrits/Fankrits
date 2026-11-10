import {
  PROJECT_SUB_TABS,
  type MainTabKey,
  type MainTabSection,
  type ProjectSubSectionKey,
  type SubTabKey,
} from "./types";

interface TerminalTopTabsProps {
  activeMainTab: MainTabKey;
  activeSubTab: SubTabKey;
  activeProjectSection: ProjectSubSectionKey;
  currentMainTab: MainTabSection;
  onSelectProjectSection: (sectionKey: ProjectSubSectionKey) => void;
  onSelectSubTab: (subKey: SubTabKey) => void;
}

export function TerminalTopTabs({
  activeMainTab,
  activeSubTab,
  activeProjectSection,
  currentMainTab,
  onSelectProjectSection,
  onSelectSubTab,
}: TerminalTopTabsProps) {
  return (
    <div className="flex items-center gap-1 border-b border-[#262b3d]/80 pb-3 mb-4 font-mono text-xs overflow-x-auto select-none">
      {activeMainTab === "projects"
        ? PROJECT_SUB_TABS.map((ptab) => {
            const isActive = activeProjectSection === ptab.key;
            return (
              <button
                key={ptab.key}
                type="button"
                onClick={() => onSelectProjectSection(ptab.key)}
                className={`px-4 py-1.5 rounded-none transition-all flex items-center cursor-pointer font-mono text-xs ${
                  isActive
                    ? "bg-[#82b1ff] text-[#0b0e17] font-bold shadow-sm"
                    : "bg-[#1d2232] text-neutral-400 hover:bg-[#262c3e] hover:text-neutral-200"
                }`}
              >
                <span>{ptab.label}</span>
              </button>
            );
          })
        : currentMainTab.subTabs.map((subTab) => {
            const isActive = activeSubTab === subTab.key;
            return (
              <button
                key={subTab.key}
                type="button"
                onClick={() => onSelectSubTab(subTab.key)}
                className={`px-4 py-1.5 rounded-none transition-all flex items-center cursor-pointer font-mono text-xs ${
                  isActive
                    ? "bg-[#82b1ff] text-[#0b0e17] font-bold shadow-sm"
                    : "bg-[#1d2232] text-neutral-400 hover:bg-[#262c3e] hover:text-neutral-200"
                }`}
              >
                <span>{subTab.name}</span>
              </button>
            );
          })}
      <button
        type="button"
        className="px-3 py-1.5 bg-[#171b28] text-neutral-500 hover:text-neutral-300 font-mono text-xs rounded-none cursor-pointer transition-all"
        title="Add tab"
      >
        +
      </button>
    </div>
  );
}
