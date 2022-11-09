import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Login = () => {
    const { handleForgetPass, userLogIn, signWithGoogle } = useContext(authContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState('')

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                // getting jwt token by fetch
                fetch('https://b6a11-service-review-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        toast.success('Log in successfully')
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => alert(err.messege))
    }

    const googleLogIn = () => {
        signWithGoogle()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                // getting jwt token by fetch
                fetch('https://b6a11-service-review-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        toast.success('Log in successfully')
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => alert(err.messege))
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    return (
        <div>
            <Helmet>
                <title>Travel trek - Log In</title>
            </Helmet>
            <div className='py-6'>
                <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-4xl gap-4 items-center justify-center p-10">
                    <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-emerald-600 text-center">Travel trek</h2>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <Link onClick={googleLogIn} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-emerald-100">
                            <div className="md:px-4 py-3">
                                <img src={`https://cdn-icons-png.flaticon.com/512/2991/2991148.png`} alt='Google' className='w-5' />
                            </div>
                            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </Link>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <span className="text-xs text-center text-gray-500 uppercase">or login with email</span>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handelLogin}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input onBlur={handleEmailBlur} className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' placeholder='Enter Email Address' required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <Link onClick={() => handleForgetPass(email)} className="text-xs text-gray-500">Forget Password?</Link>
                                </div>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name='password' placeholder='********' required />
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-emerald-500 border-none hover:bg-emerald-700 w-full rounded-xl">Log In</button>
                            </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/register" className="text-xs text-gray-500 uppercase">or sign up</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;