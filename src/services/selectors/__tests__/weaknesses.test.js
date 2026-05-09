import {
  getWeaknessSection,
  tagWeaknessSection,
  getAllWeaknesses,
  getMathWeaknesses,
  getRWWeaknesses,
  getWeaknessesBySection,
  VALID_SECTIONS,
} from '../weaknesses';

const mathW = {
  skillId: 'slope-intercept-form',
  skill: 'Slope-intercept form',
  domain: 'algebra',
  accuracy: 42,
  section: 'math',
};

const rwW = {
  skillId: 'words-in-context',
  skill: 'Words in Context',
  domain: 'craft-and-structure',
  accuracy: 33,
  section: 'rw',
};

const legacyMathW = {
  skillId: 'quadratic-equations',
  skill: 'Quadratic equations',
  domain: 'advanced-math',
  accuracy: 55,
  // no section field — pre-Day-0 shape
};

describe('weaknesses selectors', () => {
  describe('VALID_SECTIONS', () => {
    it('exports the canonical section values', () => {
      expect(VALID_SECTIONS).toEqual(['math', 'rw']);
    });
  });

  describe('getWeaknessSection', () => {
    it('returns "math" for a math weakness', () => {
      expect(getWeaknessSection(mathW)).toBe('math');
    });

    it('returns "rw" for an R&W weakness', () => {
      expect(getWeaknessSection(rwW)).toBe('rw');
    });

    it('defaults to "math" for legacy weakness without section field (rollback safety)', () => {
      expect(getWeaknessSection(legacyMathW)).toBe('math');
    });

    it('defaults to "math" for invalid section values', () => {
      expect(getWeaknessSection({ ...mathW, section: 'essay' })).toBe('math');
      expect(getWeaknessSection({ ...mathW, section: null })).toBe('math');
      expect(getWeaknessSection({ ...mathW, section: '' })).toBe('math');
    });

    it('defaults to "math" for null/undefined weakness', () => {
      expect(getWeaknessSection(null)).toBe('math');
      expect(getWeaknessSection(undefined)).toBe('math');
    });
  });

  describe('tagWeaknessSection', () => {
    it('adds section="math" to a legacy weakness', () => {
      const tagged = tagWeaknessSection(legacyMathW, 'math');
      expect(tagged.section).toBe('math');
      expect(tagged.skillId).toBe(legacyMathW.skillId);
    });

    it('adds section="rw" to a legacy weakness when explicitly requested', () => {
      const tagged = tagWeaknessSection(legacyMathW, 'rw');
      expect(tagged.section).toBe('rw');
    });

    it('idempotent for already-tagged weaknesses with matching section', () => {
      expect(tagWeaknessSection(mathW, 'math')).toBe(mathW);
      expect(tagWeaknessSection(rwW, 'rw')).toBe(rwW);
    });

    it('overwrites with a new section when explicitly retagged', () => {
      const retagged = tagWeaknessSection(mathW, 'rw');
      expect(retagged.section).toBe('rw');
      expect(retagged).not.toBe(mathW);
    });

    it('coerces invalid section to "math"', () => {
      const tagged = tagWeaknessSection(legacyMathW, 'essay');
      expect(tagged.section).toBe('math');
    });

    it('returns null/undefined unchanged', () => {
      expect(tagWeaknessSection(null, 'math')).toBe(null);
      expect(tagWeaknessSection(undefined, 'math')).toBe(undefined);
    });
  });

  describe('getAllWeaknesses', () => {
    it('returns [] for null/undefined plan', () => {
      expect(getAllWeaknesses(null)).toEqual([]);
      expect(getAllWeaknesses(undefined)).toEqual([]);
      expect(getAllWeaknesses({})).toEqual([]);
    });

    it('returns the plan weaknesses with section normalized', () => {
      const plan = { weaknesses: [mathW, rwW, legacyMathW] };
      const all = getAllWeaknesses(plan);
      expect(all).toHaveLength(3);
      expect(all[0].section).toBe('math');
      expect(all[1].section).toBe('rw');
      expect(all[2].section).toBe('math'); // legacy default
    });

    it('does not mutate the input', () => {
      const plan = { weaknesses: [legacyMathW] };
      getAllWeaknesses(plan);
      expect(legacyMathW).not.toHaveProperty('section');
    });
  });

  describe('getMathWeaknesses', () => {
    it('returns only math weaknesses', () => {
      const plan = { weaknesses: [mathW, rwW, legacyMathW] };
      const math = getMathWeaknesses(plan);
      expect(math).toHaveLength(2);
      expect(math.every(w => w.section === 'math')).toBe(true);
    });

    it('treats legacy untagged weaknesses as math (rollback safety)', () => {
      const plan = { weaknesses: [legacyMathW] };
      expect(getMathWeaknesses(plan)).toHaveLength(1);
      expect(getRWWeaknesses(plan)).toHaveLength(0);
    });
  });

  describe('getRWWeaknesses', () => {
    it('returns only R&W weaknesses', () => {
      const plan = { weaknesses: [mathW, rwW, legacyMathW] };
      const rw = getRWWeaknesses(plan);
      expect(rw).toHaveLength(1);
      expect(rw[0].section).toBe('rw');
    });
  });

  describe('getWeaknessesBySection', () => {
    it('groups by section', () => {
      const plan = { weaknesses: [mathW, rwW, legacyMathW] };
      const grouped = getWeaknessesBySection(plan);
      expect(grouped.math).toHaveLength(2);
      expect(grouped.rw).toHaveLength(1);
    });

    it('returns empty buckets for empty plan', () => {
      expect(getWeaknessesBySection(null)).toEqual({ math: [], rw: [] });
    });
  });
});
