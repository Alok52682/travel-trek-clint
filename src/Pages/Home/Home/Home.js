import React from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <Banner />
            <Services />
        </div>
    );
};

export default Home;