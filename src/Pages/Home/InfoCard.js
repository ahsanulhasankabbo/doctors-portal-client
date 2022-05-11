import React from 'react';

const InfoCard = ({img,cardTitle,bgClass}) => {
    return (
        <div Class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure Class='pl-5 pt-5'><img src={img} alt="Album" /></figure>
            <div Class="card-body text-white">
                <h2 Class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;