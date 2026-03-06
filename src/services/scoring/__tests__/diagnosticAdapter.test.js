import { adaptDiagnosticForUI, mergeAiIntoReport } from '../diagnosticAdapter';

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
      expect(result).toHaveProperty('summary');
      expect(result).toHaveProperty('behaviorHighlights');
      expect(result).toHaveProperty('quickStats');
      expect(result).toHaveProperty('keyFindings');
      expect(result).toHaveProperty('scoreProjection');
      expect(result).toHaveProperty('behaviorOutcomes');
      expect(result).toHaveProperty('timeAllocation');
      expect(result).toHaveProperty('confidenceIndicators');
      expect(result).toHaveProperty('report');
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('percentile');
      expect(result).toHaveProperty('fingerprint');
    });

    it('does not expose standalone evidenceSummary', () => {
      expect(result).not.toHaveProperty('evidenceSummary');
    });

    describe('quickStats', () => {
      it('returns an array of quick stat objects', () => {
        expect(Array.isArray(result.quickStats)).toBe(true);
        expect(result.quickStats.length).toBeGreaterThan(0);
      });

      it('includes easy wins and score gap when present', () => {
        const labels = result.quickStats.map(s => s.id);
        expect(labels).toContain('score-gap');
        expect(labels).toContain('easy-wins');
        expect(labels).toContain('top-domain-drag');
        expect(labels).toContain('trend');
      });
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

    describe('scoreProjection', () => {
      it('includes currentScore, targetScore, gap, and easyWins', () => {
        expect(result.scoreProjection.currentScore).toBe(650);
        expect(result.scoreProjection.targetScore).toBe(700);
        expect(result.scoreProjection.gap).toBe(50);
        expect(result.scoreProjection.easyWins.count).toBe(3);
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

  describe('summary contract', () => {
    let result;
    beforeAll(() => {
      result = adaptDiagnosticForUI(buildReport(), {});
    });

    it('exposes a summary object at the top level', () => {
      expect(result.summary).toBeDefined();
      expect(typeof result.summary.headline).toBe('string');
      expect(result.summary.headline.length).toBeGreaterThan(0);
    });

    it('headline names the top weakness', () => {
      expect(result.summary.headline).toMatch(/biggest challenge/i);
    });

    it('returns at most 3 top weaknesses', () => {
      expect(result.summary.topWeaknesses.length).toBeLessThanOrEqual(3);
      expect(result.summary.topWeaknesses.length).toBeGreaterThan(0);
    });

    it('each weakness has name, why, proof array, and severity', () => {
      result.summary.topWeaknesses.forEach(w => {
        expect(w.name).toBeTruthy();
        expect(typeof w.why).toBe('string');
        expect(w.why.length).toBeGreaterThan(0);
        expect(Array.isArray(w.proof)).toBe(true);
        expect(w.id).toBeTruthy();
        expect(w.severity).toBeTruthy();
      });
    });

    it('proof is attached directly to each weakness', () => {
      const withProof = result.summary.topWeaknesses.filter(w => w.proof.length > 0);
      expect(withProof.length).toBeGreaterThan(0);
    });

    it('weaknesses are sorted by severity (critical before moderate)', () => {
      const order = { critical: 0, moderate: 1, warning: 2 };
      for (let i = 1; i < result.summary.topWeaknesses.length; i++) {
        const prev = order[result.summary.topWeaknesses[i - 1].severity] ?? 3;
        const curr = order[result.summary.topWeaknesses[i].severity] ?? 3;
        expect(prev).toBeLessThanOrEqual(curr);
      }
    });

    it('does not include prescriptive fields', () => {
      expect(result.summary).not.toHaveProperty('primaryAction');
      expect(result.summary).not.toHaveProperty('secondaryActions');
    });

    it('provides a scoreImpact array', () => {
      expect(Array.isArray(result.summary.scoreImpact)).toBe(true);
      expect(result.summary.scoreImpact.length).toBeGreaterThan(0);
      result.summary.scoreImpact.forEach(point => {
        expect(typeof point).toBe('string');
        expect(point.length).toBeGreaterThan(0);
      });
    });

    it('scoreImpact points are non-prescriptive', () => {
      const prescriptivePatterns = /\b(fix|practice|review|dedicate|should|must|try to)\b/i;
      result.summary.scoreImpact.forEach(point => {
        expect(point).not.toMatch(prescriptivePatterns);
      });
    });
  });

  describe('behaviorHighlights', () => {
    it('returns an array of highlights', () => {
      const result = adaptDiagnosticForUI(buildReport(), {
        navigationPattern: 'strategic-skip',
        calculatorUsageCount: 12,
        markedForReviewCount: 4,
      });
      expect(Array.isArray(result.behaviorHighlights)).toBe(true);
    });

    it('each highlight has label, detail, type', () => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      result.behaviorHighlights.forEach(h => {
        expect(h).toHaveProperty('label');
        expect(h).toHaveProperty('detail');
        expect(['warning', 'good', 'neutral']).toContain(h.type);
      });
    });

    it('returns at most 3 highlights', () => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      expect(result.behaviorHighlights.length).toBeLessThanOrEqual(3);
    });

    it('surfaces negative behavior outcomes as warnings', () => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      const warnings = result.behaviorHighlights.filter(h => h.type === 'warning');
      expect(warnings.length).toBeGreaterThan(0);
    });
  });

  describe('summary edge cases', () => {
    it('returns a sensible headline when no weaknesses found', () => {
      const report = buildReport({
        skillClusters: [],
        rootCauseClusters: [],
        errorPatterns: { totalWrong: 0, summary: [], counts: {} },
        trendAnalysis: { hasHistory: false },
        answerPatterns: {},
        questionAnalysis: [],
        timeAnalysis: { avgCorrectTime: 60, avgIncorrectTime: 55, timeRelatedErrors: 0 },
      });
      const result = adaptDiagnosticForUI(report, {});
      expect(result.summary.headline.length).toBeGreaterThan(0);
      expect(result.summary.topWeaknesses.length).toBe(0);
      expect(Array.isArray(result.summary.scoreImpact)).toBe(true);
      expect(result.summary.scoreImpact.length).toBeGreaterThan(0);
    });

    it('scoreImpact surfaces score gap when available', () => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      const hasGap = result.summary.scoreImpact.some(p => /below your target/i.test(p));
      expect(hasGap).toBe(true);
    });

    it('scoreImpact mentions easy wins when present', () => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      const hasEasyWins = result.summary.scoreImpact.some(p => /easy questions/i.test(p));
      expect(hasEasyWins).toBe(true);
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

  describe('report contract', () => {
    let report;
    beforeAll(() => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      report = result.report;
    });

    it('returns a report with hero, sections, and nextFocus', () => {
      expect(report).toHaveProperty('hero');
      expect(report).toHaveProperty('sections');
      expect(report).toHaveProperty('nextFocus');
      expect(typeof report.hero.headline).toBe('string');
    });

    it('has exactly 3 sections in the strict order', () => {
      expect(report.sections).toHaveLength(3);
      expect(report.sections.map(s => s.id)).toEqual([
        'whyThisScore', 'patternsThatDroveScore', 'whereScoreBrokeDown',
      ]);
    });

    it('every section has id, title, body, and source', () => {
      report.sections.forEach(sec => {
        expect(sec.id).toBeTruthy();
        expect(typeof sec.title).toBe('string');
        expect(typeof sec.body).toBe('string');
        expect(sec.body.length).toBeGreaterThan(0);
        expect(sec.source).toBe('deterministic');
      });
    });

    it('patternsThatDroveScore section contains patterns array with evidence per item', () => {
      const sec = report.sections.find(s => s.id === 'patternsThatDroveScore');
      expect(Array.isArray(sec.patterns)).toBe(true);
      sec.patterns.forEach(p => {
        expect(p).toHaveProperty('title');
        expect(p).toHaveProperty('why');
        expect(p).toHaveProperty('severity');
        expect(p).toHaveProperty('source');
        expect(Array.isArray(p.evidence)).toBe(true);
      });
    });

    it('whereScoreBrokeDown section has groups array', () => {
      const sec = report.sections.find(s => s.id === 'whereScoreBrokeDown');
      expect(Array.isArray(sec.groups)).toBe(true);
    });

    it('hero includes stats array', () => {
      expect(Array.isArray(report.hero.stats)).toBe(true);
    });

    it('nextFocus has text', () => {
      expect(typeof report.nextFocus.text).toBe('string');
      expect(report.nextFocus.text.length).toBeGreaterThan(0);
    });

    it('no statement is duplicated between hero headline and nextFocus.text', () => {
      expect(report.hero.headline).not.toBe(report.nextFocus.text);
    });

    it('severity order includes significant between critical and moderate', () => {
      const sec = report.sections.find(s => s.id === 'patternsThatDroveScore');
      const order = { critical: 0, significant: 1, moderate: 2, warning: 3 };
      for (let i = 1; i < sec.patterns.length; i++) {
        const prev = order[sec.patterns[i - 1].severity] ?? 4;
        const curr = order[sec.patterns[i].severity] ?? 4;
        expect(prev).toBeLessThanOrEqual(curr);
      }
    });
  });
});

describe('mergeAiIntoReport', () => {
  function getBaseReport() {
    const result = adaptDiagnosticForUI(buildReport(), {});
    return result.report;
  }

  const aiNarrative = {
    diagnosis: 'AI says your biggest issue is algebraic reasoning.',
    weaknesses: [
      { title: 'Factoring', why: 'Repeated conceptual errors.', proof: ['0/3 on factoring'], impact: '~20 points', severity: 'critical' },
      { title: 'Word Problems', why: 'Misreading the prompt.', proof: ['3/5 wrong'], impact: '~15 points', severity: 'moderate' },
    ],
    behaviorInsights: 'You changed answers 4 times, going from correct to incorrect.',
    scoreImpact: 'Fixing algebra alone could lift your score by 30 points.',
    topNextFocus: 'Master factoring fundamentals before next attempt.',
    uncertainties: 'Only one attempt so far.',
  };

  it('returns the original report when AI is null', () => {
    const report = getBaseReport();
    const merged = mergeAiIntoReport(report, null);
    expect(merged).toBe(report);
  });

  it('returns the original report when report is null', () => {
    expect(mergeAiIntoReport(null, aiNarrative)).toBeNull();
  });

  it('overwrites hero headline with AI diagnosis', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrative);
    expect(merged.hero.headline).toBe(aiNarrative.diagnosis);
  });

  it('replaces patterns with AI weaknesses', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrative);
    const sec = merged.sections.find(s => s.id === 'patternsThatDroveScore');
    expect(sec.source).toBe('ai');
    expect(sec.patterns).toHaveLength(2);
    expect(sec.patterns[0].title).toBe('Factoring');
    expect(sec.patterns[0].source).toBe('ai');
  });

  it('sets whyThisScore section body and whereScoreBrokeDown note from AI', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrative);
    const whySec = merged.sections.find(s => s.id === 'whyThisScore');
    const whereSec = merged.sections.find(s => s.id === 'whereScoreBrokeDown');
    expect(whySec.body).toBe(aiNarrative.scoreImpact);
    expect(whySec.source).toBe('ai');
    expect(whereSec.note).toBe(aiNarrative.uncertainties);
  });

  it('sets nextFocus from AI topNextFocus', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrative);
    expect(merged.nextFocus.text).toBe(aiNarrative.topNextFocus);
  });

  it('does not mutate the original report', () => {
    const original = getBaseReport();
    const originalHero = original.hero.headline;
    mergeAiIntoReport(original, aiNarrative);
    expect(original.hero.headline).toBe(originalHero);
    expect(original.sections[0].source).toBe('deterministic');
  });

  it('preserves section count and order', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrative);
    expect(merged.sections).toHaveLength(3);
    expect(merged.sections.map(s => s.id)).toEqual([
      'whyThisScore', 'patternsThatDroveScore', 'whereScoreBrokeDown'
    ]);
  });

  it('handles partial AI with only diagnosis', () => {
    const partialAi = { diagnosis: 'Partial AI insight.' };
    const merged = mergeAiIntoReport(getBaseReport(), partialAi);
    expect(merged.hero.headline).toBe('Partial AI insight.');
    const impSec = merged.sections.find(s => s.id === 'whyThisScore');
    expect(impSec.source).toBe('deterministic');
  });
});
