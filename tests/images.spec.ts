import { test, expect } from "@playwright/test";

// every image on the page should actually load, on a phone-sized screen too
test.use({ viewport: { width: 375, height: 700 } });

for (const path of ["/", "/about", "/contact"]) {
  test(`images load on ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("img", { name: /photo of/i })).toBeVisible();

    // lazy images only load once they are scrolled into view
    const imgs = page.locator("main img");
    for (let i = 0; i < (await imgs.count()); i++) {
      await imgs.nth(i).scrollIntoViewIfNeeded();
      await expect.poll(() => imgs.nth(i).evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
    }

    // nothing should push the page sideways on a small screen
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
  });
}

test("skills show an icon next to the name", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("#skills li", { hasText: "HTML" });
  await expect(html).toBeVisible();
  await expect(html.locator("svg")).toBeVisible();
});
