import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, place, price, image, description } = useLoaderData();

    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className="card md:card-side bg-base-100 shadow-xl">
                <div className='md:w-5/12'><img src={image} className='w-full h-full md:rounded-l-xl' alt="Album" /></div>
                <div className="card-body md:w-7/12">
                    <h2 className="card-title text-4xl">{title}</h2>
                    <div className='my-5'>
                        <p className='text-2xl text-emerald-600 font-bold'>{place}</p>
                        <p className='text-emerald-600 text-2xl font-bold md:my-5'>Charge: ${price}</p>
                    </div>
                    <div className="card-actions">
                        <p className=''>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;