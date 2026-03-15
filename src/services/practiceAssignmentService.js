/**
 * Practice Assignment Service
 *
 * Deterministically assigns practice questions from the bank to a user's
 * study plan based on their diagnostic weak skills.  Produces both:
 *   - targetedQuestionIds  (flat ID list — legacy-compatible)
 *   - practiceAssignments  (structured per-week bundles with metadata)
 *
 * Selection priority: skill match → domain fallback → global fill.
 * Seeded shuffle keeps assignments stable within the same plan version
 * while rotating on every regeneration.
 */

import {
  getQuestionsBySkillIds,
  getQuestionsByDomain,
  getQuestionById,
} from '../data/questions/bank';

// ─── Defaults ────────────────────────────────────────────────────────────────

const DEFAULT_QUESTIONS_PER_WEEK = 10;
const MIN_TOTAL_QUESTIONS = 15;
const DEFAULT_DIFFICULTY_MIX = { easy: 0.30, medium: 0.45, hard: 0.25 };
const DOMAIN_ORDER = ['algebra', 'problem-solving', 'advanced-math', 'geometry'];
export { DOMAIN_ORDER as CANONICAL_DOMAINS };

const DOMAIN_ALIAS_MAP = {
  'algebra': 'algebra',
  'heart of algebra': 'algebra',
  'problem-solving': 'problem-solving',
  'problem solving': 'problem-solving',
  'problem solving and data analysis': 'problem-solving',
  'problem-solving-and-data-analysis': 'problem-solving',
  'advanced-math': 'advanced-math',
  'advanced math': 'advanced-math',
  'passport to advanced math': 'advanced-math',
  'passport-to-advanced-math': 'advanced-math',
  'geometry': 'geometry',
  'geometry & trigonometry': 'geometry',
  'geometry-and-trigonometry': 'geometry',
  'additional topics in math': 'geometry',
};

export function normalizeDomain(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const key = raw.trim().toLowerCase();
  if (DOMAIN_ALIAS_MAP[key]) return DOMAIN_ALIAS_MAP[key];
  for (const canonical of DOMAIN_ORDER) {
    if (key.includes(canonical)) return canonical;
  }
  return null;
}

// ─── Deterministic seeded shuffle ────────────────────────────────────────────

function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = Math.abs(seed) || 1;
  const rng = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) & 0x7fffffff;
  }
  return hash;
}

// ─── Weak-skill payload builder ──────────────────────────────────────────────

/**
 * Build a normalised weak-skill payload from a diagnostic report.
 *
 * @param {Object} diagnostic  — output of diagnosticEngine.runDiagnostic()
 * @returns {{ skillId: string, domain: string, priority: number, errorType: string }[]}
 */
export function buildWeakSkillPayload(diagnostic) {
  if (!diagnostic?.skillAnalysis) return [];

  const weakSkills = diagnostic.skillAnalysis.weakSkills || [];

  return weakSkills
    .filter(s => s.skillId)
    .map(s => ({
      skillId: s.skillId,
      domain: s.domain || null,
      priority: 100 - (s.testAccuracy || 0),
      errorType: s.primaryErrorType || 'unknown',
    }))
    .sort((a, b) => b.priority - a.priority);
}

// ─── Core assignment logic ───────────────────────────────────────────────────

/**
 * Generate practice question assignments for a study plan.
 *
 * @param {Object}   opts
 * @param {Object}   opts.diagnostic         — runDiagnostic() output
 * @param {number}   opts.weekCount          — number of weeks in the plan
 * @param {string[]} opts.excludeIds         — IDs to skip (already completed)
 * @param {string}   opts.seed               — deterministic seed (userId + planTimestamp)
 * @param {number}   opts.questionsPerWeek   — per-week target (default 10)
 * @param {Object}   opts.difficultyMix      — { easy, medium, hard } fractions
 * @returns {{ targetedQuestionIds: string[], practiceAssignments: Object[] }}
 */
