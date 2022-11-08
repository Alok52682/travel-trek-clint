import React, { useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch(`http://localhost:4000/services?size=${3}`)
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
                            <div key={service._id} className="card glass text-start rounded-sm mb-5">
                                <PhotoProvider className='h-3/5'>
                                    <PhotoView src={service.image}>
                                        <img src={service.image} className='h-full w-full rounded-tl-sm rounded-tr-sm' alt="car!" /></PhotoView>
                                </PhotoProvider>
                                <div className="card-body h-2/5">
                                    <div className=''>
                                        <h2 className="card-title">{service.title}</h2>
                                        <p>{service.description.slice(0, 100) + '...'}</p>
                                    </div>
                                    <div className="card-actions justify-between items-center mb-3">
                                        <p className='font-semibold text-emerald-600'>Charge: ${service.price}</p>
                                        <Link to={`service/${service._id}`} className="btn btn-success">View details</Link>
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