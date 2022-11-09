import React from 'react';
import { Children } from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    // if (loading) {
    //     // return <div className='text-center mt-5'>
    //     //     <Spinner animation="border" variant="primary" />
    //     // </div>;
    // }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    else {
        return children;
    }
};

export default PrivateRoutes;