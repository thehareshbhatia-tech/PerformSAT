/**
 * ═══════════════════════════════════════════════════════════════════════════
 * DIAGNOSTIC ENGINE — The Brain of PerformSAT
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * This is the core analytical engine that transforms raw practice test results
 * into deep, actionable diagnostic intelligence.
 *
 * What it does:
 * 1. CLASSIFIES every wrong answer by WHY it was wrong (not just that it was)
 * 2. IDENTIFIES error patterns across the full test
 * 3. MAPS weaknesses to specific skills and SAT domains
 * 4. PROJECTS score improvements if specific skills are fixed
 * 5. COMPARES across multiple test attempts to track real improvement
 * 6. PRIORITIZES the highest-ROI fixes (what gives the most points fastest)
 *
 * The philosophy: A student who gets 15 questions wrong needs to know
 * "you fell for 4 trap answers, had 3 conceptual gaps in algebra, made
 * 2 careless errors, and ran out of time on 6 questions" — NOT just
 * "you scored 640."
 */

import { getSkillById, skillTaxonomy, getSkillsForDomain } from '../data/skillTaxonomy';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════════════════

// SAT domain weights (% of the test each domain represents)
const DOMAIN_WEIGHTS = {
  'algebra': 0.35,
  'problem-solving': 0.25,
  'advanced-math': 0.25,
  'geometry': 0.15,
};

// Approximate number of questions per domain on a 44-question test
const DOMAIN_QUESTION_COUNTS = {
  'algebra': 15,
  'problem-solving': 11,
  'advanced-math': 11,
  'geometry': 7,
};

// SAT scoring table (raw → scaled)
const SCORING_TABLE = {
  44: 800, 43: 790, 42: 780, 41: 770, 40: 760,
  39: 750, 38: 740, 37: 730, 36: 720, 35: 710,
  34: 700, 33: 690, 32: 680, 31: 670, 30: 660,
  29: 650, 28: 640, 27: 630, 26: 620, 25: 610,
  24: 600, 23: 590, 22: 580, 21: 570, 20: 560,
  19: 550, 18: 540, 17: 530, 16: 520, 15: 510,
  14: 500, 13: 490, 12: 480, 11: 470, 10: 460,
  9: 450, 8: 440, 7: 430, 6: 420, 5: 410,
  4: 400, 3: 390, 2: 380, 1: 370, 0: 200,
};

// Time thresholds (seconds) for classifying time-related issues
const TIME_THRESHOLDS = {
  rushed: 30,            // Under 30s = probably rushing
  fast: 60,              // Under 60s = fast for medium/hard
  normal: 120,           // Under 2 min = normal pace
  slow: 180,             // Over 3 min = slow
  verySlowEasy: 90,      // Over 90s on an easy question
  verySlowMedium: 150,   // Over 2.5 min on medium
  verySlowHard: 210,     // Over 3.5 min on hard
};

// Error type definitions
const ERROR_TYPES = {
  CONCEPTUAL_GAP: 'conceptual_gap',
  PROCEDURAL_ERROR: 'procedural_error',
  TRAP_SUSCEPTIBILITY: 'trap_susceptibility',
  TIME_PRESSURE: 'time_pressure',
  CARELESS_ERROR: 'careless_error',
  UNANSWERED: 'unanswered',
};

// Human-readable labels for error types
const ERROR_TYPE_LABELS = {
  [ERROR_TYPES.CONCEPTUAL_GAP]: 'Conceptual Gap',
  [ERROR_TYPES.PROCEDURAL_ERROR]: 'Procedural Error',
  [ERROR_TYPES.TRAP_SUSCEPTIBILITY]: 'Trap Answer',
  [ERROR_TYPES.TIME_PRESSURE]: 'Time Pressure',
  [ERROR_TYPES.CARELESS_ERROR]: 'Careless Mistake',
  [ERROR_TYPES.UNANSWERED]: 'Unanswered',
};

const ERROR_TYPE_DESCRIPTIONS = {
  [ERROR_TYPES.CONCEPTUAL_GAP]: "You didn't understand the underlying concept needed to solve this",
  [ERROR_TYPES.PROCEDURAL_ERROR]: 'You understood the concept but made a mistake in the steps',
  [ERROR_TYPES.TRAP_SUSCEPTIBILITY]: 'You chose an answer designed by College Board to catch a specific mistake',
  [ERROR_TYPES.TIME_PRESSURE]: 'You rushed or ran out of time on this question',
  [ERROR_TYPES.CARELESS_ERROR]: "You know this material — this was a slip-up, not a knowledge gap",
  [ERROR_TYPES.UNANSWERED]: "You didn't answer this question",
};

const ERROR_TYPE_ICONS = {
  [ERROR_TYPES.CONCEPTUAL_GAP]: '🧠',
  [ERROR_TYPES.PROCEDURAL_ERROR]: '📝',
  [ERROR_TYPES.TRAP_SUSCEPTIBILITY]: '🪤',
  [ERROR_TYPES.TIME_PRESSURE]: '⏱️',
  [ERROR_TYPES.CARELESS_ERROR]: '⚡',
  [ERROR_TYPES.UNANSWERED]: '⬜',
};

const ERROR_TYPE_COLORS = {
  [ERROR_TYPES.CONCEPTUAL_GAP]: '#dc2626',      // Red — most serious
  [ERROR_TYPES.PROCEDURAL_ERROR]: '#f59e0b',     // Amber
  [ERROR_TYPES.TRAP_SUSCEPTIBILITY]: '#7c3aed',  // Purple
  [ERROR_TYPES.TIME_PRESSURE]: '#2563eb',        // Blue
  [ERROR_TYPES.CARELESS_ERROR]: '#ea580c',        // Orange
  [ERROR_TYPES.UNANSWERED]: '#6b7280',           // Gray
};

// ═══════════════════════════════════════════════════════════════════════════
// ERROR CLASSIFICATION ENGINE
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Classifies WHY a student got a question wrong.
 * This is the most important function in the entire system.
 *
 * Inputs:
 * - question: the question object (skills, difficulty, choices, correctAnswer)
 * - userAnswer: what the student answered
 * - telemetry: time spent, visits, answer changes, calculator usage
 * - skillProgress: the student's historical mastery of the skills tested
 *
 * Returns: { errorType, confidence, reasoning }
 */
