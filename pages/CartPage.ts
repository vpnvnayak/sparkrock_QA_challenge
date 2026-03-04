import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/.*cart\.html/);
    await expect(this.checkoutButton).toBeVisible();
  }

  async expectItemPresent(itemName: string) {
    const item = this.page.locator('.cart_item').filter({ hasText: itemName });
    await expect(item).toBeVisible();
  }

  async checkout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/.*checkout-step-one\.html/);
  }
}
