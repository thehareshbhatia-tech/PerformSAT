/**
 * Tests for `getDrillChipForWeakness` — the precision-gated chip
 * decider for the "Practicing: <Pattern>" UI surface.
 *
 * Strategy: discover viable/non-viable patterns from the real bank at
 * test runtime via `getBankRoutingStats()`. Robust to bank evolution —
 * tests don't hard-code pattern slugs that might churn as we author
 * more bank items.
 *
 * Pinned invariants:
 *  - Returns null for null/empty/missing missedPatterns (existing behavior).
 *  - Returns null when a pattern exists in the weakness but its bank pool
 *    is sub-threshold. ★ This is the precision gate — chip-shown ≡ Tier 1
 *    fired. Pre-this-fix the chip would surface anyway and mislead.
 *  - Returns { label, slug } when the pattern's bank pool meets threshold.
 *  - Label is properly title-cased from the slug (sanity check that the
 *    selector composes with formatPatternLabel).
 */

import { getDrillChipForWeakness } from '../drillChip';
import { getBankRoutingStats, DRILL_ROUTING_THRESHOLDS } from '../../../data/questions/bank';

const stats = getBankRoutingStats();
const threshold = DRILL_ROUTING_THRESHOLDS.TIER1_PATTERN;

// Runtime-discover at least one viable pattern (≥ threshold items) and one
// non-viable pattern (≥1 item, < threshold). If either is missing the bank
// has degenerated; fail loudly.
const viablePattern = Object.entries(stats.byPattern)
  .find(([, n]) => n >= threshold)?.[0];
const nonViablePattern = Object.entries(stats.byPattern)
  .find(([, n]) => n > 0 && n < threshold)?.[0];

describe('getDrillChipForWeakness — fixture sanity', () => {
  it('bank contains at least one Tier-1-viable pattern (≥ threshold items)', () => {
    expect(viablePattern).toBeTruthy();
  });

  // Non-viable bucket is optional — when the bank reaches saturation, every
  // pattern may sit ≥ threshold. Document the expectation but don't fail
  // the suite if absent.
  if (!nonViablePattern) {
    // eslint-disable-next-line no-console
    console.warn('[drillChip.test] no sub-threshold pattern in bank — precision-gate "below-threshold" case skipped.');
  }
});

describe('getDrillChipForWeakness — null / empty inputs', () => {
  it('returns null for null weakness', () => {
    expect(getDrillChipForWeakness(null)).toBeNull();
  });

  it('returns null for undefined weakness', () => {
    expect(getDrillChipForWeakness(undefined)).toBeNull();
  });

  it('returns null for weakness without missedPatterns', () => {
    expect(getDrillChipForWeakness({ skillId: 'foo', skill: 'Foo' })).toBeNull();
  });

  it('returns null for weakness with empty missedPatterns array', () => {
    expect(getDrillChipForWeakness({ missedPatterns: [] })).toBeNull();
  });

  it('returns null for weakness with whitespace-only patterns', () => {
    expect(getDrillChipForWeakness({ missedPatterns: ['', '   '] })).toBeNull();
  });
});

describe('getDrillChipForWeakness — precision gate', () => {
  it('returns { label, slug } when the primary pattern has a viable bank pool', () => {
    const weakness = { missedPatterns: [viablePattern] };
    const result = getDrillChipForWeakness(weakness);
    expect(result).not.toBeNull();
    expect(result.slug).toBe(viablePattern);
    expect(typeof result.label).toBe('string');
    expect(result.label.length).toBeGreaterThan(0);
  });

  if (nonViablePattern) {
    it('★ PRECISION GATE: returns null when primary pattern is sub-threshold (Tier 1 would NOT fire)', () => {
      const weakness = { missedPatterns: [nonViablePattern] };
      expect(getDrillChipForWeakness(weakness)).toBeNull();
    });
  }

  it('returns null when primary pattern does not exist in the bank at all', () => {
    const weakness = { missedPatterns: ['a-pattern-that-does-not-exist-in-the-bank'] };
    expect(getDrillChipForWeakness(weakness)).toBeNull();
  });

  it('uses the FIRST pattern in missedPatterns (insertion-order = canonical)', () => {
    // First-real-pattern picker — pickPrimaryMissedPattern skips empty/non-string
    // entries. The viable pattern in slot 0 should be what's surfaced.
    const weakness = { missedPatterns: [viablePattern, 'another-pattern'] };
    const result = getDrillChipForWeakness(weakness);
    expect(result?.slug).toBe(viablePattern);
  });
});

describe('getDrillChipForWeakness — composition with formatPatternLabel', () => {
  it('label is title-cased (not the raw kebab slug)', () => {
    const weakness = { missedPatterns: [viablePattern] };
    const result = getDrillChipForWeakness(weakness);
    expect(result).not.toBeNull();
    // Title-cased labels never contain '-' between words (formatPatternLabel
    // joins on space). Exception: numeric tokens like "3-4-5" stay as numbers
    // joined with spaces, so we only assert non-empty + first char uppercase.
    expect(result.label[0]).toBe(result.label[0].toUpperCase());
    // Slug should NOT equal label (kebab → Title Case transform happened)
    expect(result.label).not.toBe(viablePattern);
  });
});
