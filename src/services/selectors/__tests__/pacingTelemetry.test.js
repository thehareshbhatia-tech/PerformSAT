/**
 * Tests for buildPacingTelemetry — deriving the pacing engine's per-question
 * timing vector from persisted diagnosticData.questionDetails.
 */

import { buildPacingTelemetry } from '../pacingTelemetry';

const attempt = (questionDetails, completedAt = '2026-05-01T00:00:00Z') => ({ completedAt, diagnosticData: { questionDetails } });

describe('buildPacingTelemetry', () => {
  test('empty / missing input -> []', () => {
    expect(buildPacingTelemetry()).toEqual([]);
    expect(buildPacingTelemetry({})).toEqual([]);
    expect(buildPacingTelemetry({ t1: {} })).toEqual([]);
  });

  test('maps questionDetails -> {timeSpent, difficulty, wasCorrect, questionIndex}', () => {
    const results = {
      'practice-test-1': {
        attempts: [
          attempt({
            '0-0': { timeSpent: 40, isCorrect: true, difficulty: 'easy' },
            '0-1': { timeSpent: 150, isCorrect: false, difficulty: 'hard' },
          }),
        ],
      },
    };
    expect(buildPacingTelemetry(results)).toEqual([
      { timeSpent: 40, difficulty: 'easy', wasCorrect: true, questionIndex: 0 },
      { timeSpent: 150, difficulty: 'hard', wasCorrect: false, questionIndex: 1 },
    ]);
  });

  test('skips attempts without diagnosticData (older/stripped attempts)', () => {
    const results = {
      t1: { attempts: [
        { scaledScore: 900 },                                   // stripped — no diagnosticData
        attempt({ '0-0': { timeSpent: 50, isCorrect: true, difficulty: 'medium' } }),
      ] },
    };
    expect(buildPacingTelemetry(results)).toEqual([
      { timeSpent: 50, difficulty: 'medium', wasCorrect: true, questionIndex: 0 },
    ]);
  });

  test('uses only the MOST RECENT attempt with telemetry (current pacing signal)', () => {
    const results = {
      a: { attempts: [
        attempt({ '0-0': { timeSpent: 10, isCorrect: true, difficulty: 'easy' } }, '2026-04-01T00:00:00Z'), // older
      ] },
      b: { attempts: [
        attempt({ '0-0': { timeSpent: 90, isCorrect: false, difficulty: 'hard' }, '0-1': { timeSpent: 80, isCorrect: true, difficulty: 'medium' } }, '2026-05-20T00:00:00Z'), // newest
      ] },
    };
    const out = buildPacingTelemetry(results);
    expect(out).toHaveLength(2); // only the newest attempt's 2 questions, not the older one
    expect(out[0]).toEqual({ timeSpent: 90, difficulty: 'hard', wasCorrect: false, questionIndex: 0 });
    expect(out.map(q => q.questionIndex)).toEqual([0, 1]);
  });

  test('missing fields default safely', () => {
    const out = buildPacingTelemetry({ t: { attempts: [attempt({ '0-0': {} })] } });
    expect(out).toEqual([{ timeSpent: 0, difficulty: null, wasCorrect: false, questionIndex: 0 }]);
  });
});
