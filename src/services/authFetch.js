/**
 * Authenticated fetch helper — attaches Firebase ID token to requests.
 * Use this for all Cloud Function calls that require authentication.
 */
import { auth } from '../firebase/config';

export async function authFetch(url, options = {}) {
  const user = auth.currentUser;
  if (!user) {
    throw new Error('Not authenticated');
  }

  const token = await user.getIdToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...(options.headers || {}),
  };

  return fetch(url, { ...options, headers });
}
