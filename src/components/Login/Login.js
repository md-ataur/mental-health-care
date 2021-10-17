import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initAuthentication from '../../firebase/firebase.init';

initAuthentication();

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Password must contain one special letter.');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contain 1 uppercase');
            return;
        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);

    }

    // login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Register
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // console.log(result.user);
                setError('');
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(result => { })
    }


    // Name Field
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // Email Field
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // Password Field
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // Checkbox
    const toggleLogin = (e) => {
        console.log(e.target.checked);
        setIsLogin(e.target.checked);
    }


    return (
        <div>
            <div className="w-full max-w-sm m-auto pt-12">
                <h3 className="text-center py-4 text-2xl font-medium text-blue-600">
                    {isLogin ? ' Login' : ' Register'}
                </h3>
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {error &&
                        <p className="text-red-500 italic mb-3">{error}</p>
                    }
                    {!isLogin &&
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="Name">Name</label>
                            <input onBlur={handleNameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="name" type="text" required />
                        </div>
                    }
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="Email">Email</label>
                        <input onBlur={handleEmailChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="email" type="email" required />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                        <input onBlur={handlePassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring" id="password" type="password" required />
                    </div>
                    <div className="mb-6">
                        <input onChange={toggleLogin} type="checkbox" name="" id="" />
                        <label className="text-gray-600" htmlFor="Already Registered"> Already Registered?</label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {isLogin ? "Login" : "Register"}
                        </button>
                        {isLogin &&
                            <button className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
                                Forgot Password?
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;