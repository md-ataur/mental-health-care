import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const { signInWithGoogle, processLogin, registerNewUser, error } = useAuth();

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        isRegister ? registerNewUser(email, password, name) : processLogin(email, password);

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
            <div className="w-full max-w-sm m-auto pt-12">
                <h3 className="text-center py-4 text-3xl font-medium text-gray-600">
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
                        <button onClick={signInWithGoogle} className="w-full bg-yellow-500 hover:bg-yellow-600 py-3 px-4 text-white rounded-md">Google Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;