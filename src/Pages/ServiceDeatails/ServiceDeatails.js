import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from './ReviewSection';
import ServiceSection from './ServiceSection';

const ServiceDeatails = () => {

    const service = useLoaderData();

    return (
        <div>
            <ServiceSection service={service}></ServiceSection>
            <ReviewSection service={service}></ReviewSection>
        </div>
    );
};

export default ServiceDeatails;