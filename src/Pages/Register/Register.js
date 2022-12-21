import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Register = () => {

    const { createUser, updateUser } = useContext(authContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [showSuggession, setShowSuggession] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passError, setPassError] = useState({
        oneUpperCase: "At least one upper case",
        oneDegit: "At least one digit",
        oneSepcial: "At least one special character",
        eightCharecters: "Please give atleast 8 charecter"
    })

    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = enteredPassword;

        createUser(email, password)
            .then(result => {
                updateUser(username, photoURL)
                    .then(() => console.log('profile Updated'))
                    .catch(err => console.log(err))
                console.log(result.user);
                toast.success('Registration Successful.');
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(err => toast.error(err.message))
    }

    const handelOnChangePassword = event => {
        let pass = event.target.value;
        setShowSuggession(true);
        // this is for password validation
        if (/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass)) {
            setPassError({ oneUpperCase: " ", oneDegit: " ", oneSepcial: " ", eightCharecters: " " });
            setShowSuggession(false);
        }
        setEnteredPassword(pass);
        pass = "";
    }

    return (
        <div>
            <Helmet>
                <title>Travel trek - Register</title>
            </Helmet>
            <div className='py-6'>
                <div className="flex overflow-hidden mx-auto max-w-sm lg:max-w-4xl gap-4 items-center justify-center p-10">
                    <div className="w-full p-8 lg:w-1/2 border shadow-xl rounded-xl">
                        <h2 className="text-2xl font-bold text-emerald-600 text-center">Travel trek</h2>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <form onSubmit={handelSignUp}>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='name' placeholder='Username' required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">PhotoURL</label>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name='photoURL' placeholder='PhotoUrl' required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name='email' placeholder='Enter Email Address' required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                </div>
                                <input onChange={handelOnChangePassword} className="bg-emerald-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name='password' placeholder='********' required />
                                <div className={showSuggession ? 'block' : 'hidden'}>
                                    <ul>
                                        <li><small>{passError.oneUpperCase}</small></li>
                                        <li><small>{passError.oneDegit}</small></li>
                                        <li><small>{passError.oneSepcial}</small></li>
                                        <li><small>{passError.eightCharecters}</small></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button type='submit' className="btn bg-emerald-500 border-none hover:bg-emerald-700 w-full rounded-xl">Register</button>
                            </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/login" className="text-xs text-gray-500 uppercase">or sign in</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;