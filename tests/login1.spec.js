import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await expect(page.getByText('Username')).toBeVisible();
  await expect(page.getByText('Password')).toBeVisible();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('juandelacruz');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('123456');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'home', exact: true }).click();
  await page.getByRole('link', { name: 'about', exact: true }).click();
  await page.getByRole('link', { name: 'contact', exact: true }).click();
});