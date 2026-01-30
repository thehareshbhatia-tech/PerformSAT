// useDiagramValidation.js - Hook for running diagram validation on startup
// BULLETPROOF SAT Diagram System - Development-time validation

import { useEffect, useState } from 'react';
import { runStartupValidation } from '../components/graphs';

// Import all practice tests for validation
import practiceTest1 from '../data/practiceTests/practiceTest1';
import practiceTest2 from '../data/practiceTests/practiceTest2';
import practiceTest3 from '../data/practiceTests/practiceTest3';
import practiceTest4 from '../data/practiceTests/practiceTest4';
import practiceTest5 from '../data/practiceTests/practiceTest5';
import practiceTest6 from '../data/practiceTests/practiceTest6';
import practiceTest7 from '../data/practiceTests/practiceTest7';
import practiceTest8 from '../data/practiceTests/practiceTest8';
import practiceTest9 from '../data/practiceTests/practiceTest9';
import practiceTest10 from '../data/practiceTests/practiceTest10';

const allPracticeTests = [
  practiceTest1,
  practiceTest2,
  practiceTest3,
  practiceTest4,
  practiceTest5,
  practiceTest6,
  practiceTest7,
  practiceTest8,
  practiceTest9,
  practiceTest10,
];

/**
 * Hook to run diagram validation on component mount
 * Only runs in development mode
 */
export function useDiagramValidation() {
  const [validationResult, setValidationResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    setIsValidating(true);

    // Run validation
    const isValid = runStartupValidation(allPracticeTests);

    setValidationResult({
      isValid,
      timestamp: new Date().toISOString(),
    });

    setIsValidating(false);
  }, []);

  return {
    validationResult,
    isValidating,
    isValid: validationResult?.isValid ?? true,
  };
}

/**
 * Run validation once (can be called manually)
 */
export function runValidation() {
  if (process.env.NODE_ENV !== 'development') {
    console.log('Diagram validation is only available in development mode');
    return true;
  }

  return runStartupValidation(allPracticeTests);
}

export default useDiagramValidation;
