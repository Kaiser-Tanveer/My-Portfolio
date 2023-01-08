import React from 'react';
import logo from '../../Assets/PP/mylogo.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-800 text-primary-content">
            <div>
                <img src={logo} alt="" className='w-20' />
                <p className="font-bold">
                    Providing Web Development Service since 2022
                </p>
                <p>&copy; 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;