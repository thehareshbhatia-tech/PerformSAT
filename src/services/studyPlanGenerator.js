/**
 * ═══════════════════════════════════════════════════════════════════════════
 * STUDY PLAN GENERATOR — The Prescriptive Engine of PerformSAT
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Takes the output of the Diagnostic Engine and creates a concrete,
 * week-by-week study plan mapped to actual lessons and practice sections
 * in the PerformSAT curriculum.
 *
 * The philosophy: Students don't need to figure out what to study.
 * The system tells them EXACTLY what to do, in what order, and for how long.
 *
 * After each subsequent practice test, the plan adapts:
 * - Skills that improved get less time
 * - Skills that didn't improve get more time + different approach
 * - New weaknesses discovered get added
 * - Target date urgency increases appropriately
 */

import { allLessons } from '../data/lessons';
import { hasQuestionsForSection, getSectionsWithQuestions } from '../data/questions';
import { getSkillById, skillTaxonomy } from '../data/skillTaxonomy';
import { ERROR_TYPES, ERROR_TYPE_LABELS, ERROR_TYPE_ICONS } from './diagnosticEngine';
import { generatePracticeAssignments, buildAdaptiveQueueSeed, serializeAdaptiveState, createAdaptiveSessionState } from './practiceAssignmentService';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

// How many minutes per day is realistic at each intensity level
const INTENSITY_LEVELS = {
  light:     { minutesPerDay: 20, label: 'Light', description: '20 min/day — maintaining skills', daysPerWeek: 5 },
  moderate:  { minutesPerDay: 35, label: 'Moderate', description: '35 min/day — steady progress', daysPerWeek: 5 },
  focused:   { minutesPerDay: 50, label: 'Focused', description: '50 min/day — significant gains', daysPerWeek: 6 },
  intensive: { minutesPerDay: 75, label: 'Intensive', description: '75 min/day — aggressive improvement', daysPerWeek: 6 },
  marathon:  { minutesPerDay: 100, label: 'Marathon', description: '100 min/day — maximum push', daysPerWeek: 7 },
};

// Approximate time for different activity types (in minutes)
const ACTIVITY_DURATIONS = {
  watchLesson: 8,         // Watch a video lesson
  readLesson: 5,          // Read a text lesson
  practiceSection: 15,    // Complete a 5-question practice section
  reviewMistakes: 10,     // Review past mistakes
  practiceTest: 70,       // Full practice test (35 min × 2 modules)
  strategyDrill: 10,      // Trap recognition or time management drill
};

// Module to skill mapping (which modules teach which skills)
const MODULE_SKILL_MAP = {
  'linear-equations': ['slope-from-points', 'slope-intercept-form', 'word-problem-to-equation', 'table-to-equation', 'function-evaluation', 'parallel-line-slope', 'writing-parallel-equation', 'perpendicular-negative-reciprocal', 'writing-perpendicular-equation'],
  'functions': ['function-notation', 'domain-restrictions', 'function-composition', 'function-interpretation'],
  'systems': ['system-solution-types', 'setting-up-systems', 'substitution-method', 'elimination-method', 'graphing-systems', 'infinite-solutions-condition'],
  'transformations': ['graph-transformations', 'vertical-shifts', 'horizontal-shifts', 'reflections'],
  'exponents': ['exponent-rules', 'exponential-growth', 'exponential-decay', 'compound-interest', 'half-life'],
  'percents': ['percents', 'percent-change', 'sequential-percent-change'],
  'quadratics': ['factoring', 'quadratic-formula', 'completing-the-square', 'vertex-form', 'discriminant', 'quadratic-functions'],
  'triangles': ['pythagorean-theorem', 'right-triangles', 'special-right-triangles', 'similar-triangles', 'sohcahtoa', 'trigonometry'],
  'circles': ['circle-equations', 'completing-the-square-circles', 'arc-length', 'sector-area'],
  'statistics': ['mean-median-mode', 'standard-deviation', 'data-interpretation', 'margin-of-error', 'two-way-tables', 'probability'],
  'radians-degrees': ['radian-degree-conversion', 'unit-circle'],
  'dimensional-analysis': ['unit-conversion', 'rate-problems'],
  'equivalent-expressions': ['simplifying-expressions', 'combining-like-terms', 'polynomial-operations'],
  'volume': ['prism-volume', 'cylinder-volume', 'cone-sphere-volume'],
};

// Reverse mapping: skill → modules that teach it
const buildSkillToModuleMap = () => {
  const map = {};
  Object.entries(MODULE_SKILL_MAP).forEach(([moduleId, skills]) => {
    skills.forEach(skillId => {
      if (!map[skillId]) map[skillId] = [];
      map[skillId].push(moduleId);
    });
  });
  return map;
};

const SKILL_TO_MODULE_MAP = buildSkillToModuleMap();

// Day names for the weekly schedule
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// ═══════════════════════════════════════════════════════════════════════════
// MAIN STUDY PLAN GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate a complete study plan from diagnostic results.
 *
 * @param {Object} diagnostic - Output from diagnosticEngine.runDiagnostic()
 * @param {Object} userProfile - { targetScore, testDate, currentScore }
 * @param {Object} completedLessons - Student's completed lessons map
 * @param {Object} practiceProgress - Student's practice progress map
 * @param {Object|null} previousPlan - Previous study plan (for adaptation)
 * @returns {Object} Complete study plan
 */
