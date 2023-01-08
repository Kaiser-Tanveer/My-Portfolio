import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='scroll-smooth'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;