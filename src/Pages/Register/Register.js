import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const { createUserWithEmail } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form.name);
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(err => console.log(err));

    };
    return (
        <div className='container mx-auto p-10 bg-slate-700'>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
};

export default Register;