export const generateStudyPlan = (diagnostic, userProfile = {}, completedLessons = {}, practiceProgress = {}, previousPlan = null) => {
  const { targetScore = 700, testDate } = userProfile;
  const currentScore = diagnostic.score.scaled;
  const scoreGap = Math.max(0, targetScore - currentScore);

  // ═══ Calculate time constraints ═══
  const daysUntilTest = getDaysUntil(testDate);
  const weeksUntilTest = daysUntilTest !== null ? Math.ceil(daysUntilTest / 7) : 8; // Default 8 weeks
  const effectiveWeeks = Math.min(Math.max(1, weeksUntilTest), 12); // Cap at 12 weeks

  // ═══ Determine study intensity ═══
  const intensity = calculateIntensity(scoreGap, daysUntilTest);
  const intensityConfig = INTENSITY_LEVELS[intensity];
  const minutesPerWeek = intensityConfig.minutesPerDay * intensityConfig.daysPerWeek;

  // ═══ Gather all skill gaps from the diagnostic ═══
  const skillGaps = gatherSkillGaps(diagnostic);

  // ═══ Map skill gaps to specific curriculum activities ═══
  const activities = mapGapsToActivities(skillGaps, completedLessons, practiceProgress, diagnostic);

  // ═══ Add strategy activities (trap avoidance, time management, etc.) ═══
  const strategyActivities = generateStrategyActivities(diagnostic);

  // ═══ Distribute activities across weeks ═══
  const weeklyPlan = distributeAcrossWeeks(
    activities,
    strategyActivities,
    effectiveWeeks,
    minutesPerWeek,
    diagnostic,
    previousPlan
  );

  // ═══ Generate milestones ═══
  const milestones = generateMilestones(weeklyPlan, currentScore, targetScore, effectiveWeeks);

  // ═══ Generate the executive summary ═══
  const summary = generatePlanSummary(
    diagnostic, weeklyPlan, intensity, effectiveWeeks,
    daysUntilTest, currentScore, targetScore, skillGaps
  );

  // Generate spaced repetition schedule for mastered-but-weak skills
  const spacedRepetitionSchedule = generateSpacedRepetition(skillGaps, effectiveWeeks);

  // Generate daily micro-goals for engagement
  const microGoals = generateMicroGoals(diagnostic, skillGaps, effectiveWeeks);

  // Calculate plan adherence metrics (for returning students)
  const adherenceProjection = calculateAdherenceProjection(
    weeklyPlan, currentScore, targetScore, effectiveWeeks
  );

  const nextAction = deriveSignalAwareNextAction(weeklyPlan, diagnostic);

  const generatedAt = new Date().toISOString();

  // ═══ Assign practice questions from the bank ═══
  const assignmentSeed = `${diagnostic.testId || 'diag'}-${generatedAt}`;
  const { targetedQuestionIds, practiceAssignments, summary: assignmentSummary } =
    generatePracticeAssignments({
      diagnostic,
      weekCount: effectiveWeeks,
      excludeIds: [],
      seed: assignmentSeed,
      questionsPerWeek: 10,
      difficultyMix: { easy: 0.30, medium: 0.45, hard: 0.25 },
    });

  // ═══ Adaptive practice queue seed + initial state (Acely-style) ═══
  const adaptivePractice = buildAdaptiveQueueSeed({
    diagnostic,
    seed: assignmentSeed,
    poolSize: 80,
  });
  const adaptivePracticeState = serializeAdaptiveState(
    createAdaptiveSessionState(adaptivePractice),
  );

  return {
    // Core plan data
    weeks: weeklyPlan,
    milestones,
    summary,
    nextAction,

    // Adaptive practice (primary — Acely-style)
    adaptivePractice,
    adaptivePracticeState,

    // Legacy practice assignments (fallback)
    targetedQuestionIds,
    practiceAssignments,
    assignmentSummary,

    // Advanced features
    spacedRepetitionSchedule,
    microGoals,
    adherenceProjection,

    // Metadata
    intensity,
    intensityConfig,
    currentScore,
    targetScore,
    scoreGap,
    daysUntilTest,
    weeksUntilTest: effectiveWeeks,
    minutesPerWeek,
    totalActivities: activities.length + strategyActivities.length,

    // The raw prioritized gaps (for reference)
    skillGaps,

    // Timestamp
    generatedAt,
    basedOnTest: diagnostic.testId,

    // Adaptation data (for next plan generation)
    previousPlanId: previousPlan?.generatedAt || null,
  };
};

// ═══════════════════════════════════════════════════════════════════════════
// GAP ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Gather all skill gaps from the diagnostic, prioritized by ROI.
 */
const gatherSkillGaps = (diagnostic) => {
  const gaps = [];

  // From weak skills identified in the test
  diagnostic.skillAnalysis.weakSkills.forEach((skill, idx) => {
    // Find what module(s) and section(s) can address this skill
    const moduleMatches = findModulesForSkill(skill.skillId);

    gaps.push({
      skillId: skill.skillId,
      skillName: skill.name,
      domain: skill.domain,
      testAccuracy: skill.testAccuracy,
      historicalMastery: skill.historicalMastery,
      primaryErrorType: skill.primaryErrorType,
      modules: moduleMatches,
      sections: skill.sections || [],
      // Priority scoring:
      // - Low accuracy = higher priority
      // - Domain weight = higher priority
      // - Conceptual gaps > procedural > other (harder to fix = start earlier)
      priority: calculateGapPriority(skill, diagnostic),
      estimatedMinutes: estimateTimeToFix(skill),
    });
  });

  // Also add skills from prioritized actions that aren't already covered
  diagnostic.prioritizedActions
    .filter(a => a.type === 'skill' && !gaps.find(g => g.skillId === a.skillId))
    .forEach(action => {
      gaps.push({
        skillId: action.skillId,
        skillName: action.title.replace('Master: ', ''),
        modules: action.modules?.map(m => ({ moduleId: m, lessons: [], sections: [] })) || [],
        sections: action.sections || [],
        priority: action.estimatedGain,
        primaryErrorType: action.primaryErrorType,
        estimatedMinutes: 30,
      });
    });

  // Sort by priority (highest first)
  gaps.sort((a, b) => b.priority - a.priority);

  return gaps;
};

/**
 * Find which modules and sections can teach a given skill.
 */
const findModulesForSkill = (skillId) => {
  const skill = getSkillById(skillId);
  const results = [];

  // Check direct module mapping
  const directModules = SKILL_TO_MODULE_MAP[skillId] || [];

  // Also check skill taxonomy for module associations
  const taxonomyModules = skill?.modules || [];

  const allModuleIds = [...new Set([...directModules, ...taxonomyModules])];

  allModuleIds.forEach(moduleId => {
    const lessons = allLessons[moduleId] || [];
    const relevantLessons = findRelevantLessons(lessons, skillId, skill);
    const relevantSections = findRelevantSections(moduleId, skill);

    results.push({
      moduleId,
      moduleName: getModuleName(moduleId),
      lessons: relevantLessons,
      sections: relevantSections,
    });
  });

  // If no results found through mapping, try fuzzy matching
  if (results.length === 0) {
    const fuzzyModule = fuzzyMatchModule(skillId);
    if (fuzzyModule) {
      results.push({
        moduleId: fuzzyModule,
        moduleName: getModuleName(fuzzyModule),
        lessons: (allLessons[fuzzyModule] || []).slice(0, 3),
        sections: [],
      });
    }
  }

  return results;
};

/**
 * Find lessons within a module that are relevant to a specific skill.
 */
const findRelevantLessons = (lessons, skillId, skill) => {
  if (!lessons || lessons.length === 0) return [];

  const skillName = (skill?.name || skillId).toLowerCase();
  const sections = (skill?.sections || []).map(s => s.toLowerCase());

  // Find lessons that match by section name or title
  const relevant = lessons.filter(lesson => {
    const lessonSection = (lesson.section || '').toLowerCase();
    const lessonTitle = (lesson.title || '').toLowerCase();

    // Match by section
    if (sections.some(s => lessonSection.includes(s) || s.includes(lessonSection))) return true;

    // Match by skill name in title
    if (lessonTitle.includes(skillName.split(' ')[0])) return true;

    return false;
  });

  return relevant.length > 0 ? relevant.slice(0, 5) : lessons.slice(0, 3);
};

