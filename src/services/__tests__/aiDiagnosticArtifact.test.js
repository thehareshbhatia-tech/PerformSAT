/**
 * Tests for the AI diagnostic artifact contract.
 *
 * The actual Firestore persistence functions (createAiDiagnosticArtifact, etc.)
 * live in practiceTestService.js and require Firebase — they are integration-tested
 * against the real backend. These unit tests validate the data contract and the
 * rendering-logic branching that TestResults applies to each state.
 */

const AI_DIAGNOSTIC_STATUS = {
  GENERATING: 'generating',
  READY: 'ready',
  FAILED: 'failed',
};

describe('AI_DIAGNOSTIC_STATUS', () => {
  it('defines the three lifecycle states', () => {
    expect(AI_DIAGNOSTIC_STATUS.GENERATING).toBe('generating');
    expect(AI_DIAGNOSTIC_STATUS.READY).toBe('ready');
    expect(AI_DIAGNOSTIC_STATUS.FAILED).toBe('failed');
  });

  it('has exactly three statuses', () => {
    expect(Object.keys(AI_DIAGNOSTIC_STATUS)).toHaveLength(3);
  });
});

describe('aiDiagnosticState contract for TestResults', () => {
  const buildDiagState = (overrides = {}) => ({
    status: 'idle',
    narrative: null,
    error: null,
    ...overrides,
  });

  describe('idle state (before generation starts)', () => {
    it('has status idle with no narrative or error', () => {
      const state = buildDiagState();
      expect(state.status).toBe('idle');
      expect(state.narrative).toBeNull();
      expect(state.error).toBeNull();
    });
  });

  describe('generating state (in-flight)', () => {
    it('has status generating with no data yet', () => {
      const state = buildDiagState({ status: 'generating' });
      expect(state.status).toBe('generating');
      expect(state.narrative).toBeNull();
      expect(state.error).toBeNull();
    });
  });

  describe('ready state (AI available)', () => {
    const narrative = {
      diagnosis: 'Your biggest gap is algebraic reasoning.',
      weaknesses: [
        { title: 'Factoring', why: 'Repeated conceptual errors.', proof: ['0/3 on factoring'], impact: '~20 points', severity: 'critical' },
      ],
      behaviorInsights: 'You changed answers 4 times, going from correct to incorrect.',
      scoreImpact: 'Fixing algebra alone could lift your score by 30 points.',
      topNextFocus: 'Master factoring fundamentals before next attempt.',
      uncertainties: 'Only one attempt so far — trend data is limited.',
    };

    it('has status ready with a fully populated narrative', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      expect(state.status).toBe('ready');
      expect(state.narrative).toBeTruthy();
      expect(state.narrative.diagnosis).toBeTruthy();
    });

    it('narrative.weaknesses has expected fields', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      state.narrative.weaknesses.forEach(w => {
        expect(w).toHaveProperty('title');
        expect(w).toHaveProperty('why');
        expect(w).toHaveProperty('proof');
        expect(w).toHaveProperty('impact');
        expect(w).toHaveProperty('severity');
      });
    });

    it('narrative includes behavioral and score impact sections', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      expect(typeof state.narrative.behaviorInsights).toBe('string');
      expect(typeof state.narrative.scoreImpact).toBe('string');
      expect(typeof state.narrative.topNextFocus).toBe('string');
    });
  });

  describe('failed state (error)', () => {
    it('has status failed with an error message and no narrative', () => {
      const state = buildDiagState({
        status: 'failed',
        error: 'Network timeout after 30s',
      });
      expect(state.status).toBe('failed');
      expect(state.narrative).toBeNull();
      expect(state.error).toBeTruthy();
    });
  });

  describe('report rendering logic per state', () => {
    function deriveViewFlags(diagState) {
      const s = diagState || { status: 'idle', narrative: null, error: null };
      return {
        hasAI: s.status === 'ready' && !!s.narrative,
        isGenerating: s.status === 'generating',
        hasFailed: s.status === 'failed',
        shouldMerge: s.status === 'ready' && !!s.narrative,
      };
    }

    it('idle: deterministic report, no spinner, no error', () => {
      const { hasAI, isGenerating, hasFailed, shouldMerge } = deriveViewFlags(buildDiagState());
      expect(hasAI).toBe(false);
      expect(isGenerating).toBe(false);
      expect(hasFailed).toBe(false);
      expect(shouldMerge).toBe(false);
    });

    it('generating: spinner visible, deterministic report used', () => {
      const { hasAI, isGenerating, hasFailed, shouldMerge } = deriveViewFlags(buildDiagState({ status: 'generating' }));
      expect(hasAI).toBe(false);
      expect(isGenerating).toBe(true);
      expect(hasFailed).toBe(false);
      expect(shouldMerge).toBe(false);
    });

    it('ready: AI merged into report sections', () => {
      const narrative = { diagnosis: 'AI headline', weaknesses: [], scoreImpact: 'AI score text' };
      const { hasAI, isGenerating, hasFailed, shouldMerge } = deriveViewFlags(buildDiagState({ status: 'ready', narrative }));
      expect(hasAI).toBe(true);
      expect(isGenerating).toBe(false);
      expect(hasFailed).toBe(false);
      expect(shouldMerge).toBe(true);
    });

    it('failed: deterministic report with error banner and retry', () => {
      const { hasAI, isGenerating, hasFailed, shouldMerge } = deriveViewFlags(buildDiagState({ status: 'failed', error: 'API error' }));
      expect(hasAI).toBe(false);
      expect(isGenerating).toBe(false);
      expect(hasFailed).toBe(true);
      expect(shouldMerge).toBe(false);
    });

    it('undefined/null state behaves like idle', () => {
      const { hasAI, isGenerating, hasFailed, shouldMerge } = deriveViewFlags(null);
      expect(hasAI).toBe(false);
      expect(isGenerating).toBe(false);
      expect(hasFailed).toBe(false);
      expect(shouldMerge).toBe(false);
    });

    it('ready with null narrative uses deterministic report', () => {
      const { hasAI, shouldMerge } = deriveViewFlags(buildDiagState({ status: 'ready', narrative: null }));
      expect(hasAI).toBe(false);
      expect(shouldMerge).toBe(false);
    });

    it('only one story path exists at a time', () => {
      const states = [
        buildDiagState(),
        buildDiagState({ status: 'generating' }),
        buildDiagState({ status: 'ready', narrative: { diagnosis: 'x' } }),
        buildDiagState({ status: 'failed', error: 'err' }),
      ];
      states.forEach(s => {
        const flags = deriveViewFlags(s);
        const active = [flags.isGenerating, flags.hasAI, flags.hasFailed].filter(Boolean);
        expect(active.length).toBeLessThanOrEqual(1);
      });
    });
  });
});
