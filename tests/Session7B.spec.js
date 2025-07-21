import { test, expect } from '@playwright/test';

test('Test if error message appears when user tries to log-in with wrong credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  await page.locator('[data-test="username"]').fill('locked_out_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.getByRole('button', { name: 'LOGIN' }).click();

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});