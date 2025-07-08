import { test, expect } from '@playwright/test';

test.describe('User Login Scenarios', () => {
  const baseURL = 'https://parabank.parasoft.com/parabank/index.htm';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test('Successful login with valid credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('john');
    await page.locator('input[name="password"]').fill('demo');
    await page.getByRole('button', { name: 'Log In' }).click();

    // Assert that the user is redirected to the account overview page
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });

  });

  test('Unsuccessful login with invalid credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('invalidUser');
    await page.locator('input[name="password"]').fill('wrongPass');
    await page.getByRole('button', { name: 'Log In' }).click();

    // Assert that an error message is shown
    await expect(page.locator('#rightPanel .error')).toContainText('An internal error has occurred and has been logged.');
    await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });

  });
});
