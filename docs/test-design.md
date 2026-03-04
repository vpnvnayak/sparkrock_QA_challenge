# Test Design – SauceDemo UI Automation (Playwright TypeScript)

## Objective
Demonstrate senior-level quality engineering in:
- Test design & prioritization
- Clear test case writing
- UI automation implementation quality (maintainable, stable, scalable)

This suite is built using **Playwright + TypeScript** and follows a **Page Object Model (POM)** structure.

---

## Tool Selection (Why Playwright + TypeScript)
**Playwright** is well-suited for modern web UI automation because it provides:
- Strong **auto-waiting** behavior (reduces flakiness)
- Rich assertions and **trace/reporting**
- Fast execution and parallelization in CI
- Excellent developer experience in JS/TS ecosystem

---

## Application Selection (Why SauceDemo)
**SauceDemo** is a stable, public web application with realistic e-commerce workflows:
- Authentication gate
- Product browsing & sorting
- Cart management
- Checkout workflow (end-to-end purchase flow)

This supports business-relevant test design and demonstrates coverage across core user journeys.

Target: https://www.saucedemo.com/

---

## Scope & Critical User Journeys
### Highest risk (business critical)
1. **Login** (access control)
2. **Add to cart** (purchase intent)
3. **Checkout flow** (revenue path)

### Medium risk
4. Sorting/filtering (product discovery)
5. Cart updates (remove, quantity)

### Lower risk (still validated)
6. Basic UI validations and navigation

---

## Test Strategy (Risk-Based + Maintainable UI Suite)
### 1) Suite types
- **Smoke** (fast, CI-ready): essential flows to verify build health
- **Critical E2E**: one end-to-end checkout flow to validate the money path
- **Negative**: invalid login, locked-out user, validation errors

### 2) Test design principles
- Prefer **business-flow tests** (not pixel-level UI checks)
- Include **positive + negative + edge** coverage for high-risk areas
- Keep tests **independent** and deterministic (no inter-test dependency)

### 3) Test data strategy
SauceDemo provides known test users:
- `standard_user` – normal behavior
- `locked_out_user` – negative login scenario
- Optional: `problem_user` – demonstrates app quirks (use only if needed)

Credentials:
- Username: `standard_user`
- Password: `secret_sauce`

Centralize in `data/users.ts`.

### 4) Locator & stability strategy
- Prefer `getByRole()` and semantic locators
- Avoid brittle XPath/CSS where possible
- Use Playwright assertions to automatically wait for UI readiness

### 5) Automation architecture
- Page Objects in `pages/` for maintainability and readability
- Specs in `tests/` that reflect the written cases
- Minimal helper utilities to keep the suite simple and transparent

---

## Rationale (Why these tests)
- **TC01 (Login success)** verifies access to the app and is a prerequisite for all core actions.
- **TC06 (Checkout happy path)** validates the end-to-end flow that reflects business value.
- Negative cases (invalid/locked-out) ensure correctness of error handling and protect against regressions that impact users and support cost.
- Sorting/cart tests validate common UX flows and critical state updates.

---

## Automation selection for the Live Coding Video
To maximize clarity and relevance, automate exactly **1–2 tests**:
- **TC01 Login success (Smoke)**
- **TC06 Checkout happy path (Critical E2E)**

In the video:
1. Walk through this design document briefly
2. Show the pre-written cases
3. Implement/refine automation for TC01 and TC06
4. Run tests and show the HTML report
