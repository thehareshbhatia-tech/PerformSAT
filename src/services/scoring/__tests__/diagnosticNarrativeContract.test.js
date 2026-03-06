import { serializeForNarrative } from '../../diagnosticNarrativeService';

function buildReport(overrides = {}) {
  const base = {
    score: { raw: 30, total: 44, scaled: 650, target: 700, gap: 50, percentCorrect: 68 },
    questionAnalysis: buildQuestionAnalysis(),
    errorPatterns: {
      totalWrong: 14,
      summary: [
        { type: 'careless_error', label: 'Careless Mistake', description: 'A slip-up', count: 5, percentage: 36 },
        { type: 'conceptual_gap', label: 'Conceptual Gap', description: 'Concept unknown', count: 4, percentage: 29 },
        { type: 'time_pressure', label: 'Time Pressure', description: 'Ran out of time', count: 3, percentage: 21 },
        { type: 'procedural_error', label: 'Procedural Error', description: 'Process mistake', count: 2, percentage: 14 },
      ],
      dominantPattern: {
        type: 'careless_error', label: 'Careless Mistake', count: 5, percentage: 36,
        description: 'A slip-up',
      },
      counts: { careless_error: 5, conceptual_gap: 4, time_pressure: 3, procedural_error: 2 },
    },
    domainAnalysis: [
      { domain: 'algebra', total: 15, correct: 12, wrong: 3, accuracy: 80, displayName: 'Algebra', color: '#3b82f6', satWeight: 0.35, pointsAvailable: 30, errorTypes: { careless_error: 2 } },
      { domain: 'geometry', total: 7, correct: 4, wrong: 3, accuracy: 57, displayName: 'Geometry', color: '#f59e0b', satWeight: 0.15, pointsAvailable: 30, errorTypes: { conceptual_gap: 2 } },
    ],
    skillAnalysis: {
      weakSkills: [
        {
          skillId: 'factoring', name: 'Factoring', domain: 'advanced-math', testAccuracy: 25,
          correct: 1, total: 4, primaryErrorType: 'conceptual_gap',
          historicalMastery: 35, historicalAttempts: 12, trend: 'declining',
          modules: ['Module 3'], sections: ['Section A'],
        },
        {
          skillId: 'circle-area-circumference', name: 'Circle Area/Circumference', domain: 'geometry',
          testAccuracy: 33, correct: 1, total: 3, primaryErrorType: 'procedural_error',
          historicalMastery: 50, historicalAttempts: 8, trend: 'stable',
          modules: [], sections: [],
        },
      ],
      strongSkills: [
        { name: 'Linear Equations', testAccuracy: 90, trend: 'improving' },
      ],
    },
    scoreProjection: {
      currentScore: 650, targetScore: 700, gap: 50, questionsNeededForTarget: 5,
      quickWins: { count: 8, projectedGain: 70 },
      easyWins: { count: 3, projectedGain: 30, description: 'Fix 3 easy misses' },
    },
    difficultyAnalysis: {
      levels: {
        easy: { correct: 12, total: 15, accuracy: 80 },
        medium: { correct: 10, total: 15, accuracy: 67 },
        hard: { correct: 8, total: 14, accuracy: 57 },
      },
    },
    timeAnalysis: {
      avgTimePerQuestion: 60, avgCorrectTime: 55, avgIncorrectTime: 70,
      fadeEffect: 18, firstHalfAccuracy: 77, secondHalfAccuracy: 59,
      timeRelatedErrors: 3,
      insights: [{ type: 'warning', message: 'Accuracy dropped 18%' }],
    },
    stamina: {
      hasData: true, staminaScore: 65, rating: 'fair', dropoff: 18,
      message: 'Accuracy dropped 18% by test end.',
      quarters: [
        { label: 'Q1', accuracy: 82, avgTime: 55 },
        { label: 'Q2', accuracy: 77, avgTime: 58 },
        { label: 'Q3', accuracy: 68, avgTime: 62 },
        { label: 'Q4', accuracy: 64, avgTime: 70 },
      ],
    },
    answerPatterns: {
      hasPositionBias: false,
      biasWarning: null,
      answerChanges: { total: 3, changedToCorrect: 1, changedToWrong: 2, firstInstinctAccuracy: 33, advice: 'Trust first instinct' },
      elimination: { used: 5, correct: 3, accuracy: 60, insight: 'Reasonable usage' },
      totalAnswered: 44,
    },
    trendAnalysis: {
      hasHistory: true, trend: 'improving', scoreChange: 20,
      improvingSkills: ['Linear Equations'], decliningSkills: ['Factoring'],
      persistentWeaknesses: [{ skillId: 'factoring', name: 'Factoring', testCount: 3 }],
    },
    mistakeFingerprint: {
      archetype: 'precision_seeker', archetypeLabel: 'The Precision Seeker',
      archetypeDescription: 'You understand the material but lose points to mistakes.',
      traits: [{ trait: 'Late-test fatigue', severity: 'moderate', tip: 'Full-length tests' }],
    },
    confidenceInterval: {
      raw95: { low: 27, high: 33 }, raw80: { low: 28, high: 32 },
      scaled95: { low: 620, high: 680 }, scaled80: { low: 630, high: 670 },
      reliability: 'high', message: 'Score likely between 630 and 670',
    },
    learningVelocity: {
      hasData: true, velocity: 3.5, trend: 'strong', totalGain: 40,
      testsCompleted: 4, message: 'Gaining 3.5 pts/week',
    },
    rootCauseClusters: [
      {
        id: 'recurring-concept-gaps', label: 'Recurring Concept Gaps', severity: 'moderate',
        count: 4, description: '4 questions missed from concept gaps',
        questions: ['1-8', '1-10'], recurringSkills: [{ skillId: 'factoring', name: 'Factoring', count: 2 }],
      },
      {
        id: 'second-guessing-losses', label: 'Second-Guessing Losses', severity: 'moderate',
        count: 3, description: '3 wrong answers involved answer changes',
        questions: ['0-16', '0-18', '1-0'],
      },
    ],
    skillClusters: [
      {
        name: 'Slope Mastery', rootConcept: 'slope-mastery',
        failedSkills: ['slope-from-points', 'parallel-line-slope'],
        totalSkillsInFamily: 6, failRate: 33, severity: 'moderate',
        recommendation: 'Review core slope concepts', questionsAffected: 3,
      },
    ],
    timeAllocation: [
      { domain: 'algebra', timeSpent: 600, timePct: 35, accuracy: 80, questionCount: 15, efficiency: 120, isOverinvested: false },
      { domain: 'geometry', timeSpent: 500, timePct: 30, accuracy: 45, questionCount: 7, efficiency: 40, isOverinvested: true },
    ],
    prioritizedActions: [
      { title: 'Eliminate 5 careless mistakes', category: 'quick_win', estimatedGain: 50, description: 'You know these.' },
      { title: 'Fix time pressure', category: 'strategy', estimatedGain: 30, description: 'Practice pacing.' },
    ],
    percentile: 75,
    testId: 'test-1',
    testTitle: 'Practice Test 9',
    analyzedAt: new Date().toISOString(),
  };

  return { ...base, ...overrides };
}

