import React from 'react';

const Appointment = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 mb-10 md:mb-16">
            <h2 className="text-center text-4xl text-gray-600 my-10 font-medium">
                APPOINTMENT TIME
            </h2>
            <div>
                <p className="text-xl mb-3">- Morning 10:00 AM</p>
                <p className="text-xl mb-3">- Morning 12:00 AM</p>
                <p className="text-xl mb-3">- Afternoon 4:00 AM</p>
                <p className="text-xl mb-3">- Afternoon 5:00 AM</p>
                <p className="text-xl mb-3">- Evening 7:00 AM</p>
                <p className="text-xl mb-3">- Evening 8:00 AM</p>
            </div>
        </div>
    );
};

export default Appointment;