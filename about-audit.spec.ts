import { test, expect } from "@playwright/test";

const BASE = "http://localhost:5173";

// Force all framer-motion whileInView elements visible for screenshots
async function disableAnimations(page: any) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
      }
      [style*="opacity: 0"], [style*="opacity:0"] {
        opacity: 1 !important;
      }
      [style*="transform"] {
        transform: none !important;
      }
    `,
  });
  // Also scroll through page to trigger whileInView
  await page.evaluate(async () => {
    const height = document.body.scrollHeight;
    for (let y = 0; y < height; y += 400) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(500);
}

test("About — Desktop screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE}/about`, { waitUntil: "networkidle" });
  await disableAnimations(page);
  await page.screenshot({ path: "test-results/about-desktop.png", fullPage: true });

  const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(scrollWidth).toBeLessThanOrEqual(1442);
});

test("About — Mobile screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/about`, { waitUntil: "networkidle" });
  await disableAnimations(page);
  await page.screenshot({ path: "test-results/about-mobile.png", fullPage: true });

  const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(scrollWidth).toBeLessThanOrEqual(392);
});

test("About — hero visible", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE}/about`);
  await expect(page.locator("h1")).toBeVisible();
});
