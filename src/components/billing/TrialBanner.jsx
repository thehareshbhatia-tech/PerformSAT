/**
 * TrialBanner — quiet fixed countdown chip during the 7-day trial (and a
 * payment-issue notice during dunning grace). Hidden for subscribers, hidden
 * mid-test (the runner owns that surface), hidden while billing is dark.
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
});

const ctaStyle = {
  background: 'rgba(255,255,255,0.16)',
  borderRadius: '999px',
  padding: '3px 10px',
  fontWeight: 700,
};

function TrialBanner({ entitlement, onSubscribe, onManageBilling }) {
  if (!entitlement?.flagEnabled || entitlement.loading) return null;

  if (entitlement.phase === 'trial') {
    const d = entitlement.trialDaysLeft;
    const urgent = d <= 2;
    return (
      <div style={wrapStyle}>
        <button
          type="button"
          style={chipStyle(urgent)}
          onClick={onSubscribe}
          aria-label={`Free trial: ${d} day${d === 1 ? '' : 's'} left. Subscribe.`}
        >
          <span>Trial: {d} day{d === 1 ? '' : 's'} left</span>
          <span style={ctaStyle}>Subscribe</span>
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
