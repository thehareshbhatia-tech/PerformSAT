/**
 * Tests for resolveItemParams() and the BAND_TO_B mapping.
 *
 * Covers:
 *  - band → b conversion across the full 1-7 range
 *  - difficulty fallback when band is absent
 *  - calibration override precedence
 *  - defensive handling of invalid bands
 *  - a/c parameter stability (only b is band-driven)
 */

import {
  resolveItemParams,
  BAND_TO_B,
  DEFAULT_IRT_PARAMS,
  DIFFICULTY,
} from '../scoringSchema';

// ═══════════════════════════════════════════════════════════════════════════
// BAND_TO_B mapping
// ═══════════════════════════════════════════════════════════════════════════

describe('BAND_TO_B mapping', () => {
  it('exposes b parameters for all CB bands 1-7', () => {
    expect(BAND_TO_B[1]).toBe(-1.5);
    expect(BAND_TO_B[2]).toBe(-1.0);
    expect(BAND_TO_B[3]).toBe(-0.5);
    expect(BAND_TO_B[4]).toBe(-0.2);
    expect(BAND_TO_B[5]).toBe(0.0);
    expect(BAND_TO_B[6]).toBe(0.7);
    expect(BAND_TO_B[7]).toBe(1.5);
  });

  it('is monotonically non-decreasing (band 1 easiest, band 7 hardest)', () => {
    for (let b = 1; b < 7; b++) {
      expect(BAND_TO_B[b + 1]).toBeGreaterThan(BAND_TO_B[b]);
    }
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// resolveItemParams — band → b conversion
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — band-driven b parameter', () => {
  it('band 1 yields b=-1.5', () => {
    const params = resolveItemParams({ band: 1, difficulty: 'medium' });
    expect(params.b).toBe(-1.5);
  });

  it('band 3 yields b=-0.5', () => {
    const params = resolveItemParams({ band: 3, difficulty: 'medium' });
    expect(params.b).toBe(-0.5);
  });

  it('band 5 yields b=0.0', () => {
    const params = resolveItemParams({ band: 5, difficulty: 'medium' });
    expect(params.b).toBe(0.0);
  });

  it('band 7 yields b=+1.5', () => {
    const params = resolveItemParams({ band: 7, difficulty: 'medium' });
    expect(params.b).toBe(1.5);
  });

  it('band 4 yields b=-0.2 (no interpolation, exact lookup)', () => {
    const params = resolveItemParams({ band: 4, difficulty: 'medium' });
    expect(params.b).toBe(BAND_TO_B[4]);
    expect(params.b).toBe(-0.2);
  });

  it('band 6 yields b=0.7 (no interpolation, exact lookup)', () => {
    const params = resolveItemParams({ band: 6, difficulty: 'medium' });
    expect(params.b).toBe(BAND_TO_B[6]);
    expect(params.b).toBe(0.7);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// resolveItemParams — difficulty fallback
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — difficulty fallback when band absent', () => {
  it('band absent + difficulty=easy → b=-1.0 (existing default preserved)', () => {
    const params = resolveItemParams({ difficulty: 'easy' });
    expect(params.b).toBe(-1.0);
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.EASY].b);
  });

  it('band absent + difficulty=medium → b=0.0', () => {
    const params = resolveItemParams({ difficulty: 'medium' });
    expect(params.b).toBe(0.0);
  });

  it('band absent + difficulty=hard → b=+1.5', () => {
    const params = resolveItemParams({ difficulty: 'hard' });
    expect(params.b).toBe(1.5);
  });

  it('no band and no difficulty → defaults to medium (b=0.0)', () => {
    const params = resolveItemParams({});
    expect(params.b).toBe(0.0);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// resolveItemParams — override precedence
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — calibration override precedence', () => {
  it('explicit override.b wins over band-derived value', () => {
    const params = resolveItemParams({ band: 1, difficulty: 'easy' }, { b: 2.5 });
    expect(params.b).toBe(2.5);
  });

  it('override missing b but present a/c uses band-derived b', () => {
    const params = resolveItemParams({ band: 7 }, { a: 1.5, c: 0.2 });
    expect(params.b).toBe(BAND_TO_B[7]);
    expect(params.a).toBe(1.5);
    expect(params.c).toBe(0.2);
  });

  it('override.b=null falls back to band (?? coalescing)', () => {
    const params = resolveItemParams({ band: 3 }, { a: 1.0, b: null, c: 0.25 });
    expect(params.b).toBe(BAND_TO_B[3]);
  });

  it('override with band absent uses difficulty default for fallback', () => {
    const params = resolveItemParams({ difficulty: 'hard' }, { a: 1.2 });
    expect(params.a).toBe(1.2);
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.HARD].b);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// resolveItemParams — band wins over difficulty
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — band vs difficulty precedence', () => {
  it('band present + difficulty present → band wins', () => {
    const params = resolveItemParams({ band: 1, difficulty: 'hard' });
    expect(params.b).toBe(BAND_TO_B[1]);
    expect(params.b).toBe(-1.5);
  });

  it('band 7 + difficulty=easy → band wins (b=+1.5, not -1.0)', () => {
    const params = resolveItemParams({ band: 7, difficulty: 'easy' });
    expect(params.b).toBe(1.5);
  });

  it('band 8 maps to its calibrated b (top-of-bank, b=+2.2)', () => {
    const params = resolveItemParams({ band: 8 });
    expect(params.b).toBe(BAND_TO_B[8]);
    expect(params.b).toBe(2.2);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// resolveItemParams — defensive handling of invalid bands
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — invalid band fallback', () => {
  it('band=0 falls back to difficulty default (no throw)', () => {
    const params = resolveItemParams({ band: 0, difficulty: 'easy' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.EASY].b);
  });

  it('band=9 (out of range) falls back to difficulty default', () => {
    const params = resolveItemParams({ band: 9, difficulty: 'medium' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.MEDIUM].b);
  });

  it('band="foo" (string) falls back to difficulty default', () => {
    const params = resolveItemParams({ band: 'foo', difficulty: 'hard' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.HARD].b);
  });

  it('band=null falls back to difficulty default', () => {
    const params = resolveItemParams({ band: null, difficulty: 'easy' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.EASY].b);
  });

  it('band=undefined falls back to difficulty default', () => {
    const params = resolveItemParams({ band: undefined, difficulty: 'medium' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.MEDIUM].b);
  });

  it('band=[] falls back to difficulty default', () => {
    const params = resolveItemParams({ band: [], difficulty: 'hard' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.HARD].b);
  });

  it('band=3.5 (non-integer) falls back to difficulty default', () => {
    const params = resolveItemParams({ band: 3.5, difficulty: 'easy' });
    expect(params.b).toBe(DEFAULT_IRT_PARAMS[DIFFICULTY.EASY].b);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// resolveItemParams — a and c stability
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — a and c are not band-driven', () => {
  it('a=1.0 and c=0.25 regardless of band when no override', () => {
    for (let band = 1; band <= 8; band++) {
      const params = resolveItemParams({ band });
      expect(params.a).toBe(1.0);
      expect(params.c).toBe(0.25);
    }
  });

  it('a and c stay at defaults across difficulty levels', () => {
    expect(resolveItemParams({ difficulty: 'easy' }).a).toBe(1.0);
    expect(resolveItemParams({ difficulty: 'easy' }).c).toBe(0.25);
    expect(resolveItemParams({ difficulty: 'medium' }).a).toBe(1.0);
    expect(resolveItemParams({ difficulty: 'medium' }).c).toBe(0.25);
    expect(resolveItemParams({ difficulty: 'hard' }).a).toBe(1.0);
    expect(resolveItemParams({ difficulty: 'hard' }).c).toBe(0.25);
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// Backwards compatibility — existing call sites
// ═══════════════════════════════════════════════════════════════════════════

describe('resolveItemParams — backwards compatibility', () => {
  it('returns same b for { difficulty: "easy" } as before band was added', () => {
    const params = resolveItemParams({ difficulty: 'easy' });
    expect(params).toEqual({ a: 1.0, b: -1.0, c: 0.25 });
  });

  it('returns same b for { difficulty: "medium" } as before', () => {
    const params = resolveItemParams({ difficulty: 'medium' });
    expect(params).toEqual({ a: 1.0, b: 0.0, c: 0.25 });
  });

  it('returns same b for { difficulty: "hard" } as before', () => {
    const params = resolveItemParams({ difficulty: 'hard' });
    expect(params).toEqual({ a: 1.0, b: 1.5, c: 0.25 });
  });

  it('returned object is a fresh copy (no shared reference)', () => {
    const p1 = resolveItemParams({ difficulty: 'easy' });
    const p2 = resolveItemParams({ difficulty: 'easy' });
    expect(p1).not.toBe(p2);
    p1.b = 99;
    expect(p2.b).toBe(-1.0);
  });
});
