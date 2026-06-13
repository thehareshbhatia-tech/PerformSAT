import {
  scoreTest,
  convertToSATScore,
  isAnswerCorrect,
  estimatePercentile,
} from '../irtEngine';
import { SCORING_VERSION, MODULE_ROUTE } from '../scoringSchema';
import { determineRoute, thetaToScaledScore } from '../calibration';

// ═══════════════════════════════════════════════════════════════════════════
// TEST FIXTURES
// ═══════════════════════════════════════════════════════════════════════════

function buildTestForm(overrides = {}) {
  const nPerModule = overrides.questionsPerModule || 22;
  const difficulties = ['easy', 'medium', 'hard'];

  const makeQuestions = (count) =>
    Array.from({ length: count }, (_, i) => ({
      id: `q-${i}`,
      type: 'multiple-choice',
      difficulty: difficulties[i % 3],
      correctAnswer: 'B',
      choices: [
        { id: 'A', text: '1' },
        { id: 'B', text: '2' },
        { id: 'C', text: '3' },
        { id: 'D', text: '4' },
      ],
      skills: ['algebra'],
    }));

  return {
    id: overrides.id || 'test-fixture',
    title: overrides.title || 'Fixture Test',
    totalQuestions: nPerModule * 2,
    timePerModule: 35,
    modules: [
      { id: 'mod-1', title: 'Module 1', timeLimit: 35, questions: makeQuestions(nPerModule) },
      { id: 'mod-2', title: 'Module 2', timeLimit: 35, questions: makeQuestions(nPerModule) },
    ],
  };
}

function buildAnswers(test, correctCount) {
  const answers = {};
  let remaining = correctCount;
  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      if (remaining > 0) {
        answers[key] = q.correctAnswer;
        remaining--;
      } else {
        answers[key] = 'A'; // wrong
      }
    });
  });
  return answers;
}

// ═══════════════════════════════════════════════════════════════════════════
// isAnswerCorrect
// ═══════════════════════════════════════════════════════════════════════════

