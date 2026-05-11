import {
  getTargetedWeaknessSet,
  getQuestionsBySkillIds,
  getQuestionsBySatPatterns,
  getQuestionsByStyles,
  getBankRoutingStats,
} from '../index';

// Pick concrete bank fixtures dynamically so these tests are robust
// against bank-density changes. We sort by bucket size so we always
// land on the densest pattern/style available — important because the
// hand-authored bank has very thin per-tag pools in v1.
const stats = getBankRoutingStats();

const densestPatternEntry = Object.entries(stats.byPattern)
  .sort((a, b) => b[1] - a[1])[0];
const DENSEST_PATTERN = densestPatternEntry[0];
const DENSEST_PATTERN_SIZE = densestPatternEntry[1];

const densestStyleEntry = Object.entries(stats.byStyle)
  .sort((a, b) => b[1] - a[1])[0];
const DENSEST_STYLE = densestStyleEntry[0];
const DENSEST_STYLE_SIZE = densestStyleEntry[1];

// Find a pattern that derives to the densest style (or any reasonable
// derivation chain) for the Tier-1-miss + Tier-2-hit test.
const PATTERN_DERIVING_TO_DENSEST_STYLE = Object.entries(stats.patternToStyle)
  .find(([, style]) => style === DENSEST_STYLE)?.[0];

