/**
 * latestTestStats.js — pure selector that derives the REAL numbers for the
 * dashboard "Practice Test Results" card from `practiceTestResults`.
 *
 * Replaces the card's fabricated placeholders ('43/44', 'Accuracy 91%',
 * '+3% vs last exam') with values computed from the student's own attempts.
 * Every field is null when the underlying data can't prove it — callers hide
 * the line instead of faking it.
 *
 * Zero service/data imports (selectors/ convention) — safe for main-chunk
 * consumers (bundleGuard).
 */

/** Coerce the assorted timestamp shapes (Firestore Timestamp, Date, ISO
 * string, epoch ms) into epoch ms, or null when unparseable. */
function toMillis(ts) {
  if (!ts) return null;
  if (typeof ts === 'number') return ts;
  if (ts instanceof Date) return ts.getTime();
  if (typeof ts === 'object') {
    if (typeof ts.toMillis === 'function') return ts.toMillis();
    if (typeof ts.seconds === 'number') return ts.seconds * 1000;
  }
  if (typeof ts === 'string') {
    const t = Date.parse(ts);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}

/**
 * Is this attempt a provably blank/abandoned submission? Blank submissions
 * still get an IRT floor score (200/section, composite 400) and must not
 * surface as results anywhere. `answeredCount` is the explicit signal
 * (written since 2026-06); legacy rows fall back to the rawScore-0
 * signature, which on 4-choice MC is only producible by a blank submission.
 *
 * @param {object} a - an attempt row from practiceTestResults[testId].attempts
 * @returns {boolean} true when the attempt is provably blank
 */
export function isBlankAttempt(a) {
  if (!a) return false;
  if (a.answeredCount === 0) return true;
  if (a.answeredCount == null && a.rawScore === 0) return true;
  return false;
}

/**
 * Did the student actually participate AND does the attempt carry a usable
 * score? Stricter than !isBlankAttempt — use this where the consumer needs
 * a numeric scaledScore (score tiles, history charts, deltas).
 *
 * @param {object} a - an attempt row from practiceTestResults[testId].attempts
 * @returns {boolean} true when the attempt is a real, scoreable result
 */
export function isScoreableAttempt(a) {
  if (!a || typeof a.scaledScore !== 'number') return false;
  return !isBlankAttempt(a);
}

/** Sum an attempt's moduleScores rows for one section. Returns
 * { correct, total } or null when no usable rows exist. */
function sumSectionRaw(moduleScores, sectionName) {
  if (!Array.isArray(moduleScores)) return null;
  let correct = 0;
  let total = 0;
  let seen = false;
  for (const m of moduleScores) {
    if (!m || m.moduleSection !== sectionName) continue;
    if (typeof m.score === 'number' && typeof m.total === 'number') {
      correct += m.score;
      total += m.total;
      seen = true;
    }
  }
  return seen && total > 0 ? { correct, total } : null;
}

/**
 * Derive the latest-attempt stats (and deltas vs the previous attempt)
 * across every test row in `practiceTestResults`.
 *
 * @param {Object<string, {attempts?: Array, testTitle?: string, lastAttemptAt?: any}>} practiceTestResults
 * @returns {null | {
 *   scaledScore: number,
 *   isMultiSection: boolean,
 *   rawScore: number|null,
 *   totalQuestions: number|null,
 *   accuracy: number|null,            // 0-100, rawScore/totalQuestions
 *   scoreDelta: number|null,          // vs previous attempt; null on scale mismatch
 *   accuracyDelta: number|null,       // percentage points vs previous attempt
 *   math: { scaled: number|null, correct: number|null, total: number|null } | null,
 *   rw:   { scaled: number|null, correct: number|null, total: number|null } | null,
 *   testTitle: string|null,
 *   attemptCount: number,
 * }} null when no scored attempt exists (caller renders the take-a-test CTA)
 */
export function getLatestTestStats(practiceTestResults) {
  if (!practiceTestResults || typeof practiceTestResults !== 'object') return null;

  const all = [];
  for (const row of Object.values(practiceTestResults)) {
    const attempts = (row && Array.isArray(row.attempts)) ? row.attempts : [];
    for (const a of attempts) {
      // Skip non-participating attempts — a blank/abandoned submission would
      // render as the student's "latest result" AND poison the next real
      // test's delta baseline.
      if (!isScoreableAttempt(a)) continue;
      all.push({
        attempt: a,
        testTitle: row.testTitle || null,
        ms: toMillis(a.completedAt) ?? toMillis(row.lastAttemptAt) ?? 0,
      });
    }
  }
  if (all.length === 0) return null;

  all.sort((x, y) => y.ms - x.ms);
  const a = all[0].attempt;
  const prev = all[1] ? all[1].attempt : null;

  const rawScore = typeof a.rawScore === 'number' ? a.rawScore : null;
  const totalQuestions = (typeof a.totalQuestions === 'number' && a.totalQuestions > 0)
    ? a.totalQuestions : null;
  const accuracy = (rawScore !== null && totalQuestions !== null)
    ? Math.round((rawScore / totalQuestions) * 100) : null;

  // Deltas vs the chronologically-previous attempt. Score deltas only
  // compare like scales (a 400-1600 composite vs a 200-800 section score
  // would render a nonsense "+700 pts").
  let scoreDelta = null;
  let accuracyDelta = null;
  if (prev) {
    if (typeof prev.scaledScore === 'number' && !!prev.isMultiSection === !!a.isMultiSection) {
      scoreDelta = a.scaledScore - prev.scaledScore;
    }
    const pRaw = typeof prev.rawScore === 'number' ? prev.rawScore : null;
    const pTotal = (typeof prev.totalQuestions === 'number' && prev.totalQuestions > 0)
      ? prev.totalQuestions : null;
    if (accuracy !== null && pRaw !== null && pTotal !== null) {
      accuracyDelta = accuracy - Math.round((pRaw / pTotal) * 100);
    }
  }

  // Per-section breakdown. Scaled scores come from irtEngine's sectionScores
  // ({ math, 'reading-writing' }); raw correct/total from moduleScores rows.
  const sec = (a.sectionScores && typeof a.sectionScores === 'object') ? a.sectionScores : null;
  const mathScaled = sec && typeof sec.math === 'number' ? sec.math : null;
  const rwScaled = sec && typeof sec['reading-writing'] === 'number' ? sec['reading-writing'] : null;
  const mathRaw = sumSectionRaw(a.moduleScores, 'math');
  const rwRaw = sumSectionRaw(a.moduleScores, 'reading-writing');

  let math = (mathScaled !== null || mathRaw)
    ? { scaled: mathScaled, correct: mathRaw?.correct ?? null, total: mathRaw?.total ?? null }
    : null;
  const rw = (rwScaled !== null || rwRaw)
    ? { scaled: rwScaled, correct: rwRaw?.correct ?? null, total: rwRaw?.total ?? null }
    : null;

  // Legacy math-only rows (pre-sectionScores schema): the headline score IS
  // the math section score — the product was math-only in that era.
  if (!math && !rw && !a.isMultiSection) {
    math = { scaled: a.scaledScore, correct: rawScore, total: totalQuestions };
  }

  return {
    scaledScore: a.scaledScore,
    isMultiSection: !!a.isMultiSection,
    rawScore,
    totalQuestions,
    accuracy,
    scoreDelta,
    accuracyDelta,
    math,
    rw,
    testTitle: all[0].testTitle,
    attemptCount: all.length,
  };
}
