import {
  buildWeakSkillPayload,
  generatePracticeAssignments,
  resolveAssignedQuestions,
  buildAdaptiveQueueSeed,
  buildDomainAdaptiveQueueSeed,
  buildStrengthFocusAssignments,
  normalizeDomain,
  getDomainAssignmentPreview,
  CANONICAL_DOMAINS,
  createAdaptiveSessionState,
  getNextAdaptiveQuestion,
  applyAdaptiveResult,
  serializeAdaptiveState,
  deserializeAdaptiveState,
  evaluateAdaptiveCompletion,
} from '../practiceAssignmentService';
import { getQuestionById } from '../../data/questions/bank';

const makeDiagnostic = (weakSkills = []) => ({
  testId: 'test-1',
  score: { scaled: 580, raw: 26, total: 44 },
  skillAnalysis: {
    weakSkills: weakSkills.map(s => {
      const isString = typeof s === 'string';
      return {
        skillId: isString ? s : s.skillId,
        domain: isString ? 'algebra' : (s.domain || 'algebra'),
        testAccuracy: isString ? 30 : (s.accuracy ?? 30),
        primaryErrorType: isString ? 'conceptual_gap' : (s.errorType || 'conceptual_gap'),
      };
    }),
    strongSkills: [],
  },
});

// ── buildWeakSkillPayload ────────────────────────────────────────────────────

describe('buildWeakSkillPayload', () => {
  test('returns empty array when diagnostic has no skillAnalysis', () => {
    expect(buildWeakSkillPayload(null)).toEqual([]);
    expect(buildWeakSkillPayload({})).toEqual([]);
  });

  test('extracts weak skills sorted by priority (descending)', () => {
    const diag = makeDiagnostic([
      { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 20 },
      { skillId: 'pythagorean-theorem', domain: 'geometry', accuracy: 50 },
    ]);
    const result = buildWeakSkillPayload(diag);
    expect(result).toHaveLength(2);
    expect(result[0].skillId).toBe('slope-intercept-form');
    expect(result[0].priority).toBe(80);
    expect(result[1].skillId).toBe('pythagorean-theorem');
    expect(result[1].priority).toBe(50);
  });

  test('filters out entries without skillId', () => {
    const diag = makeDiagnostic([
      { skillId: 'factoring', domain: 'advanced-math', accuracy: 40 },
      { skillId: '', domain: 'algebra', accuracy: 25 },
    ]);
    const result = buildWeakSkillPayload(diag);
    expect(result).toHaveLength(1);
    expect(result[0].skillId).toBe('factoring');
  });
});

// ── generatePracticeAssignments ──────────────────────────────────────────────

describe('generatePracticeAssignments', () => {
  const defaultDiag = makeDiagnostic([
    { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 },
    { skillId: 'pythagorean-theorem', domain: 'geometry', accuracy: 30 },
    { skillId: 'finding-roots-factoring', domain: 'advanced-math', accuracy: 35 },
  ]);

  test('returns non-empty targetedQuestionIds and practiceAssignments', () => {
    const result = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 4,
      seed: 'user-123-2026-03-15',
    });
    expect(result.targetedQuestionIds.length).toBeGreaterThan(0);
    expect(result.practiceAssignments.length).toBeGreaterThan(0);
    expect(result.summary.totalAssigned).toBe(result.targetedQuestionIds.length);
  });

  test('generates at least MIN_TOTAL_QUESTIONS questions', () => {
    const result = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 1,
      seed: 'test-seed',
    });
    expect(result.targetedQuestionIds.length).toBeGreaterThanOrEqual(10);
  });

  test('assigns questions grouped by week', () => {
    const result = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 3,
      seed: 'week-test',
      questionsPerWeek: 5,
    });
    expect(result.practiceAssignments.length).toBeGreaterThan(0);
    result.practiceAssignments.forEach(wa => {
      expect(wa.weekNumber).toBeGreaterThan(0);
      expect(wa.questionIds.length).toBeLessThanOrEqual(5);
      expect(wa.count).toBe(wa.questionIds.length);
      expect(wa.difficultyBreakdown).toBeDefined();
      expect(wa.domainBreakdown).toBeDefined();
    });
  });

  test('contains no duplicate question IDs', () => {
    const result = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 6,
      seed: 'dedupe-test',
      questionsPerWeek: 10,
    });
    const ids = result.targetedQuestionIds;
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('excludes specified IDs', () => {
    const firstRun = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 2,
      seed: 'exclude-test',
    });
    const toExclude = firstRun.targetedQuestionIds.slice(0, 5);
    const secondRun = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 2,
      seed: 'exclude-test',
      excludeIds: toExclude,
    });
    const overlap = secondRun.targetedQuestionIds.filter(id => toExclude.includes(id));
    expect(overlap).toEqual([]);
  });

  test('deterministic — same seed produces same assignment', () => {
    const a = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 4,
      seed: 'stable-seed-42',
    });
    const b = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 4,
      seed: 'stable-seed-42',
    });
    expect(a.targetedQuestionIds).toEqual(b.targetedQuestionIds);
  });

  test('different seeds produce different assignments', () => {
    const a = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 4,
      seed: 'seed-alpha',
    });
    const b = generatePracticeAssignments({
      diagnostic: defaultDiag,
      weekCount: 4,
      seed: 'seed-beta',
    });
    const sameOrder = a.targetedQuestionIds.every((id, i) => id === b.targetedQuestionIds[i]);
    expect(sameOrder).toBe(false);
  });

  test('fills from domain fallback when skill pool is small', () => {
    const narrowDiag = makeDiagnostic([
      { skillId: 'circle-equation', domain: 'geometry', accuracy: 10 },
    ]);
    const result = generatePracticeAssignments({
      diagnostic: narrowDiag,
      weekCount: 4,
      seed: 'fallback-test',
    });
    expect(result.targetedQuestionIds.length).toBeGreaterThanOrEqual(15);
  });

  test('handles empty diagnostic gracefully', () => {
    const result = generatePracticeAssignments({
      diagnostic: {},
      weekCount: 2,
      seed: 'empty-diag',
    });
    expect(result.targetedQuestionIds.length).toBeGreaterThanOrEqual(15);
    expect(result.practiceAssignments.length).toBeGreaterThan(0);
  });
});

