/*Apply all the learnings about locators, advanced 
Add, commit and push it to your GitHub Repository*/

import { test, expect } from '@playwright/test';

test('Test that the filters are working', async ({ page }) => {
  await page.goto('https://thelab.boozang.com/tables');
  await expect(page.getByRole('heading', { name: 'Tables', exact: true })).toBeVisible();
  await page.getByRole('checkbox', { name: 'lions' }).uncheck();
  await page.getByRole('checkbox', { name: 'elephants' }).uncheck();
  await page.getByRole('checkbox', { name: 'zebras' }).uncheck();
  await page.getByRole('checkbox', { name: 'lions' }).check();
  await expect(page.getByRole('cell', { name: 'lion' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'lion' }).nth(1)).toBeVisible();
  await page.getByRole('checkbox', { name: 'lions' }).uncheck();
  await page.getByRole('checkbox', { name: 'elephants' }).check();
  await expect(page.getByRole('cell', { name: 'elephant' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'elephant' }).nth(1)).toBeVisible();
  await page.getByRole('checkbox', { name: 'elephants' }).uncheck();
  await page.getByRole('checkbox', { name: 'zebras' }).check();
  await expect(page.getByRole('cell', { name: 'zebra' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'zebra' }).nth(1)).toBeVisible();
  await expect(page.getByRole('cell', { name: 'zebra' }).nth(2)).toBeVisible();
});













