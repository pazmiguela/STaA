import { test, expect } from '@playwright/test';

test('navigation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.reload();
  await page.goBack();
  await page.goForward();
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');
});

test('test', async ({ page }) => {
  await page.locator('.login_logo').toBeVisible();
  await page.locator('form').toBeVisible;
  await expect(page.locator('[data-test="username"]')).toHaveText('Username');
  await expect(page.locator('[data-test="password"]')).toHaveText('Password');
  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(response).toBeOK()
}); 