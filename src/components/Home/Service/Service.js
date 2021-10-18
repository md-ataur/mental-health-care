import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, title, image, desc } = props.service
    return (
        <div className="shadow-md mx-auto mb-3 max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div className="max-h-50 overflow-hidden">
                <img className="w-full h-auto" src={image} alt="" />
            </div>
            <div className="p-5 my-auto">
                <h1 className="text-xl font-semibold text-gray-700 mb-2">{title}</h1>
                <p className="text-gray-500 mb-4">{desc.slice(0, 125)}...</p>
                <Link to={`detail/${id}`}><button className="primary-btn">View More</button></Link>
            </div>
        </div>
    );
};

export default Service;