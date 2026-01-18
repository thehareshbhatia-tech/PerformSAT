/**
 * Study Plan Service
 * Generates personalized weekly study plans based on:
 * - Current performance (weak areas from practice scores)
 * - Target score (what the student wants to achieve)
 * - Test date (deadline for preparation)
 */

// Module metadata for context
const MODULE_INFO = {
  'linear-equations': { title: 'Linear Equations', weight: 15 },
  'functions': { title: 'Functions', weight: 10 },
  'systems': { title: 'System of Equations', weight: 12 },
  'transformations': { title: 'Transformations', weight: 5 },
  'exponents': { title: 'Exponents & Exponential Functions', weight: 10 },
  'percents': { title: 'Percents', weight: 8 },
  'quadratics': { title: 'Quadratics', weight: 12 },
  'triangles': { title: 'Triangles', weight: 8 },
  'circles': { title: 'Circles', weight: 5 },
  'statistics': { title: 'Statistics', weight: 8 },
  'radians-degrees': { title: 'Radians & Degrees', weight: 3 },
  'dimensional-analysis': { title: 'Dimensional Analysis', weight: 4 }
};

/**
 * Calculate days until a given date
 */
const getDaysUntil = (dateStr) => {
  if (!dateStr) return null;
  const targetDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  const diffTime = targetDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Estimate current SAT Math score from practice data
 * SAT Math: 200-800 points
 * @param {Object} practiceProgress - Practice progress data
 * @returns {{ mathScore: number, estimatedTotal: number }}
 */
export const estimateCurrentScore = (practiceProgress) => {
  if (!practiceProgress || Object.keys(practiceProgress).length === 0) {
    return {
      mathScore: 500,
      estimatedTotal: 1000
    };
  }

  let totalWeightedScore = 0;
  let totalWeight = 0;

  Object.entries(practiceProgress).forEach(([key, data]) => {
    const moduleId = key.split('-')[0];
    const moduleWeight = MODULE_INFO[moduleId]?.weight || 5;

    // Calculate accuracy (0-1) from best score out of 5
    const accuracy = (data.bestScore || 0) / 5;
    const attemptBonus = Math.min(data.totalAttempts || 1, 3) / 3; // Up to 3 attempts matter

    // Weight by module importance and attempt count
    const weight = moduleWeight * attemptBonus;
    totalWeightedScore += accuracy * weight;
    totalWeight += weight;
  });

  const avgAccuracy = totalWeight > 0 ? totalWeightedScore / totalWeight : 0.5;

  // Map accuracy to SAT Math score (200-800 range)
  // 0% accuracy = ~300, 100% accuracy = ~800
  const mathScore = Math.round(300 + (avgAccuracy * 500));

  return {
    mathScore,
    estimatedTotal: mathScore * 2 // Rough estimate (Math + Reading/Writing)
  };
};

/**
 * Find weak sections that need more practice
 * @param {Object} practiceProgress - Practice progress data
 * @returns {Array} Weak sections sorted by priority
 */
const findWeakSections = (practiceProgress) => {
  const weakSections = [];

  Object.entries(practiceProgress || {}).forEach(([key, data]) => {
    const [moduleId, ...sectionParts] = key.split('-');
    const sectionName = sectionParts.join('-');

    // Consider sections with score <= 3 as "weak"
    if (data.bestScore !== undefined && data.bestScore <= 3) {
      weakSections.push({
        moduleId,
        sectionName,
        moduleName: MODULE_INFO[moduleId]?.title || moduleId,
        bestScore: data.bestScore,
        totalAttempts: data.totalAttempts || 1,
        priority: (4 - data.bestScore) * (MODULE_INFO[moduleId]?.weight || 5)
      });
    }
  });

  return weakSections.sort((a, b) => b.priority - a.priority);
};

/**
 * Calculate study intensity needed to reach target
 * @param {number} scoreGap - Points needed to gain
 * @param {number} daysLeft - Days until test
 * @returns {{ minutesPerDay: number, intensity: string }}
 */
const calculateIntensity = (scoreGap, daysLeft) => {
  if (daysLeft <= 0) {
    return { minutesPerDay: 60, intensity: 'final-push' };
  }

  // Rough estimate: 1 point improvement per 30 minutes of study
  const totalMinutesNeeded = scoreGap * 30;
  const rawMinutesPerDay = Math.ceil(totalMinutesNeeded / daysLeft);

  // Clamp to reasonable range
  const minutesPerDay = Math.max(15, Math.min(120, rawMinutesPerDay));

  let intensity;
  if (minutesPerDay <= 20) intensity = 'light';
  else if (minutesPerDay <= 40) intensity = 'moderate';
  else if (minutesPerDay <= 60) intensity = 'focused';
  else if (minutesPerDay <= 90) intensity = 'intensive';
  else intensity = 'marathon';

  return { minutesPerDay, intensity };
};

/**
 * Generate this week's focus areas
 * @param {Array} weakSections - Weak sections to work on
 * @param {number} dueReviewCount - Number of reviews due
 * @returns {Array} This week's activities
 */
const generateWeeklyFocus = (weakSections, dueReviewCount) => {
  const focus = [];

  // Priority 1: Reviews (if any due)
  if (dueReviewCount > 0) {
    focus.push({
      type: 'review',
      title: `Review ${dueReviewCount} questions`,
      reason: 'Strengthen memory retention'
    });
  }

  // Priority 2: Top 3 weak sections
  weakSections.slice(0, 3).forEach(section => {
    focus.push({
      type: 'practice',
      title: section.sectionName,
      subtitle: section.moduleName,
      reason: `Score: ${section.bestScore}/5`,
      moduleId: section.moduleId,
      sectionName: section.sectionName
    });
  });

  return focus;
};

/**
 * Generate personalized study plan
 * @param {Object} params - Student data
 * @returns {Object} Personalized study plan
 */
export const generatePersonalizedPlan = ({
  completedLessons,
  practiceProgress,
  reviewQueue,
  testDate,
  targetScore
}) => {
  const daysLeft = getDaysUntil(testDate);
  const weeksLeft = daysLeft !== null ? Math.ceil(daysLeft / 7) : null;

  // Calculate current estimated score
  const { mathScore, estimatedTotal } = estimateCurrentScore(practiceProgress);

  // Use target or default to 1400
  const target = targetScore || 1400;
  const scoreGap = Math.max(0, target - estimatedTotal);

  // Calculate study intensity
  const { minutesPerDay, intensity } = calculateIntensity(scoreGap, daysLeft || 60);

  // Find weak sections
  const weakSections = findWeakSections(practiceProgress);

  // Get due review count
  const now = new Date();
  const dueReviewCount = Object.values(reviewQueue || {}).filter(item =>
    new Date(item.nextReviewDate) <= now
  ).length;

  // Generate weekly focus
  const weeklyFocus = generateWeeklyFocus(weakSections, dueReviewCount);

  // Calculate progress
  const completedCount = Object.values(completedLessons || {}).filter(l => l?.completed).length;

  return {
    summary: {
      daysLeft,
      weeksLeft,
      targetScore: target,
      currentEstimate: estimatedTotal,
      mathScore,
      scoreGap,
      dailyMinutes: minutesPerDay,
      intensity,
      lessonsCompleted: completedCount,
      focusAreas: weakSections.slice(0, 3).map(s => s.sectionName)
    },
    weeklyFocus,
    weakSections: weakSections.slice(0, 5),
    dueReviewCount,
    onTrack: scoreGap === 0 || (daysLeft && minutesPerDay <= 45),
    message: generateMotivationalMessage(scoreGap, daysLeft, intensity)
  };
};

/**
 * Generate a motivational message based on situation
 */
const generateMotivationalMessage = (scoreGap, daysLeft, intensity) => {
  if (scoreGap === 0) {
    return "You're on target! Keep up the great work.";
  }

  if (daysLeft !== null && daysLeft <= 7) {
    return "Final week! Focus on review and your weakest areas.";
  }

  if (daysLeft !== null && daysLeft <= 14) {
    return "Two weeks to go. Prioritize practice over new content.";
  }

  if (intensity === 'light') {
    return "You're close to your goal. Stay consistent!";
  }

  if (intensity === 'marathon') {
    return "Ambitious goal! Consider adjusting your target or test date.";
  }

  return "Consistent daily practice will get you there.";
};

/**
 * Get a quick summary for the dashboard
 * @param {Object} params - Student data
 * @returns {Object|null} Quick summary or null if insufficient data
 */
export const getQuickPlanSummary = (params) => {
  const plan = generatePersonalizedPlan(params);

  if (!params.testDate) {
    return null;
  }

  return {
    currentScore: plan.summary.currentEstimate,
    targetScore: plan.summary.targetScore,
    daysLeft: plan.summary.daysLeft,
    dailyMinutes: plan.summary.dailyMinutes,
    topFocusArea: plan.summary.focusAreas[0] || null,
    onTrack: plan.onTrack,
    message: plan.message
  };
};
