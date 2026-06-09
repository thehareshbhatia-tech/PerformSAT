/**
 * Account deletion service — client side of the deleteAccount Cloud Function,
 * which permanently removes all Firestore data tied to the caller's uid and
 * then deletes the Auth user record.
 */
import { authFetch } from './authFetch';

const DELETE_ACCOUNT_URL = process.env.REACT_APP_DELETE_ACCOUNT_URL ||
  'https://us-central1-performsat-production.cloudfunctions.net/deleteAccount';

/**
 * Permanently deletes the signed-in user's account and all associated data.
 * The server requires the literal string confirmation {confirm: 'DELETE'}.
 * Callers must sign the user out on success — the local ID token stays
 * valid for up to an hour after the Auth record is deleted.
 *
 * @returns {Promise<void>} resolves when the server confirms deletion
 * @throws {Error} friendly message when the request fails
 */
export async function deleteAccount() {
  const response = await authFetch(DELETE_ACCOUNT_URL, {
    method: 'POST',
    body: JSON.stringify({ confirm: 'DELETE' }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || 'Could not delete your account. Please try again.');
  }
}
