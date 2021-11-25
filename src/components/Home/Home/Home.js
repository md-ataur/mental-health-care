import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="static mb-10 md:mb-16">
                <div className="max-w-7xl mx-auto px-5 text-center">
                    <p className="text-2xl text-gray-300 py-20">“Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open.” <br /><br />
                        — Dan Millman</p>
                </div>
            </div>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;