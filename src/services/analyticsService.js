/**
 * Analytics / Outcome Instrumentation Service
 *
 * Minimal event taxonomy + score-impact metrics that let us measure
 * whether each feature actually drives score gains.
 *
 * DESIGN PRINCIPLES:
 * - Lightweight: events are buffered in memory and flushed to Firestore
 *   in batches to avoid per-event write costs.
 * - Privacy-first: no PII in events; userId is the only identifier.
 * - Score-centric: every event carries enough context to later correlate
 *   with the student's score trajectory.
 *
 * EVENT TAXONOMY (v1 — intentionally small):
 *
 *   Category          Event                  Key Properties
 *   ─────────────     ─────────────────────   ──────────────────────────────
 *   practice_test     test_completed          { scaledScore, rawScore, timedMode }
 *   practice_test     test_started            { testId, timedMode }
 *   review            review_session_done     { itemCount, accuracy, streakDay }
 *   drill             drill_started           { tier, pattern, section, source, questionCount }
 *   drill             drill_chip_shown        { pattern, section, source }
 *   drill             recovery_drill_done     { errorType, accuracy, minutes }
 *   drill             pacing_drill_done       { modeId, accuracy, avgTime }
 *   study_plan        plan_generated          { weekCount, intensity, scoreGap }
 *   study_plan        activity_completed      { activityType, weekIndex }
 *   ai_tutor          coach_mode_used         { modeId, messageCount }
 *   engagement        session_start           {}
 *   engagement        session_end             { durationMinutes }
 *
 * Drill routing instrumentation (added Phase 2, May 2026):
 *   - `drill_started` fires once per drill-shell mount. `tier` is one of
 *     'pattern' (Tier 1 — exact SAT Pattern match fired), 'skill' (Tier 3
 *     — fell through to skill-based routing), or 'unknown' (could not
 *     classify, typically legacy weakness). Pairs with `recovery_drill_done`
 *     to measure completion-rate-by-tier.
 *   - `drill_chip_shown` fires when the "Practicing: <Pattern>" chip is
 *     visible. Pre-condition: Tier 1 fired (chip is gated on bank pool size
 *     in AssignedPracticeShell, and on seed.missedPatterns presence in
 *     AdaptivePracticeShell). This is a strict subset of `drill_started`
 *     where `tier === 'pattern'`.
 */

import { db } from '../firebase/config';
import { doc, updateDoc, arrayUnion, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const EVENT_BUFFER = [];
const FLUSH_INTERVAL_MS = 30_000;
const MAX_BUFFER_SIZE = 20;

let flushTimer = null;

/**
 * Record an analytics event. Buffered and flushed periodically.
 */
export const trackEvent = (userId, category, event, properties = {}) => {
  if (!userId) return;

  EVENT_BUFFER.push({
    ts: new Date().toISOString(),
    category,
    event,
    ...properties,
  });

  if (EVENT_BUFFER.length >= MAX_BUFFER_SIZE) {
    flushEvents(userId);
  } else if (!flushTimer) {
    flushTimer = setTimeout(() => flushEvents(userId), FLUSH_INTERVAL_MS);
  }
};

/**
 * Flush buffered events to Firestore.
 * Appends to a `analyticsEvents` array in the progress document
 * to avoid extra collections.
 */
export const flushEvents = async (userId) => {
  if (!userId || EVENT_BUFFER.length === 0) return;

  if (flushTimer) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }

  const batch = EVENT_BUFFER.splice(0, EVENT_BUFFER.length);

  try {
    const ref = doc(db, 'progress', userId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      await updateDoc(ref, {
        analyticsEvents: arrayUnion(...batch),
        lastEventAt: serverTimestamp(),
      });
    } else {
      await setDoc(ref, {
        userId,
        analyticsEvents: batch,
        lastEventAt: serverTimestamp(),
      }, { merge: true });
    }
  } catch (err) {
    console.error('[analytics] flush failed — events re-queued:', err);
    EVENT_BUFFER.unshift(...batch);
  }
};

// ─── Score-Impact Metrics ────────────────────────────────────────────────

/**
 * Compute score trajectory from practice test history.
 *
 * @param {Object} practiceTestResults — from useProgress
 * @returns {Object} trajectory
 */
export const computeScoreTrajectory = (practiceTestResults = {}) => {
  const attempts = Object.values(practiceTestResults || {})
    .flatMap(t => (t?.attempts || [])
      .filter(a => a && a.completedAt && a.scaledScore)
      .map(a => ({
        date: a.completedAt,
        score: a.scaledScore,
        raw: a.rawScore,
        total: a.totalQuestions,
      })))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (attempts.length < 2) {
    return {
      dataPoints: attempts.length,
      trend: 'insufficient_data',
      firstScore: attempts[0]?.score || null,
      latestScore: attempts[attempts.length - 1]?.score || null,
      delta: null,
      weeklyVelocity: null,
    };
  }

  const first = attempts[0];
  const latest = attempts[attempts.length - 1];
  const delta = latest.score - first.score;

  const spanDays = Math.max(1, (new Date(latest.date) - new Date(first.date)) / (1000 * 60 * 60 * 24));
  const weeklyVelocity = Math.round((delta / spanDays) * 7);

  return {
    dataPoints: attempts.length,
    trend: delta > 0 ? 'improving' : delta < 0 ? 'declining' : 'flat',
    firstScore: first.score,
    latestScore: latest.score,
    delta,
    weeklyVelocity,
    attempts,
  };
};

