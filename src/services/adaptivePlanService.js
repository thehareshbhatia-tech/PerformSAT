/**
 * Adaptive Plan Service — Daily Study-Plan Re-Prioritization
 *
 * Takes an existing study plan (from hybrid generator) and recent
 * performance signals (skill progress, test results, review queue)
 * to produce a re-prioritized "today" action list and flag activities
 * that should shift in priority.
 *
 * Now uses true skill-level progress from skillProgress + practiceTestResults
 * rather than practice-section keys, and recomputes after each new test.
 *
 * Rules:
 *  1. Skills that IMPROVED since the plan was generated drop in priority.
 *  2. Skills that DECLINED or stagnated rise in priority.
 *  3. Newly-surfaced weak skills (from latest test) get injected.
 *  4. Completed activities are removed; stale activities are re-surfaced.
 *  5. If the test date is < 7 days away, enforce triage mode (top-3 only).
 */

import { getDueReviewCount } from './reviewService';
import { buildLongitudinalEvidence } from './studyPlanMerger';
import { isBlankAttempt } from './selectors/latestTestStats';
import { parseLocalDate } from '../utils/localDate';
import {
  getLastTestMs,
  getRecentDrillStats,
  DRILL_SIGNAL_MIN_ATTEMPTS,
} from './selectors/focusAreaProgress';

const daysUntil = (dateStr) => {
  if (!dateStr) return null;
  const t = parseLocalDate(dateStr);
  if (!t) return null;
  const now = new Date();
  t.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.ceil((t - now) / (1000 * 60 * 60 * 24));
};

/**
 * Build a skill accuracy map from the real skillProgress data.
 * skillProgress shape: { [skillId]: { correct, attempts, lastAttemptAt, ... } }
 */
function buildSkillAccuracyMap(skillProgress = {}) {
  const map = {};
  Object.entries(skillProgress).forEach(([skillId, data]) => {
    if (data.attempts > 0) {
      map[skillId] = {
        accuracy: Math.round((data.correct / data.attempts) * 100),
        attempts: data.attempts,
        lastAttemptAt: data.lastAttemptAt || null,
      };
    }
  });
  return map;
}

/**
 * Extract skill-level accuracy from the latest practice test attempt's
 * diagnostic data, for the most precise "current" snapshot.
 */
function extractLatestTestSkillAccuracy(practiceTestResults = {}) {
  const allAttempts = [];
  Object.values(practiceTestResults).forEach(test => {
    (test.attempts || []).forEach(attempt => {
      // Skip blank/abandoned attempts — every skill reads 0% off them, which
      // fakes "declined"/"new gap" classifications (mirrors the line-219 guard
      // in reprioritizePlan's latest-test selection).
      if (isBlankAttempt(attempt)) return;
      allAttempts.push(attempt);
    });
  });

  if (allAttempts.length === 0) return {};

  allAttempts.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
  const latest = allAttempts[0];

  const skillMap = {};
  const rawDetails = latest.diagnosticData?.questionDetails;
  const questions = Array.isArray(rawDetails)
    ? rawDetails
    : rawDetails && typeof rawDetails === 'object'
      ? Object.values(rawDetails)
      : [];
  questions.forEach(q => {
    (q.skills || []).forEach(skillId => {
      if (!skillMap[skillId]) skillMap[skillId] = { correct: 0, total: 0 };
      skillMap[skillId].total++;
      if (q.isCorrect || q.correct) skillMap[skillId].correct++;
    });
  });

  const result = {};
  Object.entries(skillMap).forEach(([skillId, data]) => {
    result[skillId] = {
      accuracy: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
      sampleSize: data.total,
    };
  });

  return result;
}

/**
 * Classify how a skill changed relative to the plan baseline.
 */
function classifySkillDelta(skillId, planBaseline, currentAccuracy) {
  const baseline = planBaseline?.[skillId];
  const current = currentAccuracy?.[skillId];

  if (!baseline) return 'new';
  if (!current) return 'stagnant';

  const baselineAcc = baseline.accuracy ?? baseline.testAccuracy ?? 0;
  const currentAcc = current.accuracy ?? 0;

  if (currentAcc >= baselineAcc + 15) return 'improved';
  if (currentAcc <= baselineAcc - 10) return 'declined';
  return 'stagnant';
}

