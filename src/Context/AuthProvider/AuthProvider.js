import React from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    //create user with email and password
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //sign With Google
    const signWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    };

    //upadte user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    //set user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    //log out
    const logOut = () => {
        return signOut(auth);
    };

    const authInfo = {
        signWithGoogle,
        user,
        createUserWithEmail,
        updateUserProfile,
        logOut,
        loginWithEmail
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;