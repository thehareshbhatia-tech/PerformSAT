import { formatHeroSubtitle, clampAtWordBoundary } from '../heroSubtitle';

// The plan's permutation matrix: every real field-presence combo gets a row,
// plus the priority ordering (today's focus → score-to-goal → countdown) and
// the hard word-boundary cap.
describe('formatHeroSubtitle', () => {
  const ready = (n) => ({ kind: 'ready', activities: Array.from({ length: n }, (_, i) => ({ id: i })) });

  describe('priority 1 — today\'s focus', () => {
    it('renders the activity count in words', () => {
      expect(formatHeroSubtitle({ todaySlice: ready(2) })).toBe('Two practice sets on deck today.');
      expect(formatHeroSubtitle({ todaySlice: ready(1) })).toBe('One practice set on deck today.');
    });

    it('outranks score and countdown when activities exist', () => {
      expect(formatHeroSubtitle({
        todaySlice: ready(3), latestScore: 650, targetScore: 700, daysUntilTest: 42,
      })).toBe('Three practice sets on deck today.');
    });

    it('skips non-focus slice kinds (rest-day, all-done, no-plan, refreshing, plan-complete)', () => {
      for (const kind of ['rest-day', 'all-done', 'no-plan', 'refreshing', 'plan-complete']) {
        expect(formatHeroSubtitle({ todaySlice: { kind, activities: [] }, daysUntilTest: 10 }))
          .toBe('Test day in 10 days.');
      }
    });

    it('uses digits for two-digit counts', () => {
      expect(formatHeroSubtitle({ todaySlice: ready(11) })).toBe('11 practice sets on deck today.');
    });
  });

  describe('priority 2 — score-to-goal (scale-safe)', () => {
    it('renders the delta when below target', () => {
      expect(formatHeroSubtitle({ latestScore: 650, targetScore: 700 }))
        .toBe('50 points from your 700 goal.');
    });

    it('renders the hold-it line at/above target', () => {
      expect(formatHeroSubtitle({ latestScore: 720, targetScore: 700 }))
        .toBe('Past your 700 goal — hold it.');
    });

    it('never compares a composite against the section target (falls to countdown)', () => {
      expect(formatHeroSubtitle({
        latestScore: 920, targetScore: 700, isMultiSection: true, daysUntilTest: 30,
      })).toBe('Test day in 30 days.');
    });

    it('legacy composite above the section ceiling also falls through', () => {
      expect(formatHeroSubtitle({ latestScore: 1100, targetScore: 700, daysUntilTest: 5 }))
        .toBe('Test day in 5 days.');
    });
  });

  describe('priority 3 — countdown, last resort only', () => {
    it('renders the countdown when nothing richer exists', () => {
      expect(formatHeroSubtitle({ daysUntilTest: 42 })).toBe('Test day in 42 days.');
      expect(formatHeroSubtitle({ daysUntilTest: 1 })).toBe('Test day in 1 day.');
    });

    it('renders test-day-is-today at 0', () => {
      expect(formatHeroSubtitle({ daysUntilTest: 0 })).toBe('Test day is today.');
    });

    it('hides a past test date (rail owns the update-in-settings message)', () => {
      expect(formatHeroSubtitle({ daysUntilTest: -3 })).toBeNull();
    });
  });

  describe('zero/partial data', () => {
    it('returns null with nothing to say (caller renders the fixed new-user string)', () => {
      expect(formatHeroSubtitle({})).toBeNull();
      expect(formatHeroSubtitle()).toBeNull();
    });

    it('score without target says nothing rather than a scoreless fact', () => {
      expect(formatHeroSubtitle({ latestScore: 650 })).toBeNull();
    });

    it('target without score says nothing (no fabricated delta)', () => {
      expect(formatHeroSubtitle({ targetScore: 700 })).toBeNull();
    });
  });

  describe('hard cap (clampAtWordBoundary)', () => {
    it('passes short text through untouched', () => {
      expect(clampAtWordBoundary('Two practice sets on deck today.'))
        .toBe('Two practice sets on deck today.');
    });

    it('caps long text at a word boundary with an ellipsis, never mid-word', () => {
      const long = 'A very long semicolon-chained sentence; that keeps running on and on without a period boundary anywhere in sight';
      const out = clampAtWordBoundary(long);
      expect(out.length).toBeLessThanOrEqual(65); // 64 cap + ellipsis
      expect(out.endsWith('…')).toBe(true);
      // The char before the ellipsis is a word end, not a mid-word cut.
      expect(long).toContain(out.slice(0, -1));
      expect(long[out.length - 1]).toBe(' ');
    });

    it('strips trailing punctuation before the ellipsis', () => {
      const out = clampAtWordBoundary(`${'word '.repeat(12)}tail; more and more and more`);
      expect(out).not.toMatch(/[,;:.]…$/);
    });
  });
});
