// LegalPageLayout.jsx — shared shell for the Privacy Policy / Terms of
// Service pages.
//
// IMPORTANT: these pages render via an early return in App.jsx BEFORE the
// BrowserRouter mounts, so they have NO router context. Use only plain
// <a> tags here — react-router's Link/useNavigate/useLocation would throw.
// Navigation is full page loads: <a href="/"> serves both auth states
// because '/' redirects logged-in users to /course.

import React, { useEffect } from 'react';
import Wordmark from '../ui/Wordmark';
import './LegalPage.css';

/**
 * Page shell for long-form legal documents.
 * Renders a wordmark header, a 720px prose column, and a footer strip with
 * the copyright + College Board trademark lines plus cross-links.
 * Use it to wrap any future legal/long-form static page.
 *
 * @param {Object} props
 * @param {string} props.title - Page title (h1 + document.title)
 * @param {string} props.lastUpdated - Human-readable date, e.g. "June 9, 2026"
 * @param {React.ReactNode} props.children - The h2/p/ul document sections
 * @returns {JSX.Element}
 */
const LegalPageLayout = ({ title, lastUpdated, children }) => {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} — SEVA`;
    return () => { document.title = prev; };
  }, [title]);

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="legal-header-inner">
          <a href="/" aria-label="SEVA home">
            <Wordmark size="md" tone="dark" />
          </a>
        </div>
      </header>
      <main className="legal-prose">
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {lastUpdated}</p>
        {children}
      </main>
      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <span>&copy; {new Date().getFullYear()} SEVA. All rights reserved.</span>
          <span>SAT&reg; is a trademark registered by the College Board.</span>
          <span>
            <a href="/privacy">Privacy Policy</a>
            {' · '}
            <a href="/terms">Terms of Service</a>
            {' · '}
            <a href="/">Home</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LegalPageLayout;
