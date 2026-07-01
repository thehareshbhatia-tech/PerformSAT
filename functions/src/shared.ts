/**
 * Shared helpers for Cloud Functions endpoints.
 *
 * Extracted from index.ts so sibling modules (stripe.ts) can use the same
 * CORS allowlist, bearer-token auth, and per-user rate limiting without a
 * circular import. IMPORTANT: nothing here may call getFirestore()/getAuth()
 * at module scope — initializeApp() runs in index.ts AFTER imports evaluate,
 * so admin access must stay inside function bodies.
 */

import {getAuth, DecodedIdToken} from "firebase-admin/auth";
import {getFirestore, FieldValue} from "firebase-admin/firestore";

// Allowed CORS origins — restrict to your production domains. EVERY origin the
// app is served from MUST be listed here, or authenticated function calls (the
// AI tutor, AI study-plan generation, billing, etc.) are CORS-blocked by the
// browser and surface to the user as a generic connection error. The live
// custom domain is sevaprep.com (apex 308-redirects to www); keep both. Add
// any new domain here AND redeploy functions when the served origin changes.
export const ALLOWED_ORIGINS = [
  "https://sevaprep.com",
  "https://www.sevaprep.com",
  "https://perform-sat.vercel.app",
  "https://performsat-production.web.app",
  "https://performsat-production.firebaseapp.com",
  "https://performsat.com",
  "https://www.performsat.com",
  "http://localhost:3000",
  "http://localhost:3001",
];

/**
 * Auth helper — verifies the Firebase ID token from the Authorization header.
 * @param {object} request incoming request carrying headers
 * @return {Promise<DecodedIdToken|null>} decoded token, or null when invalid
 */
export async function verifyAuth(
  request: {headers: {authorization?: string}},
): Promise<DecodedIdToken | null> {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return null;
  try {
    return await getAuth().verifyIdToken(authHeader.substring(7));
  } catch {
    return null;
  }
}

// Simple per-user rate limiter using Firestore
export const RATE_LIMIT_COLLECTION = "_rateLimits";

/**
 * Per-user, per-endpoint hourly rate limiter backed by Firestore.
 * @param {string} userId caller uid
 * @param {string} endpoint logical endpoint name
 * @param {number} maxPerHour allowed calls per rolling hour
 * @return {Promise<boolean>} true when the call is allowed
 */
export async function checkRateLimit(
  userId: string,
  endpoint: string,
  maxPerHour = 60,
): Promise<boolean> {
  const key = `${userId}_${endpoint}`;
  const ref = getFirestore().collection(RATE_LIMIT_COLLECTION).doc(key);
  const now = Date.now();
  const hourAgo = now - 3600000;

  try {
    const snap = await ref.get();
    const data = snap.data();
    const timestamps: number[] = (data?.timestamps || [])
      .filter((t: number) => t > hourAgo);

    if (timestamps.length >= maxPerHour) return false;

    timestamps.push(now);
    await ref.set({timestamps, updatedAt: FieldValue.serverTimestamp()});
    return true;
  } catch {
    return true; // Allow on rate limit check failure
  }
}
