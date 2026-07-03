/**
 * Pure billing/entitlement policy — no Firebase or Stripe SDK imports, so it
 * is unit-testable with node --test (same pattern as reengagementPolicy.ts).
 *
 * The entitlement model (CARD-UP-FRONT 7-day trial, 2026-07-03):
 *   - Signup grants NO access. To start a 7-day free trial the student must
 *     enter a card via hosted Stripe Checkout (payment_method_collection
 *     stays "always"; subscription_data.trial_period_days = 7).
 *   - During the trial the Stripe subscription status is "trialing" — full
 *     access, card on file, not yet charged. Stripe owns the trial clock
 *     (subscription.trial_end); the app never stamps it.
 *   - At trial end Stripe auto-charges and the subscription flips to "active"
 *     ($50/mo or $250/yr) — UNLESS the student canceled during the trial, in
 *     which case it flips to "canceled" at trial_end with no charge.
 *   - Access rule: "trialing" OR "active" grants full access. "past_due"
 *     keeps access (dunning grace). "canceled" keeps access only until any
 *     still-future currentPeriodEnd, then locks (read-only score access on
 *     the client; the aiTutor endpoint enforces server-side).
 *   - There is NO app-side trial clock and NO no-card grant anymore.
 */

export type EntitlementStatus =
  | "trialing"
  | "active"
  | "past_due"
  | "canceled";
export type PlanId = "monthly" | "annual" | null;

export interface EntitlementPatch {
  status: EntitlementStatus;
  plan: PlanId;
  subscriptionId: string | null;
  /** Unix ms; null when the subscription carries no period end. */
  currentPeriodEndMs: number | null;
  /**
   * Unix ms of the Stripe trial end (subscription.trial_end), for display.
   * Null when the subscription is not (and never was) in a trial.
   */
  trialEndsAtMs: number | null;
  cancelAtPeriodEnd: boolean;
}

/** Minimal shape of a Stripe Subscription this policy needs. */
export interface StripeSubscriptionLike {
  id: string;
  status: string;
  cancel_at_period_end?: boolean;
  current_period_end?: number | null; // unix SECONDS (older API versions)
  trial_end?: number | null; // unix SECONDS; set while status is "trialing"
  items?: {
    data?: Array<{
      price?: {id?: string};
      // Newer Stripe API versions (2025-03+) moved the billing period from
      // the subscription onto its items — verified live 2026-07-01: the
      // top-level field is absent and items[0].current_period_end carries it.
      current_period_end?: number | null;
    }>;
  };
}

export const TRIAL_DAYS = 7;
export const DAY_MS = 86400000;

/**
 * Map Stripe's subscription status to our four-state entitlement status.
 * "trialing" is now a first-class state — the card-up-front trial IS a Stripe
 * trial (subscription_data.trial_period_days), so trialing must survive the
 * mapping (it grants access and carries the Stripe trial_end for display).
 * past_due keeps access (Stripe dunning window); everything terminal or
 * unstarted (canceled/unpaid/incomplete/incomplete_expired/paused) locks.
 * @param {string} stripeStatus Stripe subscription.status
 * @return {EntitlementStatus} our four-state status
 */
export function mapStripeStatus(stripeStatus: string): EntitlementStatus {
  switch (stripeStatus) {
  case "active":
    return "active";
  case "trialing":
    return "trialing";
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
  const firstItem = sub.items?.data?.[0];
  // Period end lives on the subscription in older API versions and on the
  // ITEM in newer ones — read whichever is present.
  const periodEndSec = typeof sub.current_period_end === "number" ?
    sub.current_period_end :
    (typeof firstItem?.current_period_end === "number" ?
      firstItem.current_period_end :
      null);
  // Stripe owns the trial clock — carry subscription.trial_end straight
  // through for display ("N days left", "won't be charged until <date>").
  const trialEndSec = typeof sub.trial_end === "number" ?
    sub.trial_end :
    null;
  return {
    status: mapStripeStatus(sub.status),
    plan: planFromPriceId(firstItem?.price?.id, monthlyPriceId, annualPriceId),
    subscriptionId: sub.id || null,
    currentPeriodEndMs: periodEndSec != null ? periodEndSec * 1000 : null,
    trialEndsAtMs: trialEndSec != null ? trialEndSec * 1000 : null,
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
 *   trialing  -> access (card on file, Stripe owns the trial clock; Stripe
 *                flips the status to active/canceled at trial_end, so we do
 *                NOT re-gate on a local clock and risk locking a paying
 *                customer during the trial->active webhook window)
 *   active    -> access (covers cancel-at-period-end until Stripe flips it)
 *   past_due  -> access (dunning grace)
 *   canceled  -> access only until any still-future currentPeriodEnd
 *   anything else (incl. "none"/undefined) -> NO access
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
