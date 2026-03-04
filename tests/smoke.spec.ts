import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { users } from "../data/users";

test.describe("Smoke Suite", () => {
  test("TC01 - Login success @smoke", async ({ page }) => {
    test.info().annotations.push({ type: "TestCase", description: "TC01" });
    test.info().annotations.push({ type: "Priority", description: "P0" });

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await test.step("Open login page", async () => {
      await login.goto();
    });

    await test.step("Login with valid credentials", async () => {
      await login.login(users.standard.username, users.standard.password);
    });

    await test.step("Verify inventory page loaded", async () => {
      await inventory.expectLoaded();
      await expect(page.locator(".title")).toHaveText("Products");
    });
  });
});