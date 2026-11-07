import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // parallel workers made page loads hang on my machine, tiny suite anyway
  workers: 1,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3100",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run build && npm run start -- -p 3100",
    url: "http://localhost:3100",
    reuseExistingServer: true,
    // dummy ids so the form is "configured", the EmailJS request itself is mocked in the test
    env: {
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: "test_service",
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: "test_template",
      NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID: "test_autoreply",
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: "test_key",
    },
    timeout: 240_000,
  },
});
