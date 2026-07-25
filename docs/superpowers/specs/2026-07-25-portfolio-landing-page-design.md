# Portfolio Landing Page Design Specification

## Overview

A high-end, responsive personal portfolio landing page built with React 19, Tailwind CSS v4, and `@shadergradient/react`. The design features a full-screen interactive 3D sphere gradient background (`#73bfc4`, `#ff810a`, `#8da0ce`) layered behind frosted glassmorphism panels.

## Background Configuration

The background uses `@shadergradient/react` with the following parameters:

- `animate`: "on"
- `type`: "sphere"
- `shader`: "defaults"
- `uSpeed`: 0.3, `uStrength`: 0.3, `uDensity`: 0.8, `uFrequency`: 5.5, `uAmplitude`: 3.2
- `rotationX`: 0, `rotationY`: 130, `rotationZ`: 70
- `color1`: "#73bfc4", `color2`: "#ff810a", `color3`: "#8da0ce"
- `cAzimuthAngle`: 270, `cPolarAngle`: 180, `cDistance`: 0.5, `cameraZoom`: 15.1
- `brightness`: 0.8, `grain`: "on"

## Page Architecture & Sections

### 1. Fixed Background Layer

- `ShaderGradientCanvas` positioned fixed at `z-0 inset-0 pointer-events-none`.

### 2. Navigation Header

- Glassmorphism bar fixed at top (`z-50 backdrop-blur-lg bg-black/40 border-b border-white/10`).
- Logo/Brand title, navigation items (Work, About, Skills, Contact), and CTA button.

### 3. Hero Section

- Full height (`min-h-screen`) centered layout.
- Status badge ("Available for work").
- Large typography headline and concise sub-headline.
- Dual call-to-action buttons ("Explore Work", "Get in Touch").

### 4. Featured Work Section

- Responsive grid (1 col mobile, 2 col desktop) of featured projects.
- Glassmorphism cards with hover zoom micro-interactions, project tags, description, and direct link icons.

### 5. Skills & Expertise Matrix

- Categorized cards (Frontend & UI, 3D & Creative Coding, Backend Architecture, Design & Motion).
- Pill badges with glowing hover states.

### 6. Contact & Footer Section

- Glass card with quick contact form / direct email CTA.
- Social links (GitHub, LinkedIn, Twitter/X, Email).
- Footer copyright notice.

## Component File Structure

- `src/components/ShaderBackground.tsx`: Encapsulated ShaderGradient component.
- `src/routes/index.tsx`: Main page assembling navigation, hero, work, skills, and contact sections.
