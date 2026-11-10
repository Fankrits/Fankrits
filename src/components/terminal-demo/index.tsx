"use client";

import { useState } from "react";
import { AgentsSection } from "./sections/agents/agents-section";
import { PersonalSection } from "./sections/personal/personal-section";
import { ProjectsSection } from "./sections/projects/projects-section";
import { TerminalSidebar } from "./terminal-sidebar";
import { TerminalTitleBar } from "./terminal-title-bar";
import { TerminalTopTabs } from "./terminal-top-tabs";
import { MAIN_TABS, type MainTabKey, type ProjectSubSectionKey, type SubTabKey } from "./types";

export default function TerminalDemo() {
  const [activeMainTab, setActiveMainTab] = useState<MainTabKey>("personal");
  const [activeSubTab, setActiveSubTab] = useState<SubTabKey>("profile");
  const [activeProjectSection, setActiveProjectSection] =
    useState<ProjectSubSectionKey>("introduced");

  const currentMainTab = MAIN_TABS.find((tab) => tab.key === activeMainTab) || MAIN_TABS[0];

  const handleSelectMainTab = (mainKey: MainTabKey) => {
    setActiveMainTab(mainKey);
    const targetSection = MAIN_TABS.find((tab) => tab.key === mainKey);
    if (targetSection) {
      setActiveSubTab(targetSection.defaultSubTab);
    }
  };

  const handleSelectSubTabFromSidebar = (mainKey: MainTabKey, subKey: SubTabKey) => {
    setActiveMainTab(mainKey);
    setActiveSubTab(subKey);
  };

  return (
    <section className="w-full h-full p-2 sm:p-4 font-agave flex flex-col items-center justify-center relative select-none">
      <div className="w-full max-w-[98vw] 2xl:max-w-[1700px] mx-auto rounded-none border border-[#262b3d] bg-[#12151e] shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#c5cddb] text-xs md:text-sm font-mono flex flex-col h-[85vh] md:h-[88vh] max-h-[900px]">
        {/* macOS Terminal Title Bar */}
        <TerminalTitleBar />

        {/* Outer Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-[680px]">
          {/* Left Sidebar (Main Sections & Direct Sub-Items Tree) */}
          <TerminalSidebar
            activeMainTab={activeMainTab}
            activeSubTab={activeSubTab}
            onSelectMainTab={handleSelectMainTab}
            onSelectSubTab={handleSelectSubTabFromSidebar}
          />

          {/* Right Main Panel */}
          <div className="lg:col-span-9 p-5 md:p-8 bg-[#141724] flex flex-col justify-start overflow-y-auto">
            {/* Top Sub-Menu Tabs Bar */}
            <TerminalTopTabs
              activeMainTab={activeMainTab}
              activeSubTab={activeSubTab}
              activeProjectSection={activeProjectSection}
              currentMainTab={currentMainTab}
              onSelectProjectSection={setActiveProjectSection}
              onSelectSubTab={setActiveSubTab}
            />

            {/* Main Stream Area */}
            <div className="overflow-y-auto min-h-[440px] max-h-[calc(85vh-220px)] pr-2 space-y-4 font-mono text-xs md:text-sm leading-relaxed flex-1">
              {activeMainTab === "personal" && <PersonalSection activeSubTab={activeSubTab} />}
              {activeMainTab === "projects" && (
                <ProjectsSection
                  activeSubTab={activeSubTab}
                  activeProjectSection={activeProjectSection}
                />
              )}
              {activeMainTab === "agents" && <AgentsSection activeSubTab={activeSubTab} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
