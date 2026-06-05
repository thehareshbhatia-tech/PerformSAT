import { formatDiagnosticSentence } from '../diagnosticEngine';

// Realistic evidence strings as PracticeTest.buildGroundTruthDiagnosis emits
// them (see PracticeTest.jsx buildGroundTruthDiagnosis).
const ev = (correct, total, extra = '') =>
  `${correct}/${total} correct, primary error: Time Pressure${extra}`;

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

  describe('errorType frames — cite parsed facts, never dump the evidence blob', () => {
    it('renders conceptual_gap citing the miss count', () => {
      const out = formatDiagnosticSentence({
        skill: 'Slope-intercept form',
        skillId: 'slope-intercept-form',
        evidence: '2/6 correct, primary error: Conceptual Gap, avg 48s/q',
        errorType: 'conceptual_gap',
      });
      expect(out).toMatch(/Slope-intercept form/);
      expect(out).toMatch(/2 of 6/);
      expect(out).toMatch(/concept/i);
    });

    it('never includes the raw evidence blob ("primary error:", "avg Ns/q")', () => {
      const out = formatDiagnosticSentence({
        skill: 'Function Interpretation',
        skillId: 'function-interpretation',
        evidence: '0/8 correct, primary error: Time Pressure, avg 35s/q, historical mastery 38% (declining)',
        errorType: 'time_pressure',
      });
      expect(out).not.toMatch(/primary error/i);
      expect(out).not.toMatch(/avg \d+s\/q/);
    });

    it('regression: no stray space after an opening paren ("( 0/8")', () => {
      const out = formatDiagnosticSentence({
        skill: 'Statistics',
        skillId: 'statistics',
        evidence: '0/8 correct, primary error: Unanswered',
        errorType: 'unanswered',
      });
      expect(out).not.toMatch(/\(\s/);
      expect(out).not.toMatch(/\(\s*\)/);
    });

    it('renders procedural_error', () => {
      const out = formatDiagnosticSentence({
        skill: 'Quadratics',
        skillId: 'quadratics',
        evidence: '3/7 correct, primary error: Procedural Error',
        errorType: 'procedural_error',
      });
      expect(out).toMatch(/Quadratics/);
      expect(out).toMatch(/execution|algebra|arithmetic/i);
      expect(out).toMatch(/3 of 7/);
    });

    it('renders trap_susceptibility', () => {
      const out = formatDiagnosticSentence({
        skill: 'Linear equations',
        skillId: 'linear-equations',
        evidence: ev(2, 5),
        errorType: 'trap_susceptibility',
      });
      expect(out).toMatch(/trap|tempt|bait/i);
      expect(out).toMatch(/Linear equations/);
    });

    it('renders time_pressure with an untimed instruction', () => {
      const out = formatDiagnosticSentence({
        skill: 'Geometry',
        skillId: 'geometry',
        evidence: ev(1, 6),
        errorType: 'time_pressure',
      });
      expect(out).toMatch(/clock/i);
      expect(out).toMatch(/Geometry/);
      expect(out).toMatch(/untimed/i);
    });

    it('renders careless_error', () => {
      const out = formatDiagnosticSentence({
        skill: 'Percents',
        skillId: 'percents',
        evidence: '3/5 correct, primary error: Careless Mistake',
        errorType: 'careless_error',
      });
      expect(out).toMatch(/slip|avoidable/i);
      expect(out).toMatch(/Percents/);
    });

    it('renders unanswered with the eliminate-and-guess instruction', () => {
      const out = formatDiagnosticSentence({
        skill: 'Statistics',
        skillId: 'statistics',
        evidence: '0/4 correct, primary error: Unanswered',
        errorType: 'unanswered',
      });
      expect(out).toMatch(/blank/i);
      expect(out).toMatch(/eliminat/i);
    });
  });

  describe('frame variation — adjacent cards must not repeat the same sentence', () => {
    it('different skills with the same error type get different frames', () => {
      const mk = (skill, skillId) => formatDiagnosticSentence({
        skill, skillId,
        evidence: ev(0, 6),
        errorType: 'time_pressure',
      });
      // Across several skillIds at least two distinct frame shapes must appear.
      const outs = [
        mk('Linear Functions', 'linear-functions'),
        mk('Solving Equations', 'solving-equations'),
        mk('Ratios', 'ratios'),
        mk('Word Problems', 'word-problems'),
        mk('Percents', 'percents'),
      ];
      const shapes = new Set(outs.map(o => o.replace(/[A-Z][a-z]+( [A-Z][a-z]+)*/g, 'X')));
      expect(shapes.size).toBeGreaterThan(1);
    });

    it('is deterministic — same weakness renders the same sentence', () => {
      const w = {
        skill: 'Ratios',
        skillId: 'ratios',
        evidence: ev(1, 3),
        errorType: 'time_pressure',
      };
      expect(formatDiagnosticSentence(w)).toBe(formatDiagnosticSentence(w));
    });
  });

  describe('history clauses', () => {
    it('cites declining historical mastery', () => {
      const out = formatDiagnosticSentence({
        skill: 'Ratios',
        skillId: 'ratios',
        evidence: '0/3 correct, primary error: Time Pressure, avg 27s/q, historical mastery 20% (declining)',
        errorType: 'time_pressure',
      });
      expect(out).toMatch(/sliding/i);
      expect(out).toMatch(/20%/);
    });

    it('notes first-time-tested skills', () => {
      const out = formatDiagnosticSentence({
        skill: 'Ratios',
        skillId: 'ratios',
        evidence: '0/3 correct, primary error: Time Pressure, first time tested',
        errorType: 'time_pressure',
      });
      expect(out).toMatch(/first time/i);
    });

    it('cites stable historical mastery without a trend word', () => {
      const out = formatDiagnosticSentence({
        skill: 'Ratios',
        skillId: 'ratios',
        evidence: '1/4 correct, primary error: Time Pressure, historical mastery 31%',
        errorType: 'time_pressure',
      });
      expect(out).toMatch(/31%/);
      expect(out).not.toMatch(/sliding/i);
    });
  });

  describe('errorType — label form (with accuracy, as real weaknesses carry)', () => {
    it('accepts the human label "Conceptual Gap"', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        skillId: 'algebra',
        accuracy: 33,
        evidence: '2/6 correct, primary error: Conceptual Gap',
        errorType: 'Conceptual Gap',
      });
      expect(out).toMatch(/concept/i);
    });

    it('accepts case-insensitive labels', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        skillId: 'algebra',
        accuracy: 33,
        errorType: 'conceptual gap',
      });
      expect(out).toMatch(/concept/i);
    });

    it('accepts snake_case-ish "Conceptual_gap"', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        skillId: 'algebra',
        accuracy: 33,
        errorType: 'Conceptual_gap',
      });
      expect(out).toMatch(/concept/i);
    });
  });

  describe('skill fallback', () => {
    it('humanizes skillId when skill display name is missing', () => {
      const out = formatDiagnosticSentence({
        skillId: 'slope-intercept-form',
        accuracy: 40,
        errorType: 'conceptual_gap',
      });
      expect(out).toMatch(/Slope Intercept Form/);
    });

    it('handles missing skill+skillId gracefully', () => {
      const out = formatDiagnosticSentence({
        errorType: 'conceptual_gap',
        accuracy: 40,
      });
      expect(typeof out).toBe('string');
      expect(out.length).toBeGreaterThan(0);
    });
  });

  describe('evidence robustness', () => {
    it('uses accuracy when evidence has no parsable counts', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        skillId: 'algebra',
        evidence: 'mostly rushed at the end',
        accuracy: 38,
        errorType: 'time_pressure',
      });
      expect(out).toMatch(/Algebra/);
      expect(out).toMatch(/38%/);
    });

    it('handles non-string evidence by ignoring it', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        skillId: 'algebra',
        evidence: { count: 4 },
        accuracy: 38,
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
      expect(out).toMatch(/42%/);
    });

    it('rounds non-integer accuracy', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        accuracy: 41.7,
      });
      expect(out).toMatch(/42%/);
    });

    it('handles unknown errorType by using fallback', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
        accuracy: 50,
        errorType: 'something_weird',
      });
      expect(out).toMatch(/50%/);
    });

    it('renders skill-only sentence when accuracy is also missing', () => {
      const out = formatDiagnosticSentence({
        skill: 'Algebra',
      });
      expect(out).toMatch(/Algebra/);
      expect(out).toMatch(/focus/i);
    });
  });

  describe('voice rules', () => {
    it('never emits emojis', () => {
      const out = formatDiagnosticSentence({
        skill: 'Geometry',
        skillId: 'geometry',
        evidence: ev(0, 6),
        errorType: 'time_pressure',
      });
      // eslint-disable-next-line no-misleading-character-class
      expect(out).not.toMatch(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}]/u);
    });

    it('never uses exclamation marks as enthusiasm', () => {
      ['conceptual_gap', 'procedural_error', 'trap_susceptibility', 'time_pressure', 'careless_error', 'unanswered'].forEach(t => {
        const out = formatDiagnosticSentence({
          skill: 'Geometry', skillId: 'geometry', evidence: ev(1, 5), errorType: t,
        });
        expect(out).not.toMatch(/!/);
      });
    });
  });
});
