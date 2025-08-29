import { test, expect } from '@playwright/test';

test('Sanity check', async ({ page }) => {
  await page.goto('https://demoqa.com');
  await expect(page).toHaveTitle(/DemoQA/i);
});