import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineDownload } from 'react-icons/hi';
import resume from '../../Assets/KaiserTanveerResume.pdf';
import useTitle from '../../MyHooks/useTitle';
import {
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
} from 'react-icons/fa';

const socialLinks = [
    { href: 'mailto:kaisertanveer0@gmail.com', icon: <FaEnvelope />, label: 'Email' },
    { href: 'https://web.facebook.com/Kaiser2581', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/kaiser-tanveer/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: 'https://github.com/Kaiser-Tanveer', icon: <FaGithub />, label: 'GitHub' },
];

const BOOT_LINES = [
    'booting portfolio.exe',
    'loading modules: react, node, express, mongodb',
    'session ready',
];

// Single, orchestrated boot-sequence typing effect — runs once on mount.
const useBootLine = () => {
    const [text, setText] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) {
            setText(BOOT_LINES[BOOT_LINES.length - 1]);
            setDone(true);
            return;
        }
        let li = 0, ci = 0, timeoutId;
        const tick = () => {
            if (li >= BOOT_LINES.length) { setDone(true); return; }
            setText(BOOT_LINES[li].slice(0, ci));
            ci++;
            if (ci <= BOOT_LINES[li].length) {
                timeoutId = setTimeout(tick, 16);
            } else {
                li++; ci = 0;
                timeoutId = setTimeout(tick, li >= BOOT_LINES.length ? 0 : 260);
            }
        };
        tick();
        return () => clearTimeout(timeoutId);
    }, []);

    return { text, done };
};

const Banner = () => {
    useTitle('Home');
    const { text, done } = useBootLine();

    return (
        <div className="w-[92%] lg:w-5/6 mx-auto pt-[70px] pb-16">
            <div className="text-xs text-hack-textDim mb-2 min-h-[1.4em]">
                {text}{done && <span className="text-hack-green"> ... done</span>}
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-11 items-start">
                <div className="border border-hack-line rounded-lg overflow-hidden bg-hack-panel">
                    <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-hack-line bg-hack-panel2">
                        <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                        <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                        <i className="w-2.5 h-2.5 rounded-full bg-[#2A3B32] inline-block" />
                        <span className="ml-2 text-xs text-hack-textFaint">profile.jpg</span>
                    </div>
                    <img
                        src="https://i.ibb.co.com/7xS3TCS5/j3NAK.jpg"
                        alt="Kaiser Tanveer"
                        loading="lazy"
                        className="order-1 lg:order-1 w-full max-h-[26rem] object-cover"
                    />
                    <div className="flex justify-between px-4.5 py-3.5 border-t border-dashed border-hack-line text-xs text-hack-textDim">
                        <span>
                            <span className="w-[7px] h-[7px] rounded-full bg-hack-green inline-block mr-1.5 align-middle shadow-[0_0_8px_#3CFF9A] animate-pulse2" />
                            status: open to work
                        </span>
                        <span>1+ yrs exp</span>
                    </div>
                </div>
                
                <div>
                    <div className="text-xs text-hack-textFaint mb-3.5">
                        <span className="text-hack-green">$</span> whoami
                    </div>
                    <h1 className="text-[1.9rem] md:text-5xl leading-tight text-hack-greenBright font-semibold mb-5">
                        MERN Stack Developer building{' '}
                        <span className="text-hack-green [text-shadow:0_0_18px_rgba(60,255,154,0.35)]">
                            fast, reliable
                        </span>{' '}
                        web applications.
                    </h1>
                    <p className="text-sm text-hack-textDim max-w-[62ch] mb-7">
                        MongoDB · Express · React · Node — I own interfaces end to end, from component
                        architecture down to the API that feeds them. Clean code, no shortcuts.
                    </p>

                    <div className="flex items-center gap-4 flex-wrap mb-6">
                        <a
                            href="#projects"
                            className="bg-hack-green text-[#031007] font-bold text-sm px-5 py-3 rounded"
                        >
                            view_projects()
                        </a>
                        <a
                            href={resume}
                            download
                            aria-label="Download Resume"
                            className="border border-hack-line text-hack-green text-sm px-5 py-3 rounded flex items-center gap-2"
                        >
                            download resume.pdf <HiOutlineDownload />
                        </a>
                    </div>

                    <div className="flex gap-3">
                        {socialLinks.map(({ href, icon, label }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-9 h-9 border border-hack-line rounded flex items-center justify-center text-hack-textDim hover:text-hack-green hover:border-hack-green transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;