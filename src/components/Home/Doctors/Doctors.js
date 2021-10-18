import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('../doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-5">
            <h2 className="text-center text-4xl text-gray-600 my-8 md:my-16 font-medium">
                OUR DOCTORS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-6 transform duration-500">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </section>
    );
};

export default Doctors;