import { db } from '../firebase/config';
import { doc, setDoc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore';

/**
 * Records a practice attempt for a section
 * Now uses section-based keys (e.g., "linear-equations-Deriving Equations")
 * @param {string} userId - User ID
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name (e.g., "Deriving Equations")
 * @param {Object} answers - Object mapping question IDs to { selected, correct }
 * @param {number} score - Number of correct answers
 * @param {number} totalQuestions - Total number of questions
 * @returns {Promise<void>}
 */
export const recordPracticeAttempt = async (userId, moduleId, sectionName, answers, score, totalQuestions) => {
  try {
    const practiceKey = `${moduleId}-${sectionName}`;
    const progressRef = doc(db, 'progress', userId);

    // Get current progress
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) {
      // Create initial document with practice progress
      await setDoc(progressRef, {
        userId,
        completedLessons: {},
        practiceProgress: {
          [practiceKey]: {
            bestScore: score,
            totalAttempts: 1,
            lastAttemptAt: serverTimestamp(),
            lastAnswers: answers,
            sectionName: sectionName
          }
        },
        lastUpdated: serverTimestamp(),
        totalLessonsCompleted: 0,
        totalModulesCompleted: 0
      });
    } else {
      const currentData = progressSnap.data();
      const existingProgress = currentData.practiceProgress?.[practiceKey];

      const updatedProgress = {
        bestScore: existingProgress ? Math.max(existingProgress.bestScore, score) : score,
        totalAttempts: existingProgress ? existingProgress.totalAttempts + 1 : 1,
        lastAttemptAt: serverTimestamp(),
        lastAnswers: answers,
        sectionName: sectionName
      };

      await updateDoc(progressRef, {
        [`practiceProgress.${practiceKey}`]: updatedProgress,
        lastUpdated: serverTimestamp()
      });
    }
  } catch (error) {
    console.error('Error recording practice attempt:', error);
    throw error;
  }
};

/**
 * Gets practice progress for a specific section
 * @param {Object} practiceProgress - Practice progress object from user data
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @returns {Object|null} Practice progress for the section or null
 */
export const getSectionPracticeProgress = (practiceProgress, moduleId, sectionName) => {
  if (!practiceProgress) return null;
  const practiceKey = `${moduleId}-${sectionName}`;
  return practiceProgress[practiceKey] || null;
};

/**
 * Checks if a section has been practiced
 * @param {Object} practiceProgress - Practice progress object
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @returns {boolean}
 */
export const hasSectionPracticed = (practiceProgress, moduleId, sectionName) => {
  return getSectionPracticeProgress(practiceProgress, moduleId, sectionName) !== null;
};

/**
 * Gets the best score for a section
 * @param {Object} practiceProgress - Practice progress object
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @returns {number} Best score or 0
 */
export const getSectionBestScore = (practiceProgress, moduleId, sectionName) => {
  const progress = getSectionPracticeProgress(practiceProgress, moduleId, sectionName);
  return progress?.bestScore || 0;
};
