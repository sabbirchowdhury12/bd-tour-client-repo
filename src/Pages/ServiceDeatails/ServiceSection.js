import React from 'react';

const ServiceSection = ({ service }) => {

    const { title, img, desc, rating, review, price } = service;

    return (
        <div>
            <div className='p-5 bg-gray-900	 text-white'>
                <div className='text-center grid grid-cols-1 gap-3 justify-center items-center'>
                    <div className='w-4/5 h-4/5 mx-auto border-8 border-warning'>
                        <img src={img} className='w-full h-full' alt="" />
                    </div>
                    <div>
                        <h2 className='text-4xl font-semibold text-warning'>{title} - ${price}</h2>
                        <p className='text-xl py-5 leading-9'>{desc}</p>
                        <p className='text-xl'>Total Review: {review}</p>
                        <p className='text-xl'>Rating: {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;