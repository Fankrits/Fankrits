import type { ProjectDoc } from "./types";

export const zyplus: ProjectDoc = {
  slug: "zyplus",
  name: "Zyplus",
  kicker: "Native cross-platform markdown editor",
  summary:
    "A cross-platform markdown editor for macOS, Windows and Linux, written in Rust on GPUI with no webview and no JavaScript runtime. Write in rendered rich text or raw source, one keystroke apart, on plain .md files in your own folders.",
  windowLabel: "Zyplus (native app)",
  links: [
    { label: "GitHub", href: "https://github.com/Fankrits/zyplus-editor" },
    { label: "Releases", href: "https://github.com/Fankrits/zyplus-editor/releases/latest" },
  ],
  stack: [
    "Rust",
    "GPUI 0.2",
    "pulldown-cmark",
    "syntect",
    "RaTeX",
    "mermaid-svg",
    "pdf-writer",
    "macOS · Linux · Windows",
  ],
  facts: [
    {
      label: "Platforms",
      value:
        "macOS (Apple Silicon), Windows (x64) and Linux (x86_64). The Windows and Linux builds are marked experimental",
    },
    {
      label: "Runtime",
      value: "One native binary (zyplus-gpui), no webview, no Node, no JavaScript engine",
    },
    {
      label: "Storage",
      value: "Plain files on disk. The session file holds paths and settings, never document text",
    },
    {
      label: "Account",
      value: "None. The only network request is the update check against GitHub Releases",
    },
    { label: "License", value: "MIT" },
    { label: "Repo visibility", value: "Public (GitHub)" },
    {
      label: "Distribution",
      value:
        ".dmg, Windows setup .exe, Linux .deb and AppImage on GitHub Releases. Auto-update on macOS",
    },
  ],
  hero: {
    src: "/projects/zyplus/01-editor-rich.webp",
    alt: "Zyplus window in rich text mode with a file tree on the left and a Field Notes document showing a Tip callout, a task list, a table and the start of a bar chart",
    caption:
      "Rich mode in the native app: a Tip callout, task list, table and chart rendered inline in the same file that stays plain markdown on disk.",
    width: 1455,
    height: 894,
  },
  sections: [
    {
      id: "zyplus-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Zyplus is a local-first markdown editor that opens ordinary folders instead of importing notes into a vault. Every document stays a plain file that works with Git, a sync folder or any other editor.",
        },
        {
          type: "p",
          text: "Press `⌘E` (`Ctrl+E` on Windows and Linux) to flip the active tab between a rendered view (tables, callouts, code, charts, diagrams and math drawn in place) and the raw markdown source of the same file. Nothing is converted or re-saved when you switch.",
        },
        {
          type: "p",
          text: "The app is now fully native. It was first a Tauri and React app; the whole thing was rewritten in Rust on GPUI, the UI framework from the Zed editor. Windows, text layout, charts, diagrams, the PDF exporter and the updater are all Rust code in one binary, and the installed macOS `.app` is 23 MB. GPUI runs on macOS, Windows and Linux, so one code base ships to all three.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Available on three platforms",
          text: "The 0.5 line is in beta. macOS is the primary target: it is the only one with an in-app updater, and the app is not notarized yet, so the first launch needs a right-click and Open. Windows and Linux installers are published too and are labelled experimental: CI builds them, runs the unit tests and launches them, but Windows has no end to end tests and neither platform has been clicked through on every desktop environment.",
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
              "**Rich and plain modes**",
              "`⌘E` toggles per tab. Rich mode edits in place with a selection toolbar, a `/` slash menu and a link popover. Plain mode is syntax highlighted with soft wrap.",
            ],
            [
              "**Inline blocks**",
              "Tables, images, GitHub style callouts, task lists and highlighted code blocks render in the document, with a copy button on code. Rendering is the same on every platform because the app draws it itself.",
            ],
            [
              "**Charts**",
              "A `chart` fence takes Chart.js style JSON (bar, line, pie, doughnut, scatter) and draws it on the GPUI canvas, with fullscreen zoom and pan.",
            ],
            [
              "**Mermaid and math**",
              "`mermaid` fences are rendered through `mermaid-svg`. `latex`, `math`, `katex` and `tex` fences are typeset by RaTeX. Both support fullscreen zoom and pan.",
            ],
            [
              "**JSON and CSV viewers**",
              "`.json` opens as a tree, table or text view with format, sort and search. `.csv` and `.tsv` open as an editable table or text.",
            ],
            [
              "**Workspace**",
              "Several project folders in a file tree, tabs, find (`⌘F`) and find and replace (`⌘⌥F`), optional autosave, and atomic file saves.",
            ],
            [
              "**PDF export**",
              "`⌘P` (`Ctrl+P`) writes a paginated A4 PDF for `.md`, `.markdown` and `.txt` files using `pdf-writer` and `rustybuzz` with system fonts: Arial and Thonburi on macOS, Arial and Leelawadee UI on Windows, Liberation, DejaVu, Noto and TLWG on Linux.",
            ],
            [
              "**Themes**",
              "Ten palettes: System, Light, Dark, Catppuccin (Latte, Frappé, Macchiato, Mocha) and Tokyo Night (Night, Storm, Day).",
            ],
            [
              "**Platform integration**",
              "Native menus and Finder Open With on macOS, Ctrl based shortcuts on Windows and Linux, a shortcuts sheet on `⌘/` (`Ctrl+/`), and a single running instance that other launches hand their files to. Windows draws its own minimise, maximise and close buttons; GNOME on Wayland gets a drawn title bar and resize edges.",
            ],
            [
              "**Self-updating**",
              "On macOS the app checks `latest.json` on GitHub Releases, verifies the download with a minisign signature, then replaces and relaunches itself. Windows and Linux builds do not update themselves yet.",
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
          type: "p",
          text: "Every capture below is the installed native app (`v0.5.0-beta.1`, running on macOS) opened on a small demo folder, not a mockup. The interface is drawn by GPUI, so Windows and Linux render the same views.",
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/02-diagrams-math.webp",
            alt: "Zyplus rendering a bar chart, a Mermaid flowchart, a typeset integral and a highlighted Rust code block inside one markdown document",
            caption:
              "A chart, a Mermaid flowchart, a math block and a code block drawn natively inside one document.",
            width: 1455,
            height: 894,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/03-editor-plain.webp",
            alt: "Zyplus in plain mode showing the raw markdown, chart JSON, Mermaid and LaTeX fences with syntax highlighting",
            caption:
              "Plain mode on the same kind of file: raw markdown with highlighted headings, fences and task items.",
            width: 1455,
            height: 894,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/08-macchiato.webp",
            alt: "Zyplus using the Catppuccin Macchiato theme with the sidebar, chart, flowchart and code block recoloured",
            caption:
              "The Catppuccin Macchiato theme. Chrome, charts, diagrams and code all follow the palette.",
            width: 1455,
            height: 894,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/05-json-tree.webp",
            alt: "Zyplus JSON viewer in tree mode with the toolbar buttons Format, Sort keys, Sort lists, Expand all and Collapse all and a search box",
            caption: "The JSON viewer in tree mode, with Text and Table views one click away.",
            width: 1455,
            height: 400,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/04-csv-table.webp",
            alt: "Zyplus CSV editor showing a four row, three column table with Add row, Delete row, Add column and Sort buttons",
            caption: "The CSV editor with row and column actions and sorting.",
            width: 1455,
            height: 300,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/06-themes.webp",
            alt: "Zyplus Settings dialog on the Theme page with Base swatches for System, Light and Dark and Catppuccin swatches",
            caption: "Settings, Theme: Base and Catppuccin palettes with live swatches.",
            width: 660,
            height: 500,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/zyplus/07-extensions.webp",
            alt: "Zyplus Settings dialog on the Extensions page with toggles for JSON Editor, CSV and TSV Editor, Charts and Mermaid Diagrams",
            caption:
              "Settings, Extensions: the built-in viewers can each be switched off. Nothing is downloaded.",
            width: 660,
            height: 500,
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
          text: "Zyplus is one Rust crate, `zyplus-gpui`, of roughly 44,000 lines in `src/`. The UI is built on **GPUI** `0.2.2` with the `macos-blade` renderer feature, so every pixel is drawn by the app itself. There is no webview, no DOM and no JavaScript engine. The README states that none of Node, Bun or Tauri is needed to build or run it.",
        },
        {
          type: "table",
          head: ["Area", "Modules and crates"],
          rows: [
            [
              "**Shell**",
              "`main.rs` holds the workspace: sidebar tree, tabs, menus, key bindings, modals and settings.",
            ],
            [
              "**Rich editor**",
              "`preview.rs`, `rich_model.rs`, `rich_ops.rs`, `rich_blocks.rs`, `rich_table.rs`, `rich_overlay.rs` and `rich_editor.rs`, parsing with `pulldown-cmark`.",
            ],
            [
              "**Plain editor**",
              "`editor.rs` for the buffer, selection, undo and find, `wrap_layout.rs` for soft wrap, and `highlight.rs` using `syntect`.",
            ],
            [
              "**Diagrams and charts**",
              "`chart.rs` draws on the GPUI canvas, `mermaid.rs` uses `mermaid-svg`, `math.rs` uses `ratex-*`, with `diagram_cache.rs` and `fullscreen_view.rs`.",
            ],
            ["**Viewers**", "`json_view.rs` and `csv_view.rs`."],
            [
              "**Files and session**",
              "`tree.rs` and `paths.rs` for the tree and filenames, `session.rs` for state, and `view_kind.rs` to pick the right view for a file type.",
            ],
            [
              "**System**",
              "`os.rs` for single instance (a Unix socket on macOS and Linux, an authenticated loopback connection on Windows) and LaunchServices, `export_pdf.rs` for PDFs and `updater.rs` for updates.",
            ],
          ],
        },
        {
          type: "list",
          items: [
            "**Safe saves.** Files are written to a hidden temp file in the same folder, fsynced and renamed over the target. Permissions and symlink targets are kept, and read-only files are refused.",
            "**Private session.** Open folders, tabs, modes and theme live in `Zyplus-session/session.json` outside the notes folder. Only paths and preferences are stored.",
            "**One instance.** A second launch forwards its paths to the running app and exits, over a Unix socket on macOS and Linux and an authenticated loopback connection on Windows. Stale sockets from a crash are replaced.",
            "**Verified updates.** The updater reads a Tauri format `latest.json`, checks the minisign signature of the `.app.tar.gz`, then installs over the bundle and relaunches.",
          ],
        },
      ],
    },
    {
      id: "zyplus-testing",
      title: "Testing and releases",
      blocks: [
        {
          type: "p",
          text: "The repository has about 670 unit tests (run on macOS, Linux and Windows in CI) and a Python end to end runner with 17 scenarios that drive the real app on macOS and, under Xvfb, on Linux: first run, file types, tabs, find and replace, settings, unsaved changes, session restore, Thai text editing, command line arguments, single instance forwarding and clipboard. Debug builds also include a scripted input runner (`ZYPLUS_TEST_SCRIPT`) that is compiled out of release builds.",
        },
        {
          type: "table",
          head: ["Stage", "What runs"],
          rows: [
            ["`fmt`, `lint`", "`cargo fmt --check` and `cargo clippy` with warnings as errors."],
            ["`unit`", "`cargo test`."],
            [
              "`build`, `bundle`",
              "A release build, then `Zyplus.app` assembled and checked with `codesign --verify --strict`.",
            ],
            [
              "`e2e`",
              "The scenario runner against a debug build in an isolated `HOME` and `TMPDIR`.",
            ],
          ],
        },
        {
          type: "p",
          text: "The required CI job is macOS. Informational jobs run a cargo check, a release build, the unit tests and a launch check on Ubuntu and Windows. A pushed `v*` tag runs the same checks, builds the Apple Silicon app, the Windows setup `.exe` and the Linux `.deb` and AppImage, smoke launches them, signs the macOS updater archive and publishes everything to GitHub Releases.",
        },
      ],
    },
    {
      id: "zyplus-tauri",
      title: "From Tauri to GPUI",
      blocks: [
        {
          type: "p",
          text: "Earlier releases were a Tauri 2 shell around a React and TypeScript front end. The native rewrite replaced all of it, and the repository's migration notes record what carried over and what did not.",
        },
        {
          type: "table",
          head: ["Kept", "Not ported"],
          rows: [
            [
              "Same notes folder, and a one time move of the old session file out of it.",
              "Downloadable JavaScript extensions. The six extensions are compiled into the binary and toggled in Settings.",
            ],
            [
              "Same bundle identifier, so Finder associations keep working.",
              "A block drag handle in the rich editor.",
            ],
            [
              "Same updater manifest format and signing key, so older installs can update.",
              "Rich rendering for `.mdown`, which opens as plain text. Windows and Linux auto-update.",
            ],
          ],
        },
        {
          type: "p",
          text: "The old Tauri sources stay in the Git history. The browser build was dropped with the rewrite. Windows and Linux moved from Tauri installers to native builds from the same Rust code as macOS.",
        },
      ],
    },
    {
      id: "zyplus-install",
      title: "Install",
      blocks: [
        {
          type: "p",
          text: "Download the installer for your system from the latest release on GitHub.",
        },
        {
          type: "table",
          head: ["Platform", "Download", "Notes"],
          rows: [
            [
              "**macOS** (Apple Silicon)",
              "`Zyplus_<version>_aarch64.dmg`",
              "Drag to Applications. Not notarized, so right-click Open the first time. Updates itself. Intel Macs are not supported.",
            ],
            [
              "**Windows** (x64)",
              "`Zyplus_<version>_windows-x64-setup.exe`",
              "Per-user install with a Start menu entry and an uninstaller. Experimental, no auto-update.",
            ],
            [
              "**Debian, Ubuntu**",
              "`Zyplus_<version>_linux-amd64.deb`",
              "`sudo apt install ./Zyplus_<version>_linux-amd64.deb` pulls in Vulkan, X11 or Wayland and fontconfig. Experimental.",
            ],
            [
              "**Other Linux** (x86_64)",
              "`Zyplus_<version>_linux-x86_64.AppImage`",
              "`chmod +x` it and run. Experimental.",
            ],
          ],
        },
        {
          type: "p",
          text: "On macOS the install script downloads the latest release, installs `/Applications/Zyplus.app` and clears the quarantine flag. Set `ZYPLUS_VERSION` to pin a release:",
        },
        {
          type: "code",
          lang: "sh",
          title: "macOS, Apple Silicon",
          code: `curl -fsSL https://raw.githubusercontent.com/Fankrits/zyplus-editor/main/install.sh | sh`,
        },
        {
          type: "code",
          lang: "sh",
          title: "Build from source (needs a Rust toolchain)",
          code: `cargo run                      # debug build, opens the restored session
cargo run -- notes/todo.md     # open a file or folder on start
cargo test                     # unit tests
./scripts/bundle-macos.sh      # macOS only: assemble and sign Zyplus.app`,
        },
        {
          type: "callout",
          tone: "tip",
          text: "If you install the `.dmg` by hand, run `xattr -dr com.apple.quarantine /Applications/Zyplus.app` instead of right-clicking if you prefer a terminal.",
        },
      ],
    },
  ],
};
