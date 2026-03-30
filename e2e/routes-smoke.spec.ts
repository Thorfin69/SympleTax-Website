import { test, expect } from "@playwright/test";
import { ALL_SLUGS } from "../src/app/serviceContent";

/**
 * Public article slugs (must match `articles.ts` + showcase library in `articleAccess.ts`).
 * Kept inline so Playwright does not need to resolve `articlesLibrary.json` imports.
 */
const RESOURCE_SLUGS = [
  "offer-in-compromise",
  "irs-cp90-notice",
  "wage-garnishment",
  "currently-not-collectible",
  "unfiled-tax-returns",
  "penalty-abatement",
  "tax-lien-vs-levy",
  "when-to-hire-professional",
  "installment-agreement",
  "lib-v1-b01-what-is-tax-relief-and-how-can-it-help-y",
  "lib-v1-b02-irs-offer-in-compromise-settle-your-tax",
  "lib-v1-b03-irs-installment-agreements-explained-pay",
] as const;

/**
 * Visits every registered marketing route and fails if React throws (e.g. ReferenceError)
 * or the React Router default error screen appears.
 */
const STATIC_PATHS = [
  "/",
  "/home",
  "/about",
  "/process",
  "/services",
  "/solutions",
  "/contact",
  "/resources",
  "/sitemap",
  "/draft",
  "/legal",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/disclaimer",
  "/legal/california-privacy",
] as const;

function collectRoutes(): string[] {
  const solutionPaths = ALL_SLUGS.map((slug) => `/solutions/${slug}`);
  const resourcePaths = RESOURCE_SLUGS.map((slug) => `/resources/${slug}`);
  return [...STATIC_PATHS, ...solutionPaths, ...resourcePaths];
}

for (const path of collectRoutes()) {
  test(`renders without crash: ${path}`, async ({ page }) => {
    const jsErrors: string[] = [];
    page.on("pageerror", (err) => {
      jsErrors.push(err.message);
    });

    const res = await page.goto(path, { waitUntil: "load", timeout: 60_000 });
    expect(res?.ok() ?? false, `HTTP for ${path}`).toBeTruthy();

    // App shell: wait for routed UI (avoids networkidle — GTM/UserWay never “idle”).
    await page.getByRole("navigation").first().waitFor({ state: "visible", timeout: 30_000 });

    await expect(page.getByText("Unexpected Application Error")).toHaveCount(0);
    expect(jsErrors, jsErrors.join("\n")).toEqual([]);
  });
}
