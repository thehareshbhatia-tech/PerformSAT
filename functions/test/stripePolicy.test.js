/**
 * Tests for the billing/entitlement policy (trial math, Stripe status
 * mapping, webhook ordering, and the access rule). Runs against the compiled
 * output with Node's built-in test runner — zero extra deps. Run with:
 * npm test (which builds first).
 */
const test = require("node:test");
const assert = require("node:assert");
const {
  TRIAL_DAYS,
  DAY_MS,
  computeTrialEndMs,
  mapStripeStatus,
  planFromPriceId,
  subscriptionToEntitlementPatch,
  shouldApplyEvent,
  hasAccessMs,
} = require("../lib/stripePolicy");

const NOW = Date.parse("2026-07-15T12:00:00Z");
const LAUNCH = Date.parse("2026-07-10T00:00:00Z");
const MONTHLY = "price_monthly_test";
const ANNUAL = "price_annual_test";

// ── computeTrialEndMs ────────────────────────────────────────────────────

test("trial end: new account (created after launch) gets created + 7d", () => {
  const created = LAUNCH + 3 * DAY_MS;
  assert.strictEqual(
    computeTrialEndMs(created, LAUNCH),
    created + TRIAL_DAYS * DAY_MS,
  );
});

test("trial end: pre-existing account gets launch + 7d (decision D7)", () => {
  const created = LAUNCH - 90 * DAY_MS; // signed up long before the paywall
  assert.strictEqual(
    computeTrialEndMs(created, LAUNCH),
    LAUNCH + TRIAL_DAYS * DAY_MS,
  );
});

test("trial end: garbage inputs degrade to the other operand", () => {
  assert.strictEqual(
    computeTrialEndMs(0, LAUNCH),
    LAUNCH + TRIAL_DAYS * DAY_MS,
  );
  assert.strictEqual(
    computeTrialEndMs(NOW, 0),
    NOW + TRIAL_DAYS * DAY_MS,
  );
});

// ── mapStripeStatus ──────────────────────────────────────────────────────

test("stripe status mapping covers every documented status", () => {
  assert.strictEqual(mapStripeStatus("active"), "active");
  assert.strictEqual(mapStripeStatus("trialing"), "active");
  assert.strictEqual(mapStripeStatus("past_due"), "past_due");
  assert.strictEqual(mapStripeStatus("canceled"), "canceled");
  assert.strictEqual(mapStripeStatus("unpaid"), "canceled");
  assert.strictEqual(mapStripeStatus("incomplete"), "canceled");
  assert.strictEqual(mapStripeStatus("incomplete_expired"), "canceled");
  assert.strictEqual(mapStripeStatus("paused"), "canceled");
  assert.strictEqual(mapStripeStatus(""), "canceled");
});

// ── planFromPriceId ──────────────────────────────────────────────────────

test("plan resolution: monthly, annual, unknown, missing", () => {
  assert.strictEqual(planFromPriceId(MONTHLY, MONTHLY, ANNUAL), "monthly");
  assert.strictEqual(planFromPriceId(ANNUAL, MONTHLY, ANNUAL), "annual");
  assert.strictEqual(planFromPriceId("price_other", MONTHLY, ANNUAL), null);
  assert.strictEqual(planFromPriceId(undefined, MONTHLY, ANNUAL), null);
});

// ── subscriptionToEntitlementPatch ───────────────────────────────────────

test("subscription -> patch: active monthly with period end", () => {
  const periodEndSec = Math.floor((NOW + 30 * DAY_MS) / 1000);
  const patch = subscriptionToEntitlementPatch({
    id: "sub_123",
    status: "active",
    cancel_at_period_end: false,
    current_period_end: periodEndSec,
    items: {data: [{price: {id: MONTHLY}}]},
  }, MONTHLY, ANNUAL);
  assert.deepStrictEqual(patch, {
    status: "active",
    plan: "monthly",
    subscriptionId: "sub_123",
    currentPeriodEndMs: periodEndSec * 1000,
    cancelAtPeriodEnd: false,
  });
});

