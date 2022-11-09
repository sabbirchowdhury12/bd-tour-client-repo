import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';

const Login = () => {

    useTitle('login');
    const { signWithGoogle, loginWithEmail } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error);
            });
    };

    const handleWithGoogle = () => {
        signWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(err => console.error(err));
    };

    return (
        <div className='container mx-auto p-10 bg-gray-800 mt-20 rounded-md'>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
            </form>
            <div className='text-center my-2 text-white text-2xl'>
                <button onClick={handleWithGoogle} className='btn  btn-primary btn-outline text-white'>  <FaGoogle > </FaGoogle> <span className='ml-1'>SignIn Wth Google </span> </button>
            </div>
            <p className='text-white text-center'>If You have don't ant account. Please <Link to='/register' className='underline'>Regester</Link></p>
        </div>
    );
};

export default Login;

