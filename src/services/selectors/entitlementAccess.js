/**
 * entitlementAccess — pure selector over the entitlements/{uid} doc.
 *
 * Mirrors the server-side rule in functions/src/stripePolicy.ts (hasAccessMs)
 * — keep the two in sync:
 *   trialing  -> access while the trial clock runs
 *   active    -> access ('ending' phase when cancel-at-period-end is set)
 *   past_due  -> access (Stripe dunning grace)
 *   canceled  -> access only until a still-future currentPeriodEnd
 *
 * The doc is SERVER-WRITE-ONLY (see firestore.rules) — this selector never
 * mutates, it only derives what the UI needs.
 */

const DAY_MS = 86400000;

/**
 * Coerce a Firestore Timestamp / {seconds} shape / number / ISO string into
 * unix ms. Returns null for anything unusable — callers treat null as
 * "no such moment", never as epoch 0.
 *
 * @param {*} v raw field value from the entitlement doc
 * @returns {number|null} unix ms or null
 */
export function toMillisFlexible(v) {
  if (v == null) return null;
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  if (typeof v.toMillis === 'function') return v.toMillis();
  if (typeof v.seconds === 'number') return v.seconds * 1000;
  if (typeof v === 'string') {
    const parsed = Date.parse(v);
    return Number.isNaN(parsed) ? null : parsed;
  }
  if (v instanceof Date) return v.getTime();
  return null;
}

/**
 * Derive the access view the UI renders from an entitlement doc.
 *
 * Phases: 'trial' (clock running), 'premium' (paying), 'grace' (past_due),
 * 'ending' (canceled/cancel-at-period-end but still inside the paid period),
 * 'expired' (locked), 'none' (no doc yet — treat as locked, the hook layers
 * loading on top).
 *
 * @param {object|null} doc entitlements/{uid} data (or null)
 * @param {number} [nowMs] current time, injectable for tests
 * @returns {{hasAccess: boolean, phase: string, trialDaysLeft: number,
 *   endsAtMs: number|null, plan: string|null, cancelAtPeriodEnd: boolean}}
 */
export function deriveEntitlementAccess(doc, nowMs = Date.now()) {
  const base = {
    hasAccess: false,
    phase: 'none',
    trialDaysLeft: 0,
    endsAtMs: null,
    plan: null,
    cancelAtPeriodEnd: false,
  };
  if (!doc || typeof doc !== 'object') return base;

  const plan = doc.plan || null;
  const cancelAtPeriodEnd = !!doc.cancelAtPeriodEnd;
  const trialEndsAtMs = toMillisFlexible(doc.trialEndsAt);
  const periodEndMs = toMillisFlexible(doc.currentPeriodEnd);

  switch (doc.status) {
    case 'trialing': {
      const running = trialEndsAtMs != null && trialEndsAtMs > nowMs;
      return {
        ...base,
        hasAccess: running,
        phase: running ? 'trial' : 'expired',
        trialDaysLeft: running ? Math.max(0, Math.ceil((trialEndsAtMs - nowMs) / DAY_MS)) : 0,
        endsAtMs: trialEndsAtMs,
        plan,
        cancelAtPeriodEnd,
      };
    }
    case 'active':
      return {
        ...base,
        hasAccess: true,
        phase: cancelAtPeriodEnd ? 'ending' : 'premium',
        endsAtMs: periodEndMs,
        plan,
        cancelAtPeriodEnd,
      };
    case 'past_due':
      return {
        ...base,
        hasAccess: true,
        phase: 'grace',
        endsAtMs: periodEndMs,
        plan,
        cancelAtPeriodEnd,
      };
    case 'canceled': {
      const stillPaid = periodEndMs != null && periodEndMs > nowMs;
      return {
        ...base,
        hasAccess: stillPaid,
        phase: stillPaid ? 'ending' : 'expired',
        endsAtMs: periodEndMs,
        plan,
        cancelAtPeriodEnd,
      };
    }
    default:
      return base;
  }
}