// ── resolveAssignedQuestions ──────────────────────────────────────────────────

describe('resolveAssignedQuestions', () => {
  test('returns empty for non-array input', () => {
    expect(resolveAssignedQuestions(null)).toEqual({ resolved: [], staleCount: 0 });
    expect(resolveAssignedQuestions('bad')).toEqual({ resolved: [], staleCount: 0 });
  });

  test('resolves valid bank IDs and counts stale ones', () => {
    const result = generatePracticeAssignments({
      diagnostic: makeDiagnostic([{ skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 30 }]),
      weekCount: 1,
      seed: 'resolve-test',
    });
    const ids = [...result.targetedQuestionIds, 'nonexistent-id-123'];
    const { resolved, staleCount } = resolveAssignedQuestions(ids);
    expect(resolved.length).toBe(result.targetedQuestionIds.length);
    expect(staleCount).toBe(1);
  });
});

// ── Adaptive Queue Engine ────────────────────────────────────────────────────

describe('buildAdaptiveQueueSeed', () => {
  const defaultDiag = makeDiagnostic([
    { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 },
    { skillId: 'pythagorean-theorem', domain: 'geometry', accuracy: 30 },
  ]);

  test('produces pool with difficulty buckets', () => {
    const seed = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'adapt-1' });
    expect(seed.poolIds.length).toBeGreaterThan(0);
    expect(seed.byDifficulty).toBeDefined();
    expect(seed.byDifficulty.easy).toBeDefined();
    expect(seed.byDifficulty.medium).toBeDefined();
    expect(seed.byDifficulty.hard).toBeDefined();
    const bucketTotal = seed.byDifficulty.easy.length + seed.byDifficulty.medium.length + seed.byDifficulty.hard.length;
    expect(bucketTotal).toBe(seed.poolIds.length);
  });

  test('carries weak skill and domain info', () => {
    const seed = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'adapt-2' });
    expect(seed.weakSkillIds).toEqual(expect.arrayContaining(['slope-intercept-form', 'pythagorean-theorem']));
    expect(seed.weakDomains.length).toBeGreaterThan(0);
  });

  test('deterministic — same seed same pool', () => {
    const a = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'fixed' });
    const b = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'fixed' });
    expect(a.poolIds).toEqual(b.poolIds);
  });

  test('different seed different order', () => {
    const a = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'seed-A' });
    const b = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'seed-B' });
    const sameOrder = a.poolIds.every((id, i) => id === b.poolIds[i]);
    expect(sameOrder).toBe(false);
  });

  test('all pool IDs resolve to MCQ questions', () => {
    const seed = buildAdaptiveQueueSeed({ diagnostic: defaultDiag, seed: 'mcq-check' });
    seed.poolIds.forEach(id => {
      const { resolved } = resolveAssignedQuestions([id]);
      expect(resolved.length).toBe(1);
      expect(resolved[0].choices.length).toBeGreaterThanOrEqual(2);
    });
  });
});

