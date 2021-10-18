import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initAuthentication from "../firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // console.log(result.user);
            }).catch((error) => {
                setError(error.message);
            });
    }

    // login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });

    }

    // Register
    const registerNewUser = (email, password, name) => {
        // Field Validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain one special letter.');
            return;
        }

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contain 1 uppercase letter');
            return;
        }

        // Create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(result.user);
                setError('');
                setUserName(name);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Set User Name
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => { })
    }

    // Observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, []);

    // logout
    const logout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            });
    }

    return {
        user,
        error,
        signInWithGoogle,
        processLogin,
        registerNewUser,
        setUserName,
        logout
    }
}

export default useFirebase;