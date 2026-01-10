import { useState, useEffect, useCallback } from 'react';
import {
  getUserProgress,
  markLessonComplete as markComplete,
  markLessonIncomplete,
  getUserStats,
} from '../services/progressService';

/**
 * Custom hook for managing user progress
 */
export const useProgress = (userId) => {
  const [completedLessons, setCompletedLessons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user progress from Supabase
  const loadProgress = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error: progressError } = await getUserProgress(userId);

    if (progressError) {
      setError(progressError);
      setLoading(false);
      return;
    }

    // Convert progress data to completedLessons format
    const progressMap = {};
    data?.forEach((item) => {
      if (item.completed) {
        progressMap[`${item.module_id}-${item.lesson_id}`] = true;
      }
    });

    setCompletedLessons(progressMap);
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // Mark lesson as complete
  const markLessonComplete = async (moduleId, lessonId) => {
    if (!userId) {
      console.warn('Cannot mark lesson complete: user not authenticated');
      return { success: false, error: 'User not authenticated' };
    }

    // Optimistically update UI
    setCompletedLessons((prev) => ({
      ...prev,
      [`${moduleId}-${lessonId}`]: true,
    }));

    const { error: markError } = await markComplete(userId, moduleId, lessonId);

    if (markError) {
      // Revert optimistic update on error
      setCompletedLessons((prev) => {
        const newState = { ...prev };
        delete newState[`${moduleId}-${lessonId}`];
        return newState;
      });
      setError(markError);
      return { success: false, error: markError };
    }

    return { success: true };
  };

  // Mark lesson as incomplete
  const unmarkLessonComplete = async (moduleId, lessonId) => {
    if (!userId) {
      console.warn('Cannot unmark lesson: user not authenticated');
      return { success: false, error: 'User not authenticated' };
    }

    // Optimistically update UI
    setCompletedLessons((prev) => {
      const newState = { ...prev };
      delete newState[`${moduleId}-${lessonId}`];
      return newState;
    });

    const { error: unmarkError } = await markLessonIncomplete(userId, moduleId, lessonId);

    if (unmarkError) {
      // Revert optimistic update on error
      setCompletedLessons((prev) => ({
        ...prev,
        [`${moduleId}-${lessonId}`]: true,
      }));
      setError(unmarkError);
      return { success: false, error: unmarkError };
    }

    return { success: true };
  };

  // Calculate module progress
  const getModuleProgress = (moduleId, lessons) => {
    if (!lessons || lessons.length === 0) return 0;
    const completed = lessons.filter((l) => completedLessons[`${moduleId}-${l.id}`]).length;
    return Math.round((completed / lessons.length) * 100);
  };

  // Get user statistics
  const getStats = async () => {
    if (!userId) {
      return { stats: null, error: 'User not authenticated' };
    }

    const { stats, error: statsError } = await getUserStats(userId);

    if (statsError) {
      setError(statsError);
      return { stats: null, error: statsError };
    }

    return { stats, error: null };
  };

  return {
    completedLessons,
    loading,
    error,
    markLessonComplete,
    unmarkLessonComplete,
    getModuleProgress,
    getStats,
    refreshProgress: loadProgress,
  };
};
