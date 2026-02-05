/**
 * Proactive Recommendation Service
 * Generates personalized, proactive recommendations for the AI Tutor
 * based on student skill progress and learning patterns.
 */

import { getWeakSkills, getSkillTrend } from './skillService';
import { getSkillById, getSkillsForModule, skillTaxonomy } from '../data/skillTaxonomy';

/**
 * Calculate days until test date
 */
const getDaysUntilTest = (testDate) => {
  if (!testDate) return null;
  const today = new Date();
  const test = new Date(testDate);
  const diffTime = test - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : null;
};

/**
 * Find skills with declining trend
 */
const findDecliningSkills = (skillProgress) => {
  if (!skillProgress) return [];

  return Object.entries(skillProgress)
    .filter(([skillId, data]) => {
      const trend = getSkillTrend(data);
      return trend === 'declining' && data.attempts >= 4;
    })
    .map(([skillId, data]) => ({
      skillId,
      ...data,
      skill: getSkillById(skillId),
      trend: 'declining'
    }))
    .sort((a, b) => a.mastery - b.mastery);
};

/**
 * Generate recommendation for struggling pattern (3+ wrong)
 */
const generateStruggleRecommendation = (skillId, skillProgress) => {
  const skill = getSkillById(skillId);
  const skillData = skillProgress[skillId];

  if (!skill) return null;

  return {
    type: 'struggle',
    title: `Let's try a different approach`,
    message: `Having trouble with ${skill.name}? That's okay - this is a tricky concept. Let me explain it in a simpler way, or we can try some easier practice problems first.`,
    skillId,
    skillName: skill.name,
    mastery: skillData?.mastery || 0,
    actionLabel: 'Get simpler explanation',
    action: 'simplify-explanation',
    suggestedPrompt: `Can you explain ${skill.name} in the simplest way possible, with a basic example?`
  };
};

/**
 * Generate alert for declining skill
 */
const generateDecliningSkillAlert = (decliningSkill, testDate) => {
  const daysLeft = getDaysUntilTest(testDate);
  const urgencyNote = daysLeft && daysLeft <= 14
    ? ` With ${daysLeft} days until your test, let's prioritize this.`
    : '';

  return {
    type: 'declining',
    title: `Skill needs attention`,
    message: `Your ${decliningSkill.skill?.name || decliningSkill.skillId} mastery has dropped to ${decliningSkill.mastery}%. Let's practice with some easier problems to rebuild confidence.${urgencyNote}`,
    skillId: decliningSkill.skillId,
    skillName: decliningSkill.skill?.name,
    mastery: decliningSkill.mastery,
    previousMastery: estimatePreviousMastery(decliningSkill),
    actionLabel: 'Practice this skill',
    action: 'practice-skill',
    daysUntilTest: daysLeft
  };
};

/**
 * Estimate what mastery was before decline
 */
const estimatePreviousMastery = (skillData) => {
  if (!skillData.history || skillData.history.length < 4) {
    return skillData.mastery + 15;
  }
  const olderHalf = skillData.history.slice(0, Math.floor(skillData.history.length / 2));
  const olderRate = olderHalf.filter(h => h.correct).length / olderHalf.length;
  return Math.round(olderRate * 100);
};

/**
 * Generate "what to study next" recommendation
 */
const generateNextStudyRecommendation = (weakSkills, testDate) => {
  if (weakSkills.length === 0) return null;

  const topWeakSkill = weakSkills[0];
  const domain = skillTaxonomy.domains[topWeakSkill.skill?.domain];
  const daysLeft = getDaysUntilTest(testDate);

  let message = `Focus on ${topWeakSkill.skill?.name || 'this skill'} (currently ${topWeakSkill.mastery}% mastery).`;

  if (domain) {
    message += ` This is part of ${domain.name}, which makes up ${Math.round(domain.satWeight * 100)}% of SAT Math.`;
  }

  if (daysLeft && daysLeft <= 30) {
    message += ` With ${daysLeft} days left, improving this skill could boost your score.`;
  }

  return {
    type: 'next-study',
    title: 'Recommended focus area',
    message,
    skillId: topWeakSkill.skillId,
    skillName: topWeakSkill.skill?.name,
    mastery: topWeakSkill.mastery,
    domain: domain?.name,
    satWeight: domain?.satWeight,
    actionLabel: 'Study this topic',
    action: 'study-topic',
    relatedSkills: getRelatedSkillSuggestions(topWeakSkill.skillId).slice(0, 2)
  };
};

/**
 * Generate proactive recommendation based on student's current context and skill data
 * @param {Object} skillProgress - Student's skill progress from Firestore
 * @param {Object} context - Current context (skillId, isCorrect, testDate, etc.)
 * @returns {Object|null} Recommendation object or null
 */
export const generateProactiveRecommendation = (skillProgress, context = {}) => {
  if (!skillProgress) return null;

  const { currentSkillId, isCorrect, wrongCount, testDate } = context;

  // Priority 1: Struggling pattern detection (3+ wrong on same skill)
  if (currentSkillId && isCorrect === false && wrongCount >= 3) {
    return generateStruggleRecommendation(currentSkillId, skillProgress);
  }

  // Priority 2: Declining skill alert
  const decliningSkills = findDecliningSkills(skillProgress);
  if (decliningSkills.length > 0) {
    return generateDecliningSkillAlert(decliningSkills[0], testDate);
  }

  // Priority 3: "What to study next" for weak skills
  const weakSkills = getWeakSkills(skillProgress);
  if (weakSkills.length > 0) {
    return generateNextStudyRecommendation(weakSkills, testDate);
  }

  return null;
};

