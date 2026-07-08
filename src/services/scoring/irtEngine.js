/**
 * IRT Scoring Engine for SAT-style multistage adaptive tests.
 *
 * Implements:
 *  - 3-Parameter Logistic (3PL) item response model
 *  - Maximum Likelihood Estimation (MLE) of ability (theta)
 *  - Fisher information for standard error
 *  - Theta-to-scale conversion via the calibration layer
 *  - Module-route-aware scoring so different paths produce fair,
 *    equated scores on the same reported scale
 */

import { getItemParams, determineRoute } from './calibration';
import { rawToScaled } from './scaleTables';
import { createScoredResult, MODULE_ROUTE } from './scoringSchema';

// Sections that take a Math-style easy/hard Module-2 route. A section-less math
// test collapses to the 'default' bucket; R&W never routes.
const MATH_SECTION_KEYS = new Set(['math', 'default']);

// ═══════════════════════════════════════════════════════════════════════════
// 3PL MODEL
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Probability of a correct response under the 3PL model.
 *
 * P(theta) = c + (1 - c) / (1 + exp(-a * (theta - b)))
 */
function prob3PL(theta, { a, b, c }) {
  const exponent = -a * (theta - b);
  const logistic = 1.0 / (1.0 + Math.exp(exponent));
  return c + (1.0 - c) * logistic;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAXIMUM LIKELIHOOD ESTIMATION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Estimate ability (theta) from a response pattern using
 * Newton-Raphson maximum likelihood estimation.
 *
 * @param {Array<{params: {a,b,c}, response: 0|1}>} items
 * @param {number} [initialTheta=0]  starting value
 * @returns {{ theta: number, se: number, converged: boolean, iterations: number }}
 */
function estimateTheta(items, initialTheta = 0) {
  const MAX_ITER = 50;
  const TOLERANCE = 0.001;
  const THETA_MIN = -4;
  const THETA_MAX = 4;

  let theta = initialTheta;

  // Edge cases: perfect or zero score
  const totalCorrect = items.reduce((s, i) => s + i.response, 0);
  if (totalCorrect === 0) {
    return { theta: THETA_MIN, se: estimateSE(items, THETA_MIN), converged: true, iterations: 0 };
  }
  if (totalCorrect === items.length) {
    return { theta: THETA_MAX, se: estimateSE(items, THETA_MAX), converged: true, iterations: 0 };
  }

  let converged = false;
  let iter = 0;

  for (iter = 0; iter < MAX_ITER; iter++) {
    let logLikDeriv1 = 0; // first derivative of log-likelihood
    let logLikDeriv2 = 0; // second derivative of log-likelihood

    for (const { params, response } of items) {
      const p = prob3PL(theta, params);
      const pStar = (p - params.c) / (1 - params.c); // un-guessing adjusted

      // Guard against extreme probabilities
      const pClamped = Math.min(Math.max(p, 1e-10), 1 - 1e-10);
      const pStarClamped = Math.min(Math.max(pStar, 1e-10), 1);

      const w = pStarClamped * (1 - pClamped);
      const residual = response - pClamped;

      logLikDeriv1 += params.a * w * (residual / (pClamped * (1 - pClamped)));
      logLikDeriv2 += -(params.a * params.a) * w * w / (pClamped * (1 - pClamped));
    }

    if (Math.abs(logLikDeriv2) < 1e-15) break;

    const delta = -logLikDeriv1 / logLikDeriv2;
    theta += delta;
    theta = Math.min(Math.max(theta, THETA_MIN), THETA_MAX);

    if (Math.abs(delta) < TOLERANCE) {
      converged = true;
      break;
    }
  }

  const se = estimateSE(items, theta);
  return { theta, se, converged, iterations: iter };
}

/**
 * Standard error via Fisher information.
 * SE(theta) = 1 / sqrt( sum of item information )
 */
function estimateSE(items, theta) {
  let info = 0;
  for (const { params } of items) {
    const p = prob3PL(theta, params);
    const pClamped = Math.min(Math.max(p, 1e-10), 1 - 1e-10);
    const pStar = Math.max((pClamped - params.c) / (1 - params.c), 1e-10);
    const itemInfo = (params.a * params.a * pStar * pStar * (1 - pClamped)) / (pClamped);
    info += itemInfo;
  }
  return info > 0 ? 1 / Math.sqrt(info) : 9.99;
}

// ═══════════════════════════════════════════════════════════════════════════
// PUBLIC SCORING API
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Check whether a single answer is correct.
 * Centralises the correctness logic that was previously duplicated
 * in PracticeTest, TestResults, and diagnosticEngine.
 */
export function isAnswerCorrect(question, userAnswer) {
  if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
    return false;
  }
  if (question.type === 'fill-in') {
    // Normalise both sides to strings so '1' vs 1 never causes a false negative.
    // Also strip thousands separators + any whitespace and fold a unicode minus
    // (U+2212) to ASCII '-', so SAT-valid entries like "1,000", "19 / 5" and
    // "−5" grade against their plain forms instead of failing Number().
    const normalizeGrid = (s) => String(s)
      .replace(/[−–—]/g, '-')  // unicode minus / en / em dash to hyphen
      .replace(/[,\s]/g, '')    // thousands separators + all whitespace
      .trim();
    const ua = normalizeGrid(userAnswer);
    const ca = normalizeGrid(question.correctAnswer);
    if (ua === ca) return true;
    // Numeric comparison — Number() (not parseFloat) so "12/13" → NaN, not 12
    // Parse "a/b" to a number so a fraction answer key matches its decimal
    // equivalent (e.g. "19/5" vs 3.8) — plain Number("19/5") is NaN by design,
    // which is why valid decimal entries were being marked wrong. Non-fractions
    // still go through Number().
    const toNum = (s) => {
      if (/^-?\d+\/\d+$/.test(s)) {
        const [n, d] = s.split('/').map(Number);
        return d === 0 ? NaN : n / d;
      }
      return Number(s);
    };
    const numUser = toNum(ua);
    const numCorrect = toNum(ca);
    // SAT grid-ins accept the fraction OR a decimal rounded/truncated to >=3
    // places, so allow a tiny FLAT tolerance. 3-place rounding/truncation error
    // is always < 0.001 in absolute terms regardless of magnitude — do NOT
    // scale the window by |y| (that would accept adjacent integers like 1001
    // for a 1000 answer).
    const within = (x, y) => Math.abs(x - y) <= 1e-3;
    if (!isNaN(numUser) && !isNaN(numCorrect) && within(numUser, numCorrect)) return true;
    if (Array.isArray(question.acceptedAnswers)) {
      return question.acceptedAnswers.some(a => {
        const as = normalizeGrid(a);
        if (ua === as) return true;
        const numA = toNum(as);
        return !isNaN(numUser) && !isNaN(numA) && within(numUser, numA);
      });
    }
    return false;
  }
  return String(userAnswer) === String(question.correctAnswer);
}

