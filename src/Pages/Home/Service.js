import React from 'react';

const Service = ({service}) => {
    return (
        <div Class="card w-96 bg-base-100 shadow-xl">
            <figure Class="px-10 pt-10">
                <img src={service.image} alt="Shoes" Class="rounded-xl" />
            </figure>
            <div Class="card-body items-center text-center">
                <h2 Class="card-title">{service.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Service;