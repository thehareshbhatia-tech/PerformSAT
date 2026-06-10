/**
 * groundTruth.test.js — pins the extracted-from-PracticeTest contract of
 * buildGroundTruthDiagnosis + enrichPlanWithGroundTruth (services/groundTruth.js).
 *
 * corpusLoader is mocked so this stays a fast, corpus-free unit test and so
 * enrich's bank routing can be asserted deterministically via
 * groundTruthBanksReady.
 */

// CRA's jest config sets resetMocks: true, which strips jest.fn(impl)
// implementations between tests — so implementations are (re)armed in the
// top-level beforeEach below, not passed to jest.fn here.
const mockMathTargeted = jest.fn();
const mockRWTargeted = jest.fn();

beforeEach(() => {
  mockMathTargeted.mockImplementation(() => ([
    { id: 'm1', domain: 'algebra', skills: ['linear-equations'], difficulty: 'medium' },
  ]));
  mockRWTargeted.mockImplementation(() => ([
    { id: 'rw1', domain: 'standard-english-conventions', skills: ['transitions'], difficulty: 'easy' },
  ]));
});

jest.mock('../../data/corpusLoader', () => ({
  loadMathBank: () => Promise.resolve({ getTargetedWeaknessSet: (args) => mockMathTargeted(args) }),
  loadRWBank: () => Promise.resolve({ getTargetedWeaknessSet: (args) => mockRWTargeted(args) }),
}));

const {
  buildGroundTruthDiagnosis,
  enrichPlanWithGroundTruth,
  groundTruthBanksReady,
} = require('../groundTruth');

// Minimal synthetic diagnostic report shaped like runDiagnostic() output for
// a 2-module test ({ modules: [{ section: 'reading-writing' }, { section:
// 'math' }] }) — questionAnalysis keys are `modIdx-qIdx`.
function makeDiagReport() {
  return {
    skillAnalysis: {
      weakSkills: [
        {
          skillId: 'linear-equations',
          name: 'Linear Equations',
          correct: 1,
          total: 4,
          testAccuracy: 25,
          primaryErrorType: 'conceptual_gap',
          historicalMastery: null,
          trend: 'declining',
          domain: 'algebra',
          modules: ['module-2'],
          sections: ['module-2'],
          section: 'math',
          missedPatterns: ['slope-from-two-points'],
        },
        {
          skillId: 'transitions',
          name: 'Transitions',
          correct: 2,
          total: 5,
          testAccuracy: 40,
          primaryErrorType: 'trap_susceptibility',
          historicalMastery: 78,
          trend: 'stable',
          domain: 'expression-of-ideas',
          section: 'rw',
          missedPatterns: ['transition-contrast'],
        },
      ],
      strongSkills: [
        {
          skillId: 'words-in-context',
          name: 'Words in Context',
          correct: 5,
          total: 5,
          testAccuracy: 100,
          trend: 'improving',
          domain: 'craft-and-structure',
        },
      ],
    },
    trendAnalysis: {
      persistentWeaknesses: [{ name: 'Linear Equations', testCount: 2 }],
    },
    answerPatterns: {
      answerChanges: {
        total: 3,
        changedToCorrect: 1,
        changedToWrong: 2,
        firstInstinctAccuracy: 60,
        advice: 'Your first instinct is usually right — change answers only with concrete evidence.',
      },
    },
    stamina: {
      hasData: true,
      staminaScore: 72,
      rating: 'fair',
      dropoff: 12,
      message: 'Accuracy dropped 12% in the final third of each module.',
    },
    questionAnalysis: [
      { key: '0-0', skills: ['words-in-context'], timeSpent: 40, difficulty: 'easy' },
      { key: '0-1', skills: ['words-in-context'], timeSpent: 35, difficulty: 'medium' },
      { key: '1-0', skills: ['linear-equations'], timeSpent: 60, difficulty: 'easy' },
      { key: '1-1', skills: ['linear-equations'], timeSpent: 90, difficulty: 'hard' },
    ],
  };
}

const rawTelemetry = {
  '1-0': { usedCalculator: true },
  '1-1': { usedCalculator: true },
};

describe('groundTruth service exports', () => {
  it('exports both functions and the readiness promise', () => {
    expect(typeof buildGroundTruthDiagnosis).toBe('function');
    expect(typeof enrichPlanWithGroundTruth).toBe('function');
    expect(typeof groundTruthBanksReady.then).toBe('function');
  });
});

