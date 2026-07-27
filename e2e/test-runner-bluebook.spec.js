// @ts-check
/**
 * test-runner-bluebook.spec.js — pins the Bluebook behavioral-parity contract
 * of the full-length test runner (shipped 2026-07-27, commit 1d31732).
 *
 * One linear journey (the runner is stateful; splitting it would repeat the
 * slow login+launch for every assertion):
 *   login → start timed test → section DIRECTIONS auto-open →
 *   ABC eliminator (hidden controls → toggle → cross-out persists,
 *   crossed-out unselectable) → answer → jump to last question →
 *   CHECK YOUR WORK page → module complete → Module 2 → BREAK screen
 *   (10:00 countdown, early resume) → Math directions → SPR input rules
 *   (charset, structure, length caps, Answer Preview) → Save & Leave →
 *   resume restores the module.
 *
 * Runs against the EMULATOR stack (auth+firestore emulators + seeded demo
 * student). Locally:
 *   npm run dev:emulator   # shell A
 *   npm run dev:seed       # shell B
 *   npm start              # shell C
 *   npm run test:e2e       # shell D
 * In CI the `e2e` job orchestrates the same stack against a production build.
 *
 * Credentials default to the seeded demo student; PERFORMSAT_TEST_EMAIL /
 * PERFORMSAT_TEST_PASSWORD override them (e.g. to point at a preview env).
 */
const { test, expect } = require('@playwright/test');

const TEST_EMAIL = process.env.PERFORMSAT_TEST_EMAIL || 'demo-student@performsat.local';
const TEST_PASSWORD = process.env.PERFORMSAT_TEST_PASSWORD || 'demo-password-123';

// The whole journey walks four screens of a 98-question test; give it room.
test.setTimeout(240_000);

