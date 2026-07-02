/**
 * Contract tests for the pre-signup funnel content + profile mapping.
 *
 * The option `value` slugs are persisted into users/{uid}.onboardingProfile
 * at signup — they are a storage schema, not just copy. These tests pin
 * the invariants a refactor must not break: id/slug stability rules,
 * 4-option screens, step-table integrity, the no-emoji policy, and the
 * exact translation buildFunnelProfile performs (goal snapping + the
 * goalScale:'composite' provenance stamp that keeps normalizeProfileGoal
 * from doubling sub-800 goals).
 */

import {
  FUNNEL_QUESTIONS,
  FUNNEL_INTERSTITIALS,
  FUNNEL_STEPS,
  FUNNEL_VERSION,
  DEFAULT_FUNNEL_GOAL,
  goalContextLine,
  normalizeFunnelGoal,
  buildFunnelProfile,
} from '../funnelConfig';

// Emoji + dingbat/symbol blocks — UI copy must never contain emojis.
const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

describe('funnel content invariants', () => {
  test('question ids are unique', () => {
    const ids = FUNNEL_QUESTIONS.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('every question has exactly 4 options with unique stable values', () => {
    for (const q of FUNNEL_QUESTIONS) {
      expect(q.options).toHaveLength(4);
      const values = q.options.map((o) => o.value);
      expect(new Set(values).size).toBe(4);
      for (const v of values) expect(v).toMatch(/^[a-z0-9]+$/i);
    }
  });

  test('FUNNEL_STEPS references only real questions/interstitials, ends path → signup', () => {
    for (const step of FUNNEL_STEPS) {
      if (step.type === 'question') {
        expect(FUNNEL_QUESTIONS.some((q) => q.id === step.id)).toBe(true);
      }
      if (step.type === 'interstitial') {
        expect(FUNNEL_INTERSTITIALS[step.id]).toBeDefined();
      }
    }
    // Every question appears exactly once in the flow.
    const questionSteps = FUNNEL_STEPS.filter((s) => s.type === 'question');
    expect(questionSteps).toHaveLength(FUNNEL_QUESTIONS.length);
    // The funnel must end by converting: goal → path → signup.
    const tail = FUNNEL_STEPS.slice(-3).map((s) => s.type);
    expect(tail).toEqual(['goal', 'path', 'signup']);
  });

  test('the reassure interstitial covers every feeling answer', () => {
    const feelings = FUNNEL_QUESTIONS.find((q) => q.id === 'feeling').options.map((o) => o.value);
    for (const f of feelings) {
      expect(typeof FUNNEL_INTERSTITIALS.reassure.headingByFeeling[f]).toBe('string');
    }
  });

  test('copy contains no emojis and never names the competitor', () => {
    const allCopy = JSON.stringify({ FUNNEL_QUESTIONS, FUNNEL_INTERSTITIALS });
    expect(allCopy).not.toMatch(EMOJI_RE);
    expect(allCopy).not.toMatch(/acely/i);
  });
});

describe('normalizeFunnelGoal', () => {
  test('snaps to the 10-point grid and clamps to 400-1600', () => {
    expect(normalizeFunnelGoal(1447)).toBe(1450);
    expect(normalizeFunnelGoal(200)).toBe(400);
    expect(normalizeFunnelGoal(2000)).toBe(1600);
    expect(normalizeFunnelGoal('1490')).toBe(1490);
  });

  test('falls back to the default on garbage', () => {
    expect(normalizeFunnelGoal('not-a-score')).toBe(DEFAULT_FUNNEL_GOAL);
    expect(normalizeFunnelGoal(undefined)).toBe(DEFAULT_FUNNEL_GOAL);
    expect(normalizeFunnelGoal(NaN)).toBe(DEFAULT_FUNNEL_GOAL);
  });
});

describe('goalContextLine', () => {
  test('returns a non-empty line at every tier boundary', () => {
    for (const goal of [400, 1140, 1150, 1290, 1300, 1390, 1400, 1490, 1500, 1600]) {
      const line = goalContextLine(goal);
      expect(typeof line).toBe('string');
      expect(line.length).toBeGreaterThan(10);
    }
  });
});

describe('buildFunnelProfile', () => {
  const VALID_ANSWERS = {
    timing: '2to6m',
    baseline: 'sat',
    feeling: 'stressed',
    stuckHabit: 'wrestle',
    studyWindow: 'evening',
    sessionLength: '30m',
    blocker: 'lost',
    testReaction: 'unsure',
    motivation: 'colleges',
  };

  test('maps a full quiz into the signup profile payload', () => {
    const p = buildFunnelProfile(VALID_ANSWERS, 1450, '2026-07-02T12:00:00.000Z');
    expect(p.targetScore).toBe(1450);
    expect(p.goalScale).toBe('composite');
    expect(p.hasTakenSAT).toBe(true); // baseline === 'sat'
    expect(p.onboardingProfile).toEqual({
      version: FUNNEL_VERSION,
      completedAt: '2026-07-02T12:00:00.000Z',
      answers: VALID_ANSWERS,
    });
  });

  test('hasTakenSAT is only true for a real SAT sitting', () => {
    expect(buildFunnelProfile({ baseline: 'psat' }, 1400).hasTakenSAT).toBe(false);
    expect(buildFunnelProfile({ baseline: 'practice' }, 1400).hasTakenSAT).toBe(false);
    expect(buildFunnelProfile({ baseline: 'fresh' }, 1400).hasTakenSAT).toBe(false);
    expect(buildFunnelProfile({}, 1400).hasTakenSAT).toBe(false);
  });

  test('drops unknown question keys and invalid option values', () => {
    const p = buildFunnelProfile(
      { timing: '2to6m', feeling: 'invented-slug', hacker: '<script>' },
      1400,
      'T'
    );
    expect(p.onboardingProfile.answers).toEqual({ timing: '2to6m' });
  });

  test('normalizes the goal (snap + clamp + default)', () => {
    expect(buildFunnelProfile({}, 1447).targetScore).toBe(1450);
    expect(buildFunnelProfile({}, 99999).targetScore).toBe(1600);
    expect(buildFunnelProfile({}, 'garbage').targetScore).toBe(DEFAULT_FUNNEL_GOAL);
  });

  test('tolerates a skipped quiz (empty answers) — goal-only profile', () => {
    const p = buildFunnelProfile(undefined, undefined, 'T');
    expect(p.targetScore).toBe(DEFAULT_FUNNEL_GOAL);
    expect(p.goalScale).toBe('composite');
    expect(p.onboardingProfile.answers).toEqual({});
  });
});
