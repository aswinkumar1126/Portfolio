import { test, expect } from "@playwright/test";

test("empty form shows validation errors", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText("Please enter your name")).toBeVisible();
  await expect(page.getByText("Please enter a valid email")).toBeVisible();
  await expect(page.getByText("Please write a message")).toBeVisible();
});

test("valid form submits and shows the success modal", async ({ page }) => {
  await page.route("https://api.emailjs.com/**", (route) => route.fulfill({ status: 200, body: "OK" }));
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Name" }).fill("Test User");
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
  await page.getByRole("textbox", { name: "Message" }).fill("Hello there");
  await page.getByRole("button", { name: /send message/i }).click();
  const modal = page.getByRole("dialog", { name: "Message sent" });
  await expect(modal).toBeVisible();
  await expect(modal.getByText(/your message has been sent/i)).toBeVisible();
  await modal.getByRole("button", { name: "Done" }).click();
  await expect(modal).toBeHidden();
});

test("failed send shows an error instead of the modal", async ({ page }) => {
  await page.route("https://api.emailjs.com/**", (route) => route.fulfill({ status: 500, body: "fail" }));
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Name" }).fill("Test User");
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
  await page.getByRole("textbox", { name: "Message" }).fill("Hello there");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByText(/something went wrong/i)).toBeVisible();
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("sends the notification and the auto reply, and still succeeds if the auto reply fails", async ({ page }) => {
  const templates: string[] = [];
  await page.route("https://api.emailjs.com/**", async (route) => {
    const body = route.request().postDataJSON();
    templates.push(body.template_id);
    // fail only the auto reply
    await route.fulfill(body.template_id === "test_autoreply" ? { status: 500, body: "fail" } : { status: 200, body: "OK" });
  });
  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Name" }).fill("Test User");
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
  await page.getByRole("textbox", { name: "Message" }).fill("Hello there");
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(page.getByRole("dialog", { name: "Message sent" })).toBeVisible();
  expect(templates).toEqual(["test_template", "test_autoreply"]);
});
