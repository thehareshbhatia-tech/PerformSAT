/**
 * log.js — scoped logging convention for PerformSAT.
 *
 * Wraps console.* with a `[performsat:${scope}]` prefix so logs are
 * filterable in DevTools (paste `performsat:` in the Console filter to see
 * just our messages). Mirrors the pattern that organically emerged across
 * the codebase ([performsat:rwBank], [performsat:trySimilar], etc.).
 *
 * Usage:
 *   import { makeLogger } from '@/utils/log';
 *   const log = makeLogger('myModule');
 *   log.error('something broke', err);
 *   log.warn('mild surprise');
 *   log.info('lifecycle event');
 *
 * Or one-shot at a callsite:
 *   import { logError } from '@/utils/log';
 *   logError('myModule', 'something broke', err);
 *
 * Production filtering:
 *   In NODE_ENV === 'production', logInfo/logDebug are suppressed by default.
 *   logError/logWarn always emit. Override with localStorage flag
 *   `performsat:logVerbose=1` to re-enable info/debug at runtime.
 *   In NODE_ENV === 'test', everything is suppressed unless the same flag
 *   is set — keeps Jest output clean.
 */

const PROD = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production';
const TEST = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test';

function isVerboseRuntime() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    return window.localStorage.getItem('performsat:logVerbose') === '1';
  } catch {
    return false;
  }
}

function fmt(scope, args) {
  return [`[performsat:${scope}]`, ...args];
}

/**
 * Always emits. Use for unrecoverable conditions or unexpected error paths.
 * @param {string} scope
 * @param {...any} args
 */
export function logError(scope, ...args) {
  if (TEST && !isVerboseRuntime()) return;
  // eslint-disable-next-line no-console
  console.error(...fmt(scope, args));
}

/**
 * Always emits. Use for soft failures (e.g., dispatcher returned [], a
 * Firestore listener bumped, fallback path engaged).
 * @param {string} scope
 * @param {...any} args
 */
export function logWarn(scope, ...args) {
  if (TEST && !isVerboseRuntime()) return;
  // eslint-disable-next-line no-console
  console.warn(...fmt(scope, args));
}

/**
 * Suppressed in production unless `localStorage["performsat:logVerbose"]` is
 * truthy. Use for lifecycle / debug-information messages.
 * @param {string} scope
 * @param {...any} args
 */
export function logInfo(scope, ...args) {
  if (TEST && !isVerboseRuntime()) return;
  if (PROD && !isVerboseRuntime()) return;
  // eslint-disable-next-line no-console
  console.log(...fmt(scope, args));
}

/**
 * Suppressed in production unless verbose flag is set. Same as logInfo but
 * uses console.debug — DevTools' "Verbose" level filter hides this by default.
 * @param {string} scope
 * @param {...any} args
 */
export function logDebug(scope, ...args) {
  if (TEST && !isVerboseRuntime()) return;
  if (PROD && !isVerboseRuntime()) return;
  // eslint-disable-next-line no-console
  console.debug(...fmt(scope, args));
}

/**
 * Build a logger bound to a scope. Slightly more ergonomic than threading
 * the scope through every callsite.
 *
 * @param {string} scope
 * @returns {{ error, warn, info, debug }}
 */
export function makeLogger(scope) {
  return {
    error: (...args) => logError(scope, ...args),
    warn:  (...args) => logWarn(scope, ...args),
    info:  (...args) => logInfo(scope, ...args),
    debug: (...args) => logDebug(scope, ...args),
  };
}
