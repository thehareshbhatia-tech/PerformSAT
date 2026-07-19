/**
 * Pins the evidence payload contract for the AI diagnosis (prompt v3.2):
 * blank-vs-wrong separation, chosen answers, evidence tiers, drill transfer.
 */
// diagnosticNarrativeService imports authFetch → firebase/config, which
// cannot initialize under Jest — mock the transport; we only test the
// pure serializer.
jest.mock('../authFetch', () => ({ authFetch: jest.fn() }));

import { serializeForNarrative } from '../diagnosticNarrativeService';

const report = {
  score: { scaled: 550 },
  questionAnalysis: [
    { key: '0-0', isCorrect: false, userAnswer: 'B', correctAnswer: 'C', difficulty: 'easy', skills: ['ratios'], skillNames: ['Ratios'], errorType: 'careless_error', timeSpent: 20 },
    { key: '0-1', isCorrect: false, userAnswer: null, correctAnswer: 'A', difficulty: 'medium', skills: ['ratios'], skillNames: ['Ratios'], errorType: 'time_pressure', timeSpent: 0 },
    { key: '0-2', isCorrect: true, userAnswer: 'D', difficulty: 'hard', skills: ['percent-change'] },
  ],
  skillAnalysis: {
    weakSkills: [{
      skillId: 'ratios', name: 'Ratios', domain: 'problem-solving',
      testAccuracy: 33, contentAccuracy: 50, attempted: 2, blanks: 1,
      evidenceLevel: 'suspected', correct: 1, total: 3,
      primaryErrorType: 'careless_error', historicalMastery: null, trend: 'unknown',
    }],
    strongSkills: [],
  },
};

describe('serializeForNarrative — v3.2 payload contract', () => {
  it('separates blanks from wrong answers and carries the chosen answer', () => {
    const payload = serializeForNarrative(report);
    const [wrong, blank] = payload.wrongQuestions;
    expect(wrong.userAnswer).toBe('B');
    expect(wrong.correctAnswer).toBe('C');
    expect(wrong.wasBlank).toBe(false);
    expect(blank.wasBlank).toBe(true);
    // Correct answers never appear in wrongQuestions.
    expect(payload.wrongQuestions).toHaveLength(2);
  });

  it('carries the evidence tier fields on weak skills', () => {
    const weak = serializeForNarrative(report).skillAnalysis.weakSkills[0];
    expect(weak.contentAccuracy).toBe(50);
    expect(weak.attempted).toBe(2);
    expect(weak.blanks).toBe(1);
    expect(weak.evidenceLevel).toBe('suspected');
  });

  it('includes bounded drill evidence only when provided and non-empty', () => {
    expect(serializeForNarrative(report).drillEvidence).toBeNull();
    expect(serializeForNarrative(report, { recentDrills: [] }).drillEvidence).toBeNull();

    const many = Array.from({ length: 12 }, (_, i) => ({ skillId: `s${i}`, accuracy: 80, attempts: 5 }));
    const payload = serializeForNarrative(report, { recentDrills: many });
    expect(payload.drillEvidence.recentDrills).toHaveLength(8); // capped
    expect(payload.drillEvidence.recentDrills[0]).toEqual({ skillId: 's0', accuracy: 80, attempts: 5 });
  });
});
