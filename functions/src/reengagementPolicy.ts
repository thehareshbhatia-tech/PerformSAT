/**
 * Re-engagement nudge policy — PURE decision logic for sendReEngagementNudges.
 *
 * Extracted from index.ts so the part that decides WHO gets a notification (and
 * WHY) can be unit-tested without Firestore / FCM. No side effects, no admin SDK.
 */

export type NudgeReason = "streak_at_risk" | "reviews_due" | "lapsed";

export const LAPSE_DAYS = 3;
const DAY_MS = 24 * 60 * 60 * 1000;

/** Best-effort ms-since-epoch from a Firestore Timestamp | number | ISO string. */
export function toMillis(v: unknown): number | null {
  if (v == null) return null;
  if (typeof v === "object" && typeof (v as {toMillis?: unknown}).toMillis === "function") {
    return (v as {toMillis: () => number}).toMillis();
  }
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const t = new Date(v).getTime();
    return isNaN(t) ? null : t;
  }
  return null;
}

/** Count review-queue items whose nextReviewDate is at or before `now`. */
export function countDueReviews(
  reviewQueue: Record<string, {nextReviewDate?: string}> | undefined,
  now: number,
): number {
  if (!reviewQueue) return 0;
  let count = 0;
  for (const item of Object.values(reviewQueue)) {
    if (item && item.nextReviewDate) {
      const t = new Date(item.nextReviewDate).getTime();
      if (!isNaN(t) && t <= now) count += 1;
    }
  }
  return count;
}

/** Whole days from `now` until an ISO YYYY-MM-DD test date (null if unset/invalid). */
export function daysUntilTest(testDate: unknown, now: number): number | null {
  if (typeof testDate !== "string" || !testDate) return null;
  const t = new Date(`${testDate}T00:00:00`).getTime();
  if (isNaN(t)) return null;
  return Math.ceil((t - now) / DAY_MS);
}

/**
 * Decide whether (and why) to nudge a student. Pure. Priority order:
 * streak_at_risk > reviews_due > lapsed. Returns null if the student was active
 * today (already engaged) or none of the conditions hold.
 */
export function classifyNudge(opts: {
  now: number;
  reviewStreak: {current?: number; lastDate?: string | null} | null;
  dueReviewCount: number;
  lastActiveMs: number | null;
}): NudgeReason | null {
  const {now, reviewStreak, dueReviewCount, lastActiveMs} = opts;
  const dayStr = (ms: number) => new Date(ms).toISOString().slice(0, 10);
  const todayStr = dayStr(now);

  // Active today → don't nudge (already engaged).
  if (lastActiveMs != null && dayStr(lastActiveMs) === todayStr) return null;

  // 1. Streak alive (extended yesterday) but not yet today → at risk tonight.
  if (reviewStreak && (reviewStreak.current || 0) > 0 && reviewStreak.lastDate) {
    const yesterdayStr = dayStr(now - DAY_MS);
    if (reviewStreak.lastDate === yesterdayStr) return "streak_at_risk";
  }

  // 2. Spaced-repetition items waiting.
  if (dueReviewCount > 0) return "reviews_due";

  // 3. Lapsed by inactivity.
  if (lastActiveMs != null && (now - lastActiveMs) >= LAPSE_DAYS * DAY_MS) {
    return "lapsed";
  }
  return null;
}

/** Compose the no-emoji nudge copy for a reason. */
export function buildNudgeContent(reason: NudgeReason, ctx: {
  firstName?: string;
  streakCurrent: number;
  dueReviewCount: number;
  daysToTest: number | null;
}): {title: string; body: string} {
  const name = ctx.firstName ? `${ctx.firstName}, ` : "";
  if (reason === "streak_at_risk") {
    return {
      title: `Keep your ${ctx.streakCurrent}-day streak`,
      body: `${name}a few minutes of review today keeps your streak alive.`,
    };
  }
  if (reason === "reviews_due") {
    const n = ctx.dueReviewCount;
    return {
      title: `${n} review${n === 1 ? "" : "s"} due today`,
      body: `${name}clear your spaced-repetition queue to lock in what you've learned.`,
    };
  }
  const tail = (ctx.daysToTest != null && ctx.daysToTest > 0) ?
    ` Your SAT is ${ctx.daysToTest} day${ctx.daysToTest === 1 ? "" : "s"} away.` : "";
  return {
    title: "Ready for today's practice?",
    body: `${name}jump back in and keep your momentum.${tail}`,
  };
}
