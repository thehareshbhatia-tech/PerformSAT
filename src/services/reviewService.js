/**
 * Spaced Repetition Review Service
 * Tracks questions for review and calculates optimal review intervals
 */

import { db } from '../firebase/config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

// SM-2 inspired intervals (in days)
const REVIEW_INTERVALS = [1, 2, 4, 7, 14, 30, 60];

/**
 * Calculate the next review date based on performance
 * @param {number} correctStreak - Number of times answered correctly in a row
 * @param {boolean} wasCorrect - Whether the latest answer was correct
 * @returns {Date} Next review date
 */
export const calculateNextReviewDate = (correctStreak, wasCorrect) => {
  const now = new Date();
  let intervalDays;

  if (wasCorrect) {
    // Move up the interval ladder
    const intervalIndex = Math.min(correctStreak, REVIEW_INTERVALS.length - 1);
    intervalDays = REVIEW_INTERVALS[intervalIndex];
  } else {
    // Reset to shortest interval
    intervalDays = REVIEW_INTERVALS[0];
  }

  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + intervalDays);
  return nextDate;
};

/**
 * Add a question to the review queue
 * @param {string} userId - User ID
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @param {number} questionId - Question ID
 * @param {boolean} wasCorrect - Whether the answer was correct
 */
export const addToReviewQueue = async (userId, moduleId, sectionName, questionId, wasCorrect) => {
  if (!userId) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);
    const data = progressDoc.exists() ? progressDoc.data() : {};

    const reviewQueue = data.reviewQueue || {};
    const key = `${moduleId}-${sectionName}-${questionId}`;
    const existing = reviewQueue[key] || { correctStreak: 0, wrongCount: 0 };

    const correctStreak = wasCorrect ? existing.correctStreak + 1 : 0;
    const wrongCount = wasCorrect ? existing.wrongCount : existing.wrongCount + 1;

    reviewQueue[key] = {
      moduleId,
      sectionName,
      questionId,
      correctStreak,
      wrongCount,
      lastAttempt: new Date().toISOString(),
      nextReviewDate: calculateNextReviewDate(correctStreak, wasCorrect).toISOString(),
      lastWasCorrect: wasCorrect
    };

    await setDoc(progressRef, {
      reviewQueue,
      lastUpdated: serverTimestamp()
    }, { merge: true });

  } catch (err) {
    console.error('Error adding to review queue:', err);
  }
};

/**
 * Batch-add a set of MISSED questions to the review queue with one read and
 * one write (a full test can feed 20 entries at once; the per-item variant
 * would do a read-modify-write round trip per miss). Every entry is treated
 * as a wrong answer: streak resets, wrongCount increments, and the next
 * review lands on the shortest interval. Best-effort: never throws.
 *
 * @param {string} userId - User ID
 * @param {Array<{moduleId: string, sectionName: string, questionId: string|number}>} entries
 */
export const addManyToReviewQueue = async (userId, entries) => {
  const valid = (entries || []).filter(e => e && e.moduleId && e.questionId != null);
  if (!userId || valid.length === 0) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);
    const data = progressDoc.exists() ? progressDoc.data() : {};

    const reviewQueue = data.reviewQueue || {};
    const now = new Date().toISOString();
    valid.forEach(({ moduleId, sectionName, questionId }) => {
      const key = `${moduleId}-${sectionName}-${questionId}`;
      const existing = reviewQueue[key] || { correctStreak: 0, wrongCount: 0 };
      reviewQueue[key] = {
        moduleId,
        sectionName,
        questionId,
        correctStreak: 0,
        wrongCount: existing.wrongCount + 1,
        lastAttempt: now,
        nextReviewDate: calculateNextReviewDate(0, false).toISOString(),
        lastWasCorrect: false
      };
    });

    await setDoc(progressRef, {
      reviewQueue,
      lastUpdated: serverTimestamp()
    }, { merge: true });

  } catch (err) {
    console.error('Error batch-adding to review queue:', err);
  }
};

/**
 * Get all questions due for review
 * @param {string} userId - User ID
 * @returns {Promise<Array>} Questions due for review
 */
