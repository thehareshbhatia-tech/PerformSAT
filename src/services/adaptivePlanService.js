/**
 * Adaptive Plan Service — Daily Study-Plan Re-Prioritization
 *
 * Takes an existing study plan (from studyPlanGenerator) and recent
 * performance signals (practice results, test results, review outcomes)
 * to produce a re-prioritized "today" action list and flag activities
 * that should shift in priority.
 *
 * Rules:
 *  1. Skills that IMPROVED since the plan was generated drop in priority.
 *  2. Skills that DECLINED or stagnated rise in priority.
 *  3. Newly-surfaced weak skills (from today's practice) get injected.
 *  4. Completed activities are removed; stale activities are re-surfaced.
 *  5. If the test date is < 7 days away, enforce a triage mode that
 *     caps activities to the top-3 highest-ROI skills only.
 */

import { getDueReviewCount } from './reviewService';

/**
 * Determine how many days remain until the test.
 */
const daysUntil = (dateStr) => {
  if (!dateStr) return null;
  const t = new Date(dateStr);
  const now = new Date();
  t.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return Math.ceil((t - now) / (1000 * 60 * 60 * 24));
};

/**
 * Compare a skill's latest practice accuracy against the plan's baseline
 * to determine directional change.
 *
 * @returns 'improved' | 'declined' | 'stagnant' | 'new'
 */
const classifySkillDelta = (skillId, planBaseline, recentProgress) => {
  const baseline = planBaseline?.[skillId];
  const recent = recentProgress?.[skillId];

  if (!baseline) return 'new';
  if (!recent) return 'stagnant';

  const baselineAccuracy = baseline.accuracy ?? baseline.testAccuracy ?? 0;
  const recentAccuracy = recent.accuracy ?? recent.bestScore ?? 0;

  if (recentAccuracy >= baselineAccuracy + 15) return 'improved';
  if (recentAccuracy <= baselineAccuracy - 10) return 'declined';
  return 'stagnant';
};

/**
 * Core reprioritisation function.
 *
 * @param {Object} currentPlan — output of studyPlanGenerator.generateStudyPlan()
 * @param {Object} recentPractice — latest practiceProgress from useProgress
 * @param {Object} recentTestResults — latest practiceTestResults from useProgress
 * @param {Object} reviewQueue — from useProgress
 * @param {string} testDate — ISO date string
 * @returns {Object} adaptedPlan
 */
export const reprioritizePlan = (currentPlan, recentPractice = {}, recentTestResults = {}, reviewQueue = {}, testDate = null) => {
  if (!currentPlan?.weeks?.length) return currentPlan;

  const remaining = daysUntil(testDate);
  const isTriage = remaining !== null && remaining <= 7;

  const planBaseline = {};
  (currentPlan.skillGaps || []).forEach(g => {
    planBaseline[g.skillId] = { accuracy: g.testAccuracy };
  });

  const recentSkillProgress = {};
  Object.entries(recentPractice).forEach(([key, data]) => {
    const parts = key.split('-');
    const skillId = parts.slice(1).join('-');
    recentSkillProgress[skillId] = { accuracy: data.bestScore ? (data.bestScore / 5) * 100 : 0 };
  });

  const classifiedGaps = (currentPlan.skillGaps || []).map(gap => {
    const delta = classifySkillDelta(gap.skillId, planBaseline, recentSkillProgress);
    let priorityMultiplier = 1;
    if (delta === 'improved') priorityMultiplier = 0.5;
    if (delta === 'declined') priorityMultiplier = 1.8;
    if (delta === 'stagnant') priorityMultiplier = 1.2;

    return {
      ...gap,
      delta,
      adjustedPriority: Math.round(gap.priority * priorityMultiplier),
    };
  });

  classifiedGaps.sort((a, b) => b.adjustedPriority - a.adjustedPriority);

  const focusSkills = isTriage ? classifiedGaps.slice(0, 3) : classifiedGaps;

  const today = buildTodayActions(focusSkills, reviewQueue, currentPlan, isTriage);

  const latestTest = Object.values(recentTestResults)
    .flatMap(t => t.attempts || [])
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0];

  return {
    ...currentPlan,
    adaptiveOverlay: {
      generatedAt: new Date().toISOString(),
      daysUntilTest: remaining,
      isTriage,
      focusSkills: focusSkills.map(s => ({
        skillId: s.skillId,
        skillName: s.skillName,
        delta: s.delta,
        adjustedPriority: s.adjustedPriority,
      })),
      today,
      latestScaledScore: latestTest?.scaledScore || currentPlan.currentScore,
      reprioritisationSummary: buildSummary(classifiedGaps, isTriage, remaining),
    },
  };
};

/**
 * Build the "do today" list: reviews first, then top-priority skill work.
 */
const buildTodayActions = (focusSkills, reviewQueue, plan, isTriage) => {
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

    actions.push({
      type: skill.delta === 'declined' ? 'recovery' : 'practice',
      label: skill.delta === 'declined'
        ? `Re-drill: ${skill.skillName} (declining)`
        : `Practice: ${skill.skillName}`,
      skillId: skill.skillId,
      delta: skill.delta,
      priority: skill.adjustedPriority,
      minutes,
      modules: skill.modules,
    });

    remainingMinutes -= minutes;
  });

  return actions;
};

const buildSummary = (classifiedGaps, isTriage, daysLeft) => {
  const improved = classifiedGaps.filter(g => g.delta === 'improved').length;
  const declined = classifiedGaps.filter(g => g.delta === 'declined').length;
  const stagnant = classifiedGaps.filter(g => g.delta === 'stagnant').length;

  const parts = [];
  if (improved) parts.push(`${improved} skill${improved > 1 ? 's' : ''} improved`);
  if (declined) parts.push(`${declined} declined`);
  if (stagnant) parts.push(`${stagnant} unchanged`);

  let prefix = 'Since your last test: ';
  if (isTriage) prefix = `${daysLeft} day${daysLeft !== 1 ? 's' : ''} to test — triage mode. `;

  return prefix + (parts.length ? parts.join(', ') + '.' : 'No new data yet.');
};
