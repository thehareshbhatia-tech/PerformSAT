import { extractSatPattern } from '../extractSatPattern';

describe('extractSatPattern', () => {
  describe('happy paths', () => {
    it('extracts a hyphenated single-token pattern', () => {
      expect(extractSatPattern('**SAT Pattern: Reverse-Percent**')).toBe('reverse-percent');
    });

    it('extracts a multi-word pattern with spaces', () => {
      expect(extractSatPattern('**SAT Pattern: Sum of Parts Ratio**')).toBe('sum-of-parts-ratio');
    });

    it('extracts a pattern containing parentheses and plus signs', () => {
      expect(extractSatPattern('**SAT Pattern: Linear (Slope+Intercept)**')).toBe(
        'linear-slope-intercept',
      );
    });

    it('handles a pattern containing MathJax delimiters', () => {
      expect(extractSatPattern('**SAT Pattern: $f(x)$ Evaluation**')).toBe('f-x-evaluation');
    });

    it('strips leading and trailing whitespace inside the title', () => {
      expect(extractSatPattern('**SAT Pattern:    Foo   **')).toBe('foo');
    });

    it('handles a real bank explanation prefix', () => {
      const text =
        '**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sugar makes up ...';
      expect(extractSatPattern(text)).toBe('sum-of-parts-ratio');
    });

    it('handles a real test-bundle explanation prefix (Reverse-Percent)', () => {
      const text =
        '**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.35 = 1{,}260$, so total ...';
      expect(extractSatPattern(text)).toBe('reverse-percent');
    });
  });

  describe('multiple patterns', () => {
    it('returns the FIRST pattern when several are present', () => {
      const text = '**SAT Pattern: First**\nSome stuff\n**SAT Pattern: Second**';
      expect(extractSatPattern(text)).toBe('first');
    });
  });

  describe('graceful failure modes', () => {
    it('returns null when the explanation has no SAT Pattern header', () => {
      expect(extractSatPattern('This is just plain explanation text.')).toBeNull();
    });

    it('returns null for null input', () => {
      expect(extractSatPattern(null)).toBeNull();
    });

    it('returns null for undefined input', () => {
      expect(extractSatPattern(undefined)).toBeNull();
    });

    it('returns null for the empty string', () => {
      expect(extractSatPattern('')).toBeNull();
    });

    it('returns null for non-string input (number)', () => {
      expect(extractSatPattern(42)).toBeNull();
    });

    it('returns null for non-string input (object)', () => {
      expect(extractSatPattern({})).toBeNull();
    });

    it('returns null when the closing `**` is missing', () => {
      expect(extractSatPattern('**SAT Pattern: Unterminated')).toBeNull();
    });

    it('returns null when only the opening `**SAT Pattern:` token is present', () => {
      expect(extractSatPattern('**SAT Pattern:')).toBeNull();
    });
  });
});