export const getDueReviews = async (userId) => {
  if (!userId) return [];

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);

    if (!progressDoc.exists()) return [];

    const { reviewQueue = {} } = progressDoc.data();
    const now = new Date();

    return Object.entries(reviewQueue)
      .filter(([_, item]) => {
        const nextReview = new Date(item.nextReviewDate);
        return nextReview <= now;
      })
      .map(([key, item]) => ({
        key,
        ...item
      }))
      .sort((a, b) => a.wrongCount - b.wrongCount); // Prioritize most-missed

  } catch (err) {
    console.error('Error getting due reviews:', err);
    return [];
  }
};

/**
 * Get count of questions due for review
 * @param {Object} reviewQueue - Review queue object from progress
 * @returns {number} Count of due reviews
 */
export const getDueReviewCount = (reviewQueue = {}) => {
  const now = new Date();

  return Object.values(reviewQueue || {}).filter(item => {
    if (!item || !item.nextReviewDate) return false;
    const nextReview = new Date(item.nextReviewDate);
    return nextReview <= now;
  }).length;
};

/**
 * Remove a question from the review queue (mastered)
 * @param {string} userId - User ID
 * @param {string} key - Review queue key
 */
export const removeFromReviewQueue = async (userId, key) => {
  if (!userId) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);

    if (!progressDoc.exists()) return;

    const { reviewQueue = {} } = progressDoc.data();
    delete reviewQueue[key];

    await setDoc(progressRef, {
      reviewQueue,
      lastUpdated: serverTimestamp()
    }, { merge: true });

  } catch (err) {
    console.error('Error removing from review queue:', err);
  }
};

/**
 * Update review item after answering
 * @param {string} userId - User ID
 * @param {string} key - Review queue key
 * @param {boolean} wasCorrect - Whether answer was correct
 */
export const updateReviewItem = async (userId, key, wasCorrect) => {
  if (!userId) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    const progressDoc = await getDoc(progressRef);

    if (!progressDoc.exists()) return;

    const { reviewQueue = {} } = progressDoc.data();
    const item = reviewQueue[key];

    if (!item) return;

    const correctStreak = wasCorrect ? item.correctStreak + 1 : 0;

    // If they've gotten it right many times, consider it mastered
    if (correctStreak >= REVIEW_INTERVALS.length) {
      delete reviewQueue[key];
    } else {
      reviewQueue[key] = {
        ...item,
        correctStreak,
        wrongCount: wasCorrect ? item.wrongCount : item.wrongCount + 1,
        lastAttempt: new Date().toISOString(),
        nextReviewDate: calculateNextReviewDate(correctStreak, wasCorrect).toISOString(),
        lastWasCorrect: wasCorrect
      };
    }

    await setDoc(progressRef, {
      reviewQueue,
      lastUpdated: serverTimestamp()
    }, { merge: true });

  } catch (err) {
    console.error('Error updating review item:', err);
  }
};

/**
 * Persist the daily-review streak to Firestore so server-side jobs (the
 * re-engagement cron) can read it. The streak is computed client-side by
 * dailyReviewEngine.recordReviewSessionComplete (localStorage cache); this
 * mirrors that value to progress/{uid}.reviewStreak. Best-effort: never throws,
 * so a failed write can't block the review-completion flow.
 *
 * @param {string} userId - User ID
 * @param {{ current: number, best: number, lastDate: string|null }} streak
 * @returns {Promise<void>}
 */
export const persistReviewStreak = async (userId, streak) => {
  if (!userId || !streak) return;

  try {
    const progressRef = doc(db, 'progress', userId);
    await setDoc(progressRef, {
      reviewStreak: {
        current: streak.current ?? 0,
        best: streak.best ?? 0,
        lastDate: streak.lastDate ?? null,
      },
      lastUpdated: serverTimestamp(),
    }, { merge: true });
  } catch (err) {
    console.error('Error persisting review streak:', err);
  }
};

/**
 * Get review statistics for dashboard
 * @param {Object} reviewQueue - Review queue object
 * @returns {{ dueCount: number, totalCount: number, masteredRecently: number }}
 */
export const getReviewStats = (reviewQueue = {}) => {
  const now = new Date();
  const items = Object.values(reviewQueue || {}).filter(item => item && item.nextReviewDate);

  const dueCount = items.filter(item => new Date(item.nextReviewDate) <= now).length;
  const totalCount = items.length;
  const masteredRecently = items.filter(item => item.correctStreak >= 5).length;

  return {
    dueCount,
    totalCount,
    masteredRecently
  };
};
