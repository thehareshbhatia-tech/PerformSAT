/**
 * Content / claims tests for the public landing page.
 *
 * @testing-library/react is NOT installed in this repo, so these use
 * ReactDOMServer.renderToString (server render = no effects fire, so the
 * Firebase auth listener inside useAuth never attaches).
 *
 * Two jobs:
 *  1. Pin the landing copy to the REAL content inventory. The numbers
 *     asserted here are rounded-DOWN tokens derived by
 *     `node scripts/contentInventory.mjs` (math bank 1,632 / R&W 648 /
 *     12 full tests / 134 surfaced drill patterns as of 2026-06-09).
 *     If the bank shrinks below a claimed floor, update the copy AND this
 *     test together — never let the page claim more than the bank holds.
 *  2. Guard against known-false / unverifiable marketing claims ever
 *     coming back (score guarantees, "thousands of students", the excised
 *     video-course framing, dead `href="#"` links, competitor naming).
 */

// Firebase is mocked following the useAuth.signup.test.js convention —
// src/firebase/config.js calls getAuth(app) at import time, which throws
// under jest (no API key in the test environment).
jest.mock('../../firebase/config', () => ({ auth: {}, db: {} }));
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  onAuthStateChanged: jest.fn(() => jest.fn()),
  signOut: jest.fn(),
}));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import LandingPage from '../LandingPage';

// Emoji + dingbat/symbol blocks — UI copy must never contain emojis.
const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

// renderToString inserts <!-- --> markers between adjacent text segments;
// strip them so substring assertions read like the rendered page.
const render = (el) => ReactDOMServer.renderToString(el).replace(/<!-- -->/g, '');

describe('LandingPage content', () => {
  let html;
  beforeAll(() => {
    html = render(<LandingPage />);
  });

  test('claims the derived (rounded-down) content inventory', () => {
    expect(html).toContain('2,200+'); // total hand-authored questions (actual 2,280)
    expect(html).toContain('1,600+'); // math bank items (actual 1,632)
    expect(html).toContain('600+'); // R&W bank items (actual 648)
    expect(html).toContain('12 full-length practice tests');
    expect(html).toContain('130+'); // surfaced drill patterns (actual 134)
  });

  test('leads with the honest differentiators', () => {
    expect(html).toContain('hand-authored');
    expect(html).toContain('crafted and quality-checked against the real digital SAT');
    expect(html).toContain('why</span> you missed it'); // hero h1, accent span on "why"
    expect(html).toContain('six-class error analysis');
    expect(html).toContain('exact question types you missed');
  });

  test('frames the free early-access packaging consistently', () => {
    expect(html).toMatch(/free during early access/i);
    // Card-up-front billing model (2026-07-03): the "no credit card" claim was
    // removed everywhere so the page never contradicts the card-up-front trial
    // once the billing flag flips on.
    expect(html).not.toMatch(/no credit card/i);
    expect(html).toContain('Get Started for Free');
    // The old CTA led nowhere (no payment flow exists).
    expect(html).not.toContain('Enroll Now');
    // The pricing section exists, but with the billing flag OFF it must render
    // the single "free during early access" card — never paid dollar prices
    // that would contradict the free packaging elsewhere on the page.
    expect(html).not.toContain('$50');
    expect(html).not.toContain('$250');
  });

  test('contains no known-false or unverifiable claims', () => {
    expect(html).not.toMatch(/thousands of students/i);
    expect(html).not.toMatch(/guarantee/i);
    // The video-lesson product was excised; the landing must not sell it.
    expect(html).not.toMatch(/video/i);
    expect(html).not.toMatch(/instructor/i);
    expect(html).not.toMatch(/premier/i);
    expect(html).not.toMatch(/proven/i);
    // Quality-flank positioning never names the competitor.
    expect(html).not.toMatch(/acely/i);
  });

  test('has no dead links — every anchor points at a real route or section', () => {
    expect(html).not.toContain('href="#"');
    expect(html).toContain('href="/privacy"');
    expect(html).toContain('href="/terms"');
    expect(html).toContain('href="#features"');
    expect(html).toContain('href="#how-it-works"');
    expect(html).toContain('href="#pricing"');
    expect(html).toContain('href="#early-access"');
    // The #pricing and #early-access anchor targets must exist on the page.
    expect(html).toContain('id="pricing"');
    expect(html).toContain('id="early-access"');
  });

  test('keeps the College Board trademark line', () => {
    expect(html).toContain('SAT®'); // &reg; renders as the literal character
    expect(html).toContain('trademark registered by the College Board');
  });

  test('contains no emojis', () => {
    expect(html).not.toMatch(EMOJI_RE);
  });
});