describe('adaptive session lifecycle', () => {
  const diag = makeDiagnostic([
    { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 },
    { skillId: 'pythagorean-theorem', domain: 'geometry', accuracy: 30 },
    { skillId: 'finding-roots-factoring', domain: 'advanced-math', accuracy: 35 },
  ]);
  const seed = buildAdaptiveQueueSeed({ diagnostic: diag, seed: 'lifecycle' });

  test('createAdaptiveSessionState returns correct initial state', () => {
    const state = createAdaptiveSessionState(seed);
    expect(state.cursor).toBe(0);
    expect(state.currentDifficulty).toBe('easy');
    expect(state.streak).toBe(0);
    expect(state.answered).toHaveLength(0);
    expect(state.correct).toBe(0);
    expect(state.incorrect).toBe(0);
    expect(state.retryQueue).toHaveLength(0);
    expect(state.seenIds).toBeInstanceOf(Set);
    expect(state.sessionLength).toBe(seed.sessionLength);
  });

  test('getNextAdaptiveQuestion returns MCQ question', () => {
    const state = createAdaptiveSessionState(seed);
    const { question, isComplete } = getNextAdaptiveQuestion(seed, state);
    expect(isComplete).toBe(false);
    expect(question).not.toBeNull();
    expect(question.choices.length).toBeGreaterThanOrEqual(2);
  });

  test('applyAdaptiveResult tracks correct answer and increments streak', () => {
    const state = createAdaptiveSessionState(seed);
    const { question } = getNextAdaptiveQuestion(seed, state);
    const next = applyAdaptiveResult(state, question.id, true);
    expect(next.correct).toBe(1);
    expect(next.streak).toBe(1);
    expect(next.seenIds.has(question.id)).toBe(true);
    expect(next.answered).toHaveLength(1);
  });

  test('difficulty steps up after consecutive correct answers', () => {
    let state = createAdaptiveSessionState(seed);
    expect(state.currentDifficulty).toBe('easy');

    for (let i = 0; i < 2; i++) {
      const { question } = getNextAdaptiveQuestion(seed, state);
      state = applyAdaptiveResult(state, question.id, true);
    }
    expect(state.currentDifficulty).toBe('medium');
  });

  test('difficulty steps down after incorrect answer', () => {
    let state = createAdaptiveSessionState(seed);
    // First step up to medium
    for (let i = 0; i < 2; i++) {
      const { question } = getNextAdaptiveQuestion(seed, state);
      state = applyAdaptiveResult(state, question.id, true);
    }
    expect(state.currentDifficulty).toBe('medium');

    // One wrong answer should step back down
    const { question } = getNextAdaptiveQuestion(seed, state);
    state = applyAdaptiveResult(state, question.id, false);
    expect(state.currentDifficulty).toBe('easy');
  });

  test('missed question is scheduled for retry', () => {
    let state = createAdaptiveSessionState(seed);
    const { question } = getNextAdaptiveQuestion(seed, state);
    state = applyAdaptiveResult(state, question.id, false);
    expect(state.retryQueue.length).toBe(1);
    expect(state.retryQueue[0].id).toBe(question.id);
    expect(state.retryQueue[0].serveAt).toBeGreaterThan(state.answered.length);
  });

  test('session completes after sessionLength answers', () => {
    let state = createAdaptiveSessionState(seed);
    for (let i = 0; i < state.sessionLength; i++) {
      const { question, isComplete } = getNextAdaptiveQuestion(seed, state);
      if (isComplete || !question) break;
      state = applyAdaptiveResult(state, question.id, true);
    }
    const { isComplete } = getNextAdaptiveQuestion(seed, state);
    expect(isComplete).toBe(true);
  });

  test('no duplicate questions served in a session', () => {
    let state = createAdaptiveSessionState(seed);
    const served = new Set();
    for (let i = 0; i < state.sessionLength; i++) {
      const { question, isComplete, isRetry } = getNextAdaptiveQuestion(seed, state);
      if (isComplete || !question) break;
      if (!isRetry) {
        expect(served.has(question.id)).toBe(false);
        served.add(question.id);
      }
      state = applyAdaptiveResult(state, question.id, i % 2 === 0, isRetry);
    }
  });
});