const classifyError = (question, userAnswer, telemetry, skillProgress) => {
  const { difficulty, skills = [], correctAnswer, choices, type } = question;
  const { timeSpent = 0, visits = 0, answerChanges = 0 } = telemetry || {};

  // ── UNANSWERED ──
  if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
    // Was it at the end of the test (time ran out)?
    if (timeSpent < 5) {
      return {
        errorType: ERROR_TYPES.TIME_PRESSURE,
        confidence: 0.95,
        reasoning: 'No answer submitted — likely ran out of time',
      };
    }
    return {
      errorType: ERROR_TYPES.UNANSWERED,
      confidence: 0.90,
      reasoning: 'Question was left blank',
    };
  }

  // ── Check if student has strong mastery of the tested skills ──
  const avgSkillMastery = calculateAvgSkillMastery(skills, skillProgress);
  const hasStrongMastery = avgSkillMastery >= 75;
  const hasWeakMastery = avgSkillMastery < 40;
  const hasSomeMastery = avgSkillMastery >= 40 && avgSkillMastery < 75;

  // ── TIME PRESSURE DETECTION ──
  // Fast + wrong on medium/hard = rushing
  if (timeSpent < TIME_THRESHOLDS.rushed && difficulty !== 'easy') {
    return {
      errorType: ERROR_TYPES.TIME_PRESSURE,
      confidence: 0.85,
      reasoning: `Spent only ${Math.round(timeSpent)}s on a ${difficulty} question — likely rushing`,
    };
  }

  // Very fast on easy + wrong + strong mastery = rushing
  if (timeSpent < 15 && difficulty === 'easy' && hasStrongMastery) {
    return {
      errorType: ERROR_TYPES.CARELESS_ERROR,
      confidence: 0.80,
      reasoning: `Rushed through an easy question (${Math.round(timeSpent)}s) despite strong skill mastery`,
    };
  }

  // ── TRAP SUSCEPTIBILITY DETECTION ──
  // Check if the student's wrong answer matches a common trap pattern
  const trapAnalysis = detectTrapAnswer(question, userAnswer);
  if (trapAnalysis.isTrap) {
    return {
      errorType: ERROR_TYPES.TRAP_SUSCEPTIBILITY,
      confidence: trapAnalysis.confidence,
      reasoning: trapAnalysis.reasoning,
    };
  }

  // ── CARELESS ERROR DETECTION ──
  // Strong mastery + reasonable time + changed answer = careless
  if (hasStrongMastery && answerChanges > 0 && timeSpent > TIME_THRESHOLDS.rushed) {
    return {
      errorType: ERROR_TYPES.CARELESS_ERROR,
      confidence: 0.75,
      reasoning: 'Strong skill mastery but changed answer — second-guessed correct instinct',
    };
  }

  // Strong mastery + wrong on easy question
  if (hasStrongMastery && difficulty === 'easy') {
    return {
      errorType: ERROR_TYPES.CARELESS_ERROR,
      confidence: 0.80,
      reasoning: 'Strong mastery of this skill — likely a careless mistake on an easy question',
    };
  }

  // Some mastery + wrong on easy = careless
  if (hasSomeMastery && difficulty === 'easy' && timeSpent > TIME_THRESHOLDS.rushed) {
    return {
      errorType: ERROR_TYPES.CARELESS_ERROR,
      confidence: 0.65,
      reasoning: 'Moderate mastery and adequate time — likely a careless slip',
    };
  }

  // ── PROCEDURAL ERROR DETECTION ──
  // Some mastery + wrong on medium = procedural
  if (hasSomeMastery && difficulty === 'medium') {
    return {
      errorType: ERROR_TYPES.PROCEDURAL_ERROR,
      confidence: 0.70,
      reasoning: 'Understands the concept (moderate mastery) but made a mistake in execution',
    };
  }

  // Strong mastery + wrong on hard = procedural (knew concept but hard execution)
  if (hasStrongMastery && difficulty === 'hard') {
    return {
      errorType: ERROR_TYPES.PROCEDURAL_ERROR,
      confidence: 0.75,
      reasoning: 'Strong fundamentals but struggled with complex application',
    };
  }

  // Spent a long time but still wrong = understood what to do, struggled with execution
  if (hasSomeMastery && timeSpent > TIME_THRESHOLDS.normal) {
    return {
      errorType: ERROR_TYPES.PROCEDURAL_ERROR,
      confidence: 0.65,
      reasoning: 'Spent significant time working through it — knows the approach but made a procedural error',
    };
  }

  // ── CONCEPTUAL GAP (default for weak mastery) ──
  if (hasWeakMastery) {
    return {
      errorType: ERROR_TYPES.CONCEPTUAL_GAP,
      confidence: 0.85,
      reasoning: 'Low mastery of the tested skill(s) — needs to learn the underlying concept',
    };
  }

  // ── FALLBACK CLASSIFICATION ──
  // No strong signal — use difficulty as tiebreaker
  if (difficulty === 'hard') {
    return {
      errorType: ERROR_TYPES.CONCEPTUAL_GAP,
      confidence: 0.55,
      reasoning: 'Missed a hard question — may need to strengthen foundational understanding',
    };
  }

  return {
    errorType: ERROR_TYPES.PROCEDURAL_ERROR,
    confidence: 0.50,
    reasoning: 'Incorrect answer with no strong signal — likely a procedural or partial understanding gap',
  };
};

/**
 * Detects if a wrong answer matches a known College Board trap pattern.
 * Analyzes the relationship between the wrong answer chosen and the correct answer.
 */
