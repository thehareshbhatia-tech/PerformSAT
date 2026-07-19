/**
 * Weakness-evidence rework (2026-07-19) — pins the four behavior changes:
 *  1. Blanks are pacing facts, not knowledge gaps (excluded from the weak flag).
 *  2. Purely-careless misses don't flag a CONCEPT gap (they route to strategy).
 *  3. Drill evidence feeds longitudinal history (recovery clears persistence).
 *  4. evidenceLevel: thin samples are 'suspected' and get discounted priority.
 */
import { runDiagnostic } from '../diagnosticEngine';
import { buildLongitudinalEvidence } from '../studyPlanMerger';
import { generateStudyPlan } from '../studyPlanGenerator';

const mkQ = (id, skills, { difficulty = 'medium', correctAnswer = 'B' } = {}) => ({
  id,
  question: `Question ${id}`,
  type: 'multiple-choice',
  choices: ['A', 'B', 'C', 'D'].map((letter) => ({ letter, text: letter })),
  correctAnswer,
  difficulty,
  skills,
  explanation: '',
});

const mkTest = (questions) => ({
  id: 'evidence-test',
  title: 'Evidence Test',
  modules: [{ questions }],
});

describe('blanks are excluded from the weak flag', () => {
  it('a skill missed only via blanks is NOT flagged weak', () => {
    // Two blank questions on 'ratios' (ran out of time), no attempted misses.
    const test = mkTest([
      mkQ(1, ['ratios']),
      mkQ(2, ['ratios']),
      mkQ(3, ['percent-change']),
    ]);
    const answers = { '0-2': 'B' }; // ratios items left blank
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeUndefined();
  });

  it('attempted misses still flag weak; blanks lower attempted, not accuracy', () => {
    const test = mkTest([
      mkQ(1, ['ratios']),
      mkQ(2, ['ratios']),
      mkQ(3, ['ratios']),
    ]);
    // Two attempted wrong ('A'), one blank.
    const answers = { '0-0': 'A', '0-1': 'A' };
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeDefined();
    expect(weak.attempted).toBe(2);
    expect(weak.blanks).toBe(1);
    expect(weak.contentAccuracy).toBe(0);
  });
});

describe('deliberate skips are knowledge evidence; end-of-test blanks are not', () => {
  it('a skill skipped with real time spent still flags weak', () => {
    // timeSpent >= 5s on a blank → classifyError UNANSWERED (read it, moved
    // on) — that is "saw it, could not do it", not pacing.
    const test = mkTest([
      mkQ(1, ['ratios']),
      mkQ(2, ['ratios']),
      mkQ(3, ['ratios']),
    ]);
    const telemetry = {
      questionDetails: {
        '0-0': { timeSpent: 30 },
        '0-1': { timeSpent: 25 },
        '0-2': { timeSpent: 28 },
      },
    };
    const result = runDiagnostic(test, {}, telemetry);
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeDefined();
    expect(weak.blanks).toBe(0); // deliberate skips are attempted, not pacing blanks
    expect(weak.attempted).toBe(3);
  });
});

describe('careless-only misses do not become concept focus areas', () => {
  it('two fast-slip misses with strong mastery stay off weakSkills', () => {
    const test = mkTest([
      mkQ(1, ['ratios'], { difficulty: 'easy' }),
      mkQ(2, ['ratios'], { difficulty: 'easy' }),
    ]);
    const answers = { '0-0': 'A', '0-1': 'A' };
    // Strong historical mastery + fast time on easy → classifyError lands on
    // careless/rushed classes, whose gap weights (0.35/0.25) sum under the
    // 0.9 evidence bar.
    const telemetry = {
      questionDetails: {
        '0-0': { timeSpent: 12 },
        '0-1': { timeSpent: 13 },
      },
    };
    const result = runDiagnostic(test, answers, telemetry, {
      ratios: { mastery: 90, attempts: 12 },
    });
    const weak = result.skillAnalysis.weakSkills.find((w) => w.skillId === 'ratios');
    expect(weak).toBeUndefined();
  });
});

