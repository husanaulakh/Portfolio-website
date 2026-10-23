import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/e2e',
  reporter: 'list',
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:3100', browserName: 'chromium', headless: true },
  webServer: {
    command: 'npm run start -- -p 3100',
    url: 'http://127.0.0.1:3100',
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
