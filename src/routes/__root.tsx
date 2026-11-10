import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import { SITE, buildJsonLd } from "../lib/seo";

const imageUrl = new URL(SITE.image, SITE.url).toString();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: SITE.title },
      { name: "description", content: SITE.description },
      { name: "author", content: "Kritsada Nhanjeing" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: SITE.themeColor },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: SITE.shortName },
      { property: "og:locale", content: SITE.locale },
      { property: "og:url", content: SITE.url },
      { property: "og:title", content: SITE.title },
      { property: "og:description", content: SITE.description },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: SITE.imageAlt },
      { property: "profile:first_name", content: "Kritsada" },
      { property: "profile:last_name", content: "Nhanjeing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.title },
      { name: "twitter:description", content: SITE.description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: SITE.imageAlt },
    ],
    links: [
      { rel: "canonical", href: SITE.url },
      { rel: "me", href: "https://github.com/Fankrits" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "LLM-readable summary" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,400&family=Manrope:wght@400;500;600;700&display=swap",
      },
      {
        rel: "preload",
        href: "/fonts/Agave-Regular.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "preload", href: "/hdr/city.hdr", as: "fetch", crossOrigin: "anonymous" },
      { rel: "preload", href: "/hdr/dawn.hdr", as: "fetch", crossOrigin: "anonymous" },
      { rel: "preload", href: "/hdr/lobby.hdr", as: "fetch", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildJsonLd()) }],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-lg-theme="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
