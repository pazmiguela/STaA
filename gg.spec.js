import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.glucosegoddess.com/');
  await expect(page.getByTestId('klaviyo-form-UaYtCq')).toBeVisible();
  await expect(page.getByTestId('klaviyo-form-UaYtCq')).toMatchAriaSnapshot(`
    - img "Glucose hacks"
    - text: email
    - textbox "email"
    - button "GET THE HACKS"
    - text: By clicking, you accept to receive my emails.You can unsubscribe anytime.
    - button "Maybe later"
    `);
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).click();
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).fill('mpmrhm2018@gmail.com');
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).press('ControlOrMeta+a');
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('textbox', { name: 'email' }).fill('chonahipolito@yahoo.com');
  await page.getByTestId('klaviyo-form-UaYtCq').getByRole('button', { name: 'GET THE HACKS' }).click();
  await expect(page.getByTestId('klaviyo-form-UaYtCq')).toBeVisible();
});