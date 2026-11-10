export const SITE = {
  url: "https://fankrits.com",
  name: "Kritsada Nhanjeing (Fankrits)",
  shortName: "Fankrits",
  title: "Kritsada Nhanjeing (Fankrits) · AI agents & mathematics, Bangkok",
  description:
    "Portfolio of Kritsada Nhanjeing (Fankrits), a Bangkok mathematician building AI agents, MCP servers and products like SomeScript, Zyplus and uptodateStock.",
  image: "/og.png",
  imageAlt: "Kritsada Nhanjeing, mathematician and AI builder based in Bangkok",
  locale: "en_US",
  themeColor: "#0b0b0d",
} as const;

const abs = (path: string) => new URL(path, SITE.url).toString();

const PERSON_ID = `${SITE.url}/#person`;

/** Facts here must match what the page itself shows. */
export function buildJsonLd() {
  const creator = { "@id": PERSON_ID };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.shortName,
        description: SITE.description,
        inLanguage: "en",
        publisher: creator,
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profile`,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        mainEntity: creator,
        primaryImageOfPage: { "@type": "ImageObject", url: abs(SITE.image) },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Kritsada Nhanjeing",
        alternateName: ["Fankrits", "กฤษฎา หนานเจียง"],
        url: SITE.url,
        image: abs("/logo512.png"),
        email: "mailto:contact@fankrits.com",
        jobTitle: "AI Operations Specialist & Mathematical Analyst",
        description:
          "Mathematics graduate of Thammasat University who builds AI agents, MCP servers and full-stack web products.",
        homeLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangkok",
            addressCountry: "TH",
          },
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Thammasat University",
          sameAs: "https://en.wikipedia.org/wiki/Thammasat_University",
        },
        sameAs: ["https://github.com/Fankrits"],
        knowsLanguage: ["en", "th"],
        knowsAbout: [
          "AI operations",
          "AI agents",
          "Model Context Protocol (MCP)",
          "Prompt engineering",
          "LLM benchmarking",
          "Numerical linear algebra",
          "Spectral norms of circulant matrices",
          "TypeScript",
          "React",
          "Next.js",
          "TanStack Start",
        ],
      },
      {
        "@type": "WebApplication",
        name: "SomeScript",
        url: "https://somescript.com",
        description:
          "An AI-native LaTeX editor with PDF preview and SyncTeX navigation. Its AI chat reads, searches, edits and compiles the open project, shows every edit as a diff with Undo, and on desktop works with your own model provider key.",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web browser, macOS, Windows, Linux",
        creator,
      },
      {
        "@type": "WebApplication",
        name: "SomeMath",
        url: "https://somemath.com",
        description:
          "A math learning platform with courses and 27 arcade-style math games, in English and Thai, with PDF certificates.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any (web browser)",
        inLanguage: ["en", "th"],
        creator,
      },
      {
        "@type": "WebApplication",
        name: "Memize",
        url: "https://memize.somemath.com",
        description:
          "An offline-ready progressive web app for cognitive training and party games, personalised with Gemini.",
        applicationCategory: "GameApplication",
        operatingSystem: "Any (web browser)",
        creator,
      },
      {
        "@type": "WebSite",
        name: "uptodateStock",
        url: "https://uptodatestock.com",
        description:
          "A live S&P 500 sector heatmap beside daily market stories written in full Thai and English.",
        inLanguage: ["en", "th"],
        creator,
      },
      {
        "@type": "SoftwareApplication",
        name: "Zyplus",
        url: "https://zyplus.app",
        description:
          "An open-source markdown editor that keeps notes as plain .md files in your own folders, with rich text and raw markdown modes.",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "macOS, Windows, Linux",
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        codeRepository: "https://github.com/Fankrits/zyplus-editor",
        creator,
      },
    ],
  };
}
