/**
 * Study Plan Merger — Pure logic functions for hybrid plan operations.
 *
 * Isolated from Firebase to enable clean unit testing.
 * These functions handle longitudinal evidence building, plan merging,
 * and delta computation without any side effects.
 */

import { isBlankAttempt } from './selectors/latestTestStats';

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
      // Blank/abandoned submissions carry no longitudinal signal — their IRT
      // floor score would chart in the Score History strip, contaminate the
      // AI plan prompt, and could even become latestAttempt.
      if (isBlankAttempt(attempt)) return;
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
      // The producer (PracticeTest's questionDetails) writes `isCorrect`.
      // `correct` is a legacy fallback for any old persisted attempts. Reading
      // the wrong field here silently zeroed every skill's accuracy, flagging
      // ALL repeated skills as persistent weaknesses — keep the field name in
      // sync with PracticeTest.jsx's questionDetails builder.
      const wasCorrect = q.isCorrect ?? q.correct ?? false;
      (q.skills || []).forEach(skillId => {
        if (!skillHistory[skillId]) {
          skillHistory[skillId] = { attempts: 0, correct: 0, appearances: [] };
        }
        skillHistory[skillId].attempts++;
        if (wasCorrect) skillHistory[skillId].correct++;
        skillHistory[skillId].appearances.push({
          testId: attempt.testId,
          date: attempt.completedAt,
          correct: wasCorrect,
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
  if (!previousPlan) return { isFirst: true, changes: [], skillChanges: [], headline: null };

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

  const prevGaps = previousPlan.skillGaps || [];
  const currGaps = currentPlan.skillGaps || [];
  const prevSkillIds = new Set(prevGaps.map(g => g.skillId));
  const currSkillIds = new Set(currGaps.map(g => g.skillId));
  const newGaps = [...currSkillIds].filter(id => !prevSkillIds.has(id));
  const resolvedGaps = [...prevSkillIds].filter(id => !currSkillIds.has(id));

  if (newGaps.length > 0) {
    changes.push({ type: 'new_gaps', label: `${newGaps.length} new skill gap${newGaps.length > 1 ? 's' : ''} identified`, skillIds: newGaps });
  }
  if (resolvedGaps.length > 0) {
    changes.push({ type: 'resolved_gaps', label: `${resolvedGaps.length} skill gap${resolvedGaps.length > 1 ? 's' : ''} resolved`, skillIds: resolvedGaps });
  }

  const intensityChange = previousPlan.intensity !== currentPlan.intensity
    ? { old: previousPlan.intensity, new: currentPlan.intensity }
    : null;
  if (intensityChange) {
    changes.push({ type: 'intensity', label: `Study intensity: ${intensityChange.old} → ${intensityChange.new}` });
  }

  // ═══ Per-skill accuracy deltas ═══
  const prevSkillMap = {};
  prevGaps.forEach(g => { prevSkillMap[g.skillId] = g; });
  const currSkillMap = {};
  currGaps.forEach(g => { currSkillMap[g.skillId] = g; });
  const allSkillIds = new Set([...Object.keys(prevSkillMap), ...Object.keys(currSkillMap)]);

  const skillChanges = [];
  allSkillIds.forEach(skillId => {
    const prev = prevSkillMap[skillId];
    const curr = currSkillMap[skillId];
    if (prev && curr) {
      const oldAcc = prev.accuracy ?? prev.testAccuracy ?? 0;
      const newAcc = curr.accuracy ?? curr.testAccuracy ?? 0;
      if (oldAcc !== newAcc) {
        skillChanges.push({
          skill: curr.name || skillId,
          skillId,
          direction: newAcc > oldAcc ? 'improved' : 'worsened',
          oldAccuracy: Math.round(oldAcc),
          newAccuracy: Math.round(newAcc),
        });
      }
    } else if (!prev && curr) {
      skillChanges.push({
        skill: curr.name || skillId,
        skillId,
        direction: 'new',
        oldAccuracy: null,
        newAccuracy: Math.round(curr.accuracy ?? curr.testAccuracy ?? 0),
      });
    } else if (prev && !curr) {
      skillChanges.push({
        skill: prev.name || skillId,
        skillId,
        direction: 'resolved',
        oldAccuracy: Math.round(prev.accuracy ?? prev.testAccuracy ?? 0),
        newAccuracy: null,
      });
    }
  });
  skillChanges.sort((a, b) => {
    const order = { worsened: 0, new: 1, improved: 2, resolved: 3 };
    return (order[a.direction] ?? 2) - (order[b.direction] ?? 2);
  });

  // ═══ Generate headline ═══
  let headline = null;
  const improved = skillChanges.filter(s => s.direction === 'improved');
  const worsened = skillChanges.filter(s => s.direction === 'worsened');
  const newSkills = skillChanges.filter(s => s.direction === 'new');
  const resolved = skillChanges.filter(s => s.direction === 'resolved');

  // Coach voice: cite the numbers, skip the cheerleading. Every line should
  // read like someone who watched the test, not a notification template.
  if (improved.length > 0 && worsened.length > 0) {
    headline = `${improved[0].skill} climbed ${improved[0].oldAccuracy}% to ${improved[0].newAccuracy}%. Focus shifts to ${worsened[0].skill}, which slipped to ${worsened[0].newAccuracy}%.`;
  } else if (improved.length > 0) {
    headline = `${improved[0].skill} climbed ${improved[0].oldAccuracy}% to ${improved[0].newAccuracy}%${improved.length > 1 ? `, with ${improved.length - 1} more skill${improved.length > 2 ? 's' : ''} up` : ''}. Your practice moves to what's still costing points.`;
  } else if (worsened.length > 0) {
    headline = `${worsened[0].skill} slipped ${worsened[0].oldAccuracy}% to ${worsened[0].newAccuracy}%. This plan adds focused reps there.`;
  } else if (newSkills.length > 0) {
    headline = `This test exposed ${newSkills.length} new gap${newSkills.length > 1 ? 's' : ''}, starting with ${newSkills[0].skill}. ${newSkills.length > 1 ? "They're" : "It's"} now a week-1 priority.`;
  } else if (resolved.length > 0) {
    headline = `${resolved[0].skill} is off the worry list${resolved.length > 1 ? `, along with ${resolved.length - 1} more` : ''} — no longer testing as a weakness.`;
  } else if (currScore > prevScore) {
    headline = `Score moved ${prevScore} to ${currScore}. The plan recalibrated to the new baseline.`;
  }

  return {
    isFirst: false,
    changes,
    skillChanges,
    intensityChange,
    headline,
    scoreChange: currScore !== prevScore ? { old: prevScore, new: currScore, delta: currScore - prevScore } : null,
    resolvedCount: resolved.length,
    newGapCount: newSkills.length,
  };
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
    if (deterministicPlan.domainAssignments) {
      base.domainAssignments = deterministicPlan.domainAssignments;
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
