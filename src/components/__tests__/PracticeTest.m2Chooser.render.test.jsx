/**
 * Module 2 difficulty is chosen ONCE, on the module-complete screen after a
 * section's Module 1, and locks when the module begins (2026-09-07). This
 * mounts the live runner at that screen and pins: the chooser shows with the
 * routing recommendation, the Continue label follows the pick, and the
 * module itself renders with no in-module switcher.
 */
/* eslint-disable testing-library/no-unnecessary-act */
jest.mock('../../firebase/config', () => ({ auth: {}, db: {} }));
jest.mock('../../services/practiceTestService', () => ({
  loadAttemptSnapshot: jest.fn(), saveDiagnosticSittingSnapshot: jest.fn(), recordPracticeTestResult: jest.fn(),
  getReadyAiDiagnostic: jest.fn(), saveAttemptSnapshot: jest.fn(), SNAPSHOT_VERSION: 1,
}));
global.IS_REACT_ACT_ENVIRONMENT = true;
if (typeof Element !== 'undefined' && !Element.prototype.scrollTo) Element.prototype.scrollTo = () => {};

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import PracticeTest from '../PracticeTest';
import { practiceTests } from '../../data/practiceTests';

// The catalog entry carries the Easy variants (module2Easy / rwModule2Easy); the bare named export does not.
const practiceTest1 = practiceTests[0];

function mount(el) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(el); });
  return { container, unmount: () => act(() => root.unmount()) };
}

const mathM1Index = practiceTest1.modules.findIndex(m => m.section === 'math');
const rwM1Index = practiceTest1.modules.findIndex(m => m.section === 'reading-writing');

/** Answers for every module up to and including `throughModule`; `mathHit` = fraction of math M1 answered correctly. */
function answersThrough(throughModule, { mathHit = 1 } = {}) {
  const answers = {};
  practiceTest1.modules.forEach((m, mi) => {
    if (mi > throughModule) return;
    m.questions.forEach((q, qi) => {
      const wrong = q.type === 'fill-in' ? '0' : (q.choices.find(c => c.id !== q.correctAnswer)?.id || 'A');
      const hit = mi === mathM1Index ? (qi / m.questions.length) < mathHit : true;
      answers[`${mi}-${qi}`] = hit ? q.correctAnswer : wrong;
    });
  });
  return answers;
}

function mountAtModuleComplete(currentModule, answers) {
  return mount(
    <PracticeTest
      test={practiceTest1}
      savedProgress={{ answers, currentModule, currentQuestion: 0, moduleCompleted: true }}
      isTimed={false}
      user={{ uid: 'u-m2', targetScore: 1300 }}
      practiceTestResults={{}}
      onBack={() => {}}
      onSaveProgress={() => {}}
    />
  );
}

const byText = (container, re) => [...container.querySelectorAll('button')].find(b => re.test(b.textContent));

describe('Module 2 chooser on the module-complete screen', () => {
  it('after Math Module 1 with a strong score: recommends Hard, lets the student pick Easy, then locks it in', () => {
    const { container, unmount } = mountAtModuleComplete(mathM1Index, answersThrough(mathM1Index, { mathHit: 1 }));
    try {
      expect(container.textContent).toContain('Choose your Module 2');
      const hard = byText(container, /^Module 2 \(Hard\)/);
      const easy = byText(container, /^Module 2 \(Easy\)/);
      expect(hard.textContent).toContain('Recommended');
      expect(easy.textContent).not.toContain('Recommended');
      expect(hard.getAttribute('aria-pressed')).toBe('true');
      expect(byText(container, /^Continue to Math Module 2 \(Hard\)/)).toBeTruthy();

      act(() => { easy.click(); });
      expect(easy.getAttribute('aria-pressed')).toBe('true');
      expect(byText(container, /^Continue to Math Module 2 \(Easy\)/)).toBeTruthy();

      act(() => { byText(container, /^Continue to Math Module 2 \(Easy\)/).click(); });
      // The module is live: a question is on screen, and there is no in-module switcher.
      expect(container.textContent).toMatch(/Question 1 of 22/);
      expect(container.textContent).not.toContain('Switch to');
      expect(container.textContent).not.toContain('Choose your Module 2');
      // The Easy variant's first question is the one on screen.
      expect(container.textContent).toContain(practiceTest1.module2Easy.questions[0].question.replace(/\$[^$]*\$/g, '').slice(0, 20).trim());
    } finally { unmount(); }
  });

  it('after Math Module 1 with a weak score: recommends Easy by default', () => {
    const { container, unmount } = mountAtModuleComplete(mathM1Index, answersThrough(mathM1Index, { mathHit: 0.3 }));
    try {
      const easy = byText(container, /^Module 2 \(Easy\)/);
      expect(easy.textContent).toContain('Recommended');
      expect(easy.getAttribute('aria-pressed')).toBe('true');
      expect(byText(container, /^Continue to Math Module 2 \(Easy\)/)).toBeTruthy();
    } finally { unmount(); }
  });

  it('after Reading and Writing Module 1: the same chooser, for the R&W variants', () => {
    const { container, unmount } = mountAtModuleComplete(rwM1Index, answersThrough(rwM1Index));
    try {
      expect(container.textContent).toContain('Choose your Module 2');
      expect(byText(container, /^Continue to Reading and Writing Module 2 \(Hard\)/)).toBeTruthy();
    } finally { unmount(); }
  });

  it('does not offer a choice after a Module 2 (nothing left to route)', () => {
    const { container, unmount } = mountAtModuleComplete(mathM1Index + 1, answersThrough(mathM1Index + 1));
    try {
      expect(container.textContent).not.toContain('Choose your Module 2');
    } finally { unmount(); }
  });
});
