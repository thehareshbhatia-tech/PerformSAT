/**
 * PastTestReviewIndex — pure-helper tests.
 *
 * The component itself is a thin presentation layer that calls
 * getCompletedTests() (already tested in selectors/__tests__/completedTests)
 * and renders a list of cards via the helpers exported below. Without
 * @testing-library/react in the codebase (per CalendarMonth + Toaster
 * convention), we test only the pure formatters here. Visual-state coverage
 * lives in the manual QA list.
 */

import {
  computeAccuracy,
  formatScore,
  formatDate,
} from '../PastTestReviewIndex';

describe('computeAccuracy', () => {
  it('returns 0 for null/undefined/empty input', () => {
    expect(computeAccuracy(null)).toBe(0);
    expect(computeAccuracy(undefined)).toBe(0);
    expect(computeAccuracy({})).toBe(0);
  });

  it('returns 0 when totalQuestions is 0 or missing', () => {
    expect(computeAccuracy({ rawScore: 10, totalQuestions: 0 })).toBe(0);
    expect(computeAccuracy({ rawScore: 10 })).toBe(0);
  });

  it('returns 0 when rawScore is non-numeric', () => {
    expect(computeAccuracy({ totalQuestions: 44 })).toBe(0);
    expect(computeAccuracy({ rawScore: '33', totalQuestions: 44 })).toBe(0);
  });

  it('rounds to the nearest integer', () => {
    expect(computeAccuracy({ rawScore: 33, totalQuestions: 44 })).toBe(75);
    expect(computeAccuracy({ rawScore: 22, totalQuestions: 44 })).toBe(50);
    expect(computeAccuracy({ rawScore: 36, totalQuestions: 44 })).toBe(82); // 81.81 → 82
    expect(computeAccuracy({ rawScore: 0, totalQuestions: 44 })).toBe(0);
    expect(computeAccuracy({ rawScore: 44, totalQuestions: 44 })).toBe(100);
  });
});

describe('formatScore', () => {
  it('returns scaledScore when present and > 0', () => {
    expect(formatScore({ scaledScore: 1240 })).toBe(1240);
    expect(formatScore({ scaledScore: 800 })).toBe(800);
  });

  it('falls back to module-score sum for multi-section tests with null scaled', () => {
    const t = {
      scaledScore: null,
      isMultiSection: true,
      moduleScores: [{ score: 600 }, { score: 700 }],
    };
    expect(formatScore(t)).toBe(1300);
  });

  it('returns em-dash when no usable score exists', () => {
    expect(formatScore({})).toBe('—');
    expect(formatScore({ scaledScore: 0 })).toBe('—');
    expect(formatScore({ scaledScore: null })).toBe('—');
    expect(formatScore({ isMultiSection: true, moduleScores: [] })).toBe('—');
    expect(formatScore({ isMultiSection: true, moduleScores: [{ score: 0 }] })).toBe('—');
  });

  it('handles null/undefined input safely', () => {
    expect(formatScore(null)).toBe('—');
    expect(formatScore(undefined)).toBe('—');
  });

  it('ignores moduleScores for non-multi-section tests with null scaledScore', () => {
    expect(formatScore({ scaledScore: null, isMultiSection: false, moduleScores: [{ score: 600 }] })).toBe('—');
  });
});

describe('formatDate', () => {
  it('returns "Date unknown" for null/undefined/empty', () => {
    expect(formatDate(null)).toBe('Date unknown');
    expect(formatDate(undefined)).toBe('Date unknown');
    expect(formatDate('')).toBe('Date unknown');
  });

  it('returns "Date unknown" for unparseable strings', () => {
    expect(formatDate('nope')).toBe('Date unknown');
  });

  it('formats ISO strings to "Mon DD, YYYY"', () => {
    // Use UTC to avoid TZ-dependent test failures
    const out = formatDate('2026-05-09T10:00:00Z');
    // Format depends on locale, but month+day+year should appear
    expect(out).toMatch(/(May|Apr).+(2026)/);
    expect(out).not.toBe('Date unknown');
  });

  it('formats Firestore { seconds, nanoseconds } shape', () => {
    const sec = Math.floor(new Date('2026-05-09T10:00:00Z').getTime() / 1000);
    const out = formatDate({ seconds: sec, nanoseconds: 0 });
    expect(out).toMatch(/(May|Apr).+(2026)/);
  });

  it('formats raw millisecond numbers', () => {
    const ms = new Date('2026-05-09T10:00:00Z').getTime();
    const out = formatDate(ms);
    expect(out).toMatch(/(May|Apr).+(2026)/);
  });
});
