import normalizeFractions from '../../utils/normalizeFractions';

describe('normalizeFractions', () => {
  describe('basic fraction conversion', () => {
    it('converts simple fraction 3/4', () => {
      expect(normalizeFractions('The answer is 3/4')).toBe('The answer is $\\frac{3}{4}$');
    });

    it('converts fraction with spaces around slash', () => {
      expect(normalizeFractions('equals 12 / 25')).toBe('equals $\\frac{12}{25}$');
    });

    it('converts negative fraction', () => {
      expect(normalizeFractions('result is -5/8')).toBe('result is $\\frac{-5}{8}$');
    });

    it('converts multiple fractions in one string', () => {
      const result = normalizeFractions('Add 1/3 and 2/5');
      expect(result).toContain('$\\frac{1}{3}$');
      expect(result).toContain('$\\frac{2}{5}$');
    });

    it('converts fraction at start of string', () => {
      expect(normalizeFractions('3/4 of the students')).toBe('$\\frac{3}{4}$ of the students');
    });

    it('converts fraction at end of string', () => {
      expect(normalizeFractions('the probability is 1/6')).toBe('the probability is $\\frac{1}{6}$');
    });
  });

  describe('protected contexts — no conversion', () => {
    it('preserves fractions inside inline code', () => {
      const input = 'Use `3/4` in your code';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves fractions inside $...$ math delimiters', () => {
      const input = 'Solve $x = 3/4$';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves fractions inside $$...$$ display math', () => {
      const input = '$$\\frac{3}{4} + 1/2$$';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves fractions in URLs', () => {
      const input = 'Visit https://example.com/3/4/page';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves fractions in www URLs', () => {
      const input = 'See www.example.com/test/1/2';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves date-like patterns m/d/yyyy', () => {
      const input = 'Date: 3/4/2026';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves date-like patterns mm/dd/yy', () => {
      const input = 'Filed on 12/25/26';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves fractions inside \\[...\\] delimiters', () => {
      const input = 'Compute \\[3/4 + 1\\]';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('preserves fractions inside \\(...\\) delimiters', () => {
      const input = 'Inline \\(3/4\\) math';
      expect(normalizeFractions(input)).toBe(input);
    });
  });

  describe('edge cases', () => {
    it('returns null/undefined unchanged', () => {
      expect(normalizeFractions(null)).toBe(null);
      expect(normalizeFractions(undefined)).toBe(undefined);
    });

    it('returns empty string unchanged', () => {
      expect(normalizeFractions('')).toBe('');
    });

    it('returns plain text with no fractions unchanged', () => {
      const input = 'No fractions here, just words.';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('does not convert decimal-looking patterns', () => {
      const input = 'The value is $12.50';
      expect(normalizeFractions(input)).toBe(input);
    });

    it('handles mixed protected and convertible fractions', () => {
      const input = 'Compute 3/4 but see `1/2` and visit https://x.com/a/b';
      const result = normalizeFractions(input);
      expect(result).toContain('$\\frac{3}{4}$');
      expect(result).toContain('`1/2`');
      expect(result).toContain('https://x.com/a/b');
    });
  });
});
