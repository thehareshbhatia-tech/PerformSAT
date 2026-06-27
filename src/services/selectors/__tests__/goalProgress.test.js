import {
  isGoalAchieved,
  goalDelta,
  isSectionScaleScore,
  isCompositeScaleScore,
  isCompositeScaleTarget,
  toCompositeGoal,
  SECTION_SCALE_MAX,
  COMPOSITE_SCALE_MAX,
  DEFAULT_GOAL_SCORE,
} from '../goalProgress';

describe('goalProgress — DEFAULT_GOAL_SCORE', () => {
  it('is a composite-scale goal (both sections), above the section ceiling', () => {
    // Must stay > 800 so the scale helpers treat the default as composite —
    // a default <= 800 would be silently mis-read as a math-section goal.
    expect(DEFAULT_GOAL_SCORE).toBeGreaterThan(SECTION_SCALE_MAX);
    expect(DEFAULT_GOAL_SCORE).toBeLessThanOrEqual(COMPOSITE_SCALE_MAX);
    expect(isCompositeScaleTarget(DEFAULT_GOAL_SCORE)).toBe(true);
  });
});

describe('goalProgress — isSectionScaleScore', () => {
  it('treats a section-flagged score within the ceiling as comparable', () => {
    expect(isSectionScaleScore(720, { isMultiSection: false })).toBe(true);
    expect(isSectionScaleScore(SECTION_SCALE_MAX, { isMultiSection: false })).toBe(true);
  });

  it('rejects a proven composite even when its number is small', () => {
    expect(isSectionScaleScore(700, { isMultiSection: true })).toBe(false);
  });

  it('trusts a legacy (unflagged) row only within the section ceiling', () => {
    expect(isSectionScaleScore(720, {})).toBe(true); // today's all-math world
    expect(isSectionScaleScore(810, {})).toBe(false); // > 800 ⇒ must be composite
  });

  it('rejects non-numbers', () => {
    expect(isSectionScaleScore(null, { isMultiSection: false })).toBe(false);
    expect(isSectionScaleScore(undefined, {})).toBe(false);
    expect(isSectionScaleScore(NaN, {})).toBe(false);
  });
});

describe('goalProgress — isGoalAchieved', () => {
  it('is true when a section score meets/exceeds a section target', () => {
    expect(isGoalAchieved({ latestScore: 720, targetScore: 700, isMultiSection: false })).toBe(true);
    expect(isGoalAchieved({ latestScore: 700, targetScore: 700, isMultiSection: false })).toBe(true);
  });

  it('is false when a section score is below the target', () => {
    expect(isGoalAchieved({ latestScore: 650, targetScore: 700, isMultiSection: false })).toBe(false);
  });

  it('NEVER celebrates a composite against a section target (the core 1.4 regression)', () => {
    // 900 >= 700 numerically, but 900 is a 400-1600 composite, not a section score.
    expect(isGoalAchieved({ latestScore: 900, targetScore: 700, isMultiSection: true })).toBe(false);
    expect(isGoalAchieved({ latestScore: 1500, targetScore: 700, isMultiSection: true })).toBe(false);
  });

  it('preserves today\'s all-math behavior for legacy unflagged rows', () => {
    expect(isGoalAchieved({ latestScore: 720, targetScore: 700, isMultiSection: undefined })).toBe(true);
  });

  it('backstops a legacy row whose score exceeds the section ceiling', () => {
    expect(isGoalAchieved({ latestScore: 810, targetScore: 700, isMultiSection: undefined })).toBe(false);
  });

  it('is false when target or latest score is missing', () => {
    expect(isGoalAchieved({ latestScore: 720, targetScore: null, isMultiSection: false })).toBe(false);
    expect(isGoalAchieved({ latestScore: null, targetScore: 700, isMultiSection: false })).toBe(false);
    expect(isGoalAchieved({})).toBe(false);
  });
});

describe('goalProgress — composite scale detection', () => {
  it('treats a target above the section ceiling as composite', () => {
    expect(isCompositeScaleTarget(1300)).toBe(true);
    expect(isCompositeScaleTarget(COMPOSITE_SCALE_MAX)).toBe(true);
  });

  it('treats a target at or below 800 as the legacy section scale', () => {
    expect(isCompositeScaleTarget(700)).toBe(false);
    expect(isCompositeScaleTarget(SECTION_SCALE_MAX)).toBe(false);
  });

  it('rejects out-of-range and non-numeric targets', () => {
    expect(isCompositeScaleTarget(1700)).toBe(false);
    expect(isCompositeScaleTarget(null)).toBe(false);
    expect(isCompositeScaleTarget(NaN)).toBe(false);
  });

  it('treats a flagged multi-section score as composite even when numerically low', () => {
    expect(isCompositeScaleScore(780, { isMultiSection: true })).toBe(true);
  });

  it('treats any score above 800 as provably composite without a flag', () => {
    expect(isCompositeScaleScore(1100, {})).toBe(true);
  });

  it('keeps an unflagged score at or below 800 ambiguous (never composite)', () => {
    expect(isCompositeScaleScore(780, {})).toBe(false);
    expect(isCompositeScaleScore(780, { isMultiSection: false })).toBe(false);
  });
});