test("subscription -> patch: canceled annual keeps period end + flag", () => {
  const periodEndSec = Math.floor((NOW + 200 * DAY_MS) / 1000);
  const patch = subscriptionToEntitlementPatch({
    id: "sub_456",
    status: "canceled",
    cancel_at_period_end: true,
    current_period_end: periodEndSec,
    items: {data: [{price: {id: ANNUAL}}]},
  }, MONTHLY, ANNUAL);
  assert.strictEqual(patch.status, "canceled");
  assert.strictEqual(patch.plan, "annual");
  assert.strictEqual(patch.cancelAtPeriodEnd, true);
  assert.strictEqual(patch.currentPeriodEndMs, periodEndSec * 1000);
});

test("subscription -> patch: item-level period end (2025-03+ API shape)", () => {
  // Live-verified 2026-07-01: newer Stripe API versions omit the top-level
  // current_period_end and put it on the subscription ITEM instead.
  const periodEndSec = Math.floor((NOW + 365 * DAY_MS) / 1000);
  const patch = subscriptionToEntitlementPatch({
    id: "sub_new_api",
    status: "active",
    cancel_at_period_end: false,
    // no top-level current_period_end
    items: {data: [{price: {id: ANNUAL}, current_period_end: periodEndSec}]},
  }, MONTHLY, ANNUAL);
  assert.strictEqual(patch.currentPeriodEndMs, periodEndSec * 1000);
  assert.strictEqual(patch.plan, "annual");
});

test("subscription -> patch: top-level period end wins when both exist", () => {
  const topSec = 2000000000;
  const itemSec = 2100000000;
  const patch = subscriptionToEntitlementPatch({
    id: "sub_both",
    status: "active",
    current_period_end: topSec,
    items: {data: [{price: {id: MONTHLY}, current_period_end: itemSec}]},
  }, MONTHLY, ANNUAL);
  assert.strictEqual(patch.currentPeriodEndMs, topSec * 1000);
});

test("subscription -> patch: missing items/period end degrade to nulls", () => {
  const patch = subscriptionToEntitlementPatch(
    {id: "sub_789", status: "past_due"}, MONTHLY, ANNUAL,
  );
  assert.strictEqual(patch.status, "past_due");
  assert.strictEqual(patch.plan, null);
  assert.strictEqual(patch.currentPeriodEndMs, null);
  assert.strictEqual(patch.cancelAtPeriodEnd, false);
});

// ── shouldApplyEvent (webhook ordering guard) ────────────────────────────

test("event ordering: first event always applies", () => {
  assert.strictEqual(shouldApplyEvent(1000, null), true);
  assert.strictEqual(shouldApplyEvent(1000, undefined), true);
});

test("event ordering: newer and same-second apply, older is skipped", () => {
  assert.strictEqual(shouldApplyEvent(2000, 1000), true);
  assert.strictEqual(shouldApplyEvent(1000, 1000), true); // idempotent replay
  assert.strictEqual(shouldApplyEvent(999, 1000), false); // stale event
});

// ── hasAccessMs (THE access rule) ────────────────────────────────────────

test("access: trialing before/after the clock", () => {
  assert.strictEqual(
    hasAccessMs({status: "trialing", trialEndsAtMs: NOW + DAY_MS}, NOW),
    true,
  );
  assert.strictEqual(
    hasAccessMs({status: "trialing", trialEndsAtMs: NOW - 1}, NOW),
    false,
  );
  assert.strictEqual(
    hasAccessMs({status: "trialing", trialEndsAtMs: null}, NOW),
    false,
  );
});

test("access: active and past_due always have access", () => {
  assert.strictEqual(hasAccessMs({status: "active"}, NOW), true);
  assert.strictEqual(hasAccessMs({status: "past_due"}, NOW), true);
});

test("access: canceled honors a still-future period end, else locks", () => {
  assert.strictEqual(
    hasAccessMs(
      {status: "canceled", currentPeriodEndMs: NOW + 5 * DAY_MS}, NOW,
    ),
    true,
  );
  assert.strictEqual(
    hasAccessMs({status: "canceled", currentPeriodEndMs: NOW - 1}, NOW),
    false,
  );
  assert.strictEqual(
    hasAccessMs({status: "canceled", currentPeriodEndMs: null}, NOW),
    false,
  );
});

test("access: null doc and unknown status lock", () => {
  assert.strictEqual(hasAccessMs(null, NOW), false);
  assert.strictEqual(hasAccessMs({status: "weird"}, NOW), false);
  assert.strictEqual(hasAccessMs({}, NOW), false);
});
