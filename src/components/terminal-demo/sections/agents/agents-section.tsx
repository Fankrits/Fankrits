import type { SubTabKey } from "../../types";
import { DiagnosticsView } from "./diagnostics-view";
import { QmpView } from "./qmp-view";
import { SubagentsView } from "./subagents-view";

interface AgentsSectionProps {
  activeSubTab: SubTabKey;
}

export function AgentsSection({ activeSubTab }: AgentsSectionProps) {
  return (
    <div className="space-y-3">
      {activeSubTab === "qmp" && <QmpView />}
      {activeSubTab === "subagents" && <SubagentsView />}
      {activeSubTab === "diagnostics" && <DiagnosticsView />}
    </div>
  );
}
