import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

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

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

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
