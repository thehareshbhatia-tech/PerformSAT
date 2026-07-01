import { adaptDiagnosticForUI, mergeAiIntoReport, buildUnifiedReport, buildNarrativeFlow, buildDiagnosisNarrative, splitTextToBullets, normalizeReasons, isGenericClaim, rankByClaimQuality } from '../diagnosticAdapter';

function diagTexts(uni) {
  return uni.diagnosis.points.map(p => typeof p === 'string' ? p : p.text);
}
function behaviorTexts(uni) {
  return (uni.behaviorInsights || []).map(bi => typeof bi === 'string' ? bi : bi.text);
}

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

      it('omits the Recent Trend stat when scoreChange is null (cross-scale attempts)', () => {
        // The engine deliberately nulls scoreChange when adjacent attempts span
        // scales (200-800 vs 400-1600); the stat must be skipped, not render
        // "null pts".
        const crossScale = adaptDiagnosticForUI(buildReport({
          trendAnalysis: {
            hasHistory: true, trend: 'mixed_scales', scoreChange: null,
            improvingSkills: [], decliningSkills: [], persistentWeaknesses: [],
            testHistory: [], message: 'Scales differ',
          },
        }), { questionDetails: {} });
        const labels = crossScale.quickStats.map(s => s.id);
        expect(labels).not.toContain('trend');
        expect(crossScale.quickStats.some(s => String(s.value).includes('null'))).toBe(false);
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

      it('entries have id, behavior, stat, impact, detail, evidence, mechanism', () => {
        result.behaviorOutcomes.forEach(bo => {
          expect(bo).toHaveProperty('id');
          expect(bo).toHaveProperty('behavior');
          expect(bo).toHaveProperty('stat');
          expect(bo).toHaveProperty('impact');
          expect(bo).toHaveProperty('detail');
          expect(bo).toHaveProperty('evidence');
          expect(bo).toHaveProperty('mechanism');
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

    it('each highlight has label, detail, type, evidence, mechanism', () => {
      const result = adaptDiagnosticForUI(buildReport(), {});
      result.behaviorHighlights.forEach(h => {
        expect(h).toHaveProperty('label');
        expect(h).toHaveProperty('detail');
        expect(['warning', 'good', 'neutral']).toContain(h.type);
        expect(h).toHaveProperty('evidence');
        expect(h).toHaveProperty('mechanism');
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

    it('hero headlinePoints is an empty array in deterministic report (populated only after AI merge)', () => {
      expect(Array.isArray(report.hero.headlinePoints)).toBe(true);
      expect(report.hero.headlinePoints).toHaveLength(0);
    });

    it('nextFocus has text', () => {
      expect(typeof report.nextFocus.text).toBe('string');
      expect(report.nextFocus.text.length).toBeGreaterThan(0);
    });

    it('nextFocus has reasons array for bullet rendering', () => {
      expect(Array.isArray(report.nextFocus.reasons)).toBe(true);
      expect(report.nextFocus.reasons.length).toBeGreaterThan(0);
      report.nextFocus.reasons.forEach(r => {
        expect(typeof r).toBe('string');
        expect(r.length).toBeGreaterThan(0);
      });
    });

    it('whyThisScore section has bodyPoints array for bullet rendering', () => {
      const sec = report.sections.find(s => s.id === 'whyThisScore');
      expect(Array.isArray(sec.bodyPoints)).toBe(true);
      expect(sec.bodyPoints.length).toBeGreaterThan(0);
      sec.bodyPoints.forEach(pt => {
        expect(typeof pt).toBe('string');
        expect(pt.length).toBeGreaterThan(0);
      });
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

  // Legacy (v1) narrative uses flat strings
  const aiNarrativeLegacy = {
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

  // New (v2) narrative uses structured arrays/objects
  const aiNarrativeV2 = {
    diagnosis: 'Your careless errors on easy questions are the biggest score drag.',
    weaknesses: [
      { title: 'Factoring', why: 'Repeated conceptual errors.', proof: ['0/3 on factoring'], impact: '~20 points', severity: 'critical' },
    ],
    scoreImpactPoints: [
      'Careless errors on 3 easy questions cost roughly 30 recoverable points',
      'Geometry accuracy of 57% is dragging your score down by ~20 points',
    ],
    behaviorInsightPoints: [
      'Answer changes hurt: 2 changed from correct to incorrect',
      'Wrong answers averaged 35s vs 55s for correct — rushing is costing points',
    ],
    topNextFocus: {
      headline: 'Eliminate careless errors on easy questions first.',
      reasons: [
        '3 easy misses account for 30 recoverable points',
        'These are questions you already know how to solve',
      ],
    },
    changesSinceLast: 'Score improved 20 points from your last attempt, but careless errors increased.',
    uncertainties: 'Only one attempt so far.',
  };

  it('returns the original report when AI is null', () => {
    const report = getBaseReport();
    const merged = mergeAiIntoReport(report, null);
    expect(merged).toBe(report);
  });

  it('returns the original report when report is null', () => {
    expect(mergeAiIntoReport(null, aiNarrativeLegacy)).toBeNull();
  });

  it('populates hero headlinePoints with AI diagnosis (headline stays deterministic)', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
    expect(Array.isArray(merged.hero.headlinePoints)).toBe(true);
    expect(merged.hero.headlinePoints).toEqual([aiNarrativeLegacy.diagnosis]);
  });

  it('replaces patterns with AI weaknesses', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
    const sec = merged.sections.find(s => s.id === 'patternsThatDroveScore');
    expect(sec.source).toBe('ai');
    expect(sec.patterns).toHaveLength(2);
    expect(sec.patterns[0].title).toBe('Factoring');
    expect(sec.patterns[0].source).toBe('ai');
  });

  it('does not mutate the original report', () => {
    const original = getBaseReport();
    const originalHero = original.hero.headline;
    mergeAiIntoReport(original, aiNarrativeLegacy);
    expect(original.hero.headline).toBe(originalHero);
    expect(original.sections[0].source).toBe('deterministic');
  });

  it('preserves section count and order', () => {
    const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
    expect(merged.sections).toHaveLength(3);
    expect(merged.sections.map(s => s.id)).toEqual([
      'whyThisScore', 'patternsThatDroveScore', 'whereScoreBrokeDown'
    ]);
  });

  it('handles partial AI with only diagnosis', () => {
    const partialAi = { diagnosis: 'Partial AI insight.' };
    const merged = mergeAiIntoReport(getBaseReport(), partialAi);
    expect(Array.isArray(merged.hero.headlinePoints)).toBe(true);
    expect(merged.hero.headlinePoints).toEqual(['Partial AI insight.']);
    const impSec = merged.sections.find(s => s.id === 'whyThisScore');
    expect(impSec.source).toBe('deterministic');
  });

  describe('legacy (v1) backward compatibility', () => {
    it('wraps legacy scoreImpact string into bodyPoints array', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.source).toBe('ai');
      expect(whySec.bodyPoints).toEqual([aiNarrativeLegacy.scoreImpact]);
      expect(whySec.body).toBe(aiNarrativeLegacy.scoreImpact);
    });

    it('wraps legacy behaviorInsights string into behaviorPoints array', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.behaviorPoints).toEqual([aiNarrativeLegacy.behaviorInsights]);
    });

    it('sets nextFocus.text from legacy topNextFocus string, keeps deterministic reasons', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
      expect(merged.nextFocus.text).toBe(aiNarrativeLegacy.topNextFocus);
      expect(merged.nextFocus.source).toBe('ai');
      // Deterministic reasons from the base report persist since legacy AI has no reasons
      if (merged.nextFocus.reasons) {
        expect(Array.isArray(merged.nextFocus.reasons)).toBe(true);
      }
    });

    it('sets whereScoreBrokeDown note from uncertainties', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeLegacy);
      const whereSec = merged.sections.find(s => s.id === 'whereScoreBrokeDown');
      expect(whereSec.note).toBe(aiNarrativeLegacy.uncertainties);
    });
  });

  describe('structured (v2) narrative', () => {
    it('sets bodyPoints from scoreImpactPoints array', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeV2);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.bodyPoints).toEqual(aiNarrativeV2.scoreImpactPoints);
      expect(whySec.source).toBe('ai');
    });

    it('sets behaviorPoints from behaviorInsightPoints array', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeV2);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.behaviorPoints).toEqual(aiNarrativeV2.behaviorInsightPoints);
    });

    it('sets changesSinceLast on whyThisScore section', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeV2);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.changesSinceLast).toBe(aiNarrativeV2.changesSinceLast);
    });

    it('sets nextFocus headline and reasons from structured topNextFocus', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeV2);
      expect(merged.nextFocus.text).toBe(aiNarrativeV2.topNextFocus.headline);
      expect(merged.nextFocus.reasons).toEqual(aiNarrativeV2.topNextFocus.reasons);
      expect(merged.nextFocus.source).toBe('ai');
    });

    it('body is a joined string of bodyPoints for fallback rendering', () => {
      const merged = mergeAiIntoReport(getBaseReport(), aiNarrativeV2);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.body).toBe(aiNarrativeV2.scoreImpactPoints.join(' '));
    });
  });

  describe('multi-sentence legacy strings are split into bullets', () => {
    it('splits diagnosis prose into hero headline points', () => {
      const ai = {
        ...aiNarrativeLegacy,
        diagnosis: 'You are far below target because concept gaps dominate. Fatigue is causing a sharp second-half drop. Fast guesses on medium and hard questions add avoidable misses.',
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      expect(Array.isArray(merged.hero.headlinePoints)).toBe(true);
      expect(merged.hero.headlinePoints.length).toBe(3);
    });

    it('splits scoreImpact prose into multiple bodyPoints', () => {
      const ai = {
        ...aiNarrativeLegacy,
        scoreImpact: 'Algebra errors cost 30 points. Geometry accuracy of 57% adds another 20 points of drag. Easy-question misses are the fastest recovery path.',
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.bodyPoints.length).toBe(3);
      expect(whySec.bodyPoints[0]).toContain('Algebra errors');
      expect(whySec.bodyPoints[2]).toContain('fastest recovery');
    });

    it('splits behaviorInsights prose into multiple behaviorPoints', () => {
      const ai = {
        ...aiNarrativeLegacy,
        behaviorInsights: 'You changed answers 4 times. Two of those changes went from correct to incorrect. Rushing on easy questions is a consistent pattern.',
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      const whySec = merged.sections.find(s => s.id === 'whyThisScore');
      expect(whySec.behaviorPoints.length).toBe(3);
    });

    it('splits multi-sentence topNextFocus string into text + reasons', () => {
      const ai = {
        diagnosis: 'Test headline.',
        topNextFocus: 'Focus on factoring first. It accounts for 20 lost points. You already know the underlying concepts.',
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      expect(merged.nextFocus.text).toBe('Focus on factoring first.');
      expect(merged.nextFocus.reasons).toEqual([
        'It accounts for 20 lost points.',
        'You already know the underlying concepts.',
      ]);
    });
  });

  describe('malformed topNextFocus.reasons as string', () => {
    it('normalizes a string reasons field into an array', () => {
      const ai = {
        diagnosis: 'Test.',
        topNextFocus: {
          headline: 'Focus on algebra.',
          reasons: 'Three easy misses cost 30 points. These are recoverable.',
        },
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      expect(Array.isArray(merged.nextFocus.reasons)).toBe(true);
      expect(merged.nextFocus.reasons.length).toBe(2);
    });

    it('handles missing reasons gracefully', () => {
      const ai = {
        diagnosis: 'Test.',
        topNextFocus: { headline: 'Focus on algebra.' },
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      expect(merged.nextFocus.text).toBe('Focus on algebra.');
    });
  });

  describe('structured diagnosis points', () => {
    it('uses diagnosisPoints array when provided', () => {
      const ai = {
        diagnosis: 'Fallback diagnosis sentence.',
        diagnosisPoints: [
          'Conceptual gaps account for most of your misses.',
          'Second-half accuracy drops sharply due to fatigue.',
          'Rushing medium and hard items is compounding losses.',
        ],
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      expect(merged.hero.headlinePoints).toEqual(ai.diagnosisPoints);
    });
  });

  describe('weakness proof normalization', () => {
    it('splits a proof string into bullet array', () => {
      const ai = {
        weaknesses: [
          { title: 'Factoring', why: 'Gaps.', proof: '0/3 on factoring. Most errors in Module 2.', impact: '~20 pts', severity: 'critical' },
        ],
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      const sec = merged.sections.find(s => s.id === 'patternsThatDroveScore');
      expect(Array.isArray(sec.patterns[0].proof)).toBe(true);
      expect(sec.patterns[0].proof.length).toBe(2);
    });

    it('preserves well-formed proof arrays', () => {
      const ai = {
        weaknesses: [
          { title: 'Factoring', why: 'Gaps.', proof: ['0/3', 'Module 2'], impact: '~20 pts', severity: 'critical' },
        ],
      };
      const merged = mergeAiIntoReport(getBaseReport(), ai);
      const sec = merged.sections.find(s => s.id === 'patternsThatDroveScore');
      expect(sec.patterns[0].proof).toEqual(['0/3', 'Module 2']);
    });
  });
});

describe('splitTextToBullets', () => {
  it('returns empty array for non-string input', () => {
    expect(splitTextToBullets(null)).toEqual([]);
    expect(splitTextToBullets(undefined)).toEqual([]);
    expect(splitTextToBullets(42)).toEqual([]);
    expect(splitTextToBullets('')).toEqual([]);
  });

  it('returns single-element array for a single sentence', () => {
    const result = splitTextToBullets('Your score is 650.');
    expect(result).toEqual(['Your score is 650.']);
  });

  it('splits multi-sentence prose on sentence boundaries', () => {
    const text = 'Algebra errors cost 30 points. Geometry accuracy is low. Easy misses are recoverable.';
    const result = splitTextToBullets(text);
    expect(result).toHaveLength(3);
    expect(result[0]).toBe('Algebra errors cost 30 points.');
    expect(result[2]).toBe('Easy misses are recoverable.');
  });

  it('splits newline-delimited text', () => {
    const text = 'First insight\nSecond insight\nThird insight';
    const result = splitTextToBullets(text);
    expect(result).toHaveLength(3);
  });

  it('strips bullet prefixes from newline-delimited text', () => {
    const text = '- First point\n- Second point\n- Third point';
    const result = splitTextToBullets(text);
    expect(result).toEqual(['First point', 'Second point', 'Third point']);
  });

  it('strips numbered prefixes', () => {
    const text = '1. First\n2. Second\n3. Third';
    const result = splitTextToBullets(text);
    expect(result).toEqual(['First', 'Second', 'Third']);
  });

  it('strips Unicode bullet prefixes', () => {
    const text = '• Alpha\n• Beta\n• Gamma';
    const result = splitTextToBullets(text);
    expect(result).toEqual(['Alpha', 'Beta', 'Gamma']);
  });

  it('handles mixed newline + empty lines', () => {
    const text = 'Line one\n\nLine two\n\n\nLine three';
    const result = splitTextToBullets(text);
    expect(result).toHaveLength(3);
  });
});

describe('normalizeReasons', () => {
  it('returns empty array for undefined/null', () => {
    expect(normalizeReasons(undefined)).toEqual([]);
    expect(normalizeReasons(null)).toEqual([]);
  });

  it('splits a multi-sentence string into reasons', () => {
    const result = normalizeReasons('First reason. Second reason. Third reason.');
    expect(result).toHaveLength(3);
  });

  it('preserves a well-formed array', () => {
    expect(normalizeReasons(['A', 'B', 'C'])).toEqual(['A', 'B', 'C']);
  });

  it('splits multi-sentence items within an array', () => {
    const result = normalizeReasons(['Short.', 'Two sentences here. And another here.']);
    expect(result).toHaveLength(3);
  });

  it('filters out non-string array elements', () => {
    const result = normalizeReasons([42, null, 'Valid point']);
    expect(result).toEqual(['Valid point']);
  });
});

// ═══════════════════════════════════════════════════════════════
// buildUnifiedReport — deduplication, conflict guards, budgets
// ═══════════════════════════════════════════════════════════════

describe('buildUnifiedReport', () => {
  function makeMergedReport(overrides = {}) {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const merged = mergeAiIntoReport(base.report, null);
    return { ...merged, ...overrides };
  }

  it('returns null when input is null', () => {
    expect(buildUnifiedReport(null)).toBeNull();
  });

  describe('shape contract', () => {
    let uni;
    beforeAll(() => {
      uni = buildUnifiedReport(makeMergedReport());
    });

    it('has all top-level keys', () => {
      expect(uni).toHaveProperty('diagnosis');
      expect(uni).toHaveProperty('scoreDrivers');
      expect(uni).toHaveProperty('behaviorInsights');
      expect(uni).toHaveProperty('changesSinceLast');
      expect(uni).toHaveProperty('evidence');
      expect(uni).toHaveProperty('nextFocus');
      expect(uni).toHaveProperty('meta');
    });

    it('diagnosis has points array of structured objects', () => {
      expect(Array.isArray(uni.diagnosis.points)).toBe(true);
      uni.diagnosis.points.forEach(pt => {
        expect(typeof pt).toBe('object');
        expect(typeof pt.text).toBe('string');
      });
    });

    it('scoreDrivers is a non-empty array', () => {
      expect(Array.isArray(uni.scoreDrivers)).toBe(true);
      expect(uni.scoreDrivers.length).toBeGreaterThan(0);
    });

    it('nextFocus has text, reasons array, and source', () => {
      expect(typeof uni.nextFocus.text).toBe('string');
      expect(Array.isArray(uni.nextFocus.reasons)).toBe(true);
      expect(typeof uni.nextFocus.source).toBe('string');
    });

    it('meta has stats array and hasAI boolean', () => {
      expect(Array.isArray(uni.meta.stats)).toBe(true);
      expect(typeof uni.meta.hasAI).toBe('boolean');
    });
  });

  describe('deduplication', () => {
    it('removes identical diagnosis points', () => {
      const report = makeMergedReport();
      report.hero.headlinePoints = ['Same insight.', 'Same insight.', 'Different insight.'];
      const uni = buildUnifiedReport(report);
      expect(diagTexts(uni)).toHaveLength(2);
    });

    it('removes identical nextFocus reasons', () => {
      const report = makeMergedReport();
      report.nextFocus.reasons = ['Reason A', 'Reason A', 'Reason B'];
      const uni = buildUnifiedReport(report);
      expect(uni.nextFocus.reasons).toHaveLength(2);
    });

    it('does not show a behavior insight that already appears in scoreDrivers', () => {
      const report = makeMergedReport();
      report._deterministicBehavior = [];
      const sharedText = 'You rushed through easy questions';
      const whySec = report.sections.find(s => s.id === 'whyThisScore');
      whySec.bodyPoints = [sharedText, 'Unique score insight'];
      whySec.behaviorPoints = [sharedText, 'Unique behavior insight'];
      const uni = buildUnifiedReport(report);
      const bTexts = uni.behaviorInsights.map(bi => typeof bi === 'string' ? bi : bi.text);
      expect(bTexts).not.toContain(sharedText);
      expect(uni.behaviorInsights.length).toBe(1);
      expect(bTexts[0]).toBe('Unique behavior insight');
    });
  });

  describe('section budgets', () => {
    it('caps diagnosis points at 5', () => {
      const report = makeMergedReport();
      report.hero.headlinePoints = ['A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.'];
      const uni = buildUnifiedReport(report);
      expect(uni.diagnosis.points.length).toBeLessThanOrEqual(5);
    });

    it('allows up to 5 diagnosis points when evidence supports it', () => {
      const report = makeMergedReport();
      report.hero.headlinePoints = ['One.', 'Two.', 'Three.', 'Four.', 'Five.'];
      const uni = buildUnifiedReport(report);
      expect(uni.diagnosis.points).toHaveLength(5);
    });

    it('caps scoreDrivers at 5', () => {
      const report = makeMergedReport();
      const whySec = report.sections.find(s => s.id === 'whyThisScore');
      whySec.bodyPoints = Array.from({ length: 10 }, (_, i) => `Score insight ${i}`);
      const uni = buildUnifiedReport(report);
      expect(uni.scoreDrivers.length).toBeLessThanOrEqual(5);
    });

    it('caps behaviorInsights at 3', () => {
      const report = makeMergedReport();
      const whySec = report.sections.find(s => s.id === 'whyThisScore');
      whySec.bodyPoints = [];
      whySec.behaviorPoints = Array.from({ length: 6 }, (_, i) => `Behavior signal ${i}`);
      const uni = buildUnifiedReport(report);
      expect(uni.behaviorInsights.length).toBeLessThanOrEqual(3);
    });

    it('caps nextFocus reasons at 3', () => {
      const report = makeMergedReport();
      report.nextFocus.reasons = ['A', 'B', 'C', 'D', 'E'];
      const uni = buildUnifiedReport(report);
      expect(uni.nextFocus.reasons.length).toBeLessThanOrEqual(3);
    });

    it('caps evidence at 8', () => {
      const report = makeMergedReport();
      const whySec = report.sections.find(s => s.id === 'whyThisScore');
      whySec.proof = Array.from({ length: 12 }, (_, i) => ({ label: `Stat ${i}`, value: `${i}`, type: 'neutral' }));
      const uni = buildUnifiedReport(report);
      expect(uni.evidence.length).toBeLessThanOrEqual(8);
    });

    it('caps meta stats at 4', () => {
      const report = makeMergedReport();
      report.hero.stats = Array.from({ length: 7 }, (_, i) => ({ label: `S${i}`, value: `${i}` }));
      const uni = buildUnifiedReport(report);
      expect(uni.meta.stats.length).toBeLessThanOrEqual(4);
    });
  });

  describe('conflict resolution: evidence vs drivers', () => {
    it('evidence items whose canonical key matches a scoreDriver are excluded', () => {
      const report = makeMergedReport();
      const whySec = report.sections.find(s => s.id === 'whyThisScore');
      const sharedLabel = 'PointsToTarget';
      const sharedValue = '50 points';
      whySec.bodyPoints = [`${sharedLabel} ${sharedValue}`];
      whySec.proof = [{ label: sharedLabel, value: sharedValue, type: 'warning' }];
      const uni = buildUnifiedReport(report);
      const matchingEvidence = uni.evidence.filter(e =>
        (e.label + ' ' + e.value).toLowerCase().replace(/[^a-z0-9]/g, '').includes('pointstotarget50points')
      );
      expect(matchingEvidence).toHaveLength(0);
    });

    it('evidence items not in scoreDrivers are preserved', () => {
      const report = makeMergedReport();
      const whySec = report.sections.find(s => s.id === 'whyThisScore');
      whySec.bodyPoints = ['Score insight X'];
      whySec.proof = [{ label: 'Unique Stat', value: '42%', type: 'neutral' }];
      const uni = buildUnifiedReport(report);
      const found = uni.evidence.some(e => e.label === 'Unique Stat');
      expect(found).toBe(true);
    });
  });

  describe('AI merge flow', () => {
    it('hasAI is true when hero has AI headline points and a section is sourced from AI', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'AI top diagnosis.',
        diagnosisPoints: ['AI bullet one', 'AI bullet two'],
        scoreImpactPoints: ['AI score impact A'],
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.meta.hasAI).toBe(true);
      expect(diagTexts(uni)).toContain('AI bullet one');
    });
  });

  describe('confidence-based arbitration', () => {
    it('filters out low-confidence diagnosis claims', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Main headline.',
        diagnosisPoints: [
          { claim: 'High confidence claim', evidence: 'Data X', confidence: 'high' },
          { claim: 'Low confidence claim', evidence: 'Weak signal', confidence: 'low' },
          { claim: 'Medium confidence claim', evidence: 'Data Y', confidence: 'medium' },
        ],
        scoreImpactPoints: [],
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(diagTexts(uni)).toContain('High confidence claim');
      expect(diagTexts(uni)).toContain('Medium confidence claim');
      expect(diagTexts(uni)).not.toContain('Low confidence claim');
    });

    it('filters out low-confidence score impact claims', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Headline.',
        diagnosisPoints: [{ claim: 'Diag', evidence: 'E', confidence: 'high' }],
        scoreImpactPoints: [
          { claim: 'Strong score insight', evidence: '3/4 wrong', confidence: 'high' },
          { claim: 'Weak score guess', evidence: 'Maybe...', confidence: 'low' },
        ],
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      const aiDriverTexts = uni.scoreDrivers.filter(d => d.source === 'ai').map(d => d.text);
      expect(aiDriverTexts).toContain('Strong score insight');
      expect(aiDriverTexts).not.toContain('Weak score guess');
    });

    it('filters out low-confidence behavior claims', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Headline.',
        diagnosisPoints: [{ claim: 'Diag', evidence: 'E', confidence: 'high' }],
        behaviorInsightPoints: [
          { claim: 'Solid behavior signal', evidence: '3 answer changes', confidence: 'high' },
          { claim: 'Dubious behavior claim', evidence: 'unclear', confidence: 'low' },
        ],
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(behaviorTexts(uni)).toContain('Solid behavior signal');
      expect(behaviorTexts(uni)).not.toContain('Dubious behavior claim');
    });

    it('behavior insights are structured objects with text, evidence, mechanism fields', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Headline.',
        diagnosisPoints: [{ claim: 'Diag', evidence: 'E', confidence: 'high' }],
        behaviorInsightPoints: [
          { claim: 'Answer changes hurt', evidence: '3 changed; 20s avg', causalMechanism: 'Second-guessing under pressure', estimatedImpact: '~30 pts', confidence: 'high' },
        ],
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.behaviorInsights.length).toBeGreaterThan(0);
      const first = uni.behaviorInsights[0];
      expect(first).toHaveProperty('text', 'Answer changes hurt');
      expect(first).toHaveProperty('evidence', '3 changed; 20s avg');
      expect(first).toHaveProperty('mechanism', 'Second-guessing under pressure');
      expect(first).toHaveProperty('estimatedImpact', '~30 pts');
      expect(first).toHaveProperty('source', 'ai');
    });

    it('supplements thin AI behavior with deterministic outcomes', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Headline.',
        diagnosisPoints: [{ claim: 'Diag', evidence: 'E', confidence: 'high' }],
        behaviorInsightPoints: [
          { claim: 'Single AI behavior', evidence: 'Data', confidence: 'high' },
        ],
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.behaviorInsights.length).toBeGreaterThanOrEqual(1);
      const sources = uni.behaviorInsights.map(bi => bi.source);
      if (uni.behaviorInsights.length > 1) {
        expect(sources).toContain('deterministic');
      }
    });
  });

  describe('contradiction suppression', () => {
    it('suppresses behavior claims contradicting improving trend', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Overall improving.',
        diagnosisPoints: [{ claim: 'Improving overall', evidence: '+40 pts', confidence: 'high' }],
        behaviorInsightPoints: [
          { claim: 'Stamina is declining sharply', evidence: 'Data', confidence: 'high' },
          { claim: 'Pacing improved by 10%', evidence: 'Data', confidence: 'high' },
        ],
        consistencyFlags: { trendDirection: 'improving', dominantErrorCategory: 'careless' },
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(behaviorTexts(uni)).not.toContain('Stamina is declining sharply');
      expect(behaviorTexts(uni)).toContain('Pacing improved by 10%');
    });

    it('suppresses behavior claims contradicting declining trend', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Score dropped.',
        diagnosisPoints: [{ claim: 'Score declined', evidence: '-30 pts', confidence: 'high' }],
        behaviorInsightPoints: [
          { claim: 'Time management is improving', evidence: 'Data', confidence: 'high' },
          { claim: 'More careless errors than before', evidence: '5 vs 2', confidence: 'high' },
        ],
        consistencyFlags: { trendDirection: 'declining', dominantErrorCategory: 'careless' },
        weaknesses: [],
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(behaviorTexts(uni)).not.toContain('Time management is improving');
      expect(behaviorTexts(uni)).toContain('More careless errors than before');
    });
  });

  describe('quality gate fallback', () => {
    it('falls back to deterministic when quality gate failed', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'AI headline',
        diagnosisPoints: [{ claim: 'AI claim', evidence: 'E', confidence: 'high' }],
        scoreImpactPoints: [{ claim: 'AI score claim', evidence: 'E', confidence: 'high' }],
        behaviorInsightPoints: [{ claim: 'AI behavior', evidence: 'E', confidence: 'high' }],
        weaknesses: [],
        _quality: { total: 0.3, repairFailed: true, evidenceCoverage: 0.2, numericSpecificity: 0.2, schemaCompleteness: 0.5, contradictionPenalty: 0, redundancyPenalty: 0 },
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.meta.qualityFailed).toBe(true);
      const aiDrivers = uni.scoreDrivers.filter(d => d.source === 'ai');
      expect(aiDrivers).toHaveLength(0);
    });

    it('uses AI claims when quality gate passed', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'AI headline',
        diagnosisPoints: [{ claim: 'Verified AI claim', evidence: 'Strong data', confidence: 'high' }],
        scoreImpactPoints: [{ claim: 'Verified score claim', evidence: 'Strong data', confidence: 'high' }],
        weaknesses: [],
        _quality: { total: 0.85, repaired: false, evidenceCoverage: 0.9, numericSpecificity: 0.8, schemaCompleteness: 1.0, contradictionPenalty: 0, redundancyPenalty: 0 },
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.meta.qualityFailed).toBe(false);
      expect(uni.meta.qualityScore).toBe(0.85);
      expect(diagTexts(uni)).toContain('Verified AI claim');
    });
  });

  describe('quality metadata in unified report', () => {
    it('surfaces promptVersion and quality score', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Test.',
        diagnosisPoints: [{ claim: 'Claim', evidence: 'E', confidence: 'high' }],
        weaknesses: [],
        _promptVersion: '2.0',
        _quality: { total: 0.75, repaired: false, evidenceCoverage: 0.8, numericSpecificity: 0.7, schemaCompleteness: 0.83, contradictionPenalty: 0, redundancyPenalty: 0 },
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.meta.promptVersion).toBe('2.0');
      expect(uni.meta.qualityScore).toBe(0.75);
      expect(uni.meta.qualityRepaired).toBe(false);
    });

    it('surfaces uncertainty in meta', () => {
      const base = adaptDiagnosticForUI(buildReport(), {});
      const ai = {
        diagnosis: 'Test.',
        diagnosisPoints: [{ claim: 'Claim', evidence: 'E', confidence: 'high' }],
        weaknesses: [],
        uncertainties: 'Only one test attempt available.',
      };
      const merged = mergeAiIntoReport(base.report, ai);
      const uni = buildUnifiedReport(merged);
      expect(uni.meta.uncertainties).toBe('Only one test attempt available.');
    });
  });
});

