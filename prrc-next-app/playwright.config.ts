/**
 * Playwright E2E Test Configuration
 * Configured for Next.js App Router testing
 * 
 * Usage:
 *   npx playwright test                    # Run all tests
 *   npx playwright test --headed           # Run with browser UI
 *   npx playwright test --project=chromium # Run on specific browser
 *   npx playwright test --grep login       # Run specific test
 */
import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.PORT || '3000';
const BASE_URL = process.env.E2E_TEST_URL || `http://localhost:${PORT}`;

export default defineConfig({
  // Test directory relative to prrc-next-app
  testDir: './tests',

  // Timeout for individual tests (30 seconds)
  timeout: 30 * 1000,

  // Timeout for entire test file (2 minutes)
  expect: {
    timeout: 5000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
  ],

  // Shared settings for all the projects
  use: {
    // Base URL for all tests
    baseURL: BASE_URL,

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Capture screenshot on failure
    screenshot: 'only-on-failure',

    // Record video on failure
    video: 'retain-on-failure',

    // Actionability checks
    actionTimeout: 10000,

    // Browser context options
    viewport: { width: 1280, height: 720 },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile devices
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Web server configuration for local testing
  webServer: {
    command: 'npm run build && npm run start',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
