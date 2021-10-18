import React, { useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const auth = getAuth();

    // Firebase auth functions
    const { signInWithGoogle, processLogin, registerNewUser, setIsLoading } = useAuth();

    // Redirect to the actual location
    const redirectUri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then((result) => {
                history.push(redirectUri);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isRegister) {
            setIsLoading(true);

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

            registerNewUser(email, password)
                .then((result) => {
                    setUserName();
                    history.push(redirectUri);
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
        else {
            setIsLoading(true);
            processLogin(email, password)
                .then((result) => {
                    history.push(redirectUri);
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
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
        setIsRegister(e.target.checked);
    }


    return (
        <div>
            <div className="w-full max-w-sm m-auto px-5 mb-8 md:mb-16">
                <h3 className="text-center my-8 text-4xl font-medium text-gray-600">
                    {!isRegister ? ' Login' : ' Register'}
                </h3>
                <div className="bg-white border border-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-5">
                    <form onSubmit={handleSubmit}>
                        {error &&
                            <p className="text-red-500 italic mb-3">{error}</p>
                        }
                        {isRegister &&
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
                            <label className="text-gray-600" htmlFor="Create An Account"> Create an account</label>
                        </div>
                        <div className="flex items-center">
                            <button type="submit" className="primary-btn w-full mb-3">
                                {!isRegister ? "Login" : "Register"}
                            </button>
                        </div>
                    </form>
                    <div>
                        <button onClick={handleGoogleSignIn} className="w-full bg-yellow-500 hover:bg-yellow-600 py-3 px-4 text-white rounded-md">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;