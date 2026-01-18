import { db } from '../firebase/config';
import { doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { skillTaxonomy, getSkillById, getSkillsForDomain } from '../data/skillTaxonomy';

/**
 * Records skill attempts when a student answers questions
 * @param {string} userId - User ID
 * @param {string[]} skillIds - Array of skill IDs tested by the question
 * @param {boolean} wasCorrect - Whether the answer was correct
 * @returns {Promise<void>}
 */
export const recordSkillAttempts = async (userId, skillIds, wasCorrect) => {
  if (!skillIds || skillIds.length === 0) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) {
      console.error('User progress document not found');
      return;
    }

    const currentData = progressSnap.data();
    const skillProgress = currentData.skillProgress || {};

    // Update each skill
    const updates = {};
    for (const skillId of skillIds) {
      const existingSkill = skillProgress[skillId] || {
        attempts: 0,
        correct: 0,
        mastery: 0,
        confidenceLevel: 'low',
        history: []
      };

      const newAttempts = existingSkill.attempts + 1;
      const newCorrect = existingSkill.correct + (wasCorrect ? 1 : 0);
      const newMastery = Math.round((newCorrect / newAttempts) * 100);

      // Determine confidence level based on attempt count
      let confidenceLevel = 'low';
      if (newAttempts >= 10) {
        confidenceLevel = 'high';
      } else if (newAttempts >= 5) {
        confidenceLevel = 'medium';
      }

      // Update history (keep last 10 attempts for trend analysis)
      const newHistory = [
        ...existingSkill.history.slice(-9),
        { correct: wasCorrect, timestamp: Date.now() }
      ];

      updates[`skillProgress.${skillId}`] = {
        attempts: newAttempts,
        correct: newCorrect,
        mastery: newMastery,
        confidenceLevel,
        history: newHistory,
        lastAttemptAt: serverTimestamp()
      };
    }

    await updateDoc(progressRef, {
      ...updates,
      lastUpdated: serverTimestamp()
    });
  } catch (error) {
    console.error('Error recording skill attempts:', error);
    throw error;
  }
};

/**
 * Get weak skills (mastery < 60% with at least 3 attempts)
 * @param {Object} skillProgress - Skill progress object from user data
 * @returns {Array} Array of weak skills with details
 */
export const getWeakSkills = (skillProgress) => {
  if (!skillProgress) return [];

  return Object.entries(skillProgress)
    .filter(([skillId, data]) => data.attempts >= 3 && data.mastery < 60)
    .map(([skillId, data]) => ({
      ...data,
      skillId,
      skill: getSkillById(skillId)
    }))
    .sort((a, b) => a.mastery - b.mastery);
};

/**
 * Get strong skills (mastery >= 80% with at least 3 attempts)
 * @param {Object} skillProgress - Skill progress object from user data
 * @returns {Array} Array of strong skills with details
 */
export const getStrongSkills = (skillProgress) => {
  if (!skillProgress) return [];

  return Object.entries(skillProgress)
    .filter(([skillId, data]) => data.attempts >= 3 && data.mastery >= 80)
    .map(([skillId, data]) => ({
      ...data,
      skillId,
      skill: getSkillById(skillId)
    }))
    .sort((a, b) => b.mastery - a.mastery);
};

/**
 * Get skill trend (improving, declining, or stable)
 * @param {Object} skillData - Single skill progress data
 * @returns {string} 'improving', 'declining', or 'stable'
 */
export const getSkillTrend = (skillData) => {
  if (!skillData?.history || skillData.history.length < 4) {
    return 'stable';
  }

  const history = skillData.history;
  const recentHalf = history.slice(-Math.floor(history.length / 2));
  const olderHalf = history.slice(0, Math.floor(history.length / 2));

  const recentRate = recentHalf.filter(h => h.correct).length / recentHalf.length;
  const olderRate = olderHalf.filter(h => h.correct).length / olderHalf.length;

  const difference = recentRate - olderRate;

  if (difference > 0.15) return 'improving';
  if (difference < -0.15) return 'declining';
  return 'stable';
};

/**
 * Get diagnostic summary for the dashboard
 * @param {Object} skillProgress - Skill progress object from user data
 * @returns {Object} Diagnostic summary
 */
