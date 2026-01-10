import { supabase } from '../supabaseClient';

/**
 * Mark a lesson as completed for the current user
 * @param {string} userId - User's ID
 * @param {string} moduleId - Module ID
 * @param {string} lessonId - Lesson ID
 * @returns {Object} - { data, error }
 */
export const markLessonComplete = async (userId, moduleId, lessonId) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert(
        {
          user_id: userId,
          module_id: moduleId,
          lesson_id: lessonId,
          completed: true,
          completed_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id,module_id,lesson_id',
        }
      )
      .select();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

/**
 * Mark a lesson as incomplete for the current user
 * @param {string} userId - User's ID
 * @param {string} moduleId - Module ID
 * @param {string} lessonId - Lesson ID
 * @returns {Object} - { data, error }
 */
export const markLessonIncomplete = async (userId, moduleId, lessonId) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .upsert(
        {
          user_id: userId,
          module_id: moduleId,
          lesson_id: lessonId,
          completed: false,
        },
        {
          onConflict: 'user_id,module_id,lesson_id',
        }
      )
      .select();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

/**
 * Get all progress for a user
 * @param {string} userId - User's ID
 * @returns {Object} - { data, error }
 */
export const getUserProgress = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

/**
 * Get progress for a specific module
 * @param {string} userId - User's ID
 * @param {string} moduleId - Module ID
 * @returns {Object} - { data, error }
 */
export const getModuleProgress = async (userId, moduleId) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('module_id', moduleId);

    if (error) {
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

/**
 * Check if a specific lesson is completed
 * @param {string} userId - User's ID
 * @param {string} moduleId - Module ID
 * @param {string} lessonId - Lesson ID
 * @returns {Object} - { completed, error }
 */
export const isLessonCompleted = async (userId, moduleId, lessonId) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('completed')
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .eq('lesson_id', lessonId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      return { completed: false, error: error.message };
    }

    return { completed: data?.completed || false, error: null };
  } catch (error) {
    return { completed: false, error: error.message };
  }
};

/**
 * Delete a user's progress entry
 * @param {string} userId - User's ID
 * @param {string} moduleId - Module ID
 * @param {string} lessonId - Lesson ID
 * @returns {Object} - { error }
 */
export const deleteProgress = async (userId, moduleId, lessonId) => {
  try {
    const { error } = await supabase
      .from('user_progress')
      .delete()
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .eq('lesson_id', lessonId);

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

/**
 * Get completion statistics for a user
 * @param {string} userId - User's ID
 * @returns {Object} - { stats, error }
 */
export const getUserStats = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('module_id, completed')
      .eq('user_id', userId);

    if (error) {
      return { stats: null, error: error.message };
    }

    // Calculate statistics
    const totalLessons = data.length;
    const completedLessons = data.filter(item => item.completed).length;
    const moduleStats = data.reduce((acc, item) => {
      if (!acc[item.module_id]) {
        acc[item.module_id] = { total: 0, completed: 0 };
      }
      acc[item.module_id].total++;
      if (item.completed) {
        acc[item.module_id].completed++;
      }
      return acc;
    }, {});

    return {
      stats: {
        totalLessons,
        completedLessons,
        completionPercentage: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
        moduleStats,
      },
      error: null,
    };
  } catch (error) {
    return { stats: null, error: error.message };
  }
};