const detectTrapAnswer = (question, userAnswer) => {
  const { choices, correctAnswer, type, skills = [], explanation = '' } = question;

  // Can't detect traps on fill-in questions without more metadata
  if (type === 'fill-in') {
    return { isTrap: false };
  }

  if (!choices || !Array.isArray(choices)) {
    return { isTrap: false };
  }

  // Find the index of the user's wrong answer
  const wrongIdx = choices.findIndex(c => c.id === userAnswer);
  const correctIdx = choices.findIndex(c => c.id === correctAnswer);
  if (wrongIdx === -1 || correctIdx === -1) return { isTrap: false };

  const wrongText = choices[wrongIdx]?.text || '';
  const correctText = choices[correctIdx]?.text || '';

  // Parse numeric values for comparison
  const wrongNum = extractNumber(wrongText);
  const correctNum = extractNumber(correctText);

  // ── Partial Calculation Trap ──
  // Wrong answer is a factor/component of the correct answer
  if (wrongNum !== null && correctNum !== null && correctNum !== 0) {
    const ratio = wrongNum / correctNum;
    if (ratio > 0 && ratio < 1 && (Math.abs(ratio - 0.5) < 0.05 || Math.abs(ratio - 0.333) < 0.05)) {
      return {
        isTrap: true,
        trapType: 'partial_calculation',
        confidence: 0.75,
        reasoning: 'Chose a partial result — stopped one step before the final answer',
      };
    }
  }

  // ── Sign Error Trap ──
  // Wrong answer is the negative of the correct answer
  if (wrongNum !== null && correctNum !== null && Math.abs(wrongNum + correctNum) < 0.01) {
    return {
      isTrap: true,
      trapType: 'sign_error',
      confidence: 0.80,
      reasoning: 'Chose the opposite sign — likely dropped or misapplied a negative',
    };
  }

  // ── Reversed Operation Trap ──
  // Wrong answer and correct answer are related by multiplication vs division
  if (wrongNum !== null && correctNum !== null && correctNum !== 0 && wrongNum !== 0) {
    if (Math.abs(wrongNum * correctNum - Math.round(wrongNum * correctNum)) < 0.01) {
      const product = wrongNum * correctNum;
      if (Math.abs(wrongNum - (product / correctNum)) < 0.01 &&
          Math.abs(correctNum - (product / wrongNum)) < 0.01 &&
          product < 10000) {
        // Check if one answer is the result of multiplying instead of dividing (or vice versa)
        // e.g., correct = 50/0.2 = 250, wrong = 50 * 0.2 = 10
      }
    }
  }

  // ── Percent Confusion Trap ──
  // Common in percent problems: "increased by 150%" vs "150% of"
  if (skills.some(s => s.includes('percent'))) {
    if (wrongNum !== null && correctNum !== null) {
      // Check for "of" vs "increase by" confusion
      if (Math.abs(wrongNum - correctNum * 0.6) < 1 || Math.abs(wrongNum - correctNum * 1.5) < 1) {
        return {
          isTrap: true,
          trapType: 'percent_confusion',
          confidence: 0.70,
          reasoning: 'Likely confused "increased by X%" with "X% of" — a classic SAT trap',
        };
      }
    }
  }

  // ── Check explanation for trap clues ──
  const explanationLower = explanation.toLowerCase();
  if (explanationLower.includes('trap') || explanationLower.includes('common mistake') ||
      explanationLower.includes('common error')) {
    // The explanation itself mentions it's a trap
    if (explanationLower.includes(userAnswer.toLowerCase())) {
      return {
        isTrap: true,
        trapType: 'explanation_identified',
        confidence: 0.70,
        reasoning: 'This wrong answer is specifically called out as a common mistake in the explanation',
      };
    }
  }

  // ── Adjacent Answer Trap (for ordered numeric choices) ──
  // If all choices are numeric and ordered, choosing one off from correct
  // suggests computational error in the right direction
  if (wrongNum !== null && correctNum !== null) {
    const allNums = choices.map(c => extractNumber(c.text)).filter(n => n !== null);
    if (allNums.length === choices.length) {
      allNums.sort((a, b) => a - b);
      const correctRank = allNums.indexOf(correctNum);
      const wrongRank = allNums.indexOf(wrongNum);
      if (Math.abs(correctRank - wrongRank) === 1) {
        return {
          isTrap: true,
          trapType: 'off_by_one_step',
          confidence: 0.60,
          reasoning: 'Chose the answer one computation step away from correct — a common trap placement',
        };
      }
    }
  }

  return { isTrap: false };
};

/**
 * Extract a numeric value from a choice text string.
 * Handles LaTeX formatting, fractions, etc.
 */
const extractNumber = (text) => {
  if (!text) return null;

  // Remove LaTeX delimiters and common formatting
  let cleaned = text
    .replace(/\$+/g, '')
    .replace(/\\,/g, '')
    .replace(/,/g, '')
    .replace(/\\text\{[^}]*\}/g, '')
    .replace(/\\?%/g, '')
    .trim();

  // Handle simple fractions like "8\frac{1}{3}" = 8.333
  const mixedFracMatch = cleaned.match(/(-?\d+)\\frac\{(\d+)\}\{(\d+)\}/);
  if (mixedFracMatch) {
    const whole = parseFloat(mixedFracMatch[1]);
    const num = parseFloat(mixedFracMatch[2]);
    const den = parseFloat(mixedFracMatch[3]);
    return whole + (whole >= 0 ? num / den : -num / den);
  }

  // Handle simple fractions like "\frac{3}{5}"
  const fracMatch = cleaned.match(/\\frac\{(-?\d+)\}\{(\d+)\}/);
  if (fracMatch) {
    return parseFloat(fracMatch[1]) / parseFloat(fracMatch[2]);
  }

  // Try direct number parse
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
};

/**
 * Calculate average mastery across a set of skills.
 */
const calculateAvgSkillMastery = (skillIds, skillProgress) => {
  if (!skillIds || skillIds.length === 0 || !skillProgress) return 50; // Default: assume moderate

  let totalMastery = 0;
  let count = 0;

  for (const skillId of skillIds) {
    const data = skillProgress[skillId];
    if (data && data.attempts >= 1) {
      totalMastery += data.mastery;
      count++;
    }
  }

  return count > 0 ? totalMastery / count : 50; // Default to 50 if no history
};

