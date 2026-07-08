import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { initializeFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ─── App Check (bot/abuse protection) ──────────────────────────────────────
// Attests that Firestore/Auth requests come from the real app, not scripts.
// Inert until REACT_APP_APPCHECK_SITE_KEY is set (a reCAPTCHA v3 site key
// registered under Firebase console → App Check → Web app). Rollout order
// matters: ship with the key set and services UNENFORCED first, watch the
// App Check metrics page until verified-request % is stable, THEN flip
// enforcement per service in the console. Enforcing before this client is
// fully rolled out locks out every user on a cached old bundle.
// Never active alongside the emulator (no attestation locally).
const APPCHECK_SITE_KEY = process.env.REACT_APP_APPCHECK_SITE_KEY;
if (APPCHECK_SITE_KEY && typeof window !== 'undefined'
    && process.env.REACT_APP_USE_FIREBASE_EMULATOR !== '1'
    && process.env.REACT_APP_USE_FIREBASE_EMULATOR !== 'true') {
  try {
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(APPCHECK_SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (err) {
    // App Check failing to init must never take the app down — requests just
    // go unattested (same as before App Check existed).
    // eslint-disable-next-line no-console
    console.warn('[performsat:firebase] App Check init failed:', err && err.message);
  }
}

// Initialize services
export const auth = getAuth(app);
// ignoreUndefinedProperties: without it, ANY undefined field value makes the
// entire write throw — which silently loses data (a completed test that never
// saves, a study plan that vanishes). Omitting the undefined field is always
// the safe degradation. This closes the `undefined` half of the Firestore-
// serialization class of bugs; the nested-array half is handled by
// sanitizeForFirestore in practiceTestService.js.
export const db = initializeFirestore(app, { ignoreUndefinedProperties: true });

// ─── Emulator wiring (Day 6 DX-3) ─────────────────────────────────────────
// `npm run dev:emulator` starts the dev server with REACT_APP_USE_FIREBASE_EMULATOR=1.
// The connect* calls below redirect both Auth and Firestore to localhost
// emulators so contributors can work without a real Firebase project (or
// against a known-clean state). Defaults match firebase.json's emulator ports.
//
// We guard with a module-level flag because connect* throws if called twice
// after a request has already gone out (HMR can re-import this file).
const USE_EMULATOR = process.env.REACT_APP_USE_FIREBASE_EMULATOR === '1'
  || process.env.REACT_APP_USE_FIREBASE_EMULATOR === 'true';

if (USE_EMULATOR && typeof window !== 'undefined' && !window.__performsat_emulator_wired__) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, 'localhost', 8080);
    window.__performsat_emulator_wired__ = true;
    // eslint-disable-next-line no-console
    console.info('[performsat:firebase] Connected to local emulators (auth :9099, firestore :8080).');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[performsat:firebase] Emulator wire-up failed:', err && err.message);
  }
}

// Note: Offline persistence disabled to avoid multi-tab conflicts
// Real-time sync will still work, but requires internet connection

export default app;
