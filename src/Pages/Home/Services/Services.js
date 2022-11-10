import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../../hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://my-assaignment-11-server-side.vercel.app/limitServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='my-8 w-4/5  mx-auto'>
            <h2 className='text-center text-3xl font-semibold py-5'>Our Tour</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map((service) => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='text-center py-5'>
                <Link to='services'>
                    <button className='btn btn-secondary'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;