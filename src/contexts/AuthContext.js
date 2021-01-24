import React, { useState, createContext, useEffect } from 'react'
import { auth } from '../firebase';

export const AuthContext = createContext();

// provider hook that create and handle auth
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(authUser => {
            authUser ? setUser(authUser) : setUser(null);
            console.log(authUser)
        })

        return () => unsubcribe();
    }, []);

    const signup = (email, password, username) => {
        return auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user)
                return response.user.updateProfile({
                    displayName : username
                });
            })
            .catch(error => alert(error.message))
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                setUser(response.user);
                return response.user;
            })
            .catch(error => alert(error.message))
    }

    const signout = () => {
        return auth.signOut().then(() => setUser(null))
    }

    return(
        <AuthContext.Provider
            value={{user, signup, signin, signout}}
        >
            {children}
        </AuthContext.Provider>
    )
}






