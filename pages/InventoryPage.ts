import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryList: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.inventoryList).toBeVisible();
  }

  async addItemToCartByName(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await expect(item).toBeVisible();

    // Button text toggles between "Add to cart" and "Remove"
    await item.getByRole('button', { name: /add to cart/i }).click();
  }

  async openCart() {
    await expect(this.cartLink).toBeVisible();
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/.*cart\.html/);
  }
  async expectCartCount(count: number) {
    if (count === 0) {
      await expect(this.cartBadge).toHaveCount(0);
      return;
    }
    await expect(this.cartBadge).toHaveText(String(count));
  }
}
