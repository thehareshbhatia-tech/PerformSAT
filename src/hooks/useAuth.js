import { useState, useEffect } from 'react';
import { signIn, signUp, signOut, getCurrentUser, onAuthStateChange } from '../services/authService';

/**
 * Custom hook for managing authentication state
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for existing session on mount
    const checkUser = async () => {
      const { user: currentUser } = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: authListener } = onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    // Cleanup subscription
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    const { user: loggedInUser, error: loginError } = await signIn(email, password);

    if (loginError) {
      setError(loginError);
      setLoading(false);
      return { success: false, error: loginError };
    }

    setUser(loggedInUser);
    setLoading(false);
    return { success: true, user: loggedInUser };
  };

  const register = async (email, password, name) => {
    setError(null);
    setLoading(true);

    const { user: newUser, error: signUpError } = await signUp(email, password, name);

    if (signUpError) {
      setError(signUpError);
      setLoading(false);
      return { success: false, error: signUpError };
    }

    setUser(newUser);
    setLoading(false);
    return { success: true, user: newUser };
  };

  const logout = async () => {
    setError(null);
    setLoading(true);

    const { error: signOutError } = await signOut();

    if (signOutError) {
      setError(signOutError);
      setLoading(false);
      return { success: false, error: signOutError };
    }

    setUser(null);
    setLoading(false);
    return { success: true };
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};
