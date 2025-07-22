import { test, expect } from '@playwright/test';

test('Popup window is visible upon arriving at the page', async ({ page }) => {
  await page.goto('https://www.glucosegoddess.com/');
  await page.waitForSelector('[data-testid="klaviyo-form-UaYtCq"]', { state: 'visible', timeout: 6000 });
  await expect(page).toHaveScreenshot()
});

test('Popup looks as designed', async ({ page }) => {
  await expect(page.getByTestId('klaviyo-form-UaYtCq')).toMatchAriaSnapshot(`
    - img "Glucose hacks"
    - text: email
    - textbox "email"
    - button "GET THE HACKS"
    - text: By clicking, you accept to receive my emails.You can unsubscribe anytime.
    - button "Maybe later"
    `);
    await expect(page).toHaveScreenshot()
});

test('Popup window accepts valid e-mail address', async ({ page }) => {
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).click();
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).fill('chonahipolito@yahoo.com');
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('button', { name: 'GET THE HACKS' }).click();
  await expect(page.getByTestId('klaviyo-form-UaYtCq')).toBeVisible();
  await expect(page).toHaveScreenshot()
});