// ═══════════════════════════════════════════════════════════════════════════
// FULL TEST DIAGNOSTIC ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Runs the complete diagnostic analysis on a practice test.
 * This is the main entry point.
 *
 * @param {Object} test - The practice test object
 * @param {Object} answers - Student's answers { "modIdx-qIdx": answer }
 * @param {Object} diagnosticData - Telemetry from PracticeTest (timeSpent, visits, etc.)
 * @param {Object} skillProgress - Student's skill mastery data
 * @param {Object} userProfile - { targetScore, currentScore, testDate }
 * @param {Object} previousTests - Previous test results for trend analysis
 * @returns {Object} Complete diagnostic report
 */
export const runDiagnostic = (test, answers, diagnosticData, skillProgress = {}, userProfile = {}, previousTests = {}) => {
  const questionDetails = diagnosticData?.questionDetails || {};

  // ═══ PHASE 1: Analyze every question ═══
  const questionAnalysis = [];
  let totalCorrect = 0;
  let totalQuestions = 0;

  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const userAnswer = answers[key];
      const telemetry = questionDetails[key] || {};

      totalQuestions++;

      // Check correctness
      let isCorrect = false;
      if (q.type === 'fill-in') {
        isCorrect = userAnswer === q.correctAnswer || parseFloat(userAnswer) === q.correctAnswer;
      } else {
        isCorrect = userAnswer === q.correctAnswer;
      }

      if (isCorrect) {
        totalCorrect++;
        questionAnalysis.push({
          key,
          moduleIndex: modIdx,
          questionIndex: qIdx,
          isCorrect: true,
          difficulty: q.difficulty,
          skills: q.skills || [],
          domain: inferDomain(q.skills),
          timeSpent: telemetry.timeSpent || 0,
        });
      } else {
        // Classify the error
        const errorClassification = classifyError(q, userAnswer, telemetry, skillProgress);

        questionAnalysis.push({
          key,
          moduleIndex: modIdx,
          questionIndex: qIdx,
          isCorrect: false,
          difficulty: q.difficulty,
          skills: q.skills || [],
          domain: inferDomain(q.skills),
          timeSpent: telemetry.timeSpent || 0,
          userAnswer,
          correctAnswer: q.correctAnswer,
          questionText: q.question,
          ...errorClassification,
        });
      }
    });
  });

  // ═══ PHASE 2: Calculate scores ═══
  const scaledRaw = Math.round((totalCorrect / totalQuestions) * 44);
  const scaledScore = SCORING_TABLE[Math.min(44, Math.max(0, scaledRaw))] || 200;
  const targetScore = userProfile.targetScore || 700;
  const scoreGap = Math.max(0, targetScore - scaledScore);

  // ═══ PHASE 3: Error pattern analysis ═══
  const wrongQuestions = questionAnalysis.filter(q => !q.isCorrect);
  const errorPatterns = analyzeErrorPatterns(wrongQuestions);

  // ═══ PHASE 4: Domain analysis ═══
  const domainAnalysis = analyzeDomains(questionAnalysis);

  // ═══ PHASE 5: Skill-level analysis ═══
  const skillAnalysis = analyzeSkills(questionAnalysis, skillProgress);

  // ═══ PHASE 6: Score projection ═══
  const scoreProjection = projectScoreImprovements(
    questionAnalysis, totalCorrect, totalQuestions, targetScore
  );

  // ═══ PHASE 7: Difficulty analysis ═══
  const difficultyAnalysis = analyzeDifficulty(questionAnalysis);

  // ═══ PHASE 8: Time management analysis ═══
  const timeAnalysis = analyzeTimeManagement(questionAnalysis, diagnosticData);

  // ═══ PHASE 9: Cross-test trend analysis ═══
  const trendAnalysis = analyzeTrends(test.id, scaledScore, previousTests, skillProgress);

  // ═══ PHASE 10: Priority ranking ═══
  const prioritizedActions = prioritizeActions(
    errorPatterns, domainAnalysis, skillAnalysis, scoreProjection, scoreGap
  );

  return {
    // Core scores
    score: {
      raw: totalCorrect,
      total: totalQuestions,
      scaled: scaledScore,
      target: targetScore,
      gap: scoreGap,
      percentCorrect: Math.round((totalCorrect / totalQuestions) * 100),
    },

    // Detailed question-by-question analysis
    questionAnalysis,

    // Error classification breakdown
    errorPatterns,

    // Domain-level performance
    domainAnalysis,

    // Skill-level analysis
    skillAnalysis,

    // "If you fix X, you gain Y points"
    scoreProjection,

    // Easy/medium/hard performance
    difficultyAnalysis,

    // Time management insights
    timeAnalysis,

    // Improvement trends across tests
    trendAnalysis,

    // Ranked list of what to fix first
    prioritizedActions,

    // Metadata
    testId: test.id,
    testTitle: test.title,
    analyzedAt: new Date().toISOString(),
  };
};

// ═══════════════════════════════════════════════════════════════════════════
// ANALYSIS FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Infer the SAT domain from skill IDs.
 */
const inferDomain = (skills = []) => {
  for (const skillId of skills) {
    const skill = getSkillById(skillId);
    if (skill?.domain) return skill.domain;
  }

  // Fallback: infer from skill name patterns
  const skillStr = skills.join(' ').toLowerCase();
  if (skillStr.match(/linear|slope|system|function|absolute|inequalit/)) return 'algebra';
  if (skillStr.match(/percent|statistic|mean|median|probability|ratio|table|margin/)) return 'problem-solving';
  if (skillStr.match(/quadratic|exponential|polynomial|radical|rational|factor|vertex/)) return 'advanced-math';
  if (skillStr.match(/triangle|circle|angle|volume|area|geometry|trig|radian|polygon/)) return 'geometry';

  return 'unknown';
};

/**
 * Analyze error patterns across all wrong questions.
 */