function buildQuestionAnalysis() {
  const questions = [];
  for (let i = 0; i < 44; i++) {
    const isCorrect = i < 30;
    questions.push({
      key: `${Math.floor(i / 22)}-${i % 22}`,
      isCorrect,
      difficulty: i < 15 ? 'easy' : i < 30 ? 'medium' : 'hard',
      domain: ['algebra', 'problem-solving', 'advanced-math', 'geometry'][i % 4],
      skills: [['linear-equations', 'factoring', 'circle-area-circumference', 'function-notation'][i % 4]],
      skillNames: [['Linear Equations', 'Factoring', 'Circle Area', 'Function Notation'][i % 4]],
      timeSpent: 50 + i * 2,
      answerChangeCount: !isCorrect && i % 3 === 0 ? 1 : 0,
      answerChangeEvents: !isCorrect && i % 3 === 0 ? [{ from: 'A', to: 'B', timestamp: Date.now() }] : [],
      usedCalculator: !isCorrect && i % 4 === 0,
      markedForReview: !isCorrect && i % 2 === 0,
      eliminatedChoices: !isCorrect ? ['C', 'D'] : [],
      visits: isCorrect ? 1 : 2,
      timeVsDifficulty: 'normal',
      ...(isCorrect ? {} : {
        errorType: i % 3 === 0 ? 'careless_error' : i % 3 === 1 ? 'conceptual_gap' : 'time_pressure',
        reasoning: 'Test reasoning',
        confidence: 0.75,
      }),
    });
  }
  return questions;
}

