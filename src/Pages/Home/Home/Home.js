import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Banner/Services/Services';
import Booking from '../Booking/Booking';

const Home = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Banner />
            <Services />
            <Booking />
        </div>
    );
};

export default Home;