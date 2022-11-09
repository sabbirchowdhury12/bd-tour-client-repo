import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewItem from './ReviewItem';

const ShowAllReviews = ({ service }) => {
    const { _id } = service;

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className='container mx-auto'>
            <h2 className="text-5xl text-center text-yellow-900 mt-20 mb-5">There is {reviews.length} review</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewItem
                                key={review._id}
                                review={review}
                            ></ReviewItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowAllReviews;