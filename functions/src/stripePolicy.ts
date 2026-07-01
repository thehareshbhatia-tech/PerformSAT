/**
 * Pure billing/entitlement policy — no Firebase or Stripe SDK imports, so it
 * is unit-testable with node --test (same pattern as reengagementPolicy.ts).
 *
 * The entitlement model (spec 2026-07-01, decisions D1/D5/D6/D7):
 *   - 7-day NO-CARD trial, clock stamped server-side from
 *     max(accountCreatedAt, BILLING_LAUNCH_EPOCH).
 *   - Paid: $50/mo or $250/yr via Stripe Checkout (hosted).
 *   - Post-trial unpaid: hard lock, read-only score access (client enforces
 *     surface-level gating; the aiTutor endpoint enforces server-side).
 */

export type EntitlementStatus = "trialing" | "active" | "past_due" | "canceled";
export type PlanId = "monthly" | "annual" | null;

export interface EntitlementPatch {
  status: EntitlementStatus;
  plan: PlanId;
  subscriptionId: string | null;
  /** Unix ms; null when the subscription carries no period end. */
  currentPeriodEndMs: number | null;
  cancelAtPeriodEnd: boolean;
}

/** Minimal shape of a Stripe Subscription this policy needs. */
export interface StripeSubscriptionLike {
  id: string;
  status: string;
  cancel_at_period_end?: boolean;
  current_period_end?: number | null; // unix SECONDS (Stripe convention)
  items?: {data?: Array<{price?: {id?: string}}>};
}

export const TRIAL_DAYS = 7;
export const DAY_MS = 86400000;

/**
 * Trial end for an account: 7 days from the LATER of account creation and
 * the paywall launch epoch — one rule for both new and pre-existing accounts
 * (decision D7), no grandfather list.
 * @param {number} accountCreatedMs auth account creation time (unix ms)
 * @param {number} launchEpochMs BILLING_LAUNCH_EPOCH (unix ms)
 * @return {number} trial end (unix ms)
 */
export function computeTrialEndMs(
  accountCreatedMs: number,
  launchEpochMs: number,
): number {
  const base = Math.max(accountCreatedMs || 0, launchEpochMs || 0);
  return base + TRIAL_DAYS * DAY_MS;
}

/**
 * Map Stripe's subscription status to our four-state entitlement status.
 * past_due keeps access (Stripe dunning window); everything terminal or
 * unstarted (canceled/unpaid/incomplete/incomplete_expired/paused) locks.
 * Stripe-side "trialing" maps to active — we never create Stripe trials
 * (the 7-day trial is app-side, decision D6), so if one exists it was made
 * manually in the dashboard and should count as paid access.
 * @param {string} stripeStatus Stripe subscription.status
 * @return {EntitlementStatus} our four-state status
 */
export function mapStripeStatus(stripeStatus: string): EntitlementStatus {
  switch (stripeStatus) {
  case "active":
  case "trialing":
    return "active";
  case "past_due":
    return "past_due";
  default:
    return "canceled";
  }
}

/**
 * Resolve which of our two plans a Stripe price id refers to.
 * @param {string|undefined} priceId Stripe price id on the subscription item
 * @param {string} monthlyPriceId configured STRIPE_PRICE_MONTHLY
 * @param {string} annualPriceId configured STRIPE_PRICE_ANNUAL
 * @return {PlanId} 'monthly' | 'annual' | null
 */
export function planFromPriceId(
  priceId: string | undefined,
  monthlyPriceId: string,
  annualPriceId: string,
): PlanId {
  if (!priceId) return null;
  if (priceId === monthlyPriceId) return "monthly";
  if (priceId === annualPriceId) return "annual";
  return null;
}

/**
 * Build the entitlement patch a subscription event implies.
 * @param {StripeSubscriptionLike} sub the Stripe subscription
 * @param {string} monthlyPriceId configured STRIPE_PRICE_MONTHLY
 * @param {string} annualPriceId configured STRIPE_PRICE_ANNUAL
 * @return {EntitlementPatch} absolute entitlement state to persist
 */
export function subscriptionToEntitlementPatch(
  sub: StripeSubscriptionLike,
  monthlyPriceId: string,
  annualPriceId: string,
): EntitlementPatch {
  const priceId = sub.items?.data?.[0]?.price?.id;
  return {
    status: mapStripeStatus(sub.status),
    plan: planFromPriceId(priceId, monthlyPriceId, annualPriceId),
    subscriptionId: sub.id || null,
    currentPeriodEndMs: typeof sub.current_period_end === "number" ?
      sub.current_period_end * 1000 :
      null,
    cancelAtPeriodEnd: !!sub.cancel_at_period_end,
  };
}

/**
 * Webhook ordering guard: Stripe does not guarantee event delivery order, so
 * an older subscription.updated must never overwrite a newer one. Events with
 * the same created second re-apply (idempotent absolute-state writes).
 * @param {number} eventCreatedSec event.created (unix seconds)
 * @param {number|null|undefined} lastAppliedEventSec stored watermark
 * @return {boolean} true when the event should be applied
 */
export function shouldApplyEvent(
  eventCreatedSec: number,
  lastAppliedEventSec: number | null | undefined,
): boolean {
  if (typeof lastAppliedEventSec !== "number") return true;
  return eventCreatedSec >= lastAppliedEventSec;
}

/** Plain-ms view of an entitlement doc for access decisions. */
export interface EntitlementAccessInput {
  status?: string | null;
  trialEndsAtMs?: number | null;
  currentPeriodEndMs?: number | null;
}

/**
 * The single access rule, shared conceptually with the client selector
 * (src/services/selectors/entitlementAccess.js — keep the two in sync):
 *   trialing  -> access while the trial clock runs
 *   active    -> access (covers cancel-at-period-end until Stripe flips it)
 *   past_due  -> access (dunning grace)
 *   canceled  -> access only until any still-future currentPeriodEnd
 * @param {EntitlementAccessInput|null} doc plain-ms entitlement view
 * @param {number} nowMs current time (unix ms)
 * @return {boolean} whether the account has premium/trial access
 */
export function hasAccessMs(
  doc: EntitlementAccessInput | null,
  nowMs: number,
): boolean {
  if (!doc) return false;
  switch (doc.status) {
  case "trialing":
    return typeof doc.trialEndsAtMs === "number" &&
        doc.trialEndsAtMs > nowMs;
  case "active":
  case "past_due":
    return true;
  case "canceled":
    return typeof doc.currentPeriodEndMs === "number" &&
        doc.currentPeriodEndMs > nowMs;
  default:
    return false;
  }
}
