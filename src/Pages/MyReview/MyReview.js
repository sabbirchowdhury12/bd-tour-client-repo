import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewItem from './MyReviewItem';


const MyReview = () => {


    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email]);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
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
        <div className="overflow-x-auto my-20 h-screen">
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
    );
};

export default MyReview;