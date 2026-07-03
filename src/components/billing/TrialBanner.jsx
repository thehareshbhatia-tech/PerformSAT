/**
 * TrialBanner — quiet fixed chip during the card-up-front 7-day trial (and a
 * payment-issue notice during dunning grace). The card is already on file, so
 * the trial chip reassures ("won't be charged until <date> · cancel anytime")
 * and links to the Customer Portal to cancel/manage — there is nothing to
 * "subscribe" to mid-trial. Hidden for active subscribers, hidden mid-test
 * (the runner owns that surface), hidden while billing is dark.
 */
import React from 'react';

const wrapStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 900,
};

const chipStyle = (urgent) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 16px',
  borderRadius: '999px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '13.5px',
  fontWeight: 600,
  color: '#ffffff',
  background: urgent ? '#dc2626' : '#7c5cc7',
  boxShadow: '0 6px 20px rgba(15, 23, 42, 0.18)',
  maxWidth: '340px',
});

const ctaStyle = {
  background: 'rgba(255,255,255,0.16)',
  borderRadius: '999px',
  padding: '3px 10px',
  fontWeight: 700,
  whiteSpace: 'nowrap',
};

function formatDate(ms) {
  if (!ms) return null;
  try {
    return new Date(ms).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  } catch {
    return null;
  }
}

function TrialBanner({ entitlement, onManageBilling }) {
  if (!entitlement?.flagEnabled || entitlement.loading) return null;

  if (entitlement.phase === 'trial') {
    const d = entitlement.trialDaysLeft;
    const urgent = d <= 2;
    const chargeDate = formatDate(entitlement.endsAtMs);
    const label = chargeDate
      ? `Free trial: ${d} day${d === 1 ? '' : 's'} left. You won't be charged until ${chargeDate}. Cancel anytime.`
      : `Free trial: ${d} day${d === 1 ? '' : 's'} left. Cancel anytime.`;
    return (
      <div style={wrapStyle}>
        <button
          type="button"
          style={chipStyle(urgent)}
          onClick={onManageBilling}
          aria-label={label}
          title={label}
        >
          <span>
            Trial: {d} day{d === 1 ? '' : 's'} left
            {chargeDate ? ` · no charge until ${chargeDate}` : ''}
          </span>
          <span style={ctaStyle}>Manage</span>
        </button>
      </div>
    );
  }

  if (entitlement.phase === 'grace') {
    return (
      <div style={wrapStyle}>
        <button
          type="button"
          style={chipStyle(true)}
          onClick={onManageBilling}
          aria-label="Payment issue. Update your card."
        >
          <span>Payment issue</span>
          <span style={ctaStyle}>Update card</span>
        </button>
      </div>
    );
  }

  return null;
}

export default TrialBanner;
