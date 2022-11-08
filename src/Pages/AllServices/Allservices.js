import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Allservices = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
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
    );
};

export default Allservices;