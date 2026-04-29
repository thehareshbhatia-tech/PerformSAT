// Practice Tests Index
// Export all practice tests for use in the app

import { practiceTest1 as practiceTest1Math } from './practiceTest1';
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
import { practiceTest1RW } from './practiceTest1RW';

// Test 1 = full-length SAT: 2 R&W modules followed by 2 Math modules.
// Each module carries its own `section` so the test session UI can switch
// between R&W (passage-left split, annotate tools) and Math (calculator,
// reference sheet) appropriately. Modules are numbered sequentially 1..4
// across the merged test.
const rwModules = practiceTest1RW.modules.map((m, idx) => ({
  ...m,
  section: 'reading-writing',
  title: `Module ${idx + 1}`,
}));
const mathOffset = rwModules.length;
const mathModules = practiceTest1Math.modules.map((m, idx) => ({
  ...m,
  section: 'math',
  title: `Module ${mathOffset + idx + 1}`,
}));

export const practiceTest1 = {
  id: 'practice-test-1',
  title: 'Practice Test 1',
  description: 'Full-length digital SAT practice test — Reading & Writing followed by Math.',
  totalQuestions: (practiceTest1RW.totalQuestions || 54) + (practiceTest1Math.totalQuestions || 44),
  timePerModule: 32, // R&W cadence; Math modules carry their own 35-min timeLimit
  modules: [...rwModules, ...mathModules],
};

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

export { practiceTest2, practiceTest3, practiceTest4, practiceTest5, practiceTest6, practiceTest7, practiceTest8, practiceTest9, practiceTest10, practiceTest11, practiceTest12, practiceTest1RW };
