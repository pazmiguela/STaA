import { test, expect } from '@playwright/test';
import {test as setup} from '@playwright/test';
import { configDotenv } from 'dotenv';

configDotenv();

setup('Do Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME!);
  await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD!);
  await page.locator('[data-test="login-button"]').click();

  await expect(page.getByText('Swag Labs')).toBeVisible();
});