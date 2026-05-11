import { extractSatPattern, _PATTERN_ALIASES } from '../extractSatPattern';

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

  describe('alias normalization (PATTERN_ALIASES)', () => {
    it('exposes the alias map for introspection', () => {
      expect(_PATTERN_ALIASES).toBeDefined();
      expect(typeof _PATTERN_ALIASES).toBe('object');
      expect(Object.isFrozen(_PATTERN_ALIASES)).toBe(true);
    });

    it('maps "Volume of a Cylinder" to canonical "cylinder-volume"', () => {
      expect(extractSatPattern('**SAT Pattern: Volume of a Cylinder**')).toBe('cylinder-volume');
    });

    it('maps three Pythagorean 5-12-13 variants to "right-triangle-pythagorean"', () => {
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem (5-12-13)**')).toBe(
        'right-triangle-pythagorean',
      );
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**')).toBe(
        'right-triangle-pythagorean',
      );
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**')).toBe(
        'right-triangle-pythagorean',
      );
    });

    it('maps "Linear System by Elimination" to "system-of-equations-elimination"', () => {
      expect(extractSatPattern('**SAT Pattern: Linear System by Elimination**')).toBe(
        'system-of-equations-elimination',
      );
    });

    it('maps "Solve a Proportion" variants to "proportion-ratio"', () => {
      expect(extractSatPattern('**SAT Pattern: Solve a Proportion**')).toBe('proportion-ratio');
      expect(extractSatPattern('**SAT Pattern: Solving a Proportion**')).toBe('proportion-ratio');
      expect(extractSatPattern('**SAT Pattern: Solving a Simple Proportion**')).toBe(
        'proportion-ratio',
      );
    });

    it('maps function-evaluation variants to canonical "function-evaluation"', () => {
      expect(extractSatPattern('**SAT Pattern: Solving via Function Notation**')).toBe(
        'function-evaluation',
      );
      expect(extractSatPattern('**SAT Pattern: Solving with Function Notation**')).toBe(
        'function-evaluation',
      );
      expect(extractSatPattern('**SAT Pattern: Function Evaluation in Context**')).toBe(
        'function-evaluation',
      );
    });

    it('passes through patterns that have NO alias unchanged', () => {
      // Sanity-check: existing canonical slugs are not double-mapped
      expect(extractSatPattern('**SAT Pattern: Reverse-Percent**')).toBe('reverse-percent');
      expect(extractSatPattern('**SAT Pattern: Cylinder Volume**')).toBe('cylinder-volume');
      expect(extractSatPattern('**SAT Pattern: Right Triangle — Pythagorean**')).toBe(
        'right-triangle-pythagorean',
      );
    });

    it('canonical slugs in the alias map values are stable (no chained aliases)', () => {
      // Every alias VALUE should NOT itself be a key — otherwise we'd need
      // multi-step resolution. This test prevents accidental chains.
      const aliasValues = new Set(Object.values(_PATTERN_ALIASES));
      const aliasKeys = new Set(Object.keys(_PATTERN_ALIASES));
      for (const v of aliasValues) {
        expect(aliasKeys.has(v)).toBe(false);
      }
    });
  });
});
