import { runDiagnostic } from '../../diagnosticEngine';

function buildTestFixture() {
  return {
    id: 'test-deep-1',
    title: 'Deep Diagnostic Test',
    modules: [
      {
        questions: Array.from({ length: 22 }, (_, i) => ({
          id: `q-${i}`,
          question: `Question ${i + 1}`,
          type: 'multiple-choice',
          difficulty: i < 8 ? 'easy' : i < 16 ? 'medium' : 'hard',
          skills: [['linear-equations', 'slope-from-points', 'factoring', 'percent-change', 'circle-area-circumference', 'function-notation'][i % 6]],
          correctAnswer: 'A',
          choices: [
            { id: 'A', text: '4' },
            { id: 'B', text: '8' },
            { id: 'C', text: '12' },
            { id: 'D', text: '16' },
          ],
        })),
      },
      {
        questions: Array.from({ length: 22 }, (_, i) => ({
          id: `q-${22 + i}`,
          question: `Question ${23 + i}`,
          type: 'multiple-choice',
          difficulty: i < 8 ? 'easy' : i < 16 ? 'medium' : 'hard',
          skills: [['linear-equations', 'quadratic-formula', 'ratio-setup', 'pythagorean-theorem', 'exponent-rules', 'mean-median-mode'][i % 6]],
          correctAnswer: 'A',
          choices: [
            { id: 'A', text: '4' },
            { id: 'B', text: '8' },
            { id: 'C', text: '12' },
            { id: 'D', text: '16' },
          ],
        })),
      },
    ],
  };
}

function buildAnswers(test) {
  const answers = {};
  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      answers[key] = qIdx + modIdx * 22 < 15 ? 'A' : 'B';
    });
  });
  return answers;
}

function buildDiagnosticData(test) {
  const questionDetails = {};
  test.modules.forEach((mod, modIdx) => {
    mod.questions.forEach((q, qIdx) => {
      const key = `${modIdx}-${qIdx}`;
      const isWrong = qIdx + modIdx * 22 >= 15;
      questionDetails[key] = {
        timeSpent: isWrong && qIdx < 3 ? 10 : 60 + qIdx * 2,
        visits: isWrong ? 2 : 1,
        answerChanges: isWrong && qIdx % 3 === 0 ? 1 : 0,
        answerChangeEvents: isWrong && qIdx % 3 === 0 ? [{ from: 'A', to: 'B', timestamp: Date.now() }] : [],
        usedCalculator: qIdx % 4 === 0,
        markedForReview: isWrong && qIdx % 2 === 0,
        eliminatedChoices: isWrong ? ['C', 'D'] : [],
        isCorrect: !isWrong,
        difficulty: q.difficulty,
        skills: q.skills,
      };
    });
  });
  return {
    questionDetails,
    navigationPattern: 'strategic-skip',
    totalNavigationEvents: 10,
    moduleTimeRemaining: { 0: 120, 1: 60 },
    questionsVisitedMultipleTimes: 8,
    calculatorUsageCount: 11,
    markedForReviewCount: 6,
  };
}

describe('Deep Diagnostic Engine (runDiagnostic)', () => {
  let test, answers, diagData, report;

  beforeAll(() => {
    test = buildTestFixture();
    answers = buildAnswers(test);
    diagData = buildDiagnosticData(test);
    report = runDiagnostic(test, answers, diagData, {}, { targetScore: 700 }, {});
  });

  describe('Skill ID consistency', () => {
    it('questionAnalysis skills contain raw skill IDs, not human-readable names', () => {
      const rawIds = [
        'linear-equations', 'slope-from-points', 'factoring', 'percent-change',
        'circle-area-circumference', 'function-notation', 'quadratic-formula',
        'ratio-setup', 'pythagorean-theorem', 'exponent-rules', 'mean-median-mode',
      ];
      report.questionAnalysis.forEach(q => {
        q.skills.forEach(s => {
          expect(s).toMatch(/^[a-z][a-z0-9-]+$/);
          expect(rawIds).toContain(s);
        });
      });
    });

    it('each questionAnalysis item has skillNames as an array of strings', () => {
      report.questionAnalysis.forEach(q => {
        expect(Array.isArray(q.skillNames)).toBe(true);
        q.skillNames.forEach(n => {
          expect(typeof n).toBe('string');
          expect(n.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('Behavior evidence on questions', () => {
    it('each questionAnalysis item has all behavior evidence fields', () => {
      report.questionAnalysis.forEach(q => {
        expect(q).toHaveProperty('answerChangeCount');
        expect(q).toHaveProperty('answerChangeEvents');
        expect(q).toHaveProperty('usedCalculator');
        expect(q).toHaveProperty('markedForReview');
        expect(q).toHaveProperty('eliminatedChoices');
        expect(q).toHaveProperty('visits');
        expect(q).toHaveProperty('timeVsDifficulty');
      });
    });

    it('answerChangeCount is a number', () => {
      report.questionAnalysis.forEach(q => {
        expect(typeof q.answerChangeCount).toBe('number');
      });
    });

    it('answerChangeEvents is an array', () => {
      report.questionAnalysis.forEach(q => {
        expect(Array.isArray(q.answerChangeEvents)).toBe(true);
      });
    });

    it('usedCalculator is a boolean', () => {
      report.questionAnalysis.forEach(q => {
        expect(typeof q.usedCalculator).toBe('boolean');
      });
    });

    it('markedForReview is a boolean', () => {
      report.questionAnalysis.forEach(q => {
        expect(typeof q.markedForReview).toBe('boolean');
      });
    });

    it('eliminatedChoices is an array', () => {
      report.questionAnalysis.forEach(q => {
        expect(Array.isArray(q.eliminatedChoices)).toBe(true);
      });
    });

    it('timeVsDifficulty is one of the expected categories', () => {
      const allowed = ['rushed', 'normal', 'slow', 'very_slow'];
      report.questionAnalysis.forEach(q => {
        expect(allowed).toContain(q.timeVsDifficulty);
      });
    });
  });

  describe('Root-cause clusters', () => {
    it('rootCauseClusters is an array', () => {
      expect(Array.isArray(report.rootCauseClusters)).toBe(true);
    });

    it('each cluster has id, label, severity, count, description', () => {
      report.rootCauseClusters.forEach(c => {
        expect(c).toHaveProperty('id');
        expect(c).toHaveProperty('label');
        expect(c).toHaveProperty('severity');
        expect(c).toHaveProperty('count');
        expect(c).toHaveProperty('description');
      });
    });

    it('produces recurring-concept-gaps when multiple conceptual_gap errors exist', () => {
      const conceptGapWrong = report.questionAnalysis.filter(
        q => !q.isCorrect && q.errorType === 'conceptual_gap'
      );
      if (conceptGapWrong.length >= 2) {
        const cluster = report.rootCauseClusters.find(c => c.id === 'recurring-concept-gaps');
        expect(cluster).toBeDefined();
        expect(cluster.count).toBeGreaterThanOrEqual(2);
      }
    });

    it('produces pacing-related-misses when multiple time_pressure errors exist', () => {
      const pacingWrong = report.questionAnalysis.filter(
        q => !q.isCorrect && (q.errorType === 'time_pressure' || q.timeVsDifficulty === 'rushed')
      );
      if (pacingWrong.length >= 2) {
        const cluster = report.rootCauseClusters.find(c => c.id === 'pacing-related-misses');
        expect(cluster).toBeDefined();
        expect(cluster.count).toBeGreaterThanOrEqual(2);
      }
    });

    it('produces second-guessing-losses when multiple wrong answers have answerChangeCount > 0', () => {
      const changedWrong = report.questionAnalysis.filter(
        q => !q.isCorrect && q.answerChangeCount > 0
      );
      if (changedWrong.length >= 2) {
        const cluster = report.rootCauseClusters.find(c => c.id === 'second-guessing-losses');
        expect(cluster).toBeDefined();
        expect(cluster.count).toBeGreaterThanOrEqual(2);
      }
    });
  });

  describe('Elimination data in answerPatterns', () => {
    it('answerPatterns.elimination exists', () => {
      expect(report.answerPatterns).toHaveProperty('elimination');
    });

    it('elimination has used, correct, accuracy, insight fields', () => {
      const elim = report.answerPatterns.elimination;
      expect(elim).toHaveProperty('used');
      expect(elim).toHaveProperty('correct');
      expect(elim).toHaveProperty('accuracy');
      expect(elim).toHaveProperty('insight');
    });

    it('elimination.used is a number >= 0', () => {
      expect(typeof report.answerPatterns.elimination.used).toBe('number');
      expect(report.answerPatterns.elimination.used).toBeGreaterThanOrEqual(0);
    });

    it('elimination.insight is a non-empty string', () => {
      expect(typeof report.answerPatterns.elimination.insight).toBe('string');
      expect(report.answerPatterns.elimination.insight.length).toBeGreaterThan(0);
    });
  });
});
