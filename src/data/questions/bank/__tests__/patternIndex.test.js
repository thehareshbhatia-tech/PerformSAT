import { getBankRoutingStats, DRILL_ROUTING_THRESHOLDS } from '../index';
import { algebraBank } from '../algebra';
import { problemSolvingBank } from '../problemSolving';
import { advancedMathBank } from '../advancedMath';
import { geometryBank } from '../geometry';

// Dynamic hand-authored count — grows as Phase 2 authoring lands.
// Computed at test time so adding items doesn't require updating literals.
const HAND_AUTHORED_COUNT =
  algebraBank.length +
  problemSolvingBank.length +
  advancedMathBank.length +
  geometryBank.length;

describe('bank drill-routing indexes', () => {
  let stats;

  beforeAll(() => {
    stats = getBankRoutingStats();
  });

  describe('integrity — every hand-authored bank item has a parseable SAT Pattern', () => {
    it('reports zero hand-authored items without a SAT Pattern header', () => {
      // Regression guard: if this ever fires, a new bank item shipped
      // without the `**SAT Pattern: <Title>**` prefix in its explanation.
      // Fix the item, don't relax the guard.
      expect(stats.bankItemsWithoutPattern).toBe(0);
    });
  });

  describe('patternIndex shape', () => {
    it('builds at least 100 distinct SAT Patterns from the 300 hand-authored bank', () => {
      // The hand-authored bank has 300 items with very granular SAT
      // Pattern titles — at the time of writing this lands around ~280
      // distinct patterns. The 100 floor is a defensive lower bound.
      expect(stats.distinctPatterns).toBeGreaterThanOrEqual(100);
    });

    it('byPattern values are positive integers (no empty buckets)', () => {
      Object.values(stats.byPattern).forEach(count => {
        expect(typeof count).toBe('number');
        expect(count).toBeGreaterThan(0);
      });
    });

    it('the byPattern counts sum to the hand-authored bank size', () => {
      const sum = Object.values(stats.byPattern).reduce((a, b) => a + b, 0);
      // Some items may share a pattern, so distinctPatterns may be
      // less than HAND_AUTHORED_COUNT, but the sum of all bucket sizes
      // equals it. Topic-flattened items don't have SAT Patterns and
      // are not in patternIndex, so they don't contribute to this sum.
      expect(sum).toBe(HAND_AUTHORED_COUNT);
    });
  });

  describe('styleIndex shape', () => {
    it('builds at least 100 distinct sourceStyleRefs', () => {
      // Hand-authored bank uses ~200 sourceStyleRefs. Defensive floor.
      expect(stats.distinctStyles).toBeGreaterThanOrEqual(100);
    });

    it('byStyle values are positive integers', () => {
      Object.values(stats.byStyle).forEach(count => {
        expect(typeof count).toBe('number');
        expect(count).toBeGreaterThan(0);
      });
    });
  });

  describe('patternToStyle mapping', () => {
    it('covers every distinct SAT Pattern from hand-authored items', () => {
      // Every bank item with both a satPattern and a sourceStyleRef
      // contributes an entry. The mapping covers all distinct patterns
      // because every hand-authored bank item has both fields.
      expect(stats.patternToStyleCoverage).toBe(stats.distinctPatterns);
    });

    it('values are kebab-case strings (no whitespace, lowercase)', () => {
      Object.values(stats.patternToStyle).forEach(style => {
        expect(typeof style).toBe('string');
        expect(style).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      });
    });

    it('keys are kebab-case strings (no whitespace, lowercase)', () => {
      Object.keys(stats.patternToStyle).forEach(pattern => {
        expect(pattern).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      });
    });
  });

  describe('threshold constants', () => {
    it('exports both tier thresholds and they are frozen', () => {
      expect(DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN).toBe(8);
      expect(DRILL_ROUTING_THRESHOLDS.TIER2_STYLE).toBe(12);
      // Object.freeze means writes throw in strict mode (Jest default)
      expect(() => {
        DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN = 999;
      }).toThrow();
    });

    it('Tier 1 threshold is lower than Tier 2 (finer grain → smaller pool)', () => {
      expect(DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN)
        .toBeLessThan(DRILL_ROUTING_THRESHOLDS.TIER2_STYLE);
    });
  });
});