/**
 * Core reprioritisation function.
 *
 * @param {Object} currentPlan — the hybrid study plan
 * @param {Object} skillProgress — from useProgress (true skill-level data)
 * @param {Object} practiceTestResults — from useProgress
 * @param {Object} reviewQueue — from useProgress
 * @param {string} testDate — ISO date string
 * @returns {Object} plan with adaptiveOverlay attached
 */
export const reprioritizePlan = (
  currentPlan,
  skillProgress = {},
  practiceTestResults = {},
  reviewQueue = {},
  testDate = null,
) => {
  if (!currentPlan?.weeks?.length) return currentPlan;

  const remaining = daysUntil(testDate);
  const isTriage = remaining !== null && remaining <= 7;

  const planBaseline = {};
  (currentPlan.skillGaps || []).forEach(g => {
    planBaseline[g.skillId] = { accuracy: g.testAccuracy };
  });

  const globalSkillAccuracy = buildSkillAccuracyMap(skillProgress);
  const latestTestAccuracy = extractLatestTestSkillAccuracy(practiceTestResults);

  const mergedAccuracy = { ...globalSkillAccuracy };
  Object.entries(latestTestAccuracy).forEach(([skillId, data]) => {
    if (!mergedAccuracy[skillId] || data.sampleSize >= 2) {
      mergedAccuracy[skillId] = data;
    }
  });

  // Recency-aware override (adaptivity audit, 2026-06): the latest-test
  // snapshot above WINS over cumulative skillProgress for any skill the test
  // sampled twice — which froze every classification until the next full
  // test, no matter how much the student drilled. When a skill has fresh
  // drill evidence recorded AFTER that test (per-skill history, with the
  // test-write grace window), the recent drill accuracy is the truer
  // "current" signal, so it takes precedence. This is what lets a week of
  // drilling flip a gap to 'improved' (or expose a 'declined') between tests.
  const lastTestMs = getLastTestMs(practiceTestResults);
  Object.entries(skillProgress).forEach(([skillId, record]) => {
    const recent = getRecentDrillStats(record, lastTestMs);
    if (recent && recent.attempts >= DRILL_SIGNAL_MIN_ATTEMPTS) {
      mergedAccuracy[skillId] = {
        accuracy: recent.accuracy,
        attempts: recent.attempts,
        recentDrill: true,
      };
    }
  });

  const longitudinal = buildLongitudinalEvidence(practiceTestResults, skillProgress);

  const classifiedGaps = (currentPlan.skillGaps || []).map(gap => {
    const delta = classifySkillDelta(gap.skillId, planBaseline, mergedAccuracy);
    let priorityMultiplier = 1;
    if (delta === 'improved') priorityMultiplier = 0.5;
    if (delta === 'declined') priorityMultiplier = 1.8;
    if (delta === 'stagnant') priorityMultiplier = 1.2;

    const isPersistent = longitudinal.persistentWeaknesses.some(pw => pw.skillId === gap.skillId);
    if (isPersistent) priorityMultiplier *= 1.3;

    return {
      ...gap,
      delta,
      adjustedPriority: Math.round(gap.priority * priorityMultiplier),
      isPersistent,
      currentAccuracy: mergedAccuracy[gap.skillId]?.accuracy ?? null,
    };
  });

  const newWeakSkills = Object.entries(mergedAccuracy)
    .filter(([skillId, data]) => data.accuracy < 50 && !planBaseline[skillId])
    .map(([skillId, data]) => ({
      skillId,
      skillName: skillId.replace(/-/g, ' '),
      delta: 'new',
      adjustedPriority: 100 + (50 - data.accuracy),
      isPersistent: false,
      currentAccuracy: data.accuracy,
      estimatedMinutes: 20,
      modules: [],
    }));

  const allGaps = [...classifiedGaps, ...newWeakSkills];
  allGaps.sort((a, b) => b.adjustedPriority - a.adjustedPriority);

  const focusSkills = isTriage ? allGaps.slice(0, 3) : allGaps;

  const today = buildTodayActions(focusSkills, reviewQueue, currentPlan, isTriage);

  const latestTest = Object.values(practiceTestResults)
    .flatMap(t => t.attempts || [])
    .filter(a => !isBlankAttempt(a)) // a blank newest attempt would set the overlay to the IRT floor
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];

  return {
    ...currentPlan,
    adaptiveOverlay: {
      generatedAt: new Date().toISOString(),
      daysUntilTest: remaining,
      isTriage,
      focusSkills: focusSkills.slice(0, 10).map(s => ({
        skillId: s.skillId,
        skillName: s.skillName,
        delta: s.delta,
        adjustedPriority: s.adjustedPriority,
        isPersistent: s.isPersistent,
        currentAccuracy: s.currentAccuracy,
      })),
      today,
      latestScaledScore: latestTest?.scaledScore || currentPlan.currentScore,
      scoreTrajectory: longitudinal.scoreTrajectory.slice(-5),
      persistentWeaknesses: longitudinal.persistentWeaknesses.slice(0, 5),
      reprioritisationSummary: buildSummary(classifiedGaps, newWeakSkills, isTriage, remaining),
    },
  };
};

