import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {



    const navItems = <>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : 'text-emerald-500'
            } to='/home'>Home</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
            } to='/about'>About</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
            } to='/services'>Services</NavLink></li>
        <li className='font-semibold mr-3'><NavLink
            className={({ isActive }) =>
                isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
            } to='/orders'>Orders</NavLink></li>
        {
            <li className='font-semibold mr-3'><NavLink
                className={({ isActive }) =>
                    isActive ? 'bg-emerald-500 text-white' : ' text-emerald-500'
                } to='/login'>Log In</NavLink></li>

        }
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
                <Link className="btn bg-white border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white hover:border-none font-bold">name</Link>
            </div>
        </div>
    );
};

export default Navber;