/**
 * Pins the raw→scaled conversion tables and the rawToScaled lookup.
 * These tables ARE the reported SAT score, so the invariants here are the
 * guardrail against ever shipping an impossible or too-lenient curve again.
 */
import {
  rawToScaled,
  snapToScale,
  assertTableInvariants,
  SCALE_TABLES,
  MATH_TOTAL,
  RW_TOTAL,
} from '../scaleTables';

describe('scaleTables — invariants', () => {
  test('all tables satisfy structural + cross-route invariants', () => {
    expect(assertTableInvariants()).toBe(true);
  });

  test('math tables have 45 rows, R&W tables have 55 rows', () => {
    expect(SCALE_TABLES.math.hard).toHaveLength(MATH_TOTAL + 1);
    expect(SCALE_TABLES.math.easy).toHaveLength(MATH_TOTAL + 1);
    expect(SCALE_TABLES['reading-writing'].hard).toHaveLength(RW_TOTAL + 1);
    expect(SCALE_TABLES['reading-writing'].easy).toHaveLength(RW_TOTAL + 1);
  });

  test('every value is a multiple of 10 within [200,800], monotonic non-decreasing', () => {
    for (const routes of Object.values(SCALE_TABLES)) {
      for (const table of Object.values(routes)) {
        table.forEach((v, i) => {
          expect(v % 10).toBe(0);
          expect(v).toBeGreaterThanOrEqual(200);
          expect(v).toBeLessThanOrEqual(800);
          if (i > 0) expect(v).toBeGreaterThanOrEqual(table[i - 1]);
        });
      }
    }
  });

  test('floor is 200 at raw 0; hard route reaches 800 at a perfect raw', () => {
    expect(SCALE_TABLES.math.hard[0]).toBe(200);
    expect(SCALE_TABLES.math.easy[0]).toBe(200);
    expect(SCALE_TABLES['reading-writing'].hard[0]).toBe(200);
    expect(SCALE_TABLES.math.hard[MATH_TOTAL]).toBe(800);
    expect(SCALE_TABLES['reading-writing'].hard[RW_TOTAL]).toBe(800);
  });

  test('easy route is capped (≤600) and never scores above the hard route', () => {
    for (const section of Object.keys(SCALE_TABLES)) {
      const { hard, easy } = SCALE_TABLES[section];
      expect(Math.max(...easy)).toBeLessThanOrEqual(600);
      easy.forEach((v, i) => expect(v).toBeLessThanOrEqual(hard[i]));
    }
  });
});

describe('scaleTables — THE bug: 2 wrong on Math must not be 800', () => {
  test('Math hard route: 44→800, 43→790, 42→780, 41→760', () => {
    expect(rawToScaled('math', 44, 44, 'hard')).toBe(800);
    expect(rawToScaled('math', 43, 44, 'hard')).toBe(790); // 1 wrong
    expect(rawToScaled('math', 42, 44, 'hard')).toBe(780); // 2 wrong — NOT 800
    expect(rawToScaled('math', 41, 44, 'hard')).toBe(760); // 3 wrong
  });

  test('Math hard route: 2 wrong is strictly below a perfect score', () => {
    expect(rawToScaled('math', 42, 44, 'hard')).toBeLessThan(800);
  });

  test('R&W hard route: 54→800, 53→790, 52→780 (2 wrong NOT 800)', () => {
    expect(rawToScaled('reading-writing', 54, 54, 'hard')).toBe(800);
    expect(rawToScaled('reading-writing', 53, 54, 'hard')).toBe(790);
    expect(rawToScaled('reading-writing', 52, 54, 'hard')).toBe(780);
  });
});

describe('rawToScaled — behavior', () => {
  test('raw 0 floors at 200 for every section/route', () => {
    expect(rawToScaled('math', 0, 44, 'hard')).toBe(200);
    expect(rawToScaled('math', 0, 44, 'easy')).toBe(200);
    expect(rawToScaled('reading-writing', 0, 54, 'hard')).toBe(200);
  });

  test('perfect Math on the easy route is capped at 600', () => {
    expect(rawToScaled('math', 44, 44, 'easy')).toBe(600);
  });

  test("'default' and 'rw' section aliases resolve correctly", () => {
    expect(rawToScaled('default', 44, 44, 'hard')).toBe(800); // default → math
    expect(rawToScaled('rw', 54, 54, 'hard')).toBe(800); // rw → reading-writing
  });

  test('defaults to the hard route when route omitted', () => {
    expect(rawToScaled('math', 44, 44)).toBe(800);
  });

  test('off-canonical totals scale proportionally onto the canonical axis', () => {
    // A 22-question partial Math section: 11/22 ≈ 22/44 on the canonical axis.
    const partial = rawToScaled('math', 11, 22, 'hard');
    const canonical = rawToScaled('math', 22, 44, 'hard');
    expect(Math.abs(partial - canonical)).toBeLessThanOrEqual(10);
  });

  test('result is always a multiple of 10 within section bounds', () => {
    for (let raw = 0; raw <= 44; raw++) {
      const s = rawToScaled('math', raw, 44, 'hard');
      expect(s % 10).toBe(0);
      expect(s).toBeGreaterThanOrEqual(200);
      expect(s).toBeLessThanOrEqual(800);
    }
  });
});

describe('snapToScale', () => {
  test('snaps to the 10-point grid and clamps to the scale band', () => {
    expect(snapToScale(886, true)).toBe(890); // the impossible number → on-grid
    expect(snapToScale(1655, true)).toBe(1600); // clamp composite ceiling
    expect(snapToScale(380, true)).toBe(400); // clamp composite floor
    expect(snapToScale(814, false)).toBe(800); // clamp section ceiling
    expect(snapToScale(513, false)).toBe(510); // snap section to grid
  });
});
