import { adaptDiagnosticForUI } from '../diagnosticAdapter';

/**
 * Build a minimal diagnostic report fixture that matches the shape
 * returned by `runDiagnostic()`.
 */
function buildReport(overrides = {}) {
  const base = {
    score: { raw: 30, total: 44, scaled: 650, target: 700, gap: 50, percentCorrect: 68 },
    questionAnalysis: buildQuestionAnalysis(),
    errorPatterns: {
      totalWrong: 14,
      summary: [
        {
          type: 'careless_error', label: 'Careless Mistake', description: 'A slip-up',
          icon: '', color: '#f59e0b', count: 5, percentage: 36,
          questions: [
            { key: '0-2', difficulty: 'easy', domain: 'algebra', reasoning: 'Rushed easy question', confidence: 0.8, timeSpent: 12 },
            { key: '0-5', difficulty: 'easy', domain: 'algebra', reasoning: 'Changed answer', confidence: 0.75, timeSpent: 20 },
          ],
        },
        {
          type: 'conceptual_gap', label: 'Conceptual Gap', description: 'Concept unknown',
          icon: '', color: '#dc2626', count: 4, percentage: 29,
          questions: [
            { key: '1-8', difficulty: 'hard', domain: 'geometry', reasoning: 'No mastery', confidence: 0.85, timeSpent: 90 },
          ],
        },
        {
          type: 'time_pressure', label: 'Time Pressure', description: 'Ran out of time',
          icon: '', color: '#0ea5e9', count: 3, percentage: 21,
          questions: [],
        },
        {
          type: 'procedural_error', label: 'Procedural Error', description: 'Process mistake',
          icon: '', color: '#ea580c', count: 2, percentage: 14,
          questions: [],
        },
      ],
      dominantPattern: {
        type: 'careless_error', label: 'Careless Mistake', count: 5, percentage: 36,
        description: 'A slip-up',
      },
      counts: { careless_error: 5, conceptual_gap: 4, time_pressure: 3, procedural_error: 2, trap_susceptibility: 0, unanswered: 0 },
    },
    domainAnalysis: [
      { domain: 'algebra', total: 15, correct: 12, wrong: 3, accuracy: 80, displayName: 'Algebra', color: '#3b82f6', satWeight: 0.35, pointsAvailable: 30, errorTypes: { careless_error: 2, procedural_error: 1 }, skills: [] },
      { domain: 'problem-solving', total: 11, correct: 7, wrong: 4, accuracy: 64, displayName: 'Problem Solving', color: '#22c55e', satWeight: 0.25, pointsAvailable: 40, errorTypes: { conceptual_gap: 3, time_pressure: 1 }, skills: [] },
      { domain: 'advanced-math', total: 11, correct: 7, wrong: 4, accuracy: 64, displayName: 'Advanced Math', color: '#a855f7', satWeight: 0.25, pointsAvailable: 40, errorTypes: { careless_error: 2, time_pressure: 2 }, skills: [] },
      { domain: 'geometry', total: 7, correct: 4, wrong: 3, accuracy: 57, displayName: 'Geometry', color: '#f59e0b', satWeight: 0.15, pointsAvailable: 30, errorTypes: { conceptual_gap: 2, procedural_error: 1 }, skills: [] },
    ],
    scoreProjection: {
      currentScore: 650, targetScore: 700, gap: 50, questionsNeededForTarget: 5,
      domainProjections: [
        { domain: 'problem-solving', domainName: 'Problem Solving', color: '#22c55e', questionsToFix: 4, currentAccuracy: 64, projectedPointGain: 40, projectedScore: 690 },
      ],
      errorTypeProjections: [
        { errorType: 'careless_error', label: 'Careless', questionsToFix: 5, projectedPointGain: 50 },
      ],
      quickWins: { count: 8, projectedGain: 70, potentialGain: 70, description: 'Get easy/medium right' },
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
      totalTimeSeconds: 2640, avgTimePerQuestion: 60,
      avgCorrectTime: 55, avgIncorrectTime: 70,
      timeRelatedErrors: 3, fadeEffect: 18,
      firstHalfAccuracy: 77, secondHalfAccuracy: 59,
      moduleTimeRemaining: {}, insights: [
        { type: 'warning', message: 'Accuracy dropped 18% in second half' },
      ],
    },
    prioritizedActions: [
      { priority: 1, type: 'strategy', title: 'Eliminate 5 careless mistakes', description: 'You know these.', estimatedGain: 50, effort: 'low', category: 'quick_win', actionItems: ['Slow down', 'Double check'] },
      { priority: 2, type: 'strategy', title: 'Fix time pressure', description: 'Practice pacing.', estimatedGain: 30, effort: 'medium', category: 'strategy', actionItems: ['Use timer'] },
      { priority: 3, type: 'domain', title: 'Strengthen Geometry', description: '57% accuracy', estimatedGain: 30, effort: 'medium', category: 'content', actionItems: [] },
    ],
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
    mistakeFingerprint: {
      archetype: 'precision_seeker', archetypeLabel: 'The Precision Seeker',
      archetypeDescription: 'You understand the material but lose points to avoidable mistakes.',
      traits: [{ trait: 'Late-test fatigue', severity: 'moderate', tip: 'Practice full-length tests' }],
      persistentWeaknesses: [],
    },
    percentile: 75,
    skillClusters: [{
      name: 'Slope Mastery', rootConcept: 'slope-mastery',
      failedSkills: ['slope-from-points', 'parallel-line-slope'],
      totalSkillsInFamily: 6, failRate: 33, severity: 'moderate',
      recommendation: 'Review core slope concepts', questionsAffected: 3,
    }],
    rootCauseClusters: [{
      id: 'recurring-concept-gaps', label: 'Recurring Concept Gaps', severity: 'moderate',
      count: 4, description: '4 questions missed from concept gaps',
      questions: ['1-8', '1-10'],
      recurringSkills: [{ skillId: 'factoring', name: 'Factoring', count: 2 }],
    }],
    answerPatterns: {
      answerChanges: { total: 3, changedToCorrect: 1, changedToWrong: 2, firstInstinctAccuracy: 33, advice: 'Trust first instinct' },
      elimination: { used: 5, correct: 3, accuracy: 60, insight: 'Reasonable usage' },
      hasPositionBias: false, biasWarning: null, totalAnswered: 44,
    },
    trendAnalysis: {
      hasHistory: true, trend: 'improving', scoreChange: 20,
      improvingSkills: ['Linear Equations'], decliningSkills: ['Factoring'],
      persistentWeaknesses: [{ skillId: 'factoring', name: 'Factoring', testCount: 3 }],
      testHistory: [], message: 'Good progress',
    },
    timeAllocation: [
      { domain: 'algebra', timeSpent: 600, timePct: 35, accuracy: 80, questionCount: 15, efficiency: 120, isOverinvested: false },
      { domain: 'geometry', timeSpent: 500, timePct: 30, accuracy: 45, questionCount: 7, efficiency: 40, isOverinvested: true },
    ],
    confidenceInterval: {
      raw95: { low: 27, high: 33 }, raw80: { low: 28, high: 32 },
      scaled95: { low: 620, high: 680 }, scaled80: { low: 630, high: 670 },
      reliability: 'high', message: 'Score likely between 630 and 670',
    },
    learningVelocity: {
      hasData: true, velocity: 3.5, trend: 'strong', totalGain: 40,
      testsCompleted: 4, message: 'Gaining 3.5 pts/week',
    },
    testId: 'test-1', testTitle: 'Practice Test 9',
    analyzedAt: new Date().toISOString(),
  };

  return { ...base, ...overrides };
}

