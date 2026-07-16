/**
 * Content / claims tests for the public landing page.
 *
 * @testing-library/react is NOT installed in this repo, so these use
 * ReactDOMServer.renderToString (server render = no effects fire, so the
 * Firebase auth listener inside useAuth never attaches).
 *
 * Two jobs:
 *  1. Pin the landing copy to the REAL content inventory — the honest
 *     "2,200+" question floor (actual ~2,280) and "12 full-length" tests.
 *     If the bank shrinks below a claimed floor, update the copy AND this
 *     test together — never let the page claim more than the bank holds.
 *  2. Guard against known-false / unverifiable marketing claims ever
 *     coming back (score guarantees, the excised video-course framing,
 *     dead `href="#"` links, competitor naming).
 *
 * Reconciled 2026-07-07 with the Results-carousel build: the assertions
 * were realigned to the current v2 landing copy (they had drifted to a
 * pre-`2210304` version), and the five named student testimonials + the
 * "Thousands of students" headline are real, product-owner-cleared claims,
 * so that specific "thousands of students" guard was intentionally removed.
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
    expect(html).toContain('2,200+'); // honest question-bank floor (actual ~2,280)
    expect(html).toContain('Hand-authored questions'); // stats strip
    expect(html).toContain('SAT domains covered'); // stats strip
    expect(html).toContain('Aligned to Bluebook format'); // stats strip
    expect(html).toContain('12 full-length adaptive practice tests'); // pricing "includes" list
  });

  test('leads with the honest differentiators', () => {
    expect(html).toContain('hand-authored');
    expect(html).toContain('why you missed it'); // comparison headline accent on "why you missed it"
    expect(html).toContain('pinpoints the exact skill behind each miss'); // "With SEVA" column
    expect(html).toContain('the exact question types you miss'); // pricing "includes" list
  });

  test('frames the free early-access packaging consistently', () => {
    expect(html).toMatch(/free during early access/i);
    expect(html).toContain('Get started for free'); // billing-off pricing CTA
    // The old CTA led nowhere (no payment flow exists).
    expect(html).not.toContain('Enroll Now');
    // The pricing section exists, but with the billing flag OFF it must render
    // the single "free during early access" card — never paid dollar prices
    // that would contradict the free packaging elsewhere on the page.
    expect(html).not.toContain('$85');
    expect(html).not.toContain('$425');
  });

  test('contains no known-false or unverifiable claims', () => {
    // NOTE: the "Thousands of students" Results headline + the five named
    // testimonials are real, product-owner-cleared claims (approved 2026-07-07),
    // so they're intentionally allowed. Everything below stays guarded.
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
    expect(html).toContain('href="#how"');
    expect(html).toContain('href="#why"');
    expect(html).toContain('href="#pricing"');
    // Every in-page anchor target must exist on the page.
    expect(html).toContain('id="features"');
    expect(html).toContain('id="how"');
    expect(html).toContain('id="why"');
    expect(html).toContain('id="pricing"');
    expect(html).toContain('id="results"'); // testimonial carousel section
  });

  test('keeps the College Board trademark line', () => {
    expect(html).toContain('SAT is a registered trademark of the College Board');
    expect(html).toContain('does not endorse this product');
  });

  test('contains no emojis', () => {
    expect(html).not.toMatch(EMOJI_RE);
  });
});
