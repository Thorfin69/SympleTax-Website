import { ARTICLES, type Article } from "./articles";
import libraryArticlesJson from "./articlesLibrary.json";

export const LIBRARY_ARTICLES: Article[] = libraryArticlesJson as Article[];

export const ALL_ARTICLES: Article[] = [...ARTICLES, ...LIBRARY_ARTICLES];

/** Volume 1 blogs 1–3: public on /resources; rest of library stays off-site navigation. */
export const SHOWCASE_LIBRARY_SLUGS: string[] = [
  "lib-v1-b01-what-is-tax-relief-and-how-can-it-help-y",
  "lib-v1-b02-irs-offer-in-compromise-settle-your-tax",
  "lib-v1-b03-irs-installment-agreements-explained-pay",
];

function applyShowcaseOverrides(article: Article): Article {
  if (!SHOWCASE_LIBRARY_SLUGS.includes(article.slug)) return article;
  return {
    ...article,
    hiddenFromPublic: false,
    noIndex: false,
  };
}

export function getArticleBySlug(slug: string | undefined): Article | undefined {
  if (!slug) return undefined;
  const found = ALL_ARTICLES.find((a) => a.slug === slug);
  return found ? applyShowcaseOverrides(found) : undefined;
}

export function canAccessArticleSlug(slug: string | undefined): boolean {
  const raw = ALL_ARTICLES.find((a) => a.slug === slug);
  if (!raw) return false;
  if (SHOWCASE_LIBRARY_SLUGS.includes(raw.slug)) return true;
  if (!raw.hiddenFromPublic) return true;
  return false;
}

/** Resources hub grid: three showcase posts only. */
export function getArticlesForResourcesListing(): Article[] {
  return SHOWCASE_LIBRARY_SLUGS.map((s) => getArticleBySlug(s)).filter(Boolean) as Article[];
}

export function getAccessibleRelated(article: Article): Article[] {
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => !!a && canAccessArticleSlug(a.slug));
}

/** Sitemap: main articles + three showcase library posts. */
export function getPublicArticles(): Article[] {
  const showcase = SHOWCASE_LIBRARY_SLUGS.map((s) => getArticleBySlug(s)).filter(Boolean) as Article[];
  return [...ARTICLES, ...showcase];
}
