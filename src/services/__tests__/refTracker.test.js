import { captureReferral, getReferral, sanitizeRefSlug, REF_TTL_DAYS } from '../refTracker';

const KEY = 'seva:ref';

describe('refTracker', () => {
  beforeEach(() => localStorage.clear());

  it('sanitizes slugs like the server does', () => {
    expect(sanitizeRefSlug(' Bella ')).toBe('bella');
    expect(sanitizeRefSlug('study-with-bella')).toBe('study-with-bella');
    expect(sanitizeRefSlug('-bad')).toBeNull();
    expect(sanitizeRefSlug('a'.repeat(33))).toBeNull();
    expect(sanitizeRefSlug('')).toBeNull();
  });

  it('captures ?ref= and reads it back', () => {
    captureReferral('?ref=bella');
    expect(getReferral()).toBe('bella');
  });

  it('first touch wins — a second ref does not overwrite', () => {
    captureReferral('?ref=bella');
    captureReferral('?ref=other');
    expect(getReferral()).toBe('bella');
  });

  it('ignores junk refs and missing params', () => {
    captureReferral('?ref=<script>');
    expect(getReferral()).toBeNull();
    captureReferral('?utm_source=x');
    expect(getReferral()).toBeNull();
  });

  it('expires after the TTL and allows a new capture', () => {
    const old = Date.now() - (REF_TTL_DAYS + 1) * 24 * 60 * 60 * 1000;
    localStorage.setItem(KEY, JSON.stringify({ slug: 'bella', at: old }));
    expect(getReferral()).toBeNull();
    captureReferral('?ref=fresh');
    expect(getReferral()).toBe('fresh');
  });

  it('survives malformed storage', () => {
    localStorage.setItem(KEY, '{not json');
    expect(getReferral()).toBeNull();
  });
});
