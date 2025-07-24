/*Using codegen, create a test that verifies that a user is able to login with valid credentials.
Site: Swag Labs*/

import { test, expect } from '@playwright/test';

test('User is able to login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.getByRole('button', { name: 'LOGIN' }).click();
  
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();
});