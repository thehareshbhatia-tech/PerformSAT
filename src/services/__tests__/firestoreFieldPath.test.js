/**
 * Tests for isSafeFirestoreFieldPathKey — the shared guard that decides whether
 * a map key can be interpolated into a dotted update() field path (`map.${key}`)
 * or must fall back to a whole-map write. Extracted from resetPracticeTest so
 * reviewService / hybridStudyPlanService / practiceTestService share one rule.
 */

import { isSafeFirestoreFieldPathKey } from '../firestoreFieldPath';

describe('isSafeFirestoreFieldPathKey', () => {
  test('accepts ordinary keys (ids, kebab skill slugs, module-index positions)', () => {
    expect(isSafeFirestoreFieldPathKey('practice-test-1')).toBe(true);
    expect(isSafeFirestoreFieldPathKey('slope-intercept-form')).toBe(true);
    expect(isSafeFirestoreFieldPathKey('bank-Algebra-42')).toBe(true);
    expect(isSafeFirestoreFieldPathKey('abc123XYZ')).toBe(true);
  });

  test('rejects keys carrying field-path metacharacters', () => {
    expect(isSafeFirestoreFieldPathKey('has.dot')).toBe(false);
    expect(isSafeFirestoreFieldPathKey('tilde~here')).toBe(false);
    expect(isSafeFirestoreFieldPathKey('star*here')).toBe(false);
    expect(isSafeFirestoreFieldPathKey('slash/here')).toBe(false);
    expect(isSafeFirestoreFieldPathKey('bracket[0]')).toBe(false);
    expect(isSafeFirestoreFieldPathKey('close]bracket')).toBe(false);
  });

  test('rejects a free-form section name with a period (the review-queue risk)', () => {
    // key shape is `${moduleId}-${sectionName}-${questionId}`; a section name
    // like "U.S. History" would smuggle dots into the key.
    expect(isSafeFirestoreFieldPathKey('bank-U.S. History-7')).toBe(false);
  });

  test('rejects non-strings and the empty string', () => {
    expect(isSafeFirestoreFieldPathKey('')).toBe(false);
    expect(isSafeFirestoreFieldPathKey(null)).toBe(false);
    expect(isSafeFirestoreFieldPathKey(undefined)).toBe(false);
    expect(isSafeFirestoreFieldPathKey(42)).toBe(false);
  });
});
