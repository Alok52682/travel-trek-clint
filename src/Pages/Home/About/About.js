import React from 'react';

const About = () => {
    return (
        // about section for home pase
        <div className='my-16 mx-5 text-center md:text-start'>
            <h2 className='font-extrabold text-2xl md:text-3xl text-orange-600'>WHAT I SERVE</h2>
            <div className='md:flex items-center md:ml-28 gap-16 mt-5'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold'>TOP VALUES <br /> FOR YOU!</h1>
                </div>
                <div className='hidden md:block'>
                    <img src="https://i.ibb.co/vYrvc2R/Sec2-vector-img.png" alt="" />
                </div>
            </div>
            <div className='md:grid grid-cols-3 mt-10 gap-14'>
                <div className="card bg-emerald-100 shadow-xl items-center mb-5">
                    <div className='pt-5'>
                        <img src="https://i.ibb.co/PjnQWF9/Sec3-icon1.png" alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-center">Lot of Choices</h2>
                        <p>I will provide you the maximum number of tourist spots in tha world.</p>
                    </div>
                </div>
                <div className="card bg-emerald-100 shadow-xl items-center mb-5">
                    <div className='pt-5'>
                        <img src="https://i.ibb.co/St2YSJX/Sec3-icon2.png" alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-center">Best Tour Guide</h2>
                        <p>I will provide you the maximum number of tourist spots in tha world.</p>
                    </div>
                </div>
                <div className="card bg-emerald-100 shadow-xl items-center mb-5">
                    <div className='pt-5'>
                        <img src="https://i.ibb.co/zRDt5JS/Book-icon.png" alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-center">Easy Booking</h2>
                        <p>I will provide you the maximum number of tourist spots in tha world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;