const analyzeErrorPatterns = (wrongQuestions) => {
  const counts = {};
  Object.values(ERROR_TYPES).forEach(type => { counts[type] = 0; });

  const byType = {};
  Object.values(ERROR_TYPES).forEach(type => { byType[type] = []; });

  wrongQuestions.forEach(q => {
    const type = q.errorType || ERROR_TYPES.CONCEPTUAL_GAP;
    counts[type] = (counts[type] || 0) + 1;
    if (!byType[type]) byType[type] = [];
    byType[type].push(q);
  });

  const total = wrongQuestions.length;

  // Build sorted summary
  const summary = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .map(([type, count]) => ({
      type,
      label: ERROR_TYPE_LABELS[type],
      description: ERROR_TYPE_DESCRIPTIONS[type],
      icon: ERROR_TYPE_ICONS[type],
      color: ERROR_TYPE_COLORS[type],
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
      questions: byType[type],
    }))
    .sort((a, b) => b.count - a.count);

  // Identify dominant error pattern
  const dominantPattern = summary.length > 0 ? summary[0] : null;

  return {
    totalWrong: total,
    summary,
    dominantPattern,
    counts,
  };
};

/**
 * Analyze performance by SAT domain.
 */
const analyzeDomains = (questionAnalysis) => {
  const domains = {};

  questionAnalysis.forEach(q => {
    const domain = q.domain || 'unknown';
    if (!domains[domain]) {
      domains[domain] = {
        domain,
        total: 0,
        correct: 0,
        wrong: 0,
        byDifficulty: { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } },
        errorTypes: {},
        skills: new Set(),
        weakSkills: [],
      };
    }

    domains[domain].total++;
    if (q.isCorrect) {
      domains[domain].correct++;
    } else {
      domains[domain].wrong++;
      const errorType = q.errorType || ERROR_TYPES.CONCEPTUAL_GAP;
      domains[domain].errorTypes[errorType] = (domains[domain].errorTypes[errorType] || 0) + 1;
    }

    // Track by difficulty
    const diff = q.difficulty || 'medium';
    if (domains[domain].byDifficulty[diff]) {
      domains[domain].byDifficulty[diff].total++;
      if (q.isCorrect) domains[domain].byDifficulty[diff].correct++;
    }

    q.skills.forEach(s => domains[domain].skills.add(s));
  });

  // Calculate percentages and rank
  const domainSummary = Object.values(domains)
    .filter(d => d.domain !== 'unknown')
    .map(d => ({
      ...d,
      skills: [...d.skills],
      accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
      satWeight: DOMAIN_WEIGHTS[d.domain] || 0,
      displayName: skillTaxonomy.domains[d.domain]?.name || d.domain,
      color: skillTaxonomy.domains[d.domain]?.color || '#888',
      pointsAvailable: d.wrong * 10, // Rough: each question ≈ 10 scaled points
    }))
    .sort((a, b) => a.accuracy - b.accuracy); // Weakest first

  return domainSummary;
};

/**
 * Analyze performance at the individual skill level.
 */
const analyzeSkills = (questionAnalysis, skillProgress = {}) => {
  const skillMap = {};

  questionAnalysis.forEach(q => {
    q.skills.forEach(skillId => {
      if (!skillMap[skillId]) {
        const skill = getSkillById(skillId);
        const progress = skillProgress[skillId];
        skillMap[skillId] = {
          skillId,
          name: skill?.name || skillId,
          domain: skill?.domain || inferDomain([skillId]),
          satConcept: skill?.satConcept || '',
          modules: skill?.modules || [],
          sections: skill?.sections || [],
          correct: 0,
          total: 0,
          errorTypes: [],
          // Historical data
          historicalMastery: progress?.mastery || null,
          historicalAttempts: progress?.attempts || 0,
          trend: progress ? getSkillTrendFromHistory(progress) : 'unknown',
        };
      }
      skillMap[skillId].total++;
      if (q.isCorrect) {
        skillMap[skillId].correct++;
      } else {
        skillMap[skillId].errorTypes.push(q.errorType);
      }
    });
  });

  // Calculate accuracies and sort by weakness
  const skills = Object.values(skillMap).map(s => ({
    ...s,
    testAccuracy: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
    isWeak: s.total > 0 && (s.correct / s.total) < 0.5,
    isStrong: s.total > 0 && (s.correct / s.total) >= 0.8,
    primaryErrorType: getMostCommonErrorType(s.errorTypes),
  }));

  const weakSkills = skills.filter(s => s.isWeak).sort((a, b) => a.testAccuracy - b.testAccuracy);
  const strongSkills = skills.filter(s => s.isStrong).sort((a, b) => b.testAccuracy - a.testAccuracy);
  const allSkills = skills.sort((a, b) => a.testAccuracy - b.testAccuracy);

  return { weakSkills, strongSkills, allSkills, skillMap };
};

/**
 * Project how much score improvement is possible by fixing specific areas.
 */
