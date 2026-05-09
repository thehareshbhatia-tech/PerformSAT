import { formatDiagnosticSentence } from '../diagnosticEngine';

describe('formatDiagnosticSentence', () => {
  describe('invalid input', () => {
    it('returns empty string for null', () => {
      expect(formatDiagnosticSentence(null)).toBe('');
    });
    it('returns empty string for undefined', () => {
      expect(formatDiagnosticSentence(undefined)).toBe('');
    });
    it('returns empty string for non-object', () => {
      expect(formatDiagnosticSentence('nope')).toBe('');
      expect(formatDiagnosticSentence(42)).toBe('');
    });
    it('returns empty string for an empty object', () => {
      expect(formatDiagnosticSentence({})).toBe('');
    });
  });

  describe('errorType — canonical id', () => {
    it('renders conceptual_gap with skill + evidence', () => {
      const out = formatDiagnosticSentence({
        skill: 'Slope-intercept form',
        evidence: '4 of 6 misses',
        errorType: 'conceptual_gap',
      });
      expect(out).toMatch(/Slope-intercept form/);
      expect(out).toMatch(/4 of 6 misses/);
      expect(out).toMatch(/concept/i);
    });

    it('renders procedural_error', () => {
      const out = formatDiagnosticSentence({
        skill: 'Quadratics',
        evidence: '3 sign errors',
        errorType: 'procedural_error',
      });
      expect(out).toMatch(/Quadratics/);
      expect(out).toMatch(/execution|algebra/i);
    });

    it('renders trap_susceptibility', () => {
      const out = formatDiagnosticSentence({
        skill: 'Linear equations',
        evidence: '2 of 5',
        errorType: 'trap_susceptibility',
      });
      expect(out).toMatch(/trap/i);
      expect(out).toMatch(/Linear equations/);
    });

    it('renders time_pressure', () => {
      const out = formatDiagnosticSentence({
        skill: 'Geometry',
        evidence: 'last 3 questions rushed',
        errorType: 'time_pressure',
      });
      expect(out).toMatch(/Time/i);
      expect(out).toMatch(/Geometry/);
      expect(out).toMatch(/untimed/i);
    });

    it('renders careless_error', () => {
      const out = formatDiagnosticSentence({
        skill: 'Percents',
        evidence: '2 careless slips',
        errorType: 'careless_error',
      });
      expect(out).toMatch(/wheelhouse|slip/i);
      expect(out).toMatch(/Percents/);
    });

    it('renders unanswered', () => {
      const out = formatDiagnosticSentence({
        skill: 'Statistics',
        evidence: 'last 4 left blank',
        errorType: 'unanswered',
      });
      expect(out).toMatch(/skipped/i);
      expect(out).toMatch(/eliminate/i);
    });
  });

  describe('errorType — label form', () => {
    it('accepts the human label "Conceptual Gap"', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        errorType: 'Conceptual Gap',
      });
      expect(out).toMatch(/concept/i);
    });

    it('accepts case-insensitive labels', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        errorType: 'conceptual gap',
      });
      expect(out).toMatch(/concept/i);
    });

    it('accepts snake_case-ish "Conceptual_gap"', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        errorType: 'Conceptual_gap',
      });
      expect(out).toMatch(/concept/i);
    });
  });

  describe('skill fallback', () => {
    it('humanizes skillId when skill display name is missing', () => {
      const out = formatDiagnosticSentence({
        skillId: 'slope-intercept-form',
        errorType: 'conceptual_gap',
      });
      expect(out).toMatch(/Slope Intercept Form/);
    });

    it('handles missing skill+skillId gracefully', () => {
      const out = formatDiagnosticSentence({
        errorType: 'conceptual_gap',
      });
      expect(typeof out).toBe('string');
      expect(out.length).toBeGreaterThan(0);
    });
  });

  describe('evidence', () => {
    it('omits the evidence clause when evidence is missing', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        errorType: 'conceptual_gap',
      });
      expect(out).toMatch(/Algebra/);
      // Sanity: shouldn't have a stray empty parenthetical
      expect(out).not.toMatch(/\(\s*\)/);
    });

    it('handles non-string evidence by ignoring it', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        evidence: { count: 4 },
        errorType: 'conceptual_gap',
      });
      expect(typeof out).toBe('string');
      expect(out).not.toMatch(/object|undefined|\[object/);
    });
  });

  describe('fallback path (no errorType)', () => {
    it('falls back to accuracy-based sentence when errorType is missing', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        accuracy: 42,
      });
      expect(out).toMatch(/Algebra/);
      expect(out).toMatch(/42% accurate/);
    });

    it('rounds non-integer accuracy', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        accuracy: 41.7,
      });
      expect(out).toMatch(/42% accurate/);
    });

    it('handles unknown errorType by using fallback', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        accuracy: 50,
        errorType: 'something_weird',
      });
      expect(out).toMatch(/50% accurate/);
    });

    it('renders skill-only sentence when accuracy is also missing', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
      });
      expect(out).toMatch(/Algebra/);
      expect(out).toMatch(/focus/i);
    });
  });
});