describe('serializeForNarrative', () => {
  describe('Output shape', () => {
    it('contains all expected top-level keys', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      const expectedKeys = [
        'score', 'errorPatterns', 'domainAnalysis', 'skillAnalysis',
        'wrongQuestions', 'rootCauseClusters', 'skillClusters',
        'difficultyAnalysis', 'timeAnalysis', 'stamina', 'answerPatterns',
        'trendAnalysis', 'mistakeFingerprint', 'confidenceInterval',
        'learningVelocity', 'timeAllocation', 'prioritizedActions',
      ];

      expectedKeys.forEach(key => {
        expect(serialized).toHaveProperty(key);
      });
    });
  });

  describe('Wrong questions include behavior fields', () => {
    it('each wrongQuestions entry has all required behavior fields', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      expect(serialized.wrongQuestions.length).toBeGreaterThan(0);

      serialized.wrongQuestions.forEach(q => {
        expect(q).toHaveProperty('key');
        expect(q).toHaveProperty('difficulty');
        expect(q).toHaveProperty('domain');
        expect(q).toHaveProperty('skills');
        expect(q).toHaveProperty('skillNames');
        expect(q).toHaveProperty('errorType');
        expect(q).toHaveProperty('confidence');
        expect(q).toHaveProperty('reasoning');
        expect(q).toHaveProperty('timeSpent');
        expect(q).toHaveProperty('timeVsDifficulty');
        expect(q).toHaveProperty('answerChangeCount');
        expect(q).toHaveProperty('usedCalculator');
        expect(q).toHaveProperty('markedForReview');
        expect(q).toHaveProperty('eliminatedChoices');
      });
    });
  });

  describe('Skill analysis preserves historical data', () => {
    it('weakSkills entries include historicalMastery, historicalAttempts, trend', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      expect(serialized.skillAnalysis.weakSkills.length).toBeGreaterThan(0);

      serialized.skillAnalysis.weakSkills.forEach(s => {
        expect(s).toHaveProperty('historicalMastery');
        expect(s).toHaveProperty('historicalAttempts');
        expect(s).toHaveProperty('trend');
      });
    });

    it('historicalMastery is a number or null', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      serialized.skillAnalysis.weakSkills.forEach(s => {
        expect(s.historicalMastery === null || typeof s.historicalMastery === 'number').toBe(true);
      });
    });
  });

  describe('Root-cause clusters preserved', () => {
    it('rootCauseClusters items have id, label, severity, count, description', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      expect(serialized.rootCauseClusters.length).toBeGreaterThan(0);

      serialized.rootCauseClusters.forEach(c => {
        expect(c).toHaveProperty('id');
        expect(c).toHaveProperty('label');
        expect(c).toHaveProperty('severity');
        expect(c).toHaveProperty('count');
        expect(c).toHaveProperty('description');
      });
    });

    it('preserves recurring skills on concept-gap clusters', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      const conceptCluster = serialized.rootCauseClusters.find(c => c.id === 'recurring-concept-gaps');
      expect(conceptCluster).toBeDefined();
      expect(conceptCluster.recurringSkills).toBeDefined();
      expect(conceptCluster.recurringSkills.length).toBeGreaterThan(0);
    });
  });

  describe('Returns empty object for null report', () => {
    it('serializeForNarrative(null) returns {}', () => {
      expect(serializeForNarrative(null)).toEqual({});
    });

    it('serializeForNarrative(undefined) returns {}', () => {
      expect(serializeForNarrative(undefined)).toEqual({});
    });
  });

  describe('Stamina included when present', () => {
    it('serialized stamina includes staminaScore, rating, dropoff, quarters when hasData is true', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      expect(serialized.stamina).not.toBeNull();
      expect(serialized.stamina).toHaveProperty('staminaScore');
      expect(serialized.stamina).toHaveProperty('rating');
      expect(serialized.stamina).toHaveProperty('dropoff');
      expect(serialized.stamina).toHaveProperty('quarters');
    });

    it('stamina is null when hasData is false', () => {
      const report = buildReport({ stamina: { hasData: false } });
      const serialized = serializeForNarrative(report);
      expect(serialized.stamina).toBeNull();
    });

    it('quarters contain label, accuracy, avgTime', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      serialized.stamina.quarters.forEach(q => {
        expect(q).toHaveProperty('label');
        expect(q).toHaveProperty('accuracy');
        expect(q).toHaveProperty('avgTime');
      });
    });
  });

  describe('Answer patterns include elimination', () => {
    it('answerPatterns.elimination is included', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      expect(serialized.answerPatterns).toHaveProperty('elimination');
      expect(serialized.answerPatterns.elimination).toHaveProperty('used');
      expect(serialized.answerPatterns.elimination).toHaveProperty('correct');
      expect(serialized.answerPatterns.elimination).toHaveProperty('accuracy');
      expect(serialized.answerPatterns.elimination).toHaveProperty('insight');
    });

    it('answerChanges are included alongside elimination', () => {
      const report = buildReport();
      const serialized = serializeForNarrative(report);

      expect(serialized.answerPatterns).toHaveProperty('answerChanges');
      expect(serialized.answerPatterns.answerChanges).toHaveProperty('total');
      expect(serialized.answerPatterns.answerChanges).toHaveProperty('advice');
    });
  });
});
