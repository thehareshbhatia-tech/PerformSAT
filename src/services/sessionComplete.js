/**
 * sessionComplete.js — the onSessionComplete seam (Phase 2).
 *
 * A single choke point that every completed practice session funnels through,
 * so the "dark engines" (analytics, the prediction loop) can subscribe to one
 * well-shaped event instead of being hand-wired into each completion site.
 *
 * There are two physical call sites because completions live in two unrelated
 * components with different shapes (full tests in PracticeTest.jsx, drills in
 * App.jsx's handleNextQuestion), but both build a single discriminated-union
 * `session` object and dispatch through here. See docs in CLAUDE.md ("the data
 * flow that matters most") for the surrounding flow.
 *
 * Design rules baked in:
 *  - Best-effort: every subscriber runs in its own try/catch so one failure
 *    can never block another subscriber or the completion UI.
 *  - No pollution: review-retry sessions (reviewMode) and drills never run the
 *    intelligence pipeline — only real, non-review full tests feed predictions
 *    (mirrors the existing recordPracticeAttempt / ground-truth gates).
 *  - Scale-safe: the full-test session carries the HEADLINE scaledScore +
 *    isMultiSection so the prediction loop predicts/validates on the same scale
 *    the dashboard shows (composite 400-1600 vs section 200-800).
 */

import { trackTestCompleted, trackDrillCompleted, flushEvents } from './analyticsService';
import { updateFingerprint } from './studentFingerprintService';
import {
  generatePredictions,
  savePrediction,
  validateAndUpdatePredictions,
} from './predictionEngine';
import { makeLogger } from '../utils/log';

const log = makeLogger('sessionComplete');

/**
 * Build the canonical full-test session object from PracticeTest's completion
 * effect locals. Pure — no side effects.
 *
 * @param {Object} fields
 * @param {string} fields.attemptId
 * @param {string|null} fields.testId
 * @param {string|null} fields.testTitle
 * @param {string|null} fields.userId
 * @param {number} fields.scaledScore — HEADLINE score (composite 400-1600 or section 200-800)
 * @param {number} fields.rawScore
 * @param {number} fields.totalQuestions
 * @param {Object|null} fields.sectionScores
 * @param {boolean} fields.isMultiSection
 * @param {boolean} fields.timedMode
 * @param {Object|null} fields.diagnosticReport — runDiagnostic() output (fingerprint + prediction input)
 * @param {boolean} [fields.reviewMode=false]
 * @returns {Object} session
 */
export const buildFullTestSession = ({
  attemptId,
  testId = null,
  testTitle = null,
  userId = null,
  scaledScore = null,
  rawScore = null,
  totalQuestions = null,
  sectionScores = null,
  isMultiSection = false,
  timedMode = true,
  diagnosticReport = null,
  reviewMode = false,
  completedAt = null,
}) => ({
  sessionType: 'full-test',
  sessionId: attemptId || null,
  testId,
  testTitle,
  userId,
  completedAt: completedAt || new Date().toISOString(),
  scaledScore,
  rawScore,
  totalQuestions,
  sectionScores,
  isMultiSection: !!isMultiSection,
  timedMode: !!timedMode,
  diagnosticReport: diagnosticReport || null,
  reviewMode: !!reviewMode,
});

/**
 * Build a drill session object (assigned / adaptive / standard / review-retry).
 * Pure — no side effects.
 *
 * @param {Object} fields
 * @param {string} fields.drillMode — practiceState.practiceMode ('assigned'|'adaptive'|'standard')
 * @param {string|null} [fields.section]
 * @param {number|null} [fields.accuracy] — 0-100
 * @param {number|null} [fields.itemCount]
 * @param {string|null} [fields.source]
 * @param {boolean} [fields.reviewMode=false]
 * @param {string|null} [fields.userId]
 * @returns {Object} session
 */
