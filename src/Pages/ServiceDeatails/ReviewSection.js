import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewSection = ({ service }) => {


    const { user } = useContext(AuthContext);
    const { title, _id } = service;

    const handlePlaceOrder = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value || '0';
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            serviceName: title,
            servicesId: _id,
            tourist: name,
            email,
            photoURL,
            rating,
            message
        };

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('review added successfully');
                    form.reset();
                }
            }).catch(er => console.error(er));

    };

    return (
        <div className='container mx-auto my-10'>
            <h2 className="text-4xl">You are about to order: <span className='font-bold text-yellow-900'>{title}</span></h2>
            <form className='p-4' onSubmit={handlePlaceOrder}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Full Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="photoURL" type="text" placeholder="photoURL" className="input input-ghost w-full  input-bordered" required />
                    <input name="rating" type="text" placeholder="rating" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your Message" required></textarea>

                <input className='btn' type="submit" value="Give a Review" />
            </form>
        </div>
    );
};

export default ReviewSection;