const projectScoreImprovements = (questionAnalysis, currentCorrect, totalQuestions, targetScore) => {
  const currentScaled = SCORING_TABLE[Math.round((currentCorrect / totalQuestions) * 44)] || 200;
  const wrongQuestions = questionAnalysis.filter(q => !q.isCorrect);

  // Group wrong questions by domain
  const domainGains = {};
  wrongQuestions.forEach(q => {
    const domain = q.domain || 'unknown';
    if (!domainGains[domain]) domainGains[domain] = [];
    domainGains[domain].push(q);
  });

  // Calculate projected gains if each domain is mastered
  const projections = Object.entries(domainGains)
    .filter(([domain]) => domain !== 'unknown')
    .map(([domain, questions]) => {
      // How many additional correct if this domain is mastered?
      const additionalCorrect = questions.length;
      const newTotal = currentCorrect + additionalCorrect;
      const newScaled = SCORING_TABLE[Math.round((newTotal / totalQuestions) * 44)] || 200;
      const pointGain = newScaled - currentScaled;

      return {
        domain,
        domainName: skillTaxonomy.domains[domain]?.name || domain,
        color: skillTaxonomy.domains[domain]?.color || '#888',
        questionsToFix: additionalCorrect,
        currentAccuracy: Math.round(((questions.length - additionalCorrect) / questions.length) * 100),
        projectedPointGain: pointGain,
        projectedScore: newScaled,
      };
    })
    .sort((a, b) => b.projectedPointGain - a.projectedPointGain);

  // Calculate gains by error type (fix all traps, fix all careless, etc.)
  const errorTypeGains = {};
  wrongQuestions.forEach(q => {
    const type = q.errorType || ERROR_TYPES.CONCEPTUAL_GAP;
    if (!errorTypeGains[type]) errorTypeGains[type] = 0;
    errorTypeGains[type]++;
  });

  const errorTypeProjections = Object.entries(errorTypeGains)
    .map(([type, count]) => {
      const newTotal = currentCorrect + count;
      const newScaled = SCORING_TABLE[Math.round((newTotal / totalQuestions) * 44)] || 200;
      return {
        errorType: type,
        label: ERROR_TYPE_LABELS[type],
        icon: ERROR_TYPE_ICONS[type],
        color: ERROR_TYPE_COLORS[type],
        questionsToFix: count,
        projectedPointGain: newScaled - currentScaled,
        projectedScore: newScaled,
      };
    })
    .sort((a, b) => b.projectedPointGain - a.projectedPointGain);

  // Calculate "quick wins" — easy/medium questions missed
  const quickWins = wrongQuestions.filter(q => q.difficulty === 'easy' || q.difficulty === 'medium');
  const quickWinGain = (() => {
    const newTotal = currentCorrect + quickWins.length;
    const newScaled = SCORING_TABLE[Math.round((newTotal / totalQuestions) * 44)] || 200;
    return newScaled - currentScaled;
  })();

  // Calculate "just the easy ones" — absolute minimum effort path
  const easyWins = wrongQuestions.filter(q => q.difficulty === 'easy');
  const easyWinGain = (() => {
    const newTotal = currentCorrect + easyWins.length;
    const newScaled = SCORING_TABLE[Math.round((newTotal / totalQuestions) * 44)] || 200;
    return newScaled - currentScaled;
  })();

  // Path to target: how many more correct answers needed?
  let questionsNeeded = 0;
  for (let i = currentCorrect + 1; i <= totalQuestions; i++) {
    const score = SCORING_TABLE[Math.round((i / totalQuestions) * 44)] || 200;
    if (score >= targetScore) {
      questionsNeeded = i - currentCorrect;
      break;
    }
  }
  if (questionsNeeded === 0 && currentScaled < targetScore) {
    questionsNeeded = totalQuestions - currentCorrect; // Need perfect score or can't reach
  }

  return {
    currentScore: currentScaled,
    targetScore,
    gap: targetScore - currentScaled,
    questionsNeededForTarget: questionsNeeded,
    domainProjections: projections,
    errorTypeProjections,
    quickWins: {
      count: quickWins.length,
      projectedGain: quickWinGain,
      description: `Getting all missed easy & medium questions right would add +${quickWinGain} points`,
    },
    easyWins: {
      count: easyWins.length,
      projectedGain: easyWinGain,
      description: `Just fixing the ${easyWins.length} missed easy questions would add +${easyWinGain} points`,
    },
  };
};

/**
 * Analyze performance by difficulty level.
 */
const analyzeDifficulty = (questionAnalysis) => {
  const levels = { easy: { correct: 0, total: 0, avgTime: 0, totalTime: 0 },
                   medium: { correct: 0, total: 0, avgTime: 0, totalTime: 0 },
                   hard: { correct: 0, total: 0, avgTime: 0, totalTime: 0 } };

  questionAnalysis.forEach(q => {
    const diff = q.difficulty || 'medium';
    if (levels[diff]) {
      levels[diff].total++;
      levels[diff].totalTime += q.timeSpent || 0;
      if (q.isCorrect) levels[diff].correct++;
    }
  });

  Object.values(levels).forEach(l => {
    l.accuracy = l.total > 0 ? Math.round((l.correct / l.total) * 100) : 0;
    l.avgTime = l.total > 0 ? Math.round(l.totalTime / l.total) : 0;
  });

  // Identify the "difficulty cliff" — where accuracy drops dramatically
  let difficultyCliff = null;
  if (levels.easy.accuracy >= 80 && levels.medium.accuracy < 60) {
    difficultyCliff = 'medium';
  } else if (levels.medium.accuracy >= 60 && levels.hard.accuracy < 40) {
    difficultyCliff = 'hard';
  } else if (levels.easy.accuracy < 70) {
    difficultyCliff = 'easy'; // Struggling even with basics
  }

  return { levels, difficultyCliff };
};

/**
 * Analyze time management patterns.
 */
