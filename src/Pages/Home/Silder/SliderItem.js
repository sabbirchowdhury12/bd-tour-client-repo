import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full absolute  h-full" />
            </div>
            <div className="absolute left-8  md:left-24 top-1/4">
                <h1 className='text-2xl md:text-4xl font-bold text-white'>
                    WELCOME TO BD-TOUR
                </h1>
            </div>
            <div className="absolute left-8 w-2/5 md:left-24 top-1/3">
                <p className='text-xl text-white'>We will give you the best service. We are fully committed about your care.</p>
            </div>
            <div className="absolute  left-8 md:left-24  top-3/4">
                <Link to='/services'> <button className="btn btn-secondary mr-5">Explore Our Service</button></Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;