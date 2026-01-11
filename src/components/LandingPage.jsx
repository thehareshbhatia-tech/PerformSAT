import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
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
        await signup(email, password, firstName);
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
        background: 'linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)',
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
            color: '#0A0A0A',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #FF6B35 0%, #E85A24 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
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
          color: '#0A0A0A'
        }}>
          Perform the SAT,<br />
          <span style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic'
          }}>Outperform</span> the Competition
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#71717A',
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
            background: '#FF6B35',
            color: 'white',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 40px rgba(255, 107, 53, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#E85A24';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#FF6B35';
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
            color: '#71717A',
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
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }} onClick={() => setShowAuth(false)}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '3rem',
            maxWidth: '440px',
            width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }} onClick={(e) => e.stopPropagation()}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '0.5rem',
              color: '#0A0A0A'
            }}>
              {isLogin ? 'Welcome Back' : 'Get Started'}
            </h2>
            <p style={{
              color: '#71717A',
              marginBottom: '2rem'
            }}>
              {isLogin ? 'Log in to continue learning' : 'Create your account and start learning'}
            </p>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#0A0A0A'
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
                      border: '2px solid #E4E4E7',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                    onBlur={(e) => e.target.style.borderColor = '#E4E4E7'}
                  />
                </div>
              )}

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#0A0A0A'
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
                    border: '2px solid #E4E4E7',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                  onBlur={(e) => e.target.style.borderColor = '#E4E4E7'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#0A0A0A'
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
                    border: '2px solid #E4E4E7',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                  onBlur={(e) => e.target.style.borderColor = '#E4E4E7'}
                />
                <p style={{
                  fontSize: '0.8rem',
                  color: '#A1A1AA',
                  marginTop: '0.5rem'
                }}>
                  Minimum 6 characters
                </p>
              </div>

              {error && (
                <div style={{
                  padding: '0.75rem 1rem',
                  background: '#FEF2F2',
                  border: '2px solid #FECACA',
                  borderRadius: '10px',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  color: '#DC2626'
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
                  background: loading ? '#D1D5DB' : '#FF6B35',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginBottom: '1rem'
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.target.style.background = '#E85A24';
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.target.style.background = '#FF6B35';
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
                  color: '#71717A',
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
