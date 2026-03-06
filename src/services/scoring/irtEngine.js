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

import { getItemParams, determineRoute, thetaToScaledScore } from './calibration';
import { createScoredResult, MODULE_ROUTE } from './scoringSchema';

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
    if (userAnswer === question.correctAnswer) return true;
    const parsed = parseFloat(userAnswer);
    if (!isNaN(parsed) && parsed === question.correctAnswer) return true;
    if (Array.isArray(question.acceptedAnswers)) {
      return question.acceptedAnswers.some(a =>
        userAnswer === a || (!isNaN(parsed) && parsed === a)
      );
    }
    return false;
  }
  return userAnswer === question.correctAnswer;
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

  // ── 1. Score every item and build response vector ──────────────────────
  const responseItems = [];
  let totalCorrect = 0;
  let totalQuestions = 0;
  let mod1Correct = 0;
  let mod1Total = 0;

  const moduleScores = test.modules.map((mod, modIdx) => {
    let modCorrect = 0;
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const userAnswer = answers[key];
      const correct = isAnswerCorrect(q, userAnswer);

      const params = getItemParams(q);
      responseItems.push({ params, response: correct ? 1 : 0 });

      if (correct) {
        totalCorrect++;
        modCorrect++;
      }
      totalQuestions++;

      if (modIdx === 0) {
        mod1Total++;
        if (correct) mod1Correct++;
      }
    });
    return { moduleTitle: mod.title, score: modCorrect, total: mod.questions.length };
  });

  // ── 2. Determine module route ─────────────────────────────────────────
  const routeTaken = test.modules.length >= 2
    ? determineRoute(formId, mod1Correct, mod1Total)
    : MODULE_ROUTE.HARD;

  // ── 3. Estimate theta ─────────────────────────────────────────────────
  const { theta, se, converged } = estimateTheta(responseItems);

  // ── 4. Map theta to SAT scale ─────────────────────────────────────────
  const sectionScore = thetaToScaledScore(theta, formId);

  // ── 5. Package result ─────────────────────────────────────────────────
  return createScoredResult({
    sectionScore,
    rawScore: totalCorrect,
    totalQuestions,
    thetaEstimate: Math.round(theta * 1000) / 1000,
    standardError: Math.round(se * 1000) / 1000,
    routeTaken,
    itemsScored: totalQuestions,
    itemsExcluded: 0,
    moduleScores,
    diagnosticData,
    timedMode,
  });
}

/**
 * Lightweight re-export for places that only need raw → scaled.
 * Acts as a drop-in replacement for the old convertToSATScore(),
 * but now backed by IRT under the hood.
 */
export function convertToSATScore(rawScore, totalQuestions = 44) {
  if (totalQuestions === 0) return 200;

  // Build a synthetic response vector: rawScore items correct, rest incorrect,
  // distributed across a balanced difficulty mix matching SAT proportions.
  const items = buildSyntheticResponseVector(rawScore, totalQuestions);
  const { theta } = estimateTheta(items);
  return thetaToScaledScore(theta);
}

/**
 * Build a synthetic item vector for a given raw score.
 * Mirrors the real SAT difficulty distribution:
 *   ~30 % easy, ~45 % medium, ~25 % hard
 * Correct answers are assigned to easier items first (most-likely pattern).
 */
function buildSyntheticResponseVector(rawScore, totalQuestions) {
  const nEasy   = Math.round(totalQuestions * 0.30);
  const nMedium = Math.round(totalQuestions * 0.45);
  const nHard   = totalQuestions - nEasy - nMedium;

  const items = [];
  let remaining = rawScore;

  const addItems = (count, difficulty) => {
    for (let i = 0; i < count; i++) {
      const correct = remaining > 0 ? 1 : 0;
      if (correct) remaining--;
      items.push({
        params: { ...( { easy: { a: 1.0, b: -1.0, c: 0.25 },
                          medium: { a: 1.0, b: 0.0, c: 0.25 },
                          hard: { a: 1.0, b: 1.5, c: 0.25 } }[difficulty]) },
        response: correct,
      });
    }
  };

  addItems(nEasy, 'easy');
  addItems(nMedium, 'medium');
  addItems(nHard, 'hard');

  return items;
}

// Re-export calibration helpers so consumers only need one import
export { estimatePercentile } from './calibration';
