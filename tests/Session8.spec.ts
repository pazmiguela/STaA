/*Create a test in Parabank where a user can register with valid credentials*/
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', {name: 'Admin Page' }).click();
    await page.getByRole('button', { name: 'Clean' }).click();
    await page.pause()
});
    test('Verify that user can register an account with valid credentials', async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.getByRole('link', {name: 'Register' }).click();
        await page.locator('[id="customer.firstName"]').fill('Mari Chelle');
        await page.locator('[id="customer.lastName"]').fill('Dumalag');
        await page.locator('[id="customer.address.street"]').fill('11 Zeus St.');
        await page.locator('[id="customer.address.city"]').fill('Quezon City');
        await page.locator('[id="customer.address.state"]').fill('Metro Manila');
        await page.locator('[id="customer.address.zipCode"]').fill('1119');
        await page.locator('[id="customer.phoneNumber"]').fill('09758888888');
        await page.locator('[id="customer.ssn"]').fill('193812839');
        await page.locator('[id="customer.username"]').fill('SparklyBanker');
        await page.locator('[id="customer.password"]').fill('hd7@hgjf9!');
        await page.locator('#repeatedPassword').fill('hd7@hgjf9!');
        await page.getByRole('button', { name: 'Register' }).click();

        //ASSERT
        await expect(page.locator('h1.title')).toBeVisible();
        await expect(page.locator('h1.title')).toContainText(/Welcome/);
    });