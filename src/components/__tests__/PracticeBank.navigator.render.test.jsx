/**
 * Practice Bank = question-bank navigator (2026-09-07 restructure). Mounts the
 * live component and pins the navigation contract: rail selection drives the
 * pane, the domain tablist has a roving tabindex, search replaces the pane body
 * with grouped matches, the filter chips rewrite row counts and produce an
 * honest empty state, a filtered launch serves a FIXED pool (never the adaptive
 * path) while All/All keeps the adaptive round, grammar chips stay a Standard
 * English Conventions affordance, a chapter hand-off marks its rows, band
 * labels wait for hydration, and the session remembers the student's place.
 */
/* eslint-disable testing-library/no-unnecessary-act */
global.IS_REACT_ACT_ENVIRONMENT = true;

import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import PracticeBank from '../PracticeBank';
import { questionBank as mathQuestionBank, getQuestionsByCBSkill } from '../../data/questions/bank';
import { extractSatPattern } from '../../data/questions/extractSatPattern';
import { CB_MATH_SKILLS, PATTERN_TO_CB_SKILL } from '../../data/questions/cbSkillTaxonomy';

function mount(el) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(el); });
  return {
    container,
    unmount: () => { act(() => root.unmount()); container.remove(); },
  };
}

const defaults = () => ({ onStartPractice: jest.fn(), onStartAdaptive: jest.fn() });
const mountBank = (props = {}) => {
  const handlers = defaults();
  const view = mount(<PracticeBank {...handlers} {...props} />);
  return { ...view, ...handlers };
};

const qa = (c, sel) => [...c.querySelectorAll(sel)];
const paneTitle = (c) => c.querySelector('.pb-ptitle').textContent;
const railTab = (c, domain) => c.querySelector(`[data-pb-domain="${domain}"]`);
const click = (el) => act(() => { el.click(); });
const key = (el, k) => act(() => { el.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true })); });
const chip = (c, groupLabel, label) => qa(c, `[role="radiogroup"][aria-label="${groupLabel}"] [role="radio"]`)
  .find(b => b.textContent === label);

