import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewItem from './ReviewItem';

const ShowAllReviews = ({ reviews }) => {

    return (
        <div className='container mx-auto'>
            <h2 className="text-4xl text-center text-yellow-900 mt-20 mb-5">There is {reviews.length} review for this service</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        {
                            reviews.length ? <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Place</th>
                                <th>Review</th>
                                <th></th>
                            </tr> : null
                        }
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