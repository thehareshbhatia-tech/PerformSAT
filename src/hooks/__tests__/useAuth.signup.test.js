/**
 * Tests for the signup consent contract in useAuth.
 *
 * buildSignupUserDoc is the pure helper extracted from signup so the
 * users/{uid} doc shape — including the new consent stamp
 * (agreedToTermsAt + termsVersion) — is testable without a renderer
 * (@testing-library/react is NOT installed; module-API tests only, per
 * the Toaster.test.js convention). The hook's throw-on-no-consent guard
 * needs a renderer to invoke, so the testable surface is this doc
 * contract plus the LandingPage required+guard.
 *
 * Firebase is mocked following the skillService.test.js convention.
 */

jest.mock('../../firebase/config', () => ({ auth: {}, db: {} }));
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  onAuthStateChanged: jest.fn(() => jest.fn()),
  signOut: jest.fn(),
}));
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
  setDoc: jest.fn(),
  serverTimestamp: jest.fn(),
}));

import { serverTimestamp } from 'firebase/firestore';
import { buildSignupUserDoc } from '../useAuth';
import { TERMS_VERSION } from '../../constants/legal';

// CRA's jest config sets resetMocks: true, so implementations must be
// (re)installed per test, not in the module factory.
beforeEach(() => {
  serverTimestamp.mockReturnValue('SERVER_TS');
});

describe('buildSignupUserDoc', () => {
  test('stamps consent fields: agreedToTermsAt + termsVersion', () => {
    const userDoc = buildSignupUserDoc('a@b.com', 'Ana', { agreedToTerms: true });
    expect(userDoc.agreedToTermsAt).toBe('SERVER_TS');
    expect(userDoc.termsVersion).toBe(TERMS_VERSION);
  });

  test('legacy field regression: shape matches the original signup literal', () => {
    const userDoc = buildSignupUserDoc('a@b.com', 'Ana', {
      hasTakenSAT: true,
      satScore: 640,
      agreedToTerms: true,
    });
    expect(userDoc).toEqual({
      email: 'a@b.com',
      firstName: 'Ana',
      role: 'student',
      hasTakenSAT: true,
      satScore: 640,
      agreedToTermsAt: 'SERVER_TS',
      termsVersion: TERMS_VERSION,
      createdAt: 'SERVER_TS',
      lastLoginAt: 'SERVER_TS',
    });
  });

  test('firstName falls back to the email prefix', () => {
    const userDoc = buildSignupUserDoc('study.buddy@example.com', '', {});
    expect(userDoc.firstName).toBe('study.buddy');
  });

  test('defaults: hasTakenSAT false, satScore null when additionalInfo omitted', () => {
    const userDoc = buildSignupUserDoc('a@b.com', 'Ana');
    expect(userDoc.hasTakenSAT).toBe(false);
    expect(userDoc.satScore).toBeNull();
    expect(userDoc.role).toBe('student');
  });
});

describe('TERMS_VERSION', () => {
  test('is a non-empty YYYY-MM-DD string', () => {
    expect(typeof TERMS_VERSION).toBe('string');
    expect(TERMS_VERSION).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
