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

  return Object.values(reviewQueue).filter(item => {
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
 * Get review statistics for dashboard
 * @param {Object} reviewQueue - Review queue object
 * @returns {{ dueCount: number, totalCount: number, masteredRecently: number }}
 */
export const getReviewStats = (reviewQueue = {}) => {
  const now = new Date();
  const items = Object.values(reviewQueue);

  const dueCount = items.filter(item => new Date(item.nextReviewDate) <= now).length;
  const totalCount = items.length;
  const masteredRecently = items.filter(item => item.correctStreak >= 5).length;

  return {
    dueCount,
    totalCount,
    masteredRecently
  };
};
