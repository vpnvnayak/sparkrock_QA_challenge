import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;

  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.postalCode = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.completeHeader = page.locator('.complete-header');
  }

  async fillCheckoutInfo(first: string, last: string, zip: string) {
    await expect(this.page).toHaveURL(/.*checkout-step-one\.html/);

    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueButton.click();

    await expect(this.page).toHaveURL(/.*checkout-step-two\.html/);
  }

  async finishCheckout() {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(/.*checkout-complete\.html/);
  }

  async expectSuccess() {
    await expect(this.completeHeader).toBeVisible();
    await expect(this.completeHeader).toContainText('Thank you for your order!');
  }
}
