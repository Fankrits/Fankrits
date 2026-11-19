<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

## UI Components: glasscn

This project uses the **glasscn** component library (<https://glasscn-components.vercel.app/>) for glassmorphism and liquid-glass UI primitives, built on `@base-ui/react` and Tailwind CSS v4.

### Installing Components

The `@glasscn` registry is configured in `components.json`:

```bash
npx --yes shadcn@latest add @glasscn/<component> --yes
```

Installed files live in:

- `src/components/ui/glasscn/` — `glasscn` components (`liquid-glass.tsx`, `glass-card.tsx`, `glass-button.tsx`, etc.)
- `src/components/ui/` — underlying Base UI / shadcn primitives (`button.tsx`, `card.tsx`, etc.)
- `src/lib/glass-variants.ts` — `FrostGlassVariant` styles (`clear`, `frosted`, `subtle`, `liquid`, `liquid-refract`)

### Usage Conventions

- **Prefer `glasscn` components** (`GlassCard`, `GlassButton`, `LiquidGlass`, `GlassBadge`, etc.) over custom glass/blur wrappers.
- **Anchor / custom elements on `GlassButton`**: `glasscn` uses `@base-ui/react/button`, which does **not** support `asChild`. Use `render` and `nativeButton={false}` instead:
  ```tsx
  <GlassButton nativeButton={false} render={<a href="#work" />} glassVariant="liquid-refract">
    View work
  </GlassButton>
  ```
- **Dark theme tokens**: Keep `className="dark"` on `<html>` in `src/routes/__root.tsx` so `--foreground`, `--card-foreground`, and `dark:` glass styles resolve properly.
- **TypeScript (`verbatimModuleSyntax`)**: `tsconfig.json` enables `verbatimModuleSyntax`. After adding new `@glasscn/*` components, ensure type-only imports (such as `FrostGlassVariant` and `FrostGlassVariantProp`) use `type` before running `vp check`.