// ═══════════════════════════════════════════════════════════════
// buildNarrativeFlow — ordered story, single-mention, details toggle
// ═══════════════════════════════════════════════════════════════

describe('buildNarrativeFlow', () => {
  function makeUnified(overrides = {}) {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const uni = buildUnifiedReport(mergeAiIntoReport(base.report, null));
    return { ...uni, ...overrides };
  }

  it('returns null when input is null', () => {
    expect(buildNarrativeFlow(null)).toBeNull();
  });

  describe('block ordering', () => {
    let flow;
    beforeAll(() => {
      flow = buildNarrativeFlow(makeUnified());
    });

    it('returns blocks and details', () => {
      expect(flow).toHaveProperty('blocks');
      expect(flow).toHaveProperty('details');
      expect(flow).toHaveProperty('meta');
      expect(Array.isArray(flow.blocks)).toBe(true);
    });

    it('context block is always first', () => {
      expect(flow.blocks[0].id).toBe('context');
    });

    it('nextMove block is always last in blocks array', () => {
      const last = flow.blocks[flow.blocks.length - 1];
      expect(last.id).toBe('nextMove');
    });

    it('blocks follow strict order: context -> metaStrip -> behaviorAmplifier -> remediationPath -> evidence -> nextMove', () => {
      const order = ['context', 'metaStrip', 'behaviorAmplifier', 'remediationPath', 'evidence', 'nextMove'];
      const ids = flow.blocks.map(b => b.id);
      let lastIdx = -1;
      ids.forEach(id => {
        const pos = order.indexOf(id);
        expect(pos).toBeGreaterThan(lastIdx);
        lastIdx = pos;
      });
    });
  });

  describe('single-mention invariant', () => {
    it('no claim text appears in more than one block', () => {
      const uni = makeUnified();
      const flow = buildNarrativeFlow(uni);
      const allTexts = [];
      flow.blocks.forEach(block => {
        if (block.style === 'headline' || block.style === 'bullet' || block.style === 'behavior') {
          block.items.forEach(item => allTexts.push(typeof item === 'string' ? item : item.text || item.title || ''));
        }
        if (block.style === 'grid') {
          block.items.forEach(ev => allTexts.push(`${ev.label} ${ev.value}`));
        }
        if (block.style === 'cta') {
          block.items.forEach(item => {
            allTexts.push(item.text || '');
            (item.reasons || []).forEach(r => allTexts.push(r));
          });
        }
      });
      const normalized = allTexts.map(t => t.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60));
      const unique = new Set(normalized);
      expect(unique.size).toBe(normalized.length);
    });
  });

  describe('transitions', () => {
    it('non-context blocks have transition strings', () => {
      const flow = buildNarrativeFlow(makeUnified());
      flow.blocks.slice(1).forEach(block => {
        if (block.id === 'metaStrip') return;
        expect(typeof block.transition).toBe('string');
        expect(block.transition.length).toBeGreaterThan(0);
      });
    });
  });

  describe('details contain secondary content', () => {
    it('details has additionalDrivers, overflowDiagnosis, secondaryEvidence, uncertainties, qualityFailed', () => {
      const flow = buildNarrativeFlow(makeUnified());
      expect(flow.details).toHaveProperty('additionalDrivers');
      expect(flow.details).toHaveProperty('overflowDiagnosis');
      expect(flow.details).toHaveProperty('secondaryEvidence');
      expect(flow.details).toHaveProperty('uncertainties');
      expect(flow.details).toHaveProperty('qualityFailed');
      expect(Array.isArray(flow.details.additionalDrivers)).toBe(true);
      expect(Array.isArray(flow.details.overflowDiagnosis)).toBe(true);
      expect(Array.isArray(flow.details.secondaryEvidence)).toBe(true);
    });

    it('stats are present in main narrative blocks, not in details', () => {
      const flow = buildNarrativeFlow(makeUnified());
      const statsBlock = flow.blocks.find(b => b.id === 'metaStrip');
      expect(statsBlock).toBeDefined();
      expect(Array.isArray(statsBlock.items)).toBe(true);
      expect(statsBlock.items.length).toBeGreaterThan(0);
    });
  });

  describe('budget limits', () => {
    it('context block has at most 5 items and a separate title', () => {
      const uni = makeUnified({
        diagnosis: { points: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], headline: '' },
      });
      const flow = buildNarrativeFlow(uni);
      const ctx = flow.blocks.find(b => b.id === 'context');
      expect(ctx.items.length).toBeLessThanOrEqual(5);
    });

    it('score drivers are merged into context block (no separate primaryCause block)', () => {
      const flow = buildNarrativeFlow(makeUnified());
      const cause = flow.blocks.find(b => b.id === 'primaryCause');
      expect(cause).toBeUndefined();
      const ctx = flow.blocks.find(b => b.id === 'context');
      expect(ctx.items.length).toBeGreaterThan(0);
    });

    it('behaviorAmplifier block has at most 3 items', () => {
      const flow = buildNarrativeFlow(makeUnified());
      const beh = flow.blocks.find(b => b.id === 'behaviorAmplifier');
      if (beh) {
        expect(beh.items.length).toBeLessThanOrEqual(3);
      }
    });

    it('evidence block has at most 3 items', () => {
      const flow = buildNarrativeFlow(makeUnified());
      const ev = flow.blocks.find(b => b.id === 'evidence');
      if (ev) {
        expect(ev.items.length).toBeLessThanOrEqual(3);
      }
    });

    it('keeps at least one evidence item visible in the main story when score drivers exist', () => {
      const flow = buildNarrativeFlow(makeUnified());
      const hasDrivers = (makeUnified().scoreDrivers || []).length > 0;
      const ev = flow.blocks.find(b => b.id === 'evidence');
      if (hasDrivers) {
        expect(ev).toBeDefined();
        expect(ev.items.length).toBeGreaterThan(0);
      }
    });
  });

  describe('overlap suppression', () => {
    it('behavior items already in score drivers (merged into context) are excluded from behaviorAmplifier', () => {
      const sharedText = 'Rushed through easy questions';
      const uni = makeUnified({
        scoreDrivers: [{ text: sharedText, type: 'insight', source: 'ai' }],
        behaviorInsights: [
          { text: sharedText, evidence: null, mechanism: null, estimatedImpact: null, confidence: 'medium', source: 'ai' },
          { text: 'Unique behavior signal', evidence: null, mechanism: null, estimatedImpact: null, confidence: 'medium', source: 'ai' },
        ],
      });
      const flow = buildNarrativeFlow(uni);
      const beh = flow.blocks.find(b => b.id === 'behaviorAmplifier');
      if (beh) {
        const behTexts = beh.items.map(i => typeof i === 'string' ? i : i.text);
        expect(behTexts).not.toContain(sharedText);
      }
    });
  });

  describe('structured diagnosis preservation', () => {
    it('context block items are structured objects when unified report provides them', () => {
      const uni = makeUnified({
        diagnosis: {
          points: [
            { text: 'Claim A', evidence: 'Data A', causalMechanism: 'Root cause A', estimatedImpact: '~20 points', confidence: 'high' },
            { text: 'Claim B', evidence: 'Data B', causalMechanism: null, estimatedImpact: null, confidence: 'medium' },
          ],
          headline: '',
        },
      });
      const flow = buildNarrativeFlow(uni);
      const ctx = flow.blocks.find(b => b.id === 'context');
      expect(ctx.items[0]).toHaveProperty('text', 'Claim A');
      expect(ctx.items[0]).toHaveProperty('causalMechanism', 'Root cause A');
      expect(ctx.items[0]).toHaveProperty('estimatedImpact', '~20 points');
      expect(ctx.items[1]).toHaveProperty('text', 'Claim B');
    });

    it('overflow diagnosis items go to details when more than 5 provided', () => {
      const pts = Array.from({ length: 7 }, (_, i) => ({
        text: `Diagnosis item ${i}`,
        evidence: `Evidence ${i}`,
        causalMechanism: null,
        estimatedImpact: null,
        confidence: 'high',
      }));
      const uni = makeUnified({
        diagnosis: { points: pts, headline: '' },
        scoreDrivers: [],
      });
      const flow = buildNarrativeFlow(uni);
      const ctx = flow.blocks.find(b => b.id === 'context');
      expect(ctx.items.length).toBeLessThanOrEqual(5);
      expect(flow.details.overflowDiagnosis.length).toBe(2);
      expect(flow.details.overflowDiagnosis[0].text).toBe('Diagnosis item 5');
    });

    it('overflowDiagnosis is empty when 5 or fewer points', () => {
      const pts = Array.from({ length: 3 }, (_, i) => ({
        text: `Item ${i}`,
        evidence: null,
        causalMechanism: null,
        estimatedImpact: null,
        confidence: 'high',
      }));
      const uni = makeUnified({
        diagnosis: { points: pts, headline: '' },
        scoreDrivers: [],
      });
      const flow = buildNarrativeFlow(uni);
      expect(flow.details.overflowDiagnosis).toEqual([]);
    });
  });
});

