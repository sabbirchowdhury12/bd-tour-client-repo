import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../Home/Services/ServicesCard';

const AllServices = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map((service) => <ServicesCard key={service.serviceId} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;