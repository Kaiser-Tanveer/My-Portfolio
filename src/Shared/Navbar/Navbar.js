import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    { to: '/', label: 'home' },
    { to: '/api/projects', label: 'projects' },
    { to: '/skills', label: 'skills' },
    { to: '/about', label: 'about' },
    { to: '/blog', label: 'blog' },
    { to: '/contacts', label: 'contact' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-[rgba(5,8,6,0.86)] backdrop-blur-md border-b border-[color:var(--line)]">
            <nav className="w-[92%] max-w-[1100px] mx-auto flex items-center justify-between h-[58px] text-[13px]">
                <Link to="/" className="text-[color:var(--green)] whitespace-nowrap">
                    kaiser<span className="text-[color:var(--text-dim)]">@tanveer:~$</span>
                    <span className="cursor-blink ml-1"></span>
                </Link>

                <ul className="hidden lg:flex gap-6 text-[color:var(--text-dim)]">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to} className="hover:text-[color:var(--green)] transition-colors">
                                <span className="text-[color:var(--text-faint)]">./</span>{label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    className="lg:hidden border border-[color:var(--line)] text-[color:var(--green)] rounded px-3 py-1.5 text-xs"
                >
                    menu
                </button>
            </nav>

            {open && (
                <ul className="w-[92%] max-w-[1100px] mx-auto flex flex-col gap-0.5 pb-4 lg:hidden">
                    {links.map(({ to, label }) => (
                        <li key={to} className="border-b border-dashed border-[color:var(--line-soft)]">
                            <Link
                                to={to}
                                onClick={() => setOpen(false)}
                                className="block py-2 px-1 text-[color:var(--text-dim)] hover:text-[color:var(--green)]"
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