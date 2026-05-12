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

    it('maps three Pythagorean 5-12-13 variants to "pythagorean-triple-recognition"', () => {
      // Granularity principle (2026-05-12): triple recognition is a DISTINCT
      // method from generic Pythagorean theorem. See
      // docs/SAT_PATTERN_GRANULARITY_PROPOSAL.md.
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem (5-12-13)**')).toBe(
        'pythagorean-triple-recognition',
      );
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**')).toBe(
        'pythagorean-triple-recognition',
      );
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**')).toBe(
        'pythagorean-triple-recognition',
      );
      // Generic Pythagorean (on a rectangle = diagonal) still routes to the
      // canonical right-triangle-pythagorean since it uses the same method
      // as direct theorem application.
      expect(extractSatPattern('**SAT Pattern: Pythagorean Theorem on a Rectangle**')).toBe(
        'right-triangle-pythagorean',
      );
    });

    it('separates inverse function evaluation from direct evaluation', () => {
      // Direct evaluation: compute f(x) at given input
      expect(extractSatPattern('**SAT Pattern: Solving via Function Notation**')).toBe(
        'function-evaluation',
      );
      expect(extractSatPattern('**SAT Pattern: Function Evaluation in Context**')).toBe(
        'function-evaluation',
      );
      // Inverse evaluation: given f(a) = c, find a. Distinct method.
      expect(extractSatPattern('**SAT Pattern: Solve f(x) = c**')).toBe(
        'solve-for-input-from-output',
      );
      expect(extractSatPattern('**SAT Pattern: Solve f(a) = c**')).toBe(
        'solve-for-input-from-output',
      );
      expect(extractSatPattern('**SAT Pattern: Solving for Input from Output**')).toBe(
        'solve-for-input-from-output',
      );
      expect(extractSatPattern('**SAT Pattern: Solving for the Input Given the Output**')).toBe(
        'solve-for-input-from-output',
      );
    });

    it('separates Vieta\'s sum/product from factoring', () => {
      // Factoring path: still canonical
      expect(extractSatPattern('**SAT Pattern: Zero Product Property**')).toBe(
        'quadratic-via-factoring',
      );
      expect(extractSatPattern('**SAT Pattern: Polynomial Factoring with Given Factor**')).toBe(
        'quadratic-via-factoring',
      );
      // Vieta's: distinct method (sum=-b/a, product=c/a)
      expect(extractSatPattern("**SAT Pattern: Sum/Product of Roots — Vieta's**")).toBe(
        'vieta-sum-product-of-roots',
      );
      expect(extractSatPattern("**SAT Pattern: Quadratic — Vieta's Sum/Product**")).toBe(
        'vieta-sum-product-of-roots',
      );
    });

    it('separates tangent-to-circle from tangent-to-parabola', () => {
      // Parabola: same method as canonical
      expect(extractSatPattern('**SAT Pattern: Tangent Line via Discriminant = 0**')).toBe(
        'tangent-line-and-discriminant',
      );
      // Circle: distinct geometric setup
      expect(extractSatPattern('**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**')).toBe(
        'line-tangent-to-circle',
      );
    });

    it('routes trig with known triples to its own pattern', () => {
      // Generic right-triangle trig: canonical
      expect(extractSatPattern('**SAT Pattern: SOH-CAH-TOA**')).toBe(
        'right-triangle-trig-ratios',
      );
      // Trig where triple recognition lets the student skip computation
      expect(extractSatPattern('**SAT Pattern: SOH-CAH-TOA in a 5-12-13 Triangle**')).toBe(
        'trig-ratio-with-known-triple',
      );
      expect(extractSatPattern('**SAT Pattern: SOH-CAH-TOA Tangent in a 9-40-41 Triangle**')).toBe(
        'trig-ratio-with-known-triple',
      );
      // Trig from perimeter (must solve for sides first)
      expect(extractSatPattern('**SAT Pattern: Right Triangle Trigonometry with Perimeter**')).toBe(
        'trig-ratio-from-perimeter',
      );
    });

    it('fixes mis-aliased linear-cost-setup (used to point to system pool)', () => {
      // Linear Cost Setup is a SINGLE-variable equation, not a 2-variable system.
      expect(extractSatPattern('**SAT Pattern: Linear Cost Setup**')).toBe(
        'linear-cost-equation-setup',
      );
    });

    it('fixes mis-aliased percent-complement (used to point to basic-probability)', () => {
      // Percent complement (100% - x%) has nothing to do with probability.
      // No alias entry; resolves to its own canonical.
      expect(extractSatPattern('**SAT Pattern: Percent Complement**')).toBe('percent-complement');
    });

    it('routes exponential build vs interpret separately', () => {
      // Test bundles use these specific titles; new patterns split them.
      expect(extractSatPattern('**SAT Pattern: Exponential Growth Interpretation**')).toBe(
        'interpret-exponential-parameters',
      );
      expect(extractSatPattern('**SAT Pattern: Exponential Growth Model**')).toBe(
        'build-exponential-model',
      );
      // Generic title stays at canonical
      expect(extractSatPattern('**SAT Pattern: Exponential Growth/Decay**')).toBe(
        'exponential-growth-decay',
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
