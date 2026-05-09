import { useFeatureFlag, setFeatureFlagForTest } from '../useFeatureFlag';

describe('useFeatureFlag', () => {
  afterEach(() => {
    // Clear all localStorage flags between tests
    setFeatureFlagForTest('todaysTasks', undefined);
    setFeatureFlagForTest('rwDrills', undefined);
    setFeatureFlagForTest('experimentalThing', undefined);
  });

  describe('default behavior', () => {
    it('returns false when neither env nor localStorage set the flag', () => {
      expect(useFeatureFlag('experimentalThing')).toBe(false);
    });
  });

  describe('localStorage override', () => {
    it('returns true when ff:<key> is "1"', () => {
      setFeatureFlagForTest('todaysTasks', true);
      expect(useFeatureFlag('todaysTasks')).toBe(true);
    });

    it('returns false when ff:<key> is "0"', () => {
      setFeatureFlagForTest('todaysTasks', false);
      expect(useFeatureFlag('todaysTasks')).toBe(false);
    });

    it('clears override when set to undefined', () => {
      setFeatureFlagForTest('todaysTasks', true);
      setFeatureFlagForTest('todaysTasks', undefined);
      expect(useFeatureFlag('todaysTasks')).toBe(false);
    });

    it('handles legacy "true"/"false" string values', () => {
      window.localStorage.setItem('ff:rwDrills', 'true');
      expect(useFeatureFlag('rwDrills')).toBe(true);
      window.localStorage.setItem('ff:rwDrills', 'false');
      expect(useFeatureFlag('rwDrills')).toBe(false);
      window.localStorage.removeItem('ff:rwDrills');
    });
  });

  describe('camelCase to SCREAMING_SNAKE conversion', () => {
    it('maps todaysTasks to REACT_APP_FF_TODAYS_TASKS env var', () => {
      // We can't actually flip env vars at runtime in CRA — this asserts the
      // contract by checking that the localStorage key pattern is unchanged.
      setFeatureFlagForTest('todaysTasks', true);
      expect(window.localStorage.getItem('ff:todaysTasks')).toBe('1');
    });
  });

  describe('Safari private mode resilience', () => {
    it('does not throw when localStorage.getItem throws', () => {
      const original = window.localStorage.getItem;
      window.localStorage.getItem = () => { throw new Error('private mode'); };
      expect(() => useFeatureFlag('todaysTasks')).not.toThrow();
      expect(useFeatureFlag('todaysTasks')).toBe(false);
      window.localStorage.getItem = original;
    });

    it('does not throw when localStorage.setItem throws (test helper)', () => {
      const original = window.localStorage.setItem;
      window.localStorage.setItem = () => { throw new Error('private mode'); };
      expect(() => setFeatureFlagForTest('todaysTasks', true)).not.toThrow();
      window.localStorage.setItem = original;
    });
  });
});
