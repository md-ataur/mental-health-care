import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-600 py-10 mt-10 md:mt-16">
                <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-4 text-center md:text-left">
                    <div className="footer-nav">
                        <h4>Our Offers</h4>
                        <ul>
                            <li><a href="#">Online Courses</a></li>
                            <li><a href="#">Mental Treatment</a></li>
                            <li><a href="#">Child Counselling</a></li>
                            <li><a href="#">Positive Parenting</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h4>Company Policy</h4>
                        <ul>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Condition</a></li>
                            <li><a href="#">Payment Options</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h4>Your Account</h4>
                        <ul>
                            <li><a href="#">Create Account</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">My Wishlist</a></li>
                            <li><a href="#">Order History</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <h4>Our Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Mental Treatment</a></li>
                            <li><a href="#">Counselling Team</a></li>
                            <li><a href="#">Support Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 text-gray-200 py-4 px-10 text-center">
                <p>Copyright &copy; 2021 All Rights Reserved by Mental Health Care.</p>
            </div>
        </div>
    );
};

export default Footer;