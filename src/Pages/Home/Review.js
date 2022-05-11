import React from 'react';

const Review = ({ review }) => {
    return (
        <div Class="card bg-base-100 shadow-xl my-12">
            <div Class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit id maxime possimus nostrum, architecto ad?</p>
                <div Class="flex items-center">
                    <div Class="avatar">
                        <div Class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.image} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 Class='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;