/**
 * Find practice sections relevant to a skill within a module.
 */
const findRelevantSections = (moduleId, skill) => {
  if (!skill) return [];

  const taxonomySections = skill.sections || [];
  const results = [];

  taxonomySections.forEach(sectionName => {
    if (hasQuestionsForSection(moduleId, sectionName)) {
      results.push({ moduleId, sectionName });
    }
  });

  // If no taxonomy sections match, try getting all available sections
  if (results.length === 0) {
    try {
      const available = getSectionsWithQuestions(moduleId);
      if (available && available.length > 0) {
        results.push({ moduleId, sectionName: available[0] });
      }
    } catch (e) {
      // getSectionsWithQuestions might not exist
    }
  }

  return results;
};

// ═══════════════════════════════════════════════════════════════════════════
// ACTIVITY GENERATION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Map skill gaps to specific, actionable study activities.
 */
const mapGapsToActivities = (skillGaps, completedLessons, practiceProgress, diagnostic) => {
  const activities = [];

  skillGaps.forEach(gap => {
    const errorType = gap.primaryErrorType;

    gap.modules.forEach(mod => {
      // ACTIVITY TYPE 1: Watch/re-watch lessons
      // (Especially for conceptual gaps or skills the student hasn't studied)
      if (errorType === ERROR_TYPES.CONCEPTUAL_GAP || gap.historicalMastery === null || gap.historicalMastery < 40) {
        mod.lessons.forEach(lesson => {
          const lessonKey = `${mod.moduleId}-${lesson.id}`;
          const alreadyCompleted = completedLessons[lessonKey]?.completed;

          activities.push({
            type: 'lesson',
            activityType: lesson.type === 'video' ? 'watchLesson' : 'readLesson',
            title: alreadyCompleted ? `Review: ${lesson.title}` : lesson.title,
            subtitle: `${mod.moduleName} → ${lesson.section || 'Core'}`,
            moduleId: mod.moduleId,
            lessonId: lesson.id,
            sectionName: lesson.section,
            duration: lesson.type === 'video' ? ACTIVITY_DURATIONS.watchLesson : ACTIVITY_DURATIONS.readLesson,
            priority: gap.priority,
            skillId: gap.skillId,
            skillName: gap.skillName,
            isReview: alreadyCompleted,
            icon: lesson.type === 'video' ? '🎥' : '📖',
          });
        });
      }

      // ACTIVITY TYPE 2: Practice sections
      // (For all error types — practice is always valuable)
      mod.sections.forEach(section => {
        const practiceKey = `${section.moduleId}-${section.sectionName}`;
        const prevAttempts = practiceProgress[practiceKey]?.totalAttempts || 0;
        const prevBest = practiceProgress[practiceKey]?.bestScore;

        activities.push({
          type: 'practice',
          activityType: 'practiceSection',
          title: `Practice: ${section.sectionName}`,
          subtitle: `${mod.moduleName}${prevBest !== undefined ? ` (Best: ${prevBest}/5)` : ''}`,
          moduleId: section.moduleId,
          sectionName: section.sectionName,
          duration: ACTIVITY_DURATIONS.practiceSection,
          priority: gap.priority + (prevBest !== undefined && prevBest < 3 ? 5 : 0),
          skillId: gap.skillId,
          skillName: gap.skillName,
          previousAttempts: prevAttempts,
          previousBest: prevBest,
          icon: null,
        });
      });
    });
  });

  // Deduplicate: same lesson/section shouldn't appear twice
  const seen = new Set();
  const deduped = activities.filter(a => {
    const key = a.type === 'lesson'
      ? `lesson-${a.moduleId}-${a.lessonId}`
      : `practice-${a.moduleId}-${a.sectionName}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort by priority
  deduped.sort((a, b) => b.priority - a.priority);

  return deduped;
};

/**
 * Generate strategy-focused activities based on error patterns.
 */
const generateStrategyActivities = (diagnostic) => {
  const activities = [];
  const errorCounts = diagnostic.errorPatterns.counts;

  // Trap avoidance drills
  if ((errorCounts[ERROR_TYPES.TRAP_SUSCEPTIBILITY] || 0) >= 2) {
    activities.push({
      type: 'strategy',
      activityType: 'strategyDrill',
      title: 'Trap Answer Recognition Drill',
      subtitle: 'Learn to spot the 6 most common College Board traps',
      duration: ACTIVITY_DURATIONS.strategyDrill,
      priority: 90,
      icon: null,
      tips: [
        'Before choosing, predict what trap answers might look like',
        'In percent problems: "increased by X%" ≠ "X% of"',
        'In multi-step problems: check that you answered the FINAL question, not an intermediate step',
        'If your answer came too easily on a hard question, it\'s probably a trap',
      ],
    });
  }

  // Time management drills
  if ((errorCounts[ERROR_TYPES.TIME_PRESSURE] || 0) >= 3 || diagnostic.timeAnalysis.fadeEffect > 15) {
    activities.push({
      type: 'strategy',
      activityType: 'strategyDrill',
      title: 'Time Management Practice',
      subtitle: `${diagnostic.timeAnalysis.timeRelatedErrors} questions affected by time`,
      duration: ACTIVITY_DURATIONS.strategyDrill,
      priority: 85,
      icon: null,
      tips: [
        'Easy: max 90 seconds. Medium: max 2 minutes. Hard: max 3 minutes.',
        'If stuck, flag it and move on — come back with fresh eyes',
        'Use the last 5 minutes to review flagged questions',
        'Don\'t spend 4 minutes on one hard question and rush the next three',
      ],
    });
  }

  // Careless error reduction
  if ((errorCounts[ERROR_TYPES.CARELESS_ERROR] || 0) >= 2) {
    activities.push({
      type: 'strategy',
      activityType: 'strategyDrill',
      title: 'Careless Error Prevention',
      subtitle: `${errorCounts[ERROR_TYPES.CARELESS_ERROR]} avoidable mistakes last test`,
      duration: ACTIVITY_DURATIONS.strategyDrill,
      priority: 95,
      icon: null,
      tips: [
        'Re-read the last sentence of EVERY question before answering',
        'After solving, plug your answer back in to verify',
        'Circle/highlight what the question is actually asking for (x? 2x+1? y?)',
        'For fill-in: double-check that your answer is in the right units/form',
      ],
    });
  }

  // Mistake review session
  if (diagnostic.errorPatterns.totalWrong > 5) {
    activities.push({
      type: 'review',
      activityType: 'reviewMistakes',
      title: 'Review Your Missed Questions',
      subtitle: `${diagnostic.errorPatterns.totalWrong} questions to review from ${diagnostic.testTitle}`,
      duration: ACTIVITY_DURATIONS.reviewMistakes,
      priority: 100, // Always high priority
      icon: null,
      tips: [
        'For each wrong answer, understand WHY the correct answer is right',
        'Write down what you would do differently next time',
        'Focus on questions you "almost" got right — these are your quick wins',
      ],
    });
  }

  return activities;
};

// ═══════════════════════════════════════════════════════════════════════════
// WEEKLY DISTRIBUTION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Distribute activities across weeks in a sensible order.
 * Week structure:
 * - Start of week: Strategy + review
 * - Mid-week: Lessons + practice on new skills
 * - End of week: More practice + self-assessment
 * - Every 3-4 weeks: Take a practice test
 */
const distributeAcrossWeeks = (activities, strategyActivities, totalWeeks, minutesPerWeek, diagnostic, previousPlan) => {
  const weeks = [];

  // Build a pool of all activities sorted by priority
  const allActivities = [
    ...strategyActivities,
    ...activities,
  ].sort((a, b) => b.priority - a.priority);

  // Track which activities have been assigned
  let activityPool = [...allActivities];

  for (let weekNum = 1; weekNum <= totalWeeks; weekNum++) {
    const isFirstWeek = weekNum === 1;
    const isLastWeek = weekNum === totalWeeks;
    const isTestWeek = weekNum % 3 === 0 || isLastWeek; // Test every 3 weeks + last week

    const weekActivities = [];
    let weekMinutesUsed = 0;
    const weekMinutesBudget = minutesPerWeek;

    // ── PHASE 1: Start of week — Review + Strategy ──
    if (isFirstWeek) {
      // First week: review mistakes from the test that triggered this plan
      const reviewActivity = activityPool.find(a => a.type === 'review');
      if (reviewActivity) {
        weekActivities.push({
          ...reviewActivity,
          day: 'Monday',
          weekPhase: 'start',
        });
        weekMinutesUsed += reviewActivity.duration;
        activityPool = activityPool.filter(a => a !== reviewActivity);
      }
    }

    // Add one strategy activity per week (if available)
    const strategyIdx = activityPool.findIndex(a => a.type === 'strategy');
    if (strategyIdx !== -1 && weekMinutesUsed + activityPool[strategyIdx].duration <= weekMinutesBudget) {
      weekActivities.push({
        ...activityPool[strategyIdx],
        day: isFirstWeek ? 'Tuesday' : 'Monday',
        weekPhase: 'start',
      });
      weekMinutesUsed += activityPool[strategyIdx].duration;
      activityPool.splice(strategyIdx, 1);
    }

    // ── PHASE 2: Mid-week — Lessons and Practice ──
    const midWeekDays = isFirstWeek
      ? ['Wednesday', 'Thursday', 'Friday']
      : ['Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    let dayIdx = 0;
    while (activityPool.length > 0 && weekMinutesUsed < weekMinutesBudget && dayIdx < midWeekDays.length) {
      const nextActivity = activityPool[0];
      if (!nextActivity) break;

      if (weekMinutesUsed + nextActivity.duration > weekMinutesBudget + 10) {
        // Over budget — try to find a shorter activity
        const shorterIdx = activityPool.findIndex(a => weekMinutesUsed + a.duration <= weekMinutesBudget + 10);
        if (shorterIdx === -1) break;

        weekActivities.push({
          ...activityPool[shorterIdx],
          day: midWeekDays[dayIdx % midWeekDays.length],
          weekPhase: 'mid',
        });
        weekMinutesUsed += activityPool[shorterIdx].duration;
        activityPool.splice(shorterIdx, 1);
      } else {
        weekActivities.push({
          ...nextActivity,
          day: midWeekDays[dayIdx % midWeekDays.length],
          weekPhase: 'mid',
        });
        weekMinutesUsed += nextActivity.duration;
        activityPool.shift();
      }
      dayIdx++;
    }

    // ── PHASE 3: Test week — add practice test ──
    if (isTestWeek && !isFirstWeek) {
      weekActivities.push({
        type: 'test',
        activityType: 'practiceTest',
        title: isLastWeek ? 'Final Practice Test' : 'Progress Check: Practice Test',
        subtitle: isLastWeek
          ? 'Full-length timed test to measure your final readiness'
          : 'Take a practice test to measure improvement and adjust your plan',
        duration: ACTIVITY_DURATIONS.practiceTest,
        priority: 100,
        icon: null,
        day: 'Saturday',
        weekPhase: 'end',
        tips: [
          'Take this test under real conditions — timed, no breaks, no phone',
          'After completing, review the diagnostic to see what improved',
        ],
      });
    }

    // ── Calculate week summary ──
    const weekLessonCount = weekActivities.filter(a => a.type === 'lesson').length;
    const weekPracticeCount = weekActivities.filter(a => a.type === 'practice').length;
    const weekStrategyCount = weekActivities.filter(a => a.type === 'strategy' || a.type === 'review').length;

    // Determine the focus areas for this week
    const weekSkills = [...new Set(weekActivities.filter(a => a.skillName).map(a => a.skillName))];
    const weekDomains = [...new Set(weekActivities.filter(a => a.moduleId).map(a => {
      // Infer domain from module
      if (['linear-equations', 'functions', 'systems'].includes(a.moduleId)) return 'Algebra';
      if (['percents', 'statistics', 'dimensional-analysis'].includes(a.moduleId)) return 'Problem Solving';
      if (['quadratics', 'exponents', 'equivalent-expressions', 'transformations'].includes(a.moduleId)) return 'Advanced Math';
      if (['triangles', 'circles', 'volume', 'radians-degrees'].includes(a.moduleId)) return 'Geometry';
      return 'Other';
    }))];

    weeks.push({
      weekNumber: weekNum,
      title: generateWeekTitle(weekNum, totalWeeks, isTestWeek, weekDomains),
      activities: weekActivities,
      totalMinutes: weekMinutesUsed,
      lessonCount: weekLessonCount,
      practiceCount: weekPracticeCount,
      strategyCount: weekStrategyCount,
      isTestWeek,
      focusSkills: weekSkills.slice(0, 3),
      focusDomains: weekDomains,
      goalDescription: generateWeekGoal(weekNum, totalWeeks, weekSkills, isTestWeek),
    });
  }

  return weeks;
};

// ═══════════════════════════════════════════════════════════════════════════
// MILESTONES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate milestones — checkpoints where the student should see measurable progress.
 */
const generateMilestones = (weeklyPlan, currentScore, targetScore, totalWeeks) => {
  const milestones = [];
  const scorePerWeek = totalWeeks > 0 ? (targetScore - currentScore) / totalWeeks : 0;

  // Milestone 1: After first week (quick wins)
  milestones.push({
    weekNumber: 1,
    title: 'Foundation Set',
    description: 'Review your test mistakes and start addressing your biggest gaps',
    targetScore: Math.round(currentScore + scorePerWeek * 0.5),
    type: 'checkpoint',
  });

  // Milestone 2: First practice test (usually week 3)
  const firstTestWeek = weeklyPlan.find(w => w.isTestWeek && w.weekNumber > 1);
  if (firstTestWeek) {
    milestones.push({
      weekNumber: firstTestWeek.weekNumber,
      title: 'First Progress Check',
      description: 'Take a practice test to measure improvement',
      targetScore: Math.round(currentScore + scorePerWeek * firstTestWeek.weekNumber * 0.7),
      type: 'test',
    });
  }

  // Milestone 3: Midpoint
  const midWeek = Math.ceil(totalWeeks / 2);
  milestones.push({
    weekNumber: midWeek,
    title: 'Halfway There',
    description: 'By now you should have addressed your biggest weaknesses',
    targetScore: Math.round(currentScore + (targetScore - currentScore) * 0.5),
    type: 'checkpoint',
  });

  // Milestone 4: Final push
  if (totalWeeks > 3) {
    milestones.push({
      weekNumber: totalWeeks - 1,
      title: 'Final Review',
      description: 'Polish your skills and focus on test strategy',
      targetScore: Math.round(targetScore - 10),
      type: 'checkpoint',
    });
  }

  // Milestone 5: Test day
  milestones.push({
    weekNumber: totalWeeks,
    title: 'Test Ready',
    description: 'You should be hitting your target score consistently',
    targetScore: targetScore,
    type: 'goal',
  });

  return milestones;
};

// ═══════════════════════════════════════════════════════════════════════════
// SUMMARY & MESSAGING
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate the executive summary of the study plan.
 */
const generatePlanSummary = (diagnostic, weeklyPlan, intensity, totalWeeks, daysUntilTest, currentScore, targetScore, skillGaps) => {
  const scoreGap = targetScore - currentScore;
  const totalWrong = diagnostic.errorPatterns.totalWrong;
  const dominantError = diagnostic.errorPatterns.dominantPattern;

  // Build the "headline diagnosis"
  let headline;
  if (scoreGap <= 0) {
    headline = `You're already at your target! Focus on maintaining your ${currentScore} and pushing higher.`;
  } else if (scoreGap <= 30) {
    headline = `You're ${scoreGap} points away from your target. A few targeted fixes will get you there.`;
  } else if (scoreGap <= 80) {
    headline = `You need ${scoreGap} more points. This is very achievable with focused practice.`;
  } else if (scoreGap <= 150) {
    headline = `${scoreGap} points to your target. This will take consistent work, but you can do it.`;
  } else {
    headline = `${scoreGap} points to go. This is ambitious — consider adjusting your target or test date.`;
  }

  // Build the "key insight" — the single most important thing the student should know
  let keyInsight;
  const carelessCount = diagnostic.errorPatterns.counts[ERROR_TYPES.CARELESS_ERROR] || 0;
  const trapCount = diagnostic.errorPatterns.counts[ERROR_TYPES.TRAP_SUSCEPTIBILITY] || 0;
  const quickWinCount = carelessCount + trapCount;
  const easyMissed = diagnostic.scoreProjection.easyWins.count;

  if (quickWinCount >= 4) {
    keyInsight = {
      title: 'Your biggest opportunity: quick wins',
      message: `${quickWinCount} of your ${totalWrong} wrong answers were careless mistakes or trap answers. Fixing just these would add ~${diagnostic.scoreProjection.errorTypeProjections.slice(0, 2).reduce((s, p) => s + p.projectedPointGain, 0)} points.`,
      type: 'quick_win',
    };
  } else if (easyMissed >= 3) {
    keyInsight = {
      title: 'Stop missing easy questions',
      message: `You missed ${easyMissed} easy questions. ${diagnostic.scoreProjection.easyWins.description}. This is the fastest path to improvement.`,
      type: 'easy_wins',
    };
  } else if (dominantError && dominantError.type === ERROR_TYPES.CONCEPTUAL_GAP) {
    const topGap = skillGaps[0];
    keyInsight = {
      title: `Critical gap: ${topGap?.skillName || 'foundational concepts'}`,
      message: `Most of your errors come from concept gaps. Your plan starts with the lessons you need to learn these concepts.`,
      type: 'conceptual',
    };
  } else if (dominantError && dominantError.type === ERROR_TYPES.TIME_PRESSURE) {
    keyInsight = {
      title: 'Time management is costing you points',
      message: `${dominantError.count} questions were affected by time pressure. Learning to pace yourself could add 30-50 points.`,
      type: 'time',
    };
  } else {
    keyInsight = {
      title: 'Targeted practice is your path forward',
      message: `Your errors are spread across different types. The study plan below attacks each area systematically.`,
      type: 'general',
    };
  }

  // Build "the numbers"
  const totalLessons = weeklyPlan.reduce((s, w) => s + w.lessonCount, 0);
  const totalPractice = weeklyPlan.reduce((s, w) => s + w.practiceCount, 0);
  const totalTests = weeklyPlan.filter(w => w.isTestWeek).length;
  const totalMinutes = weeklyPlan.reduce((s, w) => s + w.totalMinutes, 0);

  // Build a concise, evidence-linked diagnosis sentence deterministically.
  // This is the fallback when AI output is absent or fails.
  const diagnosis = buildDeterministicDiagnosis(diagnostic, skillGaps);

  return {
    headline,
    diagnosis,
    keyInsight,
    stats: {
      currentScore,
      targetScore,
      scoreGap,
      daysUntilTest,
      weeksInPlan: totalWeeks,
      totalLessons,
      totalPractice,
      totalTests,
      totalMinutes,
      totalHours: Math.round(totalMinutes / 60 * 10) / 10,
      minutesPerDay: INTENSITY_LEVELS[intensity].minutesPerDay,
      intensity: INTENSITY_LEVELS[intensity].label,
    },
    topFocusAreas: skillGaps.slice(0, 3).map(g => ({
      name: g.skillName,
      accuracy: g.testAccuracy,
      domain: g.domain,
    })),
    errorBreakdown: diagnostic.errorPatterns.summary,
  };
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Derive the highest-leverage next action from week-1 activities using
 * diagnosis signals: persistent weaknesses > dominant error type >
 * quick-win opportunity > first incomplete activity.
 */
const deriveSignalAwareNextAction = (weeklyPlan, diagnostic) => {
  const week1 = weeklyPlan[0];
  if (!week1?.activities?.length) return null;

  const incomplete = week1.activities.filter(a => !a.completed);
  if (incomplete.length === 0) return null;

  const errorCounts = diagnostic.errorPatterns?.counts || {};
  const persistentIds = new Set(
    (diagnostic.trendAnalysis?.persistentWeaknesses || []).map(pw => pw.skillId)
  );
  const carelessCount = errorCounts[ERROR_TYPES.CARELESS_ERROR] || 0;
  const trapCount = errorCounts[ERROR_TYPES.TRAP_SUSCEPTIBILITY] || 0;

  const scored = incomplete.map(a => {
    let score = a.priority || 0;
    // Boost persistent-weakness activities — they need reteaching, highest ROI
    if (a.skillId && persistentIds.has(a.skillId)) score += 50;
    // Boost review/strategy when careless+trap errors dominate
    if ((a.type === 'review' || a.type === 'strategy') && carelessCount + trapCount >= 4) score += 40;
    // Boost lessons for conceptual gaps
    if (a.type === 'lesson' && a.activityType === 'watchLesson') score += 10;
    return { activity: a, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0].activity;

  const reason = best.skillId && persistentIds.has(best.skillId)
    ? `Persistent weakness across multiple tests — highest leverage fix`
    : best.type === 'review'
      ? `${diagnostic.errorPatterns?.totalWrong || 0} wrong answers to learn from before new material`
      : best.type === 'strategy' && carelessCount + trapCount >= 4
        ? `${carelessCount + trapCount} avoidable errors — fastest path to points`
        : best.subtitle || 'Highest-priority activity in your plan';

  return {
    title: best.title,
    reason,
    type: best.type,
    duration: best.duration,
    moduleId: best.moduleId || null,
    lessonId: best.lessonId || null,
  };
};

/**
 * Build a concise, evidence-based diagnosis sentence from diagnostic signals.
 * Prioritises the dominant root cause of the score gap so users understand
 * *why* the plan is structured the way it is — even without AI.
 */
const buildDeterministicDiagnosis = (diagnostic, skillGaps) => {
  const parts = [];
  const errorCounts = diagnostic.errorPatterns?.counts || {};
  const careless = errorCounts[ERROR_TYPES.CARELESS_ERROR] || 0;
  const traps = errorCounts[ERROR_TYPES.TRAP_SUSCEPTIBILITY] || 0;
  const conceptual = errorCounts[ERROR_TYPES.CONCEPTUAL_GAP] || 0;
  const timePressure = errorCounts[ERROR_TYPES.TIME_PRESSURE] || 0;
  const fadeEffect = diagnostic.timeAnalysis?.fadeEffect || 0;
  const totalWrong = diagnostic.errorPatterns?.totalWrong || 0;
  const topGaps = skillGaps.slice(0, 3);

  if (careless + traps >= 4 && careless + traps >= totalWrong * 0.4) {
    parts.push(`${careless + traps} of ${totalWrong} errors are avoidable (${careless} careless, ${traps} trap)`);
  }
  if (conceptual >= 3) {
    const gapNames = topGaps.filter(g => g.primaryErrorType === ERROR_TYPES.CONCEPTUAL_GAP).map(g => g.skillName).slice(0, 2);
    parts.push(`Concept gaps in ${gapNames.length > 0 ? gapNames.join(' and ') : 'foundational skills'} need reteaching`);
  }
  if (timePressure >= 3 || fadeEffect > 15) {
    parts.push(`Time pressure caused ${timePressure} errors${fadeEffect > 15 ? ` with a ${fadeEffect}% accuracy drop in the second half` : ''}`);
  }

  if (parts.length === 0 && topGaps.length > 0) {
    parts.push(`Weakest areas: ${topGaps.map(g => `${g.skillName} (${g.testAccuracy}%)`).join(', ')}`);
  }

  return parts.join('. ') + (parts.length > 0 ? '.' : '');
};

const getDaysUntil = (dateStr) => {
  if (!dateStr) return null;
  const target = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
};

const calculateIntensity = (scoreGap, daysLeft) => {
  if (daysLeft !== null && daysLeft <= 7) return 'marathon';
  if (daysLeft !== null && daysLeft <= 14) return 'intensive';

  const pointsPerDay = daysLeft ? scoreGap / daysLeft : scoreGap / 56; // default 8 weeks

  if (pointsPerDay <= 0.5) return 'light';
  if (pointsPerDay <= 1.5) return 'moderate';
  if (pointsPerDay <= 3) return 'focused';
  if (pointsPerDay <= 5) return 'intensive';
  return 'marathon';
};

const calculateGapPriority = (skill, diagnostic) => {
  let priority = 0;

  // Base: inverse of accuracy (0% = 100 priority, 100% = 0)
  priority += (100 - (skill.testAccuracy || 0));

  // Bonus for domain weight
  const domainWeight = skillTaxonomy.domains[skill.domain]?.satWeight || 0.15;
  priority += domainWeight * 50;

  // Bonus for conceptual gaps (harder to fix = start earlier)
  if (skill.primaryErrorType === ERROR_TYPES.CONCEPTUAL_GAP) priority += 20;

  // Bonus for declining trend
  if (skill.trend === 'declining') priority += 15;

  return priority;
};

const estimateTimeToFix = (skill) => {
  const errorType = skill.primaryErrorType;
  if (errorType === ERROR_TYPES.CONCEPTUAL_GAP) return 45; // Lessons + practice
  if (errorType === ERROR_TYPES.PROCEDURAL_ERROR) return 30; // Practice focused
  if (errorType === ERROR_TYPES.TRAP_SUSCEPTIBILITY) return 20; // Strategy
  if (errorType === ERROR_TYPES.CARELESS_ERROR) return 10; // Awareness
  return 25; // Default
};

const getModuleName = (moduleId) => {
  const names = {
    'linear-equations': 'Linear Equations',
    'functions': 'Functions',
    'systems': 'System of Equations',
    'transformations': 'Transformations',
    'exponents': 'Exponents & Exponential Functions',
    'percents': 'Percents',
    'quadratics': 'Quadratic Functions',
    'triangles': 'Triangles',
    'circles': 'Circles',
    'statistics': 'Statistics',
    'radians-degrees': 'Radians & Degrees',
    'dimensional-analysis': 'Dimensional Analysis',
    'equivalent-expressions': 'Equivalent Expressions',
    'volume': 'Volume',
  };
  return names[moduleId] || moduleId;
};

const fuzzyMatchModule = (skillId) => {
  const skillStr = skillId.toLowerCase();
  if (skillStr.includes('linear') || skillStr.includes('slope')) return 'linear-equations';
  if (skillStr.includes('function')) return 'functions';
  if (skillStr.includes('system') || skillStr.includes('elimination') || skillStr.includes('substitution')) return 'systems';
  if (skillStr.includes('quadratic') || skillStr.includes('factor') || skillStr.includes('vertex') || skillStr.includes('discriminant')) return 'quadratics';
  if (skillStr.includes('triangle') || skillStr.includes('pythagorean') || skillStr.includes('trig') || skillStr.includes('sohcahtoa')) return 'triangles';
  if (skillStr.includes('circle') || skillStr.includes('arc') || skillStr.includes('sector')) return 'circles';
  if (skillStr.includes('exponent') || skillStr.includes('growth') || skillStr.includes('decay') || skillStr.includes('half-life')) return 'exponents';
  if (skillStr.includes('percent')) return 'percents';
  if (skillStr.includes('statistic') || skillStr.includes('mean') || skillStr.includes('median') || skillStr.includes('probability')) return 'statistics';
  if (skillStr.includes('volume') || skillStr.includes('cylinder') || skillStr.includes('sphere')) return 'volume';
  if (skillStr.includes('radian') || skillStr.includes('degree')) return 'radians-degrees';
  if (skillStr.includes('polynomial') || skillStr.includes('expression')) return 'equivalent-expressions';
  if (skillStr.includes('transform') || skillStr.includes('shift') || skillStr.includes('reflect')) return 'transformations';
  if (skillStr.includes('unit') || skillStr.includes('dimensional') || skillStr.includes('rate')) return 'dimensional-analysis';
  return null;
};

const generateWeekTitle = (weekNum, totalWeeks, isTestWeek, domains) => {
  if (weekNum === 1) return 'Quick Wins & Foundations';
  if (weekNum === totalWeeks) return 'Final Review & Test Ready';
  if (isTestWeek) return `Progress Check (Week ${weekNum})`;
  if (domains.length === 1) return `${domains[0]} Deep Dive`;
  if (domains.length > 0) return `${domains.slice(0, 2).join(' & ')} Focus`;
  return `Week ${weekNum}: Targeted Practice`;
};

const generateWeekGoal = (weekNum, totalWeeks, skills, isTestWeek) => {
  if (weekNum === 1) return 'Review your test mistakes and build momentum with quick wins';
  if (weekNum === totalWeeks) return 'Final polish — you should be hitting your target score';
  if (isTestWeek) return 'Take a practice test to measure your progress';
  if (skills.length > 0) return `Master ${skills.slice(0, 2).join(' and ')}`;
  return 'Continue building skills and practicing';
};

// ═══════════════════════════════════════════════════════════════════════════
// PLAN ADAPTATION (for subsequent tests)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Compare two diagnostic reports and identify what changed.
 * Used to adapt the study plan after a follow-up test.
 */
export const compareDiagnostics = (previousDiag, currentDiag) => {
  const scoreChange = currentDiag.score.scaled - previousDiag.score.scaled;

  // Skills that improved
  const improved = [];
  const worsened = [];
  const unchanged = [];

  currentDiag.skillAnalysis.allSkills.forEach(currentSkill => {
    const prevSkill = previousDiag.skillAnalysis.allSkills.find(s => s.skillId === currentSkill.skillId);
    if (prevSkill) {
      const change = currentSkill.testAccuracy - prevSkill.testAccuracy;
      if (change > 20) improved.push({ ...currentSkill, change });
      else if (change < -20) worsened.push({ ...currentSkill, change });
      else unchanged.push({ ...currentSkill, change });
    }
  });

  // Error pattern changes
  const prevErrorCounts = previousDiag.errorPatterns.counts;
  const currErrorCounts = currentDiag.errorPatterns.counts;
  const errorChanges = {};
  Object.values(ERROR_TYPES).forEach(type => {
    errorChanges[type] = (currErrorCounts[type] || 0) - (prevErrorCounts[type] || 0);
  });

  // Domain accuracy changes
  const domainChanges = {};
  currentDiag.domainAnalysis.forEach(currDomain => {
    const prevDomain = previousDiag.domainAnalysis.find(d => d.domain === currDomain.domain);
    domainChanges[currDomain.domain] = {
      name: currDomain.displayName,
      current: currDomain.accuracy,
      previous: prevDomain?.accuracy || 0,
      change: currDomain.accuracy - (prevDomain?.accuracy || 0),
    };
  });

  return {
    scoreChange,
    improved: improved.sort((a, b) => b.change - a.change),
    worsened: worsened.sort((a, b) => a.change - b.change),
    unchanged,
    errorChanges,
    domainChanges,
    overallProgress: scoreChange > 0 ? 'improving' : scoreChange < 0 ? 'declining' : 'stable',
    message: generateComparisonMessage(scoreChange, improved, worsened),
  };
};

const generateComparisonMessage = (scoreChange, improved, worsened) => {
  if (scoreChange > 30) {
    return `Incredible progress! +${scoreChange} points. ${improved.length > 0 ? `You really improved in ${improved[0].name}.` : 'Your hard work is paying off.'}`;
  }
  if (scoreChange > 10) {
    return `Nice improvement! +${scoreChange} points. ${improved.length > 0 ? `${improved[0].name} is clearly getting stronger.` : 'Keep it going.'}`;
  }
  if (scoreChange >= 0) {
    if (worsened.length > 0) {
      return `Score held steady, but ${worsened[0].name} slipped. Let's focus there next.`;
    }
    return 'Score is stable. Let\'s push harder on your remaining weak areas.';
  }
  if (worsened.length > 0) {
    return `Score dipped ${Math.abs(scoreChange)} points. ${worsened[0].name} needs more attention. Let\'s adjust the plan.`;
  }
  return `Score dropped ${Math.abs(scoreChange)} points. Don\'t worry — let\'s analyze what happened and refocus.`;
};

// ═══════════════════════════════════════════════════════════════════════════
// SPACED REPETITION SCHEDULER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generates a spaced repetition schedule based on the Ebbinghaus forgetting curve.
 * Skills are reviewed at increasing intervals: 1 day, 3 days, 7 days, 14 days.
 * This ensures students don't forget previously learned material.
 */
const generateSpacedRepetition = (skillGaps, totalWeeks) => {
  const schedule = [];

  // Only schedule repetition for skills with some mastery (30-80%)
  // Pure conceptual gaps need learning first, not repetition
  const reviewableSkills = skillGaps.filter(g =>
    g.testAccuracy >= 20 && g.testAccuracy < 85
  ).slice(0, 10); // Cap at 10 skills to keep manageable

  reviewableSkills.forEach((gap, idx) => {
    const urgency = gap.priority > 150 ? 'high' : gap.priority > 100 ? 'medium' : 'low';

    // Determine review intervals based on current mastery
    let intervals;
    if (gap.testAccuracy < 40) {
      // Weak: review more frequently
      intervals = [1, 3, 7, 14, 21];
    } else if (gap.testAccuracy < 60) {
      // Moderate: standard spacing
      intervals = [2, 5, 12, 21];
    } else {
      // Stronger: wider spacing
      intervals = [3, 10, 21];
    }

    // Cap intervals to available weeks
    const maxDays = totalWeeks * 7;
    const validIntervals = intervals.filter(d => d <= maxDays);

    schedule.push({
      skillId: gap.skillId,
      skillName: gap.skillName,
      currentMastery: gap.testAccuracy,
      urgency,
      reviewDays: validIntervals,
      reviewCount: validIntervals.length,
      nextReviewDay: validIntervals[0] || 1,
      estimatedRetention: Math.round(gap.testAccuracy + (100 - gap.testAccuracy) * 0.6),
    });
  });

  return {
    skills: schedule,
    totalReviews: schedule.reduce((s, sk) => s + sk.reviewCount, 0),
    message: schedule.length > 0
      ? `${schedule.length} skills scheduled for spaced review to lock in your gains`
      : 'No spaced repetition needed yet — focus on learning new material first',
  };
};

// ═══════════════════════════════════════════════════════════════════════════
// MICRO-GOALS — Daily bite-sized objectives for engagement
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generates daily micro-goals — quick 3-5 minute activities
 * that keep students engaged even on busy days.
 * Research shows small daily commitments build habits better than
 * big weekly sessions.
 */
const generateMicroGoals = (diagnostic, skillGaps, totalWeeks) => {
  const goals = [];
  const { errorPatterns, domainAnalysis, difficultyAnalysis } = diagnostic;

  // Pool of micro-goal templates
  const templates = [
    {
      condition: () => errorPatterns?.summary?.find(s => s.type === 'CARELESS_ERROR' && s.count >= 1),
      goals: [
        { title: 'Slow Down Challenge', description: 'Solve 3 easy questions but spend at least 90 seconds on each. Check every step.', duration: 5, category: 'precision', icon: null },
        { title: 'Double-Check Drill', description: 'After solving each problem, re-read the question before submitting. Do 5 problems.', duration: 5, category: 'precision', icon: null },
      ]
    },
    {
      condition: () => errorPatterns?.summary?.find(s => s.type === 'TRAP_SUSCEPTIBILITY' && s.count >= 1),
      goals: [
        { title: 'Trap Spotter', description: 'Look at 5 wrong answer choices and predict which trap each one sets. Check explanations.', duration: 5, category: 'strategy', icon: null },
        { title: 'Eliminate First', description: 'Before solving, cross out 2 obviously wrong answers first. Do 5 problems this way.', duration: 5, category: 'strategy', icon: null },
      ]
    },
    {
      condition: () => errorPatterns?.summary?.find(s => s.type === 'TIME_PRESSURE' && s.count >= 1),
      goals: [
        { title: 'Speed Round', description: 'Set a 5-minute timer and solve as many easy questions as you can. Beat your record!', duration: 5, category: 'speed', icon: null },
        { title: 'Quick Scan', description: 'Practice reading a word problem and identifying what formula/approach to use within 15 seconds. Do 10 problems.', duration: 5, category: 'speed', icon: null },
      ]
    },
    {
      condition: () => true, // Always available
      goals: [
        { title: 'Error Journal', description: 'Review 3 questions you got wrong. For each, write one sentence about what went wrong.', duration: 3, category: 'reflection', icon: null },
        { title: 'Mental Math Warm-Up', description: 'Do 10 arithmetic problems in your head: fractions, percents, squares. No calculator.', duration: 3, category: 'fundamentals', icon: null },
        { title: 'Formula Flash', description: 'Write down 5 key formulas from memory, then check if you got them right.', duration: 3, category: 'memory', icon: null },
      ]
    },
  ];

  // Collect applicable goals
  templates.forEach(t => {
    if (t.condition()) {
      goals.push(...t.goals);
    }
  });

  // Add skill-specific micro-goals
  const topGaps = skillGaps.slice(0, 3);
  topGaps.forEach(gap => {
    goals.push({
      title: `Quick Practice: ${gap.skillName}`,
      description: `Solve 3 questions on ${gap.skillName}. Focus on understanding, not speed.`,
      duration: 5,
      category: 'practice',
      icon: null,
      skillId: gap.skillId,
    });
  });

  // Distribute across days of the week
  const dailyGoals = [];
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const goalsPerDay = 1;

  for (let week = 0; week < Math.min(totalWeeks, 4); week++) {
    daysOfWeek.forEach((day, dayIdx) => {
      const goalIdx = (week * 7 + dayIdx) % goals.length;
      dailyGoals.push({
        ...goals[goalIdx],
        week: week + 1,
        day,
        dayOfWeek: dayIdx,
      });
    });
  }

  return {
    goals: dailyGoals,
    uniqueGoalCount: goals.length,
    totalDays: dailyGoals.length,
    message: 'Complete one micro-goal each day — even 3 minutes helps build your SAT muscle!',
  };
};

// ═══════════════════════════════════════════════════════════════════════════
// ADHERENCE PROJECTION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Projects outcomes based on different adherence levels.
 * Shows students: "If you do 100% of the plan → X score,
 * if you do 75% → Y score, if you do 50% → Z score"
 */
const calculateAdherenceProjection = (weeklyPlan, currentScore, targetScore, totalWeeks) => {
  const scoreGap = targetScore - currentScore;
  const totalActivities = weeklyPlan.reduce((s, w) =>
    s + w.activities.length, 0
  );

  // Model: score improvement is roughly proportional to activities completed
  // with diminishing returns at high adherence (logarithmic)
  const projectScore = (adherencePct) => {
    const fraction = adherencePct / 100;
    // Diminishing returns: first 50% of activities give 65% of gains
    const effectiveFraction = Math.pow(fraction, 0.85);
    const projectedGain = Math.round(scoreGap * effectiveFraction);
    return Math.min(800, currentScore + projectedGain);
  };

  return {
    scenarios: [
      {
        label: 'Full Commitment',
        adherence: 100,
        activitiesPerWeek: Math.round(totalActivities / Math.max(1, totalWeeks)),
        projectedScore: projectScore(100),
        emoji: null,
        description: 'Complete every activity in the plan',
      },
      {
        label: 'Strong Effort',
        adherence: 75,
        activitiesPerWeek: Math.round((totalActivities * 0.75) / Math.max(1, totalWeeks)),
        projectedScore: projectScore(75),
        emoji: null,
        description: 'Complete most activities, skip some practice sets',
      },
      {
        label: 'Moderate',
        adherence: 50,
        activitiesPerWeek: Math.round((totalActivities * 0.5) / Math.max(1, totalWeeks)),
        projectedScore: projectScore(50),
        emoji: null,
        description: 'Complete about half the activities',
      },
      {
        label: 'Light',
        adherence: 25,
        activitiesPerWeek: Math.round((totalActivities * 0.25) / Math.max(1, totalWeeks)),
        projectedScore: projectScore(25),
        emoji: null,
        description: 'Minimal effort — a few activities per week',
      },
    ],
    totalActivities,
    message: `Your plan has ${totalActivities} activities across ${totalWeeks} weeks. The more you complete, the higher your score.`,
  };
};
