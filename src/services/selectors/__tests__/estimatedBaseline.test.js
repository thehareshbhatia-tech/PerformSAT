/**
 * Pins the Diagnostic v2 baseline display rule: the diagnostic's estimated
 * band fills the dashboard starting-score slot ONLY while no scoreable
 * full-test attempt exists; any real test score makes it disappear.
 */
import { getEstimatedBaseline } from '../estimatedBaseline';

const BAND = {
  low: 980, high: 1060,
  rwBand: { low: 490, high: 550 },
  mathBand: { low: 460, high: 520 },
};

describe('getEstimatedBaseline', () => {
  test('returns the band with a grid-snapped midpoint when no tests exist', () => {
    const out = getEstimatedBaseline({ scoreBand: BAND }, {});
    expect(out).toEqual({
      low: 980, high: 1060, mid: 1020,
      rwBand: BAND.rwBand, mathBand: BAND.mathBand,
    });
  });

  test('null when any test row has a scoreable attempt (full tests outrank)', () => {
    const results = {
      'practice-test-1': { attempts: [{ scaledScore: 1100, isMultiSection: true }] },
    };
    expect(getEstimatedBaseline({ scoreBand: BAND }, results)).toBeNull();
  });

  test('null on legacy aggregate-only rows with a stored best score', () => {
    const results = { 'practice-test-2': { bestScaledScore: 620 } };
    expect(getEstimatedBaseline({ scoreBand: BAND }, results)).toBeNull();
  });

  test('junk rows (no finite score anywhere) do NOT suppress the estimate', () => {
    const results = {
      'practice-test-3': { attempts: [{ scaledScore: null }, { scaledScore: undefined }] },
    };
    expect(getEstimatedBaseline({ scoreBand: BAND }, results)).not.toBeNull();
  });

  test('null without a stored diagnostic band', () => {
    expect(getEstimatedBaseline(null, {})).toBeNull();
    expect(getEstimatedBaseline({}, {})).toBeNull();
    expect(getEstimatedBaseline({ scoreBand: { low: NaN, high: 1000 } }, {})).toBeNull();
  });

  test('handles missing practiceTestResults map', () => {
    expect(getEstimatedBaseline({ scoreBand: BAND }, null)).not.toBeNull();
  });
});
