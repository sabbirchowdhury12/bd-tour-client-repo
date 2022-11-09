import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitle } from '../../hooks/useTitle';

const Register = () => {

    useTitle('register');
    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserUpadateProfile(name);
                form.reset();
            }).catch(err => console.log(err));
    };

    const handleUserUpadateProfile = (name) => {
        const profile = {
            displayName: name,
        };
        updateUserProfile(profile)
            .then(() => { })
            .then(error => console.error(error));
    };


    return (
        <div className='container mx-auto p-10 bg-gray-900 mt-20 rounded-md'>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
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
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>

            <p className='text-white text-center'>If You have already a account. Please <Link to='/login' className='underline'>Login</Link></p>
        </div>
    );
};

export default Register;