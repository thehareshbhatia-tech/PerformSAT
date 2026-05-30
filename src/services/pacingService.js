/**
 * Pacing & Time-Pressure Training Service
 *
 * Creates structured pacing drills derived from real telemetry captured
 * during practice tests.  Three training modes:
 *
 *   1. Speed Rounds  — easy/medium questions with strict per-question timer
 *   2. Checkpoint Pacing — simulate half-module with cumulative timer
 *   3. Last-8-Min Strategy — practice endgame question triage under pressure
 *
 * Personalization rules use the student's actual per-question timing from
 * PracticeTest telemetry (timeSpent, visits, answerChanges) to calibrate
 * thresholds and select which mode benefits them most.
 */

const SAT_SECONDS_PER_QUESTION = 95; // 35 min ÷ 22 = ~95 s

/**
 * Analyse per-question telemetry from practice tests and return a
 * pacing profile describing where the student wastes or misallocates time.
 *
 * @param {Array} questionTelemetry — array of { timeSpent, difficulty, wasCorrect, questionIndex }
 * @returns {Object} profile
 */
export const analyzePacingProfile = (questionTelemetry = []) => {
  if (!questionTelemetry.length) {
    return { mode: 'speed_rounds', reason: 'No telemetry yet — start with speed rounds.', stats: null };
  }

  const total = questionTelemetry.length;
  const avgTime = questionTelemetry.reduce((s, q) => s + (q.timeSpent || 0), 0) / total;

  const rushedCount = questionTelemetry.filter(q => q.timeSpent < 30 && !q.wasCorrect).length;
  const overtimeCount = questionTelemetry.filter(q => q.timeSpent > SAT_SECONDS_PER_QUESTION * 1.5).length;
  const endgameUnanswered = questionTelemetry.filter(q => q.questionIndex >= 18 && (!q.wasCorrect && (q.timeSpent || 0) < 10)).length;

  const rushedRate = rushedCount / total;
  const overtimeRate = overtimeCount / total;

  const stats = {
    avgTimePerQuestion: Math.round(avgTime),
    rushedCount,
    overtimeCount,
    endgameUnanswered,
    totalQuestions: total,
    rushedRate: Math.round(rushedRate * 100),
    overtimeRate: Math.round(overtimeRate * 100),
  };

  if (endgameUnanswered >= 3) {
    return {
      mode: 'last_8_min',
      reason: `You left ${endgameUnanswered} late questions unanswered. Endgame triage practice will help most.`,
      stats,
    };
  }

  if (overtimeRate > 0.2) {
    return {
      mode: 'checkpoint_pacing',
      reason: `${stats.overtimeRate}% of your questions took too long. Checkpoint pacing trains cumulative time awareness.`,
      stats,
    };
  }

  if (rushedRate > 0.15) {
    return {
      mode: 'speed_rounds',
      reason: `${stats.rushedRate}% of incorrect answers were rushed (<30 s). Speed rounds build deliberate-fast habits.`,
      stats,
    };
  }

  return {
    mode: 'speed_rounds',
    reason: 'Your pacing is solid. Speed rounds will sharpen your fastest-path instincts.',
    stats,
  };
};

/**
 * Training mode definitions.  Each mode describes the drill parameters
 * the PracticeTest component (or a dedicated PacingDrill component) needs
 * to configure the session.
 */
export const PACING_MODES = {
  speed_rounds: {
    id: 'speed_rounds',
    label: 'Speed Rounds',
    description: 'Answer easy/medium questions within a tight per-question timer to build fluency.',
    questionCount: 10,
    timePerQuestion: 60,
    difficultyFilter: ['easy', 'medium'],
    showTimerPerQuestion: true,
    cumulativeTimer: false,
    estimatedMinutes: 10,
  },
  checkpoint_pacing: {
    id: 'checkpoint_pacing',
    label: 'Checkpoint Pacing',
    description: 'Simulate a half-module (11 questions, 17.5 min) with checkpoint alerts at questions 4, 8, and 11.',
    questionCount: 11,
    totalTimeSeconds: 17.5 * 60,
    checkpoints: [4, 8, 11],
    difficultyFilter: null,
    showTimerPerQuestion: false,
    cumulativeTimer: true,
    estimatedMinutes: 18,
  },
  last_8_min: {
    id: 'last_8_min',
    label: 'Last 8 Minutes',
    description: 'You have 8 minutes and 6 questions left. Practice deciding what to attempt, what to guess on, and how to triage.',
    questionCount: 6,
    totalTimeSeconds: 8 * 60,
    difficultyFilter: ['medium', 'hard'],
    showTimerPerQuestion: false,
    cumulativeTimer: true,
    estimatedMinutes: 8,
    triageMode: true,
  },
};

/**
 * Build a pacing drill session using the student's profile.
 *
 * @param {Array} questionTelemetry — from previous practice tests
 * @returns {{ mode: Object, profile: Object }}
 */
export const buildPacingSession = (questionTelemetry = []) => {
  const profile = analyzePacingProfile(questionTelemetry);
  const mode = PACING_MODES[profile.mode];

  return {
    mode,
    profile,
    config: {
      ...mode,
      personalizedReason: profile.reason,
    },
  };
};

/**
 * Select the questions for a pacing drill from a candidate pool. Pure: the
 * caller supplies (and pre-shuffles) the pool so this stays testable and the
 * randomness lives at the call site.
 *
 * Pacing trains TIMING, not a specific skill, so questions are chosen by
 * difficulty only (per the mode's difficultyFilter), MCQ only (fill-ins don't
 * suit a fast timed rhythm), capped at the mode's questionCount.
 *
 * @param {Array} pool — candidate questions (already shuffled by the caller)
 * @param {Object} config — a PACING_MODES entry
 * @returns {Array} the selected questions
 */
export const selectPacingQuestions = (pool = [], config = {}) => {
  const isMCQ = (q) => Array.isArray(q?.choices) && q.choices.length >= 2;
  let filtered = (pool || []).filter(isMCQ);

  const df = config.difficultyFilter;
  if (Array.isArray(df) && df.length > 0) {
    filtered = filtered.filter((q) => df.includes(q.difficulty));
  }

  return filtered.slice(0, config.questionCount || 10);
};

/**
 * Evaluate a completed pacing drill session.
 *
 * @param {Object} modeConfig — the PACING_MODES entry used
 * @param {Array} results — array of { wasCorrect, timeSpent }
 * @returns {Object} summary
 */
export const evaluatePacingSession = (modeConfig, results = []) => {
  const correct = results.filter(r => r.wasCorrect).length;
  const total = results.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  const avgTime = total > 0
    ? Math.round(results.reduce((s, r) => s + (r.timeSpent || 0), 0) / total)
    : 0;

  const underBudget = modeConfig.timePerQuestion
    ? results.filter(r => (r.timeSpent || 0) <= modeConfig.timePerQuestion).length
    : null;

  return {
    correct,
    total,
    accuracy,
    avgTimePerQuestion: avgTime,
    underBudget,
    grade:
      accuracy >= 90 && (underBudget === null || underBudget >= total * 0.8) ? 'A'
      : accuracy >= 70 ? 'B'
      : 'C',
    message:
      accuracy >= 90 ? 'Excellent pacing — ready for test day.'
      : accuracy >= 70 ? 'Good pace, but accuracy can improve. Keep drilling.'
      : 'Focus on accuracy first, then speed. Slow is smooth, smooth is fast.',
  };
};
