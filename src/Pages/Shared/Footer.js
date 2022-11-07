import React from 'react';
import { FaInbox, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaSkype } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="bg-emerald-300 py-16">
            <div className="grid lg:grid-cols-3 w-9/12 mx-auto">
                <div className='text-xl'>
                    <div to='/' className="font-extrabold normal-case text-5xl flex items-center">
                        <img src="https://i.ibb.co/mTCFtmw/Travel-logo.png" className='w-44' alt="" />
                    </div>
                    <h2 className='text-3xl'>Caribbean Ct.</h2>
                    <h4 className='text-emerald-800 mb-5'>Haymarket, Virginia (VA).</h4>
                    <h4><FaInbox className='inline mr-2 text-emerald-800' /><span>traveltrakl@gmail.com</span></h4>
                    <h4 className='mb-5'><FaPhone className='inline mr-2 text-emerald-800' /><span>(970) 262-1413</span></h4>

                    <div className='flex mt-5'>
                        <FaFacebookF className='m-2' />
                        <FaInstagram className='m-2' />
                        <FaTwitter className='m-2' />
                        <FaSkype className='m-2' />
                    </div>
                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-emerald-800 font-bold mb-5'>Support</h2>
                    <h4>Contact Us</h4>
                    <h4>Knowledge Base</h4>
                    <h4>About Us</h4>
                    <h4>FAQ</h4>
                </div>
                <div className='text-xl' style={{ lineHeight: '40px' }}>
                    <h2 className='text-2xl text-emerald-800 font-bold mb-5'>Quick Links</h2>
                    <h4>Privacy Policy</h4>
                    <h4>Discussion</h4>
                    <h4>Terms & Conditions</h4>
                    <h4>Student Support</h4>
                </div>
            </div>
            <hr className='' />
            <p className='text-center mt-5'>Copyright ©2022 TravelTrek.com All Rights Reserved</p>
        </div>
    );
};

export default Footer;