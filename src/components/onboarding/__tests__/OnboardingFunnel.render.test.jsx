/**
 * OnboardingFunnel render + interaction smoke tests.
 *
 * No RTL in this repo — mount with react-dom/client + act (the
 * StudyPlanDashboard.render.test.jsx convention). Covers: the first
 * question renders, tapping an option advances (fake timers — the tap
 * animation delay), state persists to localStorage for reload-resume,
 * every step renders emoji-free, and the signup step hands
 * buildFunnelProfile output to the signup callback then clears staging.
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
  FUNNEL_VERSION,
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
  window.localStorage.setItem(
    FUNNEL_STORAGE_KEY,
    JSON.stringify({ version: FUNNEL_VERSION, stepIndex, answers: {}, goal: 1400, ...extra })
  );
};

beforeEach(() => {
  jest.useFakeTimers();
  window.localStorage.clear();
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

test('renders the first question with 4 tappable options', () => {
  mount();
  expect(container.textContent).toContain(FUNNEL_QUESTIONS[0].title);
  const options = container.querySelectorAll('.of-option');
  expect(options).toHaveLength(4);
});

test('tapping an option advances to the next question and stages the answer', () => {
  mount();
  const first = container.querySelector('.of-option');
  act(() => {
    first.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  act(() => {
    jest.advanceTimersByTime(400);
  });
  expect(container.textContent).toContain(FUNNEL_QUESTIONS[1].title);
  const staged = JSON.parse(window.localStorage.getItem(FUNNEL_STORAGE_KEY));
  expect(staged.stepIndex).toBe(1);
  expect(staged.answers.timing).toBe(FUNNEL_QUESTIONS[0].options[0].value);
});

test('resumes from staged localStorage state', () => {
  seedStep(1);
  mount();
  expect(container.textContent).toContain(FUNNEL_QUESTIONS[1].title);
});

test('every step renders without throwing and without emojis', () => {
  for (let i = 0; i < FUNNEL_STEPS.length; i++) {
    seedStep(i, { answers: { feeling: 'stressed' } });
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

test('signup step submits the funnel profile and clears staging on success', async () => {
  const signup = jest.fn(() => Promise.resolve());
  const signupIndex = FUNNEL_STEPS.findIndex((s) => s.type === 'signup');
  seedStep(signupIndex, { answers: { timing: '2to6m', baseline: 'sat' }, goal: 1450 });
  mount({ signup });

  const setInput = (input, value) => {
    // React 18 reads inputs through the value tracker — set via the native
    // setter so the change event isn't swallowed as a no-op.
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const inputs = container.querySelectorAll('.of-field input');
  act(() => {
    setInput(inputs[0], 'Ana'); // first name
    setInput(inputs[1], 'ana@example.com'); // email
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
  expect(email).toBe('ana@example.com');
  expect(password).toBe('hunter22');
  expect(firstName).toBe('Ana');
  expect(additionalInfo.agreedToTerms).toBe(true);
  expect(additionalInfo.hasTakenSAT).toBe(true); // baseline 'sat'
  expect(additionalInfo.funnelProfile.targetScore).toBe(1450);
  expect(additionalInfo.funnelProfile.goalScale).toBe('composite');
  expect(additionalInfo.funnelProfile.onboardingProfile.answers).toEqual({ timing: '2to6m', baseline: 'sat' });
  // Staged state is consumed — a later visitor starts fresh.
  expect(window.localStorage.getItem(FUNNEL_STORAGE_KEY)).toBeNull();
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