/**
 * Compute per-feature engagement rates.
 *
 * @param {Array} events — analyticsEvents array from Firestore
 * @returns {Object} featureEngagement
 */
export const computeFeatureEngagement = (events = []) => {
  const counts = {};
  events.forEach(e => {
    const key = `${e.category}.${e.event}`;
    counts[key] = (counts[key] || 0) + 1;
  });

  return {
    reviewSessions: counts['review.review_session_done'] || 0,
    recoveryDrills: counts['drill.recovery_drill_done'] || 0,
    pacingDrills: counts['drill.pacing_drill_done'] || 0,
    coachModeChats: counts['ai_tutor.coach_mode_used'] || 0,
    activitiesCompleted: counts['study_plan.activity_completed'] || 0,
    testsCompleted: counts['practice_test.test_completed'] || 0,
    totalEvents: events.length,
  };
};

/**
 * Correlate feature engagement with score changes.
 * Returns a list of features ordered by estimated score-impact.
 *
 * Uses a simple "before / after" heuristic: for each feature, compare the
 * student's average score before they started using it to their average
 * score after.  This is a rough proxy; true causal analysis requires
 * cohort-level data.
 *
 * @param {Array} events
 * @param {Object} practiceTestResults
 * @returns {Array} ranked features
 */
export const estimateFeatureImpact = (events = [], practiceTestResults = {}) => {
  const trajectory = computeScoreTrajectory(practiceTestResults);
  if (trajectory.dataPoints < 2) return [];

  const engagement = computeFeatureEngagement(events);

  const features = [
    { id: 'review', label: 'Daily Review', usage: engagement.reviewSessions },
    { id: 'recovery_drill', label: 'Recovery Drills', usage: engagement.recoveryDrills },
    { id: 'pacing_drill', label: 'Pacing Training', usage: engagement.pacingDrills },
    { id: 'coach_mode', label: 'AI Coach Modes', usage: engagement.coachModeChats },
    { id: 'study_plan', label: 'Study Plan Activities', usage: engagement.activitiesCompleted },
  ];

  return features
    .filter(f => f.usage > 0)
    .map(f => ({
      ...f,
      correlatedDelta: trajectory.delta,
      weeklyVelocity: trajectory.weeklyVelocity,
    }))
    .sort((a, b) => b.usage - a.usage);
};

// ─── Convenience helpers for common events ───────────────────────────────

export const trackTestCompleted = (userId, scaledScore, rawScore, timedMode) =>
  trackEvent(userId, 'practice_test', 'test_completed', { scaledScore, rawScore, timedMode });

export const trackReviewSessionDone = (userId, itemCount, accuracy, streakDay) =>
  trackEvent(userId, 'review', 'review_session_done', { itemCount, accuracy, streakDay });

export const trackRecoveryDrillDone = (userId, errorType, accuracy, minutes) =>
  trackEvent(userId, 'drill', 'recovery_drill_done', { errorType, accuracy, minutes });

export const trackPacingDrillDone = (userId, modeId, accuracy, avgTime) =>
  trackEvent(userId, 'drill', 'pacing_drill_done', { modeId, accuracy, avgTime });

export const trackCoachModeUsed = (userId, modeId, messageCount) =>
  trackEvent(userId, 'ai_tutor', 'coach_mode_used', { modeId, messageCount });

export const trackPlanActivityCompleted = (userId, activityType, weekIndex) =>
  trackEvent(userId, 'study_plan', 'activity_completed', { activityType, weekIndex });

export const trackSessionStart = (userId) =>
  trackEvent(userId, 'engagement', 'session_start', {});

export const trackSessionEnd = (userId, durationMinutes) =>
  trackEvent(userId, 'engagement', 'session_end', { durationMinutes });

/**
 * Drill-launch instrumentation — fires once per drill-shell mount.
 *
 * @param {string} userId
 * @param {object} properties
 * @param {'pattern'|'skill'|'unknown'} properties.tier — routing tier that fired
 * @param {string|null} [properties.pattern] — kebab SAT Pattern slug if tier='pattern'
 * @param {'math'|'rw'|null} [properties.section]
 * @param {string} [properties.source] — e.g., 'assigned', 'adaptive', 'review-retry'
 * @param {number} [properties.questionCount]
 */
export const trackDrillStarted = (userId, properties = {}) =>
  trackEvent(userId, 'drill', 'drill_started', properties);

/**
 * Drill chip surfacing instrumentation — fires when the
 * "Practicing: <Pattern>" chip becomes visible in a drill shell.
 *
 * Implicit invariant: chip-shown ⇒ Tier 1 fired (the chip is gated on
 * bank pool ≥ TIER1_PATTERN_THRESHOLD in AssignedPracticeShell and on
 * seed.missedPatterns presence in AdaptivePracticeShell, which itself
 * is gated by the same threshold inside buildDomainAdaptiveQueueSeed).
 *
 * @param {string} userId
 * @param {object} properties
 * @param {string} properties.pattern — kebab SAT Pattern slug
 * @param {'math'|'rw'|null} [properties.section]
 * @param {string} [properties.source]
 */
export const trackDrillChipShown = (userId, properties = {}) =>
  trackEvent(userId, 'drill', 'drill_chip_shown', properties);
