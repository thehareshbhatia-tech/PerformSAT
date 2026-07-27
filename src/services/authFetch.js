/**
 * Authenticated fetch helper — attaches Firebase ID token to requests.
 * Use this for all Cloud Function calls that require authentication.
 */
import { auth, appCheckHeaders } from '../firebase/config';

export async function authFetch(url, options = {}) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('Not authenticated');
  }

  const token = await user.getIdToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    // App Check attestation ({} until the site key is configured) — proves the
    // request comes from the real app, not a script hitting our AI endpoints.
    ...(await appCheckHeaders()),
    ...(options.headers || {}),
  };

  // Client-side timeout: without one a stalled connection hangs the caller's
  // spinner / send-lock until the OS gives up (can be minutes). 120s is long
  // enough for the slowest Cloud Function (AI tutor / plan generation) yet
  // fails visibly instead of hanging. Merge with a caller-supplied signal
  // (e.g. the AI tutor's AbortController) via AbortSignal.any when available,
  // so either the caller's abort OR the timeout cancels the request.
  const timeoutSignal = (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function')
    ? AbortSignal.timeout(120000)
    : undefined;
  let signal;
  if (options.signal && timeoutSignal && typeof AbortSignal.any === 'function') {
    signal = AbortSignal.any([options.signal, timeoutSignal]);
  } else {
    signal = options.signal || timeoutSignal;
  }

  return fetch(url, { ...options, headers, ...(signal ? { signal } : {}) });
}