// ═══════════════════════════════════════════════════════════════
// isGenericClaim — filters out vague/generic/obvious statements
// ═══════════════════════════════════════════════════════════════

describe('isGenericClaim', () => {
  it('rejects generic advice language', () => {
    expect(isGenericClaim('You should practice more to improve.')).toBe(true);
    expect(isGenericClaim('Review your mistakes and try again.')).toBe(true);
    expect(isGenericClaim('There is room for growth in algebra.')).toBe(true);
    expect(isGenericClaim('Focus on weak areas to boost your score.')).toBe(true);
    expect(isGenericClaim('You are struggling with geometry concepts.')).toBe(true);
    expect(isGenericClaim('Keep practicing to improve your skills.')).toBe(true);
  });

  it('rejects score restatement', () => {
    expect(isGenericClaim('You scored 650 out of 800.')).toBe(true);
    expect(isGenericClaim('Your score is 650.')).toBe(true);
    expect(isGenericClaim('You got 30/44 correct.')).toBe(true);
    expect(isGenericClaim('You are 50 points below your target.')).toBe(true);
  });

  it('accepts specific analytical claims', () => {
    expect(isGenericClaim('62% of your errors stem from conceptual gaps in geometry and algebra')).toBe(false);
    expect(isGenericClaim('Careless errors on 3 easy questions cost roughly 30 recoverable points')).toBe(false);
    expect(isGenericClaim('Answer changes hurt: 2 changed from correct to incorrect')).toBe(false);
    expect(isGenericClaim('Geometry accuracy dropped from 71% to 57% since last test')).toBe(false);
  });

  it('handles null/undefined/non-string input', () => {
    expect(isGenericClaim(null)).toBe(false);
    expect(isGenericClaim(undefined)).toBe(false);
    expect(isGenericClaim(42)).toBe(false);
    expect(isGenericClaim('')).toBe(false);
  });
});

