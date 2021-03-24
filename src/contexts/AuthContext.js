/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { googleProvider } from "../firebase";
import { facebookProvider } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [signInSpinner, startSignInSpinner] = useState(false);
  const [signUpSpinner, startSignUpSpinner] = useState(false);
  const [signOutSpinner, startSignOutSpinner] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function signInWithFacebook() {
    return auth.signInWithPopup(facebookProvider);
  }

  function signInWithGoogle() {
    return auth.signInWithPopup(googleProvider);
  }

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signOut() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      startSignInSpinner(false);
      startSignOutSpinner(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    signInWithFacebook,
    signInWithGoogle,
    signUpSpinner,
    startSignUpSpinner,
    signOutSpinner,
    startSignOutSpinner,
    signInSpinner,
    startSignInSpinner,
    isUserLoggedIn,
    setIsUserLoggedIn,
    signOut,
    signIn,
    setLoading,
    loading,
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
