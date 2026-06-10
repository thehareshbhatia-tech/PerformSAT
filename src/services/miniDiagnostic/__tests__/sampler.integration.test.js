/**
 * sampler.integration.test.js — runs buildMiniDiagnosticPlan against the
 * REAL banks through the real corpusLoader (no mocks), pinning that the
 * production corpus can always field a full 24-question mini-diagnostic:
 * 8+8 stage-1 items stratified 2-per-domain, 4+4 reserve candidates per
 * domain pool, every item MC with 4 choices and a valid correct answer.
 * The corpus already loads in-suite (corpusLoader.test.js), so this adds
 * no new chunk cost to the jest run.
 */

import {
  buildMiniDiagnosticPlan,
  selectStage2,
  MATH_DOMAIN_ORDER,
  RW_DOMAIN_ORDER,
} from '../sampler';
import { computeScoreBand } from '../scoreBand';
import { loadMathBank, loadRWBank } from '../../../data/corpusLoader';

const isRunnerSafe = (q) => (
  q &&
  (!q.type || q.type === 'multiple-choice') &&
  Array.isArray(q.choices) &&
  q.choices.length === 4 &&
  q.choices.some((c) => String(c.id) === String(q.correctAnswer))
);

describe('mini-diagnostic sampler against the real banks', () => {
  test('banks are large enough for the mini-diagnostic in every domain', async () => {
    const [mathBank, rwBank] = await Promise.all([loadMathBank(), loadRWBank()]);
    expect(mathBank.questionBank.length).toBeGreaterThanOrEqual(1500);
    expect(rwBank.rwQuestionBank.length).toBeGreaterThanOrEqual(600);
    // Each domain needs stage1 (2) + easier (4) + harder (4) = 10 MC items.
    MATH_DOMAIN_ORDER.forEach((d) => {
      expect(mathBank.getQuestionsByDomain(d).filter(isRunnerSafe).length).toBeGreaterThanOrEqual(10);
    });
    RW_DOMAIN_ORDER.forEach((d) => {
      expect(rwBank.getQuestionsByDomain(d).filter(isRunnerSafe).length).toBeGreaterThanOrEqual(10);
    });
  });

  test('a real plan is fully stratified, MC-only, duplicate-free, and deterministic', async () => {
    const seed = { userId: 'integration-user', attemptId: 'attempt-7' };
    const plan = await buildMiniDiagnosticPlan(seed);
    const again = await buildMiniDiagnosticPlan(seed);

    const ids = [];
    [['rw', RW_DOMAIN_ORDER], ['math', MATH_DOMAIN_ORDER]].forEach(([section, domains]) => {
      const { stage1, stage2Pools } = plan[section];
      expect(stage1).toHaveLength(8);
      domains.forEach((domain) => {
        expect(stage1.filter((q) => q.domain === domain)).toHaveLength(2);
        expect(stage2Pools[domain].easier).toHaveLength(4);
        expect(stage2Pools[domain].harder).toHaveLength(4);
        [...stage2Pools[domain].easier, ...stage2Pools[domain].harder].forEach((q) => {
          expect(isRunnerSafe(q)).toBe(true);
          ids.push(q.id);
        });
      });
      stage1.forEach((q) => {
        expect(isRunnerSafe(q)).toBe(true);
        ids.push(q.id);
      });
    });
    expect(new Set(ids).size).toBe(ids.length);

    const idsOf = (p) => [
      ...p.rw.stage1.map((q) => q.id),
      ...p.math.stage1.map((q) => q.id),
    ];
    expect(idsOf(again)).toEqual(idsOf(plan));
  });

  test('end-to-end: stage 2 selection and score band on a real plan', async () => {
    const plan = await buildMiniDiagnosticPlan({ userId: 'integration-user', attemptId: 'attempt-8' });

    // Answer stage 1: all R&W wrong, all Math right.
    const answersById = {};
    plan.rw.stage1.forEach((q) => {
      answersById[q.id] = q.choices.find((c) => String(c.id) !== String(q.correctAnswer)).id;
    });
    plan.math.stage1.forEach((q) => { answersById[q.id] = q.correctAnswer; });

    const rwStage2 = selectStage2(plan.rw.stage1, answersById, plan.rw.stage2Pools);
    const mathStage2 = selectStage2(plan.math.stage1, answersById, plan.math.stage2Pools);
    expect(rwStage2).toHaveLength(4);
    expect(mathStage2).toHaveLength(4);
    // All R&W domains weak -> items come from easier pools; all Math domains
    // strong -> harder pools. Assert pool membership (the routing contract)
    // rather than raw difficulty, which depends on per-domain bank supply.
    rwStage2.forEach((q) => {
      expect(plan.rw.stage2Pools[q.domain].easier.map((p) => p.id)).toContain(q.id);
    });
    mathStage2.forEach((q) => {
      expect(plan.math.stage2Pools[q.domain].harder.map((p) => p.id)).toContain(q.id);
    });
    [...rwStage2, ...mathStage2].forEach((q) => expect(isRunnerSafe(q)).toBe(true));

    // Answer stage 2 the same way and band the full 24.
    rwStage2.forEach((q) => {
      answersById[q.id] = q.choices.find((c) => String(c.id) !== String(q.correctAnswer)).id;
    });
    mathStage2.forEach((q) => { answersById[q.id] = q.correctAnswer; });

    const band = computeScoreBand({
      rwItems: [...plan.rw.stage1, ...rwStage2],
      mathItems: [...plan.math.stage1, ...mathStage2],
      answersById,
    });
    expect(band.rwBand.low).toBe(200);   // 0/12 R&W
    expect(band.mathBand.high).toBe(800); // 12/12 Math
    expect(band.low).toBeGreaterThanOrEqual(400);
    expect(band.high).toBeLessThanOrEqual(1600);
    expect(band.high - band.low).toBeGreaterThanOrEqual(40);
    expect(band.high - band.low).toBeLessThanOrEqual(150);
  });
});
