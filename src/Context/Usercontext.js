import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const authUserContext = createContext();
const auth = getAuth(app);
const Usercontext = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setUser(currentuser);
    });
    return () => unsubscribe;
  }, []);

  const authInfo = { user, createNewUser, userSignin, userSignOut };

  return (
    <authUserContext.Provider value={authInfo}>
      {children}
    </authUserContext.Provider>
  );
};

export default Usercontext;
