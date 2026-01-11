import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { validateSchoolCode } from '../services/schoolService';

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
   * Signs in or creates a new user with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @param {string} schoolCode - School code
   * @param {string} firstName - User's first name (optional, for new users)
   * @returns {Promise<Object>} User object
   */
  const signInWithPassword = async (email, password, schoolCode, firstName = '') => {
    try {
      setError(null);

      // 1. Validate school code
      const school = await validateSchoolCode(schoolCode);
      if (!school) {
        throw new Error('Invalid school code. Please check with your school administrator.');
      }

      let result;
      let isNewUser = false;

      try {
        // 2. Try to sign in existing user
        result = await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
          // 3. Create new user if doesn't exist
          try {
            result = await createUserWithEmailAndPassword(auth, email, password);
            isNewUser = true;
          } catch (createErr) {
            if (createErr.code === 'auth/email-already-in-use') {
              throw new Error('Incorrect password. Please try again.');
            }
            throw createErr;
          }
        } else if (err.code === 'auth/wrong-password') {
          throw new Error('Incorrect password. Please try again.');
        } else if (err.code === 'auth/weak-password') {
          throw new Error('Password must be at least 6 characters.');
        } else {
          throw err;
        }
      }

      // 4. Check if user document exists
      const userDocRef = doc(db, 'users', result.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists() || isNewUser) {
        // 5. Determine role based on school's adminEmail
        const role = result.user.email === school.adminEmail ? 'principal' : 'student';

        // 6. Create user document
        const userData = {
          email: result.user.email,
          firstName: firstName || result.user.email.split('@')[0],
          lastName: '',
          role,
          schoolId: school.id,
          schoolCode: school.code,
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
        };

        await setDoc(userDocRef, userData);

        // 7. Create progress document for students
        if (role === 'student') {
          const progressDocRef = doc(db, 'progress', result.user.uid);
          await setDoc(progressDocRef, {
            userId: result.user.uid,
            lastUpdated: serverTimestamp(),
            totalLessonsCompleted: 0,
            totalModulesCompleted: 0,
            completedLessons: {}
          });
        }

        setUser({
          uid: result.user.uid,
          ...userData
        });

        return {
          uid: result.user.uid,
          ...userData
        };
      } else {
        // 8. Update last login time for existing users
        await setDoc(userDocRef, {
          lastLoginAt: serverTimestamp()
        }, { merge: true });

        const userData = {
          uid: result.user.uid,
          email: result.user.email,
          ...userDoc.data()
        };

        setUser(userData);
        return userData;
      }
    } catch (err) {
      console.error('Error signing in:', err);
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
    signInWithPassword,
    logout,
    isAuthenticated: !!user
  };
};
