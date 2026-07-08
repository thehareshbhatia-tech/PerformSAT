/**
 * Regression: fill-in (grid-in) answers were marked wrong when the student
 * entered a SAT-valid decimal equivalent of a fraction answer key (e.g. 3.8 for
 * "19/5") because Number("19/5") is NaN. isAnswerCorrect now parses fractions
 * and allows the SAT grid-in rounding tolerance.
 *
 * The "rejects" block guards against false positives the tolerance could
 * introduce — a grading function must not start accepting wrong answers.
 */

import { isAnswerCorrect } from '../irtEngine';

const fillIn = (correctAnswer, acceptedAnswers) => ({
  type: 'fill-in',
  correctAnswer,
  ...(acceptedAnswers ? { acceptedAnswers } : {}),
});

describe('isAnswerCorrect — fill-in fraction/decimal equivalence', () => {
  it('accepts the decimal equivalent of a fraction answer key', () => {
    expect(isAnswerCorrect(fillIn('19/5'), '3.8')).toBe(true);
    expect(isAnswerCorrect(fillIn('3/2'), '1.5')).toBe(true);
    expect(isAnswerCorrect(fillIn('3/8'), '0.375')).toBe(true);
    expect(isAnswerCorrect(fillIn('3/8'), '.375')).toBe(true);
  });

  it('accepts the fraction when the key is a decimal', () => {
    expect(isAnswerCorrect(fillIn('3.8'), '19/5')).toBe(true);
  });

  it('accepts a 3-place rounded/truncated decimal of a non-terminating answer', () => {
    expect(isAnswerCorrect(fillIn('1/3'), '.333')).toBe(true);
    expect(isAnswerCorrect(fillIn('2/3'), '.667')).toBe(true); // rounded
    expect(isAnswerCorrect(fillIn('2/3'), '.666')).toBe(true); // truncated
    expect(isAnswerCorrect(fillIn('12/13'), '0.923')).toBe(true);
  });

  it('still accepts exact-string and integer matches', () => {
    expect(isAnswerCorrect(fillIn('19/5'), '19/5')).toBe(true);
    expect(isAnswerCorrect(fillIn('5'), '5')).toBe(true);
    expect(isAnswerCorrect(fillIn('5'), 5)).toBe(true);
    expect(isAnswerCorrect(fillIn('-1/2'), '-0.5')).toBe(true);
  });

  it('respects acceptedAnswers in fraction or decimal form', () => {
    const q = fillIn('7/2', ['3.5', '7/2']);
    expect(isAnswerCorrect(q, '3.5')).toBe(true);
    expect(isAnswerCorrect(q, '7/2')).toBe(true);
  });

  it('REJECTS clearly wrong answers (no false positives from the tolerance)', () => {
    expect(isAnswerCorrect(fillIn('1/2'), '0.6')).toBe(false);
    expect(isAnswerCorrect(fillIn('1/2'), '0.51')).toBe(false);
    expect(isAnswerCorrect(fillIn('1/3'), '0.3')).toBe(false);   // 1 place — too coarse
    expect(isAnswerCorrect(fillIn('12/13'), '0.92')).toBe(false); // 2 places — too coarse
    expect(isAnswerCorrect(fillIn('19/5'), '3.9')).toBe(false);
    expect(isAnswerCorrect(fillIn('5'), '6')).toBe(false);
    // Large-magnitude answers: the tolerance must NOT scale with magnitude
    // (an adjacent integer is a different, wrong answer).
    expect(isAnswerCorrect(fillIn('25000'), '25024')).toBe(false);
    expect(isAnswerCorrect(fillIn('1000'), '1001')).toBe(false);
    expect(isAnswerCorrect(fillIn('19440'), '19450')).toBe(false);
    // ...but the exact large answer still matches.
    expect(isAnswerCorrect(fillIn('25000'), '25000')).toBe(true);
  });

  it('rejects blank / undefined answers', () => {
    expect(isAnswerCorrect(fillIn('1/2'), '')).toBe(false);
    expect(isAnswerCorrect(fillIn('1/2'), undefined)).toBe(false);
    expect(isAnswerCorrect(fillIn('1/2'), null)).toBe(false);
  });

  describe('input normalization (commas / whitespace / unicode minus)', () => {
    it('accepts a comma-grouped thousands entry', () => {
      expect(isAnswerCorrect(fillIn('1000'), '1,000')).toBe(true);
      expect(isAnswerCorrect(fillIn('25000'), '25,000')).toBe(true);
      expect(isAnswerCorrect(fillIn('1000000'), '1,000,000')).toBe(true);
    });

    it('accepts a fraction typed with surrounding whitespace', () => {
      expect(isAnswerCorrect(fillIn('19/5'), '19 / 5')).toBe(true);
      expect(isAnswerCorrect(fillIn('3.8'), ' 19 / 5 ')).toBe(true);
      expect(isAnswerCorrect(fillIn('1/2'), '1 /2')).toBe(true);
    });

    it('accepts a unicode-minus / dash negative', () => {
      expect(isAnswerCorrect(fillIn('-5'), '−5')).toBe(true);   // U+2212 minus
      expect(isAnswerCorrect(fillIn('-0.5'), '−0.5')).toBe(true);
      expect(isAnswerCorrect(fillIn('-1/2'), '−1/2')).toBe(true);
      expect(isAnswerCorrect(fillIn('-5'), '–5')).toBe(true);   // U+2013 en dash
    });

    it('normalizes the answer KEY side too (comma-grouped key)', () => {
      expect(isAnswerCorrect(fillIn('1,000'), '1000')).toBe(true);
      expect(isAnswerCorrect(fillIn('19 / 5'), '3.8')).toBe(true);
    });

    it('still rejects a wrong comma-grouped entry (no false positives)', () => {
      expect(isAnswerCorrect(fillIn('1000'), '1,001')).toBe(false);
      expect(isAnswerCorrect(fillIn('25000'), '25,024')).toBe(false);
    });
  });
});
