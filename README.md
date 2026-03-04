#  Senior QA Engineer – Real Work Challenge (SauceDemo + Playwright TS)

This repo contains:
- A **test design** document and **test cases** (pre-written) in `docs/`
- A Playwright + TypeScript UI automation skeleton using **Page Object Model (POM)**
- Two automated tests that map directly to the written test cases:
  - **TC01** Login success (Smoke)
  - **TC06** Checkout happy path (Critical E2E)

## Target application
- SauceDemo: https://www.saucedemo.com/

## Tech stack
- Playwright (`@playwright/test`)
- TypeScript
- POM (pages folder), test data in `data/`

---

## Setup

### Prerequisites
- Node.js 18+ recommended

### Install dependencies
```bash
npm install
npx playwright install --with-deps
```

### Run all tests
```bash
npx playwright test
```

### Run smoke tests only
```bash
npx playwright test --grep @smoke
```

### Open HTML report
```bash
npx playwright show-report
```

---

## Project structure
```
qa-challenge/
  docs/                     # test design + test cases
  pages/                    # page objects
  tests/                    # specs (automation)
  data/                     # users, constants
  utils/                    # helpers (optional)
  playwright.config.ts
```

---

## Notes on stability & best practices
- Prefer **role-based** locators (`getByRole`, `getByLabel`) to avoid brittle selectors.
- Use Playwright **auto-waits** and assertions (`expect(...)`) rather than manual sleeps.
- Keep test data centralized and environment-agnostic where possible.
- Fail fast on login / navigation issues (critical path).

---

## Mapping to evaluation rubric
- **Test Design (30):** `docs/test-design.md`
- **Test Case Writing (20):** `docs/test-cases.md`
- **Live Coding (30):** Implement/extend 1–2 cases from `docs/test-cases.md` (TC01/TC06 recommended)
- **Code Quality (20):** POM, naming conventions, assertions, organization, maintainability
