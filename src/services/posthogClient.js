/**
 * posthogClient — lazy PostHog wrapper.
 *
 * posthog-js is ~70KB gz; importing it statically from index.js /
 * analyticsService / useAuth would put it in the ENTRY chunk and undo the
 * bundle-size work. This wrapper dynamic-imports it after boot (async chunk),
 * and the rest of the app talks only to these thin functions.
 *
 * Inert without REACT_APP_POSTHOG_KEY. Calls made before the chunk loads are
 * buffered (capped) and replayed on load, so boot-time events aren't dropped.
 * Every entry point swallows errors — product analytics must never break the
 * app. Privacy contract: uid-only identify, no session recording, no PII in
 * event properties (enforced by callers; see analyticsService taxonomy).
 */

const POSTHOG_KEY = process.env.REACT_APP_POSTHOG_KEY;
const POSTHOG_HOST = process.env.REACT_APP_POSTHOG_HOST || 'https://us.i.posthog.com';
const MAX_QUEUE = 20;

let client = null;      // the loaded, initialized posthog instance
let loading = false;
const queue = [];       // [{fn, args}] buffered until the chunk loads

const drain = () => {
  while (queue.length) {
    const { fn, args } = queue.shift();
    try { client[fn](...args); } catch { /* analytics must never throw */ }
  }
};

const call = (fn, ...args) => {
  if (!POSTHOG_KEY) return;
  if (client) {
    try { client[fn](...args); } catch { /* analytics must never throw */ }
  } else if (queue.length < MAX_QUEUE) {
    queue.push({ fn, args });
  }
};

/**
 * Kick off the lazy load + init. Call once from index.js at boot.
 * No-op without REACT_APP_POSTHOG_KEY, on repeat calls, and outside a browser.
 */
export const initPostHog = () => {
  if (!POSTHOG_KEY || loading || client || typeof window === 'undefined') return;
  loading = true;
  import('posthog-js')
    .then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        defaults: '2025-05-24',
        person_profiles: 'identified_only',
        disable_session_recording: true,
      });
      client = posthog;
      drain();
    })
    .catch(() => { loading = false; }); // network fail: stay inert, allow retry
};

/** Mirror a product event. No-op until initPostHog ran and the key is set. */
export const phCapture = (event, properties) => call('capture', event, properties);

/** Tie events to the signed-in student. uid ONLY — never email/name (PII). */
export const phIdentify = (uid) => call('identify', uid);

/** Drop identity on sign-out so a shared device never chains two students. */
export const phReset = () => call('reset');
