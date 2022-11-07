import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Booking from '../Booking/Booking';

const Home = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Banner />
            <Services />
            <Booking />
            <About />
        </div>
    );
};

export default Home;