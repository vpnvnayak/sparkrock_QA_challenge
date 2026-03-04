# Test Cases – SauceDemo (UI)

> Conventions:
- **Priority:** P0 (critical), P1 (high), P2 (medium)
- **Type:** Smoke / Functional / Negative / Edge
- **Preconditions:** User has access to https://www.saucedemo.com/

---

## TC01 – Login success (Smoke) @smoke
**Priority:** P0 | **Type:** Smoke  
**Steps:**
1. Open SauceDemo login page
2. Enter username `standard_user`
3. Enter password `secret_sauce`
4. Click **Login**
**Expected:**
- User lands on **Inventory** page
- Inventory list is visible

---

## TC02 – Login failure with invalid credentials (Negative)
**Priority:** P1 | **Type:** Negative  
**Steps:**
1. Open login page
2. Enter invalid username/password
3. Click **Login**
**Expected:**
- Error message displayed (e.g., “Username and password do not match…”)

---

## TC03 – Locked out user cannot login (Negative)
**Priority:** P1 | **Type:** Negative  
**Steps:**
1. Open login page
2. Login with `locked_out_user` / `secret_sauce`
**Expected:**
- Error message indicates user is locked out

---

## TC04 – Add single item to cart (Functional) @smoke
**Priority:** P0 | **Type:** Functional/Smoke  
**Steps:**
1. Login as `standard_user`
2. On inventory page, add **Sauce Labs Backpack** to cart
**Expected:**
- Cart badge shows **1**
- Cart contains the selected item

---

## TC05 – Remove item from cart (Functional)
**Priority:** P1 | **Type:** Functional  
**Steps:**
1. Login as `standard_user`
2. Add any item to cart
3. Open cart
4. Click **Remove**
**Expected:**
- Item removed
- Cart badge updates accordingly (or disappears)

---

## TC06 – Checkout happy path (Critical E2E) @smoke
**Priority:** P0 | **Type:** Critical E2E/Smoke  
**Steps:**
1. Login as `standard_user`
2. Add **Sauce Labs Backpack** to cart
3. Open cart and click **Checkout**
4. Enter checkout info:
   - First Name: `Vipin`
   - Last Name: `AV`
   - Zip/Postal: `12345`
5. Click **Continue**
6. Verify overview page shows item(s) and total
7. Click **Finish**
**Expected:**
- Checkout completes
- Success message is displayed (e.g., “THANK YOU FOR YOUR ORDER”)

---

## TC07 – Checkout validation (Negative)
**Priority:** P1 | **Type:** Negative  
**Steps:**
1. Login and add an item to cart
2. Proceed to checkout
3. Leave First Name empty and click Continue
**Expected:**
- Validation message indicates missing required field

---

## TC08 – Sort products by price low to high (Functional)
**Priority:** P2 | **Type:** Functional  
**Steps:**
1. Login as `standard_user`
2. Select sort “Price (low to high)”
**Expected:**
- First item price <= second item price (ascending)

---

## TC09 – Logout and session protection (Edge)
**Priority:** P2 | **Type:** Edge  
**Steps:**
1. Login as `standard_user`
2. Logout from menu
3. Attempt to navigate back to inventory URL
**Expected:**
- User should be redirected to login (or prevented from accessing inventory)

---

## TC10 – Inventory UI sanity (Functional)
**Priority:** P2 | **Type:** Functional  
**Steps:**
1. Login as `standard_user`
2. Validate for first 3 items:
   - Name is visible
   - Price is visible
   - Add to cart button is present
**Expected:**
- Core UI elements appear correctly