/**
 * Check if we should proactively offer a hint for this question
 * @param {Object} skillProgress - Student's skill progress
 * @param {string[]} questionSkills - Skill IDs for the current question
 * @returns {Object} { offer: boolean, skillId, reason, skillName }
 */
export const shouldOfferProactiveHint = (skillProgress, questionSkills) => {
  if (!skillProgress || !questionSkills || questionSkills.length === 0) {
    return { offer: false };
  }

  for (const skillId of questionSkills) {
    const skillData = skillProgress[skillId];
    const skill = getSkillById(skillId);

    if (!skillData) continue;

    // Offer hint if low confidence AND low mastery
    if (skillData.confidenceLevel === 'low' && skillData.mastery < 50) {
      return {
        offer: true,
        skillId,
        skillName: skill?.name || skillId,
        reason: 'low-confidence',
        message: `This question involves ${skill?.name || 'a concept'} you're still learning. Would you like a hint?`
      };
    }

    // Offer hint if skill is declining
    const trend = getSkillTrend(skillData);
    if (trend === 'declining' && skillData.mastery < 70) {
      return {
        offer: true,
        skillId,
        skillName: skill?.name || skillId,
        reason: 'declining',
        message: `I noticed you've been having some trouble with ${skill?.name || 'this concept'} lately. Want me to give you a hint?`
      };
    }
  }

  return { offer: false };
};

/**
 * Get related skills to suggest when student struggles
 * @param {string} skillId - Current skill ID
 * @returns {Array} Related skills from same module
 */
export const getRelatedSkillSuggestions = (skillId) => {
  const skill = getSkillById(skillId);
  if (!skill || !skill.modules || skill.modules.length === 0) return [];

  // Get other skills from same module
  const moduleSkills = getSkillsForModule(skill.modules[0]);

  return moduleSkills
    .filter(s => s.id !== skillId)
    .map(s => ({
      id: s.id,
      name: s.name,
      satConcept: s.satConcept
    }))
    .slice(0, 3);
};

/**
 * Generate smart suggested prompts based on skill gaps
 * @param {Object} skillProgress - Student's skill progress
 * @param {Object} currentQuestion - Current question object (with skills array)
 * @returns {string[]} Array of suggested prompts
 */
export const generateSmartPrompts = (skillProgress, currentQuestion) => {
  const prompts = [];

  // If question has skills and student is weak on any
  if (currentQuestion?.skills && skillProgress) {
    const weakSkill = currentQuestion.skills.find(skillId => {
      const data = skillProgress[skillId];
      return data && data.mastery < 60;
    });

    if (weakSkill) {
      const skill = getSkillById(weakSkill);
      if (skill) {
        prompts.push(`Can you explain ${skill.name} step by step?`);
      }
    }
  }

  // Always include these helpful prompts
  prompts.push("What other concepts should I know to master this?");
  prompts.push("Can you give me a hint without telling the answer?");
  prompts.push("Why is my approach wrong?");

  return prompts.slice(0, 4); // Max 4 prompts
};

/**
 * Build skill context string for AI system prompt
 * @param {Object} skillProgress - Student's skill progress
 * @param {string[]} currentSkills - Skill IDs for current question
 * @returns {string} Context string for system prompt
 */
export const buildSkillContextForAI = (skillProgress, currentSkills) => {
  if (!skillProgress || !currentSkills || currentSkills.length === 0) {
    return '';
  }

  const relevantSkills = currentSkills.map(skillId => {
    const data = skillProgress[skillId];
    const skill = getSkillById(skillId);
    if (!data) return null;

    return {
      skillId,
      name: skill?.name || skillId,
      mastery: data.mastery,
      trend: getSkillTrend(data),
      confidence: data.confidenceLevel,
      attempts: data.attempts
    };
  }).filter(Boolean);

  if (relevantSkills.length === 0) return '';

  let context = `
[STUDENT SKILL CONTEXT]
The student's performance on skills related to this question:
${relevantSkills.map(s =>
    `- ${s.name}: ${s.mastery}% mastery (${s.confidence} confidence, ${s.trend} trend, ${s.attempts} attempts)`
  ).join('\n')}
`;

  // Add behavioral notes for the AI
  const hasDeclining = relevantSkills.some(s => s.trend === 'declining');
  const hasLowConfidence = relevantSkills.some(s => s.confidence === 'low');
  const hasStruggling = relevantSkills.some(s => s.mastery < 40);

  if (hasDeclining) {
    context += '\nNOTE: Student is showing declining performance on this topic. Be encouraging, patient, and suggest trying simpler examples first.';
  }

  if (hasLowConfidence) {
    context += '\nNOTE: Student has low confidence in this area (few attempts). Explain concepts thoroughly and offer to break things down step-by-step.';
  }

  if (hasStruggling) {
    context += '\nNOTE: Student is struggling with this concept (<40% mastery). Start with fundamentals, use very simple language, and give concrete examples.';
  }

  return context;
};

export default {
  generateProactiveRecommendation,
  shouldOfferProactiveHint,
  getRelatedSkillSuggestions,
  generateSmartPrompts,
  buildSkillContextForAI
};
