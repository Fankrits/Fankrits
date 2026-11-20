import type { ProjectDoc } from "./types";

export const uptodatestock: ProjectDoc = {
  slug: "uptodatestock",
  name: "uptodateStock",
  kicker: "Bilingual market news",
  summary:
    "A live S&P 500 sector heatmap beside daily market stories in full Thai and English. An AI schedule publishes each article through an authenticated MCP endpoint, linked to the tickers it affects.",
  links: [{ label: "uptodatestock.com", href: "https://uptodatestock.com" }],
  stack: [
    "TanStack Start",
    "React 19",
    "Tailwind CSS v4",
    "Neon Postgres",
    "Drizzle ORM",
    "Better Auth",
    "MCP",
    "Cloudflare Workers",
  ],
  facts: [
    { label: "Platform", value: "Web (desktop and mobile)" },
    { label: "Languages", value: "English (/en) and Thai (/th)" },
    { label: "Data layer", value: "Neon Postgres, Drizzle ORM, Finnhub quotes" },
    { label: "Auth", value: "Better Auth (OAuth 2.1 + JWKS for MCP, single-admin account)" },
    { label: "Hosting", value: "Cloudflare Workers (web and MCP)" },
    { label: "Repository", value: "Private" },
  ],
  hero: {
    src: "/projects/uptodatestock/01-home-heatmap.webp",
    alt: "uptodateStock home page showing the S&P 500 sector heatmap and daily news stories in dark mode",
    caption:
      "Home page (/en): sector-grouped S&P 500 heatmap with delayed Finnhub quotes above the daily story grid.",
    width: 1440,
    height: 900,
  },
  sections: [
    {
      id: "uptodatestock-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "**uptodateStock** pairs a live S&P 500 sector heatmap with daily US market news published natively in both English and Thai. It is built for bilingual readers who follow US-listed equities and want to see how the market is moving alongside the stories driving those moves.",
        },
        {
          type: "p",
          text: "Every route lives under `/en` and `/th` with equal weight in typography, date formatting, and layout. Each article links directly to the tickers it affects and cites the public sources backing its numbers. Delayed price status, missing historical charts, and AI authorship are disclosed directly in the interface.",
        },
      ],
    },
    {
      id: "uptodatestock-features",
      title: "Features",
      blocks: [
        {
          type: "list",
          items: [
            "**Sector heatmap:** Displays 28 large-cap US stocks grouped across Technology, Consumer, Financials, Healthcare, Energy, and Industrials, with delayed prices and 1-day percentage changes marked by sign, directional arrow, and color.",
            "**Full bilingual articles:** Every post stores complete English and Thai titles, summaries, and Markdown bodies under `/en/news/:slug` and `/th/news/:slug`, complete with `hreflang` alternates and `NewsArticle` JSON-LD metadata.",
            "**Three-column article reader:** Shows a scrollable story list on the left, typography size controls (`A↓` / `A↑`) and keyboard-friendly prev/next navigation in the center, live ticker badges inline, and cited source domains on the right.",
            "**Ticker detail pages:** Each `/stocks/:ticker` route displays the delayed quote, 1-day change, market cap, sector, and every related article tagged with that symbol. Unlisted symbols still resolve through Finnhub profile lookup when tagged in a story.",
            "**Markets directory:** The `/markets` view filters US stocks by sector alongside index ETFs (`SPY`, `QQQ`, `DIA`), country ETFs (`EWJ`, `FXI`, `EWU`, `EWG`, `INDA`, `EWY`), and Binance crypto pairs (`BTC`, `ETH`, `SOL`, `XRP`).",
            "**Theme and category filtering:** Readers can filter news across `tech`, `earnings`, `macro`, `commodities`, and `crypto`, and switch between light and dark themes persisted via cookie for SSR.",
          ],
        },
      ],
    },
    {
      id: "uptodatestock-screenshots",
      title: "Screenshots",
      blocks: [
        {
          type: "image",
          image: {
            src: "/projects/uptodatestock/02-article-en.webp",
            alt: "English article reader on uptodateStock with linked NVDA ticker badge and source links",
            caption:
              "English article reader (/en/news/nvidia-stops-shipping-hopper-ai-chips-china) with the story rail on the left, live NVDA change badge, font-size controls, and cited sources on the right.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/uptodatestock/03-article-th.webp",
            alt: "The same article rendered natively in Thai on uptodateStock",
            caption:
              "The same story in Thai (/th/news/nvidia-stops-shipping-hopper-ai-chips-china), using Noto Sans Thai, Buddhist calendar dates, localized reading time, and the same live NVDA ticker badge.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/uptodatestock/04-ticker-view.webp",
            alt: "NVIDIA ticker detail page showing delayed price, market cap, sector, and related news",
            caption:
              "Ticker page (/en/stocks/NVDA) combining Finnhub delayed quote data, market cap, sector, and related news cards tagged with NVDA.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/uptodatestock/05-markets.webp",
            alt: "Markets directory page with search input, asset class tabs, and sector-grouped stock cards",
            caption:
              "Markets directory (/en/markets) with search, asset class filters (Stocks, Crypto, Indices, Countries), brand icons, and live 1-day changes.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "uptodatestock-how-its-built",
      title: "How it's built",
      blocks: [
        {
          type: "p",
          text: "The repository is a Bun and Vite+ monorepo split into two deployable apps and one shared database package. Both workers deploy to Cloudflare Workers via Cloudflare Workers Builds on pushes to `master`.",
        },
        {
          type: "table",
          head: ["Workspace", "Package", "Role"],
          rows: [
            [
              "`apps/web`",
              "`@uptodatestock/web`",
              "TanStack Start + React 19 web app with file-based `/$lang` routing, Tailwind CSS v4, `@base-ui/react`, `streamdown` Markdown rendering, and Better Auth endpoints.",
            ],
            [
              "`apps/mcp`",
              "`@uptodatestock/mcp`",
              "Stateless Streamable HTTP MCP server (`@modelcontextprotocol/sdk`) exposing editorial, source-fetching, quote, and publishing tools.",
            ],
            [
              "`packages/db`",
              "`@uptodatestock/db`",
              "Shared Neon serverless PostgreSQL client and Drizzle ORM schema (`stocks`, `posts`, and Better Auth tables).",
            ],
          ],
        },
        {
          type: "p",
          text: "Market quotes are fetched server-side from Finnhub's free tier (60 calls/min) and held in a 60-second per-instance memory cache; unknown ticker profiles from `stock/profile2` are cached for 24 hours. Because the free tier only provides current quotes and 1-day changes, no historical price charts are fabricated.",
        },
      ],
    },
    {
      id: "uptodatestock-using-it",
      title: "Using it",
      blocks: [
        {
          type: "p",
          text: "The site is public and requires no account to read. Sign-in is reserved for the single administrator account that approves MCP publishing clients.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Open **uptodatestock.com** (defaults to `/en`) to view the S&P 500 sector heatmap and the five latest stories in the **Hot today** grid.",
            "Click any stock tile in the heatmap or visit **Markets** (`/en/markets`) to search across US stocks, index ETFs, country ETFs, and crypto pairs, or open a ticker page like `/en/stocks/NVDA`.",
            "Open **News** (`/en/news`) to filter stories by category (`tech`, `earnings`, `macro`, `commodities`, `crypto`), or click any headline to enter the three-column reader.",
            "Use the header language selector to switch between **English** (`/en`) and **ไทย** (`/th`) on the same article or stock page, and use the theme toggle to switch between light and dark mode.",
          ],
        },
      ],
    },
    {
      id: "uptodatestock-mcp-publishing",
      title: "MCP publishing flow",
      blocks: [
        {
          type: "p",
          text: "Scheduled AI runs publish articles through `apps/mcp`, a stateless Streamable HTTP MCP server (`WebStandardStreamableHTTPServerTransport` with JSON responses) serving `POST` requests on `/`, `/mcp`, and `/api/server`. The server acts as an OAuth 2.1 protected resource advertising `/.well-known/oauth-protected-resource` (RFC 9728), while Better Auth on `apps/web` serves as the authorization server with dynamic client registration and an admin consent screen at `/en/consent`.",
        },
        {
          type: "p",
          text: "Incoming `Authorization: Bearer` tokens are verified against Better Auth's JWKS endpoint (`issuer` and `audience` bound to the MCP resource URL), and the subject's `role` is checked against the `user` table to ensure only the single admin account can publish. An optional static API key checked with `timingSafeEqual` is supported for headless schedules that cannot run a browser OAuth flow.",
        },
        {
          type: "table",
          head: ["Tool", "Purpose"],
          rows: [
            [
              "`get_editorial_guide`",
              "Returns the current UTC and Bangkok timestamps, 48-hour freshness window, story templates, and writing rules.",
            ],
            [
              "`list_recent_posts`",
              "Returns the latest 30 posts (optionally filtered by ticker) so the writer avoids duplicate coverage.",
            ],
            [
              "`fetch_source`",
              "Fetches a public HTTPS article URL and extracts readable text, title, and declared publish date.",
            ],
            [
              "`get_quotes`",
              "Fetches delayed price and 1-day percentage change for up to 6 US tickers to back price-reaction lines.",
            ],
            [
              "`publish_post`",
              "Validates and inserts a new bilingual post into Postgres; rejects with a numbered fix list if any check fails.",
            ],
            [
              "`update_post`",
              "Updates an existing post, recording `updatedAt` and a visible `correctionNote` for factual corrections or applying silent cosmetic fixes when left blank.",
            ],
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Server-side grounding gate",
          text: "Before `publish_post` or `update_post` writes to Postgres, `lint.ts` and `grounding.ts` reject paywalled or social/aggregator URLs, enforce word and duplicate windows (7 days for source URLs, 48 hours for titles), and verify that every figure and quotation in the English story appears in fetched source text, live `get_quotes` output, or the explicit `computed` list.",
        },
      ],
    },
  ],
};
