/*Using codegen, create a test that verifies that a user is able to login with valid credentials.
Site: Swag Labs*/

import { test, expect } from '@playwright/test';

test('User is able to login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Swag Labs')).toBeVisible();
});