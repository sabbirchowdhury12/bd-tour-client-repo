import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateMyReview = () => {
    const prevReview = useLoaderData();
    const { tourist, rating, message } = prevReview;

    console.log(prevReview);
    const [review, setReview] = useState({});

    const handleUpdateUser = (event) => {
        event.preventDefault();

        fetch(`https://my-assaignment-11-server-side.vercel.app/review/${prevReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('update done');
                }

            });
    };

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...review };
        newUser[field] = value;
        setReview(newUser);
    };



    return (
        <div className='h-screen mt-20'>
            <h2 className='text-center text-2xl font-bold text-yellow-900'> Update for {prevReview.serviceName}</h2>
            <form className='p-4' onSubmit={handleUpdateUser}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input onChange={handleInputChange} name="tourist" type="text" placeholder="Full Name" className="input input-ghost w-full  input-bordered" required />

                    <input onChange={handleInputChange} name="rating" type="text" placeholder="rating" className="input input-ghost w-full  input-bordered" required />

                </div>
                <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your Message" required></textarea>

                <input className='btn btn-secondary' type="submit" value="Update Review" />
            </form>
        </div>

    );
};

export default UpdateMyReview;