// Practice Tests Index
// Export all practice tests for use in the app

import { practiceTest1 } from './practiceTest1';
import { practiceTest2 } from './practiceTest2';
import { practiceTest3 } from './practiceTest3';
import { practiceTest4 } from './practiceTest4';
import { practiceTest5 } from './practiceTest5';
import { practiceTest6 } from './practiceTest6';
import { practiceTest7 } from './practiceTest7';
import { practiceTest8 } from './practiceTest8';
import { practiceTest9 } from './practiceTest9';
import { practiceTest10 } from './practiceTest10';
import { practiceTest11 } from './practiceTest11';
import { practiceTest12 } from './practiceTest12';

export const practiceTests = [
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
  practiceTest11,
  practiceTest12
];

export const getPracticeTestById = (id) => {
  return practiceTests.find(test => test.id === id);
};

export const getAllPracticeTests = () => {
  return practiceTests;
};

export { practiceTest1, practiceTest2, practiceTest3, practiceTest4, practiceTest5, practiceTest6, practiceTest7, practiceTest8, practiceTest9, practiceTest10, practiceTest11, practiceTest12 };
