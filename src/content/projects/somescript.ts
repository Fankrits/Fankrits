import type { ProjectDoc } from "./types";

export const somescript: ProjectDoc = {
  slug: "somescript",
  name: "SomeScript",
  kicker: "AI-native LaTeX editor",
  summary:
    "A chat agent that works inside your LaTeX project to read, edit, fix, and recompile files, showing every change as a diff you can undo. Runs in the browser with realtime collaboration or locally as a free desktop app with bring-your-own-model AI.",
  status: "Live",
  links: [
    { label: "somescript.com", href: "https://somescript.com" },
    { label: "Documentation", href: "https://docs.somescript.com" },
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "Tauri 2",
    "Rust (axum)",
    "CodeMirror 6",
    "Tectonic",
    "SyncTeX",
    "Hocuspocus",
    "PostgreSQL",
    "Redis",
  ],
  facts: [
    { label: "Platform", value: "Web, macOS (Universal), Windows (x64), Linux (x64)" },
    { label: "Status", value: "Live (Cloud and Desktop releases)" },
    { label: "LaTeX engine", value: "Tectonic and official SyncTeX CLI" },
    { label: "Auth and billing", value: "Clerk and Stripe on Cloud; none on Desktop" },
    {
      label: "Storage",
      value: "PostgreSQL (Drizzle ORM), Redis, S3 buckets; plain local folders on Desktop",
    },
    { label: "Hosting", value: "Vercel (web, docs) and Railway (editor, compiler, collaboration)" },
    { label: "License", value: "All rights reserved (private repository)" },
  ],
  hero: {
    src: "/projects/somescript/06-desktop-editor.webp",
    alt: "SomeScript Desktop editor: agent chat with a plan and compile result on the left, LaTeX source in the middle, the compiled PDF on the right and a terminal showing no compilation errors below",
    caption:
      "SomeScript Desktop editing a demo project: agent chat, source, PDF preview and compile terminal in one window.",
    width: 1456,
    height: 920,
  },
  sections: [
    {
      id: "somescript-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "SomeScript is a LaTeX editor built around an embedded AI assistant that operates directly on the open project. Researchers, students, and technical authors use it to write papers, resolve compilation errors, and preview typeset PDFs without maintaining a local TeX Live installation.",
        },
        {
          type: "p",
          text: "It ships in two forms from one shared editor codebase: **SomeScript Cloud** for browser-based workspaces with multi-user collaboration, and **SomeScript Desktop** for offline local editing where projects stay as plain folders on disk with no account or subscription.",
        },
      ],
    },
    {
      id: "somescript-features",
      title: "Features",
      blocks: [
        {
          type: "table",
          head: ["Capability", "Details"],
          rows: [
            [
              "**Embedded AI agent**",
              "Reads, searches, edits, creates, deletes, and compiles project files. Cloud runs the Eve agent (Lite, Pro, Expert modes) with Crossref citation lookup and web search; Desktop runs a local Rust agent loop with your own API key.",
            ],
            [
              "**Reviewable diffs and undo**",
              "File edits render with Shiki-highlighted diffs (`structuredPatch`), Human-in-the-Loop approval cards for writes, staleness checks against concurrent edits, and one-click undo.",
            ],
            [
              "**CodeMirror 6 editor**",
              "LaTeX syntax highlighting via `codemirror-lang-latex`, CST-based collapsible section outline, project-wide literal and regex search/replace, and image/PDF binary viewers.",
            ],
            [
              "**Tectonic and SyncTeX**",
              "Automatic compilation with Tectonic and bidirectional SyncTeX navigation (`synctex view` / `synctex edit`) between source lines and the embedded `@embedpdf/react-pdf-viewer` preview.",
            ],
            [
              "**Terminal error cards**",
              "Structured compiler log viewer that parses Tectonic errors by file and line number with a **Send to chat** action for AI-assisted repair.",
            ],
            [
              "**Realtime collaboration**",
              "Cloud workspaces sync via Y.js CRDTs over Hocuspocus v4 with live multi-cursor presence, awareness state, and differential file persistence.",
            ],
            [
              "**Project kanban board**",
              "Built-in three-column task board (`todo`, `ongoing`, `finished`) stored in `.somescript/tasks.json`, supporting drag-and-drop and links to source lines or PDF pages.",
            ],
          ],
        },
      ],
    },
    {
      id: "somescript-editor",
      title: "Inside the editor",
      blocks: [
        {
          type: "p",
          text: "The editor is one window with a left tool rail, a source pane, a live PDF and a terminal. These captures come from the installed desktop app (version 0.1.5) working on a small demo project, because the hosted editor sits behind sign-in.",
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/06-desktop-editor.webp",
            alt: "Full SomeScript Desktop editor window with agent chat, LaTeX source, PDF preview and terminal",
            caption:
              "The full window after an agent run: plan finished, edit applied, project recompiled with no errors.",
            width: 1456,
            height: 920,
          },
        },
        {
          type: "table",
          head: ["Area", "What it does"],
          rows: [
            [
              "**Top bar**",
              "Back to the dashboard, project and file breadcrumb, **Compile**, **Download PDF** and layout toggles for the side panel, terminal and PDF.",
            ],
            [
              "**Left rail**",
              "Tabs for the file tree, the **Agent**, project search, **Tasks** and settings.",
            ],
            [
              "**Source pane**",
              "CodeMirror with a formatting toolbar (undo, bold, italic, headings, math, symbols, lists, snippets), folding and a `⌘K` search.",
            ],
            [
              "**PDF pane**",
              "The compiled document with zoom, select and pan tools, and a page navigator.",
            ],
            [
              "**Terminal**",
              "Compile output as **Raw** text or readable **Cards**, with a **Send to chat** button that hands an error to the agent.",
            ],
          ],
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/07-agent-plan-diff.webp",
            alt: "Agent panel showing tool calls, a three-step plan with one step done, and an edit to main.tex as a green diff with an Undo button",
            caption:
              "The agent lists and reads files, keeps a plan, then shows its edit to main.tex as a diff with an Undo button.",
            width: 890,
            height: 742,
          },
        },
        {
          type: "p",
          text: "Every step is a card: files listed, a file read with its line range, a plan whose steps tick off as the agent works, each edit as a diff you can undo, and the compile result. The model picker sits under the message box, and files can be attached to a message.",
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/08-tasks-kanban.webp",
            alt: "Tasks kanban in the left panel with two items in To do, none On going and one checked off under Finished, beside the LaTeX source",
            caption:
              "The Tasks tab: a board with To do, On going and Finished lanes and a 1/3 done counter.",
            width: 890,
            height: 640,
          },
        },
        {
          type: "p",
          text: "Tasks are a board for the open project that you fill in by hand. Each card has a drag handle and a checkbox; ticking it moves the card to Finished.",
        },
      ],
    },
    {
      id: "somescript-screenshots",
      title: "Screenshots",
      blocks: [
        {
          type: "callout",
          tone: "note",
          title: "Capture scope",
          text: "The hosted editor sits behind Clerk sign-in on `somescript.com`. Editor views are in the section above, taken from the desktop app. These captures are the public landing page, feature previews, documentation site and pricing page.",
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/01-landing.webp",
            alt: "SomeScript landing page showing main.tex LaTeX source on the left and compiled Fundamental Theorem of Calculus PDF preview on the right",
            caption: "The public landing page with a live source and PDF preview.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/03-features-bento.webp",
            alt: "Feature previews for Terminal and Error Repair, Real-Time Co-Authoring with multiple cursors, and Kanban Tasks",
            caption:
              "Interactive feature previews on the landing page: Tectonic terminal error repair, multi-cursor co-authoring, and project kanban tasks.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/04-docs-math.webp",
            alt: "SomeScript Docs Mathematics guide in dark mode with navigation sidebar, rendered KaTeX equation, and Explain with AI trigger",
            caption:
              "Public LaTeX documentation site (docs.somescript.com) built with Nuxt and Docus, showing KaTeX math rendering and sidebar navigation.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/05-pricing.webp",
            alt: "SomeScript Cloud pricing page showing Free, Pro, and Team workspace-billed tiers",
            caption:
              "Cloud workspace pricing page (Free, Pro, and Team) with per-workspace billing and AI credit metering.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "somescript-architecture",
      title: "How it's built",
      blocks: [
        {
          type: "p",
          text: "SomeScript is a Bun-managed Turborepo monorepo split into six applications under `apps/` so compilation, realtime sync, web auth, and desktop packaging stay isolated.",
        },
        {
          type: "table",
          head: ["App", "Stack", "Role and host"],
          rows: [
            [
              "`apps/web`",
              "Next.js 16, Clerk, Drizzle ORM, Stripe",
              "Marketing site, authenticated workspace dashboard, and billing on Vercel.",
            ],
            [
              "`apps/editor`",
              "Next.js 16, CodeMirror 6, `@embedpdf`, `@assistant-ui/react`",
              "Core LaTeX IDE, file tree (`react-arborist`), Eve AI agent, and project APIs on Railway.",
            ],
            [
              "`apps/compiler`",
              "Bun, Tectonic, SyncTeX CLI, Redis",
              "Isolated HTTP compilation service (`/compile`, `/synctex`, `/health`) with SHA-256 output caching on Railway.",
            ],
            [
              "`apps/collaboration`",
              "Bun, Hocuspocus v4, Y.js, Redis",
              "WebSocket CRDT sync (`project:<id>` rooms), Clerk JWT verification, and debounced S3 persistence on Railway.",
            ],
            [
              "`apps/tauri`",
              "Tauri 2, Rust (`axum`), Vite, React 19",
              "Native desktop app that aliases `@/` to `apps/editor` without forking the UI and re-implements `/api/*` in Rust.",
            ],
            [
              "`apps/docs`",
              "Nuxt, Docus, KaTeX",
              "LaTeX writing and platform documentation portal deployed statically on Vercel.",
            ],
          ],
        },
        {
          type: "p",
          text: "On the cloud platform, PostgreSQL stores workspaces and project ownership, S3-compatible object storage (Tigris on Railway, RustFS in local Docker Compose) holds project files and `.somescript/collab-state.bin`, and Redis handles token-bucket rate limiting, differential compile file hashes, compile output caching, and Hocuspocus replica sync.",
        },
      ],
    },
    {
      id: "somescript-install",
      title: "Install",
      blocks: [
        {
          type: "p",
          text: "Use the hosted cloud editor at `somescript.com` (free tier includes 10 projects, unlimited compiles, realtime collaboration, and 300 monthly Lite AI credits), or install **SomeScript Desktop** from the download section on the same site, which lists installers for macOS, Windows and Linux.",
        },
        {
          type: "image",
          image: {
            src: "/projects/somescript/02-desktop-install.webp",
            alt: "SomeScript Desktop download section showing macOS, Windows, and Linux installer tabs with Homebrew cask and shell install commands",
            caption:
              "Desktop download section on somescript.com with platform tabs and installer commands.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "somescript-desktop-offline",
      title: "Desktop and offline mode",
      blocks: [
        {
          type: "p",
          text: "The desktop binary embeds the built editor SPA and serves it from a local Rust `axum` server bound strictly to `127.0.0.1`. Every launch generates a random token exchanged for an `HttpOnly; SameSite=Strict` cookie, validates the `Host` header against DNS rebinding, and confines all file operations (including symlinks) to the active project folder.",
        },
        {
          type: "list",
          items: [
            "**Offline compilation**: Tectonic and SyncTeX ship as bundled sidecars. Running **Prepare for offline use** pre-downloads common LaTeX packages so documents compile without network access.",
            "**Bring-your-own-key AI**: Connect OpenAI, Anthropic, OpenRouter, Gemini, Groq, DeepSeek, Ollama, LM Studio, vLLM, or any OpenAI-compatible endpoint in **Settings**. Keys stay in a local owner-only `ai.json` file and are never sent back to the UI.",
            "**Signed self-updates**: The Tauri updater checks `latest.json` on GitHub Releases and verifies binaries with minisign / Ed25519 before offering a one-click update.",
          ],
        },
      ],
    },
  ],
};
