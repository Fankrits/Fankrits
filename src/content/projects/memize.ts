import type { ProjectDoc } from "./types";

export const memize: ProjectDoc = {
  slug: "memize",
  name: "Memize",
  kicker: "Cognitive training & party games",
  summary:
    "An offline-ready PWA for cognitive training and social party games. AI-generated prompts adapt to each player's cognitive profile and per-game Elo rating, with Supabase cloud sync and shared organization leaderboards.",
  status: "Live",
  links: [{ label: "memize.somemath.com", href: "https://memize.somemath.com" }],
  stack: [
    "Next.js 16",
    "React 19",
    "Supabase",
    "Gemini / OpenRouter",
    "Excalidraw",
    "Tailwind CSS v4",
  ],
  facts: [
    { label: "Platform", value: "Web PWA (mobile and desktop)" },
    { label: "Status", value: "Live" },
    { label: "Auth", value: "Guest local play; optional Supabase account" },
    { label: "Database", value: "Supabase PostgreSQL with RLS and Realtime" },
    { label: "AI pipeline", value: "OpenRouter with Gemini 2.5 Flash fallback" },
    { label: "Hosting", value: "Vercel" },
    { label: "Language", value: "Thai UI (Thai and English prompt support)" },
    { label: "Repository", value: "Private" },
  ],
  hero: {
    src: "/projects/memize/01-home.webp",
    alt: "Memize home portal showing the neobrutalist hero banner, profile completion widget, coin balance, and brain-training game cards",
    caption:
      "Main game portal with profile completion progress, reminder timer, coin balance, and horizontal game launchers.",
    width: 1440,
    height: 900,
  },
  sections: [
    {
      id: "memize-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Memize is a Progressive Web Application built for short daily cognitive drills and in-person or remote party games. Players can start immediately as a local guest without creating an account, or sign in to sync session history, unlock adaptive AI-generated question pools, and join organization leaderboards.",
        },
        {
          type: "p",
          text: "Each game tracks an independent **Elo-style skill rating** alongside a player's cognitive profile (focus areas, interests, education level, and language preference). When online and signed in, prompts scale to the player's current rating band; when offline or playing as a guest, built-in decks and local caches keep every game playable.",
        },
      ],
    },
    {
      id: "memize-features",
      title: "Features",
      blocks: [
        {
          type: "table",
          head: ["Game", "Category", "Mechanics"],
          rows: [
            [
              "**Guess The Item** (`/games/guess-the-item`)",
              "Brain training",
              "10-round multiple-choice visual recall with AI-generated studio images or custom uploaded items.",
            ],
            [
              "**First Pair** (`/games/first-pair`)",
              "Brain training",
              "2D circle-collision physics tracking; identify the first pair that moved after distractors stop.",
            ],
            [
              "**Flash Cards** (`/games/flash-cards`)",
              "Brain training",
              "5-card study decks followed by 4-option multiple-choice quizzes and per-card self-ratings.",
            ],
            [
              "**Headbands** (`/games/headbands`)",
              "Party game",
              "60-second forehead charades with built-in Thai categories, taboo clues, and custom word lists.",
            ],
            [
              "**Draw It** (`/games/draw-it` & `/collab`)",
              "Party game",
              "Excalidraw sketching in solo mode or real-time multiplayer rooms joined via 6-character codes.",
            ],
          ],
        },
        {
          type: "list",
          items: [
            "**Progress dashboard**: tracks daily play streaks, 7-day activity cards, per-game score and accuracy trend charts, and 14 tiered achievements.",
            "**Multi-tenant organizations**: teams or classrooms create groups with a 6-character `share_code`, manage `owner`, `admin`, and `member` roles, and compare Brain Index scores on a shared leaderboard.",
            "**Audio, haptics, and rewards**: Howler.js drives 6 sound effects and 9 unlockable background music tracks, paired with Vibration API haptics, session coins, and a daily roulette spin.",
            "**Local study reminders**: schedules browser notification timers through the service worker (`START_TIMER` / `CANCEL_TIMER` messages).",
          ],
        },
      ],
    },
    {
      id: "memize-screenshots",
      title: "Screenshots",
      blocks: [
        {
          type: "image",
          image: {
            src: "/projects/memize/02-game-elo-setup.webp",
            alt: "First Pair game setup screen displaying Classic mode with Elo rating 1000 next to Custom mode",
            caption:
              "Game mode selector for First Pair showing Classic mode with the player's current Elo rating (1000) beside Custom image mode.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/memize/03-guess-the-item.webp",
            alt: "Active round of Guess The Item showing round counter, score, centered item card, and four multiple-choice options",
            caption:
              "Active round in Guess The Item with a 10-round progress bar, item prompt card, and four high-contrast answer buttons.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/memize/04-draw-it-collab.webp",
            alt: "Draw It Collab room lobby with tabs to create a new multiplayer room or join via room code",
            caption:
              "Draw It Collab lobby where players create a real-time room or join an existing session with a 6-character code.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/memize/05-dashboard.webp",
            alt: "Memize stats dashboard showing active streak, total games played, 7-day activity tracker, and per-game trend chart",
            caption:
              "Stats dashboard after completing a session, showing play streak, 7-day activity cards, and the per-game score/accuracy trend chart.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "memize-architecture",
      title: "How it's built",
      blocks: [
        {
          type: "p",
          text: "Memize is a **Next.js 16** App Router application written in TypeScript with **React 19**, **Tailwind CSS v4**, `shadcn/ui` (`@base-ui/react`), and Motion (`motion/react`) for neobrutalist tactile transitions. Charts on `/dashboard` use **Recharts**, drawing runs on `@excalidraw/excalidraw`, audio runs on **Howler.js**, and code quality is enforced with **Biome**.",
        },
        {
          type: "list",
          items: [
            "**Data and auth layer**: Supabase PostgreSQL with Row Level Security across `profiles`, `organizations`, `memberships`, `game_sessions`, `ai_questions_bank`, `rag_documents`, `draw_it_rooms`, and `draw_it_guesses`. Accounts support username-based sign-up and email password recovery via `@supabase/ssr`.",
            "**Local-first sync**: `lib/stats.ts` writes profiles, Elo ratings (`memize_game_rating_<gameId>`), and game sessions to `localStorage` immediately, then flushes dirty state and queued sessions to Supabase on sign-in and page-hide events.",
            "**Real-time multiplayer**: Draw It Collab broadcasts canvas snapshots (`scene_json`), round state, and guess chat messages over Supabase Realtime (`supabase_realtime` publication) with guest access enabled.",
            "**Deployment**: Hosted on Vercel with `@vercel/analytics` and `@vercel/speed-insights`.",
          ],
        },
      ],
    },
    {
      id: "memize-using-it",
      title: "Using it",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "Open `https://memize.somemath.com` and complete the 3-step guest onboarding (avatar, profile basics, and focus areas) or sign in with an existing account.",
            "Pick any of the five games from the home portal and choose **Classic** (rating-adjusted) or **Custom** (your own words, cards, or images).",
            "Open `/dashboard` to inspect streaks, 7-day activity, per-game score and accuracy charts, and unlocked achievements.",
            "Install Memize to your home screen via the browser PWA prompt to play cached modes full-screen and offline.",
            "Sign in and open organization settings to create a team or join one with a 6-character `share_code` to unlock shared team leaderboards.",
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Guest vs. signed-in access",
          text: "Guest sessions run entirely in browser storage using built-in decks and custom user sets. Personalized AI generation via `POST /api/ai`, cloud sync, and organization leaderboards require signing in.",
        },
      ],
    },
    {
      id: "memize-adaptive-engine",
      title: "Adaptive rating and offline PWA",
      blocks: [
        {
          type: "p",
          text: "Each game updates its own rating (floored at `100`) after every round or session: Guess The Item shifts `+4` / `-8` per answer, First Pair and Draw It shift `+15` / `-10` per game, Flash Cards scales by `round((accuracy - 0.75) * 60)`, and Headbands scales by `round((score - 2) * 35)`.",
        },
        {
          type: "p",
          text: "When a signed-in player starts a round, `POST /api/ai` (rate-limited to 30 requests per minute per user) searches `ai_questions_bank` across progressively widening Elo bands (`±75`, `±150`, `±300`, `±600`, `±5000`), excludes already-played concepts, and prioritizes matching `cognitive_tags`. If stock in the `±300` band drops below 5 items (capped at 15), Next.js `after()` generates a fresh prompt in the background via OpenRouter with a direct **Gemini 2.5 Flash** (`gemini-2.5-flash`) fallback, uploading generated item photos to the `ai-assets` Supabase Storage bucket.",
        },
        {
          type: "p",
          text: "The service worker in `public/sw.js` pre-caches the app shell and game thumbnails on install, applies a **cache-first** strategy to static assets and Supabase Storage images, and uses **network-first** with a cached-shell fallback for HTML navigation and API calls.",
        },
      ],
    },
  ],
};
