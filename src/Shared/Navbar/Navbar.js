import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../Assets/PP/mylogo.png';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'><HiOutlineHome />Home</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <img src={logo} alt="" className='h-14' />
            </div>
        </div>
    );
};

export default Navbar;