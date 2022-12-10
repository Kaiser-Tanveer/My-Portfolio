import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile shadow-lg">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu w-[50vw] lg:w-20 bg-slate-800 lg:bg-inherit lg:border-r px-4 border-r-emerald-500 text-base-content">
                        <li><Link to='/'><HiOutlineHome className='text-xl' /> <span className='lg:hidden text-xl'>Home</span></Link></li>
                        <li><Link><HiOutlineUser className='text-xl' /> <span className='lg:hidden text-xl'>About</span></Link></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Main;