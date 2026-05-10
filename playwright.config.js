// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Playwright config — manual smoke gate for PerformSAT.
 *
 * Tests run against an already-running dev server (you start it yourself
 * with `npm start`). They DO NOT auto-launch the server because the project
 * also needs Firebase emulator + seed running, and orchestrating that from
 * Playwright is more friction than value at this stage.
 *
 * Auth-bearing tests are skipped unless PERFORMSAT_TEST_EMAIL and
 * PERFORMSAT_TEST_PASSWORD are set in the environment. CI will skip them.
 *
 * Usage:
 *   # Shell A: emulator
 *   npm run dev:emulator
 *   # Shell B: seed
 *   npm run dev:seed
 *   # Shell C: app
 *   npm start
 *   # Shell D: tests
 *   PERFORMSAT_TEST_EMAIL=... PERFORMSAT_TEST_PASSWORD=... npm run test:e2e
 */
module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: false, // shared dev server, single Firestore — keep linear
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.PERFORMSAT_E2E_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // CRA's dev server can be slow to recover from auth flows
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
