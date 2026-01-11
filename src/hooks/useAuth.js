import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const actionCodeSettings = {
  url: window.location.origin + '/auth/verify',
  handleCodeInApp: true,
};

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch user profile from Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              ...userDoc.data()
            });
          } else {
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email
            });
          }
        } catch (err) {
          console.error('Error fetching user profile:', err);
          setError(err.message);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  /**
   * Sends magic link to user's email
   * @param {string} email - User's email
   * @param {string} firstName - User's first name
   * @param {string} schoolCode - School code
   * @returns {Promise<void>}
   */
  const sendMagicLink = async (email, firstName, schoolCode) => {
    try {
      setError(null);

      // Store user data temporarily in localStorage
      window.localStorage.setItem('emailForSignIn', email);
      window.localStorage.setItem('userSignupData', JSON.stringify({
        email,
        firstName,
        schoolCode: schoolCode.toUpperCase(),
        timestamp: Date.now()
      }));

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      return { success: true };
    } catch (err) {
      console.error('Error sending magic link:', err);
      setError(err.message);
      throw err;
    }
  };

  /**
   * Completes the sign-in flow after clicking magic link
   * @param {string} url - The URL from the magic link
   * @param {Object} school - School data
   * @returns {Promise<Object>} User object
   */
  const completeMagicLinkSignIn = async (url, school) => {
    try {
      setError(null);

      if (!isSignInWithEmailLink(auth, url)) {
        throw new Error('Invalid sign-in link');
      }

      // Get email from localStorage
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }

      // Sign in with email link
      const result = await signInWithEmailLink(auth, email, url);

      // Get stored signup data
      const signupDataStr = window.localStorage.getItem('userSignupData');
      const signupData = signupDataStr ? JSON.parse(signupDataStr) : {};

      // Check if user document exists
      const userDocRef = doc(db, 'users', result.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // Create new user document
        const userData = {
          email: result.user.email,
          firstName: signupData.firstName || email.split('@')[0],
          lastName: '',
          role: result.user.email === school.adminEmail ? 'principal' : 'student',
          schoolId: school.id,
          schoolCode: school.code,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
        };

        await setDoc(userDocRef, userData);

        // Create initial progress document
        const progressDocRef = doc(db, 'progress', result.user.uid);
        await setDoc(progressDocRef, {
          userId: result.user.uid,
          lastUpdated: serverTimestamp(),
          totalLessonsCompleted: 0,
          totalModulesCompleted: 0,
          completedLessons: {}
        });

        setUser({
          uid: result.user.uid,
          ...userData
        });
      } else {
        // Update last login time
        await setDoc(userDocRef, {
          lastLoginAt: serverTimestamp()
        }, { merge: true });

        setUser({
          uid: result.user.uid,
          email: result.user.email,
          ...userDoc.data()
        });
      }

      // Clear localStorage
      window.localStorage.removeItem('emailForSignIn');
      window.localStorage.removeItem('userSignupData');

      return user;
    } catch (err) {
      console.error('Error completing sign-in:', err);
      setError(err.message);
      throw err;
    }
  };

  /**
   * Logs out the current user
   */
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error('Error signing out:', err);
      setError(err.message);
      throw err;
    }
  };

  return {
    user,
    loading,
    error,
    sendMagicLink,
    completeMagicLinkSignIn,
    logout,
    isAuthenticated: !!user
  };
};
