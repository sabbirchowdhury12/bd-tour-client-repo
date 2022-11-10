import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceSection = ({ service }) => {

    const { title, img, desc, rating, review, price } = service;

    return (
        <div>
            <div className='p-5 bg-gray-900	 text-white'>
                <div className='text-center grid grid-cols-1 gap-3 justify-center items-center'>
                    <div className='w-4/5 h-4/5 mx-auto border-8 border-warning'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} className='w-full h-full' alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        {/* <img src={img} className='w-full h-full' alt="" /> */}
                    </div>
                    <div>
                        <h2 className='text-4xl font-semibold text-warning'>{title} - ${price}</h2>
                        <p className='text-xl py-5 leading-9'>{desc}</p>
                        <p className='text-xl'>Total Review: {review ? review : '0'}</p>
                        <p className='text-xl'>Rating: {rating ? rating : "0"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;