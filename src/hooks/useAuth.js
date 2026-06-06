import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

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
   * Sign up a new user with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @param {string} firstName - User's first name
   * @param {Object} additionalInfo - Additional user info (hasTakenSAT, satScore)
   * @returns {Promise<Object>} User object
   */
  const signup = async (email, password, firstName = '', additionalInfo = {}) => {
    try {
      setError(null);

      // 1. Create Firebase auth user
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // 2. Create user document in Firestore
      const userData = {
        email: result.user.email,
        firstName: firstName || email.split('@')[0],
        role: 'student',
        hasTakenSAT: additionalInfo.hasTakenSAT || false,
        satScore: additionalInfo.satScore || null,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp()
      };

      await setDoc(doc(db, 'users', result.user.uid), userData);

      // 3. Create progress document
      await setDoc(doc(db, 'progress', result.user.uid), {
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

      return {
        uid: result.user.uid,
        ...userData
      };
    } catch (err) {
      console.error('Error signing up:', err);
      let errorMessage = 'Failed to create account. Please try again.';

      if (err.code === 'auth/email-already-in-use') {
        errorMessage = 'This email is already registered. Please log in instead.';
      } else if (err.code === 'auth/weak-password') {
        errorMessage = 'Password must be at least 6 characters.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      }

      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  /**
   * Log in an existing user
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<Object>} User object
   */
  const login = async (email, password) => {
    try {
      setError(null);

      // Sign in with Firebase
      const result = await signInWithEmailAndPassword(auth, email, password);

      // Update last login time
      await setDoc(doc(db, 'users', result.user.uid), {
        lastLoginAt: serverTimestamp()
      }, { merge: true });

      // Fetch user data
      const userDoc = await getDoc(doc(db, 'users', result.user.uid));
      const userData = {
        uid: result.user.uid,
        email: result.user.email,
        ...userDoc.data()
      };

      setUser(userData);
      return userData;
    } catch (err) {
      console.error('Error logging in:', err);
      let errorMessage = 'Failed to log in. Please try again.';

      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect email or password.';
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = 'Please enter a valid email address.';
      }

      setError(errorMessage);
      throw new Error(errorMessage);
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

  /**
   * Update user's test date
   * @param {string} testDate - Test date in YYYY-MM-DD format
   */
  const updateTestDate = async (testDate) => {
    if (!user?.uid) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        testDate: testDate
      }, { merge: true });

      setUser(prev => ({ ...prev, testDate }));
    } catch (err) {
      console.error('Error updating test date:', err);
      throw err;
    }
  };

  /**
   * Update the user's profile photo.
   * @param {string|null} photoDataUrl - small data-URL JPEG (client-resized,
   *   ~10-60KB) stored inline on the user doc; pass null to remove the photo.
   *   Kept well under Firestore's 1MB doc limit by the caller's size guard.
   */
  const updateProfilePhoto = async (photoDataUrl) => {
    if (!user?.uid) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        photoDataUrl: photoDataUrl || null
      }, { merge: true });

      setUser(prev => ({ ...prev, photoDataUrl: photoDataUrl || null }));
    } catch (err) {
      console.error('Error updating profile photo:', err);
      throw err;
    }
  };

  /**
   * Update the user's display name (what the app calls them everywhere:
   * greeting, plan hero, sidebar).
   * @param {string} firstName
   */
  const updateFirstName = async (firstName) => {
    if (!user?.uid) return;
    const clean = (firstName || '').trim().slice(0, 40);
    if (!clean) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        firstName: clean
      }, { merge: true });

      setUser(prev => ({ ...prev, firstName: clean }));
    } catch (err) {
      console.error('Error updating name:', err);
      throw err;
    }
  };

  /**
   * Update user's target SAT Math score
   * @param {number} targetScore - Target score (200-800)
   */
  const updateTargetScore = async (targetScore) => {
    if (!user?.uid) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        targetScore: targetScore
      }, { merge: true });

      setUser(prev => ({ ...prev, targetScore }));
    } catch (err) {
      console.error('Error updating target score:', err);
      throw err;
    }
  };

  /**
   * Update user's current SAT Math score
   * @param {number} currentScore - Current score (200-800)
   */
  const updateCurrentScore = async (currentScore) => {
    if (!user?.uid) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        currentScore: currentScore
      }, { merge: true });

      setUser(prev => ({ ...prev, currentScore }));
    } catch (err) {
      console.error('Error updating current score:', err);
      throw err;
    }
  };

  /**
   * Update user's target schools and auto-calculate target score
   * @param {Array} schools - Array of school objects [{id, name, satMath}, ...]
   */
  const updateTargetSchools = async (schools) => {
    if (!user?.uid) return;

    try {
      // Calculate median score from selected schools
      const scores = schools.map(s => s.satMath);
      const sorted = [...scores].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      const medianScore = sorted.length % 2 === 0
        ? Math.round((sorted[mid - 1] + sorted[mid]) / 2)
        : sorted[mid];

      await setDoc(doc(db, 'users', user.uid), {
        targetSchools: schools,
        targetScore: medianScore
      }, { merge: true });

      setUser(prev => ({ ...prev, targetSchools: schools, targetScore: medianScore }));
    } catch (err) {
      console.error('Error updating target schools:', err);
      throw err;
    }
  };

  return {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    updateTestDate,
    updateTargetScore,
    updateCurrentScore,
    updateTargetSchools,
    updateProfilePhoto,
    updateFirstName,
    isAuthenticated: !!user
  };
};
