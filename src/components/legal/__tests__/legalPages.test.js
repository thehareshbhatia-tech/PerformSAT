/**
 * Render tests for the legal pages (Privacy Policy / Terms of Service).
 *
 * @testing-library/react is NOT installed in this repo, so these use
 * ReactDOMServer.renderToString (server render = no effects fire, which
 * also keeps the document.title effect out of the test environment).
 *
 * The pages render OUTSIDE BrowserRouter via an App.jsx early return, so
 * renderToString with no Router context doubles as a regression guard:
 * if anyone adds a react-router Link/hook to these pages, these tests
 * throw 'useNavigate/Link may be used only in the context of a Router'.
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PrivacyPolicy from '../PrivacyPolicy';
import TermsOfService from '../TermsOfService';

// Emoji + dingbat/symbol blocks — UI copy must never contain emojis.
const EMOJI_RE = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

// renderToString inserts <!-- --> markers between adjacent text segments
// (e.g. "Last updated: <!-- -->June 9, 2026"); strip them so substring
// assertions read like the rendered page.
const render = (el) => ReactDOMServer.renderToString(el).replace(/<!-- -->/g, '');

describe('PrivacyPolicy', () => {
  let html;
  beforeEach(() => {
    html = render(<PrivacyPolicy />);
  });

  test('renders the title and last-updated line', () => {
    expect(html).toContain('Privacy Policy');
    expect(html).toContain('Last updated: June 9, 2026');
  });

  test('covers the required sections', () => {
    expect(html).toContain('Information We Collect');
    expect(html).toContain('How We Use Your Information');
    expect(html).toContain('Data Storage');
    expect(html).toContain('Third-Party Services');
    expect(html).toContain('Data Retention and Deletion');
    expect(html).toContain('Children');
    expect(html).toContain('Contact');
  });

  test('names the actual processors and the 13+ rule', () => {
    expect(html).toContain('Firebase');
    expect(html).toContain('Vercel');
    expect(html).toContain('Anthropic');
    expect(html).toContain('13 or older');
  });

  test('carries the College Board trademark disclaimer', () => {
    expect(html).toContain('College Board');
    expect(html).toContain('not affiliated with and does not endorse');
  });

  test('keeps the pending-fact placeholders clearly marked', () => {
    expect(html).toContain('[LEGAL ENTITY NAME]');
    expect(html).toContain('[CONTACT EMAIL]');
  });

  test('contains no emoji characters', () => {
    expect(EMOJI_RE.test(html)).toBe(false);
  });
});

describe('TermsOfService', () => {
  let html;
  beforeEach(() => {
    html = render(<TermsOfService />);
  });

  test('renders the title and last-updated line', () => {
    expect(html).toContain('Terms of Service');
    expect(html).toContain('Last updated: June 9, 2026');
  });

  test('covers the required sections', () => {
    expect(html).toContain('Acceptance of These Terms');
    expect(html).toContain('The Service');
    expect(html).toContain('Accounts');
    expect(html).toContain('Acceptable Use');
    expect(html).toContain('Intellectual Property');
    expect(html).toContain('AI-Generated Content');
    expect(html).toContain('Disclaimer of Warranties');
    expect(html).toContain('Limitation of Liability');
    expect(html).toContain('Termination');
    expect(html).toContain('Changes to These Terms');
    expect(html).toContain('Governing Law');
    expect(html).toContain('Contact');
  });

  test('carries the College Board trademark disclaimer', () => {
    expect(html).toContain('SAT is a registered trademark of the College Board');
    expect(html).toContain('not affiliated with and does not endorse');
  });

  test('keeps the pending-fact placeholders clearly marked', () => {
    expect(html).toContain('[LEGAL ENTITY NAME]');
    expect(html).toContain('[CONTACT EMAIL]');
    expect(html).toContain('[GOVERNING JURISDICTION]');
  });

  test('contains no emoji characters', () => {
    expect(EMOJI_RE.test(html)).toBe(false);
  });
});

describe('shared layout', () => {
  test('legal pages cross-link each other and home with plain anchors', () => {
    const html = render(<PrivacyPolicy />);
    expect(html).toContain('href="/terms"');
    expect(html).toContain('href="/privacy"');
    expect(html).toContain('href="/"');
  });
});
