import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import aboutImg from '../../../images/banner-2.jpg';

const Banner = () => {
    return (
        <div>
            <div className="banner mb-10 md:mb-20">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="hero-text">
                        <h1>Mental Health and Wellness</h1>
                        <p>Mental health problems are common but help is available. People with mental health problems can get better and many recover completely.</p>
                        <div><Link to="/services"><button className="primary-btn">OUR SERVICES</button></Link></div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 mb-10 md:mb-20 grid gap-10 grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl text-gray-500 mb-1">A GREAT PLACE</h2>
                    <h2 className="text-4xl text-gray-600 mb-4 font-semibold">FOR MEDICAL CARE</h2>
                    <p className="text-gray-600 leading-7 mb-6">Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status, prognostication, segregation of the ill to limit communication of illness, and helping to cope with the problems of illness--the caring function. Medical care serving these "paracurative" functions may legitimately be given indepedently, without associated curing or preventive intent of the provider of care. Although such services do not result in benefits to health, such as extension of life or reduction of disability, they do have other valued outcomes, outcomes not measurable as a gain in personal health status.</p>
                    <p><span className="primary-btn">About More</span></p>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;