import { getIdentityInsights, getPredictionTrust } from '../identityInsights';

describe('getIdentityInsights', () => {
  it('returns [] for missing/invalid plan', () => {
    expect(getIdentityInsights(null)).toEqual([]);
    expect(getIdentityInsights(undefined)).toEqual([]);
    expect(getIdentityInsights('nope')).toEqual([]);
    expect(getIdentityInsights({})).toEqual([]);
  });

  describe('answer-change insight', () => {
    it('flags right-to-wrong changers with the counts', () => {
      const out = getIdentityInsights({
        eliminationEffectiveness: { totalChanges: 5, changedToWrong: 4, changedToCorrect: 1 },
      });
      expect(out).toHaveLength(1);
      expect(out[0].key).toBe('answer-changes');
      expect(out[0].stat).toBe('4 of 5');
      expect(out[0].text).toMatch(/first instinct/i);
    });

    it('praises productive checkers when changes help', () => {
      const out = getIdentityInsights({
        eliminationEffectiveness: { totalChanges: 4, changedToWrong: 1, changedToCorrect: 3 },
      });
      expect(out[0].stat).toBe('3 of 4');
      expect(out[0].text).toMatch(/second look/i);
    });

    it('stays silent under 3 total changes (insufficient data)', () => {
      const out = getIdentityInsights({
        eliminationEffectiveness: { totalChanges: 2, changedToWrong: 2, changedToCorrect: 0 },
      });
      expect(out).toEqual([]);
    });

    it('stays silent on a tie (nothing actionable)', () => {
      const out = getIdentityInsights({
        eliminationEffectiveness: { totalChanges: 4, changedToWrong: 2, changedToCorrect: 2 },
      });
      expect(out).toEqual([]);
    });
  });

  describe('stamina insight', () => {
    it('renders a real fade with the dropoff number', () => {
      const out = getIdentityInsights({ staminaInsight: { dropoff: 22, score: 56 } });
      expect(out).toHaveLength(1);
      expect(out[0].key).toBe('stamina');
      expect(out[0].stat).toBe('-22%');
    });

    it('treats dropoff under 15% as noise', () => {
      expect(getIdentityInsights({ staminaInsight: { dropoff: 14 } })).toEqual([]);
    });
  });

  describe('calculator insight', () => {
    it('flags heavy use that includes easy questions', () => {
      const out = getIdentityInsights({
        calculatorDependency: { usagePercent: 72, easyQuestionsWithCalculator: 5 },
      });
      expect(out).toHaveLength(1);
      expect(out[0].stat).toBe('72%');
      expect(out[0].text).toMatch(/5 were easy/);
    });

    it('ignores heavy use without easy-question reliance', () => {
      expect(getIdentityInsights({
        calculatorDependency: { usagePercent: 80, easyQuestionsWithCalculator: 1 },
      })).toEqual([]);
    });

    it('ignores moderate use', () => {
      expect(getIdentityInsights({
        calculatorDependency: { usagePercent: 45, easyQuestionsWithCalculator: 5 },
      })).toEqual([]);
    });
  });

  it('caps at 3 and never emits emojis or exclamations', () => {
    const out = getIdentityInsights({
      eliminationEffectiveness: { totalChanges: 5, changedToWrong: 4, changedToCorrect: 1 },
      staminaInsight: { dropoff: 20 },
      calculatorDependency: { usagePercent: 70, easyQuestionsWithCalculator: 4 },
    });
    expect(out).toHaveLength(3);
    out.forEach(i => {
      expect(`${i.stat} ${i.label} ${i.text}`).not.toMatch(/!/);
      // eslint-disable-next-line no-misleading-character-class
      expect(`${i.stat} ${i.label} ${i.text}`).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
    });
  });
});

describe('getPredictionTrust', () => {
  const resolved = (struggleSkillsHit) => ({
    resolved: true,
    accuracy: { struggleSkillsHit, scoreInRange: true },
  });

  it('returns null for missing/empty logs', () => {
    expect(getPredictionTrust(null)).toBeNull();
    expect(getPredictionTrust(undefined)).toBeNull();
    expect(getPredictionTrust([])).toBeNull();
  });

  it('returns null when no predictions are resolved', () => {
    expect(getPredictionTrust([{ resolved: false }])).toBeNull();
  });

  it('returns null on an all-miss record (would only undermine trust)', () => {
    expect(getPredictionTrust([resolved(0), resolved(0)])).toBeNull();
  });

  it('counts hits over validated predictions', () => {
    expect(getPredictionTrust([resolved(2), resolved(0), resolved(1)]))
      .toEqual({ hits: 2, total: 3 });
  });

  it('ignores malformed entries', () => {
    expect(getPredictionTrust([resolved(1), { resolved: true }, null]))
      .toEqual({ hits: 1, total: 1 });
  });
});
