/**
 * OnboardingFunnel render + interaction smoke tests.
 *
 * No RTL in this repo — mount with react-dom/client + act (the
 * StudyPlanDashboard.render.test.jsx convention). Covers: the name step
 * opens the flow, tapping an option advances (fake timers — the tap
 * animation delay), state persists to sessionStorage for same-visit reload-resume,
 * the build interlude auto-advances to the path reveal, every step
 * renders emoji-free, and the signup step hands buildFunnelProfile
 * output (+ the staged name) to the signup callback then clears staging.
 */

global.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import OnboardingFunnel from '../OnboardingFunnel';
import {
  FUNNEL_QUESTIONS,
  FUNNEL_STEPS,
  FUNNEL_STORAGE_KEY,
  FUNNEL_STORAGE_VERSION,
} from '../funnelConfig';

const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

const noop = () => {};

let container;
let root;

const mount = (props = {}) => {
  act(() => {
    root.render(
      <OnboardingFunnel
        signup={props.signup || jest.fn(() => Promise.resolve())}
        onExit={props.onExit || noop}
        onLogIn={props.onLogIn || noop}
        billingLive={props.billingLive ?? false}
      />
    );
  });
};

const seedStep = (stepIndex, extra = {}) => {
  window.sessionStorage.setItem(
    FUNNEL_STORAGE_KEY,
    JSON.stringify({ version: FUNNEL_STORAGE_VERSION, stepIndex, answers: {}, name: '', goal: 1400, ...extra })
  );
};

// React 18 reads inputs through the value tracker — set via the native
// setter so the change event isn't swallowed as a no-op.
const setInput = (input, value) => {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
};

beforeEach(() => {
  jest.useFakeTimers();
  window.sessionStorage.clear();
  window.scrollTo = jest.fn();
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  jest.useRealTimers();
});

test('opens on the name step and personalizes the continue button', () => {
  mount();
  expect(container.textContent).toContain('What should we call you?');
  act(() => {
    setInput(container.querySelector('.of-name-input'), 'Maya');
  });
  expect(container.querySelector('.of-cta').textContent).toContain('Maya');
});

test('continuing past the name step lands on the first question with 4 options and a chapter eyebrow', () => {
  mount();
  act(() => {
    container.querySelector('form.of-form--name').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
  expect(container.textContent).toContain(FUNNEL_QUESTIONS[0].title);
  expect(container.querySelectorAll('.of-option')).toHaveLength(4);
  expect(container.querySelector('.of-eyebrow').textContent).toContain('Your test');
});

test('tapping an option advances to the next question and stages the answer', () => {
  seedStep(1);
  mount();
  const first = container.querySelector('.of-option');
  act(() => {
    first.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  act(() => {
    jest.advanceTimersByTime(500);
  });
  expect(container.textContent).toContain(FUNNEL_QUESTIONS[1].title);
  const staged = JSON.parse(window.sessionStorage.getItem(FUNNEL_STORAGE_KEY));
  expect(staged.stepIndex).toBe(2);
  expect(staged.answers.timing).toBe(FUNNEL_QUESTIONS[0].options[0].value);
});

test('resumes from staged localStorage state (name included)', () => {
  seedStep(2, { name: 'Maya' });
  mount();
  expect(container.textContent).toContain(FUNNEL_QUESTIONS[1].title);
});

test('the build interlude checks rows in on a beat then auto-advances to the path reveal', () => {
  const buildIdx = FUNNEL_STEPS.findIndex((s) => s.type === 'build');
  seedStep(buildIdx, { name: 'Maya', answers: { timing: '2to6m' }, goal: 1450 });
  mount();
  expect(container.textContent).toContain('Assembling your plan');
  expect(container.textContent).toContain('Maya');
  expect(container.textContent).toContain('1450');
  expect(container.querySelectorAll('.of-build-line.is-done')).toHaveLength(0);
  act(() => {
    jest.advanceTimersByTime(2 * 650 + 10);
  });
  expect(container.querySelectorAll('.of-build-line.is-done')).toHaveLength(2);
  act(() => {
    jest.advanceTimersByTime(4 * 650 + 900);
  });
  expect(container.textContent).toContain('this is exactly what SEVA was built for');
});

test('back from the path step skips over the build interlude to the goal slider', () => {
  const pathIdx = FUNNEL_STEPS.findIndex((s) => s.type === 'path');
  seedStep(pathIdx);
  mount();
  act(() => {
    container.querySelector('.of-back').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(container.textContent).toContain('Set your target score.');
});

test('every step renders without throwing and without emojis', () => {
  for (let i = 0; i < FUNNEL_STEPS.length; i++) {
    seedStep(i, { answers: { feeling: 'stressed', timing: '2to6m' }, name: 'Maya' });
    const stepContainer = document.createElement('div');
    document.body.appendChild(stepContainer);
    const stepRoot = createRoot(stepContainer);
    act(() => {
      stepRoot.render(
        <OnboardingFunnel signup={noop} onExit={noop} onLogIn={noop} billingLive={false} />
      );
    });
    expect(stepContainer.textContent.length).toBeGreaterThan(0);
    expect(stepContainer.textContent).not.toMatch(EMOJI_RE);
    expect(stepContainer.textContent).not.toMatch(/acely/i);
    act(() => stepRoot.unmount());
    stepContainer.remove();
  }
});

test('back on the first step exits to the landing page', () => {
  const onExit = jest.fn();
  mount({ onExit });
  act(() => {
    container.querySelector('.of-back').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(onExit).toHaveBeenCalled();
});

test('signup step pre-fills the staged name and submits the funnel profile, clearing staging on success', async () => {
  const signup = jest.fn(() => Promise.resolve());
  const signupIndex = FUNNEL_STEPS.findIndex((s) => s.type === 'signup');
  seedStep(signupIndex, { answers: { timing: '2to6m', baseline: 'sat' }, goal: 1450, name: 'Maya' });
  mount({ signup });

  const inputs = container.querySelectorAll('.of-field input');
  expect(inputs[0].value).toBe('Maya'); // pre-filled from the name step
  act(() => {
    setInput(inputs[1], 'maya@example.com'); // email
    setInput(inputs[2], 'hunter22'); // password
  });
  const consent = container.querySelector('.of-consent input');
  act(() => {
    consent.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  await act(async () => {
    container.querySelector('form.of-form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });

  expect(signup).toHaveBeenCalledTimes(1);
  const [email, password, firstName, additionalInfo] = signup.mock.calls[0];
  expect(email).toBe('maya@example.com');
  expect(password).toBe('hunter22');
  expect(firstName).toBe('Maya');
  expect(additionalInfo.agreedToTerms).toBe(true);
  expect(additionalInfo.hasTakenSAT).toBe(true); // baseline 'sat'
  expect(additionalInfo.funnelProfile.targetScore).toBe(1450);
  expect(additionalInfo.funnelProfile.goalScale).toBe('composite');
  expect(additionalInfo.funnelProfile.onboardingProfile.answers).toEqual({ timing: '2to6m', baseline: 'sat' });
  // Staged state is consumed — a later visitor starts fresh.
  expect(window.sessionStorage.getItem(FUNNEL_STORAGE_KEY)).toBeNull();
});

test('signup without consent shows the guard error and never calls signup', async () => {
  const signup = jest.fn(() => Promise.resolve());
  const signupIndex = FUNNEL_STEPS.findIndex((s) => s.type === 'signup');
  seedStep(signupIndex);
  mount({ signup });

  await act(async () => {
    container.querySelector('form.of-form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });

  expect(signup).not.toHaveBeenCalled();
  expect(container.textContent).toContain('13 or older');
});
