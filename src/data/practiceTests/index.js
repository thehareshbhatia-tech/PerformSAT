// Practice Tests Index
// Export all practice tests for use in the app

import { practiceTest1 } from './practiceTest1';
import { practiceTest2 } from './practiceTest2';
import { practiceTest3 } from './practiceTest3';

export const practiceTests = [
  practiceTest1,
  practiceTest2,
  practiceTest3
];

export const getPracticeTestById = (id) => {
  return practiceTests.find(test => test.id === id);
};

export const getAllPracticeTests = () => {
  return practiceTests;
};

export { practiceTest1, practiceTest2, practiceTest3 };
