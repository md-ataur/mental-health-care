import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceDetail = () => {
    const { id } = useParams();
    const [services] = useServices();

    const service = services.find(service => service.id === id);

    return (
        <div className="max-w-screen-lg m-auto px-4 py-6 md:py-20 md:flex justify-between">
            <div className="max-w-lg mb-4"><img src={service?.image} alt="" /></div>
            <div className="max-w-lg md:pl-14">
                <h2 className="text-4xl font-semibold text-gray-600 mb-4">{service?.title}</h2>
                <p className="mb-4">{service?.desc}</p>
                <p className="mb-2 text-lg text-gray-700">Appointment time: {service?.time}</p>
                <p className="mb-5 text-lg text-gray-700">Price: {service?.price} TK</p>
                <button className="primary-btn">Get Appointment</button>
            </div>
        </div>
    );
};

export default ServiceDetail;