describe('adaptive state serialization', () => {
  test('round-trips through serialize/deserialize', () => {
    const diag = makeDiagnostic([{ skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 }]);
    const seed = buildAdaptiveQueueSeed({ diagnostic: diag, seed: 'ser-test' });
    let state = createAdaptiveSessionState(seed);
    const { question } = getNextAdaptiveQuestion(seed, state);
    state = applyAdaptiveResult(state, question.id, true);

    const serialized = serializeAdaptiveState(state);
    expect(Array.isArray(serialized.seenIds)).toBe(true);

    const restored = deserializeAdaptiveState(serialized);
    expect(restored.seenIds).toBeInstanceOf(Set);
    expect(restored.seenIds.has(question.id)).toBe(true);
    expect(restored.correct).toBe(1);
  });

  test('preserves completion fields through round-trip', () => {
    const diag = makeDiagnostic([{ skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 }]);
    const seed = buildAdaptiveQueueSeed({ diagnostic: diag, seed: 'completion-rt' });
    let state = createAdaptiveSessionState(seed);
    state.isCompleted = true;
    state.completedAt = '2026-03-15T12:00:00Z';
    state.sessionsCompleted = 2;

    const serialized = serializeAdaptiveState(state);
    const restored = deserializeAdaptiveState(serialized);
    expect(restored.isCompleted).toBe(true);
    expect(restored.completedAt).toBe('2026-03-15T12:00:00Z');
    expect(restored.sessionsCompleted).toBe(2);
    expect(restored.targetQuestions).toBe(seed.targetQuestions);
    expect(restored.minMasteryPercent).toBe(seed.minMasteryPercent);
  });

  test('deserializer provides defaults for missing completion fields', () => {
    const restored = deserializeAdaptiveState({ seenIds: [], answered: [], retryQueue: [] });
    expect(restored.sessionsCompleted).toBe(0);
    expect(restored.isCompleted).toBe(false);
    expect(restored.completedAt).toBeNull();
    expect(restored.targetQuestions).toBe(15);
    expect(restored.minMasteryPercent).toBe(80);
  });
});

describe('evaluateAdaptiveCompletion', () => {
  test('returns not complete when nothing answered', () => {
    const result = evaluateAdaptiveCompletion(null);
    expect(result.isComplete).toBe(false);
    expect(result.mastery).toBe(0);
  });

  test('not complete when target met but mastery not met', () => {
    const state = {
      answered: Array(15).fill({ id: 'q', correct: false }),
      correct: 5,
      incorrect: 10,
      targetQuestions: 15,
      minMasteryPercent: 80,
    };
    const result = evaluateAdaptiveCompletion(state);
    expect(result.meetsTarget).toBe(true);
    expect(result.meetsMastery).toBe(false);
    expect(result.isComplete).toBe(false);
    expect(result.mastery).toBe(33);
  });

  test('not complete when mastery met but target not met', () => {
    const state = {
      answered: Array(5).fill({ id: 'q', correct: true }),
      correct: 5,
      incorrect: 0,
      targetQuestions: 15,
      minMasteryPercent: 80,
    };
    const result = evaluateAdaptiveCompletion(state);
    expect(result.meetsTarget).toBe(false);
    expect(result.meetsMastery).toBe(true);
    expect(result.isComplete).toBe(false);
  });

  test('complete when both target and mastery met', () => {
    const state = {
      answered: Array(15).fill({ id: 'q', correct: true }),
      correct: 13,
      incorrect: 2,
      targetQuestions: 15,
      minMasteryPercent: 80,
    };
    const result = evaluateAdaptiveCompletion(state);
    expect(result.meetsTarget).toBe(true);
    expect(result.meetsMastery).toBe(true);
    expect(result.isComplete).toBe(true);
    expect(result.mastery).toBe(87);
  });

  test('complete at exact 80% mastery boundary', () => {
    const state = {
      answered: Array(15).fill({ id: 'q', correct: true }),
      correct: 12,
      incorrect: 3,
      targetQuestions: 15,
      minMasteryPercent: 80,
    };
    const result = evaluateAdaptiveCompletion(state);
    expect(result.mastery).toBe(80);
    expect(result.isComplete).toBe(true);
  });
});

