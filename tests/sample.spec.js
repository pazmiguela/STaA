import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await expect(page.locator('[data-test="username"]')).toBeEmpty();
  await expect(page.locator('#login_button_container')).toMatchAriaSnapshot(`
    - textbox "Username"
    - textbox "Password"
    - button "LOGIN"
    `);
});