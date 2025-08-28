/*
Apply POM + Fixtures from login.spec.ts to auth.setup.ts
Create base.ts
*/

import { expect, test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';
import { LoginPage } from '../pages/LoginPage';

setup('Log-in using class LoginPage.ts', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);

  await expect(page.getByText('Swag Labs')).toBeVisible();

  await page.context().storageState({ path: STORAGE_STATE });
});

/*Refactored auth.setup.ts to use POM

import { expect, test as setup } from '@playwright/test';
import { STORAGE_STATE } from '../playwright.config';

setup('Do Login', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME!);
  await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD!);
  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByText('Swag Labs')).toBeVisible();

  await page.context().storageState({ path: STORAGE_STATE });
});
*/