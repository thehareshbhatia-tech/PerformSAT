import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
import { markLessonComplete as markComplete, markLessonIncomplete } from '../services/progressService';

/**
 * Hook for managing user progress with real-time Firestore sync
 * @param {string} userId - User ID
 * @returns {Object} Progress state and functions
 */
export const useProgress = (userId) => {
  const [completedLessons, setCompletedLessons] = useState({});
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
        } else {
          setCompletedLessons({});
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

  return {
    completedLessons,
    loading,
    error,
    markLessonComplete,
    toggleLessonComplete,
    isLessonCompleted,
    getModuleProgress
  };
};
