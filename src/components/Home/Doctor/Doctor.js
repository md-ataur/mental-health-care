import React from 'react';

const Doctor = (props) => {
    const { id, name, title, image, specialists } = props.doctor;

    return (
        <div className="shadow-md mx-auto mb-3 max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div className="max-h-50 overflow-hidden">
                <img className="w-full h-auto" src={image} alt="" />
            </div>
            <div className="p-5 my-auto">
                <h1 className="text-xl font-semibold text-gray-700 mb-1">{name}</h1>
                <p className="text-gray-500 mb-3 font-medium">{specialists}</p>
                <p className="text-gray-600">
                    {title.slice(0, 60)}
                </p>
            </div>
        </div>
    );
};

export default Doctor;