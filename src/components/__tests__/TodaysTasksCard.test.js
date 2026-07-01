/**
 * TodaysTasksCard — pure-helper tests + activity-row wiring render tests.
 *
 * The component is a thin presentation layer over `getTodaySlice` +
 * `getSessionAdherence`, both independently tested in their own
 * service-level test files. Pure logic (`pickStartableActivity`) is tested
 * directly; the CTA wiring for test/review-type rows (which have no
 * moduleId/skillId route) is covered with react-dom + act mounts per the
 * StudyPlanDashboard.render.test.jsx convention (no RTL in this repo).
 */

// react-dom 18 concurrent act() opt-in (silences the act-environment warning).
global.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act as reactAct } from 'react-dom/test-utils';
import TodaysTasksCard, { pickStartableActivity } from '../TodaysTasksCard';

const act = (overrides = {}) => ({
  type: 'practice',
  activityType: 'practiceSection',
  title: 'Practice: Linear Equations',
  moduleId: 'linear-equations',
  duration: 20,
  ...overrides,
});

describe('pickStartableActivity', () => {
  it('returns null for empty input', () => {
    expect(pickStartableActivity([])).toBeNull();
    expect(pickStartableActivity(null)).toBeNull();
    expect(pickStartableActivity(undefined)).toBeNull();
  });

  it('returns null for non-array input', () => {
    expect(pickStartableActivity('nope')).toBeNull();
    expect(pickStartableActivity({})).toBeNull();
  });

  it('returns the first activity when all activities have a moduleId', () => {
    const a1 = act({ moduleId: 'first' });
    const a2 = act({ moduleId: 'second' });
    expect(pickStartableActivity([a1, a2])).toBe(a1);
  });

  it('skips strategy-only activities (no moduleId) when a startable one follows', () => {
    const strategy = act({ activityType: 'strategyDrill', moduleId: undefined, title: 'Trap drill' });
    const startable = act({ moduleId: 'percents', title: 'Practice: Percents' });
    expect(pickStartableActivity([strategy, startable])).toBe(startable);
  });

  it('falls back to the first activity when EVERY activity is strategy-only (FM-13)', () => {
    // Failure mode #13: silent-fail when first activity has no moduleId.
    // We always render a CTA so the user has something to click; the actual
    // routing handler decides what to do with strategy-only activities.
    const strategyA = act({ activityType: 'strategyDrill', moduleId: undefined, title: 'A' });
    const strategyB = act({ activityType: 'strategyDrill', moduleId: undefined, title: 'B' });
    const result = pickStartableActivity([strategyA, strategyB]);
    expect(result).toBe(strategyA);
  });

  it('handles falsy entries gracefully', () => {
    const a = act({ moduleId: 'real' });
    // null / undefined entries don't crash the find.
    expect(pickStartableActivity([null, undefined, a])).toBe(a);
  });
});

describe('ActivityRow wiring — no permanently-disabled Start buttons', () => {
  function mountCard(props) {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    reactAct(() => {
      root.render(<TodaysTasksCard {...props} />);
    });
    const teardown = () => {
      reactAct(() => root.unmount());
      container.remove();
    };
    return { container, teardown };
  }

  const click = (el) => reactAct(() => {
    el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  it('a test-type activity renders an ENABLED button that fires the test callback', () => {
    // Regression: type:'test' rows (incl. the "Take Practice Test 2" unlock
    // checkpoint) had no moduleId/skillId route and rendered a dead,
    // disabled Start button.
    const onTakeTest = jest.fn();
    const onStartActivity = jest.fn();
    const slice = {
      kind: 'ready',
      day: 'Saturday',
      weekNumber: 2,
      activities: [{
        type: 'test',
        activityType: 'practiceTest',
        title: 'Take Practice Test 2',
        duration: 134,
        weekIndex: 1,
        activityIndex: 0,
      }],
      completedToday: [],
    };
    const { container, teardown } = mountCard({ slice, onTakeTest, onStartActivity });
    const btn = Array.from(container.querySelectorAll('button'))
      .find((b) => /Start test/.test(b.textContent));
    expect(btn).toBeTruthy();
    expect(btn.disabled).toBe(false);
    click(btn);
    expect(onTakeTest).toHaveBeenCalledTimes(1);
    expect(onStartActivity).not.toHaveBeenCalled();
    teardown();
  });

  it('a review-type activity gets a Mark done button when a completion handler is wired', () => {
    const onCompleteActivity = jest.fn();
    const slice = {
      kind: 'ready',
      day: 'Wednesday',
      weekNumber: 1,
      activities: [{
        type: 'review',
        activityType: 'reviewMistakes',
        title: 'Review Your Missed Questions',
        duration: 30,
        weekIndex: 0,
        activityIndex: 2,
      }],
      completedToday: [],
    };
    const { container, teardown } = mountCard({ slice, onCompleteActivity });
    const markDone = Array.from(container.querySelectorAll('button'))
      .find((b) => /Mark done/.test(b.textContent));
    expect(markDone).toBeTruthy();
    click(markDone);
    expect(onCompleteActivity).toHaveBeenCalledWith(0, 2);
    // And no disabled Start button is left anywhere on the card.
    const deadStart = Array.from(container.querySelectorAll('button'))
      .find((b) => /Start/.test(b.textContent) && b.disabled);
    expect(deadStart).toBeUndefined();
    teardown();
  });

  it('practice rows still route through onStartActivity (unchanged)', () => {
    const onStartActivity = jest.fn();
    const onTakeTest = jest.fn();
    const activity = {
      type: 'practice',
      activityType: 'practiceSection',
      title: 'Practice: Slope',
      skillId: 'slope-intercept-form',
      duration: 20,
      weekIndex: 0,
      activityIndex: 0,
    };
    const slice = {
      kind: 'ready',
      day: 'Wednesday',
      weekNumber: 1,
      activities: [activity],
      completedToday: [],
    };
    const { container, teardown } = mountCard({ slice, onStartActivity, onTakeTest });
    const btn = Array.from(container.querySelectorAll('button'))
      .find((b) => /Start/.test(b.textContent));
    expect(btn.disabled).toBe(false);
    click(btn);
    expect(onStartActivity).toHaveBeenCalledTimes(1);
    expect(onStartActivity.mock.calls[0][0].skillId).toBe('slope-intercept-form');
    expect(onTakeTest).not.toHaveBeenCalled();
    teardown();
  });
});
