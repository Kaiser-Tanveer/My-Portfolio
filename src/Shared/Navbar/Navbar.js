import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../Assets/PP/mylogo.png';

const Navbar = () => {
    return (
        <div className="navbar text-white">

            <label htmlFor="my-drawer-2" className="btn btn-ghost bg-slate-500 text-xl drawer-button lg:hidden"><HiMenu /></label>
            <Link className="btn btn-ghost normal-case text-xl flex ml-auto text-white"><img src={logo} alt="" /></Link>
        </div>
    );
};

export default Navbar;