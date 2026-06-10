/**
 * scoreBand.test.js — pins the mini-diagnostic band contract: monotonicity
 * in correct-answer count, [200,800]/[400,1600] clamping, 10-point rounding,
 * sane extremes, and honest composite band width (40-150 points).
 */

import { computeScoreBand } from '../scoreBand';

const mkItem = (id) => ({
  id,
  type: 'multiple-choice',
  difficulty: 'medium',
  choices: [
    { id: 'A', text: '1' },
    { id: 'B', text: '2' },
    { id: 'C', text: '3' },
    { id: 'D', text: '4' },
  ],
  correctAnswer: 'A',
});

const rwItems = () => Array.from({ length: 12 }, (_, i) => mkItem(`rw-${i + 1}`));
const mathItems = () => Array.from({ length: 12 }, (_, i) => mkItem(`math-${i + 1}`));

/**
 * Answers with the first `k` of the 24 items correct, filling R&W first
 * then Math — a fixed flip order so each k -> k+1 step flips exactly one
 * answer from wrong to right.
 */
const answersWithKCorrect = (k) => {
  const answers = {};
  rwItems().forEach((q, i) => { answers[q.id] = i < k ? 'A' : 'B'; });
  mathItems().forEach((q, i) => { answers[q.id] = i + 12 < k ? 'A' : 'B'; });
  return answers;
};

const bandAtK = (k) => computeScoreBand({
  rwItems: rwItems(),
  mathItems: mathItems(),
  answersById: answersWithKCorrect(k),
});

describe('computeScoreBand — monotonicity', () => {
  test('more correct answers never lower any band edge', () => {
    let prev = bandAtK(0);
    for (let k = 1; k <= 24; k++) {
      const band = bandAtK(k);
      expect(band.low).toBeGreaterThanOrEqual(prev.low);
      expect(band.high).toBeGreaterThanOrEqual(prev.high);
      expect(band.rwBand.low).toBeGreaterThanOrEqual(prev.rwBand.low);
      expect(band.rwBand.high).toBeGreaterThanOrEqual(prev.rwBand.high);
      expect(band.mathBand.low).toBeGreaterThanOrEqual(prev.mathBand.low);
      expect(band.mathBand.high).toBeGreaterThanOrEqual(prev.mathBand.high);
      prev = band;
    }
  });
});

describe('computeScoreBand — clamping and rounding', () => {
  test('every edge is a multiple of 10 inside the legal score ranges, low <= high', () => {
    for (let k = 0; k <= 24; k++) {
      const band = bandAtK(k);
      [band.low, band.high, band.rwBand.low, band.rwBand.high, band.mathBand.low, band.mathBand.high]
        .forEach((v) => expect(v % 10).toBe(0));
      expect(band.low).toBeGreaterThanOrEqual(400);
      expect(band.high).toBeLessThanOrEqual(1600);
      expect(band.low).toBeLessThanOrEqual(band.high);
      [band.rwBand, band.mathBand].forEach((sb) => {
        expect(sb.low).toBeGreaterThanOrEqual(200);
        expect(sb.high).toBeLessThanOrEqual(800);
        expect(sb.low).toBeLessThanOrEqual(sb.high);
      });
    }
  });
});

describe('computeScoreBand — extremes', () => {
  test('all wrong floors at the composite minimum and stays narrow-low', () => {
    const band = bandAtK(0);
    expect(band.low).toBe(400);
    expect(band.high).toBeLessThanOrEqual(520);
    expect(band.rwBand.low).toBe(200);
    expect(band.mathBand.low).toBe(200);
  });

  test('all right ceilings at the composite maximum', () => {
    const band = bandAtK(24);
    expect(band.high).toBe(1600);
    expect(band.low).toBeGreaterThanOrEqual(1500);
    expect(band.rwBand.high).toBe(800);
    expect(band.mathBand.high).toBe(800);
  });

  test('unanswered items count as incorrect', () => {
    const allBlank = computeScoreBand({ rwItems: rwItems(), mathItems: mathItems(), answersById: {} });
    expect(allBlank).toEqual(bandAtK(0));
  });

  test('empty input is safe and clamps to the floor', () => {
    const band = computeScoreBand({});
    expect(band.low).toBe(400);
    expect(band.low).toBeLessThanOrEqual(band.high);
  });
});

describe('computeScoreBand — honest width', () => {
  test('composite band is 40-150 points wide across the full score range', () => {
    for (let k = 0; k <= 24; k++) {
      const band = bandAtK(k);
      const width = band.high - band.low;
      expect(width).toBeGreaterThanOrEqual(40);
      expect(width).toBeLessThanOrEqual(150);
    }
  });
});