describe('one correct answer no longer marks a strength', () => {
  it('isStrong requires n >= 2 attempted', () => {
    const test = mkTest([
      mkQ(1, ['ratios']),
      mkQ(2, ['percent-change']),
      mkQ(3, ['percent-change']),
    ]);
    const answers = { '0-0': 'B', '0-1': 'B', '0-2': 'B' }; // all correct
    const result = runDiagnostic(test, answers, { questionDetails: {} });
    const strongIds = result.skillAnalysis.strongSkills.map((s) => s.skillId);
    expect(strongIds).not.toContain('ratios'); // n=1
    expect(strongIds).toContain('percent-change'); // n=2
  });
});

describe('evidenceLevel drives plan priority', () => {
  const mkDiagStub = (weakSkills) => ({
    testId: 'diag-1',
    testTitle: 'Diag',
    score: { scaled: 500, isMultiSection: false, sections: null, percentCorrect: 50 },
    skillAnalysis: { weakSkills, strongSkills: [], allSkills: weakSkills },
    prioritizedActions: [],
    errorPatterns: { totalWrong: 8, counts: {}, summary: [], dominantPattern: null },
    timeAnalysis: { fadeEffect: 0 },
    scoreProjection: { easyWins: { count: 0, description: '' }, errorTypeProjections: [] },
    difficultyAnalysis: null,
    domainAnalysis: [],
  });

  const mkWeak = (skillId, evidenceLevel, testAccuracy = 30) => ({
    skillId,
    name: skillId,
    domain: 'algebra',
    section: 'math',
    testAccuracy,
    contentAccuracy: testAccuracy,
    attempted: evidenceLevel === 'confirmed' ? 5 : 2,
    evidenceLevel,
    missedPatterns: [],
    sections: [],
    primaryErrorType: 'conceptual_gap',
    historicalMastery: null,
  });

  it('a confirmed gap outranks an identical suspected gap', () => {
    const diag = mkDiagStub([
      mkWeak('suspected-skill', 'suspected'),
      mkWeak('confirmed-skill', 'confirmed'),
    ]);
    const plan = generateStudyPlan(diag, { targetScore: 650 });
    const confirmed = plan.skillGaps.find((g) => g.skillId === 'confirmed-skill');
    const suspected = plan.skillGaps.find((g) => g.skillId === 'suspected-skill');
    expect(confirmed).toBeDefined();
    expect(suspected).toBeDefined();
    expect(confirmed.priority).toBeGreaterThan(suspected.priority);
    // Suspected gaps get probe-sized time, not a rebuild.
    expect(suspected.estimatedMinutes).toBe(15);
  });
});

describe('drill evidence feeds longitudinal history', () => {
  const twoTestsWeakOnSlope = () => ({
    'test-1': {
      testId: 'test-1',
      attempts: [{
        completedAt: '2026-01-01T00:00:00Z',
        scaledScore: 560,
        diagnosticData: {
          questionDetails: [
            { skills: ['slope-intercept-form'], isCorrect: false },
            { skills: ['slope-intercept-form'], isCorrect: false },
          ],
        },
      }],
    },
    'test-2': {
      testId: 'test-2',
      attempts: [{
        completedAt: '2026-02-01T00:00:00Z',
        scaledScore: 580,
        diagnosticData: {
          questionDetails: [
            { skills: ['slope-intercept-form'], isCorrect: false },
            { skills: ['slope-intercept-form'], isCorrect: true },
          ],
        },
      }],
    },
  });

  const drillHistory = (correctCount, total, afterMs) =>
    Array.from({ length: total }, (_, i) => ({
      correct: i < correctCount,
      timestamp: afterMs + (i + 1) * 60000,
    }));

  it('without drills the skill is persistent', () => {
    const evidence = buildLongitudinalEvidence(twoTestsWeakOnSlope(), null);
    expect(evidence.persistentWeaknesses.map((w) => w.skillId)).toContain('slope-intercept-form');
    expect(evidence.recoveredSkills).toHaveLength(0);
  });

  it('recent strong drills clear persistence and report recovery', () => {
    const lastTestMs = Date.parse('2026-02-01T00:00:00Z');
    const skillProgress = {
      'slope-intercept-form': {
        attempts: 8, correct: 7,
        history: drillHistory(7, 8, lastTestMs + 10 * 60000),
      },
    };
    const evidence = buildLongitudinalEvidence(twoTestsWeakOnSlope(), skillProgress);
    expect(evidence.persistentWeaknesses.map((w) => w.skillId)).not.toContain('slope-intercept-form');
    expect(evidence.recoveredSkills.map((r) => r.skillId)).toContain('slope-intercept-form');
    const hist = evidence.skillHistory['slope-intercept-form'];
    expect(hist.recentDrill.attempts).toBe(8);
    // Weighted accuracy blends the drill evidence upward.
    expect(hist.weightedAccuracy).toBeGreaterThan(30);
  });

  it('weak recent drills do NOT clear persistence', () => {
    const lastTestMs = Date.parse('2026-02-01T00:00:00Z');
    const skillProgress = {
      'slope-intercept-form': {
        attempts: 6, correct: 2,
        history: drillHistory(2, 6, lastTestMs + 10 * 60000),
      },
    };
    const evidence = buildLongitudinalEvidence(twoTestsWeakOnSlope(), skillProgress);
    expect(evidence.persistentWeaknesses.map((w) => w.skillId)).toContain('slope-intercept-form');
    expect(evidence.recoveredSkills).toHaveLength(0);
  });

  it('single-test weakness is no longer "persistent"', () => {
    const oneTest = { 'test-1': twoTestsWeakOnSlope()['test-1'] };
    const evidence = buildLongitudinalEvidence(oneTest, null);
    expect(evidence.persistentWeaknesses).toHaveLength(0);
  });
});

