import React from 'react';

const OfferSection = () => {
    return (
        <div className='mt-10 text-center'>
            <h2 className='text-emerald-700 font-extrabold text-2xl md:text-3xl'>SPECIAL TRAVEL OFFER</h2>
            <h1 className='m-5 font-extrabold text-4xl md:text-6xl'>SPECIAL TRAVEL OFFER</h1>
            <p className='text-sm'>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, <br />odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
            <div className='w-10/12 md:w-full mx-auto mt-14 md:grid grid-cols-3 gap-10'>
                <div className='relative mb-28'>
                    <img src="https://i.ibb.co/V0GmpZG/img9.jpg" className='w-full h-[450px]' alt="" />
                    <div className='text-start p-6 m-5 bg-white absolute bottom-[-70px] shadow-2xl'>
                        <h3 className='text-xl font-bold text-emerald-500 hover:text-red-500 mb-2'>CANADA</h3>
                        <h2 className='text-2xl hover:text-blue-900 font-semibold mb-4'>Experience the natural beauty of glacier</h2>
                        <p className='text-red-500 font-semibold'>Price: <span className='line-through'>$1500</span> $1200</p>
                    </div>
                    <div className='absolute top-[-30px] right-[-20px] md:right-[-30px] bg-red-500 text-center rounded-full p-5'>
                        <h2 className='text-white font-extrabold'>20% <br /> off</h2>
                    </div>
                </div>
                <div className='relative mb-28'>
                    <img src="https://i.ibb.co/1J2cDzD/img10.jpg" className='w-full h-[450px]' alt="" />
                    <div className='text-start p-6 m-5 bg-white absolute bottom-[-70px] shadow-2xl'>
                        <h3 className='text-xl font-bold text-emerald-500 hover:text-red-500 mb-2'>NEW ZEALAND</h3>
                        <h2 className='text-2xl hover:text-blue-900 font-semibold mb-4'>Trekking to the mountain camp site</h2>
                        <p className='text-red-500 font-semibold'>Price: <span className='line-through'>$1300</span> $1105</p>
                    </div>
                    <div className='absolute top-[-30px] right-[-20px] md:right-[-30px] bg-red-500 text-center rounded-full p-5'>
                        <h2 className='text-white font-extrabold'>15% <br /> off</h2>
                    </div>
                </div>
                <div className='relative mb-28'>
                    <img src="https://i.ibb.co/hHGgZzC/img11.jpg" className='w-full h-[450px]' alt="" />
                    <div className='text-start p-6 m-5 bg-white absolute bottom-[-70px] shadow-2xl'>
                        <h3 className='text-xl font-bold text-emerald-500 hover:text-red-500 mb-2'>MALAYSIA</h3>
                        <h2 className='text-2xl hover:text-blue-900 font-semibold mb-4'>Sunset view of beautiful lakeside city</h2>
                        <p className='text-red-500 font-semibold'>Price: <span className='line-through'>$1800</span> $1476</p>
                    </div>
                    <div className='absolute top-[-30px] right-[-20px] md:right-[-30px] bg-red-500 text-center rounded-full p-5'>
                        <h2 className='text-white font-extrabold'>15% <br /> off</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;