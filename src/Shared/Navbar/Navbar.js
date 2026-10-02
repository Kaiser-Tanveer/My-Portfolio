import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    { to: '/', label: 'home' },
    { to: '/api/projects', label: 'projects' },
    { to: '/skills', label: 'skills' },
    { to: '/contacts', label: 'contact' },
    { to: '/about', label: 'about' },
    { to: '/blog', label: 'blog' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-hack-bg/90 backdrop-blur-md border-b border-hack-lineSoft">
            <nav className="w-[92%] lg:w-5/6 mx-auto h-[58px] flex items-center justify-between text-sm">
                <Link to="/" className="text-hack-green whitespace-nowrap">
                    kaiser<span className="text-hack-textDim">@tanveer:~$</span>
                    <span className="inline-block w-[7px] h-[14px] bg-hack-green align-middle ml-1 animate-blink" />
                </Link>

                <ul className="hidden lg:flex gap-6 text-hack-textDim">
                    {links.map(({ to, label }) => (
                        <li key={to} className="hover:text-hack-green transition-colors">
                            <Link to={to}>
                                <span className="text-hack-textFaint">./</span>{label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden border border-hack-line text-hack-green rounded px-2.5 py-1.5 text-xs"
                    aria-expanded={open}
                >
                    menu
                </button>
            </nav>

            {open && (
                <ul className="lg:hidden w-[92%] mx-auto flex flex-col pb-4">
                    {links.map(({ to, label }) => (
                        <li key={to} className="border-b border-dashed border-hack-lineSoft">
                            <Link
                                to={to}
                                onClick={() => setOpen(false)}
                                className="block py-2.5 text-hack-textDim hover:text-hack-green"
                            >
                                ./{label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navbar;