describe('isAnswerCorrect', () => {
  it('returns true for matching multiple-choice answer', () => {
    const q = { type: 'multiple-choice', correctAnswer: 'C' };
    expect(isAnswerCorrect(q, 'C')).toBe(true);
  });

  it('returns false for wrong multiple-choice answer', () => {
    const q = { type: 'multiple-choice', correctAnswer: 'C' };
    expect(isAnswerCorrect(q, 'A')).toBe(false);
  });

  it('handles fill-in with exact match (number correctAnswer)', () => {
    const q = { type: 'fill-in', correctAnswer: 42 };
    expect(isAnswerCorrect(q, 42)).toBe(true);
  });

  it('handles fill-in with string-to-number coercion', () => {
    const q = { type: 'fill-in', correctAnswer: 42 };
    expect(isAnswerCorrect(q, '42')).toBe(true);
  });

  // THE CORE BUG: real data uses string correctAnswers like '1', '28'
  it('handles string correctAnswer with number userAnswer', () => {
    const q = { type: 'fill-in', correctAnswer: '1' };
    expect(isAnswerCorrect(q, 1)).toBe(true);
  });

  it('handles string correctAnswer with string userAnswer', () => {
    const q = { type: 'fill-in', correctAnswer: '28' };
    expect(isAnswerCorrect(q, '28')).toBe(true);
  });

  it('handles string correctAnswer "6" with number 6', () => {
    const q = { type: 'fill-in', correctAnswer: '6' };
    expect(isAnswerCorrect(q, 6)).toBe(true);
  });

  it('handles decimal string correctAnswer with numeric equivalence', () => {
    const q = { type: 'fill-in', correctAnswer: '28.0' };
    expect(isAnswerCorrect(q, '28')).toBe(true);
    expect(isAnswerCorrect(q, 28)).toBe(true);
  });

  it('handles fraction correctAnswer via string match', () => {
    const q = { type: 'fill-in', correctAnswer: '12/13', acceptedAnswers: ['12/13', 0.923, '0.923'] };
    expect(isAnswerCorrect(q, '12/13')).toBe(true);
  });

  it('handles fraction correctAnswer via decimal acceptedAnswer', () => {
    const q = { type: 'fill-in', correctAnswer: '12/13', acceptedAnswers: ['12/13', 0.923, '0.923'] };
    expect(isAnswerCorrect(q, '0.923')).toBe(true);
    expect(isAnswerCorrect(q, 0.923)).toBe(true);
  });

  it('does NOT match partial numeric parse of fractions', () => {
    // "12/13" should NOT match "12" — Number("12/13") is NaN, not 12
    const q = { type: 'fill-in', correctAnswer: '12/13' };
    expect(isAnswerCorrect(q, '12')).toBe(false);
    expect(isAnswerCorrect(q, 12)).toBe(false);
  });

  it('handles negative fraction with acceptedAnswers', () => {
    const q = { type: 'fill-in', correctAnswer: '-3/2', acceptedAnswers: ['-3/2', -1.5, '-1.5'] };
    expect(isAnswerCorrect(q, '-3/2')).toBe(true);
    expect(isAnswerCorrect(q, '-1.5')).toBe(true);
    expect(isAnswerCorrect(q, -1.5)).toBe(true);
  });

  it('handles fill-in with acceptedAnswers', () => {
    const q = { type: 'fill-in', correctAnswer: 3.5, acceptedAnswers: [3.5, 7/2] };
    expect(isAnswerCorrect(q, '3.5')).toBe(true);
  });

  it('returns false for unanswered questions', () => {
    const q = { type: 'multiple-choice', correctAnswer: 'B' };
    expect(isAnswerCorrect(q, undefined)).toBe(false);
    expect(isAnswerCorrect(q, null)).toBe(false);
    expect(isAnswerCorrect(q, '')).toBe(false);
  });

  it('returns false for wrong fill-in answer', () => {
    const q = { type: 'fill-in', correctAnswer: '28' };
    expect(isAnswerCorrect(q, '29')).toBe(false);
    expect(isAnswerCorrect(q, 'abc')).toBe(false);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// scoreTest — basic contract
// ═══════════════════════════════════════════════════════════════════════════

describe('scoreTest', () => {
  it('returns a scored result with all required fields', () => {
    const test = buildTestForm();
    const answers = buildAnswers(test, 30);
    const result = scoreTest(test, answers);

    expect(result.scoringVersion).toBe(SCORING_VERSION);
    expect(result.rawScore).toBe(30);
    expect(result.totalQuestions).toBe(44);
    expect(typeof result.sectionScore).toBe('number');
    expect(result.sectionScore).toBeGreaterThanOrEqual(200);
    expect(result.sectionScore).toBeLessThanOrEqual(800);
    expect(result.sectionScore % 10).toBe(0);
    expect(typeof result.thetaEstimate).toBe('number');
    expect(typeof result.standardError).toBe('number');
    expect(result.standardError).toBeGreaterThan(0);
    expect([MODULE_ROUTE.EASY, MODULE_ROUTE.HARD]).toContain(result.routeTaken);
    expect(result.moduleScores).toHaveLength(2);
    expect(result.scaledScore).toBe(result.sectionScore);
  });

  it('gives score 200 for 0 correct', () => {
    const test = buildTestForm();
    const answers = buildAnswers(test, 0);
    const result = scoreTest(test, answers);
    expect(result.sectionScore).toBe(200);
  });

  it('gives score 800 for perfect score', () => {
    const test = buildTestForm();
    const answers = buildAnswers(test, 44);
    const result = scoreTest(test, answers);
    expect(result.sectionScore).toBe(800);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Reported score: raw-count + route based (band-independent by design)
// ═══════════════════════════════════════════════════════════════════════════

describe('reported score properties', () => {
  const buildSingleModuleTest = (id, difficulty) => ({
    id, title: id, totalQuestions: 10, timePerModule: 35,
    modules: [{
      id: 'mod-1', title: 'Module 1', timeLimit: 35,
      questions: Array.from({ length: 10 }, (_, i) => ({
        id: `${id}-${i}`, type: 'multiple-choice', difficulty,
        correctAnswer: 'B', choices: [{ id: 'A', text: '1' }, { id: 'B', text: '2' }], skills: ['algebra'],
      })),
    }],
  });

  const answersCorrect7 = {};
  for (let i = 0; i < 10; i++) answersCorrect7[`0-${i}`] = i < 7 ? 'B' : 'A';

  it('same raw score is band-independent: item difficulty does not change the reported score', () => {
    // The raw→scaled table keys on (raw, total, route) ONLY — not per-item
    // difficulty. Two students with the same raw count on the same route get
    // the same reported score. That is what makes the score verifiable; it is
    // the deliberate replacement for the old IRT band-sensitivity.
    const easyResult = scoreTest(buildSingleModuleTest('easy-form', 'easy'), answersCorrect7);
    const hardResult = scoreTest(buildSingleModuleTest('hard-form', 'hard'), answersCorrect7);
    expect(hardResult.sectionScore).toBe(easyResult.sectionScore);
  });

  it('the easy Module-2 route caps the reported score at or below the hard route for the same raw', () => {
    const test = buildSingleModuleTest('form', 'medium');
    const hardRoute = scoreTest(test, answersCorrect7, { mathRoute: 'hard' });
    const easyRoute = scoreTest(test, answersCorrect7, { mathRoute: 'easy' });
    expect(easyRoute.sectionScore).toBeLessThanOrEqual(hardRoute.sectionScore);
  });

  it('convertToSATScore is monotonically non-decreasing', () => {
    let prev = 0;
    for (let raw = 0; raw <= 44; raw++) {
      const score = convertToSATScore(raw, 44);
      expect(score).toBeGreaterThanOrEqual(prev);
      prev = score;
    }
  });

  it('convertToSATScore produces scores in the valid SAT range', () => {
    for (let raw = 0; raw <= 44; raw++) {
      const score = convertToSATScore(raw, 44);
      expect(score).toBeGreaterThanOrEqual(200);
      expect(score).toBeLessThanOrEqual(800);
      expect(score % 10).toBe(0);
    }
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Module routing
// ═══════════════════════════════════════════════════════════════════════════

describe('Module routing', () => {
  it('routes to hard when Module 1 accuracy >= 60%', () => {
    expect(determineRoute('test-1', 14, 22)).toBe(MODULE_ROUTE.HARD);
    expect(determineRoute('test-1', 22, 22)).toBe(MODULE_ROUTE.HARD);
  });

  it('routes to easy when Module 1 accuracy < 60%', () => {
    expect(determineRoute('test-1', 10, 22)).toBe(MODULE_ROUTE.EASY);
    expect(determineRoute('test-1', 0, 22)).toBe(MODULE_ROUTE.EASY);
  });

  it('routes to easy on empty module', () => {
    expect(determineRoute('test-1', 0, 0)).toBe(MODULE_ROUTE.EASY);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Theta-to-scale conversion
// ═══════════════════════════════════════════════════════════════════════════

describe('thetaToScaledScore', () => {
  it('returns 200 for very low theta', () => {
    expect(thetaToScaledScore(-5)).toBe(200);
  });

  it('returns 800 for very high theta', () => {
    expect(thetaToScaledScore(5)).toBe(800);
  });

  it('returns ~510 for theta 0 (average ability ≈ 50th percentile)', () => {
    const score = thetaToScaledScore(0);
    expect(score).toBe(510);
  });

  it('is monotonically non-decreasing across the theta range', () => {
    let prev = 0;
    for (let theta = -4; theta <= 4; theta += 0.1) {
      const score = thetaToScaledScore(theta);
      expect(score).toBeGreaterThanOrEqual(prev);
      prev = score;
    }
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Percentile estimation
// ═══════════════════════════════════════════════════════════════════════════

describe('estimatePercentile', () => {
  it('returns 1st percentile for 200', () => {
    expect(estimatePercentile(200)).toBe(1);
  });

  it('returns 99th percentile for 800', () => {
    expect(estimatePercentile(800)).toBe(99);
  });

  it('returns ~50th percentile for 500 (CB user-norm anchor)', () => {
    expect(estimatePercentile(500)).toBe(50);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Score stability and versioning
// ═══════════════════════════════════════════════════════════════════════════

describe('Score stability', () => {
  it('produces the same result for the same inputs', () => {
    const test = buildTestForm();
    const answers = buildAnswers(test, 25);
    const result1 = scoreTest(test, answers);
    const result2 = scoreTest(test, answers);

    expect(result1.sectionScore).toBe(result2.sectionScore);
    expect(result1.thetaEstimate).toBe(result2.thetaEstimate);
    expect(result1.standardError).toBe(result2.standardError);
  });

  it('includes scoring version in results for future rescoring', () => {
    const test = buildTestForm();
    const result = scoreTest(test, buildAnswers(test, 20));
    expect(result.scoringVersion).toMatch(/^\d+\.\d+\.\d+$/);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Route fairness — both routes produce coherent scores on the same scale
// ═══════════════════════════════════════════════════════════════════════════

describe('Route fairness', () => {
  function buildAnswersWithModuleSplit(test, mod1Correct, mod2Correct) {
    const answers = {};
    test.modules.forEach((mod, modIdx) => {
      const target = modIdx === 0 ? mod1Correct : mod2Correct;
      let remaining = target;
      mod.questions.forEach((q, qIdx) => {
        const key = `${modIdx}-${qIdx}`;
        if (remaining > 0) {
          answers[key] = q.correctAnswer;
          remaining--;
        } else {
          answers[key] = 'A';
        }
      });
    });
    return answers;
  }

  it('both module routes produce scores within the 200-800 range', () => {
    const test = buildTestForm();

    // Easy route: student gets 10/22 on Module 1 (< 60%), then 5/22 on Module 2
    const easyRouteAnswers = buildAnswersWithModuleSplit(test, 10, 5);
    const easyResult = scoreTest(test, easyRouteAnswers);
    expect(easyResult.sectionScore).toBeGreaterThanOrEqual(200);
    expect(easyResult.sectionScore).toBeLessThanOrEqual(800);
    expect(easyResult.routeTaken).toBe(MODULE_ROUTE.EASY);

    // Hard route: student gets 18/22 on Module 1 (>= 60%), then 12/22 on Module 2
    const hardRouteAnswers = buildAnswersWithModuleSplit(test, 18, 12);
    const hardResult = scoreTest(test, hardRouteAnswers);
    expect(hardResult.sectionScore).toBeGreaterThanOrEqual(200);
    expect(hardResult.sectionScore).toBeLessThanOrEqual(800);
    expect(hardResult.routeTaken).toBe(MODULE_ROUTE.HARD);

    // Higher raw total should yield higher score
    expect(hardResult.sectionScore).toBeGreaterThanOrEqual(easyResult.sectionScore);
  });
});
