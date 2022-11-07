import React from 'react';

const Booking = () => {
    return (
        <div className='my-10 rounded-3xl bg-emerald-500 text-center shadow-xl'>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-6 justify-around bg-white border p-5 rounded-t-3xl'>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/09CV0JT/Hotel-icon.png" className='w-14' alt="" />
                    <h2 className='text-xl font-semibold'>Hotels</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/WGW6L8F/Car-Rentals-icon.png" className='w-14' alt="" />
                    <h2 className='text-xl font-semibold'>Car Rentals</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/GR0M6jw/Flights-icon.png" className='w-14' alt="" />
                    <h2 className='text-xl font-semibold'>Flights</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/XDhbmQv/Trips-icon.png" className='w-14' alt="" />
                    <h2 className='text-xl font-semibold'>Trips</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/9c1hKR7/Cruises-icon.png" className='w-14' alt="" />
                    <h2 className='text-xl font-semibold'>Cruises</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/pJVLNsy/Activities-icon.png" className='w-14' alt="" />
                    <h2 className='text-xl font-semibold'>Activities</h2>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 m-5'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Destination</span>
                    </label>
                    <input type="text" placeholder="Destination" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Check in</span>
                    </label>
                    <input type="date" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Check out</span>
                    </label>
                    <input type="date" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Children</span>
                    </label>
                    <input type="number" placeholder="Number of children" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <button className="text-white text-bold bg-emerald-700 hover:bg-emerald-800 px-10 py-5 rounded-2xl mb-5 border-none">Book now</button>
        </div>
    );
};

export default Booking;