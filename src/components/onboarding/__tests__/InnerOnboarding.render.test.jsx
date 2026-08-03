/**
 * InnerOnboarding render + flow smoke tests.
 *
 * No RTL in this repo — mount with react-dom/client + act (the
 * OnboardingFunnel.render.test.jsx convention). Covers: feeling + goal arrive
 * PRE-FILLED from the user doc, tap-to-advance questions advance (fake timers
 * for the tap delay), per-screen skip links advance without setting a value,
 * every step renders emoji-free, and finishing hands the collected profile to
 * onComplete with the expected shape.
 */

global.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import InnerOnboarding from '../InnerOnboarding';

const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const noop = () => {};

let container;
let root;

const USER = {
  firstName: 'Sam',
  targetScore: 1450,
  onboardingProfile: { answers: { feeling: 'stressed' } },
};

const mount = (props = {}) => {
  act(() => {
    root.render(
      <InnerOnboarding
        user={props.user || USER}
        onComplete={props.onComplete || noop}
      />
    );
  });
};

const flush = () => { act(() => { jest.advanceTimersByTime(250); }); };

// Click the first button whose trimmed text starts with `text`.
const clickByText = (selector, text) => {
  const el = [...container.querySelectorAll(selector)]
    .find((b) => b.textContent.trim().startsWith(text));
  if (!el) throw new Error(`no ${selector} matching "${text}"`);
  act(() => { el.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
};

beforeEach(() => {
  jest.useFakeTimers();
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  jest.useRealTimers();
});

test('opens on the feeling step with the funnel answer pre-selected', () => {
  mount();
  expect(container.textContent).toContain("where's your head at with the SAT");
  const selected = container.querySelector('.io-option.is-selected');
  expect(selected).toBeTruthy();
  expect(selected.textContent).toContain('Stressed when I think about it');
});

test('tapping feeling advances to the exam-date step', () => {
  mount();
  clickByText('.io-option', "It's genuinely weighing on me");
  flush();
  expect(container.textContent).toContain('locked in a test date');
});

test('goal step is pre-filled from the user target score', () => {
  mount();
  clickByText('.io-option', 'Confident'); flush();          // feeling -> exam date
  clickByText('.io-skip', "I haven't registered yet");         // exam date -> current score
  clickByText('.io-skip', "I haven't tested yet");       // current score -> goal
  expect(container.querySelector('.io-goal-readout').textContent).toBe('1450');
});

test('walks to the end and reports the collected profile', () => {
  const onComplete = jest.fn();
  mount({ onComplete });

  clickByText('.io-option', 'Confident'); flush();           // 0 feeling
  clickByText('.io-skip', "I haven't registered yet");          // 1 exam date (skip)
  clickByText('.io-skip', "I haven't tested yet");        // 2 current score (skip)
  clickByText('.io-cta', 'Continue');                         // 3 goal -> interlude
  clickByText('.io-cta', 'Keep going');                       // 4 interlude -> confident
  clickByText('.io-option', 'Math'); flush();                 // 5 confident = math
  clickByText('.io-option', 'Reading and Writing'); flush();  // 6 worry = rw
  clickByText('.io-option', 'Algebra'); flush();              // 7 math areas: toggle
  clickByText('.io-option', 'Geometry and trig'); flush();    //   second toggle
  clickByText('.io-cta', 'Continue');                         //   confirm set
  clickByText('.io-cta', 'Not sure yet, skip');               // 8 rw areas skipped
  clickByText('.io-chip', '4 days'); flush();                 // 9 study days
  const year = String(new Date().getFullYear() + 2);
  clickByText('.io-chip', year); flush();                     // 10 grad year
  clickByText('.io-cta', 'Take me to my check-in');           // 11 finish

  expect(onComplete).toHaveBeenCalledTimes(1);
  const payload = onComplete.mock.calls[0][0];
  expect(payload.feeling).toBe('confident');       // edited from the pre-fill
  expect(payload.targetScore).toBe(1450);
  expect(payload.confidentArea).toBe('math');
  expect(payload.worryArea).toBe('rw');
  expect(payload.weakMathAreas).toEqual(['algebra', 'geometry']);
  expect(payload.weakRWAreas).toBeUndefined();      // skipped
  expect(payload.studyDaysPerWeek).toBe(4);
  expect(payload.gradYear).toBe(new Date().getFullYear() + 2);
  expect(payload.testDate).toBeUndefined();         // skipped
  expect(payload.currentScore).toBeUndefined();     // skipped
});

test('every step renders emoji-free', () => {
  mount();
  const steps = [
    () => clickByText('.io-option', 'Confident'),
    () => clickByText('.io-skip', "I haven't registered yet"),
    () => clickByText('.io-skip', "I haven't tested yet"),
    () => clickByText('.io-cta', 'Continue'),
    () => clickByText('.io-cta', 'Keep going'),
    () => clickByText('.io-option', 'Math'),
    () => clickByText('.io-option', 'Reading and Writing'),
    () => clickByText('.io-cta', 'Not sure yet, skip'),
    () => clickByText('.io-cta', 'Not sure yet, skip'),
    () => clickByText('.io-chip', '5 days'),
    () => clickByText('.io-chip', String(new Date().getFullYear())),
  ];
  expect(container.textContent).not.toMatch(EMOJI_RE);
  for (const advance of steps) {
    advance();
    flush();
    expect(container.textContent).not.toMatch(EMOJI_RE);
  }
});