export const getSkillDiagnosticSummary = (skillProgress) => {
  if (!skillProgress) {
    return {
      totalSkillsAttempted: 0,
      overallMastery: 0,
      weakSkills: [],
      strongSkills: [],
      domainProgress: {}
    };
  }

  const skillEntries = Object.entries(skillProgress);
  const totalSkillsAttempted = skillEntries.length;

  // Calculate overall mastery (weighted by attempts)
  let totalWeightedMastery = 0;
  let totalWeight = 0;

  skillEntries.forEach(([skillId, data]) => {
    if (data.attempts >= 1) {
      totalWeightedMastery += data.mastery * data.attempts;
      totalWeight += data.attempts;
    }
  });

  const overallMastery = totalWeight > 0 ? Math.round(totalWeightedMastery / totalWeight) : 0;

  // Get weak and strong skills
  const weakSkills = getWeakSkills(skillProgress).slice(0, 5);
  const strongSkills = getStrongSkills(skillProgress).slice(0, 5);

  // Calculate domain progress
  const domainProgress = {};
  Object.keys(skillTaxonomy.domains).forEach(domainId => {
    const domainSkills = getSkillsForDomain(domainId);
    const domainSkillIds = domainSkills.map(s => s.id);

    let domainTotalMastery = 0;
    let domainSkillCount = 0;
    let domainWeakCount = 0;

    domainSkillIds.forEach(skillId => {
      const skillData = skillProgress[skillId];
      if (skillData && skillData.attempts >= 1) {
        domainTotalMastery += skillData.mastery;
        domainSkillCount++;
        if (skillData.mastery < 60 && skillData.attempts >= 3) {
          domainWeakCount++;
        }
      }
    });

    domainProgress[domainId] = {
      avgMastery: domainSkillCount > 0 ? Math.round(domainTotalMastery / domainSkillCount) : 0,
      skillsAttempted: domainSkillCount,
      totalSkills: domainSkillIds.length,
      weakSkillCount: domainWeakCount
    };
  });

  return {
    totalSkillsAttempted,
    overallMastery,
    weakSkills,
    strongSkills,
    domainProgress
  };
};

/**
 * Get skill breakdown organized by domain > module > section > skills
 * @param {Object} skillProgress - Skill progress object from user data
 * @returns {Object} Hierarchical skill breakdown
 */
export const getSkillBreakdown = (skillProgress) => {
  const breakdown = {};

  Object.keys(skillTaxonomy.domains).forEach(domainId => {
    const domain = skillTaxonomy.domains[domainId];
    const domainSkills = getSkillsForDomain(domainId);

    // Group skills by module
    const moduleGroups = {};
    domainSkills.forEach(skill => {
      skill.modules.forEach(moduleId => {
        if (!moduleGroups[moduleId]) {
          moduleGroups[moduleId] = {};
        }

        // Group by section within module
        skill.sections.forEach(sectionName => {
          if (!moduleGroups[moduleId][sectionName]) {
            moduleGroups[moduleId][sectionName] = [];
          }

          const progress = skillProgress?.[skill.id] || null;
          moduleGroups[moduleId][sectionName].push({
            ...skill,
            progress: progress ? {
              attempts: progress.attempts,
              correct: progress.correct,
              mastery: progress.mastery,
              confidenceLevel: progress.confidenceLevel,
              trend: getSkillTrend(progress)
            } : null
          });
        });
      });
    });

    breakdown[domainId] = {
      ...domain,
      modules: moduleGroups
    };
  });

  return breakdown;
};

/**
 * Get skills that need practice (low mastery or few attempts)
 * @param {Object} skillProgress - Skill progress object from user data
 * @param {number} limit - Maximum number of skills to return
 * @returns {Array} Array of skills that need practice
 */
export const getSkillsNeedingPractice = (skillProgress, limit = 10) => {
  if (!skillProgress) return [];

  // Get all skills with some progress
  const practicedSkills = Object.entries(skillProgress)
    .map(([skillId, data]) => ({
      skillId,
      skill: getSkillById(skillId),
      ...data,
      priority: calculatePracticePriority(data)
    }))
    .sort((a, b) => b.priority - a.priority);

  return practicedSkills.slice(0, limit);
};

/**
 * Calculate priority for practicing a skill
 * Higher priority = more urgent to practice
 * @param {Object} skillData - Skill progress data
 * @returns {number} Priority score
 */
const calculatePracticePriority = (skillData) => {
  let priority = 0;

  // Low mastery increases priority
  if (skillData.mastery < 60) {
    priority += (60 - skillData.mastery);
  }

  // Declining trend increases priority
  const trend = getSkillTrend(skillData);
  if (trend === 'declining') {
    priority += 20;
  }

  // Few attempts (but at least one) increases priority for building confidence
  if (skillData.attempts < 5) {
    priority += (5 - skillData.attempts) * 5;
  }

  return priority;
};