describe('resume from persisted state', () => {
  const diag = makeDiagnostic([
    { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 },
    { skillId: 'pythagorean-theorem', domain: 'geometry', accuracy: 30 },
  ]);
  const seed = buildAdaptiveQueueSeed({ diagnostic: diag, seed: 'resume-test' });

  test('resumed session continues from where it left off', () => {
    let state = createAdaptiveSessionState(seed);

    // Answer 3 questions
    for (let i = 0; i < 3; i++) {
      const { question } = getNextAdaptiveQuestion(seed, state);
      state = applyAdaptiveResult(state, question.id, true);
    }
    expect(state.answered).toHaveLength(3);
    expect(state.correct).toBe(3);

    // Serialize, as if persisted to Firestore
    const persisted = serializeAdaptiveState(state);

    // Deserialize, as if loaded on page reload
    const restored = deserializeAdaptiveState(persisted);
    expect(restored.answered).toHaveLength(3);
    expect(restored.correct).toBe(3);
    expect(restored.seenIds.size).toBe(3);

    // Continue session — next question should be new
    const { question: nextQ, isComplete } = getNextAdaptiveQuestion(seed, restored);
    expect(isComplete).toBe(false);
    expect(nextQ).not.toBeNull();
    expect(restored.seenIds.has(nextQ.id)).toBe(false);
  });

  test('queue seed carries completion policy fields', () => {
    expect(seed.targetQuestions).toBe(15);
    expect(seed.minMasteryPercent).toBe(80);
  });

  test('initial state inherits completion policy from seed', () => {
    const state = createAdaptiveSessionState(seed);
    expect(state.targetQuestions).toBe(15);
    expect(state.minMasteryPercent).toBe(80);
    expect(state.isCompleted).toBe(false);
    expect(state.completedAt).toBeNull();
    expect(state.sessionsCompleted).toBe(0);
  });
});

// ── buildDomainAdaptiveQueueSeed ─────────────────────────────────────────────

describe('buildDomainAdaptiveQueueSeed', () => {
  test('returns null when no domain is provided', () => {
    expect(buildDomainAdaptiveQueueSeed({})).toBeNull();
    expect(buildDomainAdaptiveQueueSeed({ enforcedDomain: '' })).toBeNull();
  });

  test('builds a pool for a specific domain', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'domain-test' });
    expect(seed).not.toBeNull();
    expect(seed.poolIds.length).toBeGreaterThan(0);
    expect(seed.enforcedDomain).toBe('algebra');
    expect(seed.weakDomains).toEqual(['algebra']);
  });

  test('all pool IDs are MCQ-only', () => {
    const { getQuestionById } = require('../../data/questions/bank');
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'geometry', seed: 'mcq-check' });
    seed.poolIds.forEach(id => {
      const q = getQuestionById(id);
      expect(q).not.toBeNull();
      expect(Array.isArray(q.choices) && q.choices.length >= 2).toBe(true);
    });
  });

  test('deterministic with same seed', () => {
    const a = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'det-test' });
    const b = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'det-test' });
    expect(a.poolIds).toEqual(b.poolIds);
    expect(a.byDifficulty).toEqual(b.byDifficulty);
  });

  test('different domains produce different pools', () => {
    const algebra = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'diff-dom' });
    const geo = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'geometry', seed: 'diff-dom' });
    expect(algebra.poolIds).not.toEqual(geo.poolIds);
  });

  test('has difficulty buckets like generic adaptive seed', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'problem-solving', seed: 'buckets' });
    expect(seed.byDifficulty).toBeDefined();
    expect(seed.byDifficulty.easy).toBeDefined();
    expect(seed.byDifficulty.medium).toBeDefined();
    expect(seed.byDifficulty.hard).toBeDefined();
    const totalInBuckets = seed.byDifficulty.easy.length + seed.byDifficulty.medium.length + seed.byDifficulty.hard.length;
    expect(totalInBuckets).toBe(seed.poolIds.length);
  });

  test('carries standard completion policy fields', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'policy' });
    expect(seed.targetQuestions).toBe(15);
    expect(seed.minMasteryPercent).toBe(80);
    expect(seed.sessionLength).toBe(15);
  });

  test('works with adaptive session lifecycle', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'lifecycle' });
    const state = createAdaptiveSessionState(seed);
    const { question, isComplete } = getNextAdaptiveQuestion(seed, state);
    expect(isComplete).toBe(false);
    expect(question).not.toBeNull();

    const next = applyAdaptiveResult(state, question.id, true);
    expect(next.answered).toHaveLength(1);
    expect(next.correct).toBe(1);
  });

  test('falls back to other domains when enforced domain has few questions', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'geometry', seed: 'fallback', poolSize: 200 });
    expect(seed.poolIds.length).toBeGreaterThan(0);
  });
});

// ── normalizeDomain ──────────────────────────────────────────────────────────