/**
 * Score a complete practice test using IRT.
 *
 * @param {Object}   test      Practice test definition (modules, questions)
 * @param {Object}   answers   Student answers keyed as "modIdx-qIdx"
 * @param {Object}   [opts]    Options
 * @param {boolean}  [opts.timedMode]
 * @param {Object}   [opts.diagnosticData]
 * @returns {import('./scoringSchema').ScoredResult}
 */
export function scoreTest(test, answers, opts = {}) {
  const { timedMode = false, diagnosticData = null } = opts;
  const formId = test.id;
  // The Math Module-2 variant the student was actually served, threaded from
  // the test runner (PracticeTest's module2Variant). Authoritative over the
  // M1-accuracy fallback below — and it rides on diagnosticData too so the
  // diagnostic engine derives the identical route.
  const servedMathRoute = opts.mathRoute || diagnosticData?.mathRoute || null;

  // ── 1. Score every item, grouped by module section ─────────────────────
  // Each section accumulates its raw-correct count + total + Module-1 accuracy.
  // Tests without per-module section info collapse to a single 'default' bucket.
  const sectionItems = {};   // section → [{ params, response }] (IRT, for SE)
  const sectionRaw = {};     // section → correct count (drives the reported score)
  const sectionTotal = {};   // section → scored item count
  const sectionM1 = {};      // section → { correct, total } for its FIRST module
  const seenSection = new Set();
  let totalCorrect = 0;
  let totalQuestions = 0;

  const moduleScores = test.modules.map((mod, modIdx) => {
    const section = mod.section || test.section || 'default';
    if (!sectionItems[section]) {
      sectionItems[section] = [];
      sectionRaw[section] = 0;
      sectionTotal[section] = 0;
    }
    const isFirstModuleOfSection = !seenSection.has(section);
    seenSection.add(section);
    if (isFirstModuleOfSection) sectionM1[section] = { correct: 0, total: 0 };

    let modCorrect = 0;
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const userAnswer = answers[key];
      const correct = isAnswerCorrect(q, userAnswer);

      const params = getItemParams(q);
      sectionItems[section].push({ params, response: correct ? 1 : 0 });

      sectionTotal[section] += 1;
      if (correct) {
        totalCorrect++;
        modCorrect++;
        sectionRaw[section] += 1;
      }
      totalQuestions++;

      if (isFirstModuleOfSection) {
        sectionM1[section].total += 1;
        if (correct) sectionM1[section].correct += 1;
      }
    });
    return {
      moduleTitle: mod.title,
      moduleSection: section,
      score: modCorrect,
      total: mod.questions.length,
    };
  });

  // Route (easy/hard Module 2) is meaningful for MATH only. Prefer the variant
  // actually served; otherwise derive from that section's Module-1 accuracy —
  // the MATH M1, not the first module overall (in a composite the first module
  // is R&W, which is the long-standing quirk this fixes).
  const routeForSection = (section) => {
    if (!MATH_SECTION_KEYS.has(section)) return MODULE_ROUTE.HARD;
    if (servedMathRoute === MODULE_ROUTE.EASY || servedMathRoute === MODULE_ROUTE.HARD) {
      return servedMathRoute;
    }
    const m1 = sectionM1[section];
    if (!m1 || m1.total === 0 || test.modules.length < 2) return MODULE_ROUTE.HARD;
    return determineRoute(formId, m1.correct, m1.total);
  };

  // ── 2. Score each section independently ────────────────────────────────
  // REPORTED score comes from the route-aware raw→scaled table. IRT theta is
  // still estimated, but only to carry the standard error for diagnostics.
  const sectionScores = {};
  const sectionThetas = {};
  const sectionRoutes = {};
  let aggregateSE = 0;
  Object.entries(sectionItems).forEach(([section, items]) => {
    if (items.length === 0) return;
    const { theta, se } = estimateTheta(items);
    sectionThetas[section] = Math.round(theta * 1000) / 1000;
    aggregateSE += se * se;

    const route = routeForSection(section);
    sectionRoutes[section] = route;
    const tableSection = MATH_SECTION_KEYS.has(section) ? 'math' : section;
    sectionScores[section] = rawToScaled(tableSection, sectionRaw[section], sectionTotal[section], route);
  });
  aggregateSE = Math.sqrt(aggregateSE);

  // routeTaken reflects the MATH route (R&W has none); fixes the old behavior
  // where it was computed off module 0 (= R&W in a composite).
  const mathSectionKey = Object.keys(sectionScores).find(k => MATH_SECTION_KEYS.has(k));
  const routeTaken = mathSectionKey ? sectionRoutes[mathSectionKey] : MODULE_ROUTE.HARD;

  // ── 4. Compose the headline score ──────────────────────────────────────
  // Single-section tests: the section score IS the headline (200-800).
  // Multi-section tests: headline is the SAT composite (sum, 400-1600).
  const sectionKeys = Object.keys(sectionScores);
  const isMultiSection = sectionKeys.length > 1;
  const totalScore = sectionKeys.reduce((sum, k) => sum + sectionScores[k], 0);
  const headlineScore = isMultiSection ? totalScore : (sectionScores[sectionKeys[0]] || 0);

  // For backwards compat with single-section consumers, expose `theta` of the
  // primary (or only) section.
  const primaryTheta = sectionThetas[sectionKeys[0]] ?? 0;

  // ── 5. Package result ─────────────────────────────────────────────────
  return createScoredResult({
    sectionScore: headlineScore,
    rawScore: totalCorrect,
    totalQuestions,
    thetaEstimate: primaryTheta,
    standardError: Math.round(aggregateSE * 1000) / 1000,
    routeTaken,
    itemsScored: totalQuestions,
    itemsExcluded: 0,
    moduleScores,
    diagnosticData,
    timedMode,
    sectionScores,
    isMultiSection,
  });
}

