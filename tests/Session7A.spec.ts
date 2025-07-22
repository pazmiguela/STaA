import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.getByRole('button', { name: 'LOGIN' }).click();
  
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();
});