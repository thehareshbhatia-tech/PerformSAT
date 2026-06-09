/**
 * Legal constants shared by signup consent capture and the legal pages.
 *
 * TERMS_VERSION is stamped onto every new user doc at signup
 * (agreedToTermsAt + termsVersion via buildSignupUserDoc in useAuth.js).
 * Bump it (YYYY-MM-DD of the change) whenever the Terms of Service or
 * Privacy Policy copy materially changes, so we can tell which policy
 * version each account consented to.
 */
export const TERMS_VERSION = '2026-06-09';
export const TERMS_PATH = '/terms';
export const PRIVACY_PATH = '/privacy';