// ═══════════════════════════════════════════════════════════════
// rankByClaimQuality — sorts claims by confidence, evidence, numerics
// ═══════════════════════════════════════════════════════════════

describe('rankByClaimQuality', () => {
  it('ranks high-confidence claims first', () => {
    const claims = [
      { text: 'Low conf claim', confidence: 'low', evidence: 'data' },
      { text: 'High conf claim', confidence: 'high', evidence: 'data' },
      { text: 'Med conf claim', confidence: 'medium', evidence: 'data' },
    ];
    const ranked = rankByClaimQuality(claims);
    expect(ranked[0].text).toBe('High conf claim');
    expect(ranked[1].text).toBe('Med conf claim');
    expect(ranked[2].text).toBe('Low conf claim');
  });

  it('ranks claims with evidence over those without', () => {
    const claims = [
      { text: 'No evidence at all', confidence: 'high', evidence: '' },
      { text: 'With strong evidence backing', confidence: 'high', evidence: 'Geometry: 4/7 correct (57%); Coordinate: 0/3' },
    ];
    const ranked = rankByClaimQuality(claims);
    expect(ranked[0].text).toBe('With strong evidence backing');
  });

  it('ranks numeric claims over non-numeric at same confidence', () => {
    const claims = [
      { text: 'Vague pattern observed in the data', confidence: 'high', evidence: 'long evidence text here and more' },
      { text: '62% of errors from conceptual gaps because of coordinate geometry', confidence: 'high', evidence: 'long evidence text here and more' },
    ];
    const ranked = rankByClaimQuality(claims);
    expect(ranked[0].text).toContain('62%');
  });

  it('returns empty array for empty input', () => {
    expect(rankByClaimQuality([])).toEqual([]);
  });

  it('does not mutate original array', () => {
    const original = [
      { text: 'B', confidence: 'low' },
      { text: 'A', confidence: 'high' },
    ];
    const copy = [...original];
    rankByClaimQuality(original);
    expect(original).toEqual(copy);
  });

  it('ranks deep causal claims above shallow descriptive ones at same confidence', () => {
    const claims = [
      { text: 'You missed 4 geometry questions', confidence: 'high', evidence: 'Geometry: 4/7 wrong', causalMechanism: '', estimatedImpact: '' },
      { text: '62% of errors stem from conceptual gaps because coordinate geometry foundations are missing', confidence: 'high', evidence: 'Geometry: 4/7 correct; Coordinate: 0/3; Time: 45s vs 70s', causalMechanism: 'Missing foundational understanding of coordinate geometry leads to errors on both easy and hard questions', estimatedImpact: '~30 points' },
    ];
    const ranked = rankByClaimQuality(claims);
    expect(ranked[0].text).toContain('62%');
  });

  it('rewards multi-signal evidence (semicolon count) at same confidence and depth', () => {
    const claims = [
      { text: 'Single-signal claim with 40% accuracy', confidence: 'high', evidence: 'Geometry: 4/7 correct', causalMechanism: 'Missing foundations leads to errors consistently', estimatedImpact: '~20 points' },
      { text: 'Multi-signal claim with 40% accuracy due to gaps', confidence: 'high', evidence: 'Geometry: 4/7 correct; Time: 45s vs 70s; Coordinate: 0/3', causalMechanism: 'Missing foundations leads to errors consistently', estimatedImpact: '~20 points' },
    ];
    const ranked = rankByClaimQuality(claims);
    expect(ranked[0].text).toContain('Multi-signal');
  });
});

