import { db } from '../firebase/config';
import { doc, setDoc, updateDoc, getDoc, serverTimestamp, increment } from 'firebase/firestore';

/**
 * Marks a lesson as complete for a user
 * @param {string} userId - User ID
 * @param {string} moduleId - Module ID
 * @param {number} lessonId - Lesson ID
 * @param {Object} lessonData - Lesson metadata (title, type)
 * @returns {Promise<void>}
 */
export const markLessonComplete = async (userId, moduleId, lessonId, lessonData) => {
  try {
    const lessonKey = `${moduleId}-${lessonId}`;
    const progressRef = doc(db, 'progress', userId);

    // Check if document exists
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) {
      // Nested object, NOT a dotted key: set()+merge treats dotted keys as
      // LITERAL field names (only update() splits dots into field paths), so
      // the old dotted form created a junk top-level "completedLessons.x-y"
      // field instead of the nested map every reader expects.
      await setDoc(progressRef, {
        userId,
        completedLessons: {
          [lessonKey]: {
            completed: true,
            completedAt: serverTimestamp(),
            moduleId,
            lessonId,
            lessonTitle: lessonData.title,
            lessonType: lessonData.type
          }
        },
        lastUpdated: serverTimestamp(),
        totalLessonsCompleted: 1,
        totalModulesCompleted: 0
      }, { merge: true });
    } else {
      // Update existing document
      const currentData = progressSnap.data();
      const updatedLessons = {
        ...currentData.completedLessons,
        [lessonKey]: {
          completed: true,
          completedAt: serverTimestamp(),
          moduleId,
          lessonId,
          lessonTitle: lessonData.title,
          lessonType: lessonData.type
        }
      };

      await updateDoc(progressRef, {
        completedLessons: updatedLessons,
        lastUpdated: serverTimestamp(),
        totalLessonsCompleted: increment(1)
      });
    }
  } catch (error) {
    console.error('Error marking lesson complete:', error);
    throw error;
  }
};

/**
 * Marks a lesson as incomplete for a user
 * @param {string} userId - User ID
 * @param {string} moduleId - Module ID
 * @param {number} lessonId - Lesson ID
 * @returns {Promise<void>}
 */
export const markLessonIncomplete = async (userId, moduleId, lessonId) => {
  try {
    const lessonKey = `${moduleId}-${lessonId}`;
    const progressRef = doc(db, 'progress', userId);

    // Get current progress to check if lesson was actually completed
    const progressSnap = await getDoc(progressRef);
    if (progressSnap.exists()) {
      const data = progressSnap.data();
      const lessonData = data.completedLessons?.[lessonKey];

      if (lessonData?.completed) {
        const updateData = {
          [`completedLessons.${lessonKey}`]: {
            ...lessonData,
            completed: false
          },
          lastUpdated: serverTimestamp(),
          totalLessonsCompleted: increment(-1)
        };

        // updateDoc, not setDoc+merge: only update() splits the dotted key
        // into a nested field PATH — set()+merge writes a junk literal
        // "completedLessons.x-y" top-level field and never flips the real
        // nested entry. Doc existence is already guarded above.
        await updateDoc(progressRef, updateData);
      }
    }
  } catch (error) {
    console.error('Error marking lesson incomplete:', error);
    throw error;
  }
};

/**
 * Gets user progress data
 * @param {string} userId - User ID
 * @returns {Promise<Object|null>} Progress data or null
 */
export const getProgress = async (userId) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) {
      // Create initial progress document if it doesn't exist
      const initialProgress = {
        userId,
        lastUpdated: serverTimestamp(),
        totalLessonsCompleted: 0,
        totalModulesCompleted: 0,
        completedLessons: {}
      };
      await setDoc(progressRef, initialProgress);
      return initialProgress;
    }

    return progressSnap.data();
  } catch (error) {
    console.error('Error getting progress:', error);
    throw error;
  }
};

/**
 * Calculates module completion percentage
 * @param {Object} completedLessons - Completed lessons object
 * @param {string} moduleId - Module ID
 * @param {number} totalLessons - Total lessons in module
 * @returns {number} Completion percentage (0-100)
 */
export const calculateModuleProgress = (completedLessons, moduleId, totalLessons) => {
  if (!completedLessons || totalLessons === 0) return 0;

  const completedCount = Object.keys(completedLessons).filter(key => {
    return key.startsWith(`${moduleId}-`) && completedLessons[key]?.completed;
  }).length;

  return Math.round((completedCount / totalLessons) * 100);
};
