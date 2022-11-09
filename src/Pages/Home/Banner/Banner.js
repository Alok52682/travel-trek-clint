import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// banner section for home page
const Banner = () => {
    return (
        <div className='md:flex bg-emerald-200 p-10 items-center rounded-xl'>
            <div className=''>
                <h2 className='text-emerald-700 font-extrabold text-2xl md:text-3xl mb-4'>Explore the World!</h2>

                <h1 className='text-4xl md:text-6xl font-bold'>Let's Make Your <br />best trip Ever!</h1>

                <div className='md:w-2/3 my-6 text-emerald-700 font-bold'>
                    <p>Though we travel the world over to find the beautiful, we must carry it with us, or we find it not.</p>
                </div>
                <Link to='/services' className="btn btn-success mb-5">Explore more<FaArrowRight className='md:ml-2' /></Link>
            </div>
            <div>
                <img src="https://i.ibb.co/S3G6NnQ/banner-image.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;