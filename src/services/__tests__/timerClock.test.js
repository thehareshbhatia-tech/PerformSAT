import {
  deriveDeadline,
  computeRemaining,
  shiftDeadlineForPause,
  NO_PAUSE_CAP,
} from '../timerClock';

// Fixed epoch-ms anchor so every test is deterministic (no Date.now()).
const T0 = 1_700_000_000_000;
const MIN = 60 * 1000;

describe('timerClock — deriveDeadline', () => {
  it('anchors a deadline N seconds in the future', () => {
    expect(deriveDeadline(2100, T0)).toBe(T0 + 2100 * 1000); // 35:00 math module
  });

  it('clamps non-positive / invalid remaining to now', () => {
    expect(deriveDeadline(0, T0)).toBe(T0);
    expect(deriveDeadline(-5, T0)).toBe(T0);
    expect(deriveDeadline(undefined, T0)).toBe(T0);
    expect(deriveDeadline(NaN, T0)).toBe(T0);
  });
});

describe('timerClock — computeRemaining', () => {
  it('reads the full duration on the freshly-anchored frame (ceil, not N-1:59)', () => {
    const deadline = deriveDeadline(2100, T0);
    const { remainingSeconds, isUp } = computeRemaining({ deadlineTs: deadline, nowTs: T0 });
    expect(remainingSeconds).toBe(2100);
    expect(isUp).toBe(false);
  });

  it('reflects real wall-clock elapse, not tick count (the background-tab fix)', () => {
    const deadline = deriveDeadline(2100, T0);
    // Tab was backgrounded 30s; no ticks ran, but real time passed.
    const { remainingSeconds } = computeRemaining({ deadlineTs: deadline, nowTs: T0 + 30 * 1000 });
    expect(remainingSeconds).toBe(2070);
  });

  it('never returns negative time once the deadline has passed', () => {
    const deadline = deriveDeadline(60, T0);
    const { remainingMs, remainingSeconds, isUp } = computeRemaining({
      deadlineTs: deadline,
      nowTs: T0 + 10 * MIN, // long past
    });
    expect(remainingMs).toBe(0);
    expect(remainingSeconds).toBe(0);
    expect(isUp).toBe(true);
  });

  it('flags isUp exactly at the deadline boundary', () => {
    const deadline = deriveDeadline(100, T0);
    expect(computeRemaining({ deadlineTs: deadline, nowTs: deadline }).isUp).toBe(true);
    const justBefore = computeRemaining({ deadlineTs: deadline, nowTs: deadline - 1 });
    expect(justBefore.isUp).toBe(false);
    expect(justBefore.remainingSeconds).toBe(1);
  });

  it('freezes at the pause moment, ignoring later wall-clock time', () => {
    const deadline = deriveDeadline(2100, T0);
    const pauseStartedTs = T0 + 10 * 1000; // paused with 2090s left
    // 30s of real time pass while paused (e.g. tab backgrounded during pause)
    const { remainingSeconds } = computeRemaining({
      deadlineTs: deadline,
      nowTs: T0 + 40 * 1000,
      isPaused: true,
      pauseStartedTs,
    });
    expect(remainingSeconds).toBe(2090); // unchanged from the pause instant
  });

  it('falls back to nowTs when paused but pauseStartedTs is missing', () => {
    const deadline = deriveDeadline(2100, T0);
    const { remainingSeconds } = computeRemaining({
      deadlineTs: deadline,
      nowTs: T0 + 30 * 1000,
      isPaused: true,
      pauseStartedTs: null,
    });
    expect(remainingSeconds).toBe(2070);
  });
});

describe('timerClock — shiftDeadlineForPause', () => {
  it('pushes the deadline forward by the full paused duration (uncapped default)', () => {
    const deadline = deriveDeadline(2100, T0);
    const pauseStartedTs = T0 + 10 * 1000;
    const resumeTs = pauseStartedTs + 15 * 1000; // 15s pause
    expect(shiftDeadlineForPause(deadline, pauseStartedTs, resumeTs)).toBe(deadline + 15 * 1000);
  });

  it('keeps remaining time identical across a pause/resume cycle', () => {
    const deadline = deriveDeadline(2100, T0);
    const pauseStartedTs = T0 + 10 * 1000;
    const before = computeRemaining({ deadlineTs: deadline, nowTs: pauseStartedTs }).remainingSeconds;
    const resumeTs = pauseStartedTs + 47 * 1000;
    const shifted = shiftDeadlineForPause(deadline, pauseStartedTs, resumeTs);
    const after = computeRemaining({ deadlineTs: shifted, nowTs: resumeTs }).remainingSeconds;
    expect(after).toBe(before);
  });

  it('clamps the forgiven shift when a max-pause cap is supplied', () => {
    const deadline = deriveDeadline(2100, T0);
    const pauseStartedTs = T0;
    const resumeTs = pauseStartedTs + 10 * MIN; // 10 min pause
    const cap = 2 * MIN;
    expect(shiftDeadlineForPause(deadline, pauseStartedTs, resumeTs, cap)).toBe(deadline + cap);
  });

  it('never moves the deadline backward for a zero/negative pause window', () => {
    const deadline = deriveDeadline(2100, T0);
    expect(shiftDeadlineForPause(deadline, T0, T0)).toBe(deadline);
    expect(shiftDeadlineForPause(deadline, T0, T0 - 5000)).toBe(deadline);
  });

  it('exposes an unbounded default cap', () => {
    expect(NO_PAUSE_CAP).toBe(Infinity);
  });
});
