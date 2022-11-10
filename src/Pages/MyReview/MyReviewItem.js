import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewItem = ({ review, handleDelete }) => {

    const { tourist, serviceName, message, _id } = review;

    return (
        <tr>
            <th> <button className='text-secondary' onClick={() => handleDelete(_id)}>X</button> </th>
            <td>{tourist}</td>
            <td>{serviceName}</td>
            <td>{message}</td>
            <td><Link to={`/update/${_id}`}><button className='text-secondary'>Update</button></Link></td>
        </tr>
    );
};

export default MyReviewItem;