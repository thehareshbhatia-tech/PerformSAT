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

import {
  trackTestCompleted,
  trackDrillCompleted,
  trackReviewSessionDone,
  flushEvents,
} from './analyticsService';
import { updateFingerprint } from './studentFingerprintService';
import {
  generatePredictions,
  savePrediction,
  validateAndUpdatePredictions,
} from './predictionEngine';
import { updateReviewItem } from './reviewService';
import { buildSessionSummary } from './dailyReviewEngine';
import { getUnresolvedInterventions, resolveIntervention } from './interventionTracker';
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
 * Build a daily-review session object. The reviewItems carry the reviewQueue
 * key + per-item correctness so the SM-2 reschedule can advance each item.
 * Pure — no side effects.
 *
 * @param {Object} fields
 * @param {Array<{key: string, wasCorrect: boolean}>} fields.reviewItems
 * @param {string|null} [fields.userId]
 * @returns {Object} session
 */
export const buildReviewSession = ({ reviewItems = [], userId = null, completedAt = null }) => ({
  sessionType: 'review',
  reviewItems: Array.isArray(reviewItems) ? reviewItems : [],
  itemCount: Array.isArray(reviewItems) ? reviewItems.length : 0,
  userId,
  completedAt: completedAt || new Date().toISOString(),
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

  // Daily-review sessions take a separate path: SM-2 reschedule + streak +
  // review analytics, and return a session summary the UI surfaces. They never
  // run the prediction pipeline.
  if (session.sessionType === 'review') {
    return dispatchReviewComplete(session, userId);
  }

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

  // ── Subscriber 3: close out interventions this test measured ──
  // Interventions start when the drill tutor engages on a skill (captures the
  // pre-mastery baseline) but nothing ever resolved them, so postMetrics.delta
  // never existed. Resolve here using this test's per-skill accuracy as the
  // "after" measure; predictStruggleSkills reads the delta to down-weight skills
  // where the teaching action didn't stick. Independent try/catch so a failure
  // never blocks the prediction step above (or vice versa).
  try {
    outcome.interventionsResolved = await resolveInterventionsForTest(userId, session.diagnosticReport);
  } catch (err) {
    log.error('intervention resolution failed:', err);
  }

  return outcome;
};

/**
 * Resolve every unresolved intervention whose targeted skill this test measured.
 * postMetrics.skillMastery is the test's per-skill accuracy (the "after"),
 * compared against the intervention's captured pre-mastery to produce a delta.
 *
 * @param {string} userId
 * @param {Object} diagnosticReport — runDiagnostic() output
 * @returns {Promise<number>} count of interventions resolved
 */
async function resolveInterventionsForTest(userId, diagnosticReport) {
  const unresolved = await getUnresolvedInterventions(userId);
  if (!unresolved.length) return 0;

  const sa = diagnosticReport?.skillAnalysis || {};
  const skillMastery = {};
  [...(sa.weakSkills || []), ...(sa.strongSkills || [])].forEach((s) => {
    if (s && s.skillId != null && typeof s.testAccuracy === 'number') {
      skillMastery[s.skillId] = s.testAccuracy;
    }
  });
  const errorTypes = diagnosticReport?.errorPatterns?.counts || {};

  let resolved = 0;
  for (const iv of unresolved) {
    // Only resolve if this test actually measured one of the intervened skills;
    // otherwise leave it open for a later test that does.
    const measured = (iv.skillIds || []).some((sid) => sid in skillMastery);
    if (!measured) continue;
    // Sequential: each resolve is a read-modify-write on the one progress doc.
    await resolveIntervention(userId, iv.id, { skillMastery, errorTypes });
    resolved += 1;
  }
  return resolved;
}

/**
 * Close the daily-review loop: advance each answered item's SM-2 schedule,
 * increment the streak, fire review analytics, and return the session summary
 * for the UI to surface. Each subscriber is best-effort.
 *
 * @param {Object} session — review session from buildReviewSession
 * @param {string|null} userId
 * @returns {Promise<{review: boolean, analytics: boolean, summary: object|null, skippedReason: string|null}>}
 */
async function dispatchReviewComplete(session, userId) {
  const outcome = { review: false, analytics: false, summary: null, skippedReason: null };
  const items = Array.isArray(session.reviewItems) ? session.reviewItems.filter(it => it && it.key) : [];

  // 1. SM-2 reschedule per answered item. Sequential, not parallel: each call
  //    is a read-modify-write on the SAME progress doc, so concurrent writes
  //    would clobber each other (last-write-wins drops earlier reschedules).
  if (userId && items.length) {
    try {
      for (const it of items) {
        await updateReviewItem(userId, it.key, !!it.wasCorrect);
      }
      outcome.review = true;
    } catch (err) {
      log.error('review reschedule failed:', err);
    }
  } else {
    outcome.skippedReason = !userId ? 'no-user' : 'no-items';
  }

  // 2. Streak + summary (recordReviewSessionComplete increments the localStorage
  //    streak; same-day repeat is a no-op inside it).
  let summary = null;
  try {
    summary = buildSessionSummary(items.map(it => ({ wasCorrect: !!it.wasCorrect })));
    outcome.summary = summary;
  } catch (err) {
    log.error('review summary failed:', err);
  }

  // 3. Review analytics.
  try {
    trackReviewSessionDone(
      userId,
      items.length,
      summary ? summary.accuracy : null,
      summary?.streak?.current ?? null,
    );
    if (userId) await flushEvents(userId);
    outcome.analytics = true;
  } catch (err) {
    log.error('review analytics failed:', err);
  }

  return outcome;
}
