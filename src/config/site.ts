/**
 * When true, only `/` and `/home` are registered as real pages; all other paths
 * redirect to `/`. In-app links still use react-router `Link` (full styling).
 *
 * Set to `false` when launching the full site.
 */
export const SITE_ONLY_HOME_LIVE = true;

/** Canonical / Open Graph base URL (no trailing slash). Set `VITE_SITE_ORIGIN` in `.env` for production. */
export const SITE_ORIGIN = String(import.meta.env.VITE_SITE_ORIGIN ?? "https://www.sympletax.com").replace(
  /\/$/,
  ""
);
