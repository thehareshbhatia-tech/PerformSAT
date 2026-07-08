/**
 * firestoreFieldPath.js — one shared guard for map-key writers.
 *
 * Firestore's update() splits keys on '.' into nested field PATHS and rejects
 * the field-path metacharacters ~ * / [ ] outright. So a free-form map key
 * (review-queue keys carry user-facing section names; study-plan history keys
 * are artifact ids) must be validated before it can be interpolated into a
 * dotted path like `reviewQueue.${key}` — an unsafe key must fall back to a
 * whole-map write instead. Extracted from resetPracticeTest's inline guard so
 * every writer shares one definition rather than duplicating the regex.
 */

/**
 * True when `key` is safe to use as a SINGLE Firestore field-path segment in an
 * update() call (no '.' and none of the ~ * / [ ] metacharacters Firestore
 * rejects). When this returns false the caller must write the whole map instead
 * of a `map.${key}` field path.
 *
 * @param {string} key - the map key to validate
 * @returns {boolean} true when the key contains no field-path metacharacters
 */
export const isSafeFirestoreFieldPathKey = (key) =>
  typeof key === 'string' && key.length > 0 && !/[.~*/[\]]/.test(key);
