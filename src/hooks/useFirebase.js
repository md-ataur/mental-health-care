import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initAuthentication from "../firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // login
    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Registration
    const registerNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }

            setIsLoading(false)
        });
    }, []);

    // logout
    const logout = () => {
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoading(false)
            });
    }

    return {
        user,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        processLogin,
        registerNewUser,
        logout,
    }
}

export default useFirebase;