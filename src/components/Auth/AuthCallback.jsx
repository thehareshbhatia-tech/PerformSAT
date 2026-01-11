import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const AuthCallback = ({ onComplete }) => {
  const { completeMagicLinkSignIn } = useAuth();
  const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
  const [error, setError] = useState('');

  useEffect(() => {
    const handleSignIn = async () => {
      try {
        // Get the stored signup data
        const signupDataStr = window.localStorage.getItem('userSignupData');
        if (!signupDataStr) {
          throw new Error('Sign-in data not found. Please try signing in again.');
        }

        const signupData = JSON.parse(signupDataStr);

        // Check if data is not expired (15 minutes)
        const now = Date.now();
        if (now - signupData.timestamp > 15 * 60 * 1000) {
          throw new Error('Sign-in link has expired. Please request a new one.');
        }

        // Get school data
        const { validateSchoolCode } = await import('../../services/schoolService');
        const school = await validateSchoolCode(signupData.schoolCode);

        if (!school) {
          throw new Error('Invalid school code. Please try signing in again.');
        }

        // Complete the sign-in
        await completeMagicLinkSignIn(window.location.href, school);

        setStatus('success');

        // Redirect after a short delay
        setTimeout(() => {
          onComplete();
        }, 1500);
      } catch (err) {
        console.error('Error completing sign-in:', err);
        setError(err.message || 'Failed to complete sign-in');
        setStatus('error');
      }
    };

    handleSignIn();
  }, [completeMagicLinkSignIn, onComplete]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '48px',
        borderRadius: '16px',
        maxWidth: '450px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        {status === 'verifying' && (
          <>
            <div style={{
              width: '64px',
              height: '64px',
              border: '4px solid #e5e7eb',
              borderTop: '4px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 24px'
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '12px',
              color: '#1f2937'
            }}>
              Verifying Your Identity
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '14px'
            }}>
              Please wait while we sign you in...
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{
              fontSize: '64px',
              marginBottom: '24px'
            }}>✓</div>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '12px',
              color: '#10b981'
            }}>
              Success!
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '14px'
            }}>
              Redirecting you to your dashboard...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{
              fontSize: '64px',
              marginBottom: '24px',
              color: '#ef4444'
            }}>✕</div>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '12px',
              color: '#ef4444'
            }}>
              Sign-In Failed
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              marginBottom: '24px'
            }}>
              {error}
            </p>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;