describe('normalizeDomain', () => {
  test('normalizes canonical domain IDs', () => {
    expect(normalizeDomain('algebra')).toBe('algebra');
    expect(normalizeDomain('problem-solving')).toBe('problem-solving');
    expect(normalizeDomain('advanced-math')).toBe('advanced-math');
    expect(normalizeDomain('geometry')).toBe('geometry');
  });

  test('normalizes common aliases', () => {
    expect(normalizeDomain('Heart of Algebra')).toBe('algebra');
    expect(normalizeDomain('Problem Solving and Data Analysis')).toBe('problem-solving');
    expect(normalizeDomain('Passport to Advanced Math')).toBe('advanced-math');
    expect(normalizeDomain('Geometry & Trigonometry')).toBe('geometry');
    expect(normalizeDomain('Additional Topics in Math')).toBe('geometry');
  });

  test('normalizes case-insensitively', () => {
    expect(normalizeDomain('ALGEBRA')).toBe('algebra');
    expect(normalizeDomain('Problem-Solving')).toBe('problem-solving');
    expect(normalizeDomain('GEOMETRY')).toBe('geometry');
  });

  test('returns null for invalid input', () => {
    expect(normalizeDomain(null)).toBeNull();
    expect(normalizeDomain('')).toBeNull();
    expect(normalizeDomain(undefined)).toBeNull();
    expect(normalizeDomain(123)).toBeNull();
  });

  test('returns null for unrecognized domains', () => {
    expect(normalizeDomain('english')).toBeNull();
    expect(normalizeDomain('reading')).toBeNull();
  });

  test('partial match works for domains containing canonical IDs', () => {
    expect(normalizeDomain('some algebra topic')).toBe('algebra');
    expect(normalizeDomain('geometry stuff')).toBe('geometry');
  });
});

// ── CANONICAL_DOMAINS ────────────────────────────────────────────────────────

describe('CANONICAL_DOMAINS', () => {
  test('contains all four SAT math domains', () => {
    expect(CANONICAL_DOMAINS).toEqual(['algebra', 'problem-solving', 'advanced-math', 'geometry']);
  });
});

// ── getDomainAssignmentPreview ───────────────────────────────────────────────

describe('getDomainAssignmentPreview', () => {
  test('returns questions for a valid domain', () => {
    const result = getDomainAssignmentPreview('algebra', { seed: 'test-preview' });
    expect(result.domain).toBe('algebra');
    expect(result.questions.length).toBeGreaterThan(0);
    expect(result.questions.length).toBeLessThanOrEqual(3);
    expect(result.total).toBeGreaterThan(0);
  });

  test('all preview questions are MCQ-only', () => {
    for (const domain of CANONICAL_DOMAINS) {
      const result = getDomainAssignmentPreview(domain, { seed: 'mcq-check', count: 5 });
      result.questions.forEach(q => {
        expect(Array.isArray(q.choices) && q.choices.length >= 2).toBe(true);
      });
    }
  });

  test('deterministic with same seed', () => {
    const a = getDomainAssignmentPreview('algebra', { seed: 'det-seed' });
    const b = getDomainAssignmentPreview('algebra', { seed: 'det-seed' });
    expect(a.questions.map(q => q.id)).toEqual(b.questions.map(q => q.id));
    expect(a.total).toBe(b.total);
  });

  test('normalizes input domain', () => {
    const a = getDomainAssignmentPreview('Heart of Algebra', { seed: 'norm' });
    const b = getDomainAssignmentPreview('algebra', { seed: 'norm' });
    expect(a.domain).toBe('algebra');
    expect(a.questions.map(q => q.id)).toEqual(b.questions.map(q => q.id));
  });

  test('returns empty for invalid domain', () => {
    const result = getDomainAssignmentPreview('english', { seed: 'bad' });
    expect(result.domain).toBeNull();
    expect(result.questions).toEqual([]);
    expect(result.total).toBe(0);
  });

  test('returns empty for null/undefined domain', () => {
    expect(getDomainAssignmentPreview(null).questions).toEqual([]);
    expect(getDomainAssignmentPreview(undefined).questions).toEqual([]);
  });

  test('respects count parameter', () => {
    const result = getDomainAssignmentPreview('algebra', { seed: 'count-test', count: 1 });
    expect(result.questions.length).toBe(1);
  });

  test('all four canonical domains have questions', () => {
    for (const domain of CANONICAL_DOMAINS) {
      const result = getDomainAssignmentPreview(domain, { seed: 'all-domains' });
      expect(result.total).toBeGreaterThan(0);
      expect(result.questions.length).toBeGreaterThan(0);
    }
  });

  test('different domains produce different previews', () => {
    const algebra = getDomainAssignmentPreview('algebra', { seed: 'diff' });
    const geo = getDomainAssignmentPreview('geometry', { seed: 'diff' });
    expect(algebra.questions.map(q => q.id)).not.toEqual(geo.questions.map(q => q.id));
  });
});

