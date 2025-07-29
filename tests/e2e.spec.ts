import { test, expect } from "@playwright/test";

test("should show add to cart button", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

test("Swag labs text should be visible", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await expect(page.locator("text=Swag Labs")).toBeVisible();
});