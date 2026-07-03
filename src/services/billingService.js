/**
 * billingService — client calls into the Stripe Cloud Functions.
 *
 * No Stripe SDK on the client: hosted Checkout and the Customer Portal are
 * plain redirects to Stripe-owned URLs the functions mint. All calls go
 * through authFetch (Firebase ID token bearer auth).
 */
import { authFetch } from './authFetch';
import { makeLogger } from '../utils/log';

const log = makeLogger('billing');

// v2 Cloud Run URLs follow the aiTutor precedent: lowercase function name +
// project hash. Env overrides support emulators/staging.
const ENSURE_ENTITLEMENT_URL = process.env.REACT_APP_ENSURE_ENTITLEMENT_URL ||
  'https://ensureentitlement-ki77ua6x2a-uc.a.run.app';
const CREATE_CHECKOUT_URL = process.env.REACT_APP_CREATE_CHECKOUT_URL ||
  'https://createcheckoutsession-ki77ua6x2a-uc.a.run.app';
const CREATE_PORTAL_URL = process.env.REACT_APP_CREATE_PORTAL_URL ||
  'https://createportalsession-ki77ua6x2a-uc.a.run.app';

/**
 * Idempotently create the server-side entitlement doc in a NO-ACCESS "none"
 * state (card-up-front model — access only comes from a Stripe subscription
 * the webhook writes). Safe to call on every boot; the function never touches
 * an existing doc.
 *
 * @returns {Promise<object>} serialized entitlement ({status, trialEndsAt, ...})
 */
export async function ensureEntitlement() {
  const res = await authFetch(ENSURE_ENTITLEMENT_URL, { method: 'POST', body: '{}' });
  if (!res.ok) {
    throw new Error(`ensureEntitlement failed (${res.status})`);
  }
  const data = await res.json();
  return data.entitlement;
}

/**
 * Start hosted Stripe Checkout for a plan and redirect the browser to it.
 *
 * @param {'monthly'|'annual'} plan
 * @returns {Promise<string>} the checkout URL (already navigated to)
 */
export async function startCheckout(plan) {
  const res = await authFetch(CREATE_CHECKOUT_URL, {
    method: 'POST',
    body: JSON.stringify({ plan: plan === 'annual' ? 'annual' : 'monthly' }),
  });
  if (!res.ok) {
    log.error('checkout session failed', res.status);
    throw new Error('Could not start checkout. Please try again.');
  }
  const { url } = await res.json();
  if (!url) throw new Error('Could not start checkout. Please try again.');
  window.location.assign(url);
  return url;
}

/**
 * Open the Stripe Customer Portal (manage plan, payment method, cancel).
 *
 * @returns {Promise<string>} the portal URL (already navigated to)
 */
export async function openBillingPortal() {
  const res = await authFetch(CREATE_PORTAL_URL, { method: 'POST', body: '{}' });
  if (res.status === 400) {
    throw new Error('No billing account yet — subscribe first.');
  }
  if (!res.ok) {
    log.error('portal session failed', res.status);
    throw new Error('Could not open billing. Please try again.');
  }
  const { url } = await res.json();
  if (!url) throw new Error('Could not open billing. Please try again.');
  window.location.assign(url);
  return url;
}
