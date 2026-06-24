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

import { hasQuestionsForSection, getSectionsWithQuestions } from '../data/questions';
// Servability gate for drill-shaped math activities — mirrors the router's
// cascade so an unmapped math gap whose skillId the bank can't serve emits
// no activity (the pre-feature status quo) instead of a dead Launch button.
import { getTargetedWeaknessSet as bankTargetedWeaknessSet, getQuestionsBySkillIds as bankQuestionsBySkillIds } from '../data/questions/bank';
import { DEFAULT_GOAL_SCORE } from './selectors/goalProgress';
import { getSkillById, skillTaxonomy } from '../data/skillTaxonomy';
import { ERROR_TYPES, ERROR_TYPE_LABELS, ERROR_TYPE_ICONS } from './diagnosticEngine';
import { generatePracticeAssignments, buildAdaptiveQueueSeed, buildStrengthFocusAssignments, serializeAdaptiveState, createAdaptiveSessionState } from './practiceAssignmentService';
// SKILL_ALIAS_MAP from aliases.js (pure constants, Stage 2a bundle split);
// resolveQuestionById (practiceAssignmentService) dispatches by id namespace
// to the right bank — wrong-answer reinsertion must resolve rw- ids too.
import { SKILL_ALIAS_MAP } from '../data/questions/bank/aliases';
import { resolveQuestionById } from './practiceAssignmentService';
import { getSkillSection } from '../data/questions/rwBank/taxonomy';
// Shared with the read-time legacy-plan upgrade (useProgress) so generated
// and upgraded activities have one shape. planFormatUpgrade is corpus-free.
import { buildSkillDrillActivity, PLAN_FORMAT_VERSION } from './planFormatUpgrade';
import { parseLocalDate } from '../utils/localDate';

// R&W domain weights for gap priority — the math side reads
// skillTaxonomy.domains[..].satWeight; the R&W taxonomy has no weight field.
// Approximate official R&W domain share of the section.
const RW_DOMAIN_SAT_WEIGHT = {
  'information-and-ideas': 0.26,
  'craft-and-structure': 0.28,
  'standard-english-conventions': 0.26,
  'expression-of-ideas': 0.20,
};

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

// The first plan from a single diagnostic stays short and in-depth: a focused
// 2-week cycle on the student's top weaknesses, capped here, that ends with a
// "Take Practice Test 2" checkpoint. The second test gathers the evidence to
// generate the full, longer, more personalized plan. One test is too little
// signal to confidently schedule 10 weeks — and a 10-week wall reads as noise.
const INITIAL_PLAN_WEEKS = 2;

// A focused full plan runs 4-5 weeks, not a 10-week wall. Short cycles that
// regenerate from each new test beat a long static schedule the student stops
// trusting — a 10-week plan reads as noise and most of it goes stale before
// they reach it. The first plan stays shorter still (INITIAL_PLAN_WEEKS).
const MAX_PLAN_WEEKS = 5;

// Approximate time for different activity types (in minutes)
const ACTIVITY_DURATIONS = {
  watchLesson: 8,         // Watch a video lesson
  readLesson: 5,          // Read a text lesson
  practiceSection: 15,    // Complete a 5-question practice section
  reviewMistakes: 10,     // Review past mistakes
  practiceTest: 70,       // Full practice test (35 min × 2 modules)
  strategyDrill: 10,      // Trap recognition or time management drill
};