function buildQuestionAnalysis() {
  const questions = [];
  for (let i = 0; i < 44; i++) {
    const isCorrect = i < 30;
    const isWrongWithBehavior = !isCorrect;
    questions.push({
      key: `${Math.floor(i / 22)}-${i % 22}`,
      isCorrect,
      difficulty: i < 15 ? 'easy' : i < 30 ? 'medium' : 'hard',
      domain: ['algebra', 'problem-solving', 'advanced-math', 'geometry'][i % 4],
      skills: ['Algebra'],
      skillNames: ['Algebra'],
      timeSpent: 50 + i * 2,
      answerChangeCount: isWrongWithBehavior ? 1 : 0,
      answerChangeEvents: isWrongWithBehavior ? [{ from: 'A', to: 'B', timestamp: Date.now() }] : [],
      usedCalculator: isWrongWithBehavior,
      markedForReview: isWrongWithBehavior,
      eliminatedChoices: isWrongWithBehavior ? ['C', 'D'] : [],
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

describe('adaptDiagnosticForUI', () => {
  it('returns null when report is null', () => {
    expect(adaptDiagnosticForUI(null, {})).toBeNull();
  });

  it('returns null when report is undefined', () => {
    expect(adaptDiagnosticForUI(undefined, {})).toBeNull();
  });

  describe('with a full report', () => {
    let result;
    beforeAll(() => {
      result = adaptDiagnosticForUI(buildReport(), {
        questionDetails: {},
        navigationPattern: 'strategic-skip',
        calculatorUsageCount: 12,
        markedForReviewCount: 4,
      });
    });

    it('returns all expected top-level keys', () => {
      expect(result).toHaveProperty('keyFindings');
      expect(result).toHaveProperty('pointLoss');
      expect(result).toHaveProperty('roiFixes');
      expect(result).toHaveProperty('domains');
      expect(result).toHaveProperty('behavior');
      expect(result).toHaveProperty('difficulty');
      expect(result).toHaveProperty('questionEvidence');
      expect(result).toHaveProperty('scoreProjection');
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('percentile');
      expect(result).toHaveProperty('fingerprint');
    });

    describe('keyFindings', () => {
      it('contains at most 4 findings', () => {
        expect(result.keyFindings.length).toBeLessThanOrEqual(4);
      });

      it('includes archetype finding when not balanced', () => {
        const arch = result.keyFindings.find(f => f.id === 'archetype');
        expect(arch).toBeDefined();
        expect(arch.title).toBe('The Precision Seeker');
      });

      it('includes easy-wins finding when misses >= 2', () => {
        const ew = result.keyFindings.find(f => f.id === 'easy-wins');
        expect(ew).toBeDefined();
        expect(ew.title).toContain('3 easy questions missed');
      });

      it('includes stamina drop finding when dropoff > 15', () => {
        const sd = result.keyFindings.find(f => f.id === 'stamina-drop');
        expect(sd).toBeDefined();
        expect(sd.title).toContain('18%');
      });
    });

    describe('pointLoss', () => {
      it('has one entry per error type with non-zero count', () => {
        expect(result.pointLoss.length).toBe(4);
      });

      it('first entry is the dominant error type (careless_error)', () => {
        expect(result.pointLoss[0].type).toBe('careless_error');
        expect(result.pointLoss[0].count).toBe(5);
      });

      it('includes sample questions with reasoning', () => {
        expect(result.pointLoss[0].sampleQuestions.length).toBe(2);
        expect(result.pointLoss[0].sampleQuestions[0].reasoning).toBeTruthy();
      });
    });

    describe('roiFixes', () => {
      it('returns at most 5 prioritized actions', () => {
        expect(result.roiFixes.length).toBeLessThanOrEqual(5);
      });

      it('first fix has title, gain, and action items', () => {
        const first = result.roiFixes[0];
        expect(first.title).toBeTruthy();
        expect(first.estimatedGain).toBeGreaterThan(0);
        expect(first.actionItems.length).toBeGreaterThan(0);
      });
    });

    describe('domains', () => {
      it('returns all 4 SAT domains in stable order', () => {
        expect(result.domains.map(d => d.domain)).toEqual([
          'algebra', 'problem-solving', 'advanced-math', 'geometry',
        ]);
      });

      it('each domain has accuracy and display name', () => {
        result.domains.forEach(d => {
          expect(typeof d.accuracy).toBe('number');
          expect(d.displayName).toBeTruthy();
        });
      });

      it('includes the top error type for domains with errors', () => {
        const geo = result.domains.find(d => d.domain === 'geometry');
        expect(geo.topErrorType).toBeTruthy();
      });
    });

    describe('behavior', () => {
      it('includes avg time, stamina, navigation, and calculator signals', () => {
        const labels = result.behavior.map(b => b.label);
        expect(labels).toContain('Avg time / question');
        expect(labels).toContain('Navigation');
        expect(labels).toContain('Calculator usage');
        expect(labels).toContain('Stamina');
      });

      it('marks warnings as type=warning', () => {
        const stamina = result.behavior.find(b => b.label === 'Stamina');
        expect(stamina.type).toBe('warning');
      });
    });

    describe('difficulty', () => {
      it('returns easy/medium/hard in order', () => {
        expect(result.difficulty.map(d => d.level)).toEqual(['easy', 'medium', 'hard']);
      });
    });

    describe('questionEvidence', () => {
      it('returns at most 6 classified misses', () => {
        expect(result.questionEvidence.length).toBeLessThanOrEqual(6);
      });

      it('each entry has label, errorLabel, reasoning, and domain', () => {
        result.questionEvidence.forEach(q => {
          expect(q.label).toBeTruthy();
          expect(q.errorLabel).toBeTruthy();
          expect(q.reasoning).toBeTruthy();
          expect(q.domainName).toBeTruthy();
        });
      });
    });

    describe('scoreProjection', () => {
      it('includes currentScore, targetScore, gap, and easyWins', () => {
        expect(result.scoreProjection.currentScore).toBe(650);
        expect(result.scoreProjection.targetScore).toBe(700);
        expect(result.scoreProjection.gap).toBe(50);
        expect(result.scoreProjection.easyWins.count).toBe(3);
      });
    });

    describe('weaknessClusters', () => {
      it('is an array', () => {
        expect(Array.isArray(result.weaknessClusters)).toBe(true);
      });

      it('includes entries from skillClusters and rootCauseClusters', () => {
        expect(result.weaknessClusters.length).toBeGreaterThanOrEqual(2);
      });

      it('each entry has id, type, label, severity, detail', () => {
        result.weaknessClusters.forEach(c => {
          expect(c).toHaveProperty('id');
          expect(c).toHaveProperty('type');
          expect(c).toHaveProperty('label');
          expect(c).toHaveProperty('severity');
          expect(c).toHaveProperty('detail');
        });
      });

      it('includes concept-type entries from skillClusters', () => {
        const concept = result.weaknessClusters.find(c => c.type === 'concept');
        expect(concept).toBeDefined();
        expect(concept.label).toBe('Slope Mastery');
      });

      it('includes root-cause-type entries from rootCauseClusters', () => {
        const rootCause = result.weaknessClusters.find(c => c.type === 'root-cause');
        expect(rootCause).toBeDefined();
        expect(rootCause.id).toBe('recurring-concept-gaps');
      });
    });

    describe('persistentWeaknesses', () => {
      it('is an array', () => {
        expect(Array.isArray(result.persistentWeaknesses)).toBe(true);
      });

      it('entries have type, skill, detail, severity', () => {
        result.persistentWeaknesses.forEach(pw => {
          expect(pw).toHaveProperty('type');
          expect(pw).toHaveProperty('skill');
          expect(pw).toHaveProperty('detail');
          expect(pw).toHaveProperty('severity');
        });
      });

      it('includes persistent-skill entries from trendAnalysis.persistentWeaknesses', () => {
        const persistent = result.persistentWeaknesses.find(pw => pw.type === 'persistent-skill');
        expect(persistent).toBeDefined();
        expect(persistent.skill).toBe('Factoring');
        expect(persistent.severity).toBe('critical');
      });

      it('includes declining-skill entries from trendAnalysis.decliningSkills', () => {
        const declining = result.persistentWeaknesses.find(pw => pw.type === 'declining-skill');
        expect(declining).toBeDefined();
        expect(declining.skill).toBe('Factoring');
      });
    });

    describe('behaviorOutcomes', () => {
      it('is an array', () => {
        expect(Array.isArray(result.behaviorOutcomes)).toBe(true);
      });

      it('entries have id, behavior, stat, impact, detail', () => {
        result.behaviorOutcomes.forEach(bo => {
          expect(bo).toHaveProperty('id');
          expect(bo).toHaveProperty('behavior');
          expect(bo).toHaveProperty('stat');
          expect(bo).toHaveProperty('impact');
          expect(bo).toHaveProperty('detail');
        });
      });

      it('includes answer-changes outcome when total >= 2', () => {
        const changes = result.behaviorOutcomes.find(bo => bo.id === 'answer-changes');
        expect(changes).toBeDefined();
        expect(changes.behavior).toBe('Answer Changes');
      });

      it('includes elimination outcome when used > 0', () => {
        const elim = result.behaviorOutcomes.find(bo => bo.id === 'elimination');
        expect(elim).toBeDefined();
        expect(elim.behavior).toBe('Process of Elimination');
      });
    });

    describe('timeAllocation', () => {
      it('is an array', () => {
        expect(Array.isArray(result.timeAllocation)).toBe(true);
      });

      it('entries have domain, displayName, timePct, accuracy', () => {
        result.timeAllocation.forEach(ta => {
          expect(ta).toHaveProperty('domain');
          expect(ta).toHaveProperty('displayName');
          expect(ta).toHaveProperty('timePct');
          expect(ta).toHaveProperty('accuracy');
        });
      });

      it('identifies overinvested domains', () => {
        const overinvested = result.timeAllocation.find(ta => ta.isOverinvested);
        expect(overinvested).toBeDefined();
        expect(overinvested.domain).toBe('geometry');
      });
    });

    describe('confidenceIndicators', () => {
      it('is an array', () => {
        expect(Array.isArray(result.confidenceIndicators)).toBe(true);
      });

      it('entries have id, area, confidence, detail', () => {
        result.confidenceIndicators.forEach(ci => {
          expect(ci).toHaveProperty('id');
          expect(ci).toHaveProperty('area');
          expect(ci).toHaveProperty('confidence');
          expect(ci).toHaveProperty('detail');
        });
      });

      it('includes score-reliability indicator from confidenceInterval', () => {
        const scoreRel = result.confidenceIndicators.find(ci => ci.id === 'score-reliability');
        expect(scoreRel).toBeDefined();
        expect(scoreRel.confidence).toBe('high');
      });

      it('includes trend-data indicator', () => {
        const trend = result.confidenceIndicators.find(ci => ci.id === 'trend-data');
        expect(trend).toBeDefined();
        expect(trend.confidence).toBe('high');
      });
    });
  });

  describe('edge: balanced archetype', () => {
    it('omits archetype finding when fingerprint is balanced', () => {
      const report = buildReport({
        mistakeFingerprint: { archetype: 'balanced', archetypeLabel: 'The All-Rounder', archetypeDescription: 'Balanced.', traits: [], persistentWeaknesses: [] },
      });
      const result = adaptDiagnosticForUI(report, {});
      const arch = result.keyFindings.find(f => f.id === 'archetype');
      expect(arch).toBeUndefined();
    });
  });

  describe('edge: no easy misses', () => {
    it('omits easy-wins finding when easyWins count is 0', () => {
      const report = buildReport({
        scoreProjection: {
          ...buildReport().scoreProjection,
          easyWins: { count: 0, projectedGain: 0, description: 'None' },
        },
      });
      const result = adaptDiagnosticForUI(report, {});
      expect(result.keyFindings.find(f => f.id === 'easy-wins')).toBeUndefined();
    });
  });

  describe('edge: no stamina data', () => {
    it('omits stamina signal when hasData is false', () => {
      const report = buildReport({ stamina: { hasData: false } });
      const result = adaptDiagnosticForUI(report, {});
      expect(result.behavior.find(b => b.label === 'Stamina')).toBeUndefined();
    });
  });
});
