/**
 * Tests for the prediction-aware Focus Areas re-rank (predictionBoost.js).
 *
 * Contracts:
 *  - only the newest ACTIVE (resolved !== true) prediction drives the boost
 *  - boosted weaknesses move to the front, relative order preserved in both
 *    groups, each annotated with predictedStruggle {confidence, reason}
 *  - no active prediction / no overlap returns the ORIGINAL array reference
 *    (memo-dependency stability)
 */

import { getActiveStruggleSkills, applyPredictionBoost } from '../predictionBoost';

const struggle = (skillId, over = {}) => ({
  skillId,
  section: 'math',
  reason: 'Mastery at 32%',
  confidence: 'high',
  ...over,
});

const predEntry = (over = {}) => ({
  createdAt: '2026-06-01T00:00:00Z',
  resolved: false,
  predictions: { likelyStruggleSkills: [struggle('slope-intercept-form')] },
  ...over,
});

describe('getActiveStruggleSkills', () => {
  test('returns the newest unresolved prediction\'s struggle skills', () => {
    const log = [
      predEntry({ createdAt: '2026-05-01T00:00:00Z', predictions: { likelyStruggleSkills: [struggle('old-skill')] } }),
      predEntry({ createdAt: '2026-06-01T00:00:00Z', predictions: { likelyStruggleSkills: [struggle('new-skill')] } }),
    ];
    expect(getActiveStruggleSkills(log).map(s => s.skillId)).toEqual(['new-skill']);
  });

  test('validated predictions are ignored — they describe a test that already happened', () => {
    const log = [
      predEntry({ createdAt: '2026-06-02T00:00:00Z', resolved: true, predictions: { likelyStruggleSkills: [struggle('validated-skill')] } }),
      predEntry({ createdAt: '2026-05-01T00:00:00Z', predictions: { likelyStruggleSkills: [struggle('open-skill')] } }),
    ];
    expect(getActiveStruggleSkills(log).map(s => s.skillId)).toEqual(['open-skill']);
  });

  test('empty/malformed logs yield []', () => {
    expect(getActiveStruggleSkills(null)).toEqual([]);
    expect(getActiveStruggleSkills([])).toEqual([]);
    expect(getActiveStruggleSkills([{ resolved: false, predictions: {} }])).toEqual([]);
    expect(getActiveStruggleSkills([predEntry({ resolved: true })])).toEqual([]);
  });
});

describe('applyPredictionBoost', () => {
  const WEAKNESSES = [
    { skillId: 'circle-equations', skill: 'Circle equations', accuracy: 30 },
    { skillId: 'slope-intercept-form', skill: 'Slope-intercept form', accuracy: 42 },
    { skillId: 'factoring', skill: 'Factoring', accuracy: 48 },
  ];

  test('predicted-struggle weaknesses move to the front, annotated', () => {
    const out = applyPredictionBoost(WEAKNESSES, [predEntry()]);
    expect(out.map(w => w.skillId)).toEqual(['slope-intercept-form', 'circle-equations', 'factoring']);
    expect(out[0].predictedStruggle).toEqual({ confidence: 'high', reason: 'Mastery at 32%' });
    expect(out[1].predictedStruggle).toBeUndefined();
  });

  test('relative order is preserved within boosted and unboosted groups', () => {
    const log = [predEntry({
      predictions: { likelyStruggleSkills: [struggle('circle-equations'), struggle('factoring')] },
    })];
    const out = applyPredictionBoost(WEAKNESSES, log);
    expect(out.map(w => w.skillId)).toEqual(['circle-equations', 'factoring', 'slope-intercept-form']);
  });

  test('no active prediction returns the ORIGINAL array reference', () => {
    expect(applyPredictionBoost(WEAKNESSES, null)).toBe(WEAKNESSES);
    expect(applyPredictionBoost(WEAKNESSES, [])).toBe(WEAKNESSES);
    expect(applyPredictionBoost(WEAKNESSES, [predEntry({ resolved: true })])).toBe(WEAKNESSES);
  });

  test('no overlap returns the ORIGINAL array reference', () => {
    const log = [predEntry({ predictions: { likelyStruggleSkills: [struggle('not-in-plan')] } })];
    expect(applyPredictionBoost(WEAKNESSES, log)).toBe(WEAKNESSES);
  });

  test('source weaknesses are not mutated', () => {
    const before = JSON.parse(JSON.stringify(WEAKNESSES));
    applyPredictionBoost(WEAKNESSES, [predEntry()]);
    expect(WEAKNESSES).toEqual(before);
  });

  test('empty weaknesses are passed through safely', () => {
    expect(applyPredictionBoost([], [predEntry()])).toEqual([]);
    expect(applyPredictionBoost(null, [predEntry()])).toEqual([]);
  });

  // ── Cross-vocabulary matching ──────────────────────────────────────────
  // skillProgress keys (the prediction side) carry display-cased strings from
  // bank item authoring ("Quadratic equations") while plan weaknesses carry
  // canonical kebab ids. Observed live during the 2026-06-03 dogfood.

  test('display-cased struggle skills match kebab-id weaknesses', () => {
    const log = [predEntry({ predictions: { likelyStruggleSkills: [struggle('Quadratic equations')] } })];
    const out = applyPredictionBoost(
      [{ skillId: 'circle-equations' }, { skillId: 'quadratic-equations' }],
      log,
    );
    expect(out[0].skillId).toBe('quadratic-equations');
    expect(out[0].predictedStruggle).toBeTruthy();
  });

  test('granular struggle ids match their coarse weakness at a hyphen boundary', () => {
    const log = [predEntry({ predictions: { likelyStruggleSkills: [struggle('slope-from-points')] } })];
    const out = applyPredictionBoost([{ skillId: 'factoring' }, { skillId: 'slope' }], log);
    expect(out[0].skillId).toBe('slope');
    expect(out[0].predictedStruggle).toBeTruthy();
  });

  test('shared prefixes WITHOUT a hyphen boundary do not match', () => {
    const log = [predEntry({ predictions: { likelyStruggleSkills: [struggle('function-transformation')] } })];
    const weaknesses = [{ skillId: 'function-interpretation' }];
    expect(applyPredictionBoost(weaknesses, log)).toBe(weaknesses); // original ref — no match
  });
});
