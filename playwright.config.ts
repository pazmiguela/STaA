// @ts-check
import { defineConfig, devices } from '@playwright/test';

import path from "path";
import dotenv from "dotenv";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

dotenv.config({ path: path.resolve(".env") });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

//export const STORAGE_STATE = path.join(__dirname, "./.auth/user.json");

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [

    {
      name: 'setup',
      testMatch: "**/*.setup\.ts",
    },
/*
    {
      name: "e2e",
      dependencies: ['setup'],
      use: {
        storageState: STORAGE_STATE,
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    }, 
        baseURL: process.env.BASE_URL || 'http://localhost:3000',
      }
    }

    {
      name: 'api',
      testMatch: /.*\.api\.ts/,
      use: {
        storageState: STORAGE_STATE,
        baseURL: process.env.BASE_URL || 'http://localhost:3000',
      },
    }

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});

