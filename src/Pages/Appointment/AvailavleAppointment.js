import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailavleAppointment = ({ date }) => {
    const [services, setSetvices] = useState([]);
    const [treatment , setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setSetvices(data))
    }
        , [])
    return (
        <div>
            <h1 className='text-xl text-secondary text-center'>Available appointment on : {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailavleAppointment;