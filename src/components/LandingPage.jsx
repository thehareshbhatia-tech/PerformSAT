import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { colors, radius, shadows, transitions } from '../design/tokens';

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
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

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        background: `linear-gradient(180deg, ${colors.accent.orangeLight} 0%, ${colors.surface.white} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            color: colors.text.primary,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: `linear-gradient(135deg, ${colors.accent.orange} 0%, ${colors.accent.orangeHover} 100%)`,
              borderRadius: radius.md,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.text.inverse,
              fontSize: '1.1rem'
            }}>P</div>
            Perform
          </div>
        </div>

        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 5rem)',
          fontWeight: '900',
          letterSpacing: '-0.04em',
          lineHeight: '1.05',
          marginBottom: '1.5rem',
          color: colors.text.primary
        }}>
          Perform the SAT,<br />
          <span style={{
            background: `linear-gradient(135deg, ${colors.accent.orange} 0%, ${colors.accent.orangeMuted} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic'
          }}>Outperform</span> the Competition
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: colors.text.tertiary,
          maxWidth: '480px',
          marginBottom: '2.5rem',
          lineHeight: '1.7'
        }}>
          A comprehensive video course built on a proven curriculum. Master every concept, strategy, and technique you need.
        </p>

        <button
          onClick={() => {
            setShowAuth(true);
            setIsLogin(false);
          }}
          style={{
            background: colors.accent.orange,
            color: colors.text.inverse,
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: radius.md,
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: `all ${transitions.normal}`,
            boxShadow: `0 10px 40px rgba(234, 88, 12, 0.3)`
          }}
          onMouseEnter={(e) => {
            e.target.style.background = colors.accent.orangeHover;
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = colors.accent.orange;
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Enroll Now →
        </button>

        <button
          onClick={() => {
            setShowAuth(true);
            setIsLogin(true);
          }}
          style={{
            background: 'transparent',
            color: colors.text.tertiary,
            padding: '0.75rem 1.5rem',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Already have an account? Log in
        </button>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: colors.overlay,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }} onClick={() => setShowAuth(false)}>
          <div style={{
            background: colors.surface.white,
            borderRadius: radius.xl,
            padding: '3rem',
            maxWidth: '440px',
            width: '100%',
            boxShadow: shadows.xl
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '0.5rem',
              color: colors.text.primary
            }}>
              {isLogin ? 'Welcome Back' : 'Get Started'}
            </h2>
            <p style={{
              color: colors.text.tertiary,
              marginBottom: '2rem'
            }}>
              {isLogin ? 'Log in to continue learning' : 'Create your account and start learning'}
            </p>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: colors.text.primary
                    }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: `2px solid ${colors.surface.grayDark}`,
                        borderRadius: radius.md,
                        fontSize: '1rem',
                        outline: 'none',
                        transition: `border-color ${transitions.fast}`,
                        fontFamily: 'inherit',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.accent.orange}
                      onBlur={(e) => e.target.style.borderColor = colors.surface.grayDark}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: colors.text.primary
                    }}>
                      Have you taken the SAT before?
                    </label>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="hasTakenSAT"
                          value="yes"
                          checked={hasTakenSAT === 'yes'}
                          onChange={(e) => setHasTakenSAT(e.target.value)}
                          required
                          style={{ cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '0.9rem', color: colors.text.primary }}>Yes</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
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
                          style={{ cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '0.9rem', color: colors.text.primary }}>No</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
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
                          style={{ cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '0.9rem', color: colors.text.primary }}>Prefer not to say</span>
                      </label>
                    </div>
                  </div>

                  {hasTakenSAT === 'yes' && (
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: colors.text.primary
                      }}>
                        What was your SAT Math score? (optional)
                      </label>
                      <input
                        type="number"
                        value={satScore}
                        onChange={(e) => setSatScore(e.target.value)}
                        placeholder="e.g., 600"
                        min="200"
                        max="800"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          border: `2px solid ${colors.surface.grayDark}`,
                          borderRadius: radius.md,
                          fontSize: '1rem',
                          outline: 'none',
                          transition: `border-color ${transitions.fast}`,
                          fontFamily: 'inherit',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => e.target.style.borderColor = colors.accent.orange}
                        onBlur={(e) => e.target.style.borderColor = colors.surface.grayDark}
                      />
                      <p style={{
                        fontSize: '0.8rem',
                        color: colors.text.muted,
                        marginTop: '0.5rem'
                      }}>
                        Score range: 200-800
                      </p>
                    </div>
                  )}
                </>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: colors.text.primary
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: `2px solid ${colors.surface.grayDark}`,
                    borderRadius: radius.md,
                    fontSize: '1rem',
                    outline: 'none',
                    transition: `border-color ${transitions.fast}`,
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.accent.orange}
                  onBlur={(e) => e.target.style.borderColor = colors.surface.grayDark}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: colors.text.primary
                }}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength="6"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: `2px solid ${colors.surface.grayDark}`,
                    borderRadius: radius.md,
                    fontSize: '1rem',
                    outline: 'none',
                    transition: `border-color ${transitions.fast}`,
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = colors.accent.orange}
                  onBlur={(e) => e.target.style.borderColor = colors.surface.grayDark}
                />
                <p style={{
                  fontSize: '0.8rem',
                  color: colors.text.muted,
                  marginTop: '0.5rem'
                }}>
                  Minimum 6 characters
                </p>
              </div>

              {error && (
                <div style={{
                  padding: '0.75rem 1rem',
                  background: colors.semantic.errorLight,
                  border: `2px solid ${colors.semantic.errorBg}`,
                  borderRadius: radius.md,
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  color: colors.semantic.error
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: loading ? colors.surface.grayMedium : colors.accent.orange,
                  color: colors.text.inverse,
                  border: 'none',
                  borderRadius: radius.md,
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: `all ${transitions.normal}`,
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.target.style.background = colors.accent.orangeHover;
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.target.style.background = colors.accent.orange;
                }}
              >
                {loading ? 'Please wait...' : (isLogin ? 'Log In' : 'Create Account')}
              </button>

              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: colors.text.tertiary,
                  border: 'none',
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
