// proactiveRecommendationService → skillService → firebase/config calls
// getAuth(app) at module load, which throws under jsdom. Mock it per the
// convention documented in src/setupTests.js (mock BEFORE the import below).
jest.mock('../../firebase/config', () => ({
  __esModule: true,
  auth: {},
  db: {},
  default: {},
}));

import { generateCrossSessionRecommendation } from '../proactiveRecommendationService';

/**
 * Regression coverage for the cross-session "memory-match" recommendation —
 * the proactive card that says "Last time we talked about this, you mentioned
 * confusion with: <X>".
 *
 * Two bugs were fixed here (caught dogfooding the live R&W drill tutor):
 *  1. `String.includes(skill?.name?.toLowerCase() || '')` — when getSkillById
 *     returned null (every R&W skill), the empty-string needle matched EVERY
 *     stored confusion, so an unrelated string surfaced on the wrong question.
 *  2. The tutor pipeline stores a no-confusion sentinel ("No active confusion
 *     demonstrated in this exchange") as a persistentConfusion, which was then
 *     replayed to the student as something THEY were confused about.
 */
describe('generateCrossSessionRecommendation — memory-match card', () => {
  const skillProgress = { 'form-structure-and-sense': { mastery: 40 } };

  it('does NOT surface a no-confusion sentinel as the student\'s confusion (the live bug)', () => {
    const rec = generateCrossSessionRecommendation(
      skillProgress,
      null, // no test results → skip priority 0 / 0.5, reach the memory block
      { persistentConfusions: ['No active confusion demonstrated in this exchange'] },
      ['form-structure-and-sense'], // R&W skill → getSkillById returns null
    );
    expect(rec).toBeNull();
  });

  it('does NOT match every confusion via an empty needle when the skill is unknown', () => {
    const rec = generateCrossSessionRecommendation(
      skillProgress,
      null,
      { persistentConfusions: ['Something totally unrelated about photosynthesis'] },
      ['some-unknown-rw-skill'],
    );
    expect(rec).toBeNull();
  });

  it('rejects other no-confusion phrasings (none detected / no misconception)', () => {
    for (const sentinel of [
      'None detected',
      'No misconception identified',
      'no confusion',
    ]) {
      const rec = generateCrossSessionRecommendation(
        skillProgress,
        null,
        { persistentConfusions: [sentinel] },
        ['form-structure-and-sense'],
      );
      expect(rec).toBeNull();
    }
  });

  it('STILL surfaces a genuine confusion that names the current skill', () => {
    const rec = generateCrossSessionRecommendation(
      skillProgress,
      null,
      { persistentConfusions: ['I keep getting confused on form-structure-and-sense pronoun agreement'] },
      ['form-structure-and-sense'],
    );
    expect(rec).not.toBeNull();
    expect(rec.type).toBe('memory-match');
    expect(rec.message).toContain('pronoun agreement');
  });
});
