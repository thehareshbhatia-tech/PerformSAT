/**
 * Regression test for band-aware IRT scoring.
 *
 * WHY THIS TEST EXISTS
 * ────────────────────
 * The whole point of band-aware IRT is to **change** scaled-score behavior
 * for the same answer pattern, because top-of-band items now carry a more
 * accurate b-parameter.  This test locks the engine's actual output for a
 * fixed synthetic test + answer pattern so any unintended drift in the
 * scoring pipeline (3PL probability, MLE convergence, theta clamps,
 * theta→scale interpolation, band→b mapping) shows up immediately.
 *
 * WHEN TO UPDATE
 * ──────────────
 * Only update the locked baselines when an *intentional* IRT change is
 * shipped.  Examples of intentional changes:
 *   - BAND_TO_B re-calibrated against new CB equating data
 *   - DEFAULT_THETA_SCALE replaced with official equating tables
 *   - 3PL guess parameter (c) updated for SAT-specific values
 *
 * Examples of changes that should NOT shift these baselines:
 *   - Refactors to scoringSchema.js / irtEngine.js / calibration.js
 *   - Adding new metadata fields to questions
 *   - Renaming functions or restructuring exports
 *
 * If a refactor causes these baselines to drift, that's a regression and
 * needs investigation — do not just re-lock the numbers.
 */

import { scoreTest } from '../irtEngine';

// ═══════════════════════════════════════════════════════════════════════════
// FIXTURE BUILDERS
// ═══════════════════════════════════════════════════════════════════════════

// Distribution per module: 3 band-1, 4 band-3, 5 band-5, 5 band-6, 5 band-7
// (22 items total).  Mixes domains so the test exercises domain-agnostic
// scoring.  Order is fixed and deterministic.
const BAND_DISTRIBUTION = [
  // 3 × band-1 (very easy)
  { band: 1, domain: 'algebra' },
  { band: 1, domain: 'craft-and-structure' },
  { band: 1, domain: 'advanced-math' },
  // 4 × band-3 (easy)
  { band: 3, domain: 'algebra' },
  { band: 3, domain: 'information-and-ideas' },
  { band: 3, domain: 'problem-solving' },
  { band: 3, domain: 'standard-english' },
  // 5 × band-5 (medium)
  { band: 5, domain: 'algebra' },
  { band: 5, domain: 'advanced-math' },
  { band: 5, domain: 'expression-of-ideas' },
  { band: 5, domain: 'problem-solving' },
  { band: 5, domain: 'craft-and-structure' },
  // 5 × band-6 (medium-hard)
  { band: 6, domain: 'advanced-math' },
  { band: 6, domain: 'geometry' },
  { band: 6, domain: 'information-and-ideas' },
  { band: 6, domain: 'algebra' },
  { band: 6, domain: 'standard-english' },
  // 5 × band-7 (hard)
  { band: 7, domain: 'advanced-math' },
  { band: 7, domain: 'geometry' },
  { band: 7, domain: 'algebra' },
  { band: 7, domain: 'expression-of-ideas' },
  { band: 7, domain: 'problem-solving' },
];

function buildModule(modIdx, withBand = true) {
  return {
    id: `mod-${modIdx + 1}`,
    title: `Module ${modIdx + 1}`,
    timeLimit: 35,
    questions: BAND_DISTRIBUTION.map((spec, qIdx) => {
      const q = {
        id: `m${modIdx + 1}-q${qIdx + 1}`,
        type: 'multiple-choice',
        // Difficulty is derived from band so band-stripped runs still have
        // a sensible baseline through the difficulty fallback path.
        difficulty:
          spec.band <= 2 ? 'easy' : spec.band <= 5 ? 'medium' : 'hard',
        correctAnswer: 'B',
        choices: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' },
        ],
        skills: [spec.domain],
      };
      if (withBand) {
        q.band = spec.band;
      }
      return q;
    }),
  };
}

function buildSyntheticTest(withBand = true) {
  return {
    id: 'regression-synthetic',
    title: 'Regression Synthetic Test',
    totalQuestions: 44,
    timePerModule: 35,
    modules: [buildModule(0, withBand), buildModule(1, withBand)],
  };
}

/**
 * Build a deterministic answer pattern.
 *
 * Module 1: 14/22 correct — easier items hit, harder items missed.
 *   Hits all 3 band-1 + all 4 band-3 + all 5 band-5 + 2 of 5 band-6
 *   = 3 + 4 + 5 + 2 = 14 correct
 *
 * Module 2: 12/22 correct — also concentrates on easier items.
 *   Hits all 3 band-1 + all 4 band-3 + all 5 band-5 + 0 band-6 + 0 band-7
 *   = 3 + 4 + 5 = 12 correct
 *
 * The asymmetric pattern lets us verify the scorer responds to band
 * weighting (right answers on harder items count more).
 */
