"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "./Firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const signout = () => {
    signOut(auth);
  };

  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      return () => unSubscribe();
    });
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signout, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
export const UserAuth = () => {
  return useContext(AuthContext);
};
