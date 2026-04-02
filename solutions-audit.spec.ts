import { test, expect } from "@playwright/test";
const BASE = "http://localhost:5173";
async function disableAnimations(page: any) {
  await page.addStyleTag({ content: `*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; } [style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; } [style*="transform"] { transform: none !important; }` });
  await page.evaluate(async () => { const h = document.body.scrollHeight; for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 50)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(500);
}
test("Solutions — Desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${BASE}/solutions`, { waitUntil: "networkidle" });
  await disableAnimations(page);
  await page.screenshot({ path: "test-results/solutions-desktop.png", fullPage: true });
  const sw = await page.evaluate(() => document.body.scrollWidth);
  expect(sw).toBeLessThanOrEqual(1442);
});
test("Solutions — Mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/solutions`, { waitUntil: "networkidle" });
  await disableAnimations(page);
  await page.screenshot({ path: "test-results/solutions-mobile.png", fullPage: true });
  const sw = await page.evaluate(() => document.body.scrollWidth);
  expect(sw).toBeLessThanOrEqual(392);
});
