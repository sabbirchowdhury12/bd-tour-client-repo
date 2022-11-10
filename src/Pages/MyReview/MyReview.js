import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';
import MyReviewItem from './MyReviewItem';


const MyReview = () => {


    useTitle('your Review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://my-assaignment-11-server-side.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, [user?.email]);


    const handleDelete = (id) => {
        fetch(`https://my-assaignment-11-server-side.vercel.app/reviews/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Delete review successfully');
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                }
            });
    };


    return (
        <div className='bg-gray-200'>
            {
                reviews.length > 0 ? <h2 className='text-3xl text-center text-yellow-900 pt-10 '>Your Review</h2> : undefined

            }
            <div className="overflow-x-auto py-10 h-screen">
                <table className="table w-full">
                    <thead>
                        {
                            reviews.length > 0 ? <tr>
                                <th>Delete</th>
                                <th>Name</th>
                                <th>Service name</th>
                                <th>Review</th>
                                <th>EDiT</th>
                            </tr> : <tr className='text-center  text-yellow-900 block'><th className='block text-2xl'>No reviews were added</th></tr>
                        }
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <MyReviewItem key={review._id} review={review} handleDelete={handleDelete}></MyReviewItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;