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
  mapStripeStatus,
  planFromPriceId,
  subscriptionToEntitlementPatch,
  shouldApplyEvent,
  hasAccessMs,
  isGrandfathered,
  shouldGrandfatherExisting,
  subscriptionPatchUsedTrial,
  trialDaysForCheckout,
} = require("../lib/stripePolicy");

const NOW = Date.parse("2026-07-15T12:00:00Z");
const MONTHLY = "price_monthly_test";
const ANNUAL = "price_annual_test";

// TRIAL_DAYS is the source of truth reused by createCheckoutSession's
// subscription_data.trial_period_days — pin it so a stray edit is caught.
test("trial length constant is 7 days", () => {
  assert.strictEqual(TRIAL_DAYS, 7);
});

// ── mapStripeStatus ──────────────────────────────────────────────────────

test("stripe status mapping covers every documented status", () => {
  assert.strictEqual(mapStripeStatus("active"), "active");
  // Card-up-front: "trialing" is now first-class (was mapped to "active").
  assert.strictEqual(mapStripeStatus("trialing"), "trialing");
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
    trialEndsAtMs: null,
    cancelAtPeriodEnd: false,
  });
});

test("subscription -> patch: trialing carries trial_end (card-up-front)", () => {
  const trialEndSec = Math.floor((NOW + 7 * DAY_MS) / 1000);
  const patch = subscriptionToEntitlementPatch({
    id: "sub_trial",
    status: "trialing",
    cancel_at_period_end: false,
    trial_end: trialEndSec,
    // during a trial Stripe sets current_period_end == trial_end
    items: {data: [{price: {id: ANNUAL}, current_period_end: trialEndSec}]},
  }, MONTHLY, ANNUAL);
  assert.strictEqual(patch.status, "trialing");
  assert.strictEqual(patch.plan, "annual");
  assert.strictEqual(patch.trialEndsAtMs, trialEndSec * 1000);
  assert.strictEqual(patch.currentPeriodEndMs, trialEndSec * 1000);
});

test("subscription -> patch: trialing + cancel_at_period_end (canceled " +
  "during trial keeps access until trial_end)", () => {
  const trialEndSec = Math.floor((NOW + 4 * DAY_MS) / 1000);
  const patch = subscriptionToEntitlementPatch({
    id: "sub_trial_cancel",
    status: "trialing",
    cancel_at_period_end: true,
    trial_end: trialEndSec,
    items: {data: [{price: {id: MONTHLY}, current_period_end: trialEndSec}]},
  }, MONTHLY, ANNUAL);
  assert.strictEqual(patch.status, "trialing");
  assert.strictEqual(patch.cancelAtPeriodEnd, true);
  assert.strictEqual(patch.trialEndsAtMs, trialEndSec * 1000);
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
  assert.strictEqual(patch.trialEndsAtMs, null);
  assert.strictEqual(patch.cancelAtPeriodEnd, false);
});

// ── subscriptionPatchUsedTrial (one-trial-per-customer marker) ───────────

test("trial marker: trialing status implies a trial was used", () => {
  assert.strictEqual(
    subscriptionPatchUsedTrial({status: "trialing", trialEndsAtMs: null}),
    true,
  );
});

test("trial marker: a trial_end (even after conversion to active) counts", () => {
  // Stripe keeps trial_end on the subscription after it converts, so an
  // active-with-trial_end subscription must still mark the customer as having
  // used their trial (durable).
  assert.strictEqual(
    subscriptionPatchUsedTrial({status: "active", trialEndsAtMs: NOW}),
    true,
  );
});

test("trial marker: a never-trialed subscription does NOT mark trialUsed", () => {
  assert.strictEqual(
    subscriptionPatchUsedTrial({status: "active", trialEndsAtMs: null}),
    false,
  );
  assert.strictEqual(
    subscriptionPatchUsedTrial({status: "past_due", trialEndsAtMs: null}),
    false,
  );
  assert.strictEqual(
    subscriptionPatchUsedTrial({status: "canceled", trialEndsAtMs: null}),
    false,
  );
});

// ── trialDaysForCheckout (block a second free trial) ─────────────────────

test("checkout trial: a fresh customer gets the full trial", () => {
  assert.strictEqual(trialDaysForCheckout(null), TRIAL_DAYS);
  assert.strictEqual(trialDaysForCheckout(undefined), TRIAL_DAYS);
  assert.strictEqual(trialDaysForCheckout({}), TRIAL_DAYS);
  assert.strictEqual(trialDaysForCheckout({trialUsed: false}), TRIAL_DAYS);
});