describe('goalProgress — composite target comparisons (on-ramp 2026-06)', () => {
  it('celebrates a composite score that meets a composite target', () => {
    expect(isGoalAchieved({ latestScore: 1350, targetScore: 1300, isMultiSection: true })).toBe(true);
    expect(goalDelta({ latestScore: 1350, targetScore: 1300, isMultiSection: true })).toBe(50);
  });

  it('does not celebrate a composite score below a composite target', () => {
    expect(isGoalAchieved({ latestScore: 1250, targetScore: 1300, isMultiSection: true })).toBe(false);
    expect(goalDelta({ latestScore: 1250, targetScore: 1300, isMultiSection: true })).toBe(-50);
  });

  it('NEVER compares a section score against a composite target', () => {
    // 750 section vs 1300 composite goal: scales differ, suppress.
    expect(isGoalAchieved({ latestScore: 750, targetScore: 1300, isMultiSection: false })).toBe(false);
    expect(goalDelta({ latestScore: 750, targetScore: 1300, isMultiSection: false })).toBe(null);
  });

  it('keeps an ambiguous unflagged low score away from a composite target', () => {
    // A legacy unflagged 780 could be a section score — never match it composite.
    expect(isGoalAchieved({ latestScore: 780, targetScore: 1300 })).toBe(false);
    expect(goalDelta({ latestScore: 780, targetScore: 1300 })).toBe(null);
  });

  it('compares an unflagged score above 800 against a composite target (provably composite)', () => {
    expect(isGoalAchieved({ latestScore: 1310, targetScore: 1300 })).toBe(true);
    expect(goalDelta({ latestScore: 1310, targetScore: 1300 })).toBe(10);
  });

  it('keeps the section path byte-identical when the target is section-scale', () => {
    expect(isGoalAchieved({ latestScore: 720, targetScore: 700, isMultiSection: false })).toBe(true);
    expect(isGoalAchieved({ latestScore: 900, targetScore: 700, isMultiSection: true })).toBe(false);
  });
});

describe('goalProgress — toCompositeGoal (legacy section → composite migration)', () => {
  it('doubles a legacy section goal onto the composite scale ("N in each section")', () => {
    expect(toCompositeGoal(750)).toBe(1500); // the reported bug: 750 Math → 1500 composite
    expect(toCompositeGoal(700)).toBe(1400);
    expect(toCompositeGoal(600)).toBe(1200);
  });

  it('maps a perfect section goal to the composite ceiling', () => {
    expect(toCompositeGoal(SECTION_SCALE_MAX)).toBe(COMPOSITE_SCALE_MAX); // 800 → 1600
  });

  it('is idempotent — an already-composite goal passes through unchanged', () => {
    expect(toCompositeGoal(1500)).toBe(1500);
    expect(toCompositeGoal(DEFAULT_GOAL_SCORE)).toBe(DEFAULT_GOAL_SCORE);
    expect(toCompositeGoal(COMPOSITE_SCALE_MAX)).toBe(COMPOSITE_SCALE_MAX);
  });

  it('ALWAYS returns a provably composite value, so the migration never loops', () => {
    // A degenerate low goal whose double would not clear the section ceiling
    // must not stay ≤ 800 (it would be re-migrated on every load).
    expect(toCompositeGoal(400)).toBe(DEFAULT_GOAL_SCORE); // 400*2 = 800, not > 800 → default
    expect(toCompositeGoal(300)).toBe(DEFAULT_GOAL_SCORE);
    expect(isCompositeScaleTarget(toCompositeGoal(750))).toBe(true);
    expect(isCompositeScaleTarget(toCompositeGoal(400))).toBe(true);
  });

  it('passes non-numbers through unchanged (nothing to migrate)', () => {
    expect(toCompositeGoal(null)).toBe(null);
    expect(toCompositeGoal(undefined)).toBe(undefined);
    expect(toCompositeGoal(NaN)).toBeNaN();
  });
});

describe('goalProgress — goalDelta', () => {
  it('returns points above target for a same-scale comparison', () => {
    expect(goalDelta({ latestScore: 720, targetScore: 700, isMultiSection: false })).toBe(20);
  });

  it('returns a negative delta when below target (still same-scale)', () => {
    expect(goalDelta({ latestScore: 650, targetScore: 700, isMultiSection: false })).toBe(-50);
  });

  it('returns null for a cross-scale comparison so the UI shows no delta', () => {
    expect(goalDelta({ latestScore: 900, targetScore: 700, isMultiSection: true })).toBe(null);
  });

  it('returns null when a value is missing', () => {
    expect(goalDelta({ latestScore: 720, targetScore: null })).toBe(null);
    expect(goalDelta({})).toBe(null);
  });
});
