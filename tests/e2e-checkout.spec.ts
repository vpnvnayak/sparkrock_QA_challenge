import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { users } from "../data/users";

test.describe("E2E Suite", () => {
  test("TC06 - Checkout happy path @smoke", async ({ page }) => {
    test.info().annotations.push({ type: "TestCase", description: "TC06" });
    test.info().annotations.push({ type: "Priority", description: "P0" });
    test.info().annotations.push({ type: "Module", description: "Checkout" });

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await test.step("Login to application", async () => {
      await login.goto();
      await login.login(users.standard.username, users.standard.password);
      await inventory.expectLoaded();
    });

    await test.step("Add Sauce Labs Backpack to cart", async () => {
      await inventory.addItemToCartByName("Sauce Labs Backpack");
      await inventory.expectCartCount(1);
    });

    await test.step("Open cart and verify item", async () => {
      await inventory.openCart();
      await cart.expectLoaded();
      await cart.expectItemPresent("Sauce Labs Backpack");
    });

    await test.step("Checkout with user info", async () => {
      await cart.checkout();
      await checkout.fillCheckoutInfo("Vipin", "AV", "12345");
    });

    await test.step("Finish order and verify success", async () => {
      await checkout.finishCheckout();
      await checkout.expectSuccess();
    });
  });
});