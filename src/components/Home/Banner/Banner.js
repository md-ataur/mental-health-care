import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="max-w-7xl mx-auto px-5">
                <div className="hero-text">
                    <h1>Mental Health and Wellness</h1>
                    <p>Mental health problems are common but help is available. People with mental health problems can get better and many recover completely.</p>
                    <div><Link to="/services"><button className="primary-btn">OUR SERVICES</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;