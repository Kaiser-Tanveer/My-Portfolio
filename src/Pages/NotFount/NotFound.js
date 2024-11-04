import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/PP/mylogo.png';
import notFoundBg from '../../Assets/PP/notFoundBg.jpg';
import BtnComponent from '../../Components/BtnComponent/BtnComponent';

const NotFound = () => {
    return (
        <div className='w-[100vw] h-[100vh] py-64 mx-auto' style={{ backgroundImage: `url(${notFoundBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='divider mx-auto'>
                <img src={logo} alt="" className='w-40' />
            </div>
            <br />
            <div className='mx-auto'>
                <h2 className='text-5xl font-semibold text-center text-gray-100'><span className='text-emerald-500 text-6xl'>404</span> Page Not Found</h2>
                <Link to="/" className='flex justify-center mt-4'><BtnComponent>Return Home</BtnComponent></Link>
            </div>
        </div>
    );
};

export default NotFound;