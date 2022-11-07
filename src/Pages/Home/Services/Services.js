import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-10 text-center'>
            <h2 className='text-emerald-700 font-extrabold text-2xl md:text-3xl'>TOP DESTINATIONS</h2>
            <h2 className='m-5 font-extrabold text-4xl md:text-6xl'>Explore the Beauty of <br /> The World</h2>
            <div className='md:grid grid-cols-3 gap-4 mt-5 m-5'>
                {
                    services && services.map(service => {
                        return (
                            <div key={service.id} className="card glass text-start rounded-sm mb-5">
                                <div className='h-4/6'>
                                    <img src={service.image} className='h-full w-full rounded-tl-sm rounded-tr-sm' alt="car!" />
                                </div>
                                <div className="card-body h-2/6">
                                    <div className='h-1/2'>
                                        <h2 className="card-title">{service.title}</h2>
                                    </div>
                                    <div className="card-actions justify-between items-center h-1/2">
                                        <p className='font-semibold text-emerald-600'>Price: ${service.price}</p>
                                        <button className="btn btn-success">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/services' className="btn btn-outline btn-success">see all</Link>
        </div>
    );
};

export default Services;