/**
 * studyPlanGenerator.rwActivities.test.js — pins the format-v2 generator
 * behavior: R&W gaps (and math gaps that miss the hand-authored module map)
 * become drill-shaped weekly activities instead of being silently dropped,
 * and the score-gap math is scale-guarded.
 */

import { generateStudyPlan } from '../studyPlanGenerator';
import { PLAN_FORMAT_VERSION } from '../planFormatUpgrade';

const mkDiag = (over = {}) => ({
  testId: 'synthetic-1',
  score: { scaled: 920, isMultiSection: true, sections: { math: 480, rw: 440 }, percentCorrect: 45 },
  skillAnalysis: {
    weakSkills: [
      { skillId: 'words-in-context', name: 'Words In Context', domain: 'craft-and-structure', section: 'rw', testAccuracy: 0, correct: 0, total: 6, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: [], sections: [] },
      { skillId: 'transitions', name: 'Transitions', domain: 'expression-of-ideas', section: 'rw', testAccuracy: 20, correct: 1, total: 5, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: ['transitions-contrast'], modules: [], sections: [] },
      { skillId: 'exponent-rules', name: 'Exponent Rules', domain: 'advanced-math', section: 'math', testAccuracy: 0, correct: 0, total: 2, primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: ['exponents'], sections: [] },
    ],
    strongSkills: [],
  },
  prioritizedActions: [],
  errorPatterns: { totalWrong: 20, counts: {}, dominantPattern: null, summary: [] },
  difficultyAnalysis: {},
  timeAnalysis: { fadeEffect: 0 },
  trendAnalysis: { persistentWeaknesses: [] },
  scoreProjection: { easyWins: { count: 0, points: 0 } },
  ...over,
});

const allActivities = (plan) => plan.weeks.flatMap(w => w.activities || []);

describe('generateStudyPlan — R&W weekly activities (format v2)', () => {
  const plan = generateStudyPlan(mkDiag(), { targetScore: 750 });

  test('R&W gaps emit drill-shaped activities into the weeks', () => {
    const rw = allActivities(plan).filter(a => a.section === 'rw');
    expect(rw.length).toBeGreaterThan(0);
    rw.forEach(a => {
      expect(a.type).toBe('practice');
      expect(a.skillId).toBeTruthy();
      expect(a.moduleId).toBeUndefined(); // module route is math-only
    });
  });

  test('R&W activity titles use official CB labels', () => {
    const wic = allActivities(plan).find(a => a.skillId === 'words-in-context');
    expect(wic).toBeTruthy();
    expect(wic.title).toBe('Practice: Words in Context');
  });

  test('plan is stamped with the current format version', () => {
    expect(plan.planFormatVersion).toBe(PLAN_FORMAT_VERSION);
  });

  test('drill-shaped activities are startable via Today\'s Tasks contract (skillId present)', () => {
    const drills = allActivities(plan).filter(a => a.activityType === 'skillDrill');
    expect(drills.every(a => a.skillId && a.skillName)).toBe(true);
  });

  test('unmapped MATH gap with a real domain stays servable via the Tier-3 domain fallback', () => {
    const diag = mkDiag();
    diag.skillAnalysis.weakSkills.push({
      skillId: 'center-radius-form-unknown', name: 'Center Radius Form', domain: 'geometry',
      section: 'math', testAccuracy: 0, correct: 0, total: 2,
      primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: [], sections: [],
    });
    const p = generateStudyPlan(diag, { targetScore: 750 });
    const act = allActivities(p).find(a => a.skillId === 'center-radius-form-unknown');
    expect(act).toBeTruthy();
    expect(act.domain).toBe('geometry'); // the router's synthetic needs it for the fallback
  });

  test('truly unservable MATH gaps (no skill items, no domain) emit no activity', () => {
    const diag = mkDiag();
    diag.skillAnalysis.weakSkills.push({
      skillId: 'totally-unknown-skill', name: 'Unknown', domain: undefined,
      section: 'math', testAccuracy: 0, correct: 0, total: 2,
      primaryErrorType: 'CONCEPTUAL_GAP', missedPatterns: [], modules: [], sections: [],
    });
    const p = generateStudyPlan(diag, { targetScore: 750 });
    expect(allActivities(p).some(a => a.skillId === 'totally-unknown-skill')).toBe(false);
  });

  test('drill activities carry their gap\'s missedPatterns for post-cap Tier-1 routing', () => {
    const trans = allActivities(plan).find(a => a.skillId === 'transitions');
    expect(trans).toBeTruthy();
    expect(trans.missedPatterns).toEqual(['transitions-contrast']);
  });
});

describe('generateStudyPlan — scale-guarded score gap', () => {
  test('composite current vs section target uses the math section score (no fake "past target")', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 750 });
    expect(plan.scoreGap).toBe(270); // 750 - sections.math(480)
    expect(plan.summary.headline).not.toMatch(/past your target/i);
    expect(plan.summary.headline).toMatch(/in Math/);
  });

  test('matching composite scales subtract directly', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 1300 });
    expect(plan.scoreGap).toBe(380); // 1300 - 920
    expect(plan.summary.headline).not.toMatch(/in Math/);
  });

  test('incomparable scales with no section data → null gap and neutral headline', () => {
    const diag = mkDiag({ score: { scaled: 920, isMultiSection: true, sections: null, percentCorrect: 45 } });
    const plan = generateStudyPlan(diag, { targetScore: 750 });
    expect(plan.scoreGap).toBeNull();
    expect(plan.summary.headline).not.toMatch(/past your target/i);
    expect(plan.summary.headline).not.toMatch(/NaN/);
  });

  test('genuinely past a same-scale target still says so', () => {
    const diag = mkDiag({ score: { scaled: 700, isMultiSection: false, sections: null, percentCorrect: 85 } });
    const plan = generateStudyPlan(diag, { targetScore: 650 });
    expect(plan.summary.headline).toMatch(/past your target/i);
  });
});

describe('generateStudyPlan — strategy/micro-goal copy follows the section mix', () => {
  test('R&W gaps add R&W warm-ups to the micro-goal rotation', () => {
    const plan = generateStudyPlan(mkDiag(), { targetScore: 750 });
    const titles = (plan.microGoals?.goals || []).map(g => g.title);
    expect(titles).toContain('Words in Context Warm-Up');
  });

  test('math-only diagnosis keeps the math-only rotation', () => {
    const diag = mkDiag();
    diag.skillAnalysis.weakSkills = diag.skillAnalysis.weakSkills.filter(s => s.section !== 'rw');
    const plan = generateStudyPlan(diag, { targetScore: 750 });
    const titles = (plan.microGoals?.goals || []).map(g => g.title);
    expect(titles).not.toContain('Words in Context Warm-Up');
  });
});
