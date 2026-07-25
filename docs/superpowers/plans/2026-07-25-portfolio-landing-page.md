# Portfolio Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a portfolio landing page featuring a full-screen `@shadergradient/react` background with glassmorphism UI sections.

**Architecture:** Encapsulate the `@shadergradient/react` component into a background component fixed behind content, while building sleek frosted glass overlay sections (Navbar, Hero, Projects, Skills, Contact, Footer) in TanStack Router's index route using Tailwind CSS v4.

**Tech Stack:** React 19, `@shadergradient/react`, `@tailwindcss/vite` v4, TanStack Router, Lucide React icons.

## Global Constraints

- Background shader params must match prompt values (`color1="#73bfc4"`, `color2="#ff810a"`, `color3="#8da0ce"`, `uSpeed=0.3`, `uStrength=0.3`, `uDensity=0.8`, `uFrequency=5.5`, `uAmplitude=3.2`, etc.)
- Use glassmorphism aesthetics (`backdrop-blur-*`, dark semi-transparent overlays, crisp borders).

---

### Task 1: Shader Background Component

**Files:**

- Create: `src/components/ShaderBackground.tsx`

**Interfaces:**

- Produces: `export function ShaderBackground(): React.JSX.Element`

- [ ] **Step 1: Create ShaderBackground component**

```tsx
import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
        }}
        lazyLoad={undefined}
        fov={undefined}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={0}
          uSpeed={0.3}
          uStrength={0.3}
          uDensity={0.8}
          uFrequency={5.5}
          uAmplitude={3.2}
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          reflection={0.4}
          cAzimuthAngle={270}
          cPolarAngle={180}
          cDistance={0.5}
          cameraZoom={15.1}
          lightType="env"
          brightness={0.8}
          envPreset="city"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
```

- [ ] **Step 2: Verify component builds cleanly**

Run: `bun vp check`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/ShaderBackground.tsx
git commit -m "feat: add ShaderBackground component with custom sphere gradient"
```

---

### Task 2: Portfolio Landing Page Assembly & Styling

**Files:**

- Modify: `src/routes/index.tsx`
- Modify: `src/styles.css` (if custom glassmorphism utilities are needed)

**Interfaces:**

- Consumes: `ShaderBackground` from `src/components/ShaderBackground.tsx`

- [ ] **Step 1: Add Glassmorphism utilities to `src/styles.css` if necessary**

Ensure custom frosted glass styles and scroll behavior are clean.

- [ ] **Step 2: Update `src/routes/index.tsx` with Portfolio UI & Shader Background**

Assemble Navigation Header, Hero section, Featured Projects grid, Skills matrix, Experience timeline, and Contact section overlaying `ShaderBackground`.

- [ ] **Step 3: Test and verify build**

Run: `bun --bun vp build`
Expected: Build succeeds without errors.

- [ ] **Step 4: Commit**

```bash
git add src/routes/index.tsx src/styles.css
git commit -m "feat: complete portfolio landing page with ShaderGradient background"
```