function buildFixedAnswers() {
  const answers = {};

  // Indices in BAND_DISTRIBUTION: 0-2 band1, 3-6 band3, 7-11 band5,
  // 12-16 band6, 17-21 band7.
  const mod1Hits = new Set([
    0, 1, 2,            // 3 × band-1
    3, 4, 5, 6,         // 4 × band-3
    7, 8, 9, 10, 11,    // 5 × band-5
    12, 13,             // 2 × band-6
  ]);
  const mod2Hits = new Set([
    0, 1, 2,            // 3 × band-1
    3, 4, 5, 6,         // 4 × band-3
    7, 8, 9, 10, 11,    // 5 × band-5
  ]);

  for (let qIdx = 0; qIdx < 22; qIdx++) {
    answers[`0-${qIdx}`] = mod1Hits.has(qIdx) ? 'B' : 'A';
    answers[`1-${qIdx}`] = mod2Hits.has(qIdx) ? 'B' : 'A';
  }
  return answers;
}

// ═══════════════════════════════════════════════════════════════════════════
// LOCKED BASELINES
// ═══════════════════════════════════════════════════════════════════════════
//
// These constants were captured from the engine's actual output on the
// fixture above.  Do NOT hand-edit unless you've intentionally changed the
// IRT model or calibration data — see the WHY/WHEN comment at the top.
//
// Captured: band-aware run yields a sectionScore that reflects the granular
// b-parameter mapping; band-stripped run yields a different sectionScore
// because items fall back to the coarse difficulty buckets.
// ═══════════════════════════════════════════════════════════════════════════

const EXPECTED_BAND_AWARE_SCORE = 570;
const EXPECTED_BAND_STRIPPED_SCORE = 600;

// Allowed drift around each baseline.  ±10 points is one SAT score-step;
// any larger movement is investigated as a regression.
const SCORE_TOLERANCE = 10;

// ═══════════════════════════════════════════════════════════════════════════
// TESTS
// ═══════════════════════════════════════════════════════════════════════════

describe('IRT scoring regression — band-aware vs band-stripped', () => {
  it('band-aware run produces the locked baseline scaled score (±10)', () => {
    const test = buildSyntheticTest(true);
    const answers = buildFixedAnswers();
    const result = scoreTest(test, answers);

    expect(result.rawScore).toBe(26); // 14 + 12
    expect(result.totalQuestions).toBe(44);
    expect(result.sectionScore).toBeGreaterThanOrEqual(200);
    expect(result.sectionScore).toBeLessThanOrEqual(800);
    // SAT scaled scores are integers (multiples of 10), so we use an explicit
    // ±SCORE_TOLERANCE window rather than toBeCloseTo's float-based precision.
    expect(
      Math.abs(result.sectionScore - EXPECTED_BAND_AWARE_SCORE),
    ).toBeLessThanOrEqual(SCORE_TOLERANCE);
  });

  it('band-stripped run produces a different (locked) baseline (±10)', () => {
    const test = buildSyntheticTest(false);
    const answers = buildFixedAnswers();
    const result = scoreTest(test, answers);

    expect(result.rawScore).toBe(26);
    expect(result.totalQuestions).toBe(44);
    expect(result.sectionScore).toBeGreaterThanOrEqual(200);
    expect(result.sectionScore).toBeLessThanOrEqual(800);
    expect(
      Math.abs(result.sectionScore - EXPECTED_BAND_STRIPPED_SCORE),
    ).toBeLessThanOrEqual(SCORE_TOLERANCE);
  });

  it('band-aware score is LOWER than band-stripped for this answer pattern', () => {
    // Direction note: in this fixture the student misses every band-7 item
    // and most band-6 items.  When bands are present, those misses are
    // properly weighted as harder-than-medium items, so the MLE pushes
    // theta DOWN more than the difficulty-bucket fallback (which treats
    // all "hard" items at b=+1.5 — same as band-7 — but band-6 items are
    // also bucketed as hard, inflating their b above 0.7).  The combined
    // shape of hits/misses across the 7-band distribution yields a lower
    // theta and therefore a lower scaled score under band-aware scoring.
    //
    // This direction was empirically confirmed and locked.  If a future
    // BAND_TO_B re-calibration flips this direction, this assertion (and
    // the accompanying baselines) must be updated together.
    const bandAware = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    const bandStripped = scoreTest(buildSyntheticTest(false), buildFixedAnswers());

    expect(bandAware.sectionScore).toBeLessThan(bandStripped.sectionScore);
  });

  it('both runs produce identical raw scores and module breakdowns', () => {
    // Sanity: band metadata only affects IRT b — it must not change the
    // raw correctness counts or module score totals.
    const bandAware = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    const bandStripped = scoreTest(buildSyntheticTest(false), buildFixedAnswers());

    expect(bandAware.rawScore).toBe(bandStripped.rawScore);
    expect(bandAware.moduleScores).toEqual(bandStripped.moduleScores);
    expect(bandAware.moduleScores[0].score).toBe(14);
    expect(bandAware.moduleScores[1].score).toBe(12);
  });

  it('result is deterministic — repeated runs give the same score', () => {
    const test = buildSyntheticTest(true);
    const answers = buildFixedAnswers();
    const r1 = scoreTest(test, answers);
    const r2 = scoreTest(test, answers);
    expect(r1.sectionScore).toBe(r2.sectionScore);
    expect(r1.thetaEstimate).toBe(r2.thetaEstimate);
  });
});
