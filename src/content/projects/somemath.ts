import type { ProjectDoc } from "./types";

export const somemath: ProjectDoc = {
  slug: "somemath",
  name: "SomeMath",
  kicker: "Math learning platform",
  summary:
    "Courses and 27 arcade-style math games that teach understanding before speed. English and Thai, KaTeX formulas, CMS-managed content and PDF certificates.",
  status: "Live",
  links: [
    { label: "Visit site", href: "https://somemath.com" },
    { label: "Learning Space", href: "https://space.somemath.com" },
  ],
  stack: ["Next.js 16", "Sanity", "Clerk", "Stripe", "TanStack Start", "KaTeX", "Intlayer"],
  facts: [
    { label: "Platform", value: "Web (somemath.com, space.somemath.com)" },
    { label: "Status", value: "Live" },
    { label: "Languages", value: "English, Thai" },
    { label: "Games", value: "27 interactive math games" },
    { label: "Auth", value: "Clerk" },
    { label: "CMS & payments", value: "Sanity v6, Stripe" },
    { label: "Repository", value: "Private" },
  ],
  hero: {
    src: "/projects/somemath/03-games-hub.webp",
    alt: "SomeMath Learning Space hub showing searchable math game cards with topic and difficulty tags in dark mode",
    caption:
      "Learning Space hub at space.somemath.com listing the 27 math games with search and topic tags.",
    width: 1440,
    height: 900,
  },
  sections: [
    {
      id: "somemath-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "**SomeMath** is a bilingual mathematics learning platform built for English and Thai learners. It pairs structured video and LaTeX courses on `somemath.com` with **Learning Space**, a browser arcade at `space.somemath.com` containing 27 interactive math games.",
        },
        {
          type: "p",
          text: "The platform targets students who want conceptual intuition before drilling speed. Courses break topics into modules and lessons with inline formulas, per-lesson notes, and completion certificates, while the games turn arithmetic, fractions, algebra, geometry, graphing, trigonometry, and statistics into short playable exercises.",
        },
      ],
    },
    {
      id: "somemath-features",
      title: "Features",
      blocks: [
        {
          type: "table",
          head: ["Area", "Capabilities"],
          rows: [
            [
              "Courses & lessons",
              "Modules and lessons managed in Sanity CMS, video playback via Plyr, Loom, Vimeo, and YouTube, inline math rendered with **KaTeX** and **MathLive**, and per-lesson student notes.",
            ],
            [
              "27 math games",
              "Dedicated **Learning Space** covering arithmetic (`Speed Arithmetic`, `Numetric`, `Target 24`, `Math Bingo`), algebra (`Algebra RPG`, `Balance Scale`, `Function Machine`, `Coaster Slopes`), fractions (`Fraction Tug`, `Pizza Fractions`, `Potion Fractions`), geometry (`Angle Artillery`, `Laser Geometry`), trigonometry (`Pirate Trig`), graphing (`Space Graphing`), and statistics (`Sports Stats`).",
            ],
            [
              "Bilingual UI",
              "Full **English** and **Thai** interface switching across courses and games, with cookie-backed dark/light theme sync across `*.somemath.com`.",
            ],
            [
              "Enrollment & certificates",
              "One-click enrollment for free courses, **Stripe** checkout and webhook fulfillment for paid courses, progress tracking per lesson, and on-demand PDF completion certificates generated at `/api/certificate` once course progress reaches 100%.",
            ],
            [
              "CMS authoring tools",
              "Embedded **Sanity Studio** at `/studio` with custom LaTeX input components and an AI drafting endpoint (`/api/ai/generate`) routed through Vercel AI Gateway to generate structured Markdown and Portable Text lesson content.",
            ],
          ],
        },
      ],
    },
    {
      id: "somemath-screenshots",
      title: "Screenshots",
      blocks: [
        {
          type: "image",
          image: {
            src: "/projects/somemath/01-home.webp",
            alt: "SomeMath home page in English showing the Learn to understand, not just memorize hero, course search bar, and navigation links",
            caption:
              "Main landing page on somemath.com with course search, Learning Space and My Courses links, and the EN/TH switcher.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/somemath/02-course-detail.webp",
            alt: "SomeMath course detail page for Introduction showing course description, Free Sign in to Enroll card, Module 1 curriculum, and instructor profile",
            caption:
              "Course detail view (/courses/introduction) displaying the curriculum outline, free enrollment gate, and instructor bio.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/somemath/04-algebra-rpg.webp",
            alt: "Algebra RPG game in play on space.somemath.com showing player and monster health bars, an algebraic equation prompt, answer input, and Cast Spell button",
            caption:
              "Algebra RPG running in the browser without login: solving equations casts attack or healing spells against leveled monsters.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/somemath/05-thai-locale.webp",
            alt: "SomeMath home page switched to Thai locale showing localized hero copy, buttons, and navigation bar",
            caption: "Thai locale on somemath.com toggled in place via Intlayer no-prefix routing.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "somemath-how-its-built",
      title: "How it's built",
      blocks: [
        {
          type: "p",
          text: "The repository is a **Bun** workspace monorepo split into three applications under `apps/`, linted and formatted repo-wide with **Biome**:",
        },
        {
          type: "list",
          items: [
            "`apps/web` — Main LMS on **Next.js 16** (App Router, React 19, Tailwind CSS v4, shadcn/ui). Uses **Sanity v6** (`next-sanity` and GROQ) as its data layer for courses, modules, lessons, students, enrollments, lesson completions, notes, and certificates. Uses **Intlayer** (`next-intlayer`) in `no-prefix` cookie/header mode for EN/TH localization, **Clerk** (`@clerk/nextjs`) for authentication, **Stripe** for paid checkout and webhooks, **KaTeX** and **MathLive** for math rendering, `@react-pdf/renderer` and `@embedpdf/react-pdf-viewer` for PDF certificates, and **PostHog** plus **Vercel Analytics** for telemetry.",
            "`apps/space` — Standalone Learning Space on **TanStack Start**, **Vite**, **React 19**, and **Nitro** hosting all 27 interactive game components (`src/components/learning/games/*`) and their metadata registry (`src/lib/gamesData.ts`). Localized with **Paraglide JS** using unprefixed English routes (`/algebra-rpg`) and `/th/*` Thai routes.",
            "`apps/meet` — Sibling live-tutoring and classroom scheduling app on **TanStack Start**, **Nitro**, **LiveKit**, **PostgreSQL**, **Clerk**, **Stripe**, S3 storage, and **Paraglide JS**.",
          ],
        },
        {
          type: "p",
          text: "Theme preferences are mirrored into a cookie scoped to `.somemath.com` so navigating between the LMS (`apps/web`) and Learning Space (`apps/space`) preserves light or dark mode. `apps/web` is deployed on **Vercel** with reverse-proxied PostHog ingestion routes and HSTS/security headers configured in `next.config.ts`.",
        },
      ],
    },
    {
      id: "somemath-using-it",
      title: "Using it",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Open `https://space.somemath.com` to play any of the 27 math games immediately in the browser—no account is required. Filter by keyword or topic tag, and use the top-right `EN | TH` toggle to switch languages.",
            "Open `https://somemath.com/courses` to browse available courses, inspect module outlines, and search by topic.",
            "Sign in with **Clerk** to enroll in free or paid courses, track lesson completion under **My Courses**, save per-lesson notes, and download a PDF certificate once all lessons in a course are completed.",
          ],
        },
      ],
    },
  ],
};
