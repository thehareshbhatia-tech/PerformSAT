/**
 * PaywallScreen — the SEVA Premium subscribe wall (card-up-front 7-day trial).
 *
 * Mounted at view='paywall'. Two states:
 *   (a) never-subscribed  → "Start your 7-day free trial" — a card is required
 *       via hosted Stripe Checkout to START the trial; nothing is charged
 *       until day 7. This is a HARD gate (no card = no access), so the
 *       "Back to dashboard" escape is hidden.
 *   (b) lapsed/canceled   → "Your access has ended" — re-subscribe via
 *       Checkout. These accounts keep read-only score access, so the back
 *       button stays.
 *   (grace / past_due)    → "Update your payment method" → Customer Portal.
 *
 * No card form ever renders in-app — Checkout and the Portal are Stripe-owned
 * redirects.
 */
import React, { useState } from 'react';
import { startCheckout, openBillingPortal } from '../../services/billingService';
import './PaywallScreen.css';

const FEATURES = [
  'All 12 full-length adaptive practice tests',
  'AI tutor on every question — explanations that actually teach',
  'Unlimited drills, review queue, and pacing practice',
  'Personalized study plan that updates with every test',
];

function CheckIcon() {
  return (
    <svg className="pw-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * Which wall to render. Derived from the entitlement phase so a lapsed account
 * gets re-subscribe framing while a fresh account gets the start-trial framing.
 * @param {object|null} entitlement useEntitlement() view
 * @returns {'start'|'resubscribe'|'grace'}
 */
function paywallMode(entitlement) {
  if (!entitlement) return 'start';
  if (entitlement.phase === 'grace') return 'grace';
  // Anyone who has ever had a Stripe customer/subscription (lapsed, canceled,
  // or a still-running plan reaching this wall by accident) sees re-subscribe.
  if (entitlement.hasBillingAccount || entitlement.phase === 'expired' || entitlement.phase === 'ending') {
    return 'resubscribe';
  }
  return 'start';
}

function statusLine(entitlement) {
  if (!entitlement) return null;
  if (entitlement.phase === 'trial') {
    const d = entitlement.trialDaysLeft;
    return { cls: 'is-trial', text: `Free trial: ${d} day${d === 1 ? '' : 's'} left — you have not been charged` };
  }
  if (entitlement.phase === 'expired') {
    return { cls: 'is-expired', text: 'Your access has ended' };
  }
  if (entitlement.phase === 'grace') {
    return { cls: 'is-grace', text: 'Payment issue — update your card to keep access' };
  }
  return null;
}

function PaywallScreen({ entitlement, onBack }) {
  const [redirecting, setRedirecting] = useState(null); // 'monthly' | 'annual' | 'portal' | null
  const [error, setError] = useState(null);

  const subscribe = async (plan) => {
    if (redirecting) return;
    setError(null);
    setRedirecting(plan);
    try {
      await startCheckout(plan);
      // Browser navigates away on success; nothing to reset.
    } catch (err) {
      setError(err.message || 'Could not start checkout. Please try again.');
      setRedirecting(null);
    }
  };

  const openPortal = async () => {
    if (redirecting) return;
    setError(null);
    setRedirecting('portal');
    try {
      await openBillingPortal();
    } catch (err) {
      setError(err.message || 'Could not open billing. Please try again.');
      setRedirecting(null);
    }
  };

  const mode = paywallMode(entitlement);
  const status = statusLine(entitlement);
  // Hard gate: a never-subscribed account (no access, no card on file) has
  // nowhere to go — hide the back escape so it can't bounce against the
  // App.jsx auto-route. Lapsed accounts keep the read-only dashboard.
  const hardGated = !entitlement?.hasAccess && !entitlement?.hasBillingAccount;
  const startCta = mode === 'start' ? 'Start free trial' : 'Subscribe';

  let title = 'Start your 7-day free trial';
  let sub = 'Add a card to unlock everything free for 7 days. You will not be charged until day 7 — cancel anytime before then and you pay nothing.';
  if (mode === 'resubscribe') {
    title = 'Your access has ended';
    sub = 'Your scores and progress are saved. Subscribe to pick up exactly where you left off — every test, drill, and tutor session unlocks instantly.';
  } else if (mode === 'grace') {
    title = 'Update your payment method';
    sub = 'There was a problem charging your card. Update it to keep your Premium access — nothing else changes.';
  }

  return (
    <div className="pw-shell">
      <div className="pw-column">
        {!hardGated && onBack && (
          <button type="button" className="pw-back" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to dashboard
          </button>
        )}

        {status && <div className={`pw-status ${status.cls}`}>{status.text}</div>}

        <h1 className="pw-title">{title}</h1>
        <p className="pw-sub">{sub}</p>

        {error && <p className="pw-error" role="alert">{error}</p>}

        {mode === 'grace' ? (
          <div className="pw-grace-actions">
            <button
              type="button"
              className="pw-plan-cta is-primary"
              onClick={openPortal}
              disabled={!!redirecting}
            >
              {redirecting === 'portal' ? 'Opening billing…' : 'Update payment method'}
            </button>
          </div>
        ) : (
          <div className="pw-plans">
            <div className="pw-plan">
              <h2 className="pw-plan-name">Monthly</h2>
              <div className="pw-plan-price">
                <span className="pw-plan-amount">$50</span>
                <span className="pw-plan-cadence">/ month</span>
              </div>
              <p className="pw-plan-note">Free for 7 days, then $50/month. Cancel anytime.</p>
              <button
                type="button"
                className="pw-plan-cta is-secondary"
                onClick={() => subscribe('monthly')}
                disabled={!!redirecting}
              >
                {redirecting === 'monthly' ? 'Opening checkout…' : startCta}
              </button>
              <ul className="pw-features">
                {FEATURES.map((f) => (
                  <li key={f}><CheckIcon />{f}</li>
                ))}
              </ul>
            </div>

            <div className="pw-plan is-featured">
              <span className="pw-plan-flag">Best value</span>
              <h2 className="pw-plan-name">Annual</h2>
              <div className="pw-plan-price">
                <span className="pw-plan-amount">$250</span>
                <span className="pw-plan-cadence">/ year</span>
              </div>
              <p className="pw-plan-note">Free for 7 days, then $250/year — save $350 vs monthly.</p>
              <button
                type="button"
                className="pw-plan-cta is-primary"
                onClick={() => subscribe('annual')}
                disabled={!!redirecting}
              >
                {redirecting === 'annual' ? 'Opening checkout…' : startCta}
              </button>
              <ul className="pw-features">
                {FEATURES.map((f) => (
                  <li key={f}><CheckIcon />{f}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <p className="pw-fineprint">
          Secure checkout by Stripe. {mode === 'grace'
            ? 'Manage or cancel your plan anytime from Profile.'
            : 'You will not be charged until your 7-day free trial ends — cancel anytime before then and you pay nothing. Manage or cancel anytime from Profile.'}{' '}
          By {mode === 'start' ? 'starting your trial' : 'subscribing'} you agree
          to the <a href="/terms" target="_blank" rel="noreferrer">Terms</a> and{' '}
          <a href="/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default PaywallScreen;
