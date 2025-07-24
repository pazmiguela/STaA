/*Apply all the learnings about locators, advanced locators and assertions to your current or new spec file
Add, commit and push it to your GitHub Repository*/

//ARRANGE
//ACT
//ASSERT

import { test, expect } from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('https://bookcart.azurewebsites.net/');
  //  await expect(page.getByRole('heading', { name: 'Book Cart' })).toBeVisible({timeout:60000});
    await expect(page.getByRole('combobox', { name: 'search' })).toBeEmpty();
    await expect(page.locator('mat-list')).toContainText('All Categories');
    await expect(page.locator('mat-list')).toContainText('Biography');
    await page.getByText('Biography', { exact: true }).click();
    await expect (page).toHaveURL('https://bookcart.azurewebsites.net/filter?category=biography');
    await page.getByRole('slider').fill('111');
    await expect(page.locator('app-book-card')).toContainText('The Simple Wild');
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.getByRole('button').filter({ hasText: 'shopping_cart9' }).click();
    await expect(page.locator('td').filter({ hasText: /^₹111\.00$/ })).toHaveText('₹111.00');
});
