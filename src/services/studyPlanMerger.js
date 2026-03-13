/**
 * Study Plan Merger — Pure logic functions for hybrid plan operations.
 *
 * Isolated from Firebase to enable clean unit testing.
 * These functions handle longitudinal evidence building, plan merging,
 * and delta computation without any side effects.
 */

export const MERGE_VERSION = '1.0';

/**
 * Build longitudinal evidence from all practice test attempts.
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
    const questions = attempt.diagnosticData?.questionDetails || [];
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

/**
 * Merge deterministic and AI plans into a single canonical artifact.
 */
export const mergeHybridPlan = (deterministicPlan, aiPlan = null) => {
  if (!deterministicPlan) return null;

  const base = { ...deterministicPlan };

  if (aiPlan?.plan) {
    const ai = aiPlan.plan;

    if (ai.summary?.headline) {
      base.summary = {
        ...base.summary,
        headline: ai.summary.headline,
        aiDiagnosis: ai.summary.diagnosis || ai.summary.keyInsight?.message || null,
      };
    }

    if (ai.weeks?.length) {
      base.weeks = base.weeks.map((week, i) => {
        const aiWeek = ai.weeks[i];
        if (!aiWeek) return week;
        return { ...week, aiTitle: aiWeek.title || null, aiGoalDescription: aiWeek.goalDescription || null };
      });
    }

    if (ai.targetedQuestions) {
      base.targetedQuestions = ai.targetedQuestions;
    }
  }

  return base;
};