describe('buildGroundTruthDiagnosis', () => {
  it('maps weak skills into the drill-shape weakness contract', () => {
    const gt = buildGroundTruthDiagnosis(makeDiagReport(), rawTelemetry);

    expect(gt.weaknesses).toHaveLength(2);
    const [math, rw] = gt.weaknesses;

    expect(math.skillId).toBe('linear-equations');
    expect(math.skill).toBe('Linear Equations');
    expect(math.accuracy).toBe(25);
    expect(math.errorType).toBe('Conceptual Gap');
    expect(math.section).toBe('math');
    expect(math.domain).toBe('algebra');
    expect(math.missedPatterns).toEqual(['slope-from-two-points']);
    // avg of 60s + 90s on the two linear-equations questions
    expect(math.evidence).toBe(
      '1/4 correct, primary error: Conceptual Gap, avg 75s/q, first time tested (declining)'
    );

    expect(rw.section).toBe('rw');
    expect(rw.errorType).toBe('Trap Answer');
    // no questionAnalysis rows for transitions -> avg 0 -> degenerate-timing
    // guard suppresses the avg note; historicalMastery present
    expect(rw.evidence).toBe(
      '2/5 correct, primary error: Trap Answer, historical mastery 78%'
    );
    expect(rw.evidence).not.toContain('avg');
  });

  it('maps strong skills with the improving note', () => {
    const gt = buildGroundTruthDiagnosis(makeDiagReport(), rawTelemetry);
    expect(gt.strengths).toHaveLength(1);
    expect(gt.strengths[0]).toEqual({
      skill: 'Words in Context',
      evidence: '5/5 correct, avg 38s/q and still improving',
      accuracy: 100,
      domain: 'craft-and-structure',
    });
  });

  it('computes calculator dependency from telemetry', () => {
    const gt = buildGroundTruthDiagnosis(makeDiagReport(), rawTelemetry);
    expect(gt.calculatorDependency).toEqual({
      usagePercent: 50, // 2 of 4 questions
      easyQuestionsWithCalculator: 1, // key 1-0 is easy
      insight: 'Calculator used on 50% of questions — reasonable usage',
    });
  });

  it('surfaces elimination effectiveness, persistent weaknesses, and stamina', () => {
    const gt = buildGroundTruthDiagnosis(makeDiagReport(), rawTelemetry);
    expect(gt.eliminationEffectiveness).toEqual({
      totalChanges: 3,
      changedToCorrect: 1,
      changedToWrong: 2,
      accuracy: 60,
      insight: 'Your first instinct is usually right — change answers only with concrete evidence.',
    });
    expect(gt.persistentWeaknesses).toEqual([
      { skill: 'Linear Equations', testsWeak: 2, insight: 'Weak across 2 tests — needs focused remediation' },
    ]);
    expect(gt.staminaInsight).toEqual({
      score: 72,
      rating: 'fair',
      dropoff: 12,
      message: 'Accuracy dropped 12% in the final third of each module.',
    });
  });

  it('degrades gracefully on a minimal/empty report (mini-diagnostic floor)', () => {
    const gt = buildGroundTruthDiagnosis({}, null);
    expect(gt).toEqual({
      strengths: [],
      weaknesses: [],
      calculatorDependency: null,
      eliminationEffectiveness: null,
      persistentWeaknesses: [],
      staminaInsight: null,
    });
  });
});

describe('enrichPlanWithGroundTruth', () => {
  it('returns falsy plans unchanged', () => {
    expect(enrichPlanWithGroundTruth(null, {})).toBeNull();
  });

  it('copies the ground truth onto the plan and fills targeted questions by section', async () => {
    await groundTruthBanksReady;
    const gt = buildGroundTruthDiagnosis(makeDiagReport(), rawTelemetry);
    const plan = enrichPlanWithGroundTruth({}, gt);

    expect(plan.weaknesses).toBe(gt.weaknesses);
    expect(plan.strengths).toBe(gt.strengths);
    expect(plan.calculatorDependency).toBe(gt.calculatorDependency);
    expect(plan.staminaInsight).toBe(gt.staminaInsight);

    // math weakness routed to the math bank, rw weakness to the rw bank
    expect(mockMathTargeted).toHaveBeenCalledTimes(1);
    expect(mockMathTargeted).toHaveBeenCalledWith({
      weakSkills: [{
        skillId: 'linear-equations',
        domain: 'algebra',
        section: 'math',
        missedPatterns: ['slope-from-two-points'],
      }],
      count: 15,
      difficultyMix: { easy: 0.3, medium: 0.45, hard: 0.25 },
    });
    expect(mockRWTargeted).toHaveBeenCalledTimes(1);
    expect(mockRWTargeted).toHaveBeenCalledWith({
      weakSkills: [{
        skillId: 'transitions',
        domain: 'expression-of-ideas',
        section: 'rw',
        missedPatterns: ['transition-contrast'],
      }],
      count: 15,
      difficultyMix: { easy: 0.3, medium: 0.45, hard: 0.25 },
    });

    expect(plan.targetedQuestionIds).toEqual(['m1', 'rw1']);
    expect(plan.targetedQuestionMeta).toEqual([
      { id: 'm1', domain: 'algebra', skills: ['linear-equations'], difficulty: 'medium' },
      { id: 'rw1', domain: 'standard-english-conventions', skills: ['transitions'], difficulty: 'easy' },
    ]);
  });

  it('leaves existing targetedQuestionIds untouched', async () => {
    await groundTruthBanksReady;
    const gt = buildGroundTruthDiagnosis(makeDiagReport(), rawTelemetry);
    const plan = enrichPlanWithGroundTruth({ targetedQuestionIds: ['existing-1'] }, gt);

    expect(plan.targetedQuestionIds).toEqual(['existing-1']);
    expect(plan.targetedQuestionMeta).toBeUndefined();
    expect(mockMathTargeted).not.toHaveBeenCalled();
    expect(mockRWTargeted).not.toHaveBeenCalled();
  });
});