const analyzeTimeManagement = (questionAnalysis, diagnosticData) => {
  const times = questionAnalysis.map(q => q.timeSpent || 0);
  const totalTime = times.reduce((s, t) => s + t, 0);
  const avgTime = times.length > 0 ? totalTime / times.length : 0;

  // Time on correct vs incorrect
  const correctTimes = questionAnalysis.filter(q => q.isCorrect).map(q => q.timeSpent || 0);
  const incorrectTimes = questionAnalysis.filter(q => !q.isCorrect).map(q => q.timeSpent || 0);
  const avgCorrectTime = correctTimes.length > 0 ? correctTimes.reduce((s, t) => s + t, 0) / correctTimes.length : 0;
  const avgIncorrectTime = incorrectTimes.length > 0 ? incorrectTimes.reduce((s, t) => s + t, 0) / incorrectTimes.length : 0;

  // Questions where time was a factor (very fast + wrong, or very slow + wrong)
  const timeRelatedErrors = questionAnalysis.filter(q => {
    if (q.isCorrect) return false;
    const diff = q.difficulty || 'medium';
    const fast = q.timeSpent < TIME_THRESHOLDS.rushed;
    const slow = (diff === 'easy' && q.timeSpent > TIME_THRESHOLDS.verySlowEasy) ||
                 (diff === 'medium' && q.timeSpent > TIME_THRESHOLDS.verySlowMedium) ||
                 (diff === 'hard' && q.timeSpent > TIME_THRESHOLDS.verySlowHard);
    return fast || slow;
  });

  // Pacing analysis: did student run out of steam?
  // Compare first half vs second half performance
  const halfIdx = Math.floor(questionAnalysis.length / 2);
  const firstHalf = questionAnalysis.slice(0, halfIdx);
  const secondHalf = questionAnalysis.slice(halfIdx);
  const firstHalfAccuracy = firstHalf.length > 0
    ? firstHalf.filter(q => q.isCorrect).length / firstHalf.length
    : 0;
  const secondHalfAccuracy = secondHalf.length > 0
    ? secondHalf.filter(q => q.isCorrect).length / secondHalf.length
    : 0;
  const fadeEffect = firstHalfAccuracy - secondHalfAccuracy;

  // Module time remaining analysis
  const moduleTimeRemaining = diagnosticData?.moduleTimeRemaining || {};

  // Generate time insights
  const insights = [];
  if (fadeEffect > 0.15) {
    insights.push({
      type: 'warning',
      message: `Your accuracy dropped ${Math.round(fadeEffect * 100)}% in the second half — pacing may be an issue`,
    });
  }
  if (avgIncorrectTime < avgCorrectTime * 0.6 && incorrectTimes.length > 3) {
    insights.push({
      type: 'warning',
      message: 'You answered wrong questions faster than correct ones — slow down on uncertain questions',
    });
  }
  if (timeRelatedErrors.length > 3) {
    insights.push({
      type: 'info',
      message: `${timeRelatedErrors.length} questions had time-related issues (too fast or too slow)`,
    });
  }

  // Check for remaining time in modules
  Object.entries(moduleTimeRemaining).forEach(([modKey, remaining]) => {
    if (remaining > 600) { // More than 10 minutes remaining
      insights.push({
        type: 'info',
        message: `Module ${parseInt(modKey) + 1}: ${Math.round(remaining / 60)} minutes unused — you could slow down and check work`,
      });
    }
  });

  return {
    totalTimeSeconds: Math.round(totalTime),
    avgTimePerQuestion: Math.round(avgTime),
    avgCorrectTime: Math.round(avgCorrectTime),
    avgIncorrectTime: Math.round(avgIncorrectTime),
    timeRelatedErrors: timeRelatedErrors.length,
    fadeEffect: Math.round(fadeEffect * 100),
    firstHalfAccuracy: Math.round(firstHalfAccuracy * 100),
    secondHalfAccuracy: Math.round(secondHalfAccuracy * 100),
    moduleTimeRemaining,
    insights,
  };
};

/**
 * Analyze trends across multiple test attempts.
 */
const analyzeTrends = (currentTestId, currentScore, previousTests = {}, skillProgress = {}) => {
  // Collect all previous test scores
  const testHistory = [];

  Object.entries(previousTests).forEach(([testId, testData]) => {
    if (testData.attempts && Array.isArray(testData.attempts)) {
      testData.attempts.forEach((attempt, idx) => {
        testHistory.push({
          testId,
          testTitle: testData.testTitle || testId,
          attemptIndex: idx,
          scaledScore: attempt.scaledScore,
          rawScore: attempt.rawScore,
          totalQuestions: attempt.totalQuestions,
          completedAt: attempt.completedAt,
        });
      });
    }
  });

  // Sort by date
  testHistory.sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt));

  // Add current test
  testHistory.push({
    testId: currentTestId,
    testTitle: 'This Test',
    scaledScore: currentScore,
    completedAt: new Date().toISOString(),
    isCurrent: true,
  });

  if (testHistory.length < 2) {
    return {
      hasHistory: false,
      testHistory,
      scoreChange: null,
      trend: 'first_test',
      message: 'This is your first test — take another after studying to track improvement!',
    };
  }

  // Calculate trend
  const prevScore = testHistory[testHistory.length - 2].scaledScore;
  const scoreChange = currentScore - prevScore;

  // Overall trend (linear regression on last 5 tests)
  const recent = testHistory.slice(-5);
  let trend = 'stable';
  if (recent.length >= 2) {
    const firstScore = recent[0].scaledScore;
    const lastScore = recent[recent.length - 1].scaledScore;
    const avgChange = (lastScore - firstScore) / (recent.length - 1);
    if (avgChange > 10) trend = 'improving';
    else if (avgChange < -10) trend = 'declining';
  }

  // Identify skills that improved vs got worse
  // (based on skill progress trend data)
  const improvingSkills = [];
  const decliningSkills = [];
  Object.entries(skillProgress).forEach(([skillId, data]) => {
    const skillTrend = getSkillTrendFromHistory(data);
    const skill = getSkillById(skillId);
    if (skillTrend === 'improving' && skill) improvingSkills.push(skill.name);
    if (skillTrend === 'declining' && skill) decliningSkills.push(skill.name);
  });

  return {
    hasHistory: true,
    testHistory,
    scoreChange,
    trend,
    improvingSkills: improvingSkills.slice(0, 5),
    decliningSkills: decliningSkills.slice(0, 5),
    message: generateTrendMessage(scoreChange, trend),
  };
};

/**
 * Prioritize actions by ROI (which fix gives the most points per effort).
 */