function typeSearch(container, value) {
  const input = container.querySelector('#pb-search-input');
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  act(() => {
    setter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
  return input;
}

const isDrillable = (q) => Array.isArray(q.choices) && q.choices.length >= 2;
const practiced = (ids, correct) => ids.reduce((acc, id) => {
  acc[String(id)] = { c: correct, n: 1, t: new Date('2026-09-01T10:00:00Z').toISOString() };
  return acc;
}, {});

beforeEach(() => { window.sessionStorage.clear(); });

describe('rail → pane navigation', () => {
  it('selects the first domain by default and swaps the pane when a rail row is picked', () => {
    const { container, unmount } = mountBank();
    try {
      expect(paneTitle(container)).toBe('Algebra');
      expect(railTab(container, 'algebra').getAttribute('aria-selected')).toBe('true');

      click(railTab(container, 'advanced-math'));
      expect(paneTitle(container)).toBe('Advanced Math');
      expect(railTab(container, 'advanced-math').getAttribute('aria-selected')).toBe('true');
      expect(railTab(container, 'algebra').getAttribute('aria-selected')).toBe('false');
    } finally { unmount(); }
  });

  it('is one Tab stop: Down/Up/Home/End move the roving tabindex and the selection', () => {
    const { container, unmount } = mountBank();
    try {
      const algebra = railTab(container, 'algebra');
      expect(algebra.tabIndex).toBe(0);
      expect(railTab(container, 'advanced-math').tabIndex).toBe(-1);

      act(() => { algebra.focus(); });
      key(algebra, 'ArrowDown');
      expect(railTab(container, 'advanced-math').tabIndex).toBe(0);
      expect(railTab(container, 'algebra').tabIndex).toBe(-1);
      expect(paneTitle(container)).toBe('Advanced Math');

      key(railTab(container, 'advanced-math'), 'ArrowUp');
      expect(railTab(container, 'algebra').tabIndex).toBe(0);
      expect(paneTitle(container)).toBe('Algebra');

      key(railTab(container, 'algebra'), 'End');
      expect(paneTitle(container)).toBe('Geometry and Trigonometry');
      key(railTab(container, 'geometry'), 'Home');
      expect(paneTitle(container)).toBe('Algebra');
    } finally { unmount(); }
  });
});

describe('search', () => {
  it('≥2 characters replaces the pane body with matches grouped under domain subheads', () => {
    const { container, unmount } = mountBank();
    try {
      typeSearch(container, 'linear');
      const heading = container.querySelector('#pb-search-heading');
      expect(heading.textContent).toMatch(/^\d+ topics? matching “linear”$/);
      expect(heading.getAttribute('aria-live')).toBe('polite');
      expect(qa(container, '.pb-sgroup-head').length).toBeGreaterThan(0);
      // The rail shows per-domain match counts while a query is active.
      expect(railTab(container, 'algebra').textContent).toMatch(/· \d+/);
      // Every rendered row actually matches.
      qa(container, '.pb-trow-name').forEach(n => expect(n.textContent.toLowerCase()).toContain('linear'));
    } finally { unmount(); }
  });

  it('shows the no-match copy verbatim, and clearing the query restores the domain', () => {
    const { container, unmount } = mountBank();
    try {
      typeSearch(container, 'zzzz');
      expect(container.textContent).toContain('No topic matches “zzzz”. Try “linear”, “circles”, or “evidence”.');
      expect(qa(container, '.pb-trow').length).toBe(0);

      typeSearch(container, '');
      expect(paneTitle(container)).toBe('Algebra');
      expect(qa(container, '.pb-trow').length).toBeGreaterThan(0);
    } finally { unmount(); }
  });
});

describe('filters', () => {
  it('Difficulty = Hard rewrites the row counts to "N of M"', () => {
    const { container, unmount } = mountBank();
    try {
      expect(container.querySelector('.pb-trow-meta').textContent).toMatch(/^\d+ questions · E \d+ · M \d+ · H \d+$/);
      click(chip(container, 'Difficulty', 'Hard'));
      expect(chip(container, 'Difficulty', 'Hard').getAttribute('aria-checked')).toBe('true');
      const metas = qa(container, '.pb-trow-meta').map(n => n.textContent);
      expect(metas.length).toBeGreaterThan(0);
      metas.forEach(m => expect(m).toMatch(/^\d+ of \d+ · E \d+ · M \d+ · H \d+$/));
    } finally { unmount(); }
  });

  it('when every topic filters to zero it says so, names the filter, and offers Clear filters', () => {
    // A miss on an algebra question that maps to NO cb-skill topic: the domain
    // has a missed question (so the chip is live) while every topic has none.
    const orphan = mathQuestionBank.find(q => {
      if (!isDrillable(q) || (q.domain || 'algebra') !== 'algebra') return false;
      const pattern = extractSatPattern(q.explanation);
      return !pattern || !PATTERN_TO_CB_SKILL[pattern];
    });
    expect(orphan).toBeTruthy();

    const { container, unmount } = mountBank({ bankPractice: practiced([orphan.id], false) });
    try {
      click(chip(container, 'Show', 'Missed'));
      expect(qa(container, '.pb-trow').length).toBe(0);
      expect(container.querySelector('.pb-empty-copy').textContent).toBe("No questions you've missed in Algebra yet.");
      click(container.querySelector('.pb-empty-clear'));
      expect(qa(container, '.pb-trow').length).toBeGreaterThan(0);
      expect(chip(container, 'Show', 'All').getAttribute('aria-checked')).toBe('true');
    } finally { unmount(); }
  });
});

describe('launch semantics', () => {
  it('All + All launches the adaptive round for the domain', () => {
    const { container, unmount, onStartAdaptive, onStartPractice } = mountBank();
    try {
      click(container.querySelector('.pb-pbtn'));
      expect(onStartPractice).not.toHaveBeenCalled();
      expect(onStartAdaptive).toHaveBeenCalledTimes(1);
      expect(onStartAdaptive.mock.calls[0][0]).toMatchObject({
        enforcedDomain: 'algebra',
        section: 'math',
        source: 'practice-bank-domain',
      });
    } finally { unmount(); }
  });

  it('a filtered topic launch serves a fixed pool drawn only from the filtered ids', () => {
    const { container, unmount, onStartAdaptive, onStartPractice } = mountBank();
    try {
      click(chip(container, 'Difficulty', 'Hard'));
      const row = qa(container, '.pb-trow').find(r => r.querySelector('.pb-trow-link'));
      expect(row).toBeTruthy();
      const link = row.querySelector('.pb-trow-link');
      const label = link.getAttribute('aria-label');
      expect(label).toMatch(/^Practice .+, \d+ questions$/);
      const skillLabel = label.replace(/^Practice /, '').replace(/, \d+ questions$/, '');
      const slug = CB_MATH_SKILLS.find(s => s.label === skillLabel).slug;
      const topicIds = new Set(getQuestionsByCBSkill(slug).filter(isDrillable).map(q => String(q.id)));

      click(link);
      expect(onStartAdaptive).not.toHaveBeenCalled();
      expect(onStartPractice).toHaveBeenCalledTimes(1);
      const [ids, meta] = onStartPractice.mock.calls[0];
      expect(ids.length).toBeGreaterThan(0);
      expect(ids.length).toBeLessThanOrEqual(20);
      ids.forEach((id) => {
        expect(topicIds.has(String(id))).toBe(true);
        expect(mathQuestionBank.find(q => q.id === id).difficulty).toBe('hard');
      });
      expect(meta).toMatchObject({ source: 'practice-bank-filtered', section: 'math' });
      expect(meta.label).toBe(`${skillLabel} · Hard`);
    } finally { unmount(); }
  });

  it('an unfiltered topic launch stays on the adaptive path', () => {
    const { container, unmount, onStartAdaptive, onStartPractice } = mountBank();
    try {
      click(container.querySelector('.pb-trow-link'));
      expect(onStartPractice).not.toHaveBeenCalled();
      expect(onStartAdaptive.mock.calls[0][0]).toMatchObject({ source: 'practice-bank-topic', section: 'math' });
    } finally { unmount(); }
  });
});

describe('Reading & Writing', () => {
  it('renders question-type chips for Standard English Conventions only', () => {
    const { container, unmount } = mountBank();
    try {
      click(qa(container, '.pb-toggle-btn').find(b => b.textContent.includes('Reading')));
      expect(railTab(container, 'standard-english-conventions')).toBeTruthy();

      click(railTab(container, 'standard-english-conventions'));
      expect(paneTitle(container)).toBe('Standard English Conventions');
      const chips = qa(container, '.pb-type');
      expect(chips.length).toBeGreaterThan(0);
      chips.forEach(c => expect(c.querySelector('.pb-type-name').textContent.length).toBeGreaterThan(0));

      click(railTab(container, 'information-and-ideas'));
      expect(qa(container, '.pb-type').length).toBe(0);
    } finally { unmount(); }
  });
});

describe('states', () => {
  it('a chapter hand-off selects the domain and marks the matching rows', () => {
    const { container, unmount } = mountBank({
      focusRequest: { section: 'math', domain: 'algebra', skillSlugs: ['linear-functions'], token: 42 },
    });
    try {
      expect(paneTitle(container)).toBe('Algebra');
      const marked = qa(container, '.pb-trow.is-from-chapter');
      expect(marked.length).toBe(1);
      expect(marked[0].getAttribute('data-pb-skill')).toBe('linear-functions');
      expect(marked[0].textContent).toContain('From your chapter');

      // A domain change drops the marker.
      click(railTab(container, 'geometry'));
      expect(qa(container, '.pb-trow.is-from-chapter').length).toBe(0);
    } finally { unmount(); }
  });

  it('band labels and tallies wait for progressHydrated', () => {
    const ids = getQuestionsByCBSkill('linear-systems').filter(isDrillable).slice(0, 5).map(q => q.id);
    expect(ids.length).toBe(5);
    const bankPractice = practiced(ids, true);

    const hydrated = mountBank({ bankPractice, progressHydrated: true });
    try {
      expect(hydrated.container.textContent).toContain('Strong · 100% · 5 practiced');
      expect(hydrated.container.querySelector('.pb-drow-tally')).toBeTruthy();
    } finally { hydrated.unmount(); }

    const cold = mountBank({ bankPractice, progressHydrated: false });
    try {
      expect(cold.container.textContent).not.toContain('practiced');
      expect(cold.container.querySelector('.pb-drow-tally')).toBeNull();
      expect(cold.container.querySelector('.pb-foryou')).toBeNull();
      // Names and counts are on screen immediately — no spinner, no blank pane.
      expect(qa(cold.container, '.pb-trow').length).toBeGreaterThan(0);
    } finally { cold.unmount(); }
  });

  it('shows the first-visit line when the section has no history', () => {
    const { container, unmount } = mountBank();
    try {
      expect(container.querySelector('.pb-firstvisit').textContent)
        .toBe('No history yet. Start practice picks 20 questions for you.');
    } finally { unmount(); }
  });

  it('restores the section, domain and filters saved earlier in the session', () => {
    window.sessionStorage.setItem('pb:nav', JSON.stringify({
      section: 'math', domain: 'geometry', difficulty: 'hard', pool: 'all',
    }));
    const { container, unmount } = mountBank();
    try {
      expect(paneTitle(container)).toBe('Geometry and Trigonometry');
      expect(chip(container, 'Difficulty', 'Hard').getAttribute('aria-checked')).toBe('true');
    } finally { unmount(); }

    // And the current place is written back for the next mount.
    const saved = JSON.parse(window.sessionStorage.getItem('pb:nav'));
    expect(saved).toMatchObject({ section: 'math', domain: 'geometry', difficulty: 'hard' });
  });

  it('preselects the domain of the first weakness that maps into the section', () => {
    const { container, unmount } = mountBank({
      weaknesses: [{ skillId: 'circles', skill: 'Circles', domain: 'geometry', section: 'math' }],
    });
    try {
      expect(paneTitle(container)).toBe('Geometry and Trigonometry');
    } finally { unmount(); }
  });
});
