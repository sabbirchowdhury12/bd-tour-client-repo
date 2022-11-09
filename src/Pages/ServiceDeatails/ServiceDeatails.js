import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';
import ReviewSection from './ReviewSection';
import ServiceSection from './ServiceSection';

const ServiceDeatails = () => {

    useTitle('services details');
    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    return (
        <div>
            <ServiceSection service={service}></ServiceSection>
            {
                user?.uid ?
                    <ReviewSection service={service}></ReviewSection> :
                    <h2 className='text-4xl text-center my-10 font-semibold text-yellow-900'>You are not Login. To give a review please <Link to='/login' className='underline text-primary'>Login</Link></h2>
            }
        </div>
    );
};

export default ServiceDeatails;