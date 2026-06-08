import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Modal } from './ui/Modal';
import Wordmark from './ui/Wordmark';
import { BookOpenIcon, VideoCameraIcon, TargetIcon } from '../design/icons';
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        const additionalInfo = {
          hasTakenSAT: hasTakenSAT === 'yes',
          satScore: hasTakenSAT === 'yes' && satScore ? parseInt(satScore) : null
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
                Master the SAT,<br />
                <span className="hero-title-accent">Outperform</span> the Competition
              </h1>
              <p className="hero-description">
                A comprehensive video course built on a proven curriculum. Master every concept, strategy, and technique you need to achieve your target score.
              </p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => openAuth(false)}>
                  Enroll Now
                </button>
                <button className="btn-secondary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
                  Explore Curriculum
                </button>
              </div>
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
              <h2 className="section-title">Everything you need to succeed</h2>
              <p className="section-subtitle">
                Stop jumping between resources. Our platform brings all the tools, practice, and instruction into one cohesive experience.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper"><BookOpenIcon size={24} /></div>
                <h3 className="feature-title">Structured Curriculum</h3>
                <p className="feature-description">
                  Follow a proven step-by-step path designed to cover every SAT topic without overwhelming you.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><VideoCameraIcon size={24} /></div>
                <h3 className="feature-title">Expert Video Lessons</h3>
                <p className="feature-description">
                  Learn from top instructors who break down complex problems into simple, repeatable strategies.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper"><TargetIcon size={24} /></div>
                <h3 className="feature-title">Targeted Practice</h3>
                <p className="feature-description">
                  Apply what you learn immediately with practice questions tailored to your skill level.
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
                A simple, effective process to maximize your score in the shortest amount of time.
              </p>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-visual" aria-hidden="true">
                  <span className="hero-visual-placeholder">Diagnostic</span>
                </div>
                <div className="step-content">
                  <span className="step-number">Step 01</span>
                  <h3 className="step-title">Take a Diagnostic Test</h3>
                  <p className="step-description">
                    Start by identifying your baseline. We analyze your strengths and weaknesses to personalize your journey from day one.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-visual" aria-hidden="true">
                  <span className="hero-visual-placeholder">Learn</span>
                </div>
                <div className="step-content">
                  <span className="step-number">Step 02</span>
                  <h3 className="step-title">Master the Concepts</h3>
                  <p className="step-description">
                    Watch concise video lessons and learn the most effective strategies for every question type on the digital SAT.
                  </p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-visual" aria-hidden="true">
                  <span className="hero-visual-placeholder">Practice</span>
                </div>
                <div className="step-content">
                  <span className="step-number">Step 03</span>
                  <h3 className="step-title">Practice & Review</h3>
                  <p className="step-description">
                    Take full-length practice tests under realistic conditions and review detailed explanations for every mistake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="section-container" style={{ padding: '0 5%' }}>
          <div className="conversion-section">
            <h2 className="conversion-title">Ready to reach your target score?</h2>
            <p className="conversion-subtitle">
              Join thousands of students who have already transformed their SAT scores with SEVA.
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
              The premier platform for Digital SAT preparation. Learn from experts and practice with realistic questions.
            </p>
          </div>
          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#how-it-works" className="footer-link">Curriculum</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
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

                  <div className="auth-form-group">
                    <label className="auth-form-label">
                      Have you taken the SAT before?
                    </label>
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
                  </div>

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
