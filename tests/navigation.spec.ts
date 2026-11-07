import { test, expect } from "@playwright/test";

test("home page shows the main sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  for (const name of ["What I can do", "Skills", "Where I'm strong", "Projects"]) {
    await expect(page.getByRole("heading", { name })).toBeVisible();
  }
  await expect(page.getByRole("contentinfo")).toBeVisible();
});

test("header links reach about and contact", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main" });

  await nav.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { name: "About me" })).toBeVisible();

  await nav.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
});

test("project filter narrows the list", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("#projects article");
  const total = await cards.count();
  await page.locator("#projects").getByRole("button", { name: "React Native", exact: true }).click();
  expect(await cards.count()).toBeLessThan(total);
});

test("clicking a project opens its details with gallery and stack", async ({ page }) => {
  await page.goto("/");
  await page.locator("#projects article").filter({ hasText: "Tea Shop" }).getByRole("button", { name: /view details/i }).first().click();
  const dialog = page.getByRole("dialog", { name: /tea shop/i });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("What I built")).toBeVisible();
  await expect(dialog.getByText("Stack used")).toBeVisible();
  // two screenshots, so a thumbnail switcher shows up
  await dialog.getByRole("button", { name: "Show screenshot 2" }).click();
  await expect(dialog.getByRole("button", { name: "Show screenshot 2" })).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});

test("project popup links to the live site only when a url exists", async ({ page }) => {
  await page.goto("/");
  const open = (name: string) =>
    page.locator("#projects article").filter({ hasText: name }).getByRole("button", { name: /view details/i }).first().click();

  await open("Jewellery");
  await expect(page.getByRole("dialog").getByRole("link", { name: /visit site/i })).toHaveAttribute("href", "https://bmgjewellers.com");
  await page.keyboard.press("Escape");

  await open("Tea Shop");
  await expect(page.getByRole("dialog").getByRole("link", { name: /visit site/i })).toHaveCount(0);
});
