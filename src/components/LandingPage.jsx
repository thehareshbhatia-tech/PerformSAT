import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Modal } from './ui/Modal';
import Wordmark from './ui/Wordmark';
import { PencilIcon, MicroscopeIcon, TargetIcon } from '../design/icons';
import './LandingPage.css';

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  
  // Auth Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [hasTakenSAT, setHasTakenSAT] = useState('');
  const [satScore, setSatScore] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Guard before setLoading(true) so the finally block's loading reset
    // never has to undo anything for a blocked submit.
    if (!isLogin && !agreedToTerms) {
      setError('Please confirm you are 13 or older and agree to the Terms of Service and Privacy Policy.');
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        const additionalInfo = {
          hasTakenSAT: hasTakenSAT === 'yes',
          satScore: hasTakenSAT === 'yes' && satScore ? parseInt(satScore) : null,
          agreedToTerms: true // provably true here because of the guard above
        };
        await signup(email, password, firstName, additionalInfo);
      }
      // User will be redirected automatically by App.jsx routing
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openAuth = (loginMode = false) => {
    setIsLogin(loginMode);
    setShowAuth(true);
  };

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
                  Get Started for Free
                </button>
                <button className="btn-secondary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
                  See What's Inside
                </button>
              </div>
              <p className="hero-note">Free during early access — full product, no credit card.</p>
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

        {/* Conversion / Early Access Section */}
        <section id="early-access" className="section-container" style={{ padding: '0 5%' }}>
          <div className="conversion-section">
            <h2 className="conversion-title">Ready to reach your target score?</h2>
            <p className="conversion-subtitle">
              SEVA is free during early access — the full product, no credit card. Start with a diagnostic test, then follow a study plan built around the skills holding your score back.
            </p>
            <div className="conversion-actions">
              <button className="btn-primary" onClick={() => openAuth(false)} style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                Get Started for Free
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

      {/* Auth Modal */}
      <Modal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        title={isLogin ? 'Welcome Back' : 'Get Started'}
        maxWidth="480px"
      >
        <p className="auth-form-subtitle" style={{ marginTop: '-0.5rem', marginBottom: '1.5rem', color: 'var(--color-slate-500)' }}>
          {isLogin ? 'Log in to continue learning' : 'Create your account and start learning'}
        </p>

        <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div className="auth-form-group">
                    <label className="auth-form-label" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="auth-form-input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      required
                    />
                  </div>

                  <fieldset className="auth-form-group auth-form-fieldset">
                    <legend className="auth-form-label">
                      Have you taken the SAT before?
                    </legend>
                    <div className="auth-form-radio-group">
                      <label className="auth-form-radio-label">
                        <input
                          type="radio"
                          name="hasTakenSAT"
                          value="yes"
                          checked={hasTakenSAT === 'yes'}
                          onChange={(e) => setHasTakenSAT(e.target.value)}
                          required
                        />
                        <span>Yes</span>
                      </label>
                      <label className="auth-form-radio-label">
                        <input
                          type="radio"
                          name="hasTakenSAT"
                          value="no"
                          checked={hasTakenSAT === 'no'}
                          onChange={(e) => {
                            setHasTakenSAT(e.target.value);
                            setSatScore('');
                          }}
                          required
                        />
                        <span>No</span>
                      </label>
                      <label className="auth-form-radio-label">
                        <input
                          type="radio"
                          name="hasTakenSAT"
                          value="prefer-not-to-say"
                          checked={hasTakenSAT === 'prefer-not-to-say'}
                          onChange={(e) => {
                            setHasTakenSAT(e.target.value);
                            setSatScore('');
                          }}
                          required
                        />
                        <span>Prefer not to say</span>
                      </label>
                    </div>
                  </fieldset>

                  {hasTakenSAT === 'yes' && (
                    <div className="auth-form-group">
                      <label className="auth-form-label" htmlFor="satScore">
                        What was your SAT Math score? (optional)
                      </label>
                      <input
                        id="satScore"
                        type="number"
                        className="auth-form-input"
                        value={satScore}
                        onChange={(e) => setSatScore(e.target.value)}
                        placeholder="e.g., 600"
                        min="200"
                        max="800"
                      />
                      <p className="auth-form-hint">
                        Score range: 200-800
                      </p>
                    </div>
                  )}
                </>
              )}

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
                <p className="auth-form-hint">
                  Minimum 6 characters
                </p>
              </div>

              {/* Own !isLogin wrapper: the password group above is shared
                  with login mode, so the consent checkbox cannot live
                  inside the signup-only block higher up. */}
              {!isLogin && (
                <div className="auth-form-group">
                  <label className="auth-form-checkbox-label">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      required
                    />
                    <span>
                      I am 13 or older and agree to the{' '}
                      <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              )}

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
                {loading ? 'Please wait...' : (isLogin ? 'Log In' : 'Create Account')}
              </button>

              <button
                type="button"
                className="auth-form-toggle"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
              </button>
            </form>
      </Modal>
    </div>
  );
};

export default LandingPage;
