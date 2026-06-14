// Unit tests for the shared SAT-figure label helpers. These are pure and
// reused across every geometry diagram, so a regression here (e.g. italicizing
// a radical or an equation label) would silently degrade many figures.
import { isVariableLabel, perpendicularLabelPos } from '../SATGraphCore';

describe('isVariableLabel', () => {
  it('italicizes single-letter variables (latin + greek + script ell)', () => {
    ['a', 'x', 'n', 'A', 'B', 'θ', 'ℓ'].forEach((s) => {
      expect(isVariableLabel(s)).toBe(true);
    });
  });

  it('italicizes short algebraic expressions', () => {
    ['a + 1', '2x', '(3x+10)°', 'x°'].forEach((s) => {
      expect(isVariableLabel(s)).toBe(true);
    });
  });

  it('keeps pure numbers and degree measures upright', () => {
    ['29', '20', '4', '45°', '90°'].forEach((s) => {
      expect(isVariableLabel(s)).toBe(false);
    });
  });

  it('keeps radicals upright (no slanted root sign)', () => {
    ['√41', 's√2'].forEach((s) => {
      expect(isVariableLabel(s)).toBe(false);
    });
  });

  it('keeps equation-style and unknown labels upright', () => {
    ['BC = 15', 'DE = ?', '?'].forEach((s) => {
      expect(isVariableLabel(s)).toBe(false);
    });
  });

  it('keeps multi-word prose upright', () => {
    expect(isVariableLabel('Test score')).toBe(false);
    expect(isVariableLabel('Coverage radius')).toBe(false);
  });

  it('handles empty / nullish input', () => {
    [null, undefined, '', '   '].forEach((s) => {
      expect(isVariableLabel(s)).toBe(false);
    });
  });
});

describe('perpendicularLabelPos', () => {
  it('pushes the label to the side AWAY from the interior point', () => {
    // Horizontal segment with the interior BELOW it → label lifts up (smaller y).
    const above = perpendicularLabelPos([0, 0], [10, 0], [5, 10], 16);
    expect(above.x).toBeCloseTo(5, 5);
    expect(above.y).toBeCloseTo(-16, 5);

    // Interior ABOVE the segment → label drops down (larger y).
    const below = perpendicularLabelPos([0, 0], [10, 0], [5, -10], 16);
    expect(below.x).toBeCloseTo(5, 5);
    expect(below.y).toBeCloseTo(16, 5);
  });

  it('offsets perpendicular to a diagonal segment by the requested gap', () => {
    const v1 = [0, 0];
    const v2 = [10, 10];
    const interior = [10, 0]; // to the right/below of the segment
    const pos = perpendicularLabelPos(v1, v2, interior, 14);
    const mid = [5, 5];
    // Distance from the midpoint equals the gap.
    expect(Math.hypot(pos.x - mid[0], pos.y - mid[1])).toBeCloseTo(14, 5);
    // Offset is perpendicular: dot product with the segment direction ≈ 0.
    const seg = [v2[0] - v1[0], v2[1] - v1[1]];
    const off = [pos.x - mid[0], pos.y - mid[1]];
    expect(seg[0] * off[0] + seg[1] * off[1]).toBeCloseTo(0, 5);
  });
});