const prioritizeActions = (errorPatterns, domainAnalysis, skillAnalysis, scoreProjection, scoreGap) => {
  const actions = [];

  // ── Quick wins: careless errors and trap susceptibility ──
  const carelessCount = errorPatterns.counts[ERROR_TYPES.CARELESS_ERROR] || 0;
  const trapCount = errorPatterns.counts[ERROR_TYPES.TRAP_SUSCEPTIBILITY] || 0;

  if (carelessCount >= 2) {
    actions.push({
      priority: 1,
      type: 'strategy',
      title: `Eliminate ${carelessCount} careless mistakes`,
      description: 'These are questions you know how to solve. Slow down and double-check your work.',
      estimatedGain: Math.round(carelessCount * (scoreGap > 0 ? scoreGap / (errorPatterns.totalWrong || 1) : 10)),
      effort: 'low',
      category: 'quick_win',
      actionItems: [
        'After answering, re-read the question — are you solving what they asked?',
        'For calculations, check by plugging your answer back in',
        'Use mark-for-review on questions you feel uncertain about',
      ],
    });
  }

  if (trapCount >= 2) {
    actions.push({
      priority: 2,
      type: 'strategy',
      title: `Stop falling for ${trapCount} trap answers`,
      description: 'College Board designs wrong answers to catch specific mistakes. Learn to spot them.',
      estimatedGain: Math.round(trapCount * (scoreGap > 0 ? scoreGap / (errorPatterns.totalWrong || 1) : 10)),
      effort: 'medium',
      category: 'quick_win',
      actionItems: [
        'Before picking an answer, predict what traps might be set',
        'If your answer matches a "too easy" path, verify it',
        'In percent problems, always check: "increased BY X%" vs "IS X%"',
      ],
    });
  }

  // ── Domain-based actions ──
  domainAnalysis.forEach(domain => {
    if (domain.accuracy < 60) {
      actions.push({
        priority: domain.accuracy < 40 ? 3 : 5,
        type: 'domain',
        title: `Strengthen ${domain.displayName}`,
        description: `You got ${domain.correct}/${domain.total} (${domain.accuracy}%) in this domain, which is ${Math.round(domain.satWeight * 100)}% of the SAT`,
        estimatedGain: Math.round(domain.wrong * 10),
        effort: domain.accuracy < 30 ? 'high' : 'medium',
        category: 'content',
        domain: domain.domain,
        actionItems: [],
      });
    }
  });

  // ── Skill-based actions ──
  skillAnalysis.weakSkills.slice(0, 5).forEach((skill, idx) => {
    actions.push({
      priority: 4 + idx,
      type: 'skill',
      title: `Master: ${skill.name}`,
      description: `Got ${skill.correct}/${skill.total} on this test. ${skill.historicalMastery !== null ? `Historical mastery: ${skill.historicalMastery}%` : 'First time tested'}`,
      estimatedGain: Math.round((skill.total - skill.correct) * 10),
      effort: skill.historicalMastery !== null && skill.historicalMastery > 30 ? 'medium' : 'high',
      category: 'content',
      skillId: skill.skillId,
      modules: skill.modules,
      sections: skill.sections,
      primaryErrorType: skill.primaryErrorType,
      actionItems: generateSkillActionItems(skill),
    });
  });

  // ── Time management action ──
  const timeErrors = errorPatterns.counts[ERROR_TYPES.TIME_PRESSURE] || 0;
  if (timeErrors >= 3) {
    actions.push({
      priority: 3,
      type: 'strategy',
      title: 'Improve time management',
      description: `${timeErrors} questions were affected by time pressure`,
      estimatedGain: Math.round(timeErrors * 8),
      effort: 'medium',
      category: 'strategy',
      actionItems: [
        'Spend max 90 seconds per easy question, 2 minutes per medium',
        'If stuck for over 2 minutes on a hard question, flag it and move on',
        'Use the last 5 minutes of each module to review flagged questions',
      ],
    });
  }

  // ── Easy question accuracy action ──
  const easyMissed = scoreProjection.easyWins.count;
  if (easyMissed >= 2) {
    actions.push({
      priority: 1,
      type: 'strategy',
      title: `Stop missing easy questions (${easyMissed} missed)`,
      description: scoreProjection.easyWins.description,
      estimatedGain: scoreProjection.easyWins.projectedGain,
      effort: 'low',
      category: 'quick_win',
      actionItems: [
        'Easy questions should take under 90 seconds — if it\'s taking longer, re-read the problem',
        'These questions test straightforward application of concepts',
        'Getting all easy questions right is the #1 score booster on the SAT',
      ],
    });
  }

  // Sort by priority and estimated gain
  actions.sort((a, b) => {
    // Quick wins first, then by estimated gain
    if (a.category === 'quick_win' && b.category !== 'quick_win') return -1;
    if (b.category === 'quick_win' && a.category !== 'quick_win') return 1;
    return b.estimatedGain - a.estimatedGain;
  });

  return actions;
};

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

const getSkillTrendFromHistory = (skillData) => {
  if (!skillData?.history || skillData.history.length < 4) return 'unknown';
  const history = skillData.history;
  const recent = history.slice(-Math.floor(history.length / 2));
  const older = history.slice(0, Math.floor(history.length / 2));
  const recentRate = recent.filter(h => h.correct).length / recent.length;
  const olderRate = older.filter(h => h.correct).length / older.length;
  if (recentRate - olderRate > 0.15) return 'improving';
  if (recentRate - olderRate < -0.15) return 'declining';
  return 'stable';
};

const getMostCommonErrorType = (errorTypes) => {
  if (!errorTypes || errorTypes.length === 0) return null;
  const counts = {};
  errorTypes.forEach(t => { counts[t] = (counts[t] || 0) + 1; });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
};

const generateSkillActionItems = (skill) => {
  const items = [];
  if (skill.modules?.length > 0) {
    items.push(`Watch the ${skill.modules[0]} video lessons on this topic`);
  }
  if (skill.sections?.length > 0) {
    items.push(`Complete the "${skill.sections[0]}" practice section`);
  }
  if (skill.primaryErrorType === ERROR_TYPES.CONCEPTUAL_GAP) {
    items.push('Start with the lesson content before attempting practice questions');
  } else if (skill.primaryErrorType === ERROR_TYPES.PROCEDURAL_ERROR) {
    items.push('Practice more problems — you understand the concept but need to nail the execution');
  }
  return items;
};

const generateTrendMessage = (scoreChange, trend) => {
  if (scoreChange > 30) return `Amazing improvement! You jumped +${scoreChange} points! Your study plan is working.`;
  if (scoreChange > 10) return `Good progress! +${scoreChange} points since your last test. Keep it up!`;
  if (scoreChange > 0) return `Slight improvement (+${scoreChange} points). Stay consistent with your study plan.`;
  if (scoreChange === 0) return 'Same score as last time. Review your study plan and focus on your weak areas.';
  if (scoreChange > -20) return `Score dipped ${scoreChange} points. Don\'t worry — focus on the areas flagged below.`;
  return `Score dropped ${scoreChange} points. Let\'s adjust your study plan to address the gaps.`;
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

export {
  ERROR_TYPES,
  ERROR_TYPE_LABELS,
  ERROR_TYPE_DESCRIPTIONS,
  ERROR_TYPE_ICONS,
  ERROR_TYPE_COLORS,
  DOMAIN_WEIGHTS,
  DOMAIN_QUESTION_COUNTS,
  SCORING_TABLE,
};