describe('getTargetedWeaknessSet cascade', () => {
  describe('Tier 1 — exact SAT Pattern match', () => {
    it('fires when pool size meets the (overridden) Tier 1 threshold', () => {
      // Force Tier 1 to fire by setting threshold = densest pattern's
      // pool size. Every returned item should match that pattern.
      const result = getTargetedWeaknessSet({
        weakSkills: [{
          skillId: 'some-skill',
          missedPatterns: [DENSEST_PATTERN],
        }],
        count: DENSEST_PATTERN_SIZE,
        tier1Threshold: DENSEST_PATTERN_SIZE,
        tier2Threshold: 999,
      });

      expect(result.length).toBe(DENSEST_PATTERN_SIZE);
      // Re-derive expected pool and assert every returned item is in it.
      const expectedPool = getQuestionsBySatPatterns([DENSEST_PATTERN]);
      const expectedIds = new Set(expectedPool.map(q => q.id));
      result.forEach(q => {
        expect(expectedIds.has(q.id)).toBe(true);
      });
    });

    it('falls through to Tier 2 when Tier 1 pool is below threshold', () => {
      if (!PATTERN_DERIVING_TO_DENSEST_STYLE) {
        // Skip if the bank shape doesn't admit this test scenario.
        return;
      }
      // Threshold set high enough that the pattern's tiny pool fails
      // Tier 1, but the parent style's bigger pool satisfies Tier 2.
      const result = getTargetedWeaknessSet({
        weakSkills: [{
          skillId: 'some-skill',
          missedPatterns: [PATTERN_DERIVING_TO_DENSEST_STYLE],
        }],
        count: DENSEST_STYLE_SIZE,
        tier1Threshold: 999,           // force Tier 1 miss
        tier2Threshold: DENSEST_STYLE_SIZE, // exact Tier 2 hit
      });

      expect(result.length).toBe(DENSEST_STYLE_SIZE);
      const expectedPool = getQuestionsByStyles([DENSEST_STYLE]);
      const expectedIds = new Set(expectedPool.map(q => q.id));
      result.forEach(q => {
        expect(expectedIds.has(q.id)).toBe(true);
      });
    });
  });

  describe('Tier 1 + Tier 2 fall-through → Tier 3 (skill)', () => {
    it('falls through to skill when both Tier 1 and Tier 2 pools are below threshold', () => {
      // Force both thresholds to be impossibly high. Cascade must
      // reach Tier 3 and return skill-based items.
      const result = getTargetedWeaknessSet({
        weakSkills: [{
          skillId: 'word-problems', // a populous skill in the bank
          missedPatterns: [DENSEST_PATTERN], // present but won't satisfy thresholds
          domain: 'algebra',
        }],
        count: 5,
        tier1Threshold: 999,
        tier2Threshold: 999,
      });

      // Tier 3 should match by skill. Compare to direct skill lookup.
      const skillPool = getQuestionsBySkillIds(['word-problems']);
      expect(skillPool.length).toBeGreaterThan(0);
      expect(result.length).toBeGreaterThan(0);
      // Every returned item should belong to the skill pool.
      const skillIds = new Set(skillPool.map(q => q.id));
      result.forEach(q => {
        expect(skillIds.has(q.id)).toBe(true);
      });
    });
  });

  describe('★REGRESSION★ — legacy weakness (no missedPatterns) behaves exactly as today', () => {
    it('returns items from the skill-based path, identical to direct getQuestionsBySkillIds lookup', () => {
      // Legacy weakness: no missedPatterns field at all. Cascade Tier 1
      // and Tier 2 must short-circuit on empty input, falling through
      // to the byte-identical skill-only path.
      const legacyWeakness = {
        skillId: 'word-problems',
        skill: 'Word problems',
        domain: 'algebra',
        // Note: no missedPatterns field. This is what hydrated-from-
        // Firestore plans look like for users who took tests before
        // this change shipped.
      };

      const directPool = getQuestionsBySkillIds(['word-problems']);

      const cascadeResult = getTargetedWeaknessSet({
        weakSkills: [legacyWeakness],
        count: directPool.length, // ask for full pool
      });

      // Cascade result must contain ONLY items from the direct skill pool.
      const directIds = new Set(directPool.map(q => q.id));
      cascadeResult.forEach(q => {
        expect(directIds.has(q.id)).toBe(true);
      });
      expect(cascadeResult.length).toBe(directPool.length);
    });

    it('handles missedPatterns: [] (empty array) the same as missing field', () => {
      const w = { skillId: 'word-problems', missedPatterns: [], domain: 'algebra' };
      const result = getTargetedWeaknessSet({ weakSkills: [w], count: 5 });
      expect(result.length).toBeGreaterThan(0);
      const skillPool = new Set(getQuestionsBySkillIds(['word-problems']).map(q => q.id));
      result.forEach(q => expect(skillPool.has(q.id)).toBe(true));
    });

    it('handles missedPatterns: null gracefully (no crash)', () => {
      const w = { skillId: 'word-problems', missedPatterns: null, domain: 'algebra' };
      expect(() => {
        getTargetedWeaknessSet({ weakSkills: [w], count: 5 });
      }).not.toThrow();
    });

    it('handles missedPatterns: undefined gracefully (no crash)', () => {
      const w = { skillId: 'word-problems', missedPatterns: undefined, domain: 'algebra' };
      expect(() => {
        getTargetedWeaknessSet({ weakSkills: [w], count: 5 });
      }).not.toThrow();
    });
  });

  describe('options propagation through every tier', () => {
    it('respects excludeIds at Tier 1', () => {
      const fullPool = getQuestionsBySatPatterns([DENSEST_PATTERN]);
      if (fullPool.length < 2) return; // need at least 2 to test exclusion
      const [excluded, ...rest] = fullPool;

      const result = getTargetedWeaknessSet({
        weakSkills: [{
          skillId: 'x',
          missedPatterns: [DENSEST_PATTERN],
        }],
        count: fullPool.length,
        excludeIds: [excluded.id],
        tier1Threshold: 1, // force Tier 1 to fire with any non-zero pool
      });

      expect(result.map(q => q.id)).not.toContain(excluded.id);
      // All items should be from the non-excluded set.
      const remainingIds = new Set(rest.map(q => q.id));
      result.forEach(q => expect(remainingIds.has(q.id)).toBe(true));
    });

    it('respects excludeIds at Tier 3 (legacy path)', () => {
      const skillPool = getQuestionsBySkillIds(['word-problems']);
      if (skillPool.length < 2) return;
      const [excluded] = skillPool;

      const result = getTargetedWeaknessSet({
        weakSkills: [{ skillId: 'word-problems', domain: 'algebra' }],
        count: skillPool.length,
        excludeIds: [excluded.id],
      });

      expect(result.map(q => q.id)).not.toContain(excluded.id);
    });

    it('honors difficultyMix at Tier 3 (returns count items, no throw)', () => {
      // The existing `difficultyMix.medium || 0.45` falls back on 0, so
      // we can't suppress a difficulty by passing 0. We can verify the
      // mix-shape behavior by passing valid ratios and asserting the
      // result is bounded by count + non-empty. This preserves the
      // pre-existing dispatcher contract without re-litigating it.
      const result = getTargetedWeaknessSet({
        weakSkills: [{ skillId: 'word-problems', domain: 'algebra' }],
        count: 10,
        difficultyMix: { easy: 0.5, medium: 0.3, hard: 0.2 },
      });
      expect(result.length).toBeGreaterThan(0);
      expect(result.length).toBeLessThanOrEqual(10);
      result.forEach(q => expect(['easy', 'medium', 'hard']).toContain(q.difficulty));
    });
  });

  describe('empty / edge inputs', () => {
    it('returns empty array when weakSkills is empty', () => {
      const result = getTargetedWeaknessSet({ weakSkills: [], count: 10 });
      expect(result).toEqual([]);
    });

    it('returns at most `count` items even when pool is much larger', () => {
      const result = getTargetedWeaknessSet({
        weakSkills: [{ skillId: 'word-problems', domain: 'algebra' }],
        count: 3,
      });
      expect(result.length).toBeLessThanOrEqual(3);
    });

    it('handles a weakness with only `domain` (no skillId) at Tier 3', () => {
      // Pre-existing dispatcher behavior — must not regress.
      const result = getTargetedWeaknessSet({
        weakSkills: [{ domain: 'algebra' }],
        count: 5,
      });
      // Tier 3 currently maps `w => w.skillId || w.skill || w` so it
      // would pass the whole object to skillIds. That's existing
      // (slightly weird) behavior. The important contract here is
      // "does not throw" — backward compat with whatever callers used
      // to pass.
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