// Module to skill mapping — skill IDs must match canonical IDs in the question bank
const MODULE_SKILL_MAP = {
  'linear-equations':      ['slope-from-points', 'slope-intercept-form', 'word-problem-to-equation', 'table-to-equation', 'function-evaluation', 'parallel-line-slope', 'writing-parallel-equation', 'perpendicular-negative-reciprocal', 'writing-perpendicular-equation'],
  'functions':             ['function-notation', 'domain-restrictions', 'function-composition', 'function-transformations', 'finding-function-from-conditions'],
  'systems':               ['system-solution-types', 'setting-up-systems', 'substitution-method', 'elimination-method', 'graphing-systems', 'infinite-solutions-condition'],
  'transformations':       ['function-transformations', 'vertical-shifts', 'horizontal-shifts', 'reflections'],
  'exponents':             ['exponent-laws', 'zero-negative-exponents', 'exponential-growth-decay', 'exponential-y-intercept', 'comparing-exponentials'],
  'percents':              ['percent-decimal-conversion', 'percent-of-value', 'percent-change', 'percent-word-problems', 'successive-percent-change', 'ratio-proportion', 'unit-rates'],
  'quadratics':            ['identify-quadratic', 'finding-roots-factoring', 'discriminant-analysis', 'vertex-formula', 'vertex-form', 'completing-square-circles', 'parabola-direction', 'roots-from-factors', 'converting-quadratic-forms'],
  'triangles':             ['pythagorean-theorem', 'soh-cah-toa', 'special-right-triangles', 'similar-triangles', 'triangle-angle-sum', 'triangle-area', 'triangle-inequality', 'triangle-types'],
  'circles':               ['circle-equation', 'circle-area', 'circle-parts', 'sector-area', 'degrees-to-radians', 'radians-to-degrees', 'arc-length', 'circumference', 'tangent-lines'],
  'statistics':            ['calculate-mean', 'weighted-mean', 'find-median', 'find-mode', 'range-calculation', 'standard-deviation-concept', 'margin-of-error', 'two-way-table', 'probability-basics', 'conditional-probability'],
  'radians-degrees':       ['degrees-to-radians', 'radians-to-degrees', 'radian-measure-understanding'],
  'dimensional-analysis':  ['unit-conversion', 'squared-cubed-units', 'rate-conversion', 'ratio-proportion', 'unit-rates'],
  'equivalent-expressions':['distributive-property', 'combining-like-terms', 'simplifying-rational-expressions', 'difference-of-squares', 'perfect-square-trinomial'],
  'volume':                ['volume-prism', 'volume-sphere', 'volume-pyramid-cone', 'volume-scaling'],
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
 * Compute a difficulty mix tailored to the student's actual accuracy profile.
 */
function computeDifficultyMix(difficultyAnalysis) {
  if (!difficultyAnalysis?.levels) {
    return { easy: 0.30, medium: 0.45, hard: 0.25 };
  }
  const { easy, medium, hard } = difficultyAnalysis.levels;
  const easyAcc = easy?.accuracy ?? 70;
  const medAcc = medium?.accuracy ?? 50;
  const hardAcc = hard?.accuracy ?? 30;
  const cliff = difficultyAnalysis.difficultyCliff;

  if (cliff === 'easy' || easyAcc < 60) {
    return { easy: 0.55, medium: 0.35, hard: 0.10 };
  }
  if (cliff === 'medium' || (easyAcc >= 75 && medAcc < 55)) {
    return { easy: 0.20, medium: 0.60, hard: 0.20 };
  }
  if (easyAcc >= 80 && medAcc >= 65) {
    return { easy: 0.15, medium: 0.45, hard: 0.40 };
  }
  if (easyAcc >= 70 && medAcc >= 50) {
    return { easy: 0.25, medium: 0.50, hard: 0.25 };
  }
  return { easy: 0.30, medium: 0.45, hard: 0.25 };
}

/**
 * Extract question IDs the student answered incorrectly in the previous plan's
 * adaptive session for cross-session wrong-answer reinsertion.
 */
function extractWrongAnswerIds(previousPlan, currentExcludeIds) {
  if (!previousPlan?.adaptivePracticeState?.answered) return [];
  const excludeSet = new Set(currentExcludeIds);
  return previousPlan.adaptivePracticeState.answered
    .filter(a => !a.correct && !a.isRetry)
    .map(a => a.id)
    .filter(id => id && !excludeSet.has(id))
    .slice(-10);
}

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
export const generateStudyPlan = (diagnostic, userProfile = {}, completedLessons = {}, practiceProgress = {}, previousPlan = null, longitudinal = null, answeredQuestionIds = []) => {
  const { targetScore = DEFAULT_GOAL_SCORE, testDate } = userProfile;
  const currentScore = diagnostic.score.scaled;

  // ═══ Scale-guarded gap basis ═══
  // currentScore is composite (400-1600) for multi-section tests but legacy
  // targets (≤800) are section-scale math goals — raw subtraction produced
  // "You're past your target" for a 920-composite student chasing 750 Math.
  // Compare like with like: same scale directly; a section-scale target vs a
  // composite current falls back to the diagnosis's own math section score
  // (legacy section targets are math goals by provenance). When no honest
  // comparison exists, scoreGap is null and copy/intensity use defaults.
  const currentIsComposite = diagnostic.score?.isMultiSection === true || currentScore > 800;
  const targetIsComposite = targetScore > 800;
  let gapBasis = null; // { current, target, label } on ONE scale
  if (currentIsComposite === targetIsComposite) {
    gapBasis = { current: currentScore, target: targetScore, label: '' };
  } else if (!targetIsComposite && typeof diagnostic.score?.sections?.math === 'number') {
    gapBasis = { current: diagnostic.score.sections.math, target: targetScore, label: ' in Math' };
  }
  const scoreGap = gapBasis ? Math.max(0, gapBasis.target - gapBasis.current) : null;

  // ═══ Calculate time constraints ═══
  const daysUntilTest = getDaysUntil(testDate);
  const weeksUntilTest = daysUntilTest !== null ? Math.ceil(daysUntilTest / 7) : MAX_PLAN_WEEKS;
  let effectiveWeeks = Math.min(Math.max(1, weeksUntilTest), MAX_PLAN_WEEKS); // Cap at 5 weeks

  // ═══ First-plan gating: short focused cycle → retest → deeper plan ═══
  // Count the distinct tests that have produced data, the triggering one
  // included. Counting (rather than checking `previousPlan`) is timing-
  // independent: it holds whether or not the just-finished test has hydrated
  // into practiceTestResults yet, AND across the deterministic + hybrid
  // generation phases (the hybrid phase re-reads the freshly-persisted first
  // plan as `previousPlan`, so a `!previousPlan` check would misfire there).
  const testsWithData = new Set(
    [
      ...((longitudinal?.scoreTrajectory || []).map((t) => t.testId)),
      diagnostic.testId,
    ].filter(Boolean),
  ).size;
  const isFirstPlan = testsWithData <= 1;
  if (isFirstPlan) {
    effectiveWeeks = Math.min(effectiveWeeks, INITIAL_PLAN_WEEKS);
  }

  // ═══ Determine study intensity ═══
  // Null gap (cross-scale, no per-section data) → a moderate default climb.
  const intensity = calculateIntensity(scoreGap ?? 100, daysUntilTest);
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
    previousPlan,
    longitudinal,
    isFirstPlan
  );

  // ═══ Generate milestones ═══
  // Milestones interpolate current→target, so they only make sense on the
  // gap basis's single scale; without one, anchor on the headline score
  // with a modest default climb.
  const milestoneBasis = gapBasis || { current: currentScore, target: currentScore + 80, label: '' };
  const milestones = generateMilestones(weeklyPlan, milestoneBasis.current, milestoneBasis.target, effectiveWeeks);

  // ═══ Generate the executive summary ═══
  const summary = generatePlanSummary(
    diagnostic, weeklyPlan, intensity, effectiveWeeks,
    daysUntilTest, currentScore, targetScore, skillGaps, gapBasis
  );

  // Generate spaced repetition schedule for mastered-but-weak skills
  const spacedRepetitionSchedule = generateSpacedRepetition(skillGaps, effectiveWeeks);

  // Generate daily micro-goals for engagement
  const microGoals = generateMicroGoals(diagnostic, skillGaps, effectiveWeeks);

  // Calculate plan adherence metrics (for returning students).
  // Runs on the gap basis's single scale with a scale-correct ceiling — the
  // old hardcoded 800 cap clamped every composite projection.
  const adherenceProjection = calculateAdherenceProjection(
    weeklyPlan, milestoneBasis.current, milestoneBasis.target, effectiveWeeks,
    milestoneBasis.target > 800 || milestoneBasis.current > 800 ? 1600 : 800
  );

  const nextAction = deriveSignalAwareNextAction(weeklyPlan, diagnostic);

  const generatedAt = new Date().toISOString();

  // ═══ Assign practice questions from the bank ═══
  const assignmentSeed = `${diagnostic.testId || 'diag'}-${generatedAt}`;
  const dynamicMix = computeDifficultyMix(diagnostic.difficultyAnalysis);
  const { targetedQuestionIds, practiceAssignments, summary: assignmentSummary } =
    generatePracticeAssignments({
      diagnostic,
      weekCount: effectiveWeeks,
      excludeIds: answeredQuestionIds,
      seed: assignmentSeed,
      questionsPerWeek: 10,
      difficultyMix: dynamicMix,
    });

  // ═══ Fixed domain assignments for Strengths & Focus Areas ═══
  const domainAssignments = buildStrengthFocusAssignments({
    diagnostic,
    seed: assignmentSeed,
    countPerDomain: 10,
    excludeIds: [...targetedQuestionIds, ...answeredQuestionIds],
  });

  // ═══ Adaptive practice queue seed + initial state (Acely-style) ═══
  const adaptivePractice = buildAdaptiveQueueSeed({
    diagnostic,
    seed: assignmentSeed,
    poolSize: 80,
    excludeIds: answeredQuestionIds,
  });
  const adaptivePracticeState = serializeAdaptiveState(
    createAdaptiveSessionState(adaptivePractice),
  );

  // ═══ Cross-session wrong-answer reinsertion into week 1 ═══
  const wrongQuestionIds = extractWrongAnswerIds(previousPlan, answeredQuestionIds);
  if (wrongQuestionIds.length > 0 && weeklyPlan.length > 0) {
    const wrongQuestions = wrongQuestionIds
      .map(id => resolveQuestionById(id)) // section-aware: rw- ids hit the R&W bank
      .filter(Boolean)
      .slice(0, 5);
    if (wrongQuestions.length > 0) {
      const w1 = weeklyPlan[0];
      const existingIds = w1.targetedQuestionIds || [];
      w1.targetedQuestionIds = [
        ...wrongQuestions.map(q => q.id),
        ...existingIds.filter(id => !wrongQuestions.find(q => q.id === id)),
      ];
      w1.wrongAnswerReinsertion = wrongQuestions.length;
    }
  }

  return {
    // Core plan data
    weeks: weeklyPlan,
    milestones,
    summary,
    nextAction,

    // Adaptive practice (primary — Acely-style)
    adaptivePractice,
    adaptivePracticeState,

    // Fixed domain assignments for Strengths & Focus Areas
    domainAssignments,

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
    scoreGap, // null when current/target scales can't be honestly compared
    planFormatVersion: PLAN_FORMAT_VERSION,
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
      // Test-subject axis ('math' | 'rw') + pattern evidence — both needed
      // downstream so R&W gaps can become drill-shaped activities instead
      // of dying in the math module map.
      section: skill.section || 'math',
      missedPatterns: skill.missedPatterns || [],
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
        section: getSkillSection(action.skillId), // actions carry no tag; derive from the R&W taxonomy
        missedPatterns: [],
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

  // Step 1: direct lookup in SKILL_TO_MODULE_MAP (canonical ID hits)
  let directModules = SKILL_TO_MODULE_MAP[skillId] || [];

  // Step 2: if not found directly, expand via SKILL_ALIAS_MAP to canonical IDs
  // This handles practice-test skill IDs like "Quadratic Equations" or "solving-equations"
  if (directModules.length === 0 && SKILL_ALIAS_MAP[skillId]) {
    const canonicalIds = SKILL_ALIAS_MAP[skillId];
    const expanded = new Set();
    canonicalIds.forEach(cid => {
      (SKILL_TO_MODULE_MAP[cid] || []).forEach(m => expanded.add(m));
    });
    directModules = [...expanded];
  }

  // Step 3: taxonomy module associations
  const taxonomyModules = skill?.modules || [];

  const allModuleIds = [...new Set([...directModules, ...taxonomyModules])];

  allModuleIds.forEach(moduleId => {
    const relevantSections = findRelevantSections(moduleId, skill);

    results.push({
      moduleId,
      moduleName: getModuleName(moduleId),
      sections: relevantSections,
    });
  });

  // Step 4: last resort — fuzzy match on the skill ID string
  if (results.length === 0) {
    const fuzzyModule = fuzzyMatchModule(skillId);
    if (fuzzyModule) {
      results.push({
        moduleId: fuzzyModule,
        moduleName: getModuleName(fuzzyModule),
        sections: [],
      });
    }
  }

  return results;
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
    // R&W gaps and unmapped math gaps become drill-shaped activities —
    // they used to be silently skipped here (gap.modules is empty), which
    // left every "targeted practice" week with zero tasks for students
    // whose weaknesses missed the hand-authored math module map.
    if (gap.section === 'rw' || !gap.modules || gap.modules.length === 0) {
      if (gap.section !== 'rw') {
        // Every R&W canonical skill has a drill pool; unmapped MATH skillIds
        // may serve zero bank items (a dozen real test skillIds do). Mirror
        // the router's cascade — no pool means no activity, not a dead button.
        const servable =
          bankTargetedWeaknessSet({
            weakSkills: [{ skillId: gap.skillId, domain: gap.domain, missedPatterns: gap.missedPatterns }],
            count: 1,
          }).length > 0
          || bankQuestionsBySkillIds([gap.skillId], { limit: 1 }).length > 0;
        if (!servable) return;
      }
      activities.push(buildSkillDrillActivity(gap));
      return;
    }
    // ACTIVITY TYPE 1: Watch/re-watch lessons
    //
    // ── REMOVED 2026-05-09 ───────────────────────────────────────────
    // Lesson-type activities used to flow into the weekly schedule and
    // navigated to LearnWorkspace (the legacy lesson reader). The
    // product no longer surfaces that flow as a primary engagement —
    // students engage via focus-area drills (AssignedPracticeShell)
    // and full mock tests. The block that emitted `type: 'lesson'`
    // activities is intentionally gone; downstream filters in
    // StudyPlanDashboard.jsx + render-time guards drop any lesson
    // activities still present in legacy plan artifacts in Firestore.
    //
    // To re-enable: re-introduce a `mod.lessons.forEach(...)` push
    // inside `gap.modules.forEach(mod => { ... })` below. See git blame
    // on this comment for the full history.
    // ─────────────────────────────────────────────────────────────────

    gap.modules.forEach(mod => {
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

  // Deduplicate: same lesson/section/skill-drill shouldn't appear twice.
  // Drill-shaped activities have no module coordinates — keying them on
  // moduleId/sectionName would collapse them ALL to one entry.
  const seen = new Set();
  const deduped = activities.filter(a => {
    const key = a.type === 'lesson'
      ? `lesson-${a.moduleId}-${a.lessonId}`
      : a.moduleId
        ? `practice-${a.moduleId}-${a.sectionName}`
        : `drill-${a.skillId}`;
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
  const hasRWGaps = (diagnostic.skillAnalysis?.weakSkills || []).some(s => s.section === 'rw');

  // Trap avoidance drills — tips match the sections the student actually
  // struggled in (the all-math tip list read oddly under an R&W-heavy plan).
  if ((errorCounts[ERROR_TYPES.TRAP_SUSCEPTIBILITY] || 0) >= 2) {
    activities.push({
      type: 'strategy',
      activityType: 'strategyDrill',
      title: 'Trap Answer Recognition Drill',
      subtitle: `You picked ${errorCounts[ERROR_TYPES.TRAP_SUSCEPTIBILITY]} designed-to-tempt answers last test`,
      duration: ACTIVITY_DURATIONS.strategyDrill,
      priority: 90,
      icon: null,
      tips: [
        'Before choosing, predict what trap answers might look like',
        'In percent problems: "increased by X%" ≠ "X% of"',
        'In multi-step problems: check that you answered the FINAL question, not an intermediate step',
        ...(hasRWGaps ? [
          'In reading questions: the tempting wrong answer is usually TRUE — it just doesn\'t answer THIS question',
          'Distrust extreme wording — "always", "never", "proves" usually overstate what the passage supports',
        ] : []),
        'If your answer came too easily on a hard question, it\'s probably a trap',
      ],
    });
  }

  // Time management drills. The gate is an OR: the fade branch can fire
  // with timeRelatedErrors at 0-2, so the subtitle must cite whichever
  // evidence actually triggered it ("clock cost you 0 questions" was a
  // live contradiction caught in review).
  const timePressureCount = errorCounts[ERROR_TYPES.TIME_PRESSURE] || 0;
  const fadeEffect = diagnostic.timeAnalysis.fadeEffect || 0;
  if (timePressureCount >= 3 || fadeEffect > 15) {
    activities.push({
      type: 'strategy',
      activityType: 'strategyDrill',
      title: 'Pacing Reset',
      subtitle: timePressureCount >= 3
        ? `The clock cost you ${timePressureCount} question${timePressureCount === 1 ? '' : 's'} last test`
        : `Your accuracy dropped ${fadeEffect}% in the second half — pacing faded`,
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
      title: 'Stop the Avoidable Misses',
      subtitle: `${errorCounts[ERROR_TYPES.CARELESS_ERROR]} questions you knew how to solve went wrong last test`,
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
const distributeAcrossWeeks = (activities, strategyActivities, totalWeeks, minutesPerWeek, diagnostic, previousPlan, longitudinal = null, isFirstPlan = false) => {
  const weeks = [];

  // ═══ ADAPTIVE PRIORITY ADJUSTMENT ═══
  // If we have a previous plan, adjust priorities based on what improved/worsened
  const adaptedActivities = activities.map(act => {
    let priorityBoost = 0;

    // Check longitudinal persistent weaknesses — 2x priority for skills failing across multiple tests
    if (longitudinal?.persistentWeaknesses?.length > 0 && act.skillId) {
      const persistent = longitudinal.persistentWeaknesses.find(pw => pw.skillId === act.skillId);
      if (persistent) {
        priorityBoost += 20; // Significant boost for persistent weaknesses
      }
    }

    // Check longitudinal skill trends — reduce priority for improving skills
    if (longitudinal?.skillHistory && act.skillId) {
      const history = longitudinal.skillHistory[act.skillId];
      if (history && history.attempts >= 3) {
        const accuracy = history.correct / history.attempts;
        if (accuracy >= 0.7) {
          priorityBoost -= 10; // Reduce priority for skills student is mastering
        }
      }
    }

    // If previous plan exists, skip activities the student already completed
    if (previousPlan?.weeks && act.title) {
      const wasCompleted = previousPlan.weeks.some(w =>
        w.activities?.some(a => a.completed && a.title === act.title)
      );
      if (wasCompleted) {
        priorityBoost -= 15; // Deprioritize already-completed activities
      }
    }

    return priorityBoost !== 0
      ? { ...act, priority: (act.priority || 0) + priorityBoost }
      : act;
  });

  // Build a pool of all activities sorted by priority
  const allActivities = [
    ...strategyActivities,
    ...adaptedActivities,
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
      // On the FIRST plan, the closing test is the unlock checkpoint: completing
      // it gives the engine a second data point and regenerates the full, deeper
      // plan. Frame it that way rather than as a generic "final" test.
      const isUnlockCheckpoint = isFirstPlan && isLastWeek;
      weekActivities.push({
        type: 'test',
        activityType: 'practiceTest',
        title: isUnlockCheckpoint
          ? 'Take Practice Test 2'
          : isLastWeek ? 'Final Practice Test' : 'Progress Check: Practice Test',
        subtitle: isUnlockCheckpoint
          ? 'Unlock your full, personalized plan — this test shows exactly how far you have come and where to go deeper'
          : isLastWeek
            ? 'Full-length timed test to measure your final readiness'
            : 'Take a practice test to measure improvement and adjust your plan',
        duration: ACTIVITY_DURATIONS.practiceTest,
        priority: 100,
        icon: null,
        day: 'Saturday',
        weekPhase: 'end',
        tips: isUnlockCheckpoint
          ? [
              'Take it under real conditions — timed, no breaks, no phone',
              'Your results build a longer, more personalized plan tuned to where you are now',
            ]
          : [
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
    const weekDomains = [...new Set(weekActivities.map(a => {
      // Drill-shaped activities carry section instead of module coordinates.
      if (a.section === 'rw') return 'Reading & Writing';
      if (!a.moduleId) return null;
      // Infer domain from module
      if (['linear-equations', 'functions', 'systems'].includes(a.moduleId)) return 'Algebra';
      if (['percents', 'statistics', 'dimensional-analysis'].includes(a.moduleId)) return 'Problem Solving';
      if (['quadratics', 'exponents', 'equivalent-expressions', 'transformations'].includes(a.moduleId)) return 'Advanced Math';
      if (['triangles', 'circles', 'volume', 'radians-degrees'].includes(a.moduleId)) return 'Geometry';
      return 'Other';
    }).filter(Boolean))];

    weeks.push({
      weekNumber: weekNum,
      title: generateWeekTitle(weekNum, totalWeeks, isTestWeek, weekDomains, weekSkills),
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
const generatePlanSummary = (diagnostic, weeklyPlan, intensity, totalWeeks, daysUntilTest, currentScore, targetScore, skillGaps, gapBasis = null) => {
  // gapBasis is the scale-guarded {current, target, label} pair computed in
  // generateStudyPlan; null means current and target sit on incomparable
  // scales with no honest conversion — never fabricate a gap from raw
  // subtraction (composite 920 minus a math-section 750 is not "past your
  // target").
  const scoreGap = gapBasis ? gapBasis.target - gapBasis.current : null;
  const gapLabel = gapBasis?.label || '';
  const totalWrong = diagnostic.errorPatterns.totalWrong;
  const dominantError = diagnostic.errorPatterns.dominantPattern;

  // Build the "headline diagnosis" — coach voice: short, numeric, names the
  // student's actual top gap where one exists. This is the deterministic
  // fallback; the AI headline (when present) overrides it in mergeHybridPlan.
  // When the gap basis is the MATH section (' in Math'), the named gap must
  // be a math gap — "270 points to go in Math, starting with Words in
  // Context" would be incoherent.
  const labelMatchedGaps = gapLabel === ' in Math'
    ? skillGaps.filter(g => g.section !== 'rw')
    : skillGaps;
  const topGapName = labelMatchedGaps[0]?.skillName || null;
  let headline;
  if (scoreGap === null) {
    headline = topGapName
      ? `The plan front-loads your costliest gaps, starting with ${topGapName}.`
      : 'The plan front-loads your costliest gaps.';
  } else if (scoreGap <= 0) {
    headline = `You're past your target${gapLabel}. Hold ${gapBasis.current} and stretch higher.`;
  } else if (scoreGap <= 30) {
    headline = topGapName
      ? `${scoreGap} points to go${gapLabel} — most of it sitting in ${topGapName}.`
      : `${scoreGap} points to go${gapLabel}. A handful of fixes covers it.`;
  } else if (scoreGap <= 80) {
    headline = topGapName
      ? `${scoreGap} points to go${gapLabel}, starting with ${topGapName}.`
      : `${scoreGap} points to go${gapLabel}, concentrated in a few fixable skills.`;
  } else if (scoreGap <= 150) {
    headline = `${scoreGap} points to go${gapLabel}. The plan front-loads your costliest gaps.`;
  } else {
    headline = `${scoreGap} points${gapLabel} is a long climb — the plan starts where the points are cheapest. More runway helps if your test date can move.`;
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
      message: topGap && typeof topGap.testAccuracy === 'number'
        ? `Most of your misses trace to concepts that never landed — ${topGap.skillName} is at ${topGap.testAccuracy}%. The plan rebuilds it from the definition before any timed work.`
        : topGap
          ? `Most of your misses trace to concepts that never landed — starting with ${topGap.skillName}. The plan rebuilds it from the definition before any timed work.`
          : `Most of your misses trace to concepts that never landed. The plan rebuilds them from the definition before any timed work.`,
      type: 'conceptual',
    };
  } else if (dominantError && dominantError.type === ERROR_TYPES.TIME_PRESSURE) {
    keyInsight = {
      title: 'The clock is costing you points',
      message: `${dominantError.count} of your misses came under time pressure, not from the math. Pacing work comes first — it's worth 30-50 points on its own.`,
      type: 'time',
    };
  } else {
    keyInsight = {
      title: 'No single leak — several small ones',
      message: `Your ${totalWrong} misses spread across error types instead of one big cause. The plan works each leak in priority order, costliest first.`,
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
      // Current/Target render side-by-side (DiagnosticReport StatBoxes) —
      // they must share one scale. Use the gap basis pair; when no honest
      // comparison exists, null the target so the consumer renders a dash
      // instead of a cross-scale contradiction.
      currentScore: gapBasis ? gapBasis.current : currentScore,
      targetScore: gapBasis ? gapBasis.target : null,
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
    ? `${best.skillName || 'This skill'} has stayed weak across multiple tests — fixing it pays the most`
    : best.type === 'review'
      ? `${diagnostic.errorPatterns?.totalWrong || 0} wrong answers to learn from before new material`
      : best.type === 'strategy' && carelessCount + trapCount >= 4
        ? `${carelessCount + trapCount} of your misses were avoidable — the fastest points on the board`
        : best.subtitle || 'Highest-priority activity in your plan';

  return {
    title: best.title,
    reason,
    type: best.type,
    duration: best.duration,
    moduleId: best.moduleId || null,
    lessonId: best.lessonId || null,
    // Drill-shaped activities (format v2) route by skill instead of module —
    // consumers need these to launch the Do-This-First CTA.
    skillId: best.skillId || null,
    skillName: best.skillName || null,
    section: best.section || null,
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
  // parseLocalDate: date-only strings must parse as LOCAL midnight, or the
  // UTC shift makes every plan one day shorter in negative-offset timezones.
  const target = parseLocalDate(dateStr);
  if (!target) return null;
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

  // Bonus for domain weight — math domains from the taxonomy, R&W domains
  // from the local share map (the generic 0.15 fallback systematically
  // ranked every R&W gap below weighted math domains).
  const domainWeight = skillTaxonomy.domains[skill.domain]?.satWeight
    ?? RW_DOMAIN_SAT_WEIGHT[skill.domain]
    ?? 0.15;
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
  const skillStr = skillId.toLowerCase().replace(/-/g, ' ');
  if (skillStr.includes('linear') || skillStr.includes('slope') || skillStr.includes('solving') || skillStr.includes('algebra') || skillStr.includes('equation') || skillStr.includes('word problem')) return 'linear-equations';
  if (skillStr.includes('function') && !skillStr.includes('quadratic')) return 'functions';
  if (skillStr.includes('system') || skillStr.includes('elimination') || skillStr.includes('substitution')) return 'systems';
  if (skillStr.includes('quadratic') || skillStr.includes('factor') || skillStr.includes('vertex') || skillStr.includes('discriminant') || skillStr.includes('parabola') || skillStr.includes('root') || skillStr.includes('zero')) return 'quadratics';
  if (skillStr.includes('triangle') || skillStr.includes('pythagorean') || skillStr.includes('trig') || skillStr.includes('sohcahtoa') || skillStr.includes('soh cah toa') || skillStr.includes('sin') || skillStr.includes('cos') || skillStr.includes('tan')) return 'triangles';
  if (skillStr.includes('circle') || skillStr.includes('arc') || skillStr.includes('sector')) return 'circles';
  if (skillStr.includes('exponent') || skillStr.includes('exponential') || skillStr.includes('growth') || skillStr.includes('decay') || skillStr.includes('half life') || skillStr.includes('radical')) return 'exponents';
  if (skillStr.includes('percent') || skillStr.includes('ratio') || skillStr.includes('proportion') || skillStr.includes('rate')) return 'percents';
  if (skillStr.includes('statistic') || skillStr.includes('mean') || skillStr.includes('median') || skillStr.includes('mode') || skillStr.includes('standard deviation') || skillStr.includes('probability') || skillStr.includes('data')) return 'statistics';
  if (skillStr.includes('volume') || skillStr.includes('cylinder') || skillStr.includes('sphere') || skillStr.includes('prism') || skillStr.includes('cone')) return 'volume';
  if (skillStr.includes('radian') || skillStr.includes('degree')) return 'radians-degrees';
  if (skillStr.includes('polynomial') || skillStr.includes('expression') || skillStr.includes('simplif') || skillStr.includes('combining') || skillStr.includes('distribut')) return 'equivalent-expressions';
  if (skillStr.includes('transform') || skillStr.includes('shift') || skillStr.includes('reflect')) return 'transformations';
  if (skillStr.includes('unit') || skillStr.includes('dimensional') || skillStr.includes('conversion')) return 'dimensional-analysis';
  if (skillStr.includes('geometry') || skillStr.includes('area') || skillStr.includes('angle') || skillStr.includes('polygon')) return 'triangles';
  return null;
};

// Week titles carry the student's actual content, not phase labels.
// "Quick Wins & Foundations" reads identical in every student's plan;
// "Slope-intercept + the avoidable misses" reads like it was written
// after watching their test — because it was.
const generateWeekTitle = (weekNum, totalWeeks, isTestWeek, domains, skills = []) => {
  if (weekNum === 1) {
    return skills.length > 0
      ? `${skills[0]} + the avoidable misses`
      : 'The avoidable misses first';
  }
  if (weekNum === totalWeeks) return 'Lock it in before test day';
  if (isTestWeek) return 'Practice test — measure what moved';
  if (domains.length === 1) return `${domains[0]} rebuild`;
  if (domains.length > 0) return `${domains.slice(0, 2).join(' & ')}`;
  if (skills.length > 0) return `${skills.slice(0, 2).join(' & ')}`;
  return `Week ${weekNum}: targeted practice`;
};

const generateWeekGoal = (weekNum, totalWeeks, skills, isTestWeek) => {
  if (weekNum === 1) {
    return skills.length > 0
      ? `Clear your missed questions, then rebuild ${skills[0]}`
      : 'Clear your missed questions — the avoidable ones first';
  }
  if (weekNum === totalWeeks) return 'Full-speed practice — accuracy under real timing';
  if (isTestWeek) return 'Take a timed practice test to measure what moved';
  if (skills.length > 0) return `Get ${skills.slice(0, 2).join(' and ')} above 70%`;
  return 'Keep the reps going on your weakest areas';
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
    return `+${scoreChange} points. ${improved.length > 0 ? `${improved[0].name} drove most of it.` : 'The work is showing up in the score.'}`;
  }
  if (scoreChange > 10) {
    return `+${scoreChange} points. ${improved.length > 0 ? `${improved[0].name} is clearly getting stronger.` : 'Steady gains — the plan holds course.'}`;
  }
  if (scoreChange >= 0) {
    if (worsened.length > 0) {
      return `Score held steady, but ${worsened[0].name} slipped. Let's focus there next.`;
    }
    return 'Score is stable. Let\'s push harder on your remaining weak areas.';
  }
  if (worsened.length > 0) {
    return `Score dipped ${Math.abs(scoreChange)} points — ${worsened[0].name} drove the slide. The plan adds reps there.`;
  }
  return `Score dropped ${Math.abs(scoreChange)} points. One test is noise, not a verdict — the plan refocuses on what this one revealed.`;
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
    {
      // R&W warm-ups join the rotation when the diagnosis has R&W gaps.
      condition: () => skillGaps.some(g => g.section === 'rw'),
      goals: [
        { title: 'Words in Context Warm-Up', description: 'Read 3 sentences with a blank or hard word and predict the meaning from context before checking.', duration: 3, category: 'fundamentals', icon: null },
        { title: 'Transition Check', description: 'Find 3 transition words in anything you read today and name the relationship each one signals.', duration: 3, category: 'fundamentals', icon: null },
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
const calculateAdherenceProjection = (weeklyPlan, currentScore, targetScore, totalWeeks, scoreCeiling = 800) => {
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
    // Ceiling matches the basis scale (1600 composite / 800 section) —
    // the old hardcoded 800 clamped every composite projection.
    return Math.min(scoreCeiling, currentScore + projectedGain);
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

// ═══════════════════════════════════════════════════════════════════════════
// READ ACCESSORS — pure helpers consumed by dashboard cards
// ═══════════════════════════════════════════════════════════════════════════

// getTodaySlice moved to services/selectors/todaySlice.js (Stage 2c of the
// bundle-split plan) so dashboard components can read "what's on today"
// without dragging this module's bank/routing imports into their chunk.
// Re-exported here for back-compat; new consumers import the selector.
export { getTodaySlice } from './selectors/todaySlice';
