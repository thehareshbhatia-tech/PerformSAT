/**
 * useFeatureFlag — read a CRA-style feature flag with a localStorage runtime override.
 *
 * Usage:
 *   const enabled = useFeatureFlag('todaysTasks');
 *
 * Resolution order:
 *   1. `localStorage["ff:<key>"] === "1"` — runtime override (set in DevTools)
 *   2. `process.env.REACT_APP_FF_<KEY>` === `"true"` — build-time default
 *   3. test mode: `process.env.NODE_ENV === 'test'` reads localStorage with no env fallback
 *   4. otherwise `false`
 *
 * Notes:
 *   - This is a Create React App project (`react-scripts 5.0.1`). Vite-style
 *     `import.meta.env.VITE_*` does NOT work here — env vars are surfaced via
 *     `process.env.REACT_APP_*` at build time.
 *   - localStorage override lets you toggle a flag in production (or a single
 *     browser session) without a rebuild. To turn ON: `localStorage.setItem('ff:todaysTasks','1')`.
 *   - Hook returns a stable boolean per render (no useState). Callers reading on
 *     mount + on a localStorage change should subscribe via `window` storage event
 *     if cross-tab live toggling is needed (rare).
 *
 * @param {string} key  Flag identifier in camelCase. Translates to env var
 *                      `REACT_APP_FF_TODAYS_TASKS` for `'todaysTasks'`.
 * @returns {boolean}   True if the flag is enabled in this runtime.
 */
function camelToScreamingSnake(key) {
  return String(key)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toUpperCase();
}

function readLocalStorage(key) {
  // Wrapped in try/catch — Safari private mode throws on localStorage access.
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return window.localStorage.getItem(`ff:${key}`);
  } catch {
    return null;
  }
}

function readEnv(key) {
  // process.env is a webpack-time substitution in CRA — only string values land here.
  if (typeof process === 'undefined' || !process.env) return undefined;
  return process.env[`REACT_APP_FF_${camelToScreamingSnake(key)}`];
}

export function useFeatureFlag(key) {
  // 1. localStorage runtime override
  const lsValue = readLocalStorage(key);
  if (lsValue === '1' || lsValue === 'true') return true;
  if (lsValue === '0' || lsValue === 'false') return false;

  // 2. build-time env var (CRA pattern)
  const envValue = readEnv(key);
  if (envValue === 'true') return true;
  if (envValue === 'false') return false;

  // 3. default off
  return false;
}

/**
 * Test helper — set a flag for the current Jest test only.
 * Resets on the next test that calls `setFeatureFlagForTest(key, undefined)`.
 *
 * @param {string} key   Flag key in camelCase.
 * @param {boolean|undefined} value  true/false to set; undefined to clear.
 */
export function setFeatureFlagForTest(key, value) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    if (value === undefined) {
      window.localStorage.removeItem(`ff:${key}`);
    } else {
      window.localStorage.setItem(`ff:${key}`, value ? '1' : '0');
    }
  } catch {
    // Safari private mode — silently no-op.
  }
}

export default useFeatureFlag;
