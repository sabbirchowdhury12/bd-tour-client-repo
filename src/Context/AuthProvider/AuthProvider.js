import React from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
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

    //set user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        signWithGoogle,
        user,
        createUserWithEmail
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;