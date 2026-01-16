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
