/**
 * When true, only `/` and `/home` are registered as real pages; all other paths
 * redirect to `/`. In-app `<DraftLink>` (used as `Link` in v2) does not navigate
 * for draft internal routes. External URLs (https, mailto, tel) still work.
 *
 * Set to `false` when launching the full site.
 */
export const SITE_ONLY_HOME_LIVE = true;

/** Returns true if `to` should perform real navigation (same tab or external). */
export function isNavigableTo(to: string): boolean {
  const t = to.trim();
  if (
    t.startsWith("http://") ||
    t.startsWith("https://") ||
    t.startsWith("mailto:") ||
    t.startsWith("tel:")
  ) {
    return true;
  }
  const raw = t.split("#")[0].split("?")[0] || "/";
  const path = raw.replace(/\/+$/, "") || "/";
  return path === "/" || path === "/home";
}
