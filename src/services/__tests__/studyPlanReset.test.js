import { pickSurvivingArtifactId, isOrphanArtifact } from '../studyPlanReset';

describe('pickSurvivingArtifactId', () => {
  // history is newest-first (getStudyPlanHistory order)
  const history = [
    { id: 'art-3', sourceTestId: 'practice-test-3' },
    { id: 'art-2', sourceTestId: 'practice-test-2' },
    { id: 'art-mini', sourceTestId: null }, // mini-diagnostic plan
  ];

  test('returns the newest artifact whose source test still exists', () => {
    // test-3 was reset → newest survivor is test-2's artifact
    const remaining = { 'practice-test-1': {}, 'practice-test-2': {} };
    expect(pickSurvivingArtifactId(history, remaining)).toBe('art-2');
  });

  test('keeps the newest artifact when a non-latest test was reset', () => {
    // test-2 reset, test-3 remains → newest survivor is still test-3's artifact
    const remaining = { 'practice-test-1': {}, 'practice-test-3': {} };
    expect(pickSurvivingArtifactId(history, remaining)).toBe('art-3');
  });

  test('falls back to the mini-diagnostic artifact when no full tests survive', () => {
    expect(pickSurvivingArtifactId(history, {})).toBe('art-mini');
  });

  test('returns null when nothing survives (no mini-diagnostic, no tests)', () => {
    const onlyTests = [
      { id: 'art-3', sourceTestId: 'practice-test-3' },
      { id: 'art-2', sourceTestId: 'practice-test-2' },
    ];
    expect(pickSurvivingArtifactId(onlyTests, {})).toBeNull();
  });

  test('handles empty / missing history', () => {
    expect(pickSurvivingArtifactId([], { 'practice-test-1': {} })).toBeNull();
    expect(pickSurvivingArtifactId(undefined, undefined)).toBeNull();
  });
});

describe('isOrphanArtifact', () => {
  test('true when the source test was deleted', () => {
    const art = { linkage: { sourceTestId: 'practice-test-1' } };
    expect(isOrphanArtifact(art, { 'practice-test-2': {} })).toBe(true);
  });

  test('false when the source test still exists', () => {
    const art = { linkage: { sourceTestId: 'practice-test-1' } };
    expect(isOrphanArtifact(art, { 'practice-test-1': {} })).toBe(false);
  });

  test('false for a mini-diagnostic artifact (no source test)', () => {
    expect(isOrphanArtifact({ linkage: { sourceTestId: null } }, {})).toBe(false);
    expect(isOrphanArtifact({ linkage: {} }, {})).toBe(false);
    expect(isOrphanArtifact({}, {})).toBe(false);
    expect(isOrphanArtifact(null, {})).toBe(false);
  });
});
