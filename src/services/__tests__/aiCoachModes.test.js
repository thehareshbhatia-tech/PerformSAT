/**
 * Tests for aiCoachModes — the 4 structured AI-tutor coach modes.
 * Pins the picker contract (getAvailableCoachModes), the context injection
 * (buildCoachContext), and the project's hard no-emoji rule.
 */

import { COACH_MODES, getAvailableCoachModes, buildCoachContext } from '../aiCoachModes';

describe('getAvailableCoachModes', () => {
  const modes = getAvailableCoachModes();

  test('returns the four modes with id/label/description', () => {
    expect(modes).toHaveLength(4);
    expect(modes.map(m => m.id).sort()).toEqual(
      ['exam_strategy', 'hint_ladder', 'mistake_replay', 'teach_back'],
    );
    modes.forEach(m => {
      expect(typeof m.id).toBe('string');
      expect(typeof m.label).toBe('string');
      expect(typeof m.description).toBe('string');
    });
  });

  test('NO emoji icons anywhere (PerformSAT hard rule)', () => {
    // Match common emoji ranges; coach labels/descriptions must stay text-only.
    const emoji = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}]/u;
    modes.forEach(m => {
      expect(m).not.toHaveProperty('icon');
      expect(m.label).not.toMatch(emoji);
      expect(m.description).not.toMatch(emoji);
    });
    // Also assert the underlying COACH_MODES no longer carry emoji icon fields.
    Object.values(COACH_MODES).forEach(m => {
      expect(m.icon).toBeUndefined();
    });
  });
});

describe('buildCoachContext', () => {
  test('unknown mode returns empty string', () => {
    expect(buildCoachContext('does_not_exist', {})).toBe('');
    expect(buildCoachContext(undefined)).toBe('');
  });

  test('injects the mode header + system overlay', () => {
    const block = buildCoachContext('hint_ladder', {});
    expect(block).toContain('COACH MODE: HINT LADDER');
    expect(block).toContain('HINT LADDER mode');
    expect(block).toContain('SESSION CONTEXT');
  });

  test('includes only the context fields that are present', () => {
    const block = buildCoachContext('mistake_replay', {
      question: 'What is 2+2?',
      userAnswer: '5',
      correctAnswer: '4',
      errorType: 'CARELESS_ERROR',
    });
    expect(block).toContain('Question: What is 2+2?');
    expect(block).toContain("Student's answer: 5");
    expect(block).toContain('Correct answer: 4');
    expect(block).toContain('Error classification: CARELESS_ERROR');
    // A field not provided should not appear.
    expect(block).not.toContain('Target score');
  });

  test('exam_strategy injects score + pacing context', () => {
    const block = buildCoachContext('exam_strategy', {
      currentScore: 1200,
      targetScore: 1400,
      daysUntilTest: 21,
    });
    expect(block).toContain('Current score: 1200');
    expect(block).toContain('Target score: 1400');
    expect(block).toContain('Days until test: 21');
  });
});
