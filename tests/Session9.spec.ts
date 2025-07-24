/*Create a spec file, any name, showing:
1. When user logs in succesfully, you assert that the succesful log-in page URL is visible (expect page to have URL)
2. Getby text to be visible
3. Await page.screenshot*/

import { test, expect } from '@playwright/test';

test('Upon successful log-in, URL & page title are visible, get SS', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.screenshot({ path: 'screenshots/success.SL.login.png' });
});

