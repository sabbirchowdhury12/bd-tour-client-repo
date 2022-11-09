import React from 'react';
import { Children } from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='h-screen text-center mt-20'>
            <progress className="progress w-56  "></progress>
        </div>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    else {
        return children;
    }
};

export default PrivateRoutes;