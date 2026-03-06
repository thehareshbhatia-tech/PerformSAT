import {
  inferDomain,
  SAT_MATH_DOMAINS,
  DOMAIN_DISPLAY_NAMES,
  getDomainDisplayOrder,
} from '../domainInference';

describe('inferDomain', () => {
  describe('canonical taxonomy IDs', () => {
    it('resolves skills that exist in the taxonomy to their domain', () => {
      expect(inferDomain(['linear-equations-one-variable'])).toBe('algebra');
      expect(inferDomain(['ratios-rates-proportions'])).toBe('problem-solving');
    });

    it('checks all skills, not just the first', () => {
      expect(inferDomain(['nonexistent-id', 'linear-equations-one-variable'])).toBe('algebra');
    });
  });

  describe('human-readable label matching', () => {
    it.each([
      [['Algebra'], 'algebra'],
      [['Linear Equations'], 'algebra'],
      [['Slope'], 'algebra'],
      [['Systems of equations'], 'algebra'],
      [['Inequalities'], 'algebra'],
      [['Absolute value equations'], 'algebra'],
      [['Function notation'], 'algebra'],
      [['Slope intercept form'], 'algebra'],
    ])('maps %j to algebra', (skills, expected) => {
      expect(inferDomain(skills)).toBe(expected);
    });

    it.each([
      [['Scatterplots'], 'problem-solving'],
      [['Probability'], 'problem-solving'],
      [['Ratios'], 'problem-solving'],
      [['Statistics'], 'problem-solving'],
      [['Two-way tables'], 'problem-solving'],
      [['Data Analysis'], 'problem-solving'],
      [['Unit rate'], 'problem-solving'],
      [['Margin of error'], 'problem-solving'],
      [['Percent change'], 'problem-solving'],
      [['Proportions'], 'problem-solving'],
      [['Bar graphs'], 'problem-solving'],
      [['Line of best fit'], 'problem-solving'],
      [['Problem Solving'], 'problem-solving'],
      [['Problem-Solving and Data Analysis'], 'problem-solving'],
    ])('maps %j to problem-solving', (skills, expected) => {
      expect(inferDomain(skills)).toBe(expected);
    });

    it.each([
      [['Quadratic equations'], 'advanced-math'],
      [['Exponential functions'], 'advanced-math'],
      [['Polynomials'], 'advanced-math'],
      [['Factoring'], 'advanced-math'],
      [['Function composition'], 'advanced-math'],
      [['Radical equations'], 'advanced-math'],
      [['Completing the Square'], 'advanced-math'],
      [['Exponents'], 'advanced-math'],
      [['Advanced Math'], 'advanced-math'],
    ])('maps %j to advanced-math', (skills, expected) => {
      expect(inferDomain(skills)).toBe(expected);
    });

    it.each([
      [['Geometry'], 'geometry'],
      [['Triangles'], 'geometry'],
      [['Circle equations'], 'geometry'],
      [['Pythagorean theorem'], 'geometry'],
      [['Volume'], 'geometry'],
      [['Trigonometry'], 'geometry'],
      [['Angle measures'], 'geometry'],
      [['Parallel lines'], 'geometry'],
      [['SOH-CAH-TOA'], 'geometry'],
      [['Coordinate geometry'], 'geometry'],
      [['Right triangles'], 'geometry'],
    ])('maps %j to geometry', (skills, expected) => {
      expect(inferDomain(skills)).toBe(expected);
    });
  });

  describe('case insensitivity', () => {
    it('handles UPPER, lower, and Title case labels', () => {
      expect(inferDomain(['GEOMETRY'])).toBe('geometry');
      expect(inferDomain(['geometry'])).toBe('geometry');
      expect(inferDomain(['Geometry'])).toBe('geometry');
    });
  });

  describe('mixed-skill arrays', () => {
    it('returns domain from the first resolvable skill', () => {
      expect(inferDomain(['garbage', 'Trigonometry'])).toBe('geometry');
    });

    it('prefers taxonomy lookup over label heuristic', () => {
      expect(inferDomain(['percent-change', 'Algebra'])).toBe('problem-solving');
    });
  });

  describe('regex fallback', () => {
    it('matches labels not in the exact map via pattern', () => {
      expect(inferDomain(['probability basics'])).toBe('problem-solving');
      expect(inferDomain(['triangle congruence proof'])).toBe('geometry');
      expect(inferDomain(['quadratic formula application'])).toBe('advanced-math');
      expect(inferDomain(['linear inequality graph'])).toBe('algebra');
    });
  });

  describe('edge cases', () => {
    it('returns algebra for empty skills', () => {
      expect(inferDomain([])).toBe('algebra');
    });

    it('returns algebra for undefined skills', () => {
      expect(inferDomain(undefined)).toBe('algebra');
    });

    it('returns algebra for null skills', () => {
      expect(inferDomain(null)).toBe('algebra');
    });

    it('returns algebra when no skill is resolvable', () => {
      expect(inferDomain(['xyzzy-unknown-999'])).toBe('algebra');
    });
  });
});

describe('SAT_MATH_DOMAINS', () => {
  it('contains exactly the 4 SAT Math domains', () => {
    expect(SAT_MATH_DOMAINS).toEqual([
      'algebra',
      'problem-solving',
      'advanced-math',
      'geometry',
    ]);
  });
});

describe('DOMAIN_DISPLAY_NAMES', () => {
  it('has a human-readable name for every canonical domain', () => {
    SAT_MATH_DOMAINS.forEach(domain => {
      expect(DOMAIN_DISPLAY_NAMES[domain]).toBeDefined();
      expect(typeof DOMAIN_DISPLAY_NAMES[domain]).toBe('string');
    });
  });
});

describe('getDomainDisplayOrder', () => {
  it('returns the domains in stable SAT order', () => {
    const order = getDomainDisplayOrder();
    expect(order).toEqual(SAT_MATH_DOMAINS);
  });

  it('returns a copy that does not mutate the original', () => {
    const order = getDomainDisplayOrder();
    order.push('bogus');
    expect(getDomainDisplayOrder()).toEqual(SAT_MATH_DOMAINS);
  });
});
