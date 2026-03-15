import {
  resolveAssignedQuestions,
  generatePracticeAssignments,
} from '../practiceAssignmentService';

const makeDiagnostic = (weakSkills = []) => ({
  testId: 'flow-test',
  score: { scaled: 560, raw: 24, total: 44 },
  skillAnalysis: {
    weakSkills: weakSkills.map(s => ({
      skillId: typeof s === 'string' ? s : s.skillId,
      domain: typeof s === 'string' ? 'algebra' : (s.domain || 'algebra'),
      testAccuracy: typeof s === 'string' ? 25 : (s.accuracy ?? 25),
      primaryErrorType: 'conceptual_gap',
    })),
    strongSkills: [],
  },
});

// ── resolveAssignedQuestions (MCQ readiness) ─────────────────────────────────

describe('resolveAssignedQuestions — MCQ readiness', () => {
  const diag = makeDiagnostic([
    { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 20 },
    { skillId: 'pythagorean-theorem', domain: 'geometry', accuracy: 30 },
  ]);
  let assignedIds;

  beforeAll(() => {
    const result = generatePracticeAssignments({
      diagnostic: diag,
      weekCount: 2,
      seed: 'mcq-flow-test',
    });
    assignedIds = result.targetedQuestionIds;
  });

  test('resolved questions have id, question stem, and correctAnswer', () => {
    const { resolved } = resolveAssignedQuestions(assignedIds);
    expect(resolved.length).toBeGreaterThan(0);
    resolved.forEach(q => {
      expect(typeof q.id).toBe('string');
      expect(q.id.length).toBeGreaterThan(0);
      expect(typeof q.question).toBe('string');
      expect(q.question.length).toBeGreaterThan(0);
      expect(q.correctAnswer).toBeDefined();
    });
  });

  test('all resolved questions have a choices array (MCQ format)', () => {
    const { resolved } = resolveAssignedQuestions(assignedIds);
    const withChoices = resolved.filter(q => Array.isArray(q.choices) && q.choices.length >= 2);
    expect(withChoices.length).toBe(resolved.length);
  });

  test('correctAnswer matches a choice id for each question', () => {
    const { resolved } = resolveAssignedQuestions(assignedIds);
    resolved.forEach(q => {
      if (!q.choices) return;
      const choiceIds = q.choices.map(c => c.id);
      expect(choiceIds).toContain(q.correctAnswer);
    });
  });

  test('stale IDs are counted and excluded from resolved', () => {
    const ids = [...assignedIds.slice(0, 3), 'fake-id-xyz-1', 'fake-id-xyz-2'];
    const { resolved, staleCount } = resolveAssignedQuestions(ids);
    expect(staleCount).toBe(2);
    expect(resolved.length).toBe(3);
  });
});

// ── practiceAssignments weekly shape ─────────────────────────────────────────

describe('practiceAssignments weekly bundle shape', () => {
  const diag = makeDiagnostic([
    { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 20 },
    { skillId: 'finding-roots-factoring', domain: 'advanced-math', accuracy: 35 },
  ]);

  test('each week bundle has valid questionIds resolvable from the bank', () => {
    const result = generatePracticeAssignments({
      diagnostic: diag,
      weekCount: 3,
      seed: 'bundle-shape',
      questionsPerWeek: 5,
    });

    result.practiceAssignments.forEach(wa => {
      expect(wa.weekNumber).toBeGreaterThan(0);
      expect(wa.questionIds.length).toBeGreaterThan(0);
      const { resolved, staleCount } = resolveAssignedQuestions(wa.questionIds);
      expect(staleCount).toBe(0);
      expect(resolved.length).toBe(wa.questionIds.length);
      resolved.forEach(q => {
        expect(q).toBeDefined();
        expect(q.id).toBeDefined();
        expect(q.correctAnswer).toBeDefined();
        expect(Array.isArray(q.choices)).toBe(true);
      });
    });
  });

  test('all weekly questionIds are collectively unique', () => {
    const result = generatePracticeAssignments({
      diagnostic: diag,
      weekCount: 4,
      seed: 'unique-weeks',
    });
    const allIds = result.practiceAssignments.flatMap(wa => wa.questionIds);
    expect(new Set(allIds).size).toBe(allIds.length);
  });

  test('week bundles contain difficulty and domain breakdowns', () => {
    const result = generatePracticeAssignments({
      diagnostic: diag,
      weekCount: 2,
      seed: 'breakdown-test',
    });
    result.practiceAssignments.forEach(wa => {
      expect(wa.difficultyBreakdown).toBeDefined();
      expect(wa.domainBreakdown).toBeDefined();
      expect(wa.count).toBe(wa.questionIds.length);
    });
  });
});