export function generatePracticeAssignments({
  diagnostic,
  weekCount = 4,
  excludeIds = [],
  seed = '',
  questionsPerWeek = DEFAULT_QUESTIONS_PER_WEEK,
  difficultyMix = DEFAULT_DIFFICULTY_MIX,
} = {}) {
  const weakPayload = buildWeakSkillPayload(diagnostic);
  const numericSeed = hashString(seed || new Date().toISOString());

  const totalNeeded = Math.max(MIN_TOTAL_QUESTIONS, weekCount * questionsPerWeek);
  const usedIds = new Set(excludeIds);

  const isMCQ = q => Array.isArray(q.choices) && q.choices.length >= 2;

  // Phase 1 — skill-targeted selection (deterministic — no Math.random)
  let pool = [];
  if (weakPayload.length > 0) {
    const skillIds = weakPayload.map(w => w.skillId);
    const candidates = getQuestionsBySkillIds(skillIds, { excludeIds: [...usedIds] }).filter(isMCQ);
    const shuffled = seededShuffle(candidates, numericSeed);

    if (difficultyMix) {
      const easy = shuffled.filter(q => q.difficulty === 'easy')
        .slice(0, Math.ceil(totalNeeded * (difficultyMix.easy || 0.3)));
      const medium = shuffled.filter(q => q.difficulty === 'medium')
        .slice(0, Math.ceil(totalNeeded * (difficultyMix.medium || 0.45)));
      const hard = shuffled.filter(q => q.difficulty === 'hard')
        .slice(0, Math.ceil(totalNeeded * (difficultyMix.hard || 0.25)));
      pool = seededShuffle([...easy, ...medium, ...hard], numericSeed + 1);
    } else {
      pool = shuffled.slice(0, totalNeeded);
    }
  }

  pool.forEach(q => usedIds.add(q.id));

  // Phase 2 — domain fallback: fill gaps from weak domains
  if (pool.length < totalNeeded) {
    const weakDomains = [...new Set(weakPayload.map(w => w.domain).filter(Boolean))];
    for (const domain of weakDomains) {
      if (pool.length >= totalNeeded) break;
      const extras = getQuestionsByDomain(domain, { excludeIds: [...usedIds] }).filter(isMCQ);
      const shuffled = seededShuffle(extras, numericSeed + domain.length);
      const needed = totalNeeded - pool.length;
      const batch = shuffled.slice(0, needed);
      batch.forEach(q => { pool.push(q); usedIds.add(q.id); });
    }
  }

  // Phase 3 — global fill: round-robin across all domains
  if (pool.length < MIN_TOTAL_QUESTIONS) {
    for (const domain of DOMAIN_ORDER) {
      if (pool.length >= MIN_TOTAL_QUESTIONS) break;
      const extras = getQuestionsByDomain(domain, { excludeIds: [...usedIds] }).filter(isMCQ);
      const shuffled = seededShuffle(extras, numericSeed + 999);
      const batch = shuffled.slice(0, Math.max(3, MIN_TOTAL_QUESTIONS - pool.length));
      batch.forEach(q => { pool.push(q); usedIds.add(q.id); });
    }
  }

  // Deterministic final shuffle
  pool = seededShuffle(pool, numericSeed);

  // Partition into per-week bundles
  const assignments = [];
  for (let w = 0; w < weekCount; w++) {
    const start = w * questionsPerWeek;
    const weekQuestions = pool.slice(start, start + questionsPerWeek);
    if (weekQuestions.length === 0) continue;

    const byDomain = {};
    weekQuestions.forEach(q => {
      byDomain[q.domain] = (byDomain[q.domain] || 0) + 1;
    });

    assignments.push({
      weekNumber: w + 1,
      questionIds: weekQuestions.map(q => q.id),
      count: weekQuestions.length,
      domainBreakdown: byDomain,
      difficultyBreakdown: {
        easy: weekQuestions.filter(q => q.difficulty === 'easy').length,
        medium: weekQuestions.filter(q => q.difficulty === 'medium').length,
        hard: weekQuestions.filter(q => q.difficulty === 'hard').length,
      },
    });
  }

  const allIds = pool.map(q => q.id);

  return {
    targetedQuestionIds: allIds,
    practiceAssignments: assignments,
    summary: {
      totalAssigned: allIds.length,
      weekCount: assignments.length,
      selectionPhases: {
        skillTargeted: Math.min(pool.length, totalNeeded),
        domainFallback: 0,
        globalFill: 0,
      },
    },
  };
}

/**
 * Resolve a list of persisted question IDs back to full question objects,
 * filtering out any IDs that no longer exist in the bank.
 */
export function resolveAssignedQuestions(questionIds) {
  if (!Array.isArray(questionIds)) return { resolved: [], staleCount: 0 };

  const resolved = [];
  let staleCount = 0;

  for (const id of questionIds) {
    const q = getQuestionById(id);
    if (q) {
      resolved.push(q);
    } else {
      staleCount++;
    }
  }

  return { resolved, staleCount };
}

