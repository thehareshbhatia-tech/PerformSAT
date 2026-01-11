import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { validateSchoolCode } from '../../services/schoolService';

const StudentLandingPage = () => {
  const [step, setStep] = useState('school-code');
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
      background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', fontWeight: '700', letterSpacing: '-1.5px', marginBottom: '24px' }}>
          <span style={{ color: '#1d1d1f' }}>Perform</span>
          <span style={{ color: '#ea580c' }}>SAT</span>
        </div>
      </div>

      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(234, 88, 12, 0.1)',
        padding: '56px',
        width: '100%',
        maxWidth: '480px',
        border: '2px solid rgba(234, 88, 12, 0.1)'
      }}>
        {step === 'school-code' && (
          <>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #ea580c, #f97316)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 8px 16px rgba(234, 88, 12, 0.2)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              letterSpacing: '-1px',
              color: '#1d1d1f',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Student Portal
            </h1>
            <p style={{
              fontSize: '17px',
              color: '#6b7280',
              marginBottom: '40px',
              textAlign: 'center',
              lineHeight: '1.5'
            }}>
              Master SAT Math concepts at your own pace
            </p>
          </>
        )}

        {step === 'login' && school && (
          <>
            <div style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#ea580c',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              {school.name || 'Your School'}
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '-0.5px',
              color: '#1d1d1f',
              marginBottom: '12px',
              textAlign: 'center'
            }}>
              Welcome Back
            </h1>
            <p style={{
              fontSize: '15px',
              color: '#6b7280',
              marginBottom: '36px',
              textAlign: 'center'
            }}>
              Sign in to continue learning
            </p>
          </>
        )}

        {step === 'school-code' && (
          <form onSubmit={handleSchoolCodeSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '10px'
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
                  padding: '14px 18px',
                  fontSize: '17px',
                  border: '2px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ea580c';
                  e.target.style.background = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                  e.target.style.background = '#fafafa';
                }}
              />
            </div>

            {error && (
              <div style={{
                padding: '14px 18px',
                background: '#fef2f2',
                border: '2px solid #fecaca',
                borderRadius: '12px',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#dc2626',
                fontWeight: '500'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !schoolCode}
              style={{
                width: '100%',
                padding: '16px',
                background: loading || !schoolCode ? '#d1d5db' : 'linear-gradient(135deg, #ea580c, #f97316)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                cursor: loading || !schoolCode ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                boxShadow: loading || !schoolCode ? 'none' : '0 4px 12px rgba(234, 88, 12, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!loading && schoolCode) e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                if (!loading && schoolCode) e.target.style.transform = 'translateY(0)';
              }}
            >
              {loading ? 'Validating...' : 'Continue'}
            </button>
          </form>
        )}

        {step === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '10px'
              }}>
                First Name (optional)
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  fontSize: '17px',
                  border: '2px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ea580c';
                  e.target.style.background = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                  e.target.style.background = '#fafafa';
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '10px'
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
                  padding: '14px 18px',
                  fontSize: '17px',
                  border: '2px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ea580c';
                  e.target.style.background = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                  e.target.style.background = '#fafafa';
                }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{
                display: 'block',
                fontSize: '15px',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '10px'
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                minLength="6"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  fontSize: '17px',
                  border: '2px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ea580c';
                  e.target.style.background = '#ffffff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                  e.target.style.background = '#fafafa';
                }}
              />
              <p style={{
                fontSize: '13px',
                color: '#9ca3af',
                marginTop: '8px'
              }}>
                Minimum 6 characters
              </p>
            </div>

            <div style={{
              padding: '14px 18px',
              background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.05), rgba(249, 115, 22, 0.05))',
              borderRadius: '12px',
              marginBottom: '28px',
              fontSize: '14px',
              color: '#ea580c',
              textAlign: 'center',
              fontWeight: '500',
              border: '1px solid rgba(234, 88, 12, 0.1)'
            }}>
              New student? Your account will be created automatically
            </div>

            {error && (
              <div style={{
                padding: '14px 18px',
                background: '#fef2f2',
                border: '2px solid #fecaca',
                borderRadius: '12px',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#dc2626',
                fontWeight: '500'
              }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !email || !password}
              style={{
                width: '100%',
                padding: '16px',
                background: loading || !email || !password ? '#d1d5db' : 'linear-gradient(135deg, #ea580c, #f97316)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '17px',
                fontWeight: '600',
                cursor: loading || !email || !password ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit',
                marginBottom: '16px',
                boxShadow: loading || !email || !password ? 'none' : '0 4px 12px rgba(234, 88, 12, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!loading && email && password) e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                if (!loading && email && password) e.target.style.transform = 'translateY(0)';
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
                padding: '14px',
                background: 'transparent',
                color: '#6b7280',
                border: '2px solid rgba(0,0,0,0.08)',
                borderRadius: '12px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = '#f9fafb';
                  e.target.style.borderColor = 'rgba(0,0,0,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                }
              }}
            >
              ← Back
            </button>
          </form>
        )}
      </div>

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

export default StudentLandingPage;
