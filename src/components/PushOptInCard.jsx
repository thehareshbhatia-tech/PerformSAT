import React, { useEffect, useState, useCallback } from 'react';
import { useFeatureFlag } from '../hooks/useFeatureFlag';
import { showToast } from './ui/Toaster';
import {
  getPushAvailability,
  enablePushNudges,
  dismissPushOptIn,
  isPushOptInDismissed,
} from '../services/notificationService';

/**
 * PushOptInCard — a slim, dismissible banner that invites the student to turn on
 * study-reminder push notifications (Phase 3 re-engagement). It self-gates to
 * render nothing unless the offer is actually actionable:
 *   - feature flag `pushNudges` is on,
 *   - web push is supported in this browser AND a VAPID key is configured,
 *   - the browser permission is still 'default' (not already granted/denied),
 *   - the student hasn't dismissed it before.
 *
 * The button click triggers the browser permission prompt, which is the consent
 * action — no email or PII is involved, so it's clean for possibly-minor users.
 *
 * No emojis (project convention): icon is an inline SVG, accent is brand orange.
 */
const BRAND = '#ea580c';

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const PushOptInCard = ({ userId }) => {
  const enabled = useFeatureFlag('pushNudges');
  const [show, setShow] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    let cancelled = false;
    if (!enabled || !userId || isPushOptInDismissed(userId)) {
      setShow(false);
      return undefined;
    }
    getPushAvailability().then(({ supported, configured, permission }) => {
      if (cancelled) return;
      setShow(supported && configured && permission === 'default');
    }).catch(() => { if (!cancelled) setShow(false); });
    return () => { cancelled = true; };
  }, [enabled, userId]);

  const handleEnable = useCallback(async () => {
    setWorking(true);
    const result = await enablePushNudges(userId);
    setWorking(false);
    if (result.ok) {
      setShow(false);
      showToast({ type: 'success', message: 'Study reminders are on. We’ll nudge you when reviews are due.' });
    } else if (result.reason === 'denied') {
      setShow(false);
      showToast({ type: 'info', message: 'Notifications are blocked. Enable them in your browser settings to get reminders.' });
    } else if (result.reason === 'dismissed') {
      // User closed the OS prompt without choosing — leave the card up to retry.
    } else {
      showToast({ type: 'error', message: 'Could not turn on reminders right now. Please try again.' });
    }
  }, [userId]);

  const handleDismiss = useCallback(() => {
    dismissPushOptIn(userId);
    setShow(false);
  }, [userId]);

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Study reminders"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.875rem',
        maxWidth: 960,
        margin: '1rem auto 0',
        padding: '0.875rem 1.125rem',
        background: '#fff7ed',
        border: `1px solid ${BRAND}33`,
        borderRadius: 12,
      }}
    >
      <span style={{ flexShrink: 0, display: 'flex' }}><BellIcon /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, color: '#7c2d12', fontSize: '0.9375rem' }}>
          Turn on study reminders
        </div>
        <div style={{ color: '#9a3412', fontSize: '0.8125rem', marginTop: 2 }}>
          Get a nudge when reviews are due so you keep your streak and stay on pace for test day.
        </div>
      </div>
      <button
        onClick={handleEnable}
        disabled={working}
        style={{
          flexShrink: 0,
          background: BRAND,
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '0.5rem 0.875rem',
          fontWeight: 600,
          fontSize: '0.8125rem',
          cursor: working ? 'default' : 'pointer',
          opacity: working ? 0.7 : 1,
        }}
      >
        {working ? 'Enabling…' : 'Turn on'}
      </button>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss"
        style={{
          flexShrink: 0,
          background: 'transparent',
          color: '#9a3412',
          border: 'none',
          borderRadius: 8,
          padding: '0.5rem',
          fontSize: '0.8125rem',
          cursor: 'pointer',
        }}
      >
        Not now
      </button>
    </div>
  );
};

export default PushOptInCard;