// ═══════════════════════════════════════════════════════════════════════════
// Adaptive Practice Queue Engine (Acely-style)
//
// Instead of pre-assigned fixed bundles, the queue selects the next question
// dynamically based on the student's in-session performance.  Difficulty
// steps up after consecutive correct answers and down after misses.
// Missed questions are reinserted later in the queue for spaced retry.
// ═══════════════════════════════════════════════════════════════════════════

const DIFFICULTY_LADDER = ['easy', 'medium', 'hard'];
const DEFAULT_SESSION_LENGTH = 15;
const DEFAULT_MIN_MASTERY_PERCENT = 80;
const STREAK_THRESHOLD_UP = 2;
const STREAK_THRESHOLD_DOWN = 1;
const RETRY_GAP = 4;

const isMCQGlobal = q => Array.isArray(q.choices) && q.choices.length >= 2;

/**
 * Build the initial adaptive queue seed from diagnostic weak-skill signals.
 * Stored in the plan artifact so sessions can be bootstrapped deterministically.
 */
export function buildAdaptiveQueueSeed({
  diagnostic,
  seed = '',
  poolSize = 80,
} = {}) {
  const weakPayload = buildWeakSkillPayload(diagnostic);
  const numericSeed = hashString(seed || new Date().toISOString());
  const usedIds = new Set();
  let pool = [];

  // Phase 1 — skill-targeted
  if (weakPayload.length > 0) {
    const skillIds = weakPayload.map(w => w.skillId);
    const candidates = getQuestionsBySkillIds(skillIds, { excludeIds: [] }).filter(isMCQGlobal);
    pool = seededShuffle(candidates, numericSeed).slice(0, poolSize);
  }
  pool.forEach(q => usedIds.add(q.id));

  // Phase 2 — domain fallback
  if (pool.length < poolSize) {
    const weakDomains = [...new Set(weakPayload.map(w => w.domain).filter(Boolean))];
    for (const domain of weakDomains) {
      if (pool.length >= poolSize) break;
      const extras = getQuestionsByDomain(domain, { excludeIds: [...usedIds] }).filter(isMCQGlobal);
      const batch = seededShuffle(extras, numericSeed + domain.length).slice(0, poolSize - pool.length);
      batch.forEach(q => { pool.push(q); usedIds.add(q.id); });
    }
  }

  // Phase 3 — global fill
  if (pool.length < 20) {
    for (const domain of DOMAIN_ORDER) {
      if (pool.length >= poolSize) break;
      const extras = getQuestionsByDomain(domain, { excludeIds: [...usedIds] }).filter(isMCQGlobal);
      const batch = seededShuffle(extras, numericSeed + 999).slice(0, Math.max(5, poolSize - pool.length));
      batch.forEach(q => { pool.push(q); usedIds.add(q.id); });
    }
  }

  // Organise by difficulty for the queue engine
  const byDifficulty = { easy: [], medium: [], hard: [] };
  pool.forEach(q => {
    const d = q.difficulty || 'medium';
    if (byDifficulty[d]) byDifficulty[d].push(q.id);
    else byDifficulty.medium.push(q.id);
  });

  // Shuffle each difficulty bucket
  Object.keys(byDifficulty).forEach(d => {
    byDifficulty[d] = seededShuffle(byDifficulty[d], numericSeed + d.length);
  });

  const weakSkillIds = weakPayload.map(w => w.skillId);
  const weakDomains = [...new Set(weakPayload.map(w => w.domain).filter(Boolean))];

  return {
    poolIds: pool.map(q => q.id),
    byDifficulty,
    weakSkillIds,
    weakDomains,
    sessionLength: DEFAULT_SESSION_LENGTH,
    targetQuestions: DEFAULT_SESSION_LENGTH,
    minMasteryPercent: DEFAULT_MIN_MASTERY_PERCENT,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Build an adaptive queue seed focused on a single domain.
 * Domain questions fill first, then broader pool as fallback.
 * Deterministic, MCQ-only, same shape as buildAdaptiveQueueSeed.
 */
export function buildDomainAdaptiveQueueSeed({
  enforcedDomain,
  existingPoolIds = [],
  seed = '',
  poolSize = 60,
} = {}) {
  if (!enforcedDomain) return null;

  const numericSeed = hashString(seed || enforcedDomain);
  const usedIds = new Set();
  let pool = [];

  const domainCandidates = getQuestionsByDomain(enforcedDomain, { excludeIds: [] }).filter(isMCQGlobal);
  const shuffled = seededShuffle(domainCandidates, numericSeed);
  pool = shuffled.slice(0, poolSize);
  pool.forEach(q => usedIds.add(q.id));

  if (pool.length < 20) {
    for (const domain of DOMAIN_ORDER) {
      if (domain === enforcedDomain || pool.length >= poolSize) continue;
      const extras = getQuestionsByDomain(domain, { excludeIds: [...usedIds] }).filter(isMCQGlobal);
      const batch = seededShuffle(extras, numericSeed + domain.length).slice(0, poolSize - pool.length);
      batch.forEach(q => { pool.push(q); usedIds.add(q.id); });
    }
  }

  const byDifficulty = { easy: [], medium: [], hard: [] };
  pool.forEach(q => {
    const d = q.difficulty || 'medium';
    if (byDifficulty[d]) byDifficulty[d].push(q.id);
    else byDifficulty.medium.push(q.id);
  });
  Object.keys(byDifficulty).forEach(d => {
    byDifficulty[d] = seededShuffle(byDifficulty[d], numericSeed + d.length);
  });

  return {
    poolIds: pool.map(q => q.id),
    byDifficulty,
    weakSkillIds: [],
    weakDomains: [enforcedDomain],
    enforcedDomain,
    sessionLength: DEFAULT_SESSION_LENGTH,
    targetQuestions: DEFAULT_SESSION_LENGTH,
    minMasteryPercent: DEFAULT_MIN_MASTERY_PERCENT,
    createdAt: new Date().toISOString(),
  };
}

/**
 * Return a small deterministic preview of MCQ questions for a domain.
 * Used by the UI to show concrete assigned questions under each domain.
 */
export function getDomainAssignmentPreview(domain, { seed = '', count = 3 } = {}) {
  const canonical = normalizeDomain(domain);
  if (!canonical) return { domain: null, questions: [], total: 0 };

  const numericSeed = hashString(seed || canonical);
  const candidates = getQuestionsByDomain(canonical, { excludeIds: [] }).filter(isMCQGlobal);
  const shuffled = seededShuffle(candidates, numericSeed);

  return {
    domain: canonical,
    questions: shuffled.slice(0, count),
    total: candidates.length,
  };
}

/**
 * Create a fresh adaptive session state (stored in-memory during a session,
 * persisted for resume across page loads).
 */
export function createAdaptiveSessionState(queueSeed) {
  return {
    cursor: 0,
    currentDifficulty: 'easy',
    streak: 0,
    answered: [],
    correct: 0,
    incorrect: 0,
    retryQueue: [],
    seenIds: new Set(),
    sessionLength: queueSeed?.sessionLength || DEFAULT_SESSION_LENGTH,
    targetQuestions: queueSeed?.targetQuestions || DEFAULT_SESSION_LENGTH,
    minMasteryPercent: queueSeed?.minMasteryPercent || DEFAULT_MIN_MASTERY_PERCENT,
    sessionsCompleted: 0,
    isCompleted: false,
    completedAt: null,
  };
}

/**
 * Evaluate whether adaptive assignment is complete.
 * Both conditions must be met:
 *   1. answered >= targetQuestions
 *   2. mastery percent >= minMasteryPercent
 */
export function evaluateAdaptiveCompletion(sessionState) {
  if (!sessionState) return { isComplete: false, mastery: 0, answeredCount: 0, meetsTarget: false, meetsMastery: false };

  const answeredCount = sessionState.answered?.length || 0;
  const correctCount = sessionState.correct || 0;
  const mastery = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const target = sessionState.targetQuestions || DEFAULT_SESSION_LENGTH;
  const minMastery = sessionState.minMasteryPercent || DEFAULT_MIN_MASTERY_PERCENT;

  const meetsTarget = answeredCount >= target;
  const meetsMastery = mastery >= minMastery;

  return {
    isComplete: meetsTarget && meetsMastery,
    mastery,
    answeredCount,
    targetQuestions: target,
    minMasteryPercent: minMastery,
    meetsTarget,
    meetsMastery,
  };
}

/**
 * Pick the next question from the adaptive queue based on session state.
 * Returns { question, isRetry, isComplete } — when the session target is
 * reached, isComplete is true and question is null.
 */
export function getNextAdaptiveQuestion(queueSeed, sessionState) {
  if (!queueSeed || !sessionState) return { question: null, isRetry: false, isComplete: true };

  const totalAnswered = sessionState.answered.length;
  if (totalAnswered >= sessionState.sessionLength && sessionState.retryQueue.length === 0) {
    return { question: null, isRetry: false, isComplete: true };
  }

  // Priority: serve retry questions when due
  if (sessionState.retryQueue.length > 0) {
    const retryEntry = sessionState.retryQueue[0];
    if (totalAnswered >= retryEntry.serveAt) {
      const q = getQuestionById(retryEntry.id);
      if (q && isMCQGlobal(q)) {
        return { question: q, isRetry: true, isComplete: false };
      }
      // Stale retry — drop and recurse
      sessionState.retryQueue.shift();
      return getNextAdaptiveQuestion(queueSeed, sessionState);
    }
  }

  if (totalAnswered >= sessionState.sessionLength) {
    // Only retries remain but not yet due — session is effectively complete
    if (sessionState.retryQueue.length > 0) {
      const nextRetry = sessionState.retryQueue[0];
      const q = getQuestionById(nextRetry.id);
      if (q && isMCQGlobal(q)) {
        return { question: q, isRetry: true, isComplete: false };
      }
    }
    return { question: null, isRetry: false, isComplete: true };
  }

  // Normal pick: use current difficulty bucket
  const diff = sessionState.currentDifficulty;
  const bucket = queueSeed.byDifficulty[diff] || [];
  for (const id of bucket) {
    if (!sessionState.seenIds.has(id)) {
      const q = getQuestionById(id);
      if (q && isMCQGlobal(q)) {
        return { question: q, isRetry: false, isComplete: false };
      }
    }
  }

  // Fallback: try adjacent difficulties
  for (const fallbackDiff of DIFFICULTY_LADDER) {
    if (fallbackDiff === diff) continue;
    const fb = queueSeed.byDifficulty[fallbackDiff] || [];
    for (const id of fb) {
      if (!sessionState.seenIds.has(id)) {
        const q = getQuestionById(id);
        if (q && isMCQGlobal(q)) {
          return { question: q, isRetry: false, isComplete: false };
        }
      }
    }
  }

  return { question: null, isRetry: false, isComplete: true };
}

/**
 * Record a student's answer and update adaptive session state.
 * Adjusts difficulty ladder and schedules missed questions for retry.
 */
export function applyAdaptiveResult(sessionState, questionId, isCorrect, isRetry = false) {
  const next = { ...sessionState, seenIds: new Set(sessionState.seenIds) };

  next.answered = [...next.answered, { id: questionId, correct: isCorrect, isRetry }];
  next.seenIds.add(questionId);

  if (isRetry) {
    next.retryQueue = next.retryQueue.filter(r => r.id !== questionId);
  }

  if (isCorrect) {
    next.correct++;
    next.streak = (next.streak >= 0 ? next.streak + 1 : 1);

    if (next.streak >= STREAK_THRESHOLD_UP) {
      const idx = DIFFICULTY_LADDER.indexOf(next.currentDifficulty);
      if (idx < DIFFICULTY_LADDER.length - 1) {
        next.currentDifficulty = DIFFICULTY_LADDER[idx + 1];
        next.streak = 0;
      }
    }
  } else {
    next.incorrect++;
    next.streak = (next.streak <= 0 ? next.streak - 1 : -1);

    if (Math.abs(next.streak) >= STREAK_THRESHOLD_DOWN) {
      const idx = DIFFICULTY_LADDER.indexOf(next.currentDifficulty);
      if (idx > 0) {
        next.currentDifficulty = DIFFICULTY_LADDER[idx - 1];
        next.streak = 0;
      }
    }

    // Schedule retry for missed question
    if (!isRetry) {
      const serveAt = next.answered.length + RETRY_GAP;
      next.retryQueue = [...next.retryQueue, { id: questionId, serveAt }];
    }
  }

  return next;
}

/**
 * Serialize adaptive session state for persistence (Sets -> Arrays).
 */
export function serializeAdaptiveState(state) {
  if (!state) return null;
  return {
    ...state,
    seenIds: [...state.seenIds],
  };
}

/**
 * Deserialize persisted adaptive state back to runtime format.
 */
export function deserializeAdaptiveState(raw) {
  if (!raw) return null;
  return {
    ...raw,
    seenIds: new Set(raw.seenIds || []),
    retryQueue: raw.retryQueue || [],
    answered: raw.answered || [],
    sessionsCompleted: raw.sessionsCompleted || 0,
    isCompleted: raw.isCompleted || false,
    completedAt: raw.completedAt || null,
    targetQuestions: raw.targetQuestions || DEFAULT_SESSION_LENGTH,
    minMasteryPercent: raw.minMasteryPercent || DEFAULT_MIN_MASTERY_PERCENT,
  };
}
