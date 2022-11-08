import React from 'react';

const Login = () => {
    return (
        <div className='container mx-auto p-10 bg-slate-700'>
            <form >
                <input type="text" placeholder="name" name='name' className="input input-bordered block w-full" />
                <input type="text" placeholder="email" name='email' className="input input-bordered block my-3 w-full" />
                <input type="text" placeholder="password" className="input input-bordered w-full " />
                <button type='submit' className='btn mt-4'>Submit</button>
            </form>
        </div>
    );
};

export default Login;