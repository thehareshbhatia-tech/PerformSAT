/**
 * Scale-safety tests for predictionEngine (Phase 2 onSessionComplete wiring).
 *
 * A full SAT is a 400-1600 composite; a single section is 200-800. The engine
 * used to clamp every band to 800 and validate against the diagnostic's
 * single-curve (always-section) scaled score — so for the composite tests that
 * are live in real data, the band collapsed and the verdict was always
 * "outside range". These tests pin the scale-aware behavior:
 *  - the band is clamped to, and tagged with, the right scale
 *  - validation compares the HEADLINE score on a matching scale
 *  - cross-scale comparison yields null (incomparable), not a misleading false
 *
 * generatePredictions / validatePrediction are pure; only save/validate* touch
 * Firestore, so the firebase chain is stubbed just so the module imports.
 */

jest.mock('../../firebase/config', () => ({ db: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  updateDoc: jest.fn(),
}));

import { generatePredictions, validatePrediction } from '../predictionEngine';

const fp = (over = {}) => ({ learningVelocity: 50, archetype: 'balanced', snapshots: [], ...over });

describe('generatePredictions — expectedScoreRange scale', () => {
  test('composite test produces a composite-scale band that is NOT clamped to 800', () => {
    const { predictions } = generatePredictions(fp(), {}, {}, [], 'sat-2', {
      isMultiSection: true,
      currentScore: 1200,
    });
    const r = predictions.expectedScoreRange;
    expect(r.scale).toBe('composite');
    expect(r.high).toBeGreaterThan(800);          // the old bug: composite clamped to 800
    expect(r.high).toBeLessThanOrEqual(1600);
    expect(r.low).toBeGreaterThanOrEqual(400);
    expect(r.low).toBeLessThanOrEqual(1200);       // band centered near the current score
    expect(r.high).toBeGreaterThanOrEqual(1200);
  });

  test('single-section test stays on the 200-800 scale', () => {
    const { predictions } = generatePredictions(fp(), {}, {}, [], 'sat-2', {
      isMultiSection: false,
      currentScore: 600,
    });
    const r = predictions.expectedScoreRange;
    expect(r.scale).toBe('section');
    expect(r.low).toBeGreaterThanOrEqual(200);
    expect(r.high).toBeLessThanOrEqual(800);
  });

  test('no history + no currentScore falls back to the full scale band', () => {
    const composite = generatePredictions(fp(), {}, {}, [], 'sat-2', { isMultiSection: true }).predictions.expectedScoreRange;
    expect(composite).toEqual({ low: 400, high: 1600, scale: 'composite' });

    const section = generatePredictions(fp(), {}, {}, [], 'sat-2', { isMultiSection: false }).predictions.expectedScoreRange;
    expect(section).toEqual({ low: 200, high: 800, scale: 'section' });
  });

  test('currentScore seeds the band even when in-memory history is empty', () => {
    // Default options (no isMultiSection, no currentScore) -> empty history -> default band.
    const noSeed = generatePredictions(fp(), {}, {}, [], 'sat-2').predictions.expectedScoreRange;
    expect(noSeed).toEqual({ low: 200, high: 800, scale: 'section' });
  });

  test('blank floor attempts never seed the baseline band', () => {
    // A legacy blank row (rawScore null, composite floor) used to enter
    // getRecentScores and drag the band toward 400. Filtered, the history is
    // empty and the band falls back to the full default.
    const blankOnly = {
      t23: {
        attempts: [{
          scaledScore: 400, isMultiSection: true, rawScore: null,
          completedAt: '2026-06-08T10:00:00.000Z',
        }],
      },
    };
    const r = generatePredictions(fp(), blankOnly, {}, [], 'sat-2', { isMultiSection: true })
      .predictions.expectedScoreRange;
    expect(r).toEqual({ low: 400, high: 1600, scale: 'composite' });
  });

  test('a participated floor attempt (rawScore > 0) still seeds the band', () => {
    const participatedFloor = {
      t7: {
        attempts: [{
          scaledScore: 400, isMultiSection: true, rawScore: 3, totalQuestions: 98,
          completedAt: '2026-06-07T10:00:00.000Z',
        }],
      },
    };
    const r = generatePredictions(fp(), participatedFloor, {}, [], 'sat-2', { isMultiSection: true })
      .predictions.expectedScoreRange;
    expect(r.scale).toBe('composite');
    expect(r.high).toBeLessThan(1600); // seeded near the floor, not the default band
  });
});

