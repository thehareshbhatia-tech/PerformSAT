/**
 * Regression: the "1370 composite, then Math 210 on review" score discrepancy.
 *
 * The results screen used to ALWAYS recompute scoreTest(test, answers). When the
 * review `test` was reconstructed and lost its per-module section, scoreTest
 * collapsed the whole test into one Math bucket and showed ~210. resolveDisplayScores
 * makes the screen trust the authoritative score persisted at completion instead,
 * so the displayed number matches what was actually scored.
 */

import { resolveDisplayScores } from '../TestResults';

// A deliberately WRONG recompute — the exact failure mode (collapsed single Math bucket).
const badRecompute = { sectionScore: 210, sectionScores: { math: 210 }, isMultiSection: false };

describe('resolveDisplayScores', () => {
  it('prefers the stored authoritative score over a bad recompute (the bug)', () => {
    const stored = { scaledScore: 1360, sectionScores: { math: 680, 'reading-writing': 680 }, isMultiSection: true };
    const out = resolveDisplayScores(stored, badRecompute);
    expect(out.satScore).toBe(1360);
    expect(out.satScore).not.toBe(210);
    expect(out.sectionScores.math).toBe(680);
    expect(out.sectionScores['reading-writing']).toBe(680);
    expect(out.isMultiSection).toBe(true);
  });

  it('derives isMultiSection from sectionScores when the stored attempt omits it', () => {
    const composite = { scaledScore: 1360, sectionScores: { math: 680, 'reading-writing': 680 } };
    expect(resolveDisplayScores(composite, badRecompute).isMultiSection).toBe(true);
    const single = { scaledScore: 680, sectionScores: { math: 680 } };
    expect(resolveDisplayScores(single, badRecompute).isMultiSection).toBe(false);
  });

  it('falls back to the recompute for legacy attempts with no stored score', () => {
    const goodFallback = { sectionScore: 1360, sectionScores: { math: 680, 'reading-writing': 680 }, isMultiSection: true };
    const out = resolveDisplayScores(null, goodFallback);
    expect(out.satScore).toBe(1360);
    expect(out.isMultiSection).toBe(true);
    expect(out.sectionScores.math).toBe(680);
  });

  it('falls back when storedResult has no numeric scaledScore', () => {
    expect(resolveDisplayScores({ sectionScores: {} }, badRecompute).satScore).toBe(210);
    expect(resolveDisplayScores({ scaledScore: null }, badRecompute).satScore).toBe(210);
  });

  it('preserves a single-section (Math-only / R&W-only) stored score', () => {
    const mathOnly = { scaledScore: 720, sectionScores: { math: 720 }, isMultiSection: false };
    const out = resolveDisplayScores(mathOnly, badRecompute);
    expect(out.satScore).toBe(720);
    expect(out.isMultiSection).toBe(false);
    expect(out.sectionScores.math).toBe(720);
  });
});
