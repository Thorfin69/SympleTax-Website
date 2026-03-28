import { ALL_SLUGS } from "../serviceContent";
import { getPublicArticles } from "./articleAccess";

/** Paths only (leading slash, no domain). Keep in sync with live React routes. */
export function getAllSitemapPaths(): string[] {
  const staticPaths: string[] = [
    "/",
    "/home",
    "/about",
    "/process",
    "/services",
    "/solutions",
    "/contact",
    "/resources",
    "/sitemap",
    "/legal",
    "/legal/privacy-policy",
    "/legal/terms-of-service",
    "/legal/disclaimer",
    "/legal/california-privacy",
  ];

  const solutionPaths = ALL_SLUGS.map((slug) => `/solutions/${slug}`);
  const articlePaths = getPublicArticles().map((a) => `/resources/${a.slug}`);

  return [...staticPaths, ...solutionPaths, ...articlePaths];
}

function priorityForPath(path: string): string {
  if (path === "/") return "1.0";
  if (path === "/home") return "0.9";
  if (path.startsWith("/legal")) return "0.5";
  if (path === "/sitemap") return "0.4";
  if (path.startsWith("/resources/")) return "0.75";
  if (path.startsWith("/solutions/")) return "0.85";
  return "0.9";
}

/** Valid XML sitemap document (UTF-8). */
export function buildSitemapXml(siteOrigin: string): string {
  const base = siteOrigin.replace(/\/$/, "");
  const paths = getAllSitemapPaths();
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

  const urlEntries = paths
    .map(
      (p) => `  <url>
    <loc>${esc(base + p)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priorityForPath(p)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}
