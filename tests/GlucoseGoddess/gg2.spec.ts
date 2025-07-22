import { test, expect } from '@playwright/test';

test('Check if the The email is invalid error appears after entering invalid e-mail', async ({ page }) => {
  await page.goto('https://www.glucosegoddess.com/?view=sl-00CE545D');
  await expect(page.getByTestId('klaviyo-form-UaYtCq')).toBeVisible();
  await expect(page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' })).toBeVisible();
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).click();
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).fill('asdfghjklertyuioshbdc');
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('button', { name: 'GET THE HACKS' }).click();
  await expect(page.getByTestId('klaviyo-form-UaYtCq').getByRole('locator('div').filter({hasText:/^This email is invalid $/}).nth(2)', { name: 'This email is invalid'})).toBeVisible();
});