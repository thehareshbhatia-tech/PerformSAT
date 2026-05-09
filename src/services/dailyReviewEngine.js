/**
 * Daily Review Engine
 *
 * Promotes spaced-repetition review from a background queue into a
 * first-class daily loop. Consumes the existing reviewService data and
 * produces a structured "today's session" with priority ordering,
 * streak tracking, and post-session summary logic.
 */

import { getDueReviewCount, getReviewStats } from './reviewService';

const MAX_DAILY_ITEMS = 15;

/**
 * Categorise due items by urgency so the UI can colour-code them.
 *   overdue  — past due by > 1 day
 *   due      — due today
 *   upcoming — due within the next 24 h (preview)
 */
export const categorizeDueItems = (reviewQueue = {}) => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const overdue = [];
  const dueToday = [];
  const upcoming = [];

  Object.entries(reviewQueue).forEach(([key, item]) => {
    const nextReview = new Date(item.nextReviewDate);
    const enriched = { key, ...item };

    if (nextReview < now) {
      const daysOverdue = Math.floor((now - nextReview) / (1000 * 60 * 60 * 24));
      enriched.daysOverdue = daysOverdue;
      if (daysOverdue >= 1) {
        overdue.push(enriched);
      } else {
        dueToday.push(enriched);
      }
    } else if (nextReview <= tomorrow) {
      upcoming.push(enriched);
    }
  });

  overdue.sort((a, b) => b.wrongCount - a.wrongCount);
  dueToday.sort((a, b) => b.wrongCount - a.wrongCount);

  return { overdue, dueToday, upcoming };
};

/**
 * Build a single ordered session of review items, capped at MAX_DAILY_ITEMS.
 * Priority: overdue first (most-missed at top), then dueToday.
 */
export const buildDailySession = (reviewQueue = {}) => {
  const { overdue, dueToday } = categorizeDueItems(reviewQueue);
  const pool = [...overdue, ...dueToday];
  const session = pool.slice(0, MAX_DAILY_ITEMS);

  return {
    items: session,
    totalDue: pool.length,
    sessionSize: session.length,
    hasMore: pool.length > MAX_DAILY_ITEMS,
    estimatedMinutes: Math.max(1, Math.ceil(session.length * 1.5)),
  };
};

/**
 * Compute a daily review "streak" from the history of review sessions
 * stored in localStorage (lightweight, no Firestore round-trip).
 */
const STREAK_KEY = 'performsat_review_streak';

export const getReviewStreak = () => {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { current: 0, best: 0, lastDate: null };
    return JSON.parse(raw);
  } catch {
    return { current: 0, best: 0, lastDate: null };
  }
};

export const recordReviewSessionComplete = () => {
  const todayStr = new Date().toISOString().slice(0, 10);
  const streak = getReviewStreak();

  if (streak.lastDate === todayStr) return streak;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  const isConsecutive = streak.lastDate === yesterdayStr;
  const newCurrent = isConsecutive ? streak.current + 1 : 1;
  const newBest = Math.max(streak.best, newCurrent);

  const updated = { current: newCurrent, best: newBest, lastDate: todayStr };
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(updated)); } catch { /* noop */ }
  return updated;
};

/**
 * Summary after a review session completes.
 */
export const buildSessionSummary = (results = []) => {
  const correct = results.filter(r => r.wasCorrect).length;
  const total = results.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const streak = recordReviewSessionComplete();

  return {
    correct,
    total,
    accuracy,
    streak,
    message:
      accuracy >= 90 ? 'Outstanding recall — keep it up!'
      : accuracy >= 70 ? 'Solid session. A few items need another pass.'
      : 'Some concepts are slipping. We\'ll bring them back sooner.',
  };
};

