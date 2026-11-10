import { MAIN_TABS, type MainTabKey, type SubTabKey } from "./types";

interface TerminalSidebarProps {
  activeMainTab: MainTabKey;
  activeSubTab: SubTabKey;
  onSelectMainTab: (mainKey: MainTabKey) => void;
  onSelectSubTab: (mainKey: MainTabKey, subKey: SubTabKey) => void;
}

export function TerminalSidebar({
  activeMainTab,
  activeSubTab,
  onSelectMainTab,
  onSelectSubTab,
}: TerminalSidebarProps) {
  return (
    <div className="lg:col-span-3 border-r border-b lg:border-b-0 border-[#262b3d] bg-[#141722] p-4 flex flex-col justify-between overflow-y-auto">
      <div className="space-y-4">
        <div className="px-2 py-1 text-[10px] font-mono tracking-wider text-neutral-400 uppercase font-bold border-b border-[#262b3d]/70 pb-1.5 flex items-center justify-between">
          <span>NAVIGATION TREE</span>
          <span className="text-[9px] text-neutral-500 font-normal">DIR</span>
        </div>

        <div className="space-y-3 font-mono">
          {MAIN_TABS.map((tab) => {
            const isMainActive = activeMainTab === tab.key;
            return (
              <div key={tab.key} className="space-y-1">
                {/* Main Section Header */}
                <button
                  type="button"
                  onClick={() => onSelectMainTab(tab.key)}
                  className={`w-full text-left px-2.5 py-2 rounded-none transition-all flex items-center justify-between cursor-pointer ${
                    isMainActive
                      ? "bg-[#1f2434] text-white border-l-2 border-[#4f80ff]"
                      : "hover:bg-[#1a1e2b] text-neutral-400 border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${tab.color}`} />
                    <span className="font-bold text-xs uppercase tracking-wide">{tab.title}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">[{tab.id}]</span>
                </button>

                {/* Sub-Items inside Sidebar */}
                <div className="pl-4 space-y-0.5 border-l border-[#262b3d]/60 ml-3">
                  {tab.subTabs.map((subTab) => {
                    const isSubActive = activeSubTab === subTab.key;
                    return (
                      <button
                        key={subTab.key}
                        type="button"
                        onClick={() => onSelectSubTab(tab.key, subTab.key)}
                        className={`w-full text-left px-2 py-1 rounded-none text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isSubActive
                            ? "bg-[#252b3d] text-amber-300 font-bold"
                            : "text-neutral-400 hover:text-neutral-200 hover:bg-[#181c28]"
                        }`}
                      >
                        <span className="truncate">├─ {subTab.name}</span>
                        {isSubActive && <span className="text-[10px] text-amber-400">●</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
