import { success } from 'daisyui/src/colors';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTitle } from '../../hooks/useTitle';

const AddService = () => {

    useTitle('add service');
    const time = {
        date: new Date(Date.now())
    };
    const [service, setService] = useState(time);



    const handleAddService = (event) => {
        event.preventDefault();

        fetch('https://my-assaignment-11-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('service added successfully');
                    // form.reset();
                }
            }).catch(error => console.error(error));
    };

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...service, ...time };
        newUser[field] = value;
        setService(newUser);
    };

    return (
        <div className='h-screen mt-10 container mx-auto'>
            <h2 className='text-center text-2xl font-bold text-yellow-900'> Please Add a Service</h2>
            <form className='p-4' onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input onChange={handleInputChange} name="title" type="text" placeholder="Place Name" className="input input-ghost w-full  input-bordered" required />

                    <input onChange={handleInputChange} name="img" type="text" placeholder="ImageUrl" className="input input-ghost w-full  input-bordered" required />

                    <input onChange={handleInputChange} name="rating" type="text" placeholder="rating" className="input input-ghost w-full  input-bordered" required />

                    <input onChange={handleInputChange} name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" required />

                    <input onChange={handleInputChange} name="review" type="text" placeholder="Total Review" className="input input-ghost w-full  input-bordered" required />

                </div>
                <textarea onChange={handleInputChange} name="desc" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Your Message" required></textarea>

                <input className='btn btn-secondary' type="submit" value="Add a Service" />
            </form>


        </div >
    );
};

export default AddService;