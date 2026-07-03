import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useFeatureFlag } from '../hooks/useFeatureFlag';
import { Modal } from './ui/Modal';
import Wordmark from './ui/Wordmark';
import { PencilIcon, MicroscopeIcon, TargetIcon, CheckIcon } from '../design/icons';
import './LandingPage.css';

// The pre-signup quiz funnel is its own chunk: the landing page must stay
// light (it's an eager import in App.jsx), and most visitors bounce before
// clicking a CTA.
const OnboardingFunnel = React.lazy(() => import('./onboarding/OnboardingFunnel'));

const LandingPage = () => {
  // Billing dark-launch: pricing copy flips with the same flag as the app's
  // paywall so the landing page never promises "free forever" once the
  // 7-day-trial model is live (and never promises a trial before it exists).
  const billingLive = useFeatureFlag('billing');
  const [showAuth, setShowAuth] = useState(false); // login modal
  const [showFunnel, setShowFunnel] = useState(false); // signup quiz funnel

  // Login Form State (signup now lives inside the funnel)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      // User will be redirected automatically by App.jsx routing
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Every signup CTA routes through the quiz funnel; only "Log in" opens
  // the modal directly.
  const openAuth = (loginMode = false) => {
    if (loginMode) {
      setShowFunnel(false);
      setShowAuth(true);
    } else {
      setShowAuth(false);
      setShowFunnel(true);
    }
  };

  if (showFunnel) {
    return (
      <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#F6F4EF' }} />}>
        <OnboardingFunnel
          signup={signup}
          billingLive={billingLive}
          onExit={() => setShowFunnel(false)}
          onLogIn={() => openAuth(true)}
        />
      </React.Suspense>
    );
  }

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="landing-header-content">
          <a href="/" className="brand-logo" aria-label="SEVA">
            <Wordmark size="lg" tone="dark" />
          </a>
          <nav className="header-nav">
            <a href="#features" className="header-nav-link">Features</a>
            <a href="#how-it-works" className="header-nav-link">How it Works</a>
            <a href="#pricing" className="header-nav-link">Pricing</a>
          </nav>
          <div className="header-actions">
            <button className="btn-ghost" onClick={() => openAuth(true)}>Log in</button>
            <button className="btn-primary" onClick={() => openAuth(false)}>Sign up</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section section-container">
          <div className="section-inner hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                SAT prep that explains<br />
                <span className="hero-title-accent">why</span> you missed it
              </h1>
              <p className="hero-description">
                Every question on SEVA is crafted and quality-checked against the real digital SAT, item by item. Take a full-length test, get a diagnosis that explains why your score happened, and drill the exact question types you missed.
              </p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => openAuth(false)}>
                  {billingLive ? 'Start Your Free Trial' : 'Get Started for Free'}
                </button>
                <button className="btn-secondary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
                  See What's Inside
                </button>
              </div>
              <p className="hero-note">
                {billingLive
                  ? '7 days free — full product, no credit card to start. Then $50/month or $250/year.'
                  : 'Free during early access — full product, no credit card.'}
              </p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              {/* Optional: Insert hero image or video here */}
              <span className="hero-visual-placeholder">Platform Preview</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-container" style={{ background: 'var(--color-white)' }}>
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">What makes SEVA different</h2>
              <p className="section-subtitle">
                No AI-generated question dumps and no inflated promises — hand-authored practice plus a diagnostic engine that tells you the truth about your score.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper"><PencilIcon size={24} /></div>
                <h3 className="feature-title">Every Question Hand-Authored</h3>
                <p className="feature-description">
                  2,200+ practice questions — 1,600+ math and 600+ Reading and Writing — plus 12 full-length practice tests. Every item is written and reviewed by a person, with a full explanation for every answer.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><MicroscopeIcon size={24} /></div>
                <h3 className="feature-title">A Diagnosis, Not Just a Score</h3>
                <p className="feature-description">
                  After every test, a six-class error analysis explains why your score happened — which skills broke down, which question patterns you keep missing, and whether each miss was a concept gap, a trap, time pressure, or a careless slip.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><TargetIcon size={24} /></div>
                <h3 className="feature-title">Practice That Targets Your Misses</h3>
                <p className="feature-description">
                  Your study plan routes you to drills for the exact question types you missed — 130+ distinct question patterns — so every session works on what is actually holding your score back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works-section section-container">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">How SEVA Works</h2>
              <p className="section-subtitle">
                A simple loop — test, diagnose, drill — built around what you actually miss.
              </p>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-visual" aria-hidden="true">
                  <span className="hero-visual-placeholder">Diagnostic</span>
                </div>
                <div className="step-content">
                  <span className="step-number">Step 01</span>
                  <h3 className="step-title">Take a Full-Length Test</h3>
                  <p className="step-description">
                    Start with a realistic, full-length adaptive test in the digital SAT format. Every answer you give becomes evidence for your diagnosis.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-visual" aria-hidden="true">
                  <span className="hero-visual-placeholder">Diagnosis</span>
                </div>
                <div className="step-content">
                  <span className="step-number">Step 02</span>
                  <h3 className="step-title">Read Your Diagnosis</h3>
                  <p className="step-description">
                    The diagnostic engine classifies every error — concept gap, trap, time pressure, careless slip — and pinpoints the question patterns behind your score.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-visual" aria-hidden="true">
                  <span className="hero-visual-placeholder">Targeted Practice</span>
                </div>
                <div className="step-content">
                  <span className="step-number">Step 03</span>
                  <h3 className="step-title">Drill Your Exact Gaps</h3>
                  <p className="step-description">
                    Your study plan turns the diagnosis into daily practice aimed at the question types you missed, with a full explanation to review for every mistake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing-section section-container">
          <div className="section-inner">
            <div className="section-header">
              <h2 className="section-title">Simple, honest pricing</h2>
              <p className="section-subtitle">
                {billingLive
                  ? 'Start with a 7-day free trial — no credit card. Then keep going month to month, or save with an annual plan.'
                  : 'SEVA is free during early access — the full product, no credit card. One plan, everything included.'}
              </p>
            </div>

            {/* Shared "what's included" list — every plan gets the full product */}
            <div className="pricing-includes">
              <p className="pricing-includes-title">Everything is included</p>
              <ul className="pricing-includes-grid">
                <li className="pricing-include-item">
                  <span className="pricing-check" aria-hidden="true"><CheckIcon size={18} /></span>
                  2,200+ hand-authored practice questions
                </li>
                <li className="pricing-include-item">
                  <span className="pricing-check" aria-hidden="true"><CheckIcon size={18} /></span>
                  12 full-length adaptive practice tests
                </li>
                <li className="pricing-include-item">
                  <span className="pricing-check" aria-hidden="true"><CheckIcon size={18} /></span>
                  Six-class error diagnosis after every test
                </li>
                <li className="pricing-include-item">
                  <span className="pricing-check" aria-hidden="true"><CheckIcon size={18} /></span>
                  Targeted drills for the exact question types you miss
                </li>
                <li className="pricing-include-item">
                  <span className="pricing-check" aria-hidden="true"><CheckIcon size={18} /></span>
                  AI tutor with step-by-step, inline graphs
                </li>
                <li className="pricing-include-item">
                  <span className="pricing-check" aria-hidden="true"><CheckIcon size={18} /></span>
                  A study plan built around your gaps
                </li>
              </ul>
            </div>

            {billingLive ? (
              <>
                <div className="pricing-cards">
                  {/* Monthly */}
                  <div className="pricing-card">
                    <h3 className="pricing-plan-name">Monthly</h3>
                    <div className="pricing-amount">
                      <span className="pricing-price">$50</span>
                      <span className="pricing-period">/month</span>
                    </div>
                    <p className="pricing-plan-note">Billed monthly. Cancel anytime.</p>
                    <button className="btn-primary pricing-cta" onClick={() => openAuth(false)}>
                      Start your 7-day free trial
                    </button>
                  </div>

                  {/* Annual — highlighted / recommended */}
                  <div className="pricing-card pricing-card-featured">
                    <span className="pricing-badge">Best value</span>
                    <h3 className="pricing-plan-name">Annual</h3>
                    <div className="pricing-amount">
                      <span className="pricing-price">$250</span>
                      <span className="pricing-period">/year</span>
                    </div>
                    <p className="pricing-savings">$20.83/mo billed annually — save $350/year</p>
                    <button className="btn-primary pricing-cta" onClick={() => openAuth(false)}>
                      Start your 7-day free trial
                    </button>
                  </div>
                </div>
                <p className="pricing-reassurance">No credit card to start. Cancel anytime.</p>
              </>
            ) : (
              <div className="pricing-cards pricing-cards-single">
                <div className="pricing-card pricing-card-featured">
                  <span className="pricing-badge">Early access</span>
                  <h3 className="pricing-plan-name">Free during early access</h3>
                  <div className="pricing-amount">
                    <span className="pricing-price">Free</span>
                  </div>
                  <p className="pricing-plan-note">The full product, no credit card.</p>
                  <button className="btn-primary pricing-cta" onClick={() => openAuth(false)}>
                    Get Started for Free
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Conversion / Early Access Section */}
        <section id="early-access" className="section-container" style={{ padding: '0 5%' }}>
          <div className="conversion-section">
            <h2 className="conversion-title">Ready to reach your target score?</h2>
            <p className="conversion-subtitle">
              {billingLive
                ? 'Try everything free for 7 days — no credit card to start. Take a diagnostic, follow a study plan built around the skills holding your score back, and keep going for $50/month or $250/year.'
                : 'SEVA is free during early access — the full product, no credit card. Start with a diagnostic test, then follow a study plan built around the skills holding your score back.'}
            </p>
            <div className="conversion-actions">
              <button className="btn-primary" onClick={() => openAuth(false)} style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                {billingLive ? 'Start Your Free Trial' : 'Get Started for Free'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Wordmark size="md" tone="dark" />
            </div>
            <p className="footer-description">
              Digital SAT prep with hand-authored questions, a diagnostic engine that explains why your score happened, and a study plan that targets your exact gaps.
            </p>
          </div>
          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#how-it-works" className="footer-link">How it Works</a></li>
              <li><a href="#pricing" className="footer-link">Pricing</a></li>
              <li><a href="#early-access" className="footer-link">Early Access</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} SEVA. All rights reserved.</span>
          <span>SAT&reg; is a trademark registered by the College Board.</span>
        </div>
      </footer>

      {/* Login Modal (signup happens in the onboarding funnel) */}
      <Modal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        title="Welcome Back"
        maxWidth="480px"
      >
        <p className="auth-form-subtitle" style={{ marginTop: '-0.5rem', marginBottom: '1.5rem', color: 'var(--color-slate-500)' }}>
          Log in to continue learning
        </p>

        <form onSubmit={handleSubmit}>
              <div className="auth-form-group">
                <label className="auth-form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="auth-form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="auth-form-group">
                <label className="auth-form-label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="auth-form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength="6"
                />
              </div>

              {error && (
                <div className="auth-form-error">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="auth-form-submit"
                disabled={loading}
              >
                {loading ? 'Please wait...' : 'Log In'}
              </button>

              <button
                type="button"
                className="auth-form-toggle"
                onClick={() => { setShowAuth(false); openAuth(false); }}
              >
                Don't have an account? Sign up
              </button>
            </form>
      </Modal>
    </div>
  );
};

export default LandingPage;
