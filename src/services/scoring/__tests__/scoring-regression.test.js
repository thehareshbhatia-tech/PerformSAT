/**
 * Regression test for the reported scaled score (raw→scaled table path).
 *
 * WHY THIS TEST EXISTS
 * ────────────────────
 * The reported section score comes from the per-section, route-aware raw→scaled
 * lookup table (scaleTables.js), NOT from IRT theta. The score is therefore a
 * deterministic function of (raw-correct, total, route) and is INDEPENDENT of
 * per-item band/difficulty metadata. This test locks the engine's output for a
 * fixed synthetic test + answer pattern so any unintended drift shows up
 * immediately, and pins the band-independence invariant (band-aware and
 * band-stripped runs must produce the identical reported score).
 *
 * WHEN TO UPDATE
 * ──────────────
 * Only update the locked baseline when the conversion TABLE itself changes
 * (scaleTables.js) or the 0.60 routing threshold changes. A refactor to
 * irtEngine.js / scoringSchema.js / calibration.js must never move it.
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
 * Module-1 accuracy here is 14/22 = 63.6% (≥ 60%), so the scorer routes to
 * the HARD Module 2 — pinned by the route assertion below.
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
// LOCKED BASELINE
// ═══════════════════════════════════════════════════════════════════════════
//
// raw 26/44 with Module-1 accuracy 14/22 (63.6% ≥ 60% → HARD route) maps to
// MATH_HARD[26] = 560 via scaleTables.js. Deterministic table lookup; do NOT
// hand-edit unless scaleTables.js or the 0.60 routing threshold changes.
// ═══════════════════════════════════════════════════════════════════════════

const EXPECTED_SCORE = 560;

// ═══════════════════════════════════════════════════════════════════════════
// TESTS
// ═══════════════════════════════════════════════════════════════════════════

describe('reported-score regression — raw→scaled table', () => {
  it('produces the locked table baseline for the fixed answer pattern', () => {
    const result = scoreTest(buildSyntheticTest(true), buildFixedAnswers());

    expect(result.rawScore).toBe(26); // 14 + 12
    expect(result.totalQuestions).toBe(44);
    expect(result.sectionScore).toBe(EXPECTED_SCORE);
  });

  it('routes off Module-1 accuracy: 14/22 (63.6%) → hard route', () => {
    const result = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    expect(result.routeTaken).toBe('hard');
  });

  it('band metadata does NOT change the reported score (band-independent)', () => {
    // The table keys on raw + route only. This is the deliberate replacement
    // for the old IRT band-sensitivity — a student can verify their score from
    // the raw count alone, regardless of which items they missed.
    const bandAware = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    const bandStripped = scoreTest(buildSyntheticTest(false), buildFixedAnswers());

    expect(bandAware.sectionScore).toBe(bandStripped.sectionScore);
  });

  it('both runs produce identical raw scores and module breakdowns', () => {
    const bandAware = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    const bandStripped = scoreTest(buildSyntheticTest(false), buildFixedAnswers());

    expect(bandAware.rawScore).toBe(bandStripped.rawScore);
    expect(bandAware.moduleScores).toEqual(bandStripped.moduleScores);
    expect(bandAware.moduleScores[0].score).toBe(14);
    expect(bandAware.moduleScores[1].score).toBe(12);
  });

  it('result is deterministic — repeated runs give the same score', () => {
    const r1 = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    const r2 = scoreTest(buildSyntheticTest(true), buildFixedAnswers());
    expect(r1.sectionScore).toBe(r2.sectionScore);
    expect(r1.thetaEstimate).toBe(r2.thetaEstimate);
  });
});
