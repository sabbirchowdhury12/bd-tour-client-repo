import React from 'react';

const MyReviewItem = ({ review, handleDelete }) => {

    const { tourist, serviceName, message, _id } = review;

    return (
        <tr>
            <th> <button onClick={() => handleDelete(_id)}>X</button> </th>
            <td>{tourist}</td>
            <td>{serviceName}</td>
            <td>{message}</td>
            <td>Update</td>
        </tr>
    );
};

export default MyReviewItem;