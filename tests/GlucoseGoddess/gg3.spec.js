import { test, expect } from '@playwright/test';

test('I can add 50 Bfast Ideas to cart', async ({ page }) => {
  await page.goto('https://www.glucosegoddess.com/?view=sl-00CE545D');
  await expect(page.getByRole('button', { name: 'Close dialog' })).toBeVisible();
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await expect(page.getByRole('button', { name: 'Menu' })).toBeVisible();
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(page.getByRole('button', { name: 'Shop' })).toBeVisible();
  await page.getByRole('button', { name: 'Shop' }).click();
  await expect(page.getByRole('link', { name: 'Breakfast Recipes' })).toBeVisible();
  await page.getByRole('link', { name: 'Breakfast Recipes' }).click();
  await expect(page.locator('#shopify-section-template--24390397034788__featured_product_8JPhLk')).toMatchAriaSnapshot(`
    - listitem:
      - button /\\d+ breakfast recipes/:
        - img /\\d+ breakfast recipes/
    - listitem:
      - button "Milkshake for breakfast to avoid sugar spikes":
        - img "Milkshake for breakfast to avoid sugar spikes"
    - listitem:
      - button "Toast for breakfast for reduce blood sugar levels":
        - img "Toast for breakfast for reduce blood sugar levels"
    - listitem:
      - button "Steady glucose recipes":
        - img "Steady glucose recipes"
    - listitem:
      - button "Glucose Goddess Breakfast ideas to control blood sugar":
        - img "Glucose Goddess Breakfast ideas to control blood sugar"
    - listitem:
      - button "Low gi breakfast ideas":
        - img "Low gi breakfast ideas"
    - listitem:
      - button "Breakfast recipe for regular glucose levels":
        - img "Breakfast recipe for regular glucose levels"
    - listitem:
      - button "Glucose Goddess recipe for baking eggs":
        - img "Glucose Goddess recipe for baking eggs"
    - listitem:
      - button "Savoury breakfast to balance blood sugar levels":
        - img "Savoury breakfast to balance blood sugar levels"
    - listitem:
      - button "Toast for breakfast for reduce blood sugar levels":
        - img "Toast for breakfast for reduce blood sugar levels"
    - listitem:
      - button "Low Gi recipes by Glucose Goddess":
        - img "Low Gi recipes by Glucose Goddess"
    - text: prev next
    - button /Rated 4\\.9 out of 5 stars \\d+ Reviews Click to scroll to reviews/
    - heading /\\d+ breakfast recipes/ [level=1]
    - paragraph:
      - text: ✅ To
      - strong: keep your glucose levels steady
      - text: and reduce cravings and fatigue for the rest of the day ✅
      - strong: Delivered instantly
      - text: via email in a PDF 📥 ✅ Vegan, vegetarian, gluten and dairy-free variations ✅ Just
      - strong: 6 ingredients
      - text: or fewer
    - paragraph: /👉 Recipes from the \\d+ and \\d+ GG Recipe Club/
    - button "Add to Cart": /Add to Cart ₱\\d+\\.\\d+/
    `);
  await expect(page.locator('#product-form-template--24390397034788__featured_product_8JPhLk').getByRole('button', { name: 'Add to Cart' })).toBeVisible();
  await page.locator('#product-form-template--24390397034788__featured_product_8JPhLk').getByRole('button', { name: 'Add to Cart' }).click();
  await expect(page.getByText('Your cart - 1 item')).toBeVisible();
  await expect(page.getByText('breakfast recipes Quantity: Quantity: ₱800.00 undefined Subtotal ₱800.00 PHP')).toBeVisible();
  await expect(page.locator('#cart-drawer-content')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link /\\d+ breakfast recipes/:
          - /url: /products/50-steady-glucose-breakfasts-recipes?variant=50170719568164
          - paragraph: /\\d+ breakfast recipes/
        - text: "Quantity:"
        - button "−":
          - img
        - 'spinbutton "Quantity: Quantity:"'
        - button "+":
          - img
        - text: /₱\\d+\\.\\d+/
    - status: undefined
    - term: Subtotal
    - definition: /₱\\d+\\.\\d+ PHP/
    - paragraph: Shipping & taxes calculated at checkout
    - img /\\d+ veggie starter recipes/
    - paragraph: /\\d+ veggie starter recipes/
    - paragraph: Receive via email Good for your glucose 6 ingredients or less
    - button /Add - ₱\\d+\\.\\d+/
    - button "CONTINUE"
    - paragraph:
      - text: By ordering, you agree to our
      - link "Terms":
        - /url: https://www.glucosegoddess.com/terms-of-service
      - text: and
      - link "Privacy Policy":
        - /url: https://www.glucosegoddess.com/privacy-policy
    `);
});