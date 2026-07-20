# Portfolio Landing Page - Design Spec

Date: 2026-07-20

## 1. Overview

A premium, dark-themed personal portfolio/agency landing page featuring an animated background powered by `@shadergradient/react`. The design uses **Glassmorphic Neo-Minimalism** to overlay text and interactive elements cleanly on top of the organic shader canvas.

## 2. Key Features

- **Immersive Shader Background:** The gradient animates continuously behind all sections.
- **Glassmorphic Surface Design:** Consistent use of translucent dark slate card panels with fine border glints and high blur.
- **Interactive UI:** Smooth transitions, hovering card glow effects, and micro-animations.
- **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop viewports.

## 3. Pages & Sections

- **Global Header (Navigation):** Sticky glass bar containing brand logo, smooth-scroll links, and a CTA button.
- **Hero:** Clear value proposition text overlaid on a minimal glass panel.
- **About:** Personal/Agency philosophy combined with interactive skill pills.
- **Project/Blog Overview:** Cards showcasing projects and blog previews with border glow highlights on hover.
- **Contact:** An elegant glassmorphic email form.

## 4. Technical Architecture

- **Framework:** React with TanStack Start & React Router.
- **Styling:** Tailwind CSS v4.
- **Dependencies:** `@shadergradient/react` for the background canvas, `lucide-react` for iconography.
