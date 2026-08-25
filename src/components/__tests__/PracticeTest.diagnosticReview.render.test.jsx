/**
 * The review runner on a REBUILT diagnostic sitting (Home → View your
 * diagnosis → "Review every question"). The sitting comes from the exact
 * persistence round trip (buildQuestionsSnapshot → rebuildSittingTest) and
 * mounts PracticeTest the way App does for past-results review. Guards the
 * path no live account could reach yet (records predate the snapshot).
 */
jest.mock('../../firebase/config', () => ({ auth: {}, db: {} }));
jest.mock('../../services/practiceTestService', () => ({
  loadAttemptSnapshot: jest.fn(), saveDiagnosticSittingSnapshot: jest.fn(), recordPracticeTestResult: jest.fn(),
  getReadyAiDiagnostic: jest.fn(), saveAttemptSnapshot: jest.fn(), SNAPSHOT_VERSION: 1,
}));
global.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import PracticeTest from '../PracticeTest';
import { buildDiagnosticTest } from '../../services/miniDiagnostic/buildDiagnosticTest';
import { buildQuestionsSnapshot } from '../../services/miniDiagnostic/finishMiniDiagnostic';
import { rebuildSittingTest } from '../../services/diagnosticSittingLoader';

function mount(el) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(el); });
  return { container, unmount: () => act(() => root.unmount()) };
}

it('mounts the review runner on a rebuilt diagnostic sitting without throwing, for every module', async () => {
  const { test } = await buildDiagnosticTest({ userId: 'u-rev', attemptId: 'rev-1' });
  const answers = {};
  test.modules.forEach((m, mi) => m.questions.forEach((q, qi) => {
    if (qi % 4 !== 3) answers[`${mi}-${qi}`] = qi % 2 ? q.correctAnswer : (q.choices?.find((c) => c.id !== q.correctAnswer)?.id || 'A');
  }));
  const rebuilt = rebuildSittingTest({ isDiagnostic: true, testId: 'mini-diagnostic-v1', questionsSnapshot: buildQuestionsSnapshot(test), answers });
  expect(rebuilt.modules).toHaveLength(4);
  const errors = [];
  const origError = console.error;
  console.error = (...args) => { errors.push(args.map(String).join(' ')); };
  try {
    for (let mod = 0; mod < rebuilt.modules.length; mod += 1) {
      const { container, unmount } = mount(
        <PracticeTest
          test={rebuilt}
          savedProgress={{ answers }}
          initialReviewModule={mod}
          isTimed={false}
          user={{ uid: 'u-rev', targetScore: 1300 }}
          practiceTestResults={{}}
          reviewSnapshotMissing={false}
          reviewAttemptId="rev-1"
          onBack={() => {}}
        />
      );
      // The runner renders the module's questions in review mode.
      expect(container.textContent.length).toBeGreaterThan(200);
      unmount();
    }
  } finally {
    console.error = origError;
  }
  // Test-env noise only: the stubbed Firestore db makes the embedded tutor's
  // session loaders reject (they're fire-and-forget in the runner).
  const real = errors.filter((e) => !/act\(|ReactDOMTestUtils|Not implemented: HTMLCanvasElement|scrollIntoView|matchMedia|Failed to load (session|learning memory|recent sessions)/i.test(e));
  expect(real).toEqual([]);
});
