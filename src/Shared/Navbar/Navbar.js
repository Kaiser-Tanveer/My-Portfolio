import React from 'react';
import { HiMenu, HiOutlineBriefcase, HiOutlineHome, HiPhoneMissedCall, HiOutlineChartBar, HiOutlineTable, HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../Assets/PP/mylogo.png';

const Navbar = () => {

    const menuItems = <>
        <div className='group duration-500'>
            <li className='group-hover:blur-sm hover:transition-all hover:!blur-none hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><Link to='/'><HiOutlineHome /><span className='hideDrawer group-hover:block lg:hidden'>Home</span></Link></li>
            <li className='group-hover:blur-sm hover:transition-all hover:!blur-none hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><Link to='/projects'><HiOutlineBriefcase /><span className='hideDrawer group-hover:block lg:hidden'>Projects</span></Link></li>
            <li className='group-hover:blur-sm hover:transition-all hover:!blur-none hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><Link to='/contacts'><HiPhoneMissedCall /><span className='hideDrawer group-hover:block lg:hidden'>Contacts</span></Link></li>
            <li className='group-hover:blur-sm hover:transition-all hover:!blur-none hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><Link to='/skills'><HiOutlineChartBar /><span className='hideDrawer group-hover:block lg:hidden'>Skills</span></Link></li>
            <li className='group-hover:blur-sm hover:transition-all hover:!blur-none hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><Link to='/about'><HiOutlineUser /><span className='hideDrawer group-hover:block lg:hidden'>About</span></Link></li>
            <li className='group-hover:blur-sm hover:transition-all hover:!blur-none hover:duration-500 hover:shadow-md hover:shadow-gray-200 showDrawer mb-2 border border-emerald-500 text-xl hover:bg-emerald-500 rounded-md text-white'><Link to='/blog'><HiOutlineTable /><span className='hideDrawer group-hover:block lg:hidden'>Blog</span></Link></li>
        </div>
    </>
    return (
        <div className="navbar lg:w-4/5 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <HiMenu className='text-2xl lg:hidden text-white' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white">
                        {menuItems}
                    </ul>
                </div>
                <div className="hidden lg:flex ">
                    <ul className="menu lg:fixed z-30 menu-vertical -ml-40">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end justify-end">
                <img src={logo} alt="" className='h-14 lg:fixed lg:-mr-32 lg:mt-10' />
            </div>
        </div>
    );
};

export default Navbar;