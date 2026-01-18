import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
import { markLessonComplete as markComplete, markLessonIncomplete } from '../services/progressService';
import { recordPracticeAttempt as recordAttempt } from '../services/practiceService';
import { getDueReviewCount, getReviewStats } from '../services/reviewService';

/**
 * Hook for managing user progress with real-time Firestore sync
 * @param {string} userId - User ID
 * @returns {Object} Progress state and functions
 */
export const useProgress = (userId) => {
  const [completedLessons, setCompletedLessons] = useState({});
  const [practiceProgress, setPracticeProgress] = useState({});
  const [reviewQueue, setReviewQueue] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const progressRef = doc(db, 'progress', userId);

    // Set up real-time listener
    const unsubscribe = onSnapshot(
      progressRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();

          // Handle both old format (fields with dots) and new format (nested object)
          let completedLessonsData = {};

          if (data.completedLessons && Object.keys(data.completedLessons).length > 0) {
            // New format: nested object
            completedLessonsData = data.completedLessons;
          } else {
            // Old format: check for fields with "completedLessons." prefix
            Object.keys(data).forEach(key => {
              if (key.startsWith('completedLessons.')) {
                const lessonKey = key.replace('completedLessons.', '');
                completedLessonsData[lessonKey] = data[key];
              }
            });
          }

          setCompletedLessons(completedLessonsData);

          // Also get practice progress
          setPracticeProgress(data.practiceProgress || {});

          // Get review queue
          setReviewQueue(data.reviewQueue || {});
        } else {
          setCompletedLessons({});
          setPracticeProgress({});
          setReviewQueue({});
        }
        setLoading(false);
      },
      (err) => {
        console.error('Error listening to progress:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  /**
   * Marks a lesson as complete with optimistic update
   * @param {string} moduleId - Module ID
   * @param {number} lessonId - Lesson ID
   * @param {Object} lessonData - Lesson metadata
   */
  const markLessonComplete = async (moduleId, lessonId, lessonData) => {
    const lessonKey = `${moduleId}-${lessonId}`;

    // Optimistic update
    setCompletedLessons(prev => ({
      ...prev,
      [lessonKey]: {
        completed: true,
        moduleId,
        lessonId,
        lessonTitle: lessonData.title,
        lessonType: lessonData.type,
        completedAt: new Date()
      }
    }));

    try {
      await markComplete(userId, moduleId, lessonId, lessonData);
    } catch (err) {
      console.error('Failed to mark lesson complete:', err);
      // Rollback optimistic update
      setCompletedLessons(prev => {
        const updated = { ...prev };
        delete updated[lessonKey];
        return updated;
      });
      setError(err.message);
    }
  };

  /**
   * Toggles lesson completion status
   * @param {string} moduleId - Module ID
   * @param {number} lessonId - Lesson ID
   * @param {Object} lessonData - Lesson metadata
   */
  const toggleLessonComplete = async (moduleId, lessonId, lessonData) => {
    const lessonKey = `${moduleId}-${lessonId}`;
    const isCompleted = completedLessons[lessonKey]?.completed;

    if (isCompleted) {
      // Optimistic update for incomplete
      setCompletedLessons(prev => ({
        ...prev,
        [lessonKey]: {
          ...prev[lessonKey],
          completed: false
        }
      }));

      try {
        await markLessonIncomplete(userId, moduleId, lessonId);
      } catch (err) {
        console.error('Failed to mark lesson incomplete:', err);
        // Rollback
        setCompletedLessons(prev => ({
          ...prev,
          [lessonKey]: {
            ...prev[lessonKey],
            completed: true
          }
        }));
        setError(err.message);
      }
    } else {
      await markLessonComplete(moduleId, lessonId, lessonData);
    }
  };

  /**
   * Checks if a lesson is completed
   * @param {string} moduleId - Module ID
   * @param {number} lessonId - Lesson ID
   * @returns {boolean}
   */
  const isLessonCompleted = (moduleId, lessonId) => {
    const lessonKey = `${moduleId}-${lessonId}`;
    return completedLessons[lessonKey]?.completed || false;
  };

  /**
   * Gets module progress percentage
   * @param {string} moduleId - Module ID
   * @param {number} totalLessons - Total lessons in module
   * @returns {number} Completion percentage (0-100)
   */
  const getModuleProgress = (moduleId, totalLessons) => {
    if (!totalLessons || totalLessons === 0) return 0;

    const completedCount = Object.keys(completedLessons).filter(key => {
      return key.startsWith(`${moduleId}-`) && completedLessons[key]?.completed;
    }).length;

    return Math.round((completedCount / totalLessons) * 100);
  };

  // ===== Practice Progress Functions =====
  // Note: These functions now work with section names (e.g., "Deriving Equations")
  // instead of lesson IDs for section-based practice

  /**
   * Records a practice attempt with optimistic update
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name (e.g., "Deriving Equations")
   * @param {Object} answers - Answers object { questionId: { selected, correct } }
   * @param {number} score - Number correct
   * @param {number} totalQuestions - Total questions
   */
  const recordPracticeAttempt = async (moduleId, sectionName, answers, score, totalQuestions) => {
    const practiceKey = `${moduleId}-${sectionName}`;

    // Optimistic update
    setPracticeProgress(prev => ({
      ...prev,
      [practiceKey]: {
        bestScore: prev[practiceKey] ? Math.max(prev[practiceKey].bestScore, score) : score,
        totalAttempts: prev[practiceKey] ? prev[practiceKey].totalAttempts + 1 : 1,
        lastAttemptAt: new Date(),
        lastAnswers: answers
      }
    }));

    try {
      await recordAttempt(userId, moduleId, sectionName, answers, score, totalQuestions);
    } catch (err) {
      console.error('Failed to record practice attempt:', err);
      setError(err.message);
    }
  };

  /**
   * Checks if a section has been practiced
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name
   * @returns {boolean}
   */
  const hasPracticed = (moduleId, sectionName) => {
    const practiceKey = `${moduleId}-${sectionName}`;
    return !!practiceProgress[practiceKey];
  };

  /**
   * Gets best score for a section
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name
   * @returns {number} Best score or 0
   */
  const getBestScore = (moduleId, sectionName) => {
    const practiceKey = `${moduleId}-${sectionName}`;
    return practiceProgress[practiceKey]?.bestScore || 0;
  };

  /**
   * Gets practice progress for a specific section
   * @param {string} moduleId - Module ID
   * @param {string} sectionName - Section name
   * @returns {Object|null}
   */
  const getSectionPracticeProgress = (moduleId, sectionName) => {
    const practiceKey = `${moduleId}-${sectionName}`;
    return practiceProgress[practiceKey] || null;
  };

  // ===== Review Queue Functions =====

  /**
   * Gets count of questions due for review
   * @returns {number}
   */
  const getDueCount = () => {
    return getDueReviewCount(reviewQueue);
  };

  /**
   * Gets review statistics
   * @returns {{ dueCount: number, totalCount: number, masteredRecently: number }}
   */
  const getReviewStatistics = () => {
    return getReviewStats(reviewQueue);
  };

  return {
    completedLessons,
    practiceProgress,
    reviewQueue,
    loading,
    error,
    markLessonComplete,
    toggleLessonComplete,
    isLessonCompleted,
    getModuleProgress,
    // Practice functions (section-based)
    recordPracticeAttempt,
    hasPracticed,
    getBestScore,
    getSectionPracticeProgress,
    // Review queue functions
    getDueCount,
    getReviewStatistics
  };
};
