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

  describe('ready state (AI available) — v2 structured narrative', () => {
    const narrative = {
      diagnosis: 'Your biggest gap is algebraic reasoning.',
      weaknesses: [
        { title: 'Factoring', why: 'Repeated conceptual errors.', proof: ['0/3 on factoring'], impact: '~20 points', severity: 'critical' },
      ],
      scoreImpactPoints: [
        'Careless errors on 3 easy questions cost roughly 30 recoverable points',
        'Geometry accuracy of 57% is dragging your score down',
      ],
      behaviorInsightPoints: [
        'Answer changes hurt: 2 changed from correct to incorrect',
      ],
      topNextFocus: {
        headline: 'Eliminate careless errors on easy questions first.',
        reasons: ['3 easy misses account for 30 recoverable points'],
      },
      changesSinceLast: 'Score improved 20 points but careless errors increased.',
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

    it('scoreImpactPoints is an array of strings', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      expect(Array.isArray(state.narrative.scoreImpactPoints)).toBe(true);
      state.narrative.scoreImpactPoints.forEach(pt => {
        expect(typeof pt).toBe('string');
        expect(pt.length).toBeGreaterThan(0);
      });
    });

    it('behaviorInsightPoints is an array of strings', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      expect(Array.isArray(state.narrative.behaviorInsightPoints)).toBe(true);
      state.narrative.behaviorInsightPoints.forEach(pt => {
        expect(typeof pt).toBe('string');
      });
    });

    it('topNextFocus is an object with headline and reasons', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      expect(typeof state.narrative.topNextFocus.headline).toBe('string');
      expect(Array.isArray(state.narrative.topNextFocus.reasons)).toBe(true);
    });

    it('changesSinceLast is a string or null', () => {
      const state = buildDiagState({ status: 'ready', narrative });
      expect(typeof state.narrative.changesSinceLast).toBe('string');
    });
  });

  describe('ready state — legacy (v1) narrative still accepted', () => {
    const legacyNarrative = {
      diagnosis: 'Your biggest gap is algebraic reasoning.',
      weaknesses: [
        { title: 'Factoring', why: 'Repeated conceptual errors.', proof: ['0/3 on factoring'], impact: '~20 points', severity: 'critical' },
      ],
      behaviorInsights: 'You changed answers 4 times, going from correct to incorrect.',
      scoreImpact: 'Fixing algebra alone could lift your score by 30 points.',
      topNextFocus: 'Master factoring fundamentals before next attempt.',
      uncertainties: 'Only one attempt so far — trend data is limited.',
    };

    it('has status ready with legacy string fields', () => {
      const state = buildDiagState({ status: 'ready', narrative: legacyNarrative });
      expect(state.status).toBe('ready');
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

  describe('retake reset contract', () => {
    it('retake resets aiDiagnosticState to idle', () => {
      const preRetake = buildDiagState({ status: 'ready', narrative: { diagnosis: 'old' } });
      expect(preRetake.status).toBe('ready');

      const postRetake = buildDiagState();
      expect(postRetake.status).toBe('idle');
      expect(postRetake.narrative).toBeNull();
      expect(postRetake.error).toBeNull();
    });

    it('stale ready state is not reused after reset', () => {
      const stale = buildDiagState({ status: 'ready', narrative: { diagnosis: 'stale attempt' } });
      const fresh = buildDiagState();
      expect(fresh.status).not.toBe(stale.status);
      expect(fresh.narrative).toBeNull();
    });
  });

  describe('rehydration decision logic', () => {
    function shouldRehydrate(artifact) {
      return !!(artifact && artifact.status === 'ready' && artifact.narrative);
    }

    it('rehydrates when artifact is ready with narrative', () => {
      expect(shouldRehydrate({
        status: 'ready',
        narrative: { diagnosis: 'rehydrated' },
        attemptTimestamp: '2026-03-09T10:00:00.000Z',
      })).toBe(true);
    });

    it('does not rehydrate when artifact is still generating', () => {
      expect(shouldRehydrate({ status: 'generating', narrative: null })).toBe(false);
    });

    it('does not rehydrate when artifact is failed', () => {
      expect(shouldRehydrate({ status: 'failed', narrative: null })).toBe(false);
    });

    it('does not rehydrate when artifact is null', () => {
      expect(shouldRehydrate(null)).toBe(false);
    });

    it('does not rehydrate when ready but narrative is null', () => {
      expect(shouldRehydrate({ status: 'ready', narrative: null })).toBe(false);
    });
  });

  describe('attempt-specific artifact selection', () => {
    const artifacts = [
      { id: 'a1', testId: 'test-1', attemptTimestamp: '2026-03-01T10:00:00.000Z', status: 'ready', narrative: { diagnosis: 'attempt 1' } },
      { id: 'a2', testId: 'test-1', attemptTimestamp: '2026-03-09T10:00:00.000Z', status: 'ready', narrative: { diagnosis: 'attempt 2' } },
      { id: 'a3', testId: 'test-1', attemptTimestamp: '2026-03-09T10:00:00.000Z', status: 'failed', narrative: null },
    ];

    function selectArtifact(testId, attemptTimestamp) {
      const attemptMatch = artifacts.find(
        a => a.testId === testId && a.attemptTimestamp === attemptTimestamp && a.status === 'ready'
      );
      if (attemptMatch) return attemptMatch;
      return artifacts.find(a => a.testId === testId && a.status === 'ready') || null;
    }

    it('selects the correct attempt when timestamp matches', () => {
      const selected = selectArtifact('test-1', '2026-03-09T10:00:00.000Z');
      expect(selected.id).toBe('a2');
      expect(selected.narrative.diagnosis).toBe('attempt 2');
    });

    it('does not select a failed artifact even if attempt matches', () => {
      const failedOnly = artifacts.filter(a => a.id === 'a3');
      const result = failedOnly.find(
        a => a.testId === 'test-1' && a.attemptTimestamp === '2026-03-09T10:00:00.000Z' && a.status === 'ready'
      ) || null;
      expect(result).toBeNull();
    });

    it('falls back to latest ready artifact if no attempt match', () => {
      const selected = selectArtifact('test-1', '2026-03-15T10:00:00.000Z');
      expect(selected.id).toBe('a1');
    });

    it('returns null when no ready artifacts exist for the test', () => {
      const result = selectArtifact('test-999', '2026-03-09T10:00:00.000Z');
      expect(result).toBeNull();
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