function buildTodayActions(focusSkills, reviewQueue, plan, isTriage) {
  const actions = [];

  const dueReviews = getDueReviewCount(reviewQueue);
  if (dueReviews > 0) {
    actions.push({
      type: 'review',
      label: `Review ${dueReviews} due ${dueReviews === 1 ? 'question' : 'questions'}`,
      priority: 0,
      minutes: Math.max(1, Math.ceil(dueReviews * 1.5)),
    });
  }

  const dailyMinutes = plan.intensityConfig?.minutesPerDay || 30;
  let remainingMinutes = dailyMinutes - (dueReviews > 0 ? Math.ceil(dueReviews * 1.5) : 0);

  focusSkills.forEach(skill => {
    if (remainingMinutes <= 0) return;
    const minutes = Math.min(skill.estimatedMinutes || 15, remainingMinutes);

    let label;
    if (skill.delta === 'declined') label = `Re-drill: ${skill.skillName} (declining)`;
    else if (skill.isPersistent) label = `Deep review: ${skill.skillName} (persistent weakness)`;
    else if (skill.delta === 'new') label = `New gap: ${skill.skillName}`;
    else label = `Practice: ${skill.skillName}`;

    actions.push({
      type: skill.delta === 'declined' ? 'recovery' : skill.isPersistent ? 'deep_review' : 'practice',
      label,
      skillId: skill.skillId,
      delta: skill.delta,
      priority: skill.adjustedPriority,
      minutes,
      modules: skill.modules,
      isPersistent: skill.isPersistent,
    });

    remainingMinutes -= minutes;
  });

  return actions;
}

function buildSummary(classifiedGaps, newWeakSkills, isTriage, daysLeft) {
  const improved = classifiedGaps.filter(g => g.delta === 'improved').length;
  const declined = classifiedGaps.filter(g => g.delta === 'declined').length;
  const stagnant = classifiedGaps.filter(g => g.delta === 'stagnant').length;
  const persistent = classifiedGaps.filter(g => g.isPersistent).length;
  const newCount = newWeakSkills.length;

  const parts = [];
  if (improved) parts.push(`${improved} skill${improved > 1 ? 's' : ''} improved`);
  if (declined) parts.push(`${declined} declined`);
  if (stagnant) parts.push(`${stagnant} unchanged`);
  if (persistent) parts.push(`${persistent} persistent`);
  if (newCount) parts.push(`${newCount} new gap${newCount > 1 ? 's' : ''}`);

  let prefix = 'Since your last test: ';
  if (isTriage) prefix = `${daysLeft} day${daysLeft !== 1 ? 's' : ''} to test — triage mode. `;

  return prefix + (parts.length ? parts.join(', ') + '.' : 'No new data yet.');
}
