import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
            }).catch(err => console.error(err));
    };

    return (
        <div className="navbar bg-transparent container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.uid && <>
                                <li><Link to='/blog'>My reviews</Link></li>
                                <li><Link to='/blog'>Add service</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">BD TOUR</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.uid && <>
                            <li><Link to='/blog'>My reviews</Link></li>
                            <li><Link to='/blog'>Add service</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end text-xl font-bold">
                {
                    user?.uid ? <button className='hover:text-secondary' onClick={handleLogOut}>Logout</button> :
                        <>
                            <Link to='/login'><button className='mr-2 hover:text-primary'>Login</button></Link>
                            <Link to='/Register'><button className='mr-2 hover:text-primary' >Register</button></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;