describe('intensity respects behavior and preference', () => {
  const bigGapDiag = () => ({
    testId: 'diag-2',
    testTitle: 'Diag',
    score: { scaled: 400, isMultiSection: false, sections: null, percentCorrect: 35 },
    skillAnalysis: { weakSkills: [], strongSkills: [], allSkills: [] },
    prioritizedActions: [],
    errorPatterns: { totalWrong: 15, counts: {}, summary: [], dominantPattern: null },
    timeAnalysis: { fadeEffect: 0 },
    scoreProjection: { easyWins: { count: 0, description: '' }, errorTypeProjections: [] },
    difficultyAnalysis: null,
    domainAnalysis: [],
  });

  const soonTestDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 21);
    return d.toISOString().slice(0, 10);
  };

  const prevPlanWithCompletion = (completedCount, totalCount, extra = {}) => ({
    weeks: [{
      weekNumber: 1,
      title: 'W1',
      activities: Array.from({ length: totalCount }, (_, i) => ({
        title: `A${i}`, type: 'practice', duration: 15, completed: i < completedCount,
      })),
    }],
    ...extra,
  });

  it('low adherence steps intensity down one band', () => {
    const profile = { targetScore: 750, testDate: soonTestDate() };
    const order = ['light', 'moderate', 'focused', 'intensive', 'marathon'];

    const eager = generateStudyPlan(bigGapDiag(), profile, {}, {}, prevPlanWithCompletion(9, 10));
    const struggling = generateStudyPlan(bigGapDiag(), profile, {}, {}, prevPlanWithCompletion(1, 10));

    expect(order.indexOf(struggling.intensity)).toBe(order.indexOf(eager.intensity) - 1);
    expect(struggling.previousPlanCompletion).toBeCloseTo(0.1);
  });

  it('explicit pacing edit (setPacing userPrefs) survives regeneration', () => {
    const prev = prevPlanWithCompletion(8, 10, {
      userPrefs: { minutesPerDay: 20, examDate: null, edited: true },
    });
    const plan = generateStudyPlan(bigGapDiag(), { targetScore: 750, testDate: soonTestDate() }, {}, {}, prev);
    expect(plan.intensityConfig.minutesPerDay).toBe(20);
    expect(plan.summary.stats.minutesPerDay).toBe(20);
    // Sticky: carried onto the new plan so the NEXT regeneration sees it too.
    expect(plan.userPrefs).toEqual(prev.userPrefs);
  });

  it('tiny previous plans (<5 activities) carry no adherence signal', () => {
    const profile = { targetScore: 750, testDate: soonTestDate() };
    const withTinyPrev = generateStudyPlan(bigGapDiag(), profile, {}, {}, prevPlanWithCompletion(0, 3));
    const withoutPrev = generateStudyPlan(bigGapDiag(), profile, {}, {}, null);
    expect(withTinyPrev.intensity).toBe(withoutPrev.intensity);
    expect(withTinyPrev.previousPlanCompletion).toBeNull();
  });
});
