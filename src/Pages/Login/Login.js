import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {

    const { signWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleWithGoogle = () => {

        signWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(err => console.error(err));
    };

    return (
        <div className='container mx-auto p-10 bg-slate-700'>
            <form >
                <input type="text" placeholder="name" name='name' className="input input-bordered block w-full" />
                <input type="text" placeholder="email" name='email' className="input input-bordered block my-3 w-full" />
                <input type="text" placeholder="password" className="input input-bordered w-full " />
                <button type='submit' className='btn mt-4'>Submit</button>
            </form>
            <div className='text-center my-2 text-white text-2xl'>
                <button onClick={handleWithGoogle} className='btn'>  <FaGoogle > </FaGoogle> <span className='ml-1'>SignIn Wth Google </span> </button>
            </div>
        </div>
    );
};

export default Login;