/**
 * Reported scaled score (200-800) for a prepared response vector. Routes
 * through the canonical raw→scaled table so the diagnostic engine's score and
 * its "+X point" projections land on the EXACT same number as scoreTest's
 * headline (the per-section raw counts are identical — that coupling is the
 * 1.3 fix). The IRT params on the items are no longer consulted here; only the
 * raw-correct count, section, and route matter.
 *
 * @param {Array<{response: 0|1}>} items
 * @param {string} [formId]  retained for signature compatibility (unused)
 * @param {{section?: string, route?: 'easy'|'hard'}} [meta]
 * @returns {number} 200-800 scaled score
 */
export function scaleResponseVector(items, formId, meta = {}) {
  if (!items || items.length === 0) return 200;
  const raw = items.reduce((s, i) => s + (i.response ? 1 : 0), 0);
  return rawToScaled(meta.section || 'math', raw, items.length, meta.route || 'hard');
}

/**
 * Raw-correct → scaled (200-800) via the canonical table. Section/route aware.
 * The section defaults from the question count (54 → R&W, else Math) when not
 * given; callers that know the section should pass it.
 *
 * @param {number} rawScore
 * @param {number} [totalQuestions=44]
 * @param {{section?: string, route?: 'easy'|'hard'}} [meta]
 * @returns {number} 200-800 scaled score
 */
export function convertToSATScore(rawScore, totalQuestions = 44, meta = {}) {
  if (!totalQuestions) return 200;
  const section = meta.section || (totalQuestions >= 50 ? 'reading-writing' : 'math');
  return rawToScaled(section, rawScore, totalQuestions, meta.route || 'hard');
}

// Re-export calibration helpers so consumers only need one import
export { estimatePercentile } from './calibration';
