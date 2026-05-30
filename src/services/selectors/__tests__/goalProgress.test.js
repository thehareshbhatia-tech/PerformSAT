import { isGoalAchieved, goalDelta, isSectionScaleScore, SECTION_SCALE_MAX } from '../goalProgress';

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
