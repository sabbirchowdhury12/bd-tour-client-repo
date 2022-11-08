import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, desc, img, price, rating, review, serviceId, title } = service;
    const des = desc.slice(0, 100);
    return (
        <div className="card shadow-md hover:shadow-2xl ">
            <img src={img} className='h-60 transition-all duration-500 hover:scale-75' alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{des}...
                </p>
                <p>Review: {review}</p>
                <div className="flex justify-between ">
                    <div className=" ">Full Day</div>
                    <div className="justify-end ">${price}</div>
                </div>
                <Link to={`services/${_id}`}><button className="btn btn-outline">Button</button></Link>
            </div>
        </div>
    );
};

export default ServicesCard;