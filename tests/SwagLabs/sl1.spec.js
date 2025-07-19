import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await expect(page.locator('#login_button_container')).toBeVisible();
  await expect(page.getByRole('img')).toBeVisible();
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.locator('#contents_wrapper')).toMatchAriaSnapshot(`
    - link:
      - /url: ./inventory-item.html?id=4
      - img
    - link "Sauce Labs Backpack":
      - /url: ./inventory-item.html?id=4
    - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\$\\d+\\.\\d+/
    - button "ADD TO CART"
    - link:
      - /url: ./inventory-item.html?id=0
      - img
    - link "Sauce Labs Bike Light":
      - /url: ./inventory-item.html?id=0
    - text: /A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
    - button "ADD TO CART"
    - link:
      - /url: ./inventory-item.html?id=1
      - img
    - link "Sauce Labs Bolt T-Shirt":
      - /url: ./inventory-item.html?id=1
    - text: /Get your testing superhero on with the Sauce Labs bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
    - button "ADD TO CART"
    - link:
      - /url: ./inventory-item.html?id=5
      - img
    - link "Sauce Labs Fleece Jacket":
      - /url: ./inventory-item.html?id=5
    - text: /It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office\\. \\$\\d+\\.\\d+/
    - button "ADD TO CART"
    - link:
      - /url: ./inventory-item.html?id=2
      - img
    - link "Sauce Labs Onesie":
      - /url: ./inventory-item.html?id=2
    - text: /Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
    - button "ADD TO CART"
    - link:
      - /url: ./inventory-item.html?id=3
      - img
    - link "Test.allTheThings() T-Shirt (Red)":
      - /url: ./inventory-item.html?id=3
    - text: /This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests\\. Super-soft and comfy ringspun combed cotton\\. \\$\\d+\\.\\d+/
    - button "ADD TO CART"
    `);
  await expect(page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button')).toBeVisible();
  await expect(page.locator('.inventory_item').first()).toBeVisible();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.locator('#cart_contents_container')).toMatchAriaSnapshot(`
    - text: QTY DESCRIPTION 1
    - link "Sauce Labs Backpack":
      - /url: ./inventory-item.html?id=4
    - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\d+\\.\\d+/
    - button "REMOVE"
    - link "Continue Shopping":
      - /url: ./inventory.html
    - link "CHECKOUT":
      - /url: ./checkout-step-one.html
    `);
    await page.screenshot({ path: 'sl1ss.png', fullPage: true });
});