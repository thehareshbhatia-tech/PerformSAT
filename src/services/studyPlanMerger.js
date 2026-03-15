/**
 * Study Plan Merger — Pure logic functions for hybrid plan operations.
 *
 * Isolated from Firebase to enable clean unit testing.
 * These functions handle longitudinal evidence building, plan merging,
 * and delta computation without any side effects.
 */

export const MERGE_VERSION = '1.2';

const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1FA00}-\u{1FAFF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu;

export function stripEmojis(str) {
  if (typeof str !== 'string') return str;
  return str.replace(EMOJI_REGEX, '').replace(/\s{2,}/g, ' ').trim();
}

function normalizeQuestionDetails(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'object') return Object.values(raw);
  return [];
}

/**
 * Build longitudinal evidence from all practice test attempts.
 * Handles questionDetails stored as either an array or keyed object.
 */
export const buildLongitudinalEvidence = (practiceTestResults = {}) => {
  const allAttempts = [];
  Object.values(practiceTestResults).forEach(test => {
    (test.attempts || []).forEach(attempt => {
      allAttempts.push({
        testId: test.testId,
        testTitle: test.testTitle,
        ...attempt,
      });
    });
  });

  allAttempts.sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt));

  const scoreTrajectory = allAttempts.map(a => ({
    testId: a.testId,
    scaledScore: a.scaledScore,
    date: a.completedAt,
  }));

  const skillHistory = {};
  allAttempts.forEach(attempt => {
    const questions = normalizeQuestionDetails(attempt.diagnosticData?.questionDetails);
    questions.forEach(q => {
      (q.skills || []).forEach(skillId => {
        if (!skillHistory[skillId]) {
          skillHistory[skillId] = { attempts: 0, correct: 0, appearances: [] };
        }
        skillHistory[skillId].attempts++;
        if (q.correct) skillHistory[skillId].correct++;
        skillHistory[skillId].appearances.push({
          testId: attempt.testId,
          date: attempt.completedAt,
          correct: q.correct,
        });
      });
    });
  });

  const persistentWeaknesses = Object.entries(skillHistory)
    .filter(([, data]) => data.attempts >= 2 && (data.correct / data.attempts) < 0.5)
    .map(([skillId, data]) => ({
      skillId,
      accuracy: Math.round((data.correct / data.attempts) * 100),
      testCount: new Set(data.appearances.map(a => a.testId)).size,
      trend: computeSkillTrend(data.appearances),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  return {
    totalTests: new Set(allAttempts.map(a => a.testId)).size,
    totalAttempts: allAttempts.length,
    scoreTrajectory,
    skillHistory,
    persistentWeaknesses,
    latestAttempt: allAttempts[allAttempts.length - 1] || null,
  };
};

function computeSkillTrend(appearances) {
  if (appearances.length < 2) return 'insufficient_data';
  const recent = appearances.slice(-3);
  const correctRate = recent.filter(a => a.correct).length / recent.length;
  const older = appearances.slice(0, -3);
  if (older.length === 0) return correctRate >= 0.6 ? 'improving' : 'struggling';
  const olderRate = older.filter(a => a.correct).length / older.length;
  if (correctRate > olderRate + 0.15) return 'improving';
  if (correctRate < olderRate - 0.15) return 'declining';
  return 'stable';
}

/**
 * Compute delta between previous and current plan.
 */
export const computePlanDelta = (previousPlan, currentPlan) => {
  if (!previousPlan) return { isFirst: true, changes: [] };

  const changes = [];
  const prevScore = previousPlan.currentScore || 0;
  const currScore = currentPlan.currentScore || 0;
  if (currScore !== prevScore) {
    changes.push({
      type: 'score',
      label: `Score ${currScore > prevScore ? 'improved' : 'changed'}: ${prevScore} → ${currScore}`,
      direction: currScore > prevScore ? 'up' : 'down',
      magnitude: currScore - prevScore,
    });
  }

  const prevSkillIds = new Set((previousPlan.skillGaps || []).map(g => g.skillId));
  const currSkillIds = new Set((currentPlan.skillGaps || []).map(g => g.skillId));
  const newGaps = [...currSkillIds].filter(id => !prevSkillIds.has(id));
  const resolvedGaps = [...prevSkillIds].filter(id => !currSkillIds.has(id));

  if (newGaps.length > 0) {
    changes.push({ type: 'new_gaps', label: `${newGaps.length} new skill gap${newGaps.length > 1 ? 's' : ''} identified`, skillIds: newGaps });
  }
  if (resolvedGaps.length > 0) {
    changes.push({ type: 'resolved_gaps', label: `${resolvedGaps.length} skill gap${resolvedGaps.length > 1 ? 's' : ''} resolved`, skillIds: resolvedGaps });
  }

  if (previousPlan.intensity !== currentPlan.intensity) {
    changes.push({ type: 'intensity', label: `Study intensity: ${previousPlan.intensity} → ${currentPlan.intensity}` });
  }

  return { isFirst: false, changes };
};

function normalizeActivity(activity) {
  return {
    ...activity,
    title: stripEmojis(activity.title || ''),
    subtitle: stripEmojis(activity.subtitle || ''),
    icon: null,
  };
}

function deriveNextAction(weeks) {
  for (const week of (weeks || [])) {
    const activity = (week.activities || []).find(a => !a.completed);
    if (activity) {
      return {
        title: stripEmojis(activity.title || ''),
        reason: stripEmojis(activity.subtitle || 'Highest-priority activity in your plan'),
        type: activity.type,
        duration: activity.duration,
        moduleId: activity.moduleId || null,
        lessonId: activity.lessonId || null,
      };
    }
  }
  return null;
}

/**
 * Merge deterministic and AI plans into a single canonical artifact.
 * Produces normalized, emoji-free output with a top-level nextAction.
 */
export const mergeHybridPlan = (deterministicPlan, aiPlan = null) => {
  if (!deterministicPlan) return null;

  const base = { ...deterministicPlan };

  if (aiPlan?.plan) {
    const ai = aiPlan.plan;

    if (ai.summary?.headline) {
      const aiHeadline = stripEmojis(ai.summary.headline);
      const aiDiagnosis = stripEmojis(ai.summary.diagnosis || ai.summary.keyInsight?.message || '');
      base.summary = {
        ...base.summary,
        headline: aiHeadline.length > 0 ? aiHeadline : base.summary?.headline,
        diagnosis: aiDiagnosis.length > 0 ? aiDiagnosis : base.summary?.diagnosis,
      };
    }

    if (ai.weeks?.length) {
      base.weeks = base.weeks.map((week, i) => {
        const aiWeek = ai.weeks[i];
        if (!aiWeek) return week;
        const aiTitle = stripEmojis(aiWeek.title || '');
        const aiGoal = stripEmojis(aiWeek.goalDescription || '');
        const aiRationale = stripEmojis(aiWeek.rationale || '');
        return {
          ...week,
          title: (aiTitle.length > 0 && aiTitle.length <= week.title?.length * 1.5) ? aiTitle : week.title,
          goalDescription: (aiGoal.length > 0 && aiGoal.length <= 120) ? aiGoal : week.goalDescription,
          rationale: aiRationale.length > 0 ? aiRationale : week.rationale || null,
        };
      });
    }

    if (ai.nextAction) {
      base.nextAction = {
        title: stripEmojis(ai.nextAction.title || ''),
        reason: stripEmojis(ai.nextAction.reason || ''),
        type: ai.nextAction.type,
        duration: ai.nextAction.duration,
        moduleId: ai.nextAction.moduleId || null,
        lessonId: ai.nextAction.lessonId || null,
      };
    }

    if (ai.targetedQuestions) {
      base.targetedQuestions = ai.targetedQuestions;
    }

    // AI plan should never overwrite deterministic assignment data
    if (deterministicPlan.targetedQuestionIds) {
      base.targetedQuestionIds = deterministicPlan.targetedQuestionIds;
    }
    if (deterministicPlan.practiceAssignments) {
      base.practiceAssignments = deterministicPlan.practiceAssignments;
    }
    if (deterministicPlan.assignmentSummary) {
      base.assignmentSummary = deterministicPlan.assignmentSummary;
    }
    if (deterministicPlan.adaptivePractice) {
      base.adaptivePractice = deterministicPlan.adaptivePractice;
    }
    if (deterministicPlan.adaptivePracticeState) {
      base.adaptivePracticeState = deterministicPlan.adaptivePracticeState;
    }

    if (ai.deltaFromPrevious) {
      base.deltaFromPrevious = stripEmojis(ai.deltaFromPrevious);
    }
    if (ai.persistentWeaknessStrategy) {
      base.persistentWeaknessStrategy = stripEmojis(ai.persistentWeaknessStrategy);
    }
  }

  // Normalize all activity fields across weeks
  if (base.weeks) {
    base.weeks = base.weeks.map(week => ({
      ...week,
      title: stripEmojis(week.title || ''),
      goalDescription: stripEmojis(week.goalDescription || ''),
      activities: (week.activities || []).map(normalizeActivity),
    }));
  }

  // Ensure nextAction exists — derive from first incomplete activity if missing
  if (!base.nextAction) {
    base.nextAction = deriveNextAction(base.weeks);
  }

  // Sanitize top-level summary text
  if (base.summary) {
    base.summary.headline = stripEmojis(base.summary.headline || '');
    if (base.summary.diagnosis) base.summary.diagnosis = stripEmojis(base.summary.diagnosis);
    if (base.summary.keyInsight?.message) {
      base.summary.keyInsight.message = stripEmojis(base.summary.keyInsight.message);
    }
  }

  return base;
};
