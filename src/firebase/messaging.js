/**
 * Firebase Cloud Messaging (web push) — thin support-gated wrapper.
 *
 * Web push is the re-engagement channel (Phase 3). It is NOT universally
 * supported: iOS Safari only delivers push to an installed home-screen PWA,
 * private windows and some older browsers don't support it at all, and the
 * Notification API may be absent in SSR/jsdom. Every entry point here is gated
 * on `isPushSupported()` so callers can hide the opt-in UI cleanly instead of
 * throwing.
 *
 * The Messaging instance is created lazily — only after support is confirmed —
 * because `getMessaging()` can throw in unsupported environments.
 */

import { getMessaging, getToken, isSupported } from 'firebase/messaging';
import app from './config';

let _messaging = null;
let _supportPromise = null;

/**
 * Resolve (and cache) whether web push is usable in this browser. Combines the
 * SDK's own `isSupported()` with the presence of the ServiceWorker + Notification
 * APIs. Safe to call repeatedly — the check runs once.
 *
 * @returns {Promise<boolean>}
 */
export const isPushSupported = () => {
  if (_supportPromise) return _supportPromise;
  _supportPromise = (async () => {
    try {
      if (typeof window === 'undefined') return false;
      if (!('serviceWorker' in navigator)) return false;
      if (!('Notification' in window)) return false;
      return await isSupported();
    } catch {
      return false;
    }
  })();
  return _supportPromise;
};

/**
 * Lazily create the Messaging instance. Call only after `isPushSupported()`
 * resolves true — `getMessaging()` throws in unsupported environments.
 *
 * @returns {import('firebase/messaging').Messaging}
 */
export const getMessagingInstance = () => {
  if (_messaging) return _messaging;
  _messaging = getMessaging(app);
  return _messaging;
};

export { getToken };
