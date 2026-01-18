import { linearEquationsQuestions } from './linearEquations';
import { circlesQuestions } from './circles';
import { dimensionalAnalysisQuestions } from './dimensionalAnalysis';
import { equivalentExpressionsQuestions } from './equivalentExpressions';
import { exponentsQuestions } from './exponents';
import { functionsQuestions } from './functions';
import { percentsQuestions } from './percents';
import { quadraticsQuestions } from './quadratics';
import { radiansDegreesQuestions } from './radiansDegrees';
import { statisticsQuestions } from './statistics';
import { systemsQuestions } from './systems';
import { transformationsQuestions } from './transformations';
import { trianglesQuestions } from './triangles';
import { volumeQuestions } from './volume';

// Practice questions organized by module ID
// Each module maps SECTION NAMES to arrays of 5 questions each

export const allQuestions = {
  'linear-equations': linearEquationsQuestions,
  'circles': circlesQuestions,
  'dimensional-analysis': dimensionalAnalysisQuestions,
  'equivalent-expressions': equivalentExpressionsQuestions,
  'exponents': exponentsQuestions,
  'functions': functionsQuestions,
  'percents': percentsQuestions,
  'quadratics': quadraticsQuestions,
  'radians-degrees': radiansDegreesQuestions,
  'statistics': statisticsQuestions,
  'systems': systemsQuestions,
  'transformations': transformationsQuestions,
  'triangles': trianglesQuestions,
  'volume': volumeQuestions,
};

// Helper function to get questions for a specific section
export const getQuestionsForSection = (moduleId, sectionName) => {
  const moduleQuestions = allQuestions[moduleId];
  if (!moduleQuestions) return [];
  return moduleQuestions[sectionName] || [];
};

// Helper function to check if a section has practice questions
export const hasQuestionsForSection = (moduleId, sectionName) => {
  const questions = getQuestionsForSection(moduleId, sectionName);
  return questions.length > 0;
};

// Get all sections that have questions for a module
export const getSectionsWithQuestions = (moduleId) => {
  const moduleQuestions = allQuestions[moduleId];
  if (!moduleQuestions) return [];
  return Object.keys(moduleQuestions);
};

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get questions filtered by difficulty
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @param {string} difficulty - 'easy' | 'medium' | 'hard'
 * @returns {Array} Filtered questions
 */
export const getQuestionsByDifficulty = (moduleId, sectionName, difficulty) => {
  const questions = getQuestionsForSection(moduleId, sectionName);
  return questions.filter(q => q.difficulty === difficulty);
};

/**
 * Get random subset of questions with optional filtering
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @param {number} count - Number of questions to return (default: all)
 * @param {Object} options - { excludeIds: [], difficulty: 'easy'|'medium'|'hard'|null, shuffle: true }
 * @returns {Array} Random subset of questions
 */
export const getRandomQuestions = (moduleId, sectionName, count = null, options = {}) => {
  const { excludeIds = [], difficulty = null, shuffle = true } = options;

  let questions = getQuestionsForSection(moduleId, sectionName);

  // Filter by difficulty if specified
  if (difficulty) {
    questions = questions.filter(q => q.difficulty === difficulty);
  }

  // Exclude specific question IDs
  if (excludeIds.length > 0) {
    questions = questions.filter(q => !excludeIds.includes(q.id));
  }

  // Shuffle if requested
  if (shuffle) {
    questions = shuffleArray(questions);
  }

  // Return requested count or all
  return count ? questions.slice(0, count) : questions;
};

/**
 * Get a balanced set of questions across difficulties for adaptive mode
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @param {number} count - Total questions to return
 * @returns {Array} Mixed difficulty questions, shuffled
 */
export const getAdaptiveQuestionSet = (moduleId, sectionName, count = 5) => {
  const easy = getQuestionsByDifficulty(moduleId, sectionName, 'easy');
  const medium = getQuestionsByDifficulty(moduleId, sectionName, 'medium');
  const hard = getQuestionsByDifficulty(moduleId, sectionName, 'hard');

  // Start with balanced distribution, favor medium
  const easyCount = Math.ceil(count * 0.3);
  const hardCount = Math.ceil(count * 0.2);
  const mediumCount = count - easyCount - hardCount;

  const selected = [
    ...shuffleArray(easy).slice(0, easyCount),
    ...shuffleArray(medium).slice(0, mediumCount),
    ...shuffleArray(hard).slice(0, hardCount)
  ];

  // Shuffle the combined set so difficulties are mixed
  return shuffleArray(selected);
};

/**
 * Get the next question based on adaptive difficulty
 * @param {string} moduleId - Module ID
 * @param {string} sectionName - Section name
 * @param {string} targetDifficulty - Difficulty level to fetch
 * @param {Array} excludeIds - Question IDs to exclude (already answered)
 * @returns {Object|null} Next question or null if none available
 */
export const getNextAdaptiveQuestion = (moduleId, sectionName, targetDifficulty, excludeIds = []) => {
  // Try to get a question at the target difficulty
  let questions = getQuestionsByDifficulty(moduleId, sectionName, targetDifficulty)
    .filter(q => !excludeIds.includes(q.id));

  // If no questions at target difficulty, try adjacent difficulties
  if (questions.length === 0) {
    const fallbackOrder = targetDifficulty === 'hard'
      ? ['medium', 'easy']
      : targetDifficulty === 'easy'
        ? ['medium', 'hard']
        : ['easy', 'hard'];

    for (const fallback of fallbackOrder) {
      questions = getQuestionsByDifficulty(moduleId, sectionName, fallback)
        .filter(q => !excludeIds.includes(q.id));
      if (questions.length > 0) break;
    }
  }

  if (questions.length === 0) return null;

  // Return a random question from available ones
  return questions[Math.floor(Math.random() * questions.length)];
};
