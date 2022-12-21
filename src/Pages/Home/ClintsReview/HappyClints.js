import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';

const HappyClints = () => {
    return (
        <div className='text-center w-10/12 mx-auto my-10'>
            <h2 className='text-2xl md:text-5xl font-bold leading-tight mt-5'>Happy Clints</h2>
            <div className="divider w-1/2 my-10 mx-auto"><FaRegHeart className='text-5xl text-slate-400' /></div>
            <div className='md:flex gap-5 justify-around items-center mt-7 snap-x'>
                <div className='border p-5 rounded-xl text-start md:w-96 h-[400px] relative'>
                    <img src="https://i.ibb.co/HC5Pscv/7350737.png" className='w-10 mt-3' alt="" />
                    <div>
                        <p>Excellent private tour. Our guide was incredibly knowledgable and gave us a fantastic day in Riga. We learnt about history, art, culture and much more. We are well traveled and have high standards, and we were very happy with our tour guide - she was great and spoke excellent English. Time and money well invested.</p>
                    </div>
                    <div className='absolute bottom-5'>
                        <p className='text-xl font-semibold mt-4 text-emerald-500'>Alex Mathue</p>
                        <p className='text-warning flex items-center'>< FaStar />< FaStar />< FaStar />< FaStar />< FaStar /></p>
                    </div>
                </div>
                <div className='border p-5 rounded-xl text-start my-5 md:w-96 h-[400px] relative'>
                    <img src="https://i.ibb.co/HC5Pscv/7350737.png" className='w-10 mt-3' alt="" />
                    <div>
                        <p>An excellent tour with more than just an overview of Riga. Old town is fascinating with some great stories and ideas for further exploring. Art Nouveau district is a gem! The real treat was the markets with a great introduction to this mammoth market. Highly recommend</p>
                    </div>
                    <div className='absolute bottom-5'>
                        <p className='text-xl font-semibold mt-4 text-emerald-500'>Alexis Mac</p>
                        <p className='text-warning flex items-center'>< FaStar />< FaStar />< FaStar />< FaStar />< FaStar /></p>
                    </div>
                </div>
                <div className='border p-5 rounded-xl text-start md:w-96 h-[400px] relative'>
                    <img src="https://i.ibb.co/HC5Pscv/7350737.png" className='w-10 mt-3' alt="" />
                    <div>
                        <p>Our guide Edita was lovely and charming on our 3.5 hour trip, we got to choose what we wanted to see and even stop for coffee as it was cold, a great tour would highly recommend it.</p>
                    </div>
                    <div className='absolute bottom-5'>
                        <p className='text-xl font-semibold mt-4 text-emerald-500'>Alok Rajbongshi</p>
                        <p className='text-warning flex items-center'>< FaStar />< FaStar />< FaStar />< FaStar />< FaStar /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyClints;