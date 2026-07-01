// recommendationService → reviewService → firebase/config; mock the chain
// the same way the sibling suites do so getAuth never runs under Jest.
jest.mock('../../firebase/config', () => ({ db: {}, auth: {} }));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  updateDoc: jest.fn(),
  setDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import { generateRecommendations } from '../recommendationService';

// Regression: the 2026-06-05 local-date sweep added a parseLocalDate call to
// getDaysUntil without its import. CRA's build did NOT fail on the undefined
// reference — it shipped and crashed StudentDashboard's useMemo at runtime
// (caught by ErrorBoundary in prod). This test exercises the testDate path
// directly so a missing import can never ship silently again.
describe('generateRecommendations', () => {
  const base = {
    completedLessons: {},
    practiceProgress: {},
    reviewQueue: {},
    allLessons: [],
  };

  it('runs the getDaysUntil path with a date-only testDate (parseLocalDate import regression)', () => {
    expect(() => generateRecommendations({ ...base, testDate: '2026-08-22' })).not.toThrow();
  });

  it('handles a missing testDate', () => {
    expect(() => generateRecommendations({ ...base, testDate: null })).not.toThrow();
  });

  it('handles an unparseable testDate', () => {
    expect(() => generateRecommendations({ ...base, testDate: 'not-a-date' })).not.toThrow();
  });

  it('returns an array of recommendations', () => {
    const out = generateRecommendations({ ...base, testDate: '2026-08-22' });
    expect(Array.isArray(out)).toBe(true);
  });

  it('resolves dashed module ids in practiceProgress keys (linear-equations)', () => {
    // Regression: `key.split('-')` mangled module ids that themselves contain
    // dashes -> title "Practice: equations-Solving Linear Equations" and a
    // dead launch (moduleId 'linear' matches no module -> 0 questions).
    const out = generateRecommendations({
      ...base,
      practiceProgress: {
        'linear-equations-Solving Linear Equations': { bestScore: 2, totalAttempts: 1 },
      },
    });
    const rec = out.find(r => r.type === 'practice');
    expect(rec).toBeDefined();
    expect(rec.title).toBe('Practice: Solving Linear Equations');
    expect(rec.subtitle).toBe('Linear Equations');
    expect(rec.action.moduleId).toBe('linear-equations');
    expect(rec.action.sectionName).toBe('Solving Linear Equations');
  });

  it('keeps the legacy first-dash split for keys with unknown module prefixes', () => {
    const out = generateRecommendations({
      ...base,
      practiceProgress: {
        'mystery-Some Section': { bestScore: 1, totalAttempts: 2 },
      },
    });
    const rec = out.find(r => r.type === 'practice');
    expect(rec).toBeDefined();
    expect(rec.action.moduleId).toBe('mystery');
    expect(rec.action.sectionName).toBe('Some Section');
  });
});
