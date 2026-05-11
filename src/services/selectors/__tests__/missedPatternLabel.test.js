import {
  formatPatternLabel,
  pickPrimaryMissedPattern,
} from '../missedPatternLabel';

describe('formatPatternLabel', () => {
  it('formats a simple two-word slug', () => {
    expect(formatPatternLabel('reverse-percent')).toBe('Reverse Percent');
  });

  it('preserves SOH-CAH-TOA acronyms uppercase', () => {
    expect(formatPatternLabel('soh-cah-toa-in-a-3-4-5-triangle')).toBe(
      'SOH CAH TOA in a 3 4 5 Triangle',
    );
  });

  it('keeps small words lowercase mid-string', () => {
    expect(formatPatternLabel('vertex-form-from-two-conditions')).toBe(
      'Vertex Form from Two Conditions',
    );
  });

  it('capitalizes the first word even when it would otherwise be small', () => {
    expect(formatPatternLabel('a-test-pattern')).toBe('A Test Pattern');
  });

  it('handles numbers in slug', () => {
    expect(formatPatternLabel('pythagorean-theorem-3-4-5-family')).toBe(
      'Pythagorean Theorem 3 4 5 Family',
    );
  });

  it('formats a long natural pattern correctly', () => {
    expect(formatPatternLabel('right-triangle-trig-ratios')).toBe(
      'Right Triangle Trig Ratios',
    );
    expect(formatPatternLabel('two-way-table-conditional-probability')).toBe(
      'Two Way Table Conditional Probability',
    );
  });

  it('handles FOIL acronym', () => {
    expect(formatPatternLabel('foil-distribution')).toBe('FOIL Distribution');
  });

  describe('graceful failure', () => {
    it('returns null for null/undefined/empty', () => {
      expect(formatPatternLabel(null)).toBeNull();
      expect(formatPatternLabel(undefined)).toBeNull();
      expect(formatPatternLabel('')).toBeNull();
      expect(formatPatternLabel('   ')).toBeNull();
    });

    it('returns null for non-string input', () => {
      expect(formatPatternLabel(42)).toBeNull();
      expect(formatPatternLabel({})).toBeNull();
    });
  });
});

describe('pickPrimaryMissedPattern', () => {
  it('returns the first pattern from a non-empty array', () => {
    expect(
      pickPrimaryMissedPattern({ missedPatterns: ['reverse-percent', 'mean-from-list'] }),
    ).toBe('reverse-percent');
  });

  it('returns null when missedPatterns is empty', () => {
    expect(pickPrimaryMissedPattern({ missedPatterns: [] })).toBeNull();
  });

  it('returns null when missedPatterns is missing', () => {
    expect(pickPrimaryMissedPattern({ skillId: 'foo' })).toBeNull();
  });

  it('returns null for null/undefined weakness', () => {
    expect(pickPrimaryMissedPattern(null)).toBeNull();
    expect(pickPrimaryMissedPattern(undefined)).toBeNull();
  });

  it('skips empty / whitespace / non-string entries', () => {
    expect(
      pickPrimaryMissedPattern({ missedPatterns: ['', '   ', null, 42, 'real-pattern'] }),
    ).toBe('real-pattern');
  });

  it('trims surrounding whitespace from the picked slug', () => {
    expect(
      pickPrimaryMissedPattern({ missedPatterns: ['  reverse-percent  '] }),
    ).toBe('reverse-percent');
  });
});
