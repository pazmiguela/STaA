import { test, expect } from '@playwright/test';

test('That all elements are visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'LOGIN' })).toBeVisible();
  await expect(page.getByRole('img')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Accepted usernames are:' })).toBeVisible();
  await expect(page.getByText('Accepted usernames are: standard_user locked_out_user problem_user')).toBeVisible();
  await expect(page.getByText('Password for all users: secret_sauce')).toBeVisible();
});