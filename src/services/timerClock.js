/**
 * timerClock — pure wall-clock timer math for the timed practice-test runner.
 *
 * The test Timer used to count down by decrementing a counter once per
 * setInterval tick. Browsers throttle/suspend background-tab intervals, so a
 * student who switched tabs mid-question kept real time but lost almost no
 * "test time" — free time to look up answers (1.8). This module derives the
 * remaining time from an absolute deadline against the wall clock instead, so a
 * backgrounded/slept tab loses real elapsed time the moment it refocuses.
 *
 * All functions here are pure (no React, no globals) so the load-bearing math is
 * unit-testable; the component passes `Date.now()` in as `nowTs`.
 */

/** Default: pauses are unbounded (matches the pre-1.8 behavior). The pause
 *  overlay covers the questions, so a long pause is not a scoring exploit;
 *  a real cap is a product decision, wired here but left off until then. */
export const NO_PAUSE_CAP = Infinity;

/**
 * Turn a remaining-seconds value into an absolute deadline timestamp.
 * Used on mount / module-start / refresh-restore to anchor the clock.
 *
 * @param {number} remainingSeconds - seconds left when the clock is (re)anchored
 * @param {number} nowTs - current wall-clock time in epoch ms
 * @returns {number} epoch-ms timestamp at which time runs out
 */
export function deriveDeadline(remainingSeconds, nowTs) {
  const secs = Number.isFinite(remainingSeconds) && remainingSeconds > 0 ? remainingSeconds : 0;
  return nowTs + secs * 1000;
}

/**
 * Compute remaining time against an absolute deadline. When paused, time is
 * frozen at the moment the pause began (so a paused, backgrounded tab does not
 * leak time). Never returns a negative value.
 *
 * @param {object} args
 * @param {number} args.deadlineTs - epoch-ms deadline (from deriveDeadline)
 * @param {number} args.nowTs - current wall-clock time in epoch ms
 * @param {boolean} [args.isPaused] - whether the clock is currently frozen
 * @param {number|null} [args.pauseStartedTs] - epoch ms the current pause began
 * @returns {{ remainingMs: number, remainingSeconds: number, isUp: boolean }}
 */
export function computeRemaining({ deadlineTs, nowTs, isPaused = false, pauseStartedTs = null }) {
  const effectiveNow = (isPaused && pauseStartedTs != null) ? pauseStartedTs : nowTs;
  const remainingMs = Math.max(0, deadlineTs - effectiveNow);
  // ceil so a freshly-anchored N:00 module reads N:00 on first paint, not N-1:59.
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  return { remainingMs, remainingSeconds, isUp: remainingMs <= 0 };
}

/**
 * Push a deadline forward by the duration of a just-ended pause so frozen time
 * is never consumed. An optional cap bounds how much total pause time is
 * forgiven (default: unbounded — see NO_PAUSE_CAP).
 *
 * @param {number} deadlineTs - epoch-ms deadline before the pause shift
 * @param {number} pauseStartedTs - epoch ms the pause began
 * @param {number} resumeTs - epoch ms the pause ended
 * @param {number} [maxPauseMs=NO_PAUSE_CAP] - max forgiven pause duration
 * @returns {number} the shifted deadline (epoch ms)
 */
export function shiftDeadlineForPause(deadlineTs, pauseStartedTs, resumeTs, maxPauseMs = NO_PAUSE_CAP) {
  const pausedMs = Math.max(0, resumeTs - pauseStartedTs);
  const forgivenMs = Math.min(pausedMs, maxPauseMs);
  return deadlineTs + forgivenMs;
}
