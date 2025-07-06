import { test, expect } from '@playwright/test';

test.describe('User Login Scenarios', () => {
  const baseURL = 'https://parabank.parasoft.com/parabank/index.htm';

  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
  });

  test('Successful login with valid credentials', async ({ page }) => {
    await page.locator('input[name="john"]').fill('validUser');
    await page.locator('input[name="demo"]').fill('validPass');
    await page.getByRole('button', { name: 'Log In' }).click();

    // Assert that the user is redirected to the account overview page
    await expect(page.getByText('Accounts Overview')).toBeVisible();
  });

  test('Unsuccessful login with invalid credentials', async ({ page }) => {
    await page.locator('input[name="username"]').fill('invalidUser');
    await page.locator('input[name="password"]').fill('wrongPass');
    await page.getByRole('button', { name: 'Log In' }).click();

    // Assert that an error message is shown
    await expect(page.locator('#rightPanel .error')).toContainText('The username and password could not be verified.');
  });
});
