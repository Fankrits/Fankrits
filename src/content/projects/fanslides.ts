import type { ProjectDoc } from "./types";

/**
 * Internal tool: no live URL and no repository link on purpose. Keep the deployed hostname out of
 * every string in this file (copy, alt text, captions); the screenshots are viewport captures with
 * no browser chrome.
 */
export const fanslides: ProjectDoc = {
  slug: "fanslides",
  name: "Fanslides",
  kicker: "Thai news-deck studio",
  summary:
    "A private tool that turns one AI or tech news story into a short Thai slide deck for social posts: a cover, a few question-and-answer slides and a US stock chart. An editor, a PNG exporter and an MCP server let a model draft the deck while the server enforces the house style.",
  windowLabel: "Internal tool",
  links: [],
  stack: [
    "TanStack Start",
    "Nitro",
    "Neon Postgres",
    "Drizzle",
    "satori + resvg",
    "MCP",
    "Cloudflare Workers",
  ],
  facts: [
    { label: "Access", value: "Internal tool, not publicly linked" },
    { label: "Repository", value: "Private" },
    {
      label: "Output",
      value: "Portrait 9:16 slides by default (4:5 and 16:9 also supported), exported as PNG",
    },
    { label: "Language", value: "Slide copy in Thai, English company names kept as written" },
    { label: "Hosting", value: "Cloudflare Worker, deployed from GitHub Actions" },
    {
      label: "Data",
      value: "Neon Postgres: daily folders, decks, uploaded images, TikTok link state",
    },
  ],
  hero: {
    src: "/projects/fanslides/02-editor-slides.webp",
    alt: "The Fanslides deck editor showing a cover slide and two question-and-answer slides side by side, each with a logo and Thai text on a light page",
    caption: "The deck editor: one portrait card per slide, with logo, image and reorder controls.",
    width: 1440,
    height: 900,
  },
  sections: [
    {
      id: "fanslides-overview",
      title: "Overview",
      blocks: [
        {
          type: "p",
          text: "Fanslides produces the short portrait decks that accompany a daily AI and tech news feed. Every deck covers one story and is anchored on one US-listed tech company: a **cover**, two or three **question-and-answer** slides, and a closing **stock chart** slide.",
        },
        {
          type: "p",
          text: "It exists because the format is repetitive and the rules are strict: Thai copy, short answers, a verified ticker, a dated source. Instead of relying on a prompt, the server checks every deck against those rules and refuses to save one that breaks them.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Internal tool",
          text: "Fanslides is not a public product. It has no public link or source link here, so this page documents it from its screenshots and design only.",
        },
      ],
    },
    {
      id: "fanslides-features",
      title: "Features",
      blocks: [
        {
          type: "list",
          items: [
            "**Deck list.** A paginated table of decks by date, category, topic and one-line summary, with a selectable page size.",
            "**Three slide types.** Cover, Q&A and a stock-chart slide. Add, delete and reorder slides in the editor; each change is validated against the slide schema.",
            "**Brand logos by name.** Logos are picked from a searchable brand registry and stored as a short reference, not a guessed URL. A cover can carry a second logo, and logos can be resized or recoloured.",
            "**Stock chart snapshots.** A chart is fetched once, stored inside the slide as price points, and drawn from that data. A deck therefore renders the same next week as today. A **Refresh chart** button re-fetches it for a ticker.",
            "**Images.** Paste an image URL or upload a PNG, JPEG, WebP or GIF up to 4 MB. Uploads are stored in the database so exports do not depend on other storage.",
            "**Export.** One click returns a ZIP of numbered PNGs, one per slide.",
            "**Send to TikTok.** Pushes the exported slides to your TikTok inbox as a photo draft; you review and publish in the app.",
          ],
        },
      ],
    },
    {
      id: "fanslides-screenshots",
      title: "Screenshots",
      blocks: [
        {
          type: "image",
          image: {
            src: "/projects/fanslides/01-deck-list.webp",
            alt: "Fanslides home page: a table of daily news decks with date, category, topic and summary columns, and a New deck button",
            caption:
              "Deck list with date, category, topic and summary, plus pagination and a New deck button.",
            width: 1440,
            height: 740,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/fanslides/03-stock-chart-slide.webp",
            alt: "Editor scrolled to the last slides: a Q&A slide and a stock-chart slide with a company logo, ticker, price chart and price, next to an Add slide control",
            caption:
              "The closing stock-chart slide with its ticker field and Refresh chart button, and the Add slide control with a slide-type selector.",
            width: 1440,
            height: 900,
          },
        },
        {
          type: "image",
          image: {
            src: "/projects/fanslides/04-chart-refresh.webp",
            alt: "A second deck's stock-chart slide showing a falling price chart, the ticker and the latest price",
            caption:
              "Another deck: the chart direction and price come from the stored snapshot, not from a live quote.",
            width: 1440,
            height: 900,
          },
        },
      ],
    },
    {
      id: "fanslides-how-its-built",
      title: "How it's built",
      blocks: [
        {
          type: "p",
          text: "A single **TanStack Start** app on **Nitro**, built for the Cloudflare Workers module preset. Decks, daily folders, uploads and the TikTok link live in **Neon Postgres** through **Drizzle**; slides are stored as validated JSON (a **zod** discriminated union over the three slide types).",
        },
        {
          type: "list",
          items: [
            "**One renderer.** The editor preview and the export share the same slide layout. Export renders to PNG on the server with **satori** and **resvg-wasm**, so it needs no headless browser; Noto Sans Thai and Noto Sans supply the glyphs.",
            "**Logos.** Brand marks come from an open icon registry, are validated against it and cached, so a slide cannot reference a logo that does not exist.",
            "**Market data.** Chart snapshots come from a public quote endpoint behind a small provider interface; failure only blocks creating a chart, never rendering one.",
            "**Deploys.** Pushes to the main branches run check, test and build, then deploy the Worker through GitHub Actions. Runtime secrets live on the Worker, not in the repository.",
          ],
        },
      ],
    },
    {
      id: "fanslides-mcp",
      title: "Drafting decks with MCP",
      blocks: [
        {
          type: "p",
          text: "Fanslides exposes a stateless **MCP** server so any model, including a weak free one, can draft decks. A default toolset of ten tools covers the path from news to export; a full toolset adds lint, logo search and day-overview tools. A bearer token can protect it.",
        },
        {
          type: "table",
          head: ["Step", "Tool", "What it does"],
          rows: [
            ["1", "`get_style_guide`", "Returns the short house style, or one section in detail."],
            [
              "2",
              "`find_latest_news`",
              "Reads dated publisher feeds and returns the newest AI, tech and US-stock stories with their tickers.",
            ],
            [
              "3",
              "`resolve_company`",
              "Maps a company name or ticker to a US ticker and logo reference.",
            ],
            [
              "4",
              "`create_news_deck`",
              "Builds the whole deck from one flat brief; `dryRun` checks without saving.",
            ],
            ["5", "`export_deck_as_images`", "Returns a link to a ZIP of PNGs."],
          ],
        },
        {
          type: "p",
          text: "The server, not the prompt, enforces the style. It fixes small slips automatically and rejects the rest with a `code` and a `fix` the model can act on, for example `NOT_THAI`, `ANSWER_LEN`, `US_TICKER`, `STALE_NEWS` or `SOURCE_MISMATCH`. Nothing is saved when a deck is rejected.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Why the freshness check matters",
          text: "Models rank search results by relevance and guess the year. Fanslides reads the publish time from the feed or the page itself and refuses a deck whose newest source is more than 72 hours older than the deck date.",
        },
      ],
    },
  ],
};
