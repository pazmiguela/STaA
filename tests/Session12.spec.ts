/* Apply test hooks and test grouping and other session 12 topics */

import { test, expect } from '@playwright/test';

test.describe('Session 12 Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://thelab.boozang.com/');
    await expect(page.getByText('theLab')).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    await page.screenshot({ path: `test-results/screenshots/${test.info().title}.png`, fullPage: true });
  });

test('Come back from Collecting kittens @kittens @regression', async ({ page }) => {
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('link', { name: 'Collecting kittens' }).click();
  await expect(page.getByRole('heading', { name: 'Collecting Kittens', exact: true })).toBeVisible();
});


test('Come back from Canvas game @canvas @smoke', async ({ page }) => {
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('link', { name: 'Canvas Game' }).click();
  await expect(page.getByRole('heading', { name: 'Canvas Game', exact: true })).toBeVisible();
});

test('Come back from Concat strings @strings @regression', async ({ page }) => {
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('link', { name: 'Concat strings' }).click();
  await expect(page.getByRole('heading', { name: 'Concatenate Strings', exact: true })).toBeVisible();
});

});