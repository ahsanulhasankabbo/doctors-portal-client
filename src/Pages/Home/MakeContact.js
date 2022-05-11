import React from 'react';
import appointment from '../../assets/images/appointment.png'

const MakeContact = () => {
    return (
        <section Class='py-16' style={{
            backgroundImage: `url(${appointment})`
        }}>
            <div Class='text-center'>
                <h3 Class='text-primary text-xl font-semibold'>Contact Us</h3>
                <h1 Class='text-3xl text-white mb-5'>Stay connected with us</h1>
            </div>
            <div Class='text-center'>
                <input type="text" placeholder="Email Address" Class="input input-bordered w-full max-w-xs mb-3" /> <br />
                <input type="text" placeholder="Subject" Class="input input-bordered w-full max-w-xs mb-3" /> <br />
                <input type="text" placeholder="Your Message" Class="input input-bordered w-full max-w-xs" />
            </div>
        </section>
    );
};

export default MakeContact;