import { useEffect } from "react";
import { SITE_ORIGIN } from "../../config/site";

/** Served from `public/` — absolute URL built with `SITE_ORIGIN`. */
export const DEFAULT_OG_IMAGE_PATH = "/og-default.png";

export type PageSEOOptions = {
  title: string;
  description: string;
  /** Path only, e.g. `/about` or `/` */
  path: string;
  ogType?: "website" | "article";
  /**
   * Absolute image URL for shares. Omit to use the site default OG image.
   * Pass `null` to skip og:image / twitter:image (rare).
   */
  ogImageAbsolute?: string | null;
};

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMetaProperty(property: string) {
  document.querySelector(`meta[property="${property}"]`)?.remove();
}

function removeMetaName(name: string) {
  document.querySelector(`meta[name="${name}"]`)?.remove();
}

/**
 * Updates document title, meta description, canonical, and Open Graph / Twitter tags.
 * Safe to call on route changes; does not restore previous values on unmount (next page overwrites).
 */
export function applyPageMeta(opts: PageSEOOptions) {
  const { title, description, path, ogType = "website", ogImageAbsolute } = opts;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = cleanPath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${cleanPath}`;

  document.title = title;
  setMetaName("description", description);

  const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (canonical) {
    canonical.setAttribute("href", canonicalUrl);
  }

  setMetaProperty("og:type", ogType);
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
  setMetaProperty("og:url", canonicalUrl);

  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", title);
  setMetaName("twitter:description", description);

  if (ogImageAbsolute === null) {
    removeMetaProperty("og:image");
    removeMetaName("twitter:image");
  } else {
    const img = ogImageAbsolute ?? `${SITE_ORIGIN}${DEFAULT_OG_IMAGE_PATH}`;
    setMetaProperty("og:image", img);
    setMetaName("twitter:image", img);
  }
}

export function usePageSEO(options: PageSEOOptions) {
  const { title, description, path, ogType = "website", ogImageAbsolute } = options;
  useEffect(() => {
    applyPageMeta({ title, description, path, ogType, ogImageAbsolute });
  }, [title, description, path, ogType, ogImageAbsolute]);
}