test("checkout trial: a customer who already trialed gets NO trial (null)", () => {
  // The exploit this closes: a canceled customer re-running Checkout on the
  // same Stripe customer would otherwise get a brand-new 7-day trial forever.
  assert.strictEqual(trialDaysForCheckout({trialUsed: true}), null);
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

test("access: trialing always has access (Stripe owns the clock)", () => {
  // Card-up-front: a "trialing" subscription means the card is on file and
  // Stripe will flip the status at trial_end — access does NOT re-gate on a
  // local clock (that would risk locking a paying customer mid-transition).
  assert.strictEqual(
    hasAccessMs({status: "trialing", trialEndsAtMs: NOW + DAY_MS}, NOW),
    true,
  );
  assert.strictEqual(
    hasAccessMs({status: "trialing", trialEndsAtMs: NOW - 1}, NOW),
    true,
  );
  assert.strictEqual(
    hasAccessMs({status: "trialing", trialEndsAtMs: null}, NOW),
    true,
  );
});

test("access: active and past_due always have access", () => {
  assert.strictEqual(hasAccessMs({status: "active"}, NOW), true);
  assert.strictEqual(hasAccessMs({status: "past_due"}, NOW), true);
});

test("access: the no-access seed state ('none') locks", () => {
  // ensureEntitlement seeds this until Checkout completes — no card, no access.
  assert.strictEqual(hasAccessMs({status: "none"}, NOW), false);
  assert.strictEqual(
    hasAccessMs({status: "none", trialEndsAtMs: NOW + 30 * DAY_MS}, NOW),
    false,
  );
});

test("access: comped (grandfathered) always has access, no billing fields", () => {
  // The free early-access cohort: permanent access with no subscription, no
  // trial clock, no period end. Must never lock regardless of other fields.
  assert.strictEqual(hasAccessMs({status: "comped"}, NOW), true);
  assert.strictEqual(
    hasAccessMs({status: "comped", currentPeriodEndMs: NOW - 999 * DAY_MS}, NOW),
    true,
  );
  assert.strictEqual(
    hasAccessMs({status: "comped", trialEndsAtMs: null}, NOW),
    true,
  );
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

// ── isGrandfathered (existing-user grandfather rule) ─────────────────────

test("grandfather: accounts created before the launch epoch are comped", () => {
  const epoch = Date.parse("2026-07-04T00:00:00Z");
  const before = Date.parse("2026-07-01T09:00:00Z");
  const after = Date.parse("2026-07-05T09:00:00Z");
  assert.strictEqual(isGrandfathered(before, epoch), true);
  assert.strictEqual(isGrandfathered(after, epoch), false);
  // Exactly-at-epoch is a NEW user (billed) — boundary is strict "<".
  assert.strictEqual(isGrandfathered(epoch, epoch), false);
});

test("grandfather: missing/unparseable inputs are NOT grandfathered", () => {
  // Conservative: a bad clock must never silently comp every new signup and
  // quietly disable billing. (Existing users are still protected because the
  // hard-gate never walls on a failed seed — see App.jsx hasEntitlementDoc.)
  const epoch = Date.parse("2026-07-04T00:00:00Z");
  assert.strictEqual(isGrandfathered(null, epoch), false);
  assert.strictEqual(isGrandfathered(undefined, epoch), false);
  assert.strictEqual(isGrandfathered(NaN, epoch), false);
  assert.strictEqual(isGrandfathered(1_000_000, null), false);
  assert.strictEqual(isGrandfathered(1_000_000, NaN), false);
});

// ── shouldGrandfatherExisting (self-heal a stale pre-grandfather doc) ─────

test("self-heal: upgrades a pre-launch account's stale trialing/none doc", () => {
  // The exact bug: an old no-card "trialing" doc on a grandfathered account.
  assert.strictEqual(
    shouldGrandfatherExisting({status: "trialing"}, true), true);
  assert.strictEqual(
    shouldGrandfatherExisting({status: "none"}, true), true);
  // No-Stripe fields present but null — still heals.
  assert.strictEqual(
    shouldGrandfatherExisting(
      {status: "trialing", stripeCustomerId: null, subscriptionId: null},
      true), true);
});

test("self-heal: never touches a non-grandfathered account", () => {
  // A post-launch account on a trial must keep its trial.
  assert.strictEqual(shouldGrandfatherExisting({status: "trialing"}, false), false);
  assert.strictEqual(shouldGrandfatherExisting({status: "none"}, false), false);
});

test("self-heal: no-op when already comped", () => {
  assert.strictEqual(shouldGrandfatherExisting({status: "comped"}, true), false);
});

test("self-heal: never overwrites a real Stripe-backed doc", () => {
  // Load-bearing: a pre-launch account that later ran Checkout has a real
  // subscription owned by the webhook — comping it here could free a paying
  // account or race a subscription event. Left for manual handling.
  assert.strictEqual(
    shouldGrandfatherExisting(
      {status: "trialing", subscriptionId: "sub_123"}, true), false);
  assert.strictEqual(
    shouldGrandfatherExisting(
      {status: "active", stripeCustomerId: "cus_123"}, true), false);
});

test("self-heal: null/undefined doc is a safe no-op", () => {
  assert.strictEqual(shouldGrandfatherExisting(null, true), false);
  assert.strictEqual(shouldGrandfatherExisting(undefined, true), false);
});
