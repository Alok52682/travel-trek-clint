import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(authContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { }).catch(err => { })
    }
    const navItems = <>

        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
            } to='/services'>Services</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
            } to='/addservice'>Add Service</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
            } to='/about'>Blog</NavLink></li>

    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-32 h-2">
                    <img src="https://i.ibb.co/mTCFtmw/Travel-logo.png" className='w-42' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {!user?.uid ?
                    <Link to='/login' className="btn btn-ghost  text-emerald-500">Log In</Link>
                    :
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='Profile' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    {user?.displayName}
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><Link onClick={handelLogOut}>Log Out</Link></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navber;