// ── Assigned-practice launch contract ────────────────────────────────────────

describe('assigned-practice launch contract', () => {
  test('resolveAssignedQuestions returns objects the MCQ renderer can consume', () => {
    const diag = makeDiagnostic([
      { skillId: 'slope-intercept-form', domain: 'algebra', accuracy: 25 },
    ]);
    const { targetedQuestionIds } = generatePracticeAssignments({
      diagnostic: diag,
      weekCount: 1,
      seed: 'render-test',
    });
    const { resolved } = resolveAssignedQuestions(targetedQuestionIds);

    resolved.forEach(q => {
      expect(q).toHaveProperty('id');
      expect(q).toHaveProperty('question');
      expect(q).toHaveProperty('correctAnswer');
      expect(q).toHaveProperty('choices');
      q.choices.forEach(c => {
        expect(c).toHaveProperty('id');
        expect(c).toHaveProperty('text');
      });
    });
  });

  test('empty questionIds array resolves to empty', () => {
    const { resolved, staleCount } = resolveAssignedQuestions([]);
    expect(resolved).toEqual([]);
    expect(staleCount).toBe(0);
  });
});

// ── Artifact hydration precedence (unit-level contract) ──────────────────────

describe('artifact hydration precedence contract', () => {
  test('plan with practiceAssignments takes precedence when artifact pointer exists', () => {
    const legacyPlan = {
      weeks: [{ weekNumber: 1, activities: [] }],
    };
    const artifactPlan = {
      weeks: [{ weekNumber: 1, activities: [] }],
      practiceAssignments: [{ weekNumber: 1, questionIds: ['q1', 'q2'], count: 2 }],
      targetedQuestionIds: ['q1', 'q2'],
    };

    const shouldPreferArtifact = (artifactId, legacy, artifact) => {
      if (artifactId && artifact?.practiceAssignments?.length) return artifact;
      return legacy;
    };

    const picked = shouldPreferArtifact('art-001', legacyPlan, artifactPlan);
    expect(picked).toBe(artifactPlan);
    expect(picked.practiceAssignments).toHaveLength(1);
  });

  test('falls back to legacy when no artifact pointer', () => {
    const legacyPlan = {
      weeks: [{ weekNumber: 1, activities: [] }],
    };

    const shouldPreferArtifact = (artifactId, legacy, artifact) => {
      if (artifactId && artifact?.practiceAssignments?.length) return artifact;
      return legacy;
    };

    const picked = shouldPreferArtifact(null, legacyPlan, null);
    expect(picked).toBe(legacyPlan);
  });

  test('falls back to legacy when artifact has no assignments', () => {
    const legacyPlan = { weeks: [{ weekNumber: 1, activities: [] }] };
    const artifactPlan = { weeks: [{ weekNumber: 1, activities: [] }] };

    const shouldPreferArtifact = (artifactId, legacy, artifact) => {
      if (artifactId && artifact?.practiceAssignments?.length) return artifact;
      return legacy;
    };

    const picked = shouldPreferArtifact('art-002', legacyPlan, artifactPlan);
    expect(picked).toBe(legacyPlan);
  });
});
