import type { ProjectDoc } from "./types";

export const zyplus: ProjectDoc = {
  slug: "zyplus",
  name: "Zyplus",
  kicker: "Open-source markdown editor",
  summary:
    "A desktop editor that keeps notes as plain .md files in your own folders. Flip any tab between rich text and raw markdown with one key; Mermaid and KaTeX render inline.",
  status: "Open source",
  links: [
    { label: "zyplus.app", href: "https://zyplus.app" },
    { label: "Web editor", href: "https://editor.zyplus.app" },
    { label: "GitHub", href: "https://github.com/Fankrits/zyplus-editor" },
    { label: "Releases", href: "https://github.com/Fankrits/zyplus-editor/releases/latest" },
  ],
  stack: [
    "Tauri 2",
    "React 19",
    "Rust",
    "Milkdown",
    "CodeMirror",
    "Tailwind CSS v4",
    "macOS · Windows · Linux",
  ],
  facts: [
    { label: "Platform", value: "macOS, Windows, Linux, and web (editor.zyplus.app)" },
    { label: "Storage", value: "Plain .md files on disk (no database or vault)" },
    { label: "Auth", value: "None — offline-first" },
    { label: "License", value: "MIT" },
    { label: "Repo visibility", value: "Public (GitHub)" },
    {
      label: "Distribution",
      value: "GitHub Releases, Homebrew cask, install scripts, in-app updater",
    },
  ],
  hero: {
    src: "/projects/zyplus/01-editor-rich.webp",
    alt: "Zyplus in rich text mode showing the file tree sidebar, Welcome.md tab, a Tip callout, a rendered Mermaid flowchart, and a KaTeX equation",
    caption:
      "Rich text mode in dark theme with the file tree sidebar, a GitHub-style Tip callout, an inline Mermaid flowchart, and a KaTeX equation.",
    width: 1440,
    height: 900,
  },
  sections: [
    {
      id: "zyplus-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Zyplus is a local-first desktop markdown editor for macOS, Windows, and Linux. It opens ordinary folders on disk instead of importing notes into a proprietary vault or database, so every document stays a plain `.md` file that works with Git, cloud sync folders, or any other text editor.",
        },
        {
          type: "p",
          text: "It is built for writers and developers who want a rendered document view while drafting without giving up direct access to raw markdown syntax. Pressing `Cmd+E` (`Ctrl+E` on Windows and Linux) flips the active tab between WYSIWYG rich text and raw markdown source on the same file, without converting or re-saving.",
        },
        {
          type: "p",
          text: "No account or sync server is required. The only network request the desktop app makes is checking signed GitHub Releases for updates; a browser build is also hosted at `editor.zyplus.app` for trying the editor without installing.",
        },
      ],
    },
    {
      id: "zyplus-features",
      title: "Features",
      blocks: [
        {
          type: "table",
          head: ["Capability", "Details"],
          rows: [
            [
              "Dual editing modes",
              "Switch any tab between WYSIWYG rich text (Milkdown/Crepe) and raw markdown (CodeMirror) with `Cmd+E` / `Ctrl+E`. Mode is tracked per tab.",
            ],
            [
              "Inline rich blocks",
              "GitHub alert callouts (`[!TIP]`, `[!NOTE]`, etc.), syntax-highlighted code blocks, Mermaid diagrams, and KaTeX math render inline and re-color with the active theme.",
            ],
            [
              "Folder workspaces & tabs",
              "Open multiple project folders in the file tree sidebar, reorder tabs, search and replace (`Cmd+F` / `Cmd+Opt+F`), and restore open folders, tabs, and sidebar state across restarts.",
            ],
            [
              "On-demand extensions",
              "Optional capabilities in Settings -> Extensions (Mermaid Diagrams, LaTeX Math (KaTeX), JSON Editor, CSV / TSV Editor, Charts, and Code & Config Files) download on demand and remove their files when disabled.",
            ],
            [
              "Native PDF export",
              "Export paginated PDFs with `Cmd+P` through the native print pipeline rather than `window.print()`, alongside `.md` export (`Cmd+Shift+S`) and one-keystroke markdown or path copy.",
            ],
            [
              "OS file associations",
              "Registers as an editor for `.md`, `.markdown`, `.mdown`, `.mkd`, and `.txt` so double-clicking a file in the OS opens it in a tab in the running instance.",
            ],
            [
              "Themes",
              "Ten built-in appearances: System, Light, Dark, Catppuccin (Latte, Frappe, Macchiato, Mocha), and Tokyo Night (Night, Storm, Day), applied to both window chrome and editor canvas.",
            ],
            [
              "Self-updating releases",
              "Built-in updater checks `latest.json` on GitHub Releases and verifies Minisign signatures before installing.",
            ],
          ],
        },
      ],
    },
    {
      id: "zyplus-screenshots",
      title: "Screenshots",
      blocks: [
        {
          type: "image",
          image: {
            src: "/projects/zyplus/02-editor-plain.webp",
            alt: "Zyplus in plain markdown mode showing raw syntax-highlighted markdown for Welcome.md",
            caption:
              "Plain mode (`Cmd+E`) on the same `Welcome.md` tab, showing CodeMirror syntax highlighting for headings, `[!TIP]` callout syntax, and `mermaid` / `latex` fences.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/03-settings-themes.webp",
            alt: "Zyplus Settings modal open to the Theme panel showing Base and Catppuccin swatches",
            caption:
              "Settings modal on the Theme panel, displaying Base (System, Light, Dark) and Catppuccin palette cards alongside General, Extensions, Shortcuts, and About.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/04-desktop-window.webp",
            alt: "Zyplus macOS desktop window with multiple project folders in the sidebar and three open tabs",
            caption:
              "Native macOS desktop window with multiple project folders (`Content` and `Zyplus/First`), three open tabs, and a dark theme.",
            width: 1726,
            height: 1350,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/05-landing.webp",
            alt: "zyplus.app landing page showing the macOS download button, CLI install trigger, and interactive editor preview",
            caption:
              "Distribution site at `zyplus.app` with OS-detected installer downloads, terminal install commands, and an interactive editor preview.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "zyplus-architecture",
      title: "How it's built",
      blocks: [
        {
          type: "p",
          text: "The shipped cross-platform release is a **Tauri 2** desktop application with a **React 19** and **TypeScript** frontend (`Vite 8`, `Tailwind CSS v4`, `@heroui/react`). Rich text editing runs on `@milkdown/crepe`, plain markdown editing runs on `@uiw/react-codemirror` with `@codemirror/lang-markdown`, and the sidebar file tree uses `react-arborist`. Workspace state (open folders, tabs, dirty flags) is managed by a reducer store in `src/state/`, and keyboard bindings and the `Cmd+/` shortcut sheet both read from a single table in `src/lib/shortcuts.ts`.",
        },
        {
          type: "p",
          text: "The Rust backend (`src-tauri/src/lib.rs`) wires up Tauri plugins for filesystem access (`tauri-plugin-fs`), native dialogs (`tauri-plugin-dialog`), single-instance handoff (`tauri-plugin-single-instance`), OS file-open queuing, signed auto-updates (`tauri-plugin-updater`), and silent paginated PDF printing via `objc2-app-kit` and `WKWebView` on macOS.",
        },
        {
          type: "p",
          text: "A `v*` git tag triggers `.github/workflows/release.yml`, which stamps versions across `package.json`, `tauri.conf.json`, and `Cargo.toml`, builds universal macOS `.dmg`, Linux `.AppImage`/`.deb`/`.rpm`, and Windows installers, publishes `latest.json` for the updater, and bumps `Casks/zyplus.rb` in the same repository. The companion site at `zyplus.app` is a separate Next.js app that fetches the latest GitHub release assets.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Native GPUI rewrite in progress",
          text: "The repository's `gpui-migrate` branch develops a pure-Rust native port (`zyplus-gpui` v0.2.3) built on `gpui 0.2.2`, `pulldown-cmark`, `syntect`, `mermaid-svg`, `ratex`, and `pdf-writer` with atomic saves (`tree::write_atomic`) and Unix-socket single-instance forwarding.",
        },
      ],
    },
    {
      id: "zyplus-install",
      title: "Install",
      blocks: [
        {
          type: "p",
          text: "Every install method fetches the same build from the latest GitHub release, and the app self-updates from there. On macOS, the repository acts as its own Homebrew tap:",
        },
        {
          type: "code",
          lang: "sh",
          title: "macOS (Homebrew) and macOS / Linux (install.sh)",
          code: `# macOS via Homebrew (repo acts as its own tap)
brew tap fankrits/zyplus https://github.com/Fankrits/zyplus-editor
brew trust fankrits/zyplus
brew install --cask zyplus

# macOS (/Applications/Zyplus.app) or Linux (~/.local/bin/zyplus)
curl -fsSL https://raw.githubusercontent.com/Fankrits/zyplus-editor/main/install.sh | sh`,
        },
        {
          type: "code",
          lang: "powershell",
          title: "Windows (PowerShell — x64, arm64 under emulation)",
          code: `irm https://raw.githubusercontent.com/Fankrits/zyplus-editor/main/install.ps1 | iex`,
        },
        {
          type: "callout",
          tone: "tip",
          text: "Pin a specific release with `ZYPLUS_VERSION=0.1.0` (`$env:ZYPLUS_VERSION = '0.1.0'` on Windows), or download `.dmg`, `.AppImage`, `.deb`, `.rpm`, `.msi`, or `.exe` installers directly from GitHub Releases. Homebrew and `install.sh` clear the macOS quarantine attribute automatically; manual `.dmg` installs require right-click -> Open on first launch.",
        },
      ],
    },
  ],
};
