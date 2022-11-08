import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Booking from '../Booking/Booking';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Helmet>
                <title>Travel treck - Home</title>
            </Helmet>
            <Banner />
            <Services />
            <Booking />
            <About />
        </div>
    );
};

export default Home;