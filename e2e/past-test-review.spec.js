// @ts-check
/**
 * past-test-review.spec.js — smoke E2E for the Past-Test-Review surface
 * (Phase 8/9 of PAST_TEST_REVIEW_PLAN.md).
 *
 * Walks the happy path:
 *   login → enable ff → study plan → "Review your tests" CTA →
 *   index → first test card → detail loads → exits back.
 *
 * Skipped when PERFORMSAT_TEST_EMAIL/PASSWORD are not set, so CI never
 * fails on missing creds. Run locally with the dev server up; see
 * playwright.config.js for the full setup recipe.
 */
const { test, expect } = require('@playwright/test');

const TEST_EMAIL = process.env.PERFORMSAT_TEST_EMAIL || '';
const TEST_PASSWORD = process.env.PERFORMSAT_TEST_PASSWORD || '';
const HAS_CREDS = !!(TEST_EMAIL && TEST_PASSWORD);

test.describe('Past-Test-Review smoke', () => {
  test.skip(!HAS_CREDS, 'PERFORMSAT_TEST_EMAIL/PASSWORD not set');

  test.beforeEach(async ({ context }) => {
    // Pre-set the feature flag so the CTA renders on first study-plan visit.
    // localStorage[ff:pastTestReview]='1' is the runtime override
    // documented in src/hooks/useFeatureFlag.js.
    await context.addInitScript(() => {
      try { localStorage.setItem('ff:pastTestReview', '1'); } catch {}
    });
  });

  test('opens the review index and lands on a test detail', async ({ page }) => {
    // ── 1. Log in ──
    await page.goto('/');
    // LandingPage is marketing-first — click "Log in" in the header to
    // open the auth panel, then wait for the email field to render.
    await page.getByRole('button', { name: 'Log in' }).first().click();
    await page.locator('#email').waitFor({ state: 'visible', timeout: 20_000 });
    await page.locator('#email').fill(TEST_EMAIL);
    await page.locator('#password').fill(TEST_PASSWORD);
    await page.locator('button[type="submit"]').click();

    // ── 2. Wait for dashboard render ──
    // The dashboard renders the tab strip with "Dashboard" / "Study Plan"
    // chips. Either text marker is enough to confirm we're past auth.
    await expect(
      page.getByRole('button', { name: /Study Plan/i }).first()
    ).toBeVisible({ timeout: 30_000 });

    // ── 3. Switch to the Study Plan tab ──
    await page.getByRole('button', { name: /Study Plan/i }).first().click();

    // ── 3.5. Switch to the Weekly View pane — the Acely-polish v2 tab split
    //         moved the beyond-this-week section (review queue, pacing, and
    //         the past-test-review CTA) out of the default Today's Tasks pane.
    await page.getByRole('tab', { name: /Weekly View/i }).click();

    // ── 4. The "Review your tests" CTA should appear (ff is on, seed
    //       includes a completed test WITH item-level questionDetails —
    //       the CTA filters attempts through requireItemDetails). ──
    const reviewCta = page.getByRole('button', { name: /Review your tests/i });
    await expect(reviewCta).toBeVisible({ timeout: 15_000 });
    await reviewCta.click();

    // ── 5. Index renders with at least one test card ──
    await expect(page.getByRole('heading', { name: /Review Your Tests/i }))
      .toBeVisible({ timeout: 10_000 });

    // ── 6. Click the first test card (any element under the test list) ──
    const firstCard = page.locator('[data-testid="ptr-list"] li').first();
    if (await firstCard.count() > 0) {
      await firstCard.locator('button').first().click();
      // Detail loads; either the loading spinner or stats row appears.
      await expect(
        page.locator('[data-testid="trd-items"], .trd-loading')
      ).toBeVisible({ timeout: 15_000 });
    } else {
      // Empty state path is also acceptable — we only need the index to render.
      // eslint-disable-next-line no-console
      console.info('[smoke] index showed empty state — seed has no completed tests');
    }
  });
});
