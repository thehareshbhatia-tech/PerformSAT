# Changelog

All notable changes to PerformSAT are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [Semantic Versioning](https://semver.org/).

## [3.1.0] - 2026-05-10

### Added
- **Past-Test-Review tier** — students with completed practice tests can now click "Review your tests" on the Study Plan to see every item from a past attempt explained, with the same 6-class error taxonomy used in their diagnostic. Behind `useFeatureFlag('pastTestReview')` for the rollout. Wrong items can be retried as a focused drill that runs through `AssignedPracticeShell` with a clear "Review session" banner and is isolated from the Predicted vs Actual prediction engine. Plan: `docs/PAST_TEST_REVIEW_PLAN.md`.
- **Per-item navigation** in Past-Test-Review — Previous / Next within the wrong-items list lets students sweep their incorrect answers without bouncing to the test detail.
- **Snapshot-missing notice** — legacy attempts (no per-attempt subcollection write) now surface a clear warning that question text is from the current test and may differ from what the student saw, and the retry CTA is correctly disabled for those attempts.
- **Telemetry events** under `[performsat:pastTestReview]` scope: `opened`, `test_selected`, `item_reviewed`, `retry_started`, `retry_dropped`, `retry_completed`. Pre-shaped for analytics integration.
- **Playwright E2E framework** — minimum viable smoke test (`e2e/past-test-review.spec.js`) for the Past-Test-Review happy path. Skips when `PERFORMSAT_TEST_EMAIL`/`PASSWORD` env vars aren't set. Run with `npm run test:e2e`.

### Fixed
- **Two long-standing baseline test failures** — `diagnosticAdapter.test.js` (transitions block: added missing `transition` field to the `remediationPath` block + updated test order) and `diagnosticNarrativeContract.test.js` (Firebase/undici jest load: added `src/setupTests.js` polyfilling TextEncoder/TextDecoder/ReadableStream + a per-file Firebase mock). All 853 tests now pass cleanly.
- **Race condition** in the past-test-review fetch — rapid double-click on different test cards no longer causes earlier fetches to clobber later ones (request-ID guard in `handleSelectReviewTest`).
- **Telemetry accuracy** — `item_reviewed` no longer logs an `errorClass` for items the student got correct (the 6-class taxonomy is meaningless for correct items).
- **Diagnostic narrative tone** — the new "remediationPath" transition string was rewritten from aspirational ("from your weak skills to mastery") to narrative ("Each weak skill below maps to specific lessons:"), per the project's diagnostic-content principle.

### Changed
- `getCompletedTests` selector now accepts `{ requireItemDetails: true }` and returns `hasItemDetails` per entry, so the Study Plan CTA only counts attempts that actually have wrong-answer breakdowns to surface.
- `findErrorClassForItem` selector accepts either an `attempt` (rebuild groups) or a precomputed groups object (fast path) as its second argument, so callers that already memoize the groups don't pay the rebuild cost.

### For contributors
- New `src/setupTests.js` polyfills TextEncoder/TextDecoder + `stream/web` globals so any test transitively importing `firebase/auth` (via undici) loads cleanly under jsdom. Document inside the file explains the per-file `jest.mock('firebase/config')` convention.
- Playwright config + Chromium browser now installed. See `playwright.config.js` for the run recipe.
