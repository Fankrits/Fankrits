export type MainTabKey = "personal" | "projects" | "agents";

export type SubTabKey =
  | "profile"
  | "skills"
  | "thesis"
  | "contact"
  | "somemath"
  | "somescript"
  | "memize"
  | "watermark-adv"
  | "qmp"
  | "subagents"
  | "diagnostics";

export type ProjectSubSectionKey = "introduced" | "techstack" | "preview";

export interface SubTabItem {
  key: SubTabKey;
  name: string;
  sub: string;
  color: string;
}

export interface MainTabSection {
  key: MainTabKey;
  id: string;
  title: string;
  sub: string;
  accentColor: string;
  color: string;
  defaultSubTab: SubTabKey;
  subTabs: SubTabItem[];
}

export const MAIN_TABS: MainTabSection[] = [
  {
    key: "personal",
    id: "01",
    title: "personal information",
    sub: "Kritsada Nhanjeing · bio & thesis",
    accentColor: "text-amber-400/90",
    color: "bg-amber-400",
    defaultSubTab: "profile",
    subTabs: [
      { key: "profile", name: "profile", sub: "Kritsada Nhanjeing · bio", color: "bg-amber-400" },
      { key: "skills", name: "skills", sub: "technical stack & matrix", color: "bg-sky-400" },
      { key: "thesis", name: "thesis", sub: "academic thesis (2024)", color: "bg-emerald-400" },
      { key: "contact", name: "contact", sub: "direct contact & channels", color: "bg-rose-400" },
    ],
  },
  {
    key: "projects",
    id: "02",
    title: "personal projects",
    sub: "math platform · ai latex · cognitive pwa · pdf watermark",
    accentColor: "text-rose-400/90",
    color: "bg-rose-400",
    defaultSubTab: "somemath",
    subTabs: [
      {
        key: "somemath",
        name: "somemath",
        sub: "math lms & learning platform",
        color: "bg-teal-400",
      },
      {
        key: "somescript",
        name: "somescript",
        sub: "ai latex co-author & editor",
        color: "bg-amber-400",
      },
      {
        key: "memize",
        name: "memize",
        sub: "adaptive ai cognitive & party games",
        color: "bg-purple-400",
      },
      {
        key: "watermark-adv",
        name: "watermark-adv",
        sub: "somemath watermark studio",
        color: "bg-blue-400",
      },
    ],
  },
  {
    key: "agents",
    id: "03",
    title: "agents",
    sub: "autoresearch & automation",
    accentColor: "text-emerald-400/90",
    color: "bg-emerald-400",
    defaultSubTab: "qmp",
    subTabs: [
      { key: "qmp", name: "qmp", sub: "autoresearch/qmp-runner", color: "bg-emerald-400" },
      { key: "subagents", name: "subagents", sub: "multi-agent orchestrator", color: "bg-sky-400" },
      {
        key: "diagnostics",
        name: "diagnostics",
        sub: "system logs & status",
        color: "bg-amber-400",
      },
    ],
  },
];

export const PROJECT_SUB_TABS: Array<{ key: ProjectSubSectionKey; label: string }> = [
  { key: "introduced", label: "introduced" },
  { key: "techstack", label: "techstack & skills" },
  { key: "preview", label: "preview link" },
];