export const buildDrillSession = ({
  drillMode = 'standard',
  section = null,
  accuracy = null,
  itemCount = null,
  source = null,
  reviewMode = false,
  userId = null,
  completedAt = null,
}) => ({
  sessionType: reviewMode
    ? 'review-retry'
    : drillMode === 'adaptive'
      ? 'drill-adaptive'
      : drillMode === 'assigned'
        ? 'drill-assigned'
        : 'drill-standard',
  drillMode,
  section,
  accuracy,
  itemCount,
  source,
  userId,
  completedAt: completedAt || new Date().toISOString(),
  reviewMode: !!reviewMode,
});

/**
 * Fan a completed session out to all subscribers.
 *
 * Analytics fires for every session type. The intelligence pipeline
 * (validate -> fingerprint -> predict -> save) fires only for real, non-review
 * full tests. Returns a small result object describing what ran — handy for
 * tests and telemetry; callers normally fire-and-forget.
 *
 * @param {Object} session — from buildFullTestSession / buildDrillSession
 * @param {Object} [deps]
 * @param {string|null} [deps.userId]
 * @param {Object} [deps.skillProgress]
 * @param {Object} [deps.practiceTestResults]
 * @param {Object[]} [deps.interventionLog]
 * @returns {Promise<{analytics: boolean, prediction: boolean, skippedReason: string|null}>}
 */
export const dispatchSessionComplete = async (session, deps = {}) => {
  const outcome = { analytics: false, prediction: false, skippedReason: null };
  if (!session) {
    outcome.skippedReason = 'no-session';
    return outcome;
  }

  const userId = session.userId || deps.userId || null;

  // ── Subscriber 1: analytics (always, best-effort) ──
  try {
    if (session.sessionType === 'full-test') {
      trackTestCompleted(userId, session.scaledScore, session.rawScore, session.timedMode);
    } else {
      trackDrillCompleted(userId, {
        mode: session.drillMode || null,
        section: session.section ?? null,
        accuracy: session.accuracy ?? null,
        itemCount: session.itemCount ?? null,
        source: session.source ?? null,
        reviewMode: !!session.reviewMode,
      });
    }
    // Completion is high-value and often the last action before a route
    // change; flush now rather than waiting on the 30s / 20-event buffer.
    if (userId) await flushEvents(userId);
    outcome.analytics = true;
  } catch (err) {
    log.error('analytics subscriber failed:', err);
  }

  // ── Subscriber 2: intelligence pipeline (full-test only) ──
  if (session.sessionType !== 'full-test') {
    outcome.skippedReason = 'not-full-test';
    return outcome;
  }
  if (session.reviewMode) {
    outcome.skippedReason = 'review-mode';
    return outcome;
  }
  if (!userId || !session.diagnosticReport) {
    outcome.skippedReason = 'missing-user-or-diagnostic';
    return outcome;
  }

  try {
    const {
      skillProgress = {},
      practiceTestResults = {},
      interventionLog = [],
    } = deps;
    const { diagnosticReport, testId, scaledScore, isMultiSection } = session;

    // a. Validate any PRIOR unresolved prediction against THIS test's actuals,
    //    before generating the next one (so we never validate against self).
    //    Pass the headline score + scale so the verdict matches the dashboard.
    await validateAndUpdatePredictions(userId, diagnosticReport, testId, {
      actualScore: scaledScore,
      isMultiSection,
    });

    // b. Update the 6-dim fingerprint (Component 2) — generatePredictions input.
    const fingerprint = await updateFingerprint(
      userId,
      diagnosticReport,
      skillProgress,
      testId,
      scaledScore,
    );

    // c. Generate predictions for the NEXT test on the headline scale,
    //    seeding with this test's score (in-memory results may not include it yet).
    const prediction = generatePredictions(
      fingerprint,
      practiceTestResults,
      skillProgress,
      interventionLog,
      testId,
      { isMultiSection, currentScore: scaledScore },
    );

    // d. Persist.
    await savePrediction(userId, prediction);
    outcome.prediction = true;
  } catch (err) {
    log.error('prediction pipeline failed:', err);
  }

  return outcome;
};
