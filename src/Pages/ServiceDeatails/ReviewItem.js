import React from 'react';

const ReviewItem = ({ review }) => {

    const { _id, photoURL, tourist, serviceName, message, rating, email } = review;


    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                photoURL &&
                                <img src={photoURL} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{tourist}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Rating: {rating}</span>
            </td>
            <td>{message}</td>
        </tr>
    );
};

export default ReviewItem;