// ═══════════════════════════════════════════════════════════════
// Sharpness: buildUnifiedReport filters generics & ranks quality
// ═══════════════════════════════════════════════════════════════

describe('buildUnifiedReport sharpness guardrails', () => {
  function makeMergedReport(overrides = {}) {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const merged = mergeAiIntoReport(base.report, null);
    return { ...merged, ...overrides };
  }

  it('filters out generic diagnosis points from AI', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Pattern headline.',
      diagnosisPoints: [
        { claim: '62% of errors stem from conceptual gaps', evidence: 'Data A', confidence: 'high' },
        { claim: 'You should practice more to improve.', evidence: 'Data B', confidence: 'high' },
        { claim: 'Careless errors cost 30 points', evidence: 'Data C', confidence: 'high' },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    expect(diagTexts(uni)).toContain('62% of errors stem from conceptual gaps');
    expect(diagTexts(uni)).toContain('Careless errors cost 30 points');
    expect(diagTexts(uni)).not.toContain('You should practice more to improve.');
  });

  it('filters out score restatement diagnosis points', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Pattern headline.',
      diagnosisPoints: [
        { claim: 'You scored 650 out of 800.', evidence: 'Score', confidence: 'high' },
        { claim: 'Geometry accuracy of 57% is the weakest domain', evidence: 'Geo data', confidence: 'high' },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    expect(diagTexts(uni)).not.toContain('You scored 650 out of 800.');
    expect(diagTexts(uni)).toContain('Geometry accuracy of 57% is the weakest domain');
  });

  it('filters generic claims from score drivers', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Headline.',
      diagnosisPoints: [{ claim: 'Insight', evidence: 'E', confidence: 'high' }],
      scoreImpactPoints: [
        { claim: 'Careless errors cost 30 recoverable points', evidence: '3 easy misses', confidence: 'high' },
        { claim: 'You need to focus on weak areas.', evidence: 'General', confidence: 'high' },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    const aiDriverTexts = uni.scoreDrivers.filter(d => d.source === 'ai').map(d => d.text);
    expect(aiDriverTexts).toContain('Careless errors cost 30 recoverable points');
    expect(aiDriverTexts).not.toContain('You need to focus on weak areas.');
  });

  it('applies contradiction suppression to diagnosis points', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Overall improving.',
      diagnosisPoints: [
        { claim: 'Score improved 20 points since last test', evidence: '+20 pts', confidence: 'high' },
        { claim: 'Performance is declining across all domains', evidence: 'Weak signal', confidence: 'medium' },
      ],
      consistencyFlags: { trendDirection: 'improving', dominantErrorCategory: 'careless' },
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    expect(diagTexts(uni)).not.toContain('Performance is declining across all domains');
  });

  it('ranks high-confidence AI diagnosis points above medium', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Headline.',
      diagnosisPoints: [
        { claim: 'Medium confidence insight about time', evidence: 'Time data', confidence: 'medium' },
        { claim: 'High confidence insight about 62% error rate', evidence: 'Strong data', confidence: 'high' },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    const texts = diagTexts(uni);
    const idx62 = texts.findIndex(p => p.includes('62%'));
    const idxTime = texts.findIndex(p => p.includes('time'));
    if (idx62 >= 0 && idxTime >= 0) {
      expect(idx62).toBeLessThan(idxTime);
    }
  });

  it('preserves structured fields (evidence, causalMechanism, estimatedImpact) on diagnosis points', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Headline.',
      diagnosisPoints: [
        {
          claim: '62% of errors from conceptual gaps in geometry',
          evidence: 'Geometry: 4/7 correct (57%)',
          causalMechanism: 'Missing coordinate geometry foundations',
          estimatedImpact: '~30 points',
          confidence: 'high',
        },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    const pt = uni.diagnosis.points.find(p => p.text.includes('62%'));
    expect(pt).toBeDefined();
    expect(pt.evidence).toBe('Geometry: 4/7 correct (57%)');
    expect(pt.causalMechanism).toBe('Missing coordinate geometry foundations');
    expect(pt.estimatedImpact).toBe('~30 points');
    expect(pt.confidence).toBe('high');
  });

  it('ranks claims with causal depth and impact above those without', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Headline.',
      diagnosisPoints: [
        { claim: 'Shallow claim about missing questions', evidence: 'Some evidence text', confidence: 'high' },
        { claim: 'Deep 62% claim because of coordinate geometry gaps leading to systematic errors', evidence: 'Geometry: 4/7 correct; Coordinate: 0/3; Time: 45s vs 70s', causalMechanism: 'Missing foundational understanding of coordinate geometry leads to systematic errors on both easy and hard geometry questions', estimatedImpact: '~40 points', confidence: 'high' },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    const uni = buildUnifiedReport(merged);
    const texts = diagTexts(uni);
    expect(texts[0]).toContain('Deep 62%');
  });
});

// ═══════════════════════════════════════════════════════════════
// buildDiagnosisNarrative — coherent tutor-voice spine (thesis + prose + bottom line)
// ═══════════════════════════════════════════════════════════════

describe('buildDiagnosisNarrative', () => {
  function uni(overrides = {}) {
    return {
      diagnosis: { points: [], headline: '' },
      scoreDrivers: [],
      behaviorInsights: [],
      meta: {},
      ...overrides,
    };
  }
  const point = (text, extra = {}) => ({ text, evidence: null, causalMechanism: null, estimatedImpact: null, confidence: 'medium', ...extra });

  it('returns null for null / empty input', () => {
    expect(buildDiagnosisNarrative(null)).toBeNull();
    expect(buildDiagnosisNarrative(uni())).toBeNull();
  });

  it('uses the AI thesis (meta.aiThesis) as the headline, sentence-terminated', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: { points: [point('You rush the back half, turning easy algebra into careless misses')], headline: '' },
      meta: { aiThesis: 'Your score comes down to pace under pressure' },
    }));
    expect(nar.thesis).toBe('Your score comes down to pace under pressure.');
  });

  it('falls back to the deterministic headline when no AI thesis is present', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: { points: [point('Geometry accuracy of 57% is dragging the score')], headline: '' },
      meta: { deterministicHeadline: 'Your biggest challenge: Geometry. Also affecting you: Factoring.' },
    }));
    expect(nar.thesis).toBe('Your biggest challenge: Geometry. Also affecting you: Factoring.');
  });

  it('does not use the placeholder deterministic headline', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: { points: [point('Careless errors on 3 easy questions cost ~30 points')], headline: '' },
      meta: { deterministicHeadline: 'Your performance analysis is ready.' },
    }));
    // Placeholder is rejected → the strongest point is promoted to the lead instead.
    expect(nar.thesis).toContain('Careless errors on 3 easy questions');
  });

  it('promotes the top point to the thesis and does not repeat it as a body paragraph', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: {
        points: [
          point('Careless errors on 3 easy questions cost ~30 points'),
          point('Geometry accuracy of 57% costs another ~20 points'),
        ],
        headline: '',
      },
      meta: {},
    }));
    expect(nar.thesis).toContain('Careless errors on 3 easy questions');
    expect(nar.paragraphs).toHaveLength(1);
    expect(nar.paragraphs[0].text).toContain('Geometry accuracy of 57%');
  });

  it('renders each point as flowing prose — no bullet shredding', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: {
        points: [point('You spend 45s on missed geometry vs 70s on correct; you sense the uncertainty but cannot resolve it in time')],
        headline: '',
      },
      meta: { aiThesis: 'Time, not knowledge, is the limiter' },
    }));
    // The whole sentence survives intact in one paragraph (semicolons preserved, not split into <li>s).
    expect(nar.paragraphs).toHaveLength(1);
    expect(nar.paragraphs[0].text).toContain('45s on missed geometry vs 70s on correct');
    expect(nar.paragraphs[0].text).toContain('cannot resolve it in time');
  });

  it('weaves a distinct causal mechanism into the paragraph prose', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: {
        points: [point('You missed 4 of 7 coordinate-geometry questions', {
          causalMechanism: 'the gap is conceptual rather than procedural — you know the steps but misapply them under spatial demands',
        })],
        headline: '',
      },
      meta: { aiThesis: 'A coordinate-geometry blind spot is the core story' },
    }));
    expect(nar.paragraphs[0].text).toContain('You missed 4 of 7 coordinate-geometry questions.');
    expect(nar.paragraphs[0].text).toContain('conceptual rather than procedural');
  });

  it('drops a body paragraph that merely restates the thesis', () => {
    const claim = 'Careless errors on easy questions are the single biggest drag on your score';
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: { points: [point(claim)], headline: '' },
      meta: { aiThesis: claim },
    }));
    expect(nar.thesis).toContain('Careless errors on easy questions');
    expect(nar.paragraphs).toHaveLength(0);
  });

  it('uses the AI rootCause as the bottom-line closing, and null when absent', () => {
    const withRoot = buildDiagnosisNarrative(uni({
      diagnosis: { points: [point('Back-half rushing drives careless misses')], headline: '' },
      meta: { aiThesis: 'Pace is the limiter', aiRootCause: 'More than anything, it is pace under pressure' },
    }));
    expect(withRoot.closingCause).toBe('More than anything, it is pace under pressure.');

    const withoutRoot = buildDiagnosisNarrative(uni({
      diagnosis: { points: [point('Back-half rushing drives careless misses')], headline: '' },
      meta: { aiThesis: 'Pace is the limiter' },
    }));
    expect(withoutRoot.closingCause).toBeNull();
  });

  it('skips score-restatement and generic points entirely', () => {
    const nar = buildDiagnosisNarrative(uni({
      diagnosis: {
        points: [
          point('You scored 650 out of 800'),          // score restatement → filtered
          point('Keep practicing and review your mistakes'), // generic → filtered
          point('Coordinate-geometry errors cost ~25 points'),
        ],
        headline: '',
      },
      meta: { aiThesis: 'A coordinate-geometry blind spot is the core story' },
    }));
    const allText = [nar.thesis, ...nar.paragraphs.map(p => p.text)].join(' ');
    expect(allText).not.toContain('You scored 650');
    expect(allText).not.toContain('Keep practicing');
    expect(allText).toContain('Coordinate-geometry errors');
  });

  it('integration: attaches a narrative to the context block through the full pipeline', () => {
    const base = adaptDiagnosticForUI(buildReport(), {});
    const ai = {
      diagnosis: 'Careless back-half errors, not missing knowledge, are the core story of this test.',
      rootCause: 'More than anything, it is pace under pressure in the second half.',
      diagnosisPoints: [
        { claim: 'Careless errors on 3 easy questions cost roughly 30 recoverable points because you answered them in under 30s', evidence: '3 easy misses; <30s each', causalMechanism: 'rushing familiar questions under time pressure rather than genuine difficulty', estimatedImpact: '~30 points', confidence: 'high' },
        { claim: 'Geometry accuracy of 57% drags the score by about 20 points', evidence: 'Geometry 4/7', causalMechanism: 'a coordinate-geometry blind spot', estimatedImpact: '~20 points', confidence: 'medium' },
      ],
      weaknesses: [],
    };
    const merged = mergeAiIntoReport(base.report, ai);
    expect(merged._aiThesis).toContain('Careless back-half errors');
    expect(merged._aiRootCause).toContain('pace under pressure');

    const uniReport = buildUnifiedReport(merged);
    expect(uniReport.meta.aiThesis).toContain('Careless back-half errors');

    const flow = buildNarrativeFlow(uniReport);
    const ctx = flow.blocks.find(b => b.id === 'context');
    expect(ctx.narrative).toBeTruthy();
    expect(ctx.narrative.thesis).toContain('Careless back-half errors');
    expect(ctx.narrative.closingCause).toContain('pace under pressure');
    expect(ctx.narrative.paragraphs.length).toBeGreaterThanOrEqual(1);
    // Paragraphs are connected prose, not bullet fragments.
    expect(ctx.narrative.paragraphs.every(p => p.text.trim().length > 30)).toBe(true);
  });
});
