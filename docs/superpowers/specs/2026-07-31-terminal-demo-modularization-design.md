# TerminalDemo Component Modularization Design Spec

## Overview

Refactor `src/components/terminal-demo.tsx` from a single 1,898-line monolithic component into a clean, domain-driven modular component structure located at `src/components/terminal-demo/`.

## Architecture & Directory Structure

```
src/components/terminal-demo/
├── types.ts                        # Shared tab keys, interfaces, MAIN_TABS data
├── terminal-title-bar.tsx          # Terminal title bar with window controls & online status
├── terminal-sidebar.tsx            # Left navigation tree sidebar
├── terminal-top-tabs.tsx           # Dynamic top sub-navigation tab bar
├── sections/
│   ├── personal/
│   │   ├── profile-view.tsx        # Profile overview & core focus areas
│   │   ├── skills-view.tsx         # Technical stack & capabilities
│   │   ├── thesis-view.tsx         # Academic thesis abstract & details
│   │   ├── contact-view.tsx        # Contact & personal links
│   │   └── personal-section.tsx    # Personal section orchestrator
│   ├── projects/
│   │   ├── somemath-view.tsx       # SomeMath LMS overview, stack & live embed iframe
│   │   ├── somescript-view.tsx     # SomeScript monorepo overview, stack table & iframe
│   │   ├── memize-view.tsx         # Memize cognitive games overview, stack & iframe
│   │   ├── watermark-view.tsx      # Watermark Studio overview, stack & iframe
│   │   └── projects-section.tsx    # Projects section orchestrator
│   └── agents/
│       ├── qmp-view.tsx            # QMP AutoResearch suite view
│       ├── subagents-view.tsx      # Subagent orchestrator view
│       ├── diagnostics-view.tsx    # System diagnostics & telemetry view
│       └── agents-section.tsx      # Agents section orchestrator
└── index.tsx                       # Main TerminalDemo container & state manager
```

`src/components/terminal-demo.tsx` will re-export default from `./terminal-demo/index.tsx` for 100% backward compatibility.

## Core Design Principles

1. **100% Parity**: Every piece of UI, text, Tailwind class, link, badge, status marker, table, and `<iframe>` source is preserved without alteration.
2. **Single Responsibility**: Each sub-view is isolated in its own dedicated component (~50-250 lines).
3. **Clean State Management**: Main tab, sub tab, and project sub-section active state managed at top container level and passed down cleanly.
