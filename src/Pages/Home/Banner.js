import React, { useEffect, useRef } from 'react';
import BtnComponent from '../../Components/BtnComponent/BtnComponent';
import resume from '../../Assets/KaiserTanveerResume.pdf';
import useTitle from '../../MyHooks/useTitle';
import {
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPhone,
} from 'react-icons/fa';

const socialLinks = [
    { href: 'mailto:kaisertanveer0@gmail.com', icon: <FaEnvelope />, label: 'Email' },
    { href: 'https://web.facebook.com/Kaiser2581', icon: <FaFacebookF />, label: 'Facebook' },
    { href: 'https://www.linkedin.com/in/kaiser-tanveer/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: 'https://github.com/Kaiser-Tanveer', icon: <FaGithub />, label: 'GitHub' },
    { href: 'tel:+8801851072581', icon: <FaPhone className="rotate-180" />, label: 'Phone' },
];

const Banner = () => {
    useTitle('Home');
    const bootRef = useRef(null);

    // Boot-sequence typing effect — a single orchestrated moment on load.
    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const el = bootRef.current;
        if (reduceMotion || !el) {
            if (el) el.innerHTML = 'session ready <span class="text-[color:var(--green)]">... done</span>';
            return;
        }
        const lines = [
            'booting portfolio.exe',
            'loading modules: react, node, express, mongodb',
            'session ready',
        ];
        let li = 0, ci = 0, timeoutId;
        const typeLine = () => {
            if (li >= lines.length) {
                el.innerHTML = lines[lines.length - 1] + '<span class="text-[color:var(--green)]"> ... done</span>';
                return;
            }
            el.textContent = lines[li].slice(0, ci);
            ci++;
            if (ci <= lines[li].length) {
                timeoutId = setTimeout(typeLine, 16);
            } else {
                li++; ci = 0;
                timeoutId = setTimeout(typeLine, li >= lines.length ? 0 : 260);
            }
        };
        typeLine();
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="w-[92%] max-w-[1100px] mx-auto pt-[70px] pb-10">
            <div ref={bootRef} className="text-[13px] text-[color:var(--text-dim)] mb-2 min-h-[1.4em]"></div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-11 items-start">
                <div>
                    <div className="text-[12px] text-[color:var(--text-faint)] mb-3.5">
                        <span className="text-[color:var(--green)]">$</span> whoami
                    </div>
                    <h1 className="font-semibold text-[color:var(--green-bright)] text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.18] mb-5">
                        MERN Stack Developer building <span className="hl-green">fast, reliable</span> web applications.
                    </h1>
                    <p className="text-[14.5px] text-[color:var(--text-dim)] max-w-[62ch] mb-7">
                        MongoDB &middot; Express &middot; React &middot; Node — I own interfaces end to end,
                        from component architecture down to the API that feeds them. Clean code, no shortcuts.
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                        <a href={resume} download aria-label="Download Resume">
                            <BtnComponent>download resume.pdf</BtnComponent>
                        </a>
                        <a
                            href="#projects"
                            className="text-[13px] border border-[color:var(--line)] text-[color:var(--green)] rounded-md px-5 py-3 hover:border-[color:var(--green)] transition-colors"
                        >
                            view_projects()
                        </a>
                    </div>

                    <div className="flex gap-3 mt-6">
                        {socialLinks.map(({ href, icon, label }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                aria-label={label}
                                className="w-9 h-9 border border-[color:var(--line)] rounded-md flex items-center justify-center text-[color:var(--text-dim)] hover:text-[color:var(--green)] hover:border-[color:var(--green)] transition-colors text-[13px]"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="win">
                    <div className="win-bar"><i></i><i></i><i></i><div className="win-title">profile.txt</div></div>
                    <pre className="m-0 p-5 text-[10px] leading-[1.15] text-[color:var(--green-dim)] overflow-x-auto">
{`┌──────────────────┐
│                  │
│                  │
│       K T        │
│                  │
│                  │
└──────────────────┘`}
                    </pre>
                    <div className="px-4.5 py-3.5 border-t border-dashed border-[color:var(--line)] text-[12px] text-[color:var(--text-dim)] flex justify-between">
                        <span><span className="pulse-dot mr-1.5"></span>status: open to work</span>
                        <span>1+ yrs exp</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;