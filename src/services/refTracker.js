// Creator referral capture. Landing links look like sevaprep.com/r/bella
// (a Vercel redirect to /?ref=bella) or a bare /?ref=bella. First touch wins:
// the first creator whose link brought this browser here keeps the credit for
// REF_TTL_DAYS, matching payouts.mjs's first-touch attribution. The stored ref
// rides along on createCheckoutSession, where the server validates it against
// the server-write-only creatorRefs collection before honoring it.

import { makeLogger } from '../utils/log';

const log = makeLogger('refTracker');
const KEY = 'seva:ref';
export const REF_TTL_DAYS = 60;

const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,31}$/;

/** Canonicalize a raw ref value; null when unusable (mirrors server rules). */
export function sanitizeRefSlug(raw) {
  if (typeof raw !== 'string') return null;
  const slug = raw.trim().toLowerCase();
  return SLUG_RE.test(slug) ? slug : null;
}

/**
 * Read ?ref= from the current URL and persist it (first-touch). Call once at
 * app boot. Never throws — a broken ref must not break the app.
 *
 * @param {string} [search] optional search string for tests; defaults to
 *   window.location.search.
 */
export function captureReferral(search) {
  try {
    const qs = search != null ? search : window.location.search;
    const slug = sanitizeRefSlug(new URLSearchParams(qs).get('ref') || '');
    if (!slug) return;
    if (getReferral()) return; // first touch wins until it expires
    localStorage.setItem(KEY, JSON.stringify({ slug, at: Date.now() }));
    log.info('captured referral', slug);
  } catch {
    /* storage unavailable / malformed URL — silently skip */
  }
}

/**
 * The active referral slug, or null when none/expired.
 * @returns {string|null}
 */
export function getReferral() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const { slug, at } = JSON.parse(raw);
    if (!sanitizeRefSlug(slug)) return null;
    if (Date.now() - at > REF_TTL_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(KEY);
      return null;
    }
    return slug;
  } catch {
    return null;
  }
}
