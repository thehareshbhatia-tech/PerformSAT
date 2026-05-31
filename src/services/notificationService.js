/**
 * Notification Service — web-push opt-in + FCM token storage.
 *
 * Runs the consent + token flow for the Phase 3 re-engagement nudge:
 *   1. confirm web push is supported in this browser,
 *   2. request the browser Notification permission (this IS the consent action
 *      for a possibly-minor student — no email/PII is involved),
 *   3. register the FCM service worker and mint a device token,
 *   4. persist the token + opt-in flag to users/{uid} so the scheduled
 *      `sendReEngagementNudges` Cloud Function can reach the student.
 *
 * Tokens are stored as plain strings in users/{uid}.fcmTokens via arrayUnion so
 * re-opting-in is idempotent (object entries would defeat arrayUnion dedup).
 * The cron prunes dead tokens on send.
 */

import { doc, setDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { getToken } from 'firebase/messaging';
import { db } from '../firebase/config';
import { isPushSupported, getMessagingInstance } from '../firebase/messaging';

const VAPID_KEY = process.env.REACT_APP_FIREBASE_VAPID_KEY;
const SW_SCOPE = '/firebase-cloud-messaging-push-scope';

// The (public) Firebase config the service worker needs to initializeApp. These
// values already ship in the client bundle, so passing them to the SW via query
// params (rather than templating a public/ file at build time) leaks nothing.
const SW_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

/**
 * Register the FCM service worker, passing the public Firebase config as query
 * params so `public/firebase-messaging-sw.js` can initialize without a
 * build-time template.
 *
 * @returns {Promise<ServiceWorkerRegistration|null>}
 */
const registerPushServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) return null;
  const params = new URLSearchParams(
    Object.fromEntries(Object.entries(SW_CONFIG).filter(([, v]) => v != null))
  ).toString();
  return navigator.serviceWorker.register(`/firebase-messaging-sw.js?${params}`, { scope: SW_SCOPE });
};

/**
 * Whether the opt-in card should even be offered. Resolves the support check +
 * VAPID config + current browser permission. `granted`/`denied` both mean the
 * card should hide (already on, or blocked and un-re-promptable).
 *
 * @returns {Promise<{ supported: boolean, configured: boolean, permission: NotificationPermission|'unsupported' }>}
 */
export const getPushAvailability = async () => {
  const supported = await isPushSupported();
  const permission = (typeof Notification !== 'undefined') ? Notification.permission : 'unsupported';
  return { supported, configured: !!VAPID_KEY, permission };
};

/**
 * Run the full opt-in flow. Idempotent and best-effort: returns a result object
 * (never throws) describing what happened so the UI can show the right toast.
 *
 * @param {string} userId
 * @returns {Promise<{ ok: boolean, reason?: string, token?: string }>}
 */
export const enablePushNudges = async (userId) => {
  if (!userId) return { ok: false, reason: 'no-user' };
  if (!VAPID_KEY) return { ok: false, reason: 'no-vapid-key' };
  if (!(await isPushSupported())) return { ok: false, reason: 'unsupported' };

  // The permission prompt is the consent gate.
  let permission = Notification.permission;
  if (permission === 'default') {
    try {
      permission = await Notification.requestPermission();
    } catch {
      return { ok: false, reason: 'prompt-failed' };
    }
  }
  if (permission !== 'granted') {
    return { ok: false, reason: permission === 'denied' ? 'denied' : 'dismissed' };
  }

  try {
    const registration = await registerPushServiceWorker();
    const messaging = getMessagingInstance();
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration || undefined,
    });
    if (!token) return { ok: false, reason: 'no-token' };

    await setDoc(
      doc(db, 'users', userId),
      {
        fcmTokens: arrayUnion(token),
        notificationPrefs: {
          reengagementOptIn: true,
          channel: 'push',
          optInAt: new Date().toISOString(),
        },
        lastUpdated: serverTimestamp(),
      },
      { merge: true }
    );

    return { ok: true, token };
  } catch (err) {
    console.error('[notifications] enablePushNudges failed:', err);
    return { ok: false, reason: 'error' };
  }
};

/**
 * Record that the student dismissed the opt-in card so we don't re-offer it
 * every dashboard load. Per-browser (localStorage), keyed by uid.
 *
 * @param {string} userId
 */
export const dismissPushOptIn = (userId) => {
  try { localStorage.setItem(`seva:pushOptInDismissed:${userId}`, '1'); } catch { /* noop */ }
};

/**
 * @param {string} userId
 * @returns {boolean} whether the student already dismissed the opt-in card.
 */
export const isPushOptInDismissed = (userId) => {
  try { return localStorage.getItem(`seva:pushOptInDismissed:${userId}`) === '1'; } catch { return false; }
};