test.describe('Test runner — Bluebook behavioral parity', () => {
  test('directions → eliminator → review page → break → SPR → save/resume', async ({ page }) => {
    // ── 1. Log in ──
    await page.goto('/');
    await page.getByRole('button', { name: 'Log in' }).first().click();
    await page.locator('#email').waitFor({ state: 'visible', timeout: 20_000 });
    await page.locator('#email').fill(TEST_EMAIL);
    await page.locator('#password').fill(TEST_PASSWORD);
    await page.locator('button[type="submit"]').click();
    await expect(
      page.getByRole('button', { name: /Study Plan/i }).first()
    ).toBeVisible({ timeout: 30_000 });

    // ── 2. Start a fresh timed full-length test ──
    await page.getByRole('button', { name: 'Tests' }).first().click();
    await page.getByRole('button', { name: 'Start test' }).first().click();
    // The card expands into a Timed / Untimed picker; choosing Timed launches.
    await page.getByRole('button', { name: /Timed/ }).first().click();

    // ── 3. Section directions auto-open on a fresh test; clock runs behind ──
    await expect(page.getByText(/Reading and Writing — Directions/)).toBeVisible({ timeout: 30_000 });
    await page.getByRole('button', { name: 'Begin' }).click();
    await expect(page.locator('.header-title')).toHaveText(/Reading and Writing Module 1/);

    // ── 4. ABC answer eliminator (Bluebook toggle semantics) ──
    // Controls hidden until the tool is on.
    await expect(page.locator('.answer-crossout')).toHaveCount(0);
    await page.getByRole('button', { name: 'ABC' }).click();
    await expect(page.locator('.answer-crossout')).toHaveCount(4);
    // Cross out choice B; strikethrough persists after toggling the tool off.
    await page.locator('.answer-crossout').nth(1).click();
    await expect(page.locator('.answer-choice-card.is-eliminated')).toHaveCount(1);
    await page.getByRole('button', { name: 'ABC' }).click();
    await expect(page.locator('.answer-crossout')).toHaveCount(0);
    await expect(page.locator('.answer-choice-card.is-eliminated')).toHaveCount(1);
    // A crossed-out choice cannot be selected.
    await page.locator('.answer-choice-card').nth(1).click({ force: true });
    await expect(page.locator('.answer-choice-card.is-selected')).toHaveCount(0);

    // ── 5. Answer Q1, jump to the last question ──
    await page.locator('.answer-choice-card').first().click();
    await expect(page.locator('.answer-choice-card.is-selected')).toHaveCount(1);
    await page.locator('.nav-grid-item', { hasText: /^27$/ }).click();

    // ── 6. Next on the last question → Check Your Work (never straight out) ──
    await page.locator('.test-session-bottom-bar .bottom-bar-right button', { hasText: 'Next' }).click();
    await expect(page.getByRole('heading', { name: 'Check Your Work' })).toBeVisible();
    // Grid navigates back into the module…
    await page.locator('.test-review-check .nav-grid-item', { hasText: /^5$/ }).click();
    await expect(page.locator('.header-subtitle')).toHaveText(/Question 5 of 27/);
    // …and the navigator popover links back to the review page.
    await page.locator('.question-grid-toggle').click();
    await page.getByRole('button', { name: 'Go to Review Page' }).click();
    await expect(page.getByRole('heading', { name: 'Check Your Work' })).toBeVisible();

    // ── 7. Leave the module from the review page → interstitial → Module 2 ──
    await page.locator('.test-review-check button', { hasText: /^Next$/ }).click();
    await page.getByRole('button', { name: /Continue to Reading and Writing Module 2/ }).click();
    await expect(page.locator('.header-title')).toHaveText(/Reading and Writing Module 2/);

    // ── 8. Finish R&W Module 2 → the 10-minute BREAK screen ──
    await page.locator('.nav-grid-item', { hasText: /^27$/ }).click();
    await page.locator('.test-session-bottom-bar .bottom-bar-right button', { hasText: 'Next' }).click();
    await page.locator('.test-review-check button', { hasText: /^Next$/ }).click();
    await expect(page.getByRole('heading', { name: /Take a 10-minute break/ })).toBeVisible();
    // Countdown is live (10:00 → 09:xx within a couple of seconds).
    await expect(page.getByText(/09:5\d/)).toBeVisible({ timeout: 10_000 });
    await page.getByRole('button', { name: /Resume Testing/ }).click();

    // ── 9. Math section directions auto-open after the break ──
    await expect(page.getByText(/Math — Directions/)).toBeVisible();
    await expect(page.getByText(/Student-produced responses/)).toBeVisible();
    await page.getByRole('button', { name: 'Begin' }).click();
    await expect(page.locator('.header-title')).toHaveText(/Math Module 1/);

    // ── 10. SPR (grid-in) input rules on the first fill-in question ──
    const chips = page.locator('.nav-grid-item');
    const chipCount = await chips.count();
    const sprInput = page.locator('input[placeholder="Enter your answer"]');
    for (let i = 0; i < chipCount; i++) {
      await chips.nth(i).click();
      if (await sprInput.count()) break;
    }
    await expect(sprInput).toBeVisible();
    // Structural rules: one '.', one '/', 5-char cap.
    await sprInput.fill('12.3.4/5/6');
    await expect(sprInput).toHaveValue('12.34');
    // Leading minus only; 6-char cap when negative.
    await sprInput.fill('-1234567');
    await expect(sprInput).toHaveValue('-12345');
    await sprInput.fill('5-3');
    await expect(sprInput).toHaveValue('53');
    // Live Answer Preview echoes what will be graded.
    await sprInput.fill('3.5');
    await expect(page.getByText('Answer Preview:')).toBeVisible();

    // ── 11. Save & Leave, then resume lands back in Math Module 1 ──
    await page.locator('button.test-exit-btn').click();
    await page.getByRole('button', { name: 'Save & Leave' }).click();
    await expect(page.getByRole('button', { name: 'Continue' }).first()).toBeVisible({ timeout: 20_000 });
    await page.getByRole('button', { name: 'Continue' }).first().click();
    await expect(page.locator('.header-title')).toHaveText(/Math Module 1/, { timeout: 20_000 });
    // Resumed session: directions must NOT re-open (savedProgress exists).
    await expect(page.getByRole('button', { name: 'Begin' })).toHaveCount(0);
  });
});
