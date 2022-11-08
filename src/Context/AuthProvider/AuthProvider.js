import React from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    //sign With Google
    const signWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const authInfo = {
        signWithGoogle,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;