import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div className="max-w-7xl m-auto md:flex justify-between items-center px-5 py-4 mb-6 md:mb-0">
            <div>
                <Link to="/"><img className="w-80 m-auto" src={logo} alt="logo" /></Link>
            </div>
            <div className="nav-menu text-center md:text-left my-4 md:my-0">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </div>
            <div className="text-center md:text-left ">
                {!user?.email ?
                    <span><Link className="primary-btn" to="/login">Login</Link></span>
                    :
                    <div>
                        <span className="user mr-3">{user?.displayName}</span>
                        <span><button className="primary-btn" onClick={logout}>Logout</button></span>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;