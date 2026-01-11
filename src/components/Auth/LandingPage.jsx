import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { validateSchoolCode } from '../../services/schoolService';

const LandingPage = ({ isAdmin }) => {
  const [step, setStep] = useState('school-code'); // 'school-code' or 'login'
  const [schoolCode, setSchoolCode] = useState('');
  const [school, setSchool] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signInWithPassword } = useAuth();

  const handleSchoolCodeSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const validatedSchool = await validateSchoolCode(schoolCode);
      if (validatedSchool) {
        setSchool(validatedSchool);
        setStep('login');
      } else {
        setError('Invalid school code. Please check with your school administrator.');
      }
    } catch (err) {
      setError('Error validating school code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithPassword(email, password, schoolCode, firstName);
      // Auth state change will trigger redirect via App.jsx routing
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep('school-code');
    setEmail('');
    setPassword('');
    setFirstName('');
    setError('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      {/* Logo */}
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-1px', marginBottom: '16px' }}>
          <span style={{ color: '#1d1d1f' }}>Perform</span>
          <span style={{ color: '#ea580c' }}>SAT</span>
        </div>
      </div>

      {/* Main Card */}
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '48px',
        width: '100%',
        maxWidth: '440px',
        border: '1px solid rgba(0,0,0,0.06)'
      }}>
        {/* Title */}
        {step === 'school-code' && (
          <>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '-0.5px',
              color: '#1d1d1f',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              {isAdmin ? 'Admin Portal' : 'Student Portal'}
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              {isAdmin
                ? 'Monitor student progress and performance'
                : 'Master SAT Math concepts at your own pace'}
            </p>
          </>
        )}

        {step === 'login' && school && (
          <>
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#ea580c',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              {school.name || 'Your School'}
            </div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '700',
              letterSpacing: '-0.5px',
              color: '#1d1d1f',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              {isAdmin ? 'Admin Sign In' : 'Student Sign In'}
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Enter your credentials to continue
            </p>
          </>
        )}

        {/* School Code Form */}
        {step === 'school-code' && (
          <form onSubmit={handleSchoolCodeSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1d1d1f',
                marginBottom: '8px'
              }}>
                School Code
              </label>
              <input
                type="text"
                value={schoolCode}
                onChange={(e) => setSchoolCode(e.target.value.toUpperCase())}
                placeholder="Enter your school code"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ea580c'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
              />
            </div>

            {error && (
              <div style={{
                padding: '12px 16px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#dc2626'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !schoolCode}
              style={{
                width: '100%',
                padding: '14px',
                background: loading || !schoolCode ? '#d1d5db' : '#ea580c',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading || !schoolCode ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!loading && schoolCode) e.target.style.background = '#c2410c';
              }}
              onMouseLeave={(e) => {
                if (!loading && schoolCode) e.target.style.background = '#ea580c';
              }}
            >
              {loading ? 'Validating...' : 'Continue'}
            </button>
          </form>
        )}

        {/* Login Form */}
        {step === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1d1d1f',
                marginBottom: '8px'
              }}>
                First Name (optional for returning users)
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ea580c'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1d1d1f',
                marginBottom: '8px'
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
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ea580c'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1d1d1f',
                marginBottom: '8px'
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                minLength="6"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ea580c'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.12)'}
              />
              <p style={{
                fontSize: '12px',
                color: '#9ca3af',
                marginTop: '6px'
              }}>
                Minimum 6 characters
              </p>
            </div>

            <div style={{
              padding: '12px 16px',
              background: '#f3f4f6',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#6b7280',
              textAlign: 'center'
            }}>
              New user? Your account will be created automatically
            </div>

            {error && (
              <div style={{
                padding: '12px 16px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#dc2626'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !email || !password}
              style={{
                width: '100%',
                padding: '14px',
                background: loading || !email || !password ? '#d1d5db' : '#ea580c',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading || !email || !password ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
                fontFamily: 'inherit',
                marginBottom: '16px'
              }}
              onMouseEnter={(e) => {
                if (!loading && email && password) e.target.style.background = '#c2410c';
              }}
              onMouseLeave={(e) => {
                if (!loading && email && password) e.target.style.background = '#ea580c';
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <button
              type="button"
              onClick={handleBack}
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                background: 'transparent',
                color: '#6b7280',
                border: '1px solid rgba(0,0,0,0.12)',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = '#f9fafb';
                  e.target.style.borderColor = 'rgba(0,0,0,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(0,0,0,0.12)';
                }
              }}
            >
              ← Back to school code
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '48px',
        fontSize: '13px',
        color: '#9ca3af',
        textAlign: 'center'
      }}>
        © 2025 PerformSAT
      </div>
    </div>
  );
};

export default LandingPage;