describe('adaptive test-style UI contract', () => {
  const diag = {
    testId: 'ui-contract-test',
    score: { scaled: 540, raw: 22, total: 44 },
    skillAnalysis: {
      weakSkills: [
        { skillId: 'linear-equations', domain: 'algebra', testAccuracy: 25, primaryErrorType: 'conceptual_gap' },
        { skillId: 'quadratic-factoring', domain: 'advanced-math', testAccuracy: 30, primaryErrorType: 'procedural' },
      ],
    },
  };

  test('domain adaptive queue provides MCQ-only pool for shell', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'ui-test' });
    expect(seed.poolIds.length).toBeGreaterThan(0);
    const state = createAdaptiveSessionState(seed);
    const { question } = getNextAdaptiveQuestion(seed, state);
    expect(question).toBeTruthy();
    expect(Array.isArray(question.choices) && question.choices.length >= 2).toBe(true);
  });

  test('adaptive session tracks answered/correct for progress bar', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'progress-test' });
    let state = createAdaptiveSessionState(seed);
    const { question: q1 } = getNextAdaptiveQuestion(seed, state);
    state = applyAdaptiveResult(state, q1.id, true, false);
    expect(state.answered.length).toBe(1);
    expect(state.correct).toBe(1);
    expect(state.incorrect).toBe(0);
  });

  test('session state has targetQuestions and minMasteryPercent for completion UI', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'geometry', seed: 'policy-test' });
    const state = createAdaptiveSessionState(seed);
    expect(state.targetQuestions).toBeGreaterThan(0);
    expect(state.minMasteryPercent).toBeGreaterThan(0);
  });

  test('evaluateAdaptiveCompletion returns structured result for results screen', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'eval-test' });
    let state = createAdaptiveSessionState(seed);
    const completion = evaluateAdaptiveCompletion(state);
    expect(completion).toHaveProperty('isComplete');
    expect(completion).toHaveProperty('mastery');
    expect(completion).toHaveProperty('answeredCount');
    expect(completion).toHaveProperty('targetQuestions');
    expect(completion).toHaveProperty('minMasteryPercent');
    expect(completion).toHaveProperty('meetsTarget');
    expect(completion).toHaveProperty('meetsMastery');
  });

  test('serialize/deserialize preserves state for navigation between questions', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'nav-test' });
    let state = createAdaptiveSessionState(seed);
    const { question: q1 } = getNextAdaptiveQuestion(seed, state);
    state = applyAdaptiveResult(state, q1.id, true, false);

    const serialized = serializeAdaptiveState(state);
    const restored = deserializeAdaptiveState(serialized);
    expect(restored.answered.length).toBe(1);
    expect(restored.correct).toBe(1);
    expect(restored.seenIds.has(q1.id)).toBe(true);
  });

  test('adaptive queue delivers questions one-by-one for test-style flow', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'algebra', seed: 'flow-test' });
    let state = createAdaptiveSessionState(seed);
    const served = [];
    for (let i = 0; i < 5; i++) {
      const { question, isComplete } = getNextAdaptiveQuestion(seed, state);
      if (!question || isComplete) break;
      served.push(question.id);
      state = applyAdaptiveResult(state, question.id, i % 2 === 0, false);
    }
    expect(served.length).toBeGreaterThanOrEqual(3);
    expect(new Set(served).size).toBe(served.length);
  });

  test('all served questions have choices array for MCQ rendering', () => {
    const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: 'advanced-math', seed: 'mcq-render' });
    let state = createAdaptiveSessionState(seed);
    for (let i = 0; i < 5; i++) {
      const { question, isComplete } = getNextAdaptiveQuestion(seed, state);
      if (!question || isComplete) break;
      expect(Array.isArray(question.choices)).toBe(true);
      expect(question.choices.length).toBeGreaterThanOrEqual(2);
      question.choices.forEach(c => {
        expect(c).toHaveProperty('id');
      });
      state = applyAdaptiveResult(state, question.id, true, false);
    }
  });

  test('domain CTA payload contract: enforcedDomain normalizes correctly', () => {
    for (const domain of CANONICAL_DOMAINS) {
      const normalized = normalizeDomain(domain);
      expect(normalized).toBe(domain);
      const seed = buildDomainAdaptiveQueueSeed({ enforcedDomain: normalized, seed: 'cta-' + domain });
      expect(seed.enforcedDomain).toBe(domain);
      expect(seed.poolIds.length).toBeGreaterThan(0);
    }
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// buildStrengthFocusAssignments — fixed domain MCQ bundles
// ═══════════════════════════════════════════════════════════════════════════

describe('buildStrengthFocusAssignments', () => {
  const diagnostic = {
    testId: 'fix-1',
    score: { scaled: 550, raw: 24, total: 44 },
    skillAnalysis: {
      weakSkills: [
        { skillId: 'linear-equations', domain: 'algebra', testAccuracy: 20, primaryErrorType: 'conceptual_gap' },
        { skillId: 'scatterplots', domain: 'problem-solving', testAccuracy: 35, primaryErrorType: 'procedural' },
      ],
    },
  };

  test('returns an entry for every canonical domain', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'canon-test' });
    for (const domain of CANONICAL_DOMAINS) {
      expect(result).toHaveProperty(domain);
      expect(result[domain].domain).toBe(domain);
    }
  });

  test('all assigned question IDs are MCQ-only', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'mcq-test' });
    for (const domain of CANONICAL_DOMAINS) {
      const ids = result[domain].questionIds;
      for (const id of ids) {
        const q = getQuestionById(id);
        expect(q).toBeTruthy();
        expect(Array.isArray(q.choices)).toBe(true);
        expect(q.choices.length).toBeGreaterThanOrEqual(2);
      }
    }
  });

  test('output is deterministic for the same seed', () => {
    const a = buildStrengthFocusAssignments({ diagnostic, seed: 'det-test' });
    const b = buildStrengthFocusAssignments({ diagnostic, seed: 'det-test' });
    for (const domain of CANONICAL_DOMAINS) {
      expect(a[domain].questionIds).toEqual(b[domain].questionIds);
    }
  });

  test('weak domains are tagged as focus, others as strength', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'source-test' });
    expect(result.algebra.source).toBe('focus');
    expect(result['problem-solving'].source).toBe('focus');
    expect(result.geometry.source).toBe('strength');
    expect(result['advanced-math'].source).toBe('strength');
  });

  test('count matches questionIds length', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'count-test' });
    for (const domain of CANONICAL_DOMAINS) {
      expect(result[domain].count).toBe(result[domain].questionIds.length);
    }
  });

  test('no duplicate IDs across domains', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'dup-test' });
    const allIds = [];
    for (const domain of CANONICAL_DOMAINS) {
      allIds.push(...result[domain].questionIds);
    }
    expect(new Set(allIds).size).toBe(allIds.length);
  });

  test('respects countPerDomain parameter', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'limit-test', countPerDomain: 5 });
    for (const domain of CANONICAL_DOMAINS) {
      expect(result[domain].questionIds.length).toBeLessThanOrEqual(5);
    }
  });

  test('respects excludeIds parameter', () => {
    const first = buildStrengthFocusAssignments({ diagnostic, seed: 'excl-test' });
    const excludeIds = first.algebra.questionIds.slice(0, 3);
    const second = buildStrengthFocusAssignments({ diagnostic, seed: 'excl-test', excludeIds });
    for (const id of excludeIds) {
      expect(second.algebra.questionIds).not.toContain(id);
    }
  });

  test('different seed produces different assignment', () => {
    const a = buildStrengthFocusAssignments({ diagnostic, seed: 'seed-A' });
    const b = buildStrengthFocusAssignments({ diagnostic, seed: 'seed-B' });
    const allSame = CANONICAL_DOMAINS.every(d =>
      JSON.stringify(a[d].questionIds) === JSON.stringify(b[d].questionIds)
    );
    expect(allSame).toBe(false);
  });

  test('CTA contract: questionIds payload for fixed assigned launch', () => {
    const result = buildStrengthFocusAssignments({ diagnostic, seed: 'cta-contract' });
    for (const domain of CANONICAL_DOMAINS) {
      const entry = result[domain];
      expect(Array.isArray(entry.questionIds)).toBe(true);
      expect(entry.questionIds.length).toBeGreaterThan(0);
      expect(typeof entry.source).toBe('string');
      expect(['focus', 'strength']).toContain(entry.source);
    }
  });
});
