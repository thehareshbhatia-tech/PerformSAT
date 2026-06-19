/**
 * StudyPlanDashboard render smoke test (2026-06 redesign).
 *
 * No RTL in this repo, so we mount with react-dom + act directly. The goal is
 * coverage that the redesigned component RENDERS with realistic data without
 * throwing — exercising both the Today branch (module cards with rounds,
 * variant='default') and the Weekly branch (day-row timeline, variant='inline'
 * which defaults activeView to weeklyView). This guards the new buildPlanModule
 * / weekDayRows derivations against runtime regressions.
 */
// StudyPlanDashboard transitively imports firebase/config (via the daily
// review engine). Stub it before that import runs (per setupTests convention).
jest.mock('../../firebase/config', () => ({ auth: {}, db: {} }));

// react-dom 18 concurrent act() opt-in (silences the act-environment warning).
global.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import StudyPlanDashboard from '../StudyPlanDashboard';

const todayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];

const STUDY_PLAN = {
  summary: { headline: 'Build algebra fluency', diagnosis: 'Linear functions cost you the most points.' },
  deltaFromPrevious: 'We moved Geometry up after your last test.',
  persistentWeaknessStrategy: 'Slope keeps slipping — try graphing first, then solving.',
  weaknesses: [
    { skillId: 'slope-intercept-form', skill: 'Slope-intercept form', section: 'math', domain: 'algebra', accuracy: 42, errorType: 'Conceptual gap', missedPatterns: ['write-equation-from-two-points', 'interpret-slope'] },
    { skillId: 'systems-of-equations', skill: 'Systems of equations', section: 'math', domain: 'algebra', accuracy: 61, missedPatterns: ['solve-system-substitution'] },
    { skillId: 'central-ideas', skill: 'Central ideas', section: 'rw', domain: 'information-and-ideas', accuracy: 55, missedPatterns: [] },
  ],
  weeks: [
    {
      weekNumber: 1,
      title: 'Week 1: algebra core',
      activities: [
        { type: 'practice', day: todayName, title: 'Slope-intercept drill', completed: false, skillId: 'slope-intercept-form', section: 'math', duration: 25 },
        { type: 'strategy', day: 'Monday', title: 'Trap-answer recognition', completed: false, tips: ['Watch the sign on the slope.'] },
        { type: 'practice', day: 'Friday', title: 'Mixed math set', completed: true, skillId: 'systems-of-equations', section: 'math' },
      ],
    },
    {
      weekNumber: 2,
      title: 'Week 2: reading',
      activities: [
        { type: 'practice', day: 'Tuesday', title: 'Central ideas', completed: false, skillId: 'central-ideas', section: 'rw' },
      ],
    },
  ],
};

const USER = { firstName: 'Demo', targetScore: 700, testDate: '2026-08-15' };
const PRACTICE_TEST_RESULTS = {
  t1: { bestScaledScore: 1180, lastAttemptAt: new Date('2026-06-01').toISOString(), isMultiSection: true },
  t2: { bestScaledScore: 1240, lastAttemptAt: new Date('2026-06-10').toISOString(), isMultiSection: true },
};
const SKILL_PROGRESS = {
  'slope-intercept-form': { attempts: 6, correct: 3, mastery: 50 },
  'systems-of-equations': { attempts: 8, correct: 7, mastery: 88 },
};

function renderWith(props) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(
      <StudyPlanDashboard
        studyPlan={STUDY_PLAN}
        user={USER}
        practiceTestResults={PRACTICE_TEST_RESULTS}
        skillProgress={SKILL_PROGRESS}
        onStartPractice={() => {}}
        onStartPracticeTest={() => {}}
        onCompleteActivity={() => {}}
        onUncompleteActivity={() => {}}
        {...props}
      />
    );
  });
  const text = container.textContent || '';
  act(() => root.unmount());
  container.remove();
  return text;
}

describe('StudyPlanDashboard redesign render', () => {
  it('renders the Today branch (module cards) without throwing', () => {
    const text = renderWith({ variant: 'default' });
    expect(text).toContain("Demo's Study Plan");
    // Module cards surface the focus-skill names and round structure.
    expect(text).toContain('Slope-intercept form');
    expect(text).toMatch(/Round 1/);
  });

  it('renders the Weekly branch (day-row timeline) without throwing', () => {
    const text = renderWith({ variant: 'inline' });
    // Day-row timeline + launchable sessions are in the weekly branch.
    expect(text).toContain("This week's sessions");
    expect(text).toContain('This week');
  });

  it('renders the empty state when there is no plan', () => {
    const text = renderWith({ studyPlan: null });
    expect(text).toContain('No Study Plan Yet');
  });
});