describe('validatePrediction — headline + cross-scale handling', () => {
  const compositePrediction = () => ({
    id: 'p1',
    resolved: false,
    predictions: {
      expectedScoreRange: { low: 1100, high: 1300, scale: 'composite' },
      likelyStruggleSkills: [],
      trapVulnerabilities: [],
      expectedArchetype: 'balanced',
    },
  });

  const diag = (scaled) => ({
    score: { scaled },
    skillAnalysis: { weakSkills: [] },
    errorPatterns: { counts: {} },
    mistakeFingerprint: { archetype: 'balanced' },
  });

  test('headline composite actual inside a composite band -> scoreInRange true', () => {
    const out = validatePrediction(compositePrediction(), diag(640), 'sat-3', {
      actualScore: 1240,
      isMultiSection: true,
    });
    expect(out.resolved).toBe(true);
    expect(out.actualTestId).toBe('sat-3');
    expect(out.accuracy.scoreInRange).toBe(true);
    expect(out.accuracy.archetypeMatch).toBe(true);
  });

  test('headline composite actual outside a composite band -> false', () => {
    const out = validatePrediction(compositePrediction(), diag(640), 'sat-3', {
      actualScore: 900,
      isMultiSection: true,
    });
    expect(out.accuracy.scoreInRange).toBe(false);
  });

  test('cross-scale (section actual vs composite band) -> null, not a false', () => {
    const out = validatePrediction(compositePrediction(), diag(700), 'sat-3', {
      actualScore: 700,
      isMultiSection: false,
    });
    expect(out.accuracy.scoreInRange).toBeNull();
  });

  test('legacy callers (no options) fall back to diagnostic.score.scaled', () => {
    // section-scale band, section actual via diagnostic.score.scaled
    const sectionPred = {
      id: 'p2', resolved: false,
      predictions: {
        expectedScoreRange: { low: 600, high: 700, scale: 'section' },
        likelyStruggleSkills: [], trapVulnerabilities: [], expectedArchetype: 'balanced',
      },
    };
    const out = validatePrediction(sectionPred, diag(650), 'sat-3');
    expect(out.accuracy.scoreInRange).toBe(true);
  });
});

describe('validatePrediction — persists the validation-time score', () => {
  const compositePrediction = () => ({
    id: 'p1',
    resolved: false,
    predictions: {
      expectedScoreRange: { low: 1100, high: 1300, scale: 'composite' },
      likelyStruggleSkills: [],
      trapVulnerabilities: [],
      expectedArchetype: 'balanced',
    },
  });

  const diag = (scaled) => ({
    score: { scaled },
    skillAnalysis: { weakSkills: [] },
    errorPatterns: { counts: {} },
    mistakeFingerprint: { archetype: 'balanced' },
  });

  test('options path persists accuracy.actualScore + actualScale', () => {
    const out = validatePrediction(compositePrediction(), diag(640), 'sat-3', {
      actualScore: 1240,
      isMultiSection: true,
    });
    expect(out.accuracy.actualScore).toBe(1240);
    expect(out.accuracy.actualScale).toBe('composite');
  });

  test('legacy-caller path persists the diagnostic fallback score', () => {
    const sectionPred = {
      id: 'p2', resolved: false,
      predictions: {
        expectedScoreRange: { low: 600, high: 700, scale: 'section' },
        likelyStruggleSkills: [], trapVulnerabilities: [], expectedArchetype: 'balanced',
      },
    };
    const out = validatePrediction(sectionPred, diag(650), 'sat-3');
    expect(out.accuracy.actualScore).toBe(650);
    expect(out.accuracy.actualScale).toBe('section'); // inherited from range.scale
  });

  test('nothing available -> strictly null, never undefined (Firestore rejects undefined)', () => {
    const noScoreDiag = {
      skillAnalysis: { weakSkills: [] },
      errorPatterns: { counts: {} },
      mistakeFingerprint: { archetype: 'balanced' },
    };
    const pred = {
      id: 'p3', resolved: false,
      predictions: {
        expectedScoreRange: {},
        likelyStruggleSkills: [], trapVulnerabilities: [], expectedArchetype: 'balanced',
      },
    };
    const out = validatePrediction(pred, noScoreDiag, 'sat-3');
    expect(out.accuracy.actualScore).toBeNull();
    expect(out.accuracy.actualScale).toBeNull();
    expect(out.accuracy.scoreInRange).toBeNull();
  });

  test('cross-scale verdict null still persists the score it saw', () => {
    const out = validatePrediction(compositePrediction(), diag(700), 'sat-3', {
      actualScore: 700,
      isMultiSection: false,
    });
    expect(out.accuracy.scoreInRange).toBeNull();
    expect(out.accuracy.actualScore).toBe(700);
    expect(out.accuracy.actualScale).